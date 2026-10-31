import sys
from clinical_engine import calculate_news2_and_shock_index, calculate_precision_dosing, run_precision_triage
from rag_engine import query_chromadb_protocols


def run_cli_triage(query: str, age: int = 25, weight: float = 65.0):
    print("=" * 72)
    print("🚑 LIFELINE AI v11.0 — LOW-POWER TERMINAL DISASTER RESCUE CLI")
    print("=" * 72)
    vitals = calculate_news2_and_shock_index(96, 97, 118, 99.0, "Alert")
    triage = run_precision_triage(query, age, vitals)
    dosing = calculate_precision_dosing(age, weight)
    protocols, _, _, ms = query_chromadb_protocols(query, n_results=1)
    top = protocols[0]

    print(f"🚨 PRIORITY     : {triage['priority']} (Risk: {triage['risk_score']}/100)")
    print(f"⚡ CHROMADB HIT : [{top['pid']}] {top['title']} ({top['confidence']} in {ms} ms)")
    print(f"📌 GOLDEN RULE  : {top['golden_rule']}")
    print(f"⚖️ SAFE DOSING  : Paracetamol: {dosing['paracetamol_dose']} | ORS: {dosing['ors_4hr_deficit']}")
    print("-" * 72)
    print(top["text"])
    print("=" * 72)


if __name__ == "__main__":
    user_q = " ".join(sys.argv[1:]) if len(sys.argv) > 1 else "Snakebite on ankle during cyclone blackout"
    run_cli_triage(user_q)
