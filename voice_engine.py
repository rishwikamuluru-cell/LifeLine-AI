import hashlib
import re
import requests
from config import VOICE_CACHE_DIR


def split_into_clean_sentences(text: str, max_len: int = 175) -> list:
    clean = re.sub(r"#{1,6}\s*", "", text)
    clean = re.sub(r"[*`•_]", "", clean)
    clean = re.sub(r"\s+", " ", clean).strip()

    raw_sentences = re.split(r"(?<=[.!?।])\s+", clean)
    merged_chunks = []
    buffer = ""

    for sent in raw_sentences:
        sent = sent.strip()
        if not sent:
            continue
        if len(buffer) + len(sent) + 1 <= max_len:
            buffer = (buffer + " " + sent).strip() if buffer else sent
        else:
            if buffer:
                merged_chunks.append(buffer)
            if len(sent) <= max_len:
                buffer = sent
            else:
                words = sent.split(" ")
                cur = ""
                for w in words:
                    if len(cur) + len(w) + 1 <= max_len:
                        cur = (cur + " " + w).strip() if cur else w
                    else:
                        if cur:
                            merged_chunks.append(cur)
                        cur = w
                buffer = cur

    if buffer:
        merged_chunks.append(buffer)
    return merged_chunks


def synthesize_single_chunk_mp3(chunk_text: str, lang_code: str) -> bytes:
    clean_chunk = chunk_text.strip()[:180]
    if not clean_chunk:
        raise ValueError("Empty chunk")

    key = f"v120_{lang_code}_{clean_chunk}"
    file_hash = hashlib.md5(key.encode("utf-8")).hexdigest()
    cache_path = VOICE_CACHE_DIR / f"voice_{lang_code}_{file_hash}.mp3"

    if cache_path.exists() and cache_path.stat().st_size > 300:
        return cache_path.read_bytes()

    headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"}
    res = requests.get(
        "https://translate.googleapis.com/translate_tts",
        params={"client": "gtx", "ie": "UTF-8", "tl": lang_code, "q": clean_chunk},
        headers=headers,
        timeout=6
    )
    res.raise_for_status()
    if len(res.content) > 300:
        cache_path.write_bytes(res.content)
        return res.content
    raise RuntimeError("Empty audio response")


