import re
import time
from datetime import datetime
import requests
import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse, Response
from pydantic import BaseModel

from config import APP_TITLE, APP_VERSION, OLLAMA_BASE_URL, DEFAULT_MODEL, VOICE_CACHE_DIR, STATIC_DIR
from knowledge_base import INITIAL_PROTOCOLS, PROTOCOL_MAP, DRUG_INTERACTION_RULES
from clinical_engine import (
    calculate_news2_and_shock_index,
    calculate_precision_dosing,
    calculate_trauma_gcs_and_burn,
    run_precision_triage
)
from rag_engine import protocol_collection, compute_precision_embedding, query_chromadb_protocols
from database_ehr import insert_ehr_record, fetch_sorted_ehr_queue, clear_ehr_queue
from voice_engine import (
    split_into_clean_sentences,
    synthesize_single_chunk_mp3,
    build_multilingual_pack,
    build_drug_multilingual_pack,
    build_trauma_multilingual_pack
)

app = FastAPI(title=APP_TITLE, version=APP_VERSION)


class TriageRequest(BaseModel):
    situation: str
    patient_age: int = 19
    patient_weight_kg: float = 60.0
    heart_rate: int = 88
    spo2: int = 98
    systolic_bp: int = 120
    temp_f: float = 101.2
    consciousness: str = "Alert"
    language: str = "Telugu"
    model: str = DEFAULT_MODEL


class TtsRequest(BaseModel):
    text: str
    tl: str = "te"


class DrugCheckRequest(BaseModel):
    medications_text: str
    patient_age: int = 68
    patient_weight_kg: float = 65.0


class TraumaCalcRequest(BaseModel):
    eye: int = 4
    verbal: int = 5
    motor: int = 6
    weight_kg: float = 60.0
    burn_tbsa_pct: float = 25.0


class AddProtocolRequest(BaseModel):
    protocol_id: str
    title: str
    category: str
    content: str


def sanitize_llm_english_output(text: str) -> str:
    cleaned = re.sub(r"[\u0400-\u04FF]+", "", text)
    cleaned = re.sub(r"(?i)(telugu|tamil|hindi)\s+translation\s*:.*", "", cleaned, flags=re.DOTALL)
    return cleaned.strip()


@app.get("/favicon.ico")
def serve_favicon():
    svg_icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="#e11d48"/><path d="M13 7h6v6h6v6h-6v6h-6v-6H7v-6h6z" fill="#fff"/></svg>'
    return Response(content=svg_icon, media_type="image/svg+xml")


@app.get("/", response_class=HTMLResponse)
def serve_index():
    html_content = (STATIC_DIR / "index.html").read_text(encoding="utf-8")
    return HTMLResponse(content=html_content, headers={"Cache-Control": "no-store"})


@app.get("/static/styles.css")
def serve_css():
    return Response(content=(STATIC_DIR / "styles.css").read_text(encoding="utf-8"), media_type="text/css")


@app.get("/static/app.js")
def serve_js():
    return Response(content=(STATIC_DIR / "app.js").read_text(encoding="utf-8"), media_type="application/javascript")


@app.get("/api/health")
def check_system_health():
    ollama_online = False
    installed_models = []
    active_model = DEFAULT_MODEL
    try:
        res = requests.get(f"{OLLAMA_BASE_URL}/api/tags", timeout=3)
        if res.status_code == 200:
            ollama_online = True
            installed_models = [m.get("name", "") for m in res.json().get("models", [])]
            if installed_models and DEFAULT_MODEL not in installed_models:
                active_model = installed_models[0]
    except Exception:
        ollama_online = False

    queue_rows = fetch_sorted_ehr_queue()
    return {
        "status": "READY",
        "ollama_online": ollama_online,
        "installed_models": installed_models,
        "recommended_model": active_model,
        "chromadb_protocols": protocol_collection.count(),
        "cached_voices": len(list(VOICE_CACHE_DIR.glob("*.mp3"))),
        "queue_count": len(queue_rows),
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }


