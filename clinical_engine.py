import re

CRITICAL_LIFE_THREATS = {
    "Snakebite / Envenomation": r"\b(snake|snakebite|cobra|viper|krait|venom|fang)\b",
    "Dangerous Drug Contraindication": r"\b(warfarin|anticoagulant|sildenafil|nitroglycerin|sorbitrate|isosorbide|combiflam|meftal)\b",
    "Cardiac / Chest Emergency": r"\b(chest pain|heart attack|cardiac|angina|myocardial)\b",
    "Electrical / Burn Trauma": r"\b(electrocut|electric shock|live wire|power line|thermal burn|scalded)\b",
    "Active Seizure / Convulsion": r"\b(seizure|convuls|fitting|epilep)\b",
    "Acute Poisoning / Overdose": r"\b(poison|pesticide|insecticide|organophosphate|overdose|kerosene|acid)\b",
    "Airway Choking / Drowning": r"\b(choking|choked|cannot breathe|turning blue|drowning|drowned|not breathing|marble)\b",
    "Stroke / Paralysis": r"\b(stroke|face drooping|slurred speech|paralysis)\b",
    "Anaphylaxis / Severe Allergy": r"\b(anaphylaxis|swollen tongue|swollen throat|epipen)\b",
    "Severe Hemorrhage / Trauma": r"\b(heavy bleeding|uncontrolled bleeding|fracture|broken bone)\b",
    "Rabies / Animal Bite / Scorpion": r"\b(dog bite|stray dog|monkey bite|rabies|scorpion)\b",
    "Acute Asthma Attack": r"\b(asthma attack|severe wheezing|inhaler)\b",
    "Diabetic Hypoglycemia": r"\b(hypoglycemia|low blood sugar|insulin shock)\b",
    "Heatstroke / Hypothermia": r"\b(heatstroke|sunstroke|hypothermia)\b"
}

URGENT_CLINICAL_CONDITIONS = {
    "ENT / Acute Tonsillitis / Sore Throat": r"\b(tonsil|tonsils|tonsillitis|sore throat|throat pain|swallow|swallowing|pharyngitis)\b",
    "Flood / Dehydration / Diarrhea": r"\b(flood|cyclone|diarrhea|cholera|dehydration|ors|watery stool)\b",
    "High Fever / Dengue / Malaria": r"\b(fever|dengue|malaria|typhoid|chills|platelets|chickenpox)\b",
    "Gastrointestinal / Abdominal Pain": r"\b(stomach|abdomen|abdominal|gastritis|acidity|appendicitis|vomiting|food poisoning)\b",
    "Headache / Dental / Eye Care": r"\b(headache|migraine|tooth|toothache|wisdom tooth|molar|dental|earache|eye splash)\b"
}


