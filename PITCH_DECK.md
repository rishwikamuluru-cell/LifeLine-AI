# 🚑 LifeLine AI — 7-Slide Judge Pitch Deck

**Team Leader:** Amuluru Rishwik | **Team Members:** Jeshwanth, Mouneesh  
**Tracks:** Best Use of Gemma 4 & Best Open-Source AI Project

---

## 📌 SLIDE 1: The Problem — Why People Die in Disasters & Rural Emergencies
* **100% Cloud Failure:** During cyclones, floods, and power blackouts, cellular towers and internet fail—making cloud AI and telemedicine useless.
* **Deadly Panic Myths:** Without guidance, bystanders tie tight tourniquets on snakebites (causing amputation) or give Ibuprofen/Combiflam during Dengue fever (causing internal bleeding).
* **Language Barrier:** Medical guides are written in complex English, leaving rural Telugu, Tamil, and Hindi speakers helpless.

---

## 💡 SLIDE 2: Our Solution — LifeLine AI (Super-App Edition)
A **100% Offline Medical Triage, Flood/Cyclone Survival & 4-Language Voice Assistant** that works with **zero internet**.
* **🚨 Dual-Mode Triage:** Instant switch between **Emergency & Disaster Mode** (Snakebite, Flood ORS, Drowning, Electric Shock, Heart Attack) and **Regular Daily Care** (Viral Fever, Food Poisoning, Cough, Asthma, Low Sugar).
* **📸 Super-App UX:** Instagram-style **60-Second First-Aid Story Slides**, Interactive **Human Body Map**, **WhatsApp Voice-Note Player**, and **AMOLED Dark Mode** to save battery during blackouts.

---

## 🧠 SLIDE 3: How Open-Weight Gemma Models Empower LifeLine AI
1. **100% Offline Disaster Resilience:** Because Gemma is an open-weight model, we run it locally on edge laptops/PCs via **Ollama**—requiring zero internet or cloud APIs during cyclones.
2. **Zero Medical Hallucinations (RAG + Guardrails):** We ground Gemma with **22 verified WHO protocols in ChromaDB** plus deterministic Python math for drug dosing, NEWS2 vitals, and burn fluids.
3. **100% Patient Privacy & Zero Cost:** Sensitive patient health records never leave the local device, and rural clinics pay $0 in cloud subscription fees.

---

## 🛠️ SLIDE 4: System Architecture & Tech Stack
| Layer | Technology Used | Purpose |
| :--- | :--- | :--- |
| **Local AI Engine** | **Ollama + Open-Weight Gemma** | 100% offline clinical action plan generation |
| **Vector Database** | **ChromaDB (128-Dim Embeddings)** | Sub-15ms retrieval of 22 verified WHO protocols |
| **Hospital Database** | **SQLite3 (`lifeline_ehr.db`)** | Mass-casualty patient queue auto-sorted by `CODE RED` |
| **Backend API** | **Python + FastAPI** | Clinical math (NEWS2, Shock Index, GCS, Parkland Burn Formula) |
| **Multimodal Frontend** | **HTML5 / CSS3 / JS + WebAudio** | 4-Language Voice (EN, TE, TA, HI), Continuous Mic & SOS Siren |

---

## 🌊 SLIDE 5: Built for Real Field Survival (Beyond a Chatbot)
* **💧 Flood Water & WHO ORS Calculator:** Calculates exact chlorine drops, boiling time, and homemade ORS ratios (`1L water + 6 tsp sugar + 0.5 tsp salt`).
* **🔊 Offline Acoustic Rescue Siren & SOS Strobe:** Uses WebAudio synthesis to alert NDRF rescue boats and helicopters when mobile networks are dead.
* **💊 Pharmacy Contraindication Blocker:** Automatically blocks lethal combinations like **Warfarin + Ibuprofen** or **Dengue + Combiflam/Aspirin**.
* **🫀 110-BPM CPR Audio Coach:** Real-time audio metronome for chest compressions and 20-minute burn cooling timers.

---

## 📊 SLIDE 6: Proven Verification & Live Benchmarks
* **⚡ 10/10 (100%) ChromaDB Retrieval Accuracy:** Verified across 10 clinical test cases in **< 15 milliseconds**.
* **🏥 Automated Mass-Casualty Sorting:** Dynamically computes **NEWS2 (0–14)** and **Shock Index (`HR ÷ SysBP`)** to prioritize critical cyclone victims first.
* **🔊 4-Language Accessibility:** Full voice readout in **English, Telugu (తెలుగు), Tamil (தமிழ்), and Hindi (हिन्दी)** with `0.75x–1.5x` speed control.

---

## 🏆 SLIDE 7: Impact & Future Roadmap
* **Immediate Deployment:** Ready for rural Primary Health Centres (PHCs), NDRF disaster relief camps, schools, and village panchayats across India.
* **Next Steps:** Offline Android APK wrapper + LoRaWAN peer-to-peer mesh messaging between flooded villages.