@app.post("/api/tts")
def generate_studio_voice(req: TtsRequest):
    try:
        mp3_bytes = synthesize_single_chunk_mp3(req.text, req.tl)
        return Response(content=mp3_bytes, media_type="audio/mpeg")
    except Exception as e:
        raise HTTPException(status_code=503, detail=str(e))


@app.post("/api/tts/precache")
def precache_all_demo_voices():
    for proto in INITIAL_PROTOCOLS:
        for tl_code, field in [("te", "te_native"), ("ta", "ta_native"), ("hi", "hi_native")]:
            script_text = proto.get(field)
            if script_text:
                for sentence in split_into_clean_sentences(script_text):
                    try:
                        synthesize_single_chunk_mp3(sentence, tl_code)
                    except Exception:
                        pass
    total_files = len(list(VOICE_CACHE_DIR.glob("*.mp3")))
    return {"message": f"Successfully cached {total_files} studio sentence MP3 files to local disk!", "cached_files": total_files}


@app.post("/api/trauma-calc")
def run_trauma_calculator(req: TraumaCalcRequest):
    res = calculate_trauma_gcs_and_burn(req.eye, req.verbal, req.motor, req.weight_kg, req.burn_tbsa_pct)
    res["speech_packs"] = build_trauma_multilingual_pack(res, req.weight_kg)
    return res


@app.get("/api/protocols")
def get_all_protocols():
    data = protocol_collection.get()
    items = []
    for pid, doc, meta in zip(data["ids"], data["documents"], data["metadatas"]):
        items.append({"id": pid, "title": meta.get("title", pid), "category": meta.get("category", "Clinical"), "golden_rule": meta.get("golden_rule", ""), "content": doc})
    items.sort(key=lambda x: x["id"])
    return {"total": len(items), "protocols": items}


@app.post("/api/protocols/add")
def add_custom_protocol(req: AddProtocolRequest):
    if not req.title.strip() or not req.content.strip():
        raise HTTPException(status_code=400, detail="Protocol Title and Content cannot be empty.")
    pid = req.protocol_id.strip() or f"HOSP-{int(time.time())}"
    combined = f"{req.title} {req.category} {req.content}"
    words = re.findall(r"[a-z0-9]{4,}", combined.lower())
    protocol_collection.upsert(
        ids=[pid],
        documents=[req.content.strip()],
        metadatas=[{"pid": pid, "title": req.title.strip(), "category": req.category.strip() or "Hospital Custom", "golden_rule": "Verified Custom Institutional Protocol", "keywords_csv": ",".join(list(set(words))[:15])}],
        embeddings=[compute_precision_embedding(combined)]
    )
    return {"message": f"Successfully indexed '{req.title}' into ChromaDB!", "total_protocols": protocol_collection.count()}


@app.post("/api/drug-check")
def check_drug_interactions(req: DrugCheckRequest):
    text_lower = req.medications_text.lower()
    matched = [r for r in DRUG_INTERACTION_RULES if r["pair"][0] in text_lower and r["pair"][1] in text_lower]

    nsaid_aliases = ["ibuprofen", "aspirin", "diclofenac", "naproxen", "combiflam", "meftal", "brufen", "voveran", "disprin", "nsaid"]
    nitrate_aliases = ["nitroglycerin", "sorbitrate", "isosorbide", "nitrate"]

    if "warfarin" in text_lower and any(n in text_lower for n in nsaid_aliases) and not matched:
        matched.append(DRUG_INTERACTION_RULES[1])
    if "dengue" in text_lower and any(n in text_lower for n in nsaid_aliases) and not matched:
        matched.append(DRUG_INTERACTION_RULES[3])
    if "sildenafil" in text_lower and any(n in text_lower for n in nitrate_aliases) and not matched:
        matched.append(DRUG_INTERACTION_RULES[2])

    dosing = calculate_precision_dosing(req.patient_age, req.patient_weight_kg)
    safe_status = "DANGEROUS INTERACTION DETECTED" if matched else "NO CRITICAL CONTRAINDICATION"
    speech_packs = build_drug_multilingual_pack(safe_status, matched, dosing)

    return {
        "safe_status": safe_status,
        "interactions_count": len(matched),
        "interactions": matched,
        "precision_dosing": dosing,
        "speech_packs": speech_packs
    }