def build_multilingual_pack(proto_obj: dict, dosing: dict, english_plan: str = "") -> dict:
    title = proto_obj.get("title", "Clinical Protocol")
    rule = proto_obj.get("golden_rule", "Follow verified WHO steps.")
    wt = dosing["weight_kg"]
    pcm = dosing["paracetamol_dose"]
    ors = dosing["ors_4hr_deficit"]

    te_voice = proto_obj.get("te_native") or (
        f"మొదటి భాగం, ముఖ్య నియమం: {rule} "
        f"రెండవ భాగం, తక్షణ చర్యలు: రోగిని ప్రశాంతంగా ఉంచి శ్వాస మరియు నాడిని గమనించండి. సురక్షిత పారాసిటమాల్ మోతాదు {pcm}. "
        f"మూడవ భాగం, ప్రమాద సంకేతాలు: శ్వాస తీసుకోవడం కష్టంగా ఉంటే వెంటనే ఆసుపత్రికి తరలించండి."
    )
    ta_voice = proto_obj.get("ta_native") or (
        f"முதல் பகுதி, முக்கிய விதி: {rule} "
        f"இரண்டாம் பகுதி, உடனடி நடவடிக்கைகள்: நோயாளியை அமைதியாக வைத்து சுவாசத்தை கண்காணிக்கவும். பாராசிட்டமால் அளவு {pcm}. "
        f"மூன்றாம் பகுதி, அபாய அறிகுறிகள்: மூச்சுத் திணறல் இருந்தால் உடனடியாக மருத்துவமனைக்குச் செல்லவும்."
    )
    hi_voice = proto_obj.get("hi_native") or (
        f"पहला भाग, मुख्य नियम: {rule} "
        f"दूसरा भाग, तुरंत उपाय: मरीज को शांत रखें और सांस की निगरानी करें। पैरासिटामोल खुराक {pcm}। "
        f"तीसरा भाग, खतरे के लक्षण: गंभीर लक्षण दिखने पर तुरंत अस्पताल ले जाएं।"
    )

    te_phon = proto_obj.get("te_phonetic") or f"Modati bhaagam: {title}. Golden Rule: {rule}. Safe Paracetamol dose is {pcm}."
    ta_phon = proto_obj.get("ta_phonetic") or f"Muthal paguthi: {title}. Golden Rule: {rule}. Safe Paracetamol dose is {pcm}."
    hi_phon = proto_obj.get("hi_phonetic") or f"Pehla bhaag: {title}. Golden Rule: {rule}. Safe Paracetamol dose is {pcm}."

    en_sentences = split_into_clean_sentences(english_plan) if english_plan else []
    return {
        "English": {"native_tts": english_plan, "phonetic": english_plan, "chunks": en_sentences, "phonetic_chunks": en_sentences, "tl": "en", "lang_code": "en-IN"},
        "Telugu": {
            "display": f"### 🇮🇳 తెలుగు పూర్తి వైద్య మార్గదర్శకాలు (Complete 3-Part Telugu Action Plan)\n- **ముఖ్య నియమం:** {rule}\n- **పూర్తి సూచనలు:** {te_voice}\n- **బరువు ఆధారిత మోతాదు ({wt} kg):** పారాసిటమాల్: **{pcm}** | ORS: **{ors}**",
            "native_tts": te_voice, "phonetic": te_phon, "chunks": split_into_clean_sentences(te_voice), "phonetic_chunks": split_into_clean_sentences(te_phon), "tl": "te", "lang_code": "te-IN"
        },
        "Tamil": {
            "display": f"### 🇮🇳 தமிழ் முழு மருத்துவ வழிகாட்டுதல் (Complete 3-Part Tamil Action Plan)\n- **முக்கிய விதி:** {rule}\n- **முழு வழிமுறைகள்:** {ta_voice}\n- **அளவு ({wt} kg):** பாராசிட்டமால்: **{pcm}** | ORS: **{ors}**",
            "native_tts": ta_voice, "phonetic": ta_phon, "chunks": split_into_clean_sentences(ta_voice), "phonetic_chunks": split_into_clean_sentences(ta_phon), "tl": "ta", "lang_code": "ta-IN"
        },
        "Hindi": {
            "display": f"### 🇮🇳 हिन्दी संपूर्ण चिकित्सा दिशानिर्देश (Complete 3-Part Hindi Action Plan)\n- **मुख्य नियम:** {rule}\n- **संपूर्ण निर्देश:** {hi_voice}\n- **खुराक ({wt} kg):** पैरासिटामोल: **{pcm}** | ORS: **{ors}**",
            "native_tts": hi_voice, "phonetic": hi_phon, "chunks": split_into_clean_sentences(hi_voice), "phonetic_chunks": split_into_clean_sentences(hi_phon), "tl": "hi", "lang_code": "hi-IN"
        }
    }


