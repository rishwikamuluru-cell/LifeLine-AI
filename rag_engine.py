import hashlib
import math
import re
import time
import chromadb
from config import CHROMA_DB_DIR
from knowledge_base import INITIAL_PROTOCOLS


def compute_precision_embedding(text: str) -> list:
    text_lower = text.lower()
    words = set(re.findall(r"[a-z0-9]+", text_lower))
    vec = [0.0] * 128

    for idx, proto in enumerate(INITIAL_PROTOCOLS):
        if idx >= 30:
            break
        score = 0.0
        for kw in proto["keywords"]:
            if " " in kw and kw in text_lower:
                score += 6.0
            elif kw in words:
                score += 5.0
            elif len(kw) >= 5 and kw in text_lower:
                score += 3.5
        vec[idx] = score

    STOP_WORDS = {
        "the", "and", "for", "with", "what", "should", "have", "has", "very", "pain", "painful",
        "hurt", "hurts", "suffering", "unable", "take", "give", "patient", "person", "year", "old",
        "today", "now", "immediately", "severe", "acute", "help", "can", "from", "this", "that"
    }
    for w in words:
        if w not in STOP_WORDS and len(w) > 2:
            h = int(hashlib.md5(w.encode("utf-8")).hexdigest(), 16)
            dim = 30 + (h % 98)
            vec[dim] += 1.0

    norm = math.sqrt(sum(x * x for x in vec))
    return [round(x / norm, 6) for x in vec] if norm > 0 else [1.0] + [0.0] * 127


def score_direct_keyword_overlap(query_text: str, keywords_list: list) -> int:
    q_lower = query_text.lower()
    q_words = set(re.findall(r"[a-z0-9]+", q_lower))
    hits = 0
    for kw in keywords_list:
        if " " in kw and kw in q_lower:
            hits += 2
        elif kw in q_words:
            hits += 2
        elif len(kw) >= 5 and kw in q_lower:
            hits += 1
    return hits


try:
    chroma_client = chromadb.PersistentClient(path=CHROMA_DB_DIR)
except Exception:
    chroma_client = chromadb.EphemeralClient()

protocol_collection = chroma_client.get_or_create_collection(name="who_verified_protocols_v11_enterprise")


def seed_chromadb():
    protocol_collection.upsert(
        ids=[p["id"] for p in INITIAL_PROTOCOLS],
        documents=[p["content"] for p in INITIAL_PROTOCOLS],
        metadatas=[{
            "pid": p["id"],
            "title": p["title"],
            "category": p["category"],
            "golden_rule": p["golden_rule"],
            "keywords_csv": ",".join(p["keywords"])
        } for p in INITIAL_PROTOCOLS],
        embeddings=[
            compute_precision_embedding(p["title"] + " " + " ".join(p["keywords"]) + " " + p["content"])
            for p in INITIAL_PROTOCOLS
        ]
    )


seed_chromadb()


def query_chromadb_protocols(situation: str, n_results: int = 2) -> tuple:
    t0 = time.perf_counter()
    results = protocol_collection.query(query_embeddings=[compute_precision_embedding(situation)], n_results=n_results)
    chroma_ms = round((time.perf_counter() - t0) * 1000, 2)

    docs = results["documents"][0] if results["documents"] else []
    metas = results["metadatas"][0] if results["metadatas"] else []
    distances = results["distances"][0] if results.get("distances") else [1.0, 1.5]

    retrieved_protocols = []
    top_keyword_hits = 0
    matched_pid = "CLIN-009"

    for idx, (doc, meta, dist) in enumerate(zip(docs, metas, distances)):
        kw_list = [k.strip() for k in meta.get("keywords_csv", "").split(",") if k.strip()]
        kw_hits = score_direct_keyword_overlap(situation, kw_list)
        if idx == 0:
            top_keyword_hits = kw_hits
            matched_pid = meta.get("pid", "CLIN-009")

        confidence_pct = min(99, 90 + kw_hits * 2) if kw_hits >= 2 else (84 if kw_hits == 1 else max(35, int(round((1.0 - min(dist, 1.6) / 2.0) * 70))))
        retrieved_protocols.append({
            "pid": meta.get("pid", "CUSTOM"),
            "title": meta.get("title", "Verified Protocol"),
            "category": meta.get("category", "Clinical"),
            "golden_rule": meta.get("golden_rule", "Follow standard clinical protocol"),
            "confidence": f"{confidence_pct}%",
            "confidence_num": confidence_pct,
            "text": doc
        })

    return retrieved_protocols, top_keyword_hits, matched_pid, chroma_ms
