import sqlite3
from datetime import datetime
from config import SQLITE_DB_PATH


def init_sqlite_db():
    conn = sqlite3.connect(SQLITE_DB_PATH)
    cur = conn.cursor()
    cur.execute("""
        CREATE TABLE IF NOT EXISTS ehr_triage_queue (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            case_id TEXT NOT NULL,
            timestamp TEXT NOT NULL,
            patient TEXT NOT NULL,
            priority TEXT NOT NULL,
            risk_score INTEGER NOT NULL,
            news2 INTEGER NOT NULL,
            shock_index REAL NOT NULL,
            protocol TEXT NOT NULL,
            query TEXT NOT NULL
        )
    """)
    conn.commit()

    cur.execute("SELECT COUNT(*) FROM ehr_triage_queue")
    if cur.fetchone()[0] == 0:
        cur.execute("""
            INSERT INTO ehr_triage_queue (case_id, timestamp, patient, priority, risk_score, news2, shock_index, protocol, query)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """, (
            "T-101", datetime.now().strftime("%H:%M:%S"), "19y / 60kg",
            "CODE ORANGE — URGENT CLINICAL & SYMPTOM MANAGEMENT", 74, 1, 0.73,
            "Acute Tonsillitis, Severe Sore Throat, Pharyngitis & Swallowing Pain",
            "Suffering with acute tonsillitis, unable to eat solid food and painful swallowing."
        ))
        conn.commit()
    conn.close()


def insert_ehr_record(entry: dict):
    conn = sqlite3.connect(SQLITE_DB_PATH)
    cur = conn.cursor()
    cur.execute("""
        INSERT INTO ehr_triage_queue (case_id, timestamp, patient, priority, risk_score, news2, shock_index, protocol, query)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    """, (
        entry["case_id"], entry["timestamp"], entry["patient"], entry["priority"],
        int(entry["risk_score"]), int(entry["news2"]), float(entry["shock_index"]),
        entry["protocol"], entry["query"]
    ))
    conn.commit()
    conn.close()


def fetch_sorted_ehr_queue() -> list:
    conn = sqlite3.connect(SQLITE_DB_PATH)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()
    cur.execute("""
        SELECT case_id, timestamp, patient, priority, risk_score, news2, shock_index, protocol, query
        FROM ehr_triage_queue
        ORDER BY risk_score DESC, news2 DESC, id DESC
    """)
    rows = [dict(r) for r in cur.fetchall()]
    conn.close()
    return rows


def clear_ehr_queue():
    conn = sqlite3.connect(SQLITE_DB_PATH)
    cur = conn.cursor()
    cur.execute("DELETE FROM ehr_triage_queue")
    conn.commit()
    conn.close()


init_sqlite_db()