def calculate_news2_and_shock_index(hr: int, spo2: int, sys_bp: int, temp_f: float, consciousness: str) -> dict:
    score = 0
    alerts = []

    if spo2 <= 91:
        score += 3; alerts.append(f"Critical Hypoxia (SpO2 {spo2}%)")
    elif spo2 <= 93:
        score += 2; alerts.append(f"Low Oxygen (SpO2 {spo2}%)")
    elif spo2 <= 95:
        score += 1

    if hr >= 131 or hr <= 40:
        score += 3; alerts.append(f"Critical Heart Rate ({hr} BPM)")
    elif hr >= 111:
        score += 2; alerts.append(f"Tachycardia ({hr} BPM)")
    elif hr >= 91 or hr <= 50:
        score += 1

    if sys_bp <= 90 or sys_bp >= 220:
        score += 3; alerts.append(f"Critical BP ({sys_bp} mmHg)")
    elif sys_bp <= 100:
        score += 2; alerts.append(f"Hypotension ({sys_bp} mmHg)")
    elif sys_bp <= 110:
        score += 1

    if temp_f >= 102.4:
        score += 2; alerts.append(f"High Fever ({temp_f}°F)")
    elif temp_f >= 100.5 or temp_f <= 96.8:
        score += 1

    if consciousness.lower() != "alert":
        score += 3; alerts.append(f"Altered Consciousness ({consciousness})")

    shock_index = round(float(hr) / float(max(50, sys_bp)), 2)
    if shock_index >= 1.0:
        shock_status = f"CRITICAL SHOCK INDEX ({shock_index}) — High Hemodynamic Risk"
        score += 2; alerts.append(f"Shock Index {shock_index}")
    elif shock_index >= 0.85:
        shock_status = f"ELEVATED SHOCK INDEX ({shock_index}) — Early Stress"
    else:
        shock_status = f"NORMAL SHOCK INDEX ({shock_index}) — Stable"

    if score >= 7:
        risk_band = f"NEWS2 HIGH CLINICAL RISK (Score {score}/14)"
    elif score >= 5:
        risk_band = f"NEWS2 MEDIUM RISK (Score {score}/14)"
    else:
        risk_band = f"NEWS2 STABLE VITALS (Score {score}/14)"

    return {
        "news2_score": score,
        "risk_band": risk_band,
        "shock_index": shock_index,
        "shock_status": shock_status,
        "vital_alerts": alerts if alerts else ["Vitals within stable parameters"]
    }


def calculate_precision_dosing(age_years: int, weight_kg: float) -> dict:
    w = max(3.0, min(150.0, float(weight_kg)))
    raw_pcm = w * 15.0
    pcm_mg = int(round(min(1000.0, raw_pcm)))
    cap_note = " [Capped at 1,000mg max safe single limit]" if raw_pcm > 1000.0 else ""

    if age_years < 12 or w < 35:
        s120 = round((pcm_mg / 120.0) * 5.0, 1)
        s250 = round((pcm_mg / 250.0) * 5.0, 1)
        pcm_text = f"{pcm_mg} mg every 6 hrs (Pediatric Syrup: {s120} mL of 120mg/5mL OR {s250} mL of 250mg/5mL)"
    else:
        pcm_text = f"{pcm_mg} mg (1 to 2 standard 500mg tablets) every 6-8 hrs{cap_note}"

    ors_4hr_ml = int(round(w * 75.0))
    ors_per_stool = "50–100 mL" if age_years <= 2 else ("100–200 mL" if age_years <= 10 else "200–400 mL")
    epi_mg = round(min(0.5, w * 0.01), 2)
    iv_rate = int(round(w * 4.0)) if w <= 10 else (int(round(40 + (w - 10) * 2.0)) if w <= 20 else int(round(60 + (w - 20) * 1.0)))

    return {
        "weight_kg": w,
        "paracetamol_dose": pcm_text,
        "ors_4hr_deficit": f"{ors_4hr_ml} mL over 4 hours ({ors_per_stool} per loose stool)",
        "epinephrine_im_dose": f"{epi_mg} mg IM outer mid-thigh",
        "holliday_segar_fluid_rate": f"{iv_rate} mL/hour"
    }


