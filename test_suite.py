import unittest
from clinical_engine import (
    calculate_news2_and_shock_index,
    calculate_precision_dosing,
    calculate_trauma_gcs_and_burn,
    run_precision_triage
)
from rag_engine import query_chromadb_protocols
from database_ehr import insert_ehr_record, fetch_sorted_ehr_queue


class TestLifeLineEnterpriseSuite(unittest.TestCase):
    def test_1_tonsillitis_retrieval(self):
        protos, hits, pid, _ = query_chromadb_protocols("I am suffering with tonsils and painful swallowing")
        self.assertEqual(pid, "CLIN-009")
        self.assertGreaterEqual(hits, 1)

    def test_2_snakebite_retrieval(self):
        protos, hits, pid, _ = query_chromadb_protocols("Snakebite on ankle during cyclone, friends want tourniquet")
        self.assertEqual(pid, "WHO-001")

    def test_3_dengue_aspirin_contraindication(self):
        protos, hits, pid, _ = query_chromadb_protocols("High fever during dengue outbreak, can I take Aspirin?")
        self.assertEqual(pid, "CLIN-018")

    def test_4_news2_and_shock_index(self):
        res = calculate_news2_and_shock_index(hr=132, spo2=90, sys_bp=92, temp_f=103.0, consciousness="Confused")
        self.assertGreaterEqual(res["news2_score"], 7)
        self.assertGreaterEqual(res["shock_index"], 1.0)

    def test_5_pediatric_weight_dosing(self):
        d = calculate_precision_dosing(age_years=2, weight_kg=11.0)
        self.assertIn("825 mL", d["ors_4hr_deficit"])

    def test_6_glasgow_coma_and_parkland_burn(self):
        t = calculate_trauma_gcs_and_burn(eye=2, verbal=2, motor=3, weight_kg=60.0, burn_tbsa_pct=30.0)
        self.assertEqual(t["gcs_total"], 7)
        self.assertIn("7200 mL", t["parkland_total_24h_ml"])

    def test_7_sqlite_ehr_persistence(self):
        insert_ehr_record({
            "case_id": "UNIT-TEST", "timestamp": "12:00:00", "patient": "30y / 70kg",
            "priority": "CODE RED", "risk_score": 99, "news2": 8, "shock_index": 1.2,
            "protocol": "WHO-001", "query": "Unit test snakebite"
        })
        q = fetch_sorted_ehr_queue()
        self.assertGreaterEqual(len(q), 1)
        self.assertEqual(q[0]["risk_score"], 99)


if __name__ == "__main__":
    print("\n" + "=" * 70)
    print("🧪 RUNNING LIFELINE AI v11.0 AUTOMATED ENGINEERING UNIT TEST SUITE")
    print("=" * 70)
    unittest.main(verbosity=2)