def build_drug_multilingual_pack(status: str, interactions: list, dosing: dict) -> dict:
    wt = dosing["weight_kg"]
    pcm = dosing["paracetamol_dose"]
    ors = dosing["ors_4hr_deficit"]

    if interactions:
        it = interactions[0]
        sev = it["severity"]
        mech = it["mechanism"]
        alt = it["safe_alternative"]
        en_s = f"Drug Safety Alert: {sev}. Mechanism: {mech}. Recommended Safe Alternative: {alt}. Weight-based safe dosing for {wt} kilograms: Paracetamol {pcm}. WHO ORS fluid target: {ors}."
        te_s = f"మందుల భద్రతా హెచ్చరిక: తీవ్రమైన మందుల వైరుధ్యం కనుగొనబడింది. ఈ రెండు మందులు కలిపి వాడితే ప్రాణాంతక అంతర్గత రక్తస్రావం లేదా రక్తపోటు పడిపోయే ప్రమాదం ఉంది. సురక్షిత ప్రత్యామ్నాయం: డాక్టర్ సూచించిన మోతాదులో పారాసిటమాల్ మాత్రమే వాడండి. {wt} కిలోల బరువుకు సురక్షిత పారాసిటమాల్ మోతాదు: {pcm}. ఓ.ఆర్.ఎస్ ద్రవ లక్ష్యం: {ors}."
        te_p = f"Mandula Bhadratha Heccharika: {sev}. Ee mandulu kalipi vaadithe praananthaka rakthasravam jaruguthundi. Surakshitha Prathyamnayam: {alt}. {wt} kilola baruvuku Paracetamol mothadu: {pcm}."
        ta_s = f"மருந்து பாதுகாப்பு எச்சரிக்கை: ஆபத்தான மருந்து முரண்பாடு கண்டறியப்பட்டுள்ளது. இந்த மருந்துகளை ஒன்றாக உட்கொண்டால் உயிருக்கு ஆபத்தான உள் இரத்தப்போக்கு ஏற்படும். பாதுகாப்பான மாற்று: பாராசிட்டமால் மட்டுமே பயன்படுத்தவும். {wt} கிலோ எடைக்கான பாராசிட்டமால் அளவு: {pcm}. ஓ.ஆர்.எஸ் இலக்கு: {ors}."
        ta_p = f"Marunthu Paathukaappu Eccharikkai: {sev}. Intha marunthugalai ondraaga edutthaal ul irathappokku erpadum. Paathukaappaana Maatru: {alt}. {wt} kilo edaikku Paracetamol alavu: {pcm}."
        hi_s = f"दवा सुरक्षा चेतावनी: गंभीर दवा विरोधाभास पाया गया है। इन दवाओं को एक साथ लेने से जानलेवा आंतरिक रक्तस्राव या ब्लड प्रेशर गिरने का खतरा है। सुरक्षित विकल्प: केवल नियंत्रित मात्रा में पैरासिटामोल का उपयोग करें। {wt} किलोग्राम वजन के लिए सुरक्षित पैरासिटामोल खुराक: {pcm}। ओ.आर.एस लक्ष्य: {ors}।"
        hi_p = f"Dawa Suraksha Chetavani: {sev}. In dawaon ko ek saath lene se jaanleva internal bleeding ho sakti hai. Surakshit Vikalp: {alt}. {wt} kilogram wajan ke liye Paracetamol khurak: {pcm}."
    else:
        en_s = f"Drug Safety Audit Complete: No critical contraindication matched. Weight-based dosing for {wt} kilograms: Paracetamol {pcm}. WHO ORS fluid target: {ors}."
        te_s = f"మందుల భద్రతా ఆడిట్ పూర్తయింది: ఎలాంటి ప్రాణాంతక మందుల వైరుధ్యం కనుగొనబడలేదు. {wt} కిలోల బరువుకు సురక్షిత పారాసిటమాల్ మోతాదు: {pcm}. ఓ.ఆర్.ఎస్ ద్రవ లక్ష్యం: {ors}."
        te_p = f"Mandula Bhadratha Audit: Elanti praananthaka mandula vairudhyam ledu. {wt} kilola baruvuku Paracetamol mothadu: {pcm}."
        ta_s = f"மருந்து பாதுகாப்பு ஆய்வு முடிந்தது: ஆபத்தான மருந்து முரண்பாடுகள் எதுவும் இல்லை. {wt} கிலோ எடைக்கான பாராசிட்டமால் அளவு: {pcm}. ஓ.ஆர்.எஸ் இலக்கு: {ors}."
        ta_p = f"Marunthu Paathukaappu Aayvu: Aabathana marunthu muranpaadugal illai. {wt} kilo edaikku Paracetamol alavu: {pcm}."
        hi_s = f"दवा सुरक्षा ऑडिट पूरा हुआ: कोई खतरनाक दवा विरोधाभास नहीं मिला। {wt} किलोग्राम वजन के लिए सुरक्षित पैरासिटामोल खुराक: {pcm}। ओ.आर.एस लक्ष्य: {ors}।"
        hi_p = f"Dawa Suraksha Audit: Koi khatarnak dawa virodhabhas nahi mila. {wt} kilogram wajan ke liye Paracetamol khurak: {pcm}."

    return {
        "English": {"chunks": split_into_clean_sentences(en_s), "phonetic_chunks": split_into_clean_sentences(en_s), "tl": "en", "lang_code": "en-IN"},
        "Telugu": {"chunks": split_into_clean_sentences(te_s), "phonetic_chunks": split_into_clean_sentences(te_p), "tl": "te", "lang_code": "te-IN"},
        "Tamil": {"chunks": split_into_clean_sentences(ta_s), "phonetic_chunks": split_into_clean_sentences(ta_p), "tl": "ta", "lang_code": "ta-IN"},
        "Hindi": {"chunks": split_into_clean_sentences(hi_s), "phonetic_chunks": split_into_clean_sentences(hi_p), "tl": "hi", "lang_code": "hi-IN"}
    }