def calculate_trauma_gcs_and_burn(eye: int, verbal: int, motor: int, weight_kg: float, burn_tbsa_pct: float) -> dict:
    e = max(1, min(4, int(eye)))
    v = max(1, min(5, int(verbal)))
    m = max(1, min(6, int(motor)))
    gcs_total = e + v + m

    if gcs_total <= 8:
        gcs_severity = f"SEVERE BRAIN INJURY / COMA (GCS {gcs_total}/15 — E{e}V{v}M{m}) — Critical Airway Intubation Alert (GCS <= 8)!"
    elif gcs_total <= 12:
        gcs_severity = f"MODERATE HEAD TRAUMA (GCS {gcs_total}/15 — E{e}V{v}M{m}) — Urgent Neuro Observation & CT Scan"
    else:
        gcs_severity = f"MILD / STABLE NEURO STATUS (GCS {gcs_total}/15 — E{e}V{v}M{m}) — Alert / Minor Concussion"

    w = max(3.0, min(150.0, float(weight_kg)))
    tbsa = max(0.0, min(100.0, float(burn_tbsa_pct)))
    total_24h_ml = int(round(4.0 * w * tbsa))
    first_8h_ml = int(round(total_24h_ml / 2.0))
    first_8h_rate_hr = int(round(first_8h_ml / 8.0))
    next_16h_rate_hr = int(round(first_8h_ml / 16.0))

    if tbsa >= 20.0:
        burn_alert = f"CRITICAL MAJOR BURN ({tbsa}% TBSA) — Immediate IV Ringer's Lactate Resuscitation Required"
    elif tbsa >= 10.0:
        burn_alert = f"MODERATE BURN ({tbsa}% TBSA) — Oral ORS / IV Fluid Replacement & Sterile Wrapping"
    else:
        burn_alert = f"MINOR LOCALIZED BURN ({tbsa}% TBSA) — Cool Running Water 20 Mins + Oral Hydration"

    return {
        "gcs_total": gcs_total,
        "gcs_breakdown": f"E{e} + V{v} + M{m} = {gcs_total}/15",
        "gcs_severity": gcs_severity,
        "burn_tbsa_pct": tbsa,
        "burn_alert": burn_alert,
        "parkland_total_24h_ml": f"{total_24h_ml} mL Ringer's Lactate / ORS over 24 hours",
        "parkland_first_8h": f"{first_8h_ml} mL in First 8 Hours ({first_8h_rate_hr} mL/hr)",
        "parkland_next_16h": f"{first_8h_ml} mL over Next 16 Hours ({next_16h_rate_hr} mL/hr)"
    }


def run_precision_triage(situation: str, patient_age: int, vitals_eval: dict) -> dict:
    critical_hits = [label for label, pat in CRITICAL_LIFE_THREATS.items() if re.search(pat, situation, re.IGNORECASE)]
    urgent_hits = [label for label, pat in URGENT_CLINICAL_CONDITIONS.items() if re.search(pat, situation, re.IGNORECASE)]

    news2_pts = vitals_eval["news2_score"]
    if critical_hits or news2_pts >= 7 or vitals_eval["shock_index"] >= 1.0:
        priority = "CODE RED — IMMEDIATE LIFE-SAVING INTERVENTION"
        risk_score = min(99, 90 + len(critical_hits) * 3 + news2_pts)
        detected_flags = critical_hits if critical_hits else ["Critical Hemodynamic Alert"]
    elif urgent_hits or news2_pts >= 5:
        priority = "CODE ORANGE — URGENT CLINICAL & SYMPTOM MANAGEMENT"
        risk_score = min(88, 72 + news2_pts * 2)
        detected_flags = urgent_hits if urgent_hits else ["Urgent Clinical Vitals Alert"]
    else:
        priority = "CODE YELLOW — PRIMARY CLINICAL ASSESSMENT & TRIAGE"
        risk_score = 55
        detected_flags = ["General Clinical Symptom Evaluation"]

    if patient_age <= 2:
        age_guidance = f"Infant/Toddler ({patient_age} yr): Strict pediatric weight dosing. Never give adult tablets, Aspirin, or abdominal thrusts."
    elif patient_age <= 12:
        age_guidance = f"Pediatric Patient ({patient_age} yrs): Avoid Aspirin in children (Reye's syndrome risk); use pediatric Paracetamol."
    elif patient_age >= 60:
        age_guidance = f"Geriatric Patient ({patient_age} yrs): High risk for dehydration, blood pressure shifts, and drug interactions."
    else:
        age_guidance = f"Adult Patient ({patient_age} yrs): Standard adult clinical dosing and hydration protocols apply."

    return {"priority": priority, "risk_score": risk_score, "detected_flags": detected_flags, "age_guidance": age_guidance}