@app.get("/api/queue")
def get_mass_casualty_queue():
    rows = fetch_sorted_ehr_queue()
    return {"total": len(rows), "queue": rows}


@app.post("/api/queue/simulate")
def simulate_mass_casualty_surge():
    surge = [
        {"case_id": "MC-901", "timestamp": datetime.now().strftime("%H:%M:%S"), "patient": "28y / 68kg", "priority": "CODE RED — IMMEDIATE LIFE-SAVING INTERVENTION", "risk_score": 99, "news2": 9, "shock_index": 1.32, "protocol": "Snakebite Envenomation Triage (WHO Standard)", "query": "Cyclone rescuer bitten by viper on ankle, HR 125, BP 95, tourniquet tied."},
        {"case_id": "MC-902", "timestamp": datetime.now().strftime("%H:%M:%S"), "patient": "59y / 74kg", "priority": "CODE RED — IMMEDIATE LIFE-SAVING INTERVENTION", "risk_score": 97, "news2": 7, "shock_index": 1.05, "protocol": "Acute Chest Pain / Myocardial Infarction", "query": "Crushing central chest pain radiating to left arm and jaw with cold sweat."},
        {"case_id": "MC-903", "timestamp": datetime.now().strftime("%H:%M:%S"), "patient": "3y / 14kg", "priority": "CODE RED — IMMEDIATE LIFE-SAVING INTERVENTION", "risk_score": 94, "news2": 6, "shock_index": 0.92, "protocol": "Pediatric High Fever & Febrile Seizure", "query": "Toddler with 104F fever having active full-body febrile convulsion."},
        {"case_id": "MC-904", "timestamp": datetime.now().strftime("%H:%M:%S"), "patient": "2y / 11kg", "priority": "CODE ORANGE — URGENT CLINICAL & SYMPTOM MANAGEMENT", "risk_score": 80, "news2": 4, "shock_index": 0.85, "protocol": "Cyclone & Flood Water Purification + WHO ORS", "query": "Cut off by floodwater, child has 6 watery diarrhea stools."}
    ]
    for p in surge:
        insert_ehr_record(p)
    rows = fetch_sorted_ehr_queue()
    return {"message": "4 Cyclone Mass-Casualty Patients Saved to SQLite EHR!", "queue": rows}


@app.post("/api/queue/clear")
def clear_mass_casualty_queue():
    clear_ehr_queue()
    return {"message": "SQLite EHR Queue cleared", "queue": []}


@app.get("/api/benchmark")
def run_live_benchmark():
    suite = [
        {"query": "I am suffering with tonsils and painful swallowing", "expected_id": "CLIN-009"},
        {"query": "Snakebite on ankle during cyclone, friends want tourniquet", "expected_id": "WHO-001"},
        {"query": "Patient on Warfarin wants to take Ibuprofen for joint pain", "expected_id": "CLIN-002"},
        {"query": "Flood muddy water and child watery diarrhea ORS formula", "expected_id": "WHO-003"},
        {"query": "Stray dog bite on leg, neighbors putting chili powder", "expected_id": "WHO-010"},
        {"query": "High fever during dengue outbreak, can I take Aspirin?", "expected_id": "CLIN-018"},
        {"query": "Farmer collapsed spraying organophosphate pesticide", "expected_id": "WHO-007"},
        {"query": "Wisdom tooth gum pain, placing aspirin on gum", "expected_id": "CLIN-020"},
        {"query": "Farm worker stung by red scorpion with sweating", "expected_id": "WHO-021"},
        {"query": "8-month-old baby choking on marble, turning blue", "expected_id": "WHO-008"}
    ]
    t0 = time.perf_counter()
    rows, passed = [], 0
    for c in suite:
        res = protocol_collection.query(query_embeddings=[compute_precision_embedding(c["query"])], n_results=1)
        got_id = res["ids"][0][0] if res["ids"] and res["ids"][0] else "NONE"
        got_title = res["metadatas"][0][0].get("title", "") if res["metadatas"] and res["metadatas"][0] else ""
        if got_id == c["expected_id"]:
            passed += 1
        rows.append({"query": c["query"], "expected": c["expected_id"], "matched_id": got_id, "matched_title": got_title, "status": "PASS (100%)" if got_id == c["expected_id"] else "MISMATCH"})
    return {"total_tests": len(suite), "passed": passed, "accuracy": f"{int(round((passed / len(suite)) * 100))}%", "total_latency_ms": round((time.perf_counter() - t0) * 1000, 2), "results": rows}


