from pathlib import Path

APP_TITLE = "LifeLine AI v16.0 — Emergency Disaster & Regular Medical Assistance Suite"
APP_VERSION = "16.0.0"
OLLAMA_BASE_URL = "http://localhost:11434"
DEFAULT_MODEL = "gemma3:1b"

BASE_DIR = Path(__file__).resolve().parent
CHROMA_DB_DIR = str(BASE_DIR / "lifeline_chroma_db")
SQLITE_DB_PATH = str(BASE_DIR / "lifeline_ehr.db")
VOICE_CACHE_DIR = BASE_DIR / "lifeline_voice_cache"
STATIC_DIR = BASE_DIR / "static"

VOICE_CACHE_DIR.mkdir(exist_ok=True)
STATIC_DIR.mkdir(exist_ok=True)