def build_trauma_multilingual_pack(res: dict, weight_kg: float) -> dict:
    gcs = res["gcs_total"]
    tbsa = res["burn_tbsa_pct"]
    tot = res["parkland_total_24h_ml"]
    f8 = res["parkland_first_8h"]
    n16 = res["parkland_next_16h"]

    en_s = f"ICU Trauma and Burn Assessment: Glasgow Coma Scale is {gcs} out of 15. {res['gcs_severity']} Burn evaluation for {tbsa} percent body surface area: {res['burn_alert']}. Parkland 24-hour fluid volume is {tot}. Give {f8}, followed by {n16}."
    te_s = f"ఐ.సి.యు ట్రామా మరియు కాలిన గాయాల నివేదిక: గ్లాస్గో కోమా స్కేల్ స్కోరు 15 కి {gcs}. నాడీ స్థితి: మెదడుకు తీవ్రమైన గాయం లేదా కోమా ప్రమాదం ఉంటే వెంటనే శ్వాస నాళం రక్షించండి. {weight_kg} కిలోల బరువు మరియు {tbsa} శాతం కాలిన గాయాలకు పార్క్‌ల్యాండ్ సూత్రం ప్రకారం 24 గంటల్లో ఇవ్వాల్సిన మొత్తం ద్రవాలు: {tot}. మొదటి 8 గంటల్లో {f8}, ఆ తర్వాతి 16 గంటల్లో {n16} ఇవ్వాలి."
    te_p = f"ICU Trauma mariyu Burn Nivedika: Glasgow Coma Scale score 15 ki {gcs}. {tbsa} shaatham kaalina gaayalaku Parkland formula prakaram 24 gantallo motham dravaalu: {tot}. Modati 8 gantallo {f8} ivvali."
    ta_s = f"தீவிர சிகிச்சை மற்றும் தீக்காய ஆய்வு: கிளாஸ்கோ கோமா அளவு 15-க்கு {gcs}. {weight_kg} கிலோ எடை மற்றும் {tbsa} சதவீதம் தீக்காயத்திற்கு பார்க்லேண்ட் விதிப்படி 24 மணி நேர மொத்த நீர்ம அளவு: {tot}. முதல் 8 மணி நேரத்தில் {f8}, அடுத்த 16 மணி நேரத்தில் {n16} கொடுக்கப்பட வேண்டும்."
    ta_p = f"ICU Trauma matrum Theekkaaya Aayvu: Glasgow Coma Scale alavu 15 kku {gcs}. {tbsa} sathaveetham theekkaayathirku 24 mani nera Parkland fluid alavu: {tot}. Muthal 8 mani nerathil {f8} kodukkavum."
    hi_s = f"आईसीयू ट्रॉमा और बर्न रिपोर्ट: ग्लासगो कोमा स्केल स्कोर 15 में से {gcs} है। {weight_kg} किलोग्राम वजन और {tbsa} प्रतिशत जले हुए शरीर के लिए पार्कलैंड फॉर्मूला के अनुसार 24 घंटे का कुल तरल पदार्थ: {tot}। पहले 8 घंटों में {f8}, और अगले 16 घंटों में {n16} दें।"
    hi_p = f"ICU Trauma aur Burn Report: Glasgow Coma Scale score 15 mein se {gcs} hai. {tbsa} pratishat burn ke liye 24 ghante ka kul Parkland fluid: {tot}. Pehle 8 ghanton mein {f8} dein."

    return {
        "English": {"chunks": split_into_clean_sentences(en_s), "phonetic_chunks": split_into_clean_sentences(en_s), "tl": "en", "lang_code": "en-IN"},
        "Telugu": {"chunks": split_into_clean_sentences(te_s), "phonetic_chunks": split_into_clean_sentences(te_p), "tl": "te", "lang_code": "te-IN"},
        "Tamil": {"chunks": split_into_clean_sentences(ta_s), "phonetic_chunks": split_into_clean_sentences(ta_p), "tl": "ta", "lang_code": "ta-IN"},
        "Hindi": {"chunks": split_into_clean_sentences(hi_s), "phonetic_chunks": split_into_clean_sentences(hi_p), "tl": "hi", "lang_code": "hi-IN"}
    }