@app.post("/api/triage")
def perform_triage(req: TriageRequest):
    if not req.situation.strip():
        raise HTTPException(status_code=400, detail="Please enter a medical symptom or emergency situation.")

    vitals_eval = calculate_news2_and_shock_index(req.heart_rate, req.spo2, req.systolic_bp, req.temp_f, req.consciousness)
    clinical_eval = run_precision_triage(req.situation, req.patient_age, vitals_eval)
    dosing_eval = calculate_precision_dosing(req.patient_age, req.patient_weight_kg)

    retrieved_protocols, top_keyword_hits, matched_pid, chroma_ms = query_chromadb_protocols(req.situation, n_results=2)
    has_strong_match = (len(retrieved_protocols) > 0 and (top_keyword_hits >= 1 or retrieved_protocols[0]["confidence_num"] >= 75))

    if has_strong_match:
        top_protocol = retrieved_protocols[0]["text"]
        top_rule = retrieved_protocols[0]["golden_rule"]
        top_title = retrieved_protocols[0]["title"]
        proto_obj = PROTOCOL_MAP.get(matched_pid, {"title": top_title, "golden_rule": top_rule})
        prompt = (
            f"You are LifeLine AI, an accurate offline medical and emergency clinical assistant.\n"
            f"USER SITUATION: {req.situation}\n"
            f"PATIENT PROFILE: {clinical_eval['age_guidance']} | Weight: {dosing_eval['weight_kg']} kg\n"
            f"SAFE WEIGHT DOSING: Paracetamol: {dosing_eval['paracetamol_dose']} | ORS: {dosing_eval['ors_4hr_deficit']}\n"
            f"MATCHED CLINICAL PROTOCOL ({top_title}):\n{top_protocol}\n"
            f"GOLDEN CLINICAL RULE: {top_rule}\n\n"
            f"Write a complete, well-structured response in English ONLY using these exact 3 headings:\n"
            f"### 1. IMMEDIATE RELIEF & ACTION STEPS (DO NOW)\n"
            f"### 2. THINGS TO AVOID (STRICT DONTs)\n"
            f"### 3. WHEN TO SEE A DOCTOR (CLINICAL RED FLAGS)\n"
        )
    else:
        proto_obj = {"title": "Adaptive Clinical Triage", "golden_rule": "Provide safe symptom relief, hydration, and monitor red flags."}
        retrieved_protocols = [{
            "pid": "ADAPTIVE", "title": "Adaptive Clinical Triage Mode", "category": "Dynamic Assessment",
            "golden_rule": proto_obj["golden_rule"], "confidence": "Adaptive AI", "confidence_num": 90,
            "text": "Dynamic Clinical Triage engaged to answer the exact symptom requested without cross-disease mismatch."
        }]
        prompt = (
            f"You are LifeLine AI, an expert offline medical and first-aid clinical assistant.\n"
            f"PATIENT PROFILE: {clinical_eval['age_guidance']} | Weight: {dosing_eval['weight_kg']} kg\n"
            f"USER SYMPTOM: {req.situation}\n\n"
            f"Provide a complete, safe, practical response in English ONLY using these exact 3 headings:\n"
            f"### 1. IMMEDIATE RELIEF & ACTION STEPS (DO NOW)\n"
            f"### 2. THINGS TO AVOID (STRICT DONTs)\n"
            f"### 3. WHEN TO SEE A DOCTOR (CLINICAL RED FLAGS)\n"
        )

    t1 = time.perf_counter()
    try:
        ollama_res = requests.post(
            f"{OLLAMA_BASE_URL}/api/generate",
            json={"model": req.model, "prompt": prompt, "stream": False, "options": {"temperature": 0.15, "num_predict": 900, "num_ctx": 4096}},
            timeout=75
        )
        ollama_res.raise_for_status()
        ai_plan_en = sanitize_llm_english_output(ollama_res.json().get("response", ""))
        if not ai_plan_en:
            raise ValueError("Empty response")
    except Exception:
        ai_plan_en = (
            f"### 1. IMMEDIATE RELIEF & ACTION STEPS (DO NOW)\n"
            f"- **Golden Clinical Rule:** {retrieved_protocols[0]['golden_rule']}\n"
            f"- **Verified Protocol Steps:** {retrieved_protocols[0]['text']}\n"
            f"- **Weight-Adjusted Dosing ({dosing_eval['weight_kg']} kg):** Paracetamol: {dosing_eval['paracetamol_dose']} | WHO ORS: {dosing_eval['ors_4hr_deficit']}\n\n"
            f"### 2. THINGS TO AVOID (STRICT DONTs)\n"
            f"- Strictly follow the contraindications in the verified protocol above and avoid unverified folk remedies.\n\n"
            f"### 3. WHEN TO SEE A DOCTOR (CLINICAL RED FLAGS)\n"
            f"- Seek urgent hospital care if breathing becomes difficult, swallowing saliva is impossible, or symptoms worsen."
        )
    llm_sec = round(time.perf_counter() - t1, 2)

    multilingual_pack = build_multilingual_pack(proto_obj, dosing_eval, english_plan=ai_plan_en)
    final_display_markdown = ai_plan_en
    if req.language in multilingual_pack and "display" in multilingual_pack[req.language]:
        final_display_markdown = ai_plan_en + "\n\n" + multilingual_pack[req.language]["display"]

    insert_ehr_record({
        "case_id": f"T-{int(time.time()) % 10000}",
        "timestamp": datetime.now().strftime("%H:%M:%S"),
        "patient": f"{req.patient_age}y / {req.patient_weight_kg}kg",
        "priority": clinical_eval["priority"],
        "risk_score": clinical_eval["risk_score"],
        "news2": vitals_eval["news2_score"],
        "shock_index": vitals_eval["shock_index"],
        "protocol": retrieved_protocols[0]["title"],
        "query": req.situation[:90]
    })
    queue_rows = fetch_sorted_ehr_queue()

    return {
        "clinical_assessment": clinical_eval,
        "vitals_assessment": vitals_eval,
        "precision_dosing": dosing_eval,
        "queue_count": len(queue_rows),
        "telemetry": {
            "chroma_latency_ms": chroma_ms,
            "ollama_inference_sec": llm_sec,
            "total_protocols": protocol_collection.count(),
            "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        },
        "retrieved_protocols": retrieved_protocols,
        "ai_action_plan": final_display_markdown,
        "speech_packs": multilingual_pack
    }


if __name__ == "__main__":
    print("\n" + "=" * 78)
    print("💎 LIFELINE AI v12.0 (FINAL GRAND-PRIZE EDITION) STARTING...")
    print("👉 1. Open Web Command Center : http://127.0.0.1:8000")
    print("👉 2. Open FastAPI Docs       : http://127.0.0.1:8000/docs")
    print("=" * 78 + "\n")
    uvicorn.run(app, host="127.0.0.1", port=8000)
