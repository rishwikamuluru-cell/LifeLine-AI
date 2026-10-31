
const VISUAL_CLINICAL_CARDS = {
    1: {
        badge: "EMERGENCY DISASTER • FLOOD & ORS",
        headline: "Flood Water Purification & Homemade WHO ORS Formula",
        caption: "Boil filtered water for 1 full minute. Mix 1 Liter safe water + 6 level tsp Sugar + 0.5 tsp Salt.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#f0f9ff"/><rect x="38" y="16" width="44" height="52" rx="6" fill="#bae6fd" stroke="#0284c7" stroke-width="2.5"/><text x="60" y="38" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#0369a1">1 Liter Boiled</text><text x="60" y="54" text-anchor="middle" font-size="9" font-weight="bold" fill="#0c4a6e">6 Sugar + ½ Salt</text><text x="60" y="86" text-anchor="middle" font-size="10" font-weight="bold" fill="#0284c7">WHO ORS FORMULA</text></svg>`,
        do_list: ["Filter murky water with clean cloth & boil vigorously for 1 full minute", "Mix 1 Liter safe water + 6 level tsp Sugar + 0.5 (half) tsp Salt", "Give 50–100 mL ORS after every loose stool for young children"],
        dont_list: ["NEVER drink unboiled floodwater directly", "NEVER add extra salt (>0.5 tsp causes dangerous salt toxicity)", "NEVER stop breastfeeding infants during diarrhea"],
        rec_foods: ["💧 Homemade WHO ORS", "🍚 Soft Rice Kanji", "🍌 Mashed Banana", "🥣 Diluted Curd", "💊 Zinc 20mg/day"],
        rec_next: "Rush to hospital if sunken eyes, no urine for 6 hrs, or extreme lethargy."
    },
    2: {
        badge: "EMERGENCY DISASTER • ELECTRICAL & BURN",
        headline: "Downed Power Wire Shock & 20-Min Burn Cooling",
        caption: "Turn off main power or push wire with a dry wooden stick. Cool burn under running water for 20 mins.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#fffbeb"/><polygon points="65,14 42,46 58,46 50,72 78,38 60,38" fill="#f59e0b" stroke="#b45309" stroke-width="1.5"/><text x="60" y="88" text-anchor="middle" font-size="10" font-weight="bold" fill="#92400e">Power Off • 20m Water</text></svg>`,
        do_list: ["Turn off main electricity or push live wire away with a dry wooden stick", "Cool thermal burn under gentle running tap water for 20 full minutes", "Cover burn loosely with clean plastic wrap or sterile cloth"],
        dont_list: ["NEVER touch electrocuted person with bare hands while wire is live", "NEVER apply toothpaste, butter, oil, turmeric, or ice on burns", "NEVER pop burn blisters"],
        rec_foods: ["🚰 20-Min Running Water", "🧃 Sip Oral ORS", "🛡️ Clean Plastic Wrap", "💊 Paracetamol for Pain"],
        rec_next: "If victim is unconscious/not breathing after power is off, start 110-BPM CPR immediately."
    },
    3: {
        badge: "EMERGENCY DISASTER • SNAKEBITE",
        headline: "Flood Snakebite Immobilization & ASV Protocol",
        caption: "Keep patient still, splint limb below heart level, remove rings, and rush to ASV hospital.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#fef2f2"/><rect x="28" y="24" width="64" height="22" rx="8" fill="#fca5a5" stroke="#dc2626" stroke-width="2"/><rect x="24" y="50" width="72" height="10" rx="4" fill="#92400e"/><circle cx="70" cy="35" r="3" fill="#991b1b"/><circle cx="77" cy="35" r="3" fill="#991b1b"/><text x="60" y="84" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">SPLINT • NO TOURNIQUET</text></svg>`,
        do_list: ["Keep patient completely calm & still (movement pumps venom faster)", "Immobilize bitten leg with a splint below heart level", "Remove rings, watches & tight clothes before swelling starts"],
        dont_list: ["NEVER tie a tight rope/tourniquet (causes gangrene & amputation)", "NEVER cut the bite wound with a blade or suck venom by mouth", "NEVER apply ice, herbs, or electric shock"],
        rec_foods: ["🚫 Nothing by Mouth (NPO)", "🏥 Urgent ASV Hospital", "🛏️ Carry on Stretcher", "🚑 Call 108 Ambulance"],
        rec_next: "Transport urgently to a hospital equipped with Anti-Snake Venom (ASV)."
    },
    4: {
        badge: "EMERGENCY DISASTER • FLOOD DROWNING",
        headline: "Flood Submersion Rescue & 5-Breath CPR Protocol",
        caption: "Pull safely from water, give 5 initial rescue breaths first, then 30 chest compressions : 2 breaths.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#eff6ff"/><circle cx="46" cy="36" r="14" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/><circle cx="74" cy="36" r="14" fill="#93c5fd" stroke="#1d4ed8" stroke-width="2"/><path d="M60 16 V42" stroke="#1e40af" stroke-width="3"/><text x="60" y="72" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">5 Breaths → 30:2 CPR</text><text x="60" y="88" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#dc2626">NO Stomach Thrusts</text></svg>`,
        do_list: ["Rescue from water using a rope, stick, or floatation can", "Give 5 initial mouth-to-mouth rescue breaths immediately if not breathing", "Start 30 chest compressions : 2 breaths at 110 BPM"],
        dont_list: ["NEVER press the stomach (Heimlich) to drain water from lungs", "NEVER hang a drowned child upside down by the legs", "NEVER leave a rescued drowning victim unattended"],
        rec_foods: ["🫁 5 Rescue Breaths First", "🫀 110-BPM Chest Push", "🧥 Warm Dry Blanket", "🏥 Mandatory Hospital Check"],
        rec_next: "Even if the person wakes up, take them to a hospital to check for water in the lungs."
    },
    5: {
        badge: "EMERGENCY DISASTER • HEATSTROKE",
        headline: "Severe Heatstroke & Sun Collapse Rapid Cooling",
        caption: "Move to cool shade, sponge neck/armpits with cool water + fan rapidly. NO Paracetamol.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#fff7ed"/><circle cx="60" cy="40" r="20" fill="#fb923c" stroke="#ea580c" stroke-width="2"/><path d="M30 66 Q60 56 90 66" stroke="#0284c7" stroke-width="4" fill="none"/><text x="60" y="88" text-anchor="middle" font-size="10" font-weight="bold" fill="#9a3412">Shade + Wet Towel + Fan</text></svg>`,
        do_list: ["Move victim immediately to cool shade or air-conditioned room", "Pour cool water over body & place wet packs on neck, armpits, and groin", "Fan vigorously to evaporate water and drop core body temperature"],
        dont_list: ["NEVER give Paracetamol or Aspirin for heatstroke (ineffective & harms liver)", "NEVER give liquids if the person is unconscious or confused", "NEVER wrap a heatstroke victim in thick blankets"],
        rec_foods: ["🧊 Wet Towels on Neck", "💨 Vigorous Fanning", "🧃 Cool ORS (If Alert)", "🥛 Buttermilk / Coconut Water"],
        rec_next: "Evacuate to emergency care if temperature exceeds 104°F or confusion persists."
    },
    6: {
        badge: "EMERGENCY DISASTER • HYPOTHERMIA",
        headline: "Cyclone Rain Exposure & Severe Cold Shivering",
        caption: "Remove wet clothes immediately, dry skin, wrap in dry blankets, and warm chest/neck first.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#f5f3ff"/><rect x="30" y="20" width="60" height="44" rx="8" fill="#c4b5fd" stroke="#6d28d9" stroke-width="2"/><text x="60" y="46" text-anchor="middle" font-size="10" font-weight="bold" fill="#4c1d95">Dry Blanket</text><text x="60" y="86" text-anchor="middle" font-size="10" font-weight="bold" fill="#5b21b6">Remove Wet Clothes</text></svg>`,
        do_list: ["Move out of wind/rain and remove all wet clothes immediately", "Dry the skin gently and wrap in dry blankets and a plastic wind-layer", "Apply warm cloth to neck, chest, and groin; give warm sweet drink if alert"],
        dont_list: ["NEVER rub cold hands or feet vigorously (damages tissue & heart)", "NEVER place directly into a hot water bath (causes shock)", "NEVER give alcohol"],
        rec_foods: ["🧥 Dry Blankets", "🍲 Warm Sweet Soup / Milk", "🔥 Warm Chest Compress", "🏠 Windproof Shelter"],
        rec_next: "Rush to hospital if shivering stops and the person becomes drowsy or slow-breathing."
    },
    7: {
        badge: "REGULAR ASSISTANCE • FEVER & DENGUE",
        headline: "Viral Fever, Flu & Dengue Platelet Protection",
        caption: "Use ONLY Paracetamol + lukewarm water sponging + heavy ORS/coconut water. NO Ibuprofen/Combiflam.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#f0fdf4"/><rect x="54" y="16" width="12" height="46" rx="6" fill="#fff" stroke="#16a34a" stroke-width="2"/><circle cx="60" cy="62" r="10" fill="#dc2626"/><rect x="57" y="30" width="6" height="28" fill="#dc2626"/><text x="60" y="88" text-anchor="middle" font-size="10" font-weight="bold" fill="#15803d">Paracetamol + Fluids</text></svg>`,
        do_list: ["Give weight-adjusted Paracetamol every 6 hours + lukewarm sponging", "Drink plenty of ORS, coconut water, pomegranate & clear soups", "Monitor platelet count (CBC) if fever lasts >3 days"],
        dont_list: ["NEVER take Ibuprofen, Aspirin, Combiflam, Brufen, or Diclofenac", "NEVER ignore warning signs when fever drops on Day 3–5", "NEVER take unprescribed antibiotics for viral fever"],
        rec_foods: ["🥥 Coconut Water", "💧 Fresh WHO ORS", "🍎 Pomegranate Juice", "🥣 Soft Khichdi / Porridge", "💊 Paracetamol Only"],
        rec_next: "Visit hospital immediately if severe stomach pain, vomiting, or bleeding gums occur."
    },
    8: {
        badge: "EMERGENCY • HEART & CHEST PAIN",
        headline: "Acute Chest Pain & Heart Attack (W-Position)",
        caption: "Seat in half-sitting W-Position with knees bent. Give 300mg uncoated Aspirin to chew slowly.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#ffe4e6"/><polyline points="15,48 40,48 48,24 56,70 64,18 72,62 80,48 105,48" fill="none" stroke="#e11d48" stroke-width="3"/><text x="60" y="88" text-anchor="middle" font-size="10" font-weight="bold" fill="#9f1239">W-Position • Chew Aspirin</text></svg>`,
        do_list: ["Seat patient in half-sitting W-Position (back supported, knees bent)", "Give 300 mg uncoated Aspirin tablet to chew slowly (if not allergic)", "Loosen tight shirt/belt and keep patient calm while calling 108"],
        dont_list: ["NEVER let a chest pain patient walk or climb stairs", "NEVER give Nitroglycerin/Sorbitrate if Sildenafil was taken in 48h", "NEVER delay hospital ECG thinking it is just gas/acidity"],
        rec_foods: ["🪑 Half-Sitting W-Pose", "💊 Chew 300mg Aspirin", "🚑 Call 108 Ambulance", "🚫 Do Not Walk"],
        rec_next: "Rush to an ECG & cardiac hospital immediately within the Golden Hour."
    },
    9: {
        badge: "REGULAR ASSISTANCE • FOOD POISONING",
        headline: "Food Poisoning, Vomiting, Acidity & Stomach Care",
        caption: "Sip small spoonfuls of ORS every 5 minutes. Eat bland curd rice/banana once vomiting settles.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#fefce8"/><circle cx="60" cy="44" r="24" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/><text x="60" y="48" text-anchor="middle" font-size="11" font-weight="bold" fill="#854d0e">Sip ORS Slowly</text><text x="60" y="86" text-anchor="middle" font-size="10" font-weight="bold" fill="#a16207">Curd Rice • No NSAIDs</text></svg>`,
        do_list: ["Sip small amounts of ORS or coconut water every 5–10 minutes", "Eat soothing bland food (curd rice, rice kanji, mashed banana) when hungry", "Rest the stomach and wash hands thoroughly with soap"],
        dont_list: ["NEVER take Ibuprofen, Aspirin, or Combiflam for stomach pain (causes ulcers)", "NEVER eat spicy, fried, oily food or heavy milk", "IF sharp pain moves to lower-right belly (Appendicitis), take NOTHING by mouth"],
        rec_foods: ["💧 Small Sips of ORS", "🥣 Cool Curd Rice", "🍌 Ripe Banana", "🥥 Tender Coconut", "🍚 Rice Kanji"],
        rec_next: "See a doctor if vomiting lasts >12 hours, blood appears, or lower-right belly pain worsens."
    },
    10: {
        badge: "EMERGENCY • BLEEDING & FRACTURE",
        headline: "Deep Cut, Uncontrolled Bleeding & Bone Fracture",
        caption: "Press firmly with a clean cloth for 10 continuous minutes. Splint broken bones without pushing bone.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#fef2f2"/><rect x="26" y="28" width="68" height="28" rx="8" fill="#fecaca" stroke="#dc2626" stroke-width="2"/><path d="M52 42 H68 M60 34 V50" stroke="#b91c1c" stroke-width="3"/><text x="60" y="86" text-anchor="middle" font-size="10" font-weight="bold" fill="#991b1b">10-Min Direct Pressure</text></svg>`,
        do_list: ["Press firmly over the bleeding wound with a clean cloth for 10 full minutes", "Elevate the bleeding arm/leg above heart level if no bone is broken", "Support suspected fractures above & below the joint with a padded splint"],
        dont_list: ["NEVER lift the cloth early to peek at the wound (breaks blood clot)", "NEVER pull out a deeply stuck glass/metal object", "NEVER push a protruding broken bone back inside"],
        rec_foods: ["🩸 10-Min Cloth Pressure", "🪵 Padded Wood Splint", "🧊 Covered Ice on Swelling", "💉 Tetanus Shot at Clinic"],
        rec_next: "Use the 10-Minute Bleeding Pressure Timer in Tab 5 and visit a clinic for sutures/X-ray."
    },
    11: {
        badge: "REGULAR ASSISTANCE • ASTHMA & BREATHING",
        headline: "Asthma Attack, Allergy & Wheezing (4×4×4 Rule)",
        caption: "Sit upright leaning forward. Give 4 puffs of blue Salbutamol inhaler (1 puff per minute).",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#e0e7ff"/><rect x="46" y="18" width="22" height="40" rx="5" fill="#3b82f6"/><rect x="46" y="46" width="34" height="16" rx="4" fill="#1d4ed8"/><text x="60" y="86" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e3a8a">Sit Upright • 4 Puffs</text></svg>`,
        do_list: ["Sit the patient upright leaning slightly forward on a chair", "Shake blue Salbutamol inhaler & give 1 puff every minute (up to 4 puffs)", "Take 4 slow deep breaths after each puff & loosen tight neck clothes"],
        dont_list: ["NEVER make a breathless or asthma patient lie flat on their back", "NEVER crowd around the patient or panic them", "NEVER use steam inhalation during an acute severe bronchospasm"],
        rec_foods: ["🪑 Sit Upright (Never Flat)", "💨 4 Puffs Blue Inhaler", "⏱️ Wait 4 Minutes", "🚑 Repeat & Call 108"],
        rec_next: "If breathing does not ease after 4 minutes, give 4 more puffs and rush to hospital."
    },
    12: {
        badge: "REGULAR ASSISTANCE • WEAKNESS & LOW SUGAR",
        headline: "Weakness, Dizziness & Diabetic Low Sugar (Rule of 15)",
        caption: "If conscious: Give 3 teaspoons of sugar in water or fruit juice, rest 15 mins, then give food.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#fdf4ff"/><rect x="40" y="18" width="40" height="48" rx="6" fill="#f5d0fe" stroke="#a21caf" stroke-width="2"/><text x="60" y="42" text-anchor="middle" font-size="10" font-weight="bold" fill="#86198f">3 tsp Sugar</text><text x="60" y="56" text-anchor="middle" font-size="9" font-weight="bold" fill="#701a75">Wait 15 Mins</text><text x="60" y="86" text-anchor="middle" font-size="10" font-weight="bold" fill="#86198f">RULE OF 15 RESCUE</text></svg>`,
        do_list: ["If conscious & shaky/sweating: Give 3 tsp sugar in water or half glass juice", "Wait 15 minutes, then give biscuits, bread, or a regular meal", "If fainted but breathing: Lay flat and raise legs 12 inches"],
        dont_list: ["NEVER inject Insulin during a low blood sugar episode (fatal)", "NEVER pour water or food into the mouth of an unconscious person", "NEVER let the person stand up suddenly after fainting"],
        rec_foods: ["🍬 3 Spoons Sugar Water", "🧃 Half Glass Fruit Juice", "🍪 Biscuits After 15m", "🚫 NO Insulin Injection"],
        rec_next: "If the patient becomes unconscious or does not recover in 15 minutes, rush to hospital."
    },
    13: {
        badge: "REGULAR ASSISTANCE • COLD, COUGH & THROAT",
        headline: "Cold, Cough, Tonsils & Sore Throat Home Care",
        caption: "Gargle warm salt water 4x daily, drink warm soup/turmeric milk, and take Paracetamol before meals.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#fff7ed"/><circle cx="60" cy="45" r="26" fill="#fed7aa" stroke="#ea580c" stroke-width="2"/><path d="M46 42 Q60 60 74 42" fill="#ef4444"/><text x="60" y="88" text-anchor="middle" font-size="10" font-weight="bold" fill="#9a3412">Warm Salt Gargle</text></svg>`,
        do_list: ["Gargle with warm salt water (1/2 tsp salt in 1 glass warm water) 4x daily", "Sip warm soup, ginger-tulsi tea, coconut water, or soft curd rice", "Take Paracetamol 500mg 30 mins before meals for throat pain"],
        dont_list: ["NO cold sodas, ice cream, fried, sour, or spicy crunchy foods", "NO unprescribed leftover antibiotics for viral cold/throat pain", "NO smoking or dusty exposure"],
        rec_foods: ["🧂 Warm Salt Gargle", "🍲 Warm Clear Soup", "🥣 Soft Curd Rice", "🍌 Mashed Banana", "💊 Paracetamol 500mg"],
        rec_next: "See a doctor if you cannot swallow saliva, have high fever >3 days, or shortness of breath."
    },
    14: {
        badge: "REGULAR ASSISTANCE • HEADACHE & TOOTHACHE",
        headline: "Severe Headache, Migraine & Dental Toothache Care",
        caption: "Rest in a quiet dark room, apply cold compress, rinse tooth with warm salt water + oral Paracetamol.",
        svg: `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#f0f9ff"/><circle cx="60" cy="44" r="24" fill="#bae6fd" stroke="#0284c7" stroke-width="2"/><path d="M48 36 L72 36" stroke="#dc2626" stroke-width="3"/><text x="60" y="88" text-anchor="middle" font-size="10" font-weight="bold" fill="#0369a1">Cold Pack • Saline Rinse</text></svg>`,
        do_list: ["For Headache/Migraine: Rest in a dark quiet room with a cool forehead cloth", "For Toothache: Rinse gently with warm salt water & apply cold pack on cheek", "Take standard oral Paracetamol (500mg) and drink plenty of water"],
        dont_list: ["NEVER place raw Aspirin or painkiller tablets directly on gums (burns gum tissue)", "NEVER skip meals or stare at bright mobile screens during migraine", "NEVER use sharp pins to poke a painful tooth"],
        rec_foods: ["🧊 Cool Forehead Pack", "🧂 Warm Saline Rinse", "💧 2 Glasses Water", "💊 Oral Paracetamol", "😴 Dark Room Rest"],
        rec_next: "Visit a doctor if headache comes with stiff neck, blurred vision, or facial swelling."
    }
};

const DEMO_SCENARIOS = {
    1:  { mode: "emergency", age: 2,  weight: 11, hr: 126, bp: 92,  spo2: 97, temp: 99.5,  avpu: "Alert", title: "1. Flood Diarrhea & ORS", text: "Our village is cut off by severe flooding with zero internet. Water is muddy and a 2-year-old child has severe watery diarrhea and dehydration. How do we purify the water and make homemade ORS with exact measurements?" },
    2:  { mode: "emergency", age: 34, weight: 70, hr: 115, bp: 112, spo2: 96, temp: 98.6,  avpu: "Alert", title: "2. Electric Shock & Burn", text: "During a cyclone storm, a person suffered an electrical shock from a fallen power wire and has a severe thermal burn on their arm. Bystanders want to apply toothpaste or butter to the burn. What is the correct protocol?" },
    3:  { mode: "emergency", age: 28, weight: 68, hr: 124, bp: 94,  spo2: 96, temp: 98.8,  avpu: "Alert", title: "3. Flood Snakebite", text: "During a flood, a person was bitten on the ankle by a snake in waterlogged grass. Bystanders want to tie a tight rope tourniquet around the leg and cut the wound with a blade. What exact steps should we take immediately?" },
    4:  { mode: "emergency", age: 12, weight: 38, hr: 130, bp: 90,  spo2: 89, temp: 97.2,  avpu: "Confused", title: "4. Flood Drowning & CPR", text: "A child was pulled from floodwater after near-drowning and is unresponsive and not breathing properly. Bystanders want to press the stomach or hang the child upside down to remove water. What is the exact resuscitation protocol?" },
    5:  { mode: "emergency", age: 45, weight: 65, hr: 128, bp: 96,  spo2: 96, temp: 104.2, avpu: "Confused", title: "5. Heatstroke & Sun Collapse", text: "A worker fainted in extreme hot sun with 104.2°F body temperature, hot dry skin, and dizziness. Can we give Paracetamol for sunstroke, and how do we cool them down immediately?" },
    6:  { mode: "emergency", age: 62, weight: 58, hr: 64,  bp: 102, spo2: 95, temp: 95.0,  avpu: "Alert", title: "8. Cyclone Cold & Shivering", text: "An elderly person was soaked in cold cyclone rain for hours and is shivering uncontrollably with cold pale skin and hypothermia. What are the exact warming steps and things to avoid?" },
    7:  { mode: "regular",   age: 14, weight: 42, hr: 104, bp: 108, spo2: 98, temp: 102.8, avpu: "Alert", title: "1. Viral Fever & Dengue", text: "A 14-year-old has a 102.8°F high fever, headache behind the eyes, and body ache during viral and dengue fever season. Can we give Ibuprofen, Combiflam, or Aspirin, and what is the safe home care?" },
    8:  { mode: "emergency", age: 56, weight: 74, hr: 108, bp: 138, spo2: 95, temp: 98.6,  avpu: "Alert", title: "6. Chest Pain & Heart Attack", text: "A 56-year-old has crushing pain in the center of the chest radiating to the left arm and jaw with cold sweating for 10 minutes. What position and immediate medication should we give?" },
    9:  { mode: "regular",   age: 21, weight: 55, hr: 94,  bp: 112, spo2: 98, temp: 99.4,  avpu: "Alert", title: "2. Food Poisoning & Vomiting", text: "A student has food poisoning with repeated vomiting, stomach cramps, acidity, and loose stools after eating outside food. What fluids, diet, and warning signs should we follow?" },
    10: { mode: "emergency", age: 26, weight: 64, hr: 112, bp: 104, spo2: 98, temp: 98.6,  avpu: "Alert", title: "7. Deep Cut, Bleeding & Fracture", text: "After a road accident, a person has a deep bleeding cut on the forearm and a swollen painful leg with a suspected bone fracture. How do we stop the bleeding and splint the leg safely?" },
    11: { mode: "regular",   age: 19, weight: 54, hr: 110, bp: 118, spo2: 94, temp: 98.6,  avpu: "Alert", title: "5. Asthma & Breathing Trouble", text: "A patient is having an asthma attack with wheezing, coughing, and shortness of breath. How should we position them and use their blue Salbutamol inhaler?" },
    12: { mode: "regular",   age: 52, weight: 66, hr: 100, bp: 110, spo2: 98, temp: 98.4,  avpu: "Alert", title: "6. Weakness, Fainting & Low Sugar", text: "A diabetic patient suddenly became shaky, sweating profusely, dizzy, and weak with low blood sugar (hypoglycemia). Should we inject insulin or give sugar, and what is the Rule of 15?" },
    13: { mode: "regular",   age: 19, weight: 60, hr: 86,  bp: 118, spo2: 99, temp: 100.4, avpu: "Alert", title: "3. Cold, Cough & Sore Throat", text: "I am suffering with severe sore throat, tonsils, cold, and painful swallowing and unable to eat solid food. What home remedies, diet, and safe tablets should I take?" },
    14: { mode: "regular",   age: 24, weight: 62, hr: 84,  bp: 120, spo2: 99, temp: 98.6,  avpu: "Alert", title: "4. Severe Headache & Toothache", text: "A patient has a throbbing migraine headache and severe molar toothache with swollen gums. Can they put raw Aspirin on the gum, and what is the safe relief protocol?" }
};

const DISASTER_GUIDES = {
    cyclone: {
        title: "🌀 Cyclone & Hurricane Winds Survival Protocol",
        before: ["Boil & store 15 Liters of drinking water + dry food (roasted gram, biscuits, jaggery).", "Charge phones, powerbanks, and LED torches to 100%. Keep Aadhaar & medicines in plastic.", "Tape glass windows in an X-pattern and move livestock to higher shelter."],
        during: ["Stay inside an inner hallway/room away from windows. Turn off main electricity & LPG gas valve.", "EYE-OF-CYCLONE WARNING: If wind suddenly stops, DO NOT go outside! Violent winds will resume from the opposite side within minutes.", "If water enters the house, evacuate to the cyclone shelter or concrete upper floor."],
        after: ["Never wade through flooded streets with fallen electric wires.", "Drink only boiled or chlorine-treated water. Check shoes/beds for snakes.", "Dial 1078, 1070, or 112 for NDRF rescue."],
        speech: {
            English: { tl: "en", chunks: ["Cyclone Survival Guide: Store boiled drinking water, dry food, medicines, and a charged powerbank.", "During the cyclone, turn off the main electricity switch and gas valve, and never go outside during the calm eye of the storm.", "After the cyclone, stay away from fallen power lines, drink boiled water, and call 1078 or 112 for rescue."] },
            Telugu: { tl: "te", chunks: ["తుఫాను రక్షణ మార్గదర్శకాలు: త్రాగునీరు, పొడి ఆహారం, మందులు మరియు పవర్ బ్యాంక్ సిద్ధంగా ఉంచుకోండి.", "ఇంటి మెయిన్ కరెంట్ స్విచ్ మరియు గ్యాస్ ఆఫ్ చేయండి. గాలి ఆగిపోయినప్పుడు బయటకు రావద్దు, తుఫాను కన్ను దాటాక మళ్లీ తీవ్రమైన గాలులు వస్తాయి.", "తెగిపడిన కరెంట్ తీగలను తాకవద్దు, మరిగించిన నీరు మాత్రమే తాగండి, సహాయం కోసం 1078 లేదా 112 కి కాల్ చేయండి."] },
            Tamil: { tl: "ta", chunks: ["புயல் பாதுகாப்பு வழிகாட்டுதல்: குடிநீர், உலர் உணவு, மருந்துகள் மற்றும் பவர் பேங்கை தயாராக வைக்கவும்.", "மெயின் சுவிட்ச் மற்றும் கேஸ் சிலிண்டரை அணைக்கவும். காற்று திடீரென நின்றால் வெளியே வர வேண்டாம்.", "அறுந்த மின் கம்பிகளைத் தொட வேண்டாம், உதவிக்கு 1078 அல்லது 112 ஐ அழைக்கவும்."] },
            Hindi: { tl: "hi", chunks: ["चक्रवात सुरक्षा निर्देश: पीने का पानी, सूखा भोजन, दवाइयां और चार्ज किया हुआ पावरबैंक रखें।", "बिजली का मेन स्विच और गैस बंद कर दें। हवा अचानक रुकने पर बाहर न निकलें।", "टूटे बिजली के तारों से दूर रहें और मदद के लिए 1078 या 112 पर कॉल करें।"] }
        }
    },
    flood: {
        title: "🌊 Flash Flood & House Submersion Protocol",
        before: ["Move medicines, food grains, and documents to the highest shelf or upper floor.", "Tie empty sealed plastic cans or coconuts together as emergency floatation rafts."],
        during: ["NEVER walk through moving floodwater deeper than your ankles (6 inches knocks you down).", "Turn off main electricity immediately! Never touch switches with wet hands.", "Go to the open terrace/rooftop (never a closed attic) and trigger the Tab 3 Rescue Siren."],
        after: ["Boil water for 1 full minute or add 4 drops of chlorine bleach per liter of cloudy water.", "Prepare WHO ORS (1L safe water + 6 tsp sugar + 0.5 tsp salt) to prevent cholera."],
        speech: {
            English: { tl: "en", chunks: ["Flood Survival Guide: Turn off main electricity and gas immediately and move to the open rooftop.", "Never walk through moving floodwater, and use the LifeLine SOS Siren to signal rescue boats.", "Boil drinking water for 1 minute and mix 6 spoons sugar with half spoon salt in 1 liter water for ORS."] },
            Telugu: { tl: "te", chunks: ["వరద రక్షణ మార్గదర్శకాలు: మెయిన్ కరెంట్ స్విచ్ ఆఫ్ చేసి వెంటనే ఎత్తైన ప్రదేశానికి లేదా డాబా పైకి వెళ్లండి.", "ప్రవహించే వరద నీటిలో నడవద్దు. త్రాగునీటిని ఒక నిమిషం మరిగించండి మరియు ఓ.ఆర్.ఎస్ తాగించండి."] },
            Tamil: { tl: "ta", chunks: ["வெள்ள பாதுகாப்பு: மெயின் சுவிட்சை அணைத்துவிட்டு உயரமான இடத்திற்குச் செல்லவும்.", "ஓடும் வெள்ள நீரில் நடக்க வேண்டாம். குடிநீரை கொதிக்க வைத்துக் குடிக்கவும்."] },
            Hindi: { tl: "hi", chunks: ["बाढ़ सुरक्षा निर्देश: बिजली का मेन स्विच बंद करें और तुरंत ऊंचे स्थान या छत पर जाएं।", "बहते पानी में न चलें और पीने के पानी को एक मिनट तक उबालें।"] }
        }
    },
    lightning: {
        title: "⚡ Lightning & Downed Wire Safety Protocol",
        before: ["30-30 Rule: Go inside a concrete building immediately when thunder sounds.", "Unplug TVs, chargers, and refrigerators."],
        during: ["NEVER stand under a tall tree or in open farm fields.", "Stay away from metal pipes, window frames, and running tap water."],
        after: ["It is 100% safe to touch a lightning strike victim—start 110-BPM CPR immediately if not breathing!"],
        speech: {
            English: { tl: "en", chunks: ["Lightning Safety: Go inside a concrete building immediately and never shelter under a tree.", "If someone is struck by lightning, touch them safely and start 110 BPM CPR if they are not breathing."] },
            Telugu: { tl: "te", chunks: ["పిడుగు భద్రతా సూచనలు: చెట్ల కింద నిలబడకుండా వెంటనే పక్కా భవనంలోకి వెళ్లండి.", "పిడుగు పడిన వ్యక్తికి శ్వాస లేకపోతే వెంటనే సి.పి.ఆర్ ప్రారంభించండి."] },
            Tamil: { tl: "ta", chunks: ["மின்னல் பாதுகாப்பு: மரங்களுக்கு அடியில் நிற்காமல் கட்டிடத்திற்குள் செல்லவும்.", "மின்னல் தாக்கிய நபருக்கு உடனடியாக சி.பி.ஆர் அளிக்கவும்."] },
            Hindi: { tl: "hi", chunks: ["आकाशीय बिजली सुरक्षा: पेड़ के नीचे न खड़े हों, पक्के मकान में जाएं और घायल को तुरंत सीपीआर दें।"] }
        }
    },
    heatwave: {
        title: "☀️ Heatwave & Sunstroke Cooling Protocol",
        before: ["Drink ORS, buttermilk (majjiga), or coconut water every hour.", "Avoid outdoor labor between 11 AM and 4 PM."],
        during: ["Move heatstroke victim to cool shade, pour water over body, apply wet cloths to neck/armpits, and fan rapidly."],
        after: ["STRICT DONT: NEVER give Paracetamol or Aspirin for environmental sunstroke!"],
        speech: {
            English: { tl: "en", chunks: ["Heatstroke Protocol: Move victim to shade, sponge with cool water, and fan rapidly. Never give Paracetamol for heatstroke."] },
            Telugu: { tl: "te", chunks: ["వడదెబ్బ రక్షణ: రోగిని నీడకు చేర్చి చల్లని నీటితో తుడుస్తూ గాలి విసరండి. వడదెబ్బకు పారాసిటమాల్ ఇవ్వకండి."] },
            Tamil: { tl: "ta", chunks: ["வெயில் பாதுகாப்பு: நோயாளியை நிழலில் வைத்து குளிர்ந்த நீரால் துடைக்கவும். பாராசிட்டமால் கொடுக்க வேண்டாம்."] },
            Hindi: { tl: "hi", chunks: ["लू सुरक्षा: मरीज को छाया में लिटाकर ठंडे पानी से पोंछें और हवा करें। हीटस्ट्रोक में पैरासिटामोल न दें।"] }
        }
    },
    earthquake: {
        title: "🌍 Earthquake Drop-Cover-Hold Protocol",
        before: ["Secure heavy cupboards and gas cylinders."],
        during: ["DROP to knees, take COVER under a strong table, and HOLD ON.", "NEVER use elevators during shaking."],
        after: ["Turn off gas & electricity and move to open ground."],
        speech: {
            English: { tl: "en", chunks: ["Earthquake Protocol: Drop, Cover under a sturdy table, and Hold On. Never use elevators."] },
            Telugu: { tl: "te", chunks: ["భూకంప రక్షణ: వెంటనే బలమైన టేబుల్ కింద తల దాచుకోండి. లిఫ్ట్ వాడవద్దు."] },
            Tamil: { tl: "ta", chunks: ["நிலநடுக்க பாதுகாப்பு: மேஜையின் அடியில் பாதுகாப்பாக இருக்கவும். லிஃப்ட் பயன்படுத்த வேண்டாம்."] },
            Hindi: { tl: "hi", chunks: ["भूकंप सुरक्षा: मजबूत मेज के नीचे सिर छुपाएं और लिफ्ट का उपयोग बिल्कुल न करें।"] }
        }
    },
    blackout: {
        title: "🔦 Power Blackout & Medicine Cooling Protocol",
        before: ["Turn on phone Ultra Battery Saver and click Save Offline in Tab 1."],
        during: ["Keep Insulin vials cool inside a damp clay pot (matka)—never freeze directly on ice.", "NEVER run generators or charcoal stoves inside a closed room."],
        after: ["Unplug appliances before power returns to avoid surge damage."],
        speech: {
            English: { tl: "en", chunks: ["Power Blackout Guide: Keep insulin inside a cool damp clay pot and never run generators indoors."] },
            Telugu: { tl: "te", chunks: ["విద్యుత్ అంతరాయం: ఇన్సులిన్ మందులను చల్లని మట్టి కుండలో ఉంచండి. గదిలో జనరేటర్ వాడవద్దు."] },
            Tamil: { tl: "ta", chunks: ["மின் தடை பாதுகாப்பு: இன்சுலின் மருந்தை மண் பானையில் வைக்கவும். அறைக்குள் ஜெனரேட்டர் இயக்க வேண்டாம்."] },
            Hindi: { tl: "hi", chunks: ["बिजली कटौती: इंसुलिन को मिट्टी के घड़े में ठंडा रखें और बंद कमरे में जनरेटर न चलाएं।"] }
        }
    }
};

window.currentAssistanceMode = "emergency";
window.activeScenarioId = 1;
window.isManualMode = false;
window.latestSpeechPacks = {};
window.latestManualSpeechPacks = {
    English: { tl: "en", chunks: [
        "Welcome to LifeLine AI. Use the top bar right below the navigation tabs to switch between Emergency and Disaster Mode, Regular Daily Medical Assistance, or click Enter Symptom Manually.",
        "Tab 2 provides cyclone and flood survival guides plus water purification math. Tab 3 gives 24 by 7 emergency helplines and an offline rescue siren."
    ]},
    Telugu: { tl: "te", chunks: [
        "లైఫ్‌లైన్ ఏ.ఐ కి స్వాగతం. పైన ఉన్న బటన్ల ద్వారా అత్యవసర విపత్తు మోడ్, రోజువారీ వైద్య సహాయం, లేదా ఎంటర్ మాన్యువల్లీ ఎంచుకోండి.",
        "రెండవ ట్యాబ్‌లో తుఫాను మరియు వరద రక్షణ, మూడవ ట్యాబ్‌లో 112, 108 హెల్ప్‌లైన్ నంబర్లు మరియు రెస్క్యూ సైరన్ ఉంటాయి."
    ]},
    Tamil: { tl: "ta", chunks: [
        "லைஃப்லைன் ஏ.ஐ கையேட்டிற்கு வரவேற்கிறோம். மேலே உள்ள பொத்தான்கள் மூலம் அவசர உதவி, தினசரி மருத்துவ உதவி அல்லது நேரடி உள்ளீட்டைத் தேர்ந்தெடுக்கவும்."
    ]},
    Hindi: { tl: "hi", chunks: [
        "लाइफलाइन एआई में आपका स्वागत है। ऊपर दिए गए बटनों से आपातकालीन मोड, दैनिक चिकित्सा सहायता या मैन्युअल रूप से लक्षण दर्ज करने का विकल्प चुनें।"
    ]}
};

window.latestDrugSpeechPacks = {};
window.latestTraumaSpeechPacks = {};
window.latestDisasterSpeechPacks = DISASTER_GUIDES.cyclone.speech;
window.currentPlaybackSpeed = 1.0;
window.activeAudioPlayer = null;
window.sharedAudioCtx = null;
window.speechSessionId = 0;
window.isMicListening = false;
window.recognitionInstance = null;
window.micCommittedText = "";

let cachedQueue = [];
let cprInterval = null;
let cprBeatCount = 0;
let washTimerInterval = null;
let washSecondsRemaining = 0;
let sirenInterval = null;
let strobeInterval = null;
const NL = String.fromCharCode(10);

// =====================================================================
// TOP BAR: SWITCH BETWEEN 1. EMERGENCY MODE & 2. REGULAR DAILY ASSISTANCE
// =====================================================================
function setAssistanceMode(modeName) {
    window.currentAssistanceMode = modeName;
    window.isManualMode = false;
    playConfirmationChime(587.33, 880.0);

    const emBtn = document.getElementById("modeBtnEmergency");
    const regBtn = document.getElementById("modeBtnRegular");
    const manBtn = document.getElementById("manualEntryBtn");
    const emSec = document.getElementById("emergencyCardsSection");
    const regSec = document.getElementById("regularCardsSection");
    const heading = document.getElementById("leftPanelHeading");
    const runBtn = document.getElementById("runBtn");

    if (manBtn) manBtn.classList.remove("active-manual");

    if (modeName === "regular") {
        if (emBtn) emBtn.classList.remove("active-mode");
        if (regBtn) regBtn.classList.add("active-mode");
        if (emSec) emSec.style.display = "none";
        if (regSec) regSec.style.display = "block";
        if (heading) heading.innerHTML = "🩺 Step 1: Regular Daily Medical Assistance (Tap a Card, Body Part, or Type)";
        if (runBtn) {
            runBtn.style.background = "linear-gradient(135deg, #16a34a 0%, #15803d 100%)";
            runBtn.innerText = "🩺 GET DAILY MEDICAL CARE, HOME REMEDIES & VOICE GUIDE";
        }
        selectScenario(7, true);
    } else {
        if (emBtn) emBtn.classList.add("active-mode");
        if (regBtn) regBtn.classList.remove("active-mode");
        if (emSec) emSec.style.display = "block";
        if (regSec) regSec.style.display = "none";
        if (heading) heading.innerHTML = "🚨 Step 1: Emergency &amp; Disaster Triage (Tap a Card, Body Part, or Type)";
        if (runBtn) {
            runBtn.style.background = "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)";
            runBtn.innerText = "🚨 GENERATE VISUAL GUIDE, SMART RECOMMENDATIONS & VOICE";
        }
        selectScenario(1, true);
    }
}

function onBodySpotClick(part) {
    if (window.currentAssistanceMode === "regular") {
        if (part === "head") selectScenario(14, true);
        else if (part === "throat") selectScenario(13, true);
        else if (part === "chest") selectScenario(11, true);
        else if (part === "stomach") selectScenario(9, true);
        else if (part === "arm") selectScenario(12, true);
        else selectScenario(7, true);
    } else {
        if (part === "head") selectScenario(5, true);
        else if (part === "throat") selectScenario(4, true);
        else if (part === "chest") selectScenario(8, true);
        else if (part === "stomach") selectScenario(1, true);
        else if (part === "arm") selectScenario(2, true);
        else if (part === "leg") selectScenario(10, true);
        else selectScenario(3, true);
    }
}

// =====================================================================
// TOP BAR BUTTON 3: ENTER SYMPTOM & VITALS MANUALLY (BELOW RED LINE)
// =====================================================================
function enableManualEntryMode() {
    window.isManualMode = true;
    window.activeScenarioId = 0;
    playConfirmationChime(659.25, 987.77);

    for (let i = 1; i <= 14; i++) {
        const b = document.getElementById("scenBtn" + i);
        if (b) {
            b.classList.remove("active-scenario");
            b.blur();
        }
    }

    const manBtn = document.getElementById("manualEntryBtn");
    if (manBtn) manBtn.classList.add("active-manual");

    const vitalsBox = document.getElementById("vitalsDetailsBox");
    if (vitalsBox) vitalsBox.open = true;

    const lbl = document.getElementById("symptomBoxLabel");
    if (lbl) lbl.innerHTML = "✍️ <b style='color:#6d28d9;'>MANUAL SYMPTOM MODE ACTIVE — Type Any Emergency or Daily Symptom Below:</b>";

    const cardBox = document.getElementById("manualInputCard");
    if (cardBox) cardBox.classList.add("manual-active-box");

    const box = document.getElementById("situationText");
    if (box) {
        box.value = "";
        box.focus();
    }
    showGlassToast("✍️ Manual Entry Ready at Top — Type or Speak Any Symptom!");
}

function clearManualInput() {
    enableManualEntryMode();
}

function onManualTyping() {
    if (!window.isManualMode) {
        window.isManualMode = true;
        window.activeScenarioId = 0;
        for (let i = 1; i <= 14; i++) {
            const b = document.getElementById("scenBtn" + i);
            if (b) b.classList.remove("active-scenario");
        }
        const manBtn = document.getElementById("manualEntryBtn");
        if (manBtn) manBtn.classList.add("active-manual");
        const cardBox = document.getElementById("manualInputCard");
        if (cardBox) cardBox.classList.add("manual-active-box");
    }
}

function enableManualDrugMode() {
    playConfirmationChime(587.33, 880.0);
    for (let i = 1; i <= 4; i++) {
        const b = document.getElementById("drugBtn" + i);
        if (b) b.classList.remove("active-scenario");
    }
    const inp = document.getElementById("drugInputText");
    if (inp) {
        inp.value = "";
        inp.classList.add("manual-active-box");
        inp.focus();
    }
    showGlassToast("✍️ Type Any Custom Medicines & Weight Below!");
}

// =====================================================================
// DYNAMIC VISUAL ILLUSTRATION & SMART RECOMMENDATIONS
// =====================================================================
function detectVisualCardKey(queryText) {
    const q = (queryText || "").toLowerCase();
    if (q.indexOf("flood") !== -1 && (q.indexOf("ors") !== -1 || q.indexOf("diarrhea") !== -1 || q.indexOf("purify") !== -1)) return 1;
    if (q.indexOf("electric") !== -1 || q.indexOf("wire") !== -1 || q.indexOf("burn") !== -1) return 2;
    if (q.indexOf("snake") !== -1 || q.indexOf("venom") !== -1 || q.indexOf("cobra") !== -1) return 3;
    if (q.indexOf("drown") !== -1 || q.indexOf("submerg") !== -1) return 4;
    if (q.indexOf("heatstroke") !== -1 || q.indexOf("sunstroke") !== -1 || q.indexOf("hot sun") !== -1) return 5;
    if (q.indexOf("hypothermia") !== -1 || q.indexOf("shiver") !== -1 || q.indexOf("wet clothes") !== -1) return 6;
    if (q.indexOf("dengue") !== -1 || q.indexOf("fever") !== -1 || q.indexOf("malaria") !== -1) return 7;
    if (q.indexOf("chest pain") !== -1 || q.indexOf("heart") !== -1 || q.indexOf("cardiac") !== -1) return 8;
    if (q.indexOf("food poison") !== -1 || q.indexOf("vomit") !== -1 || q.indexOf("stomach") !== -1) return 9;
    if (q.indexOf("bleed") !== -1 || q.indexOf("fracture") !== -1 || q.indexOf("deep cut") !== -1) return 10;
    if (q.indexOf("asthma") !== -1 || q.indexOf("wheez") !== -1 || q.indexOf("inhaler") !== -1) return 11;
    if (q.indexOf("sugar") !== -1 || q.indexOf("hypoglycemia") !== -1 || q.indexOf("faint") !== -1 || q.indexOf("diabetic") !== -1) return 12;
    if (q.indexOf("tonsil") !== -1 || q.indexOf("throat") !== -1 || q.indexOf("cough") !== -1 || q.indexOf("cold") !== -1) return 13;
    if (q.indexOf("headache") !== -1 || q.indexOf("migraine") !== -1 || q.indexOf("tooth") !== -1) return 14;
    return 0;
}

function buildDynamicCustomCardFromResponse(queryText, data) {
    const topProto = (data.retrieved_protocols && data.retrieved_protocols[0]) ? data.retrieved_protocols[0] : {};
    const ca = data.clinical_assessment || {};
    const pd = data.precision_dosing || {};
    const planText = data.ai_action_plan || "";

    const badge = (topProto.category || "CUSTOM CLINICAL TRIAGE").toUpperCase();
    const headline = topProto.title || "Custom Patient Symptom Assessment";
    const caption = topProto.golden_rule || "Follow verified immediate relief steps, weight-adjusted dosing, and clinical red flags.";

    const customSvg = `<svg viewBox="0 0 120 100" width="110" height="95"><rect width="120" height="100" rx="12" fill="#f5f3ff"/><circle cx="60" cy="40" r="24" fill="#ddd6fe" stroke="#7c3aed" stroke-width="2.5"/><path d="M52 40 H68 M60 32 V48" stroke="#5b21b6" stroke-width="4" stroke-linecap="round"/><text x="60" y="86" text-anchor="middle" font-size="10" font-weight="bold" fill="#5b21b6">CUSTOM AI TRIAGE</text></svg>`;

    const lines = planText.split(NL);
    const doList = [];
    const dontList = [];
    let currentSec = 0;

    for (let i = 0; i < lines.length; i++) {
        const ln = lines[i].trim();
        if (ln.indexOf("1. IMMEDIATE") !== -1) currentSec = 1;
        else if (ln.indexOf("2. THINGS TO AVOID") !== -1) currentSec = 2;
        else if (ln.indexOf("3. WHEN TO SEE") !== -1 || ln.indexOf("🇮🇳") !== -1) currentSec = 3;
        else if ((ln.indexOf("- ") === 0 || ln.indexOf("* ") === 0 || ln.indexOf("•") === 0) && ln.length > 6) {
            const cleanBullet = ln.replace(/^[-*•]\s*/, "").replace(/\*\*/g, "");
            if (currentSec === 1 && doList.length < 3) doList.push(cleanBullet.substring(0, 95));
            else if (currentSec === 2 && dontList.length < 3) dontList.push(cleanBullet.substring(0, 95));
        }
    }

    if (!doList.length) {
        doList.push(caption);
        doList.push("Safe Paracetamol Dose: " + (pd.paracetamol_dose || "As directed"));
        doList.push("Keep patient calm, hydrated, and monitor vital signs.");
    }
    if (!dontList.length) {
        dontList.push("Avoid unprescribed painkillers (NSAIDs) or folk remedies");
        dontList.push("Do not ignore worsening breathing or severe pain");
    }

    return {
        badge: badge,
        headline: headline,
        caption: caption,
        svg: customSvg,
        do_list: doList,
        dont_list: dontList,
        rec_foods: ["💧 Oral ORS / Clean Water", "💊 Safe Dose: " + (pd.weight_kg || 60) + "kg", "🩺 Monitor Vitals", "📞 Call 104 / 108 if severe"],
        rec_next: "Priority: " + (ca.priority || "Monitor symptoms closely and consult a doctor if red flags appear.")
    };
}

function renderVisualAndSmartCards(scenNum, customCardObj) {
    const card = customCardObj || VISUAL_CLINICAL_CARDS[scenNum] || VISUAL_CLINICAL_CARDS[1];
    const heroBox = document.getElementById("visualGuideContainer");
    const recsBox = document.getElementById("smartRecsContainer");

    if (heroBox) {
        heroBox.innerHTML =
            "<div class='visual-hero-card'>" +
                "<div class='visual-svg-frame'>" + card.svg + "</div>" +
                "<div>" +
                    "<span class='pill pill-green' style='margin-bottom:4px;'>✨ " + card.badge + "</span>" +
                    "<h3 style='margin:2px 0 4px 0; border:none; padding:0; font-size:17px; color:#0f172a;'>" + card.headline + "</h3>" +
                    "<p style='margin:0; font-size:13px; color:#334155; font-weight:600;'>⚡ " + card.caption + "</p>" +
                "</div>" +
            "</div>";
    }

    if (recsBox) {
        const doHtml = card.do_list.map(function(x) { return "<div style='font-size:12px; margin-bottom:4px;'>✔️ " + x + "</div>"; }).join("");
        const dontHtml = card.dont_list.map(function(x) { return "<div style='font-size:12px; margin-bottom:4px;'>🚫 " + x + "</div>"; }).join("");
        const chipsHtml = card.rec_foods.map(function(c) { return "<span class='rec-chip'>" + c + "</span>"; }).join("");

        recsBox.innerHTML =
            "<div class='smart-cards-grid'>" +
                "<div class='smart-card smart-do'>" +
                    "<h4 style='color:#15803d;'>✅ DO THIS IMMEDIATELY</h4>" + doHtml +
                "</div>" +
                "<div class='smart-card smart-dont'>" +
                    "<h4 style='color:#b91c1c;'>❌ STRICTLY AVOID</h4>" + dontHtml +
                "</div>" +
                "<div class='smart-card smart-rec'>" +
                    "<h4 style='color:#6d28d9;'>💡 SMART AI RECOMMENDATIONS</h4>" +
                    "<div style='font-size:11.5px; color:#4c1d95; font-weight:700;'>Recommended Diet / Care Items:</div>" +
                    "<div class='smart-chip-list'>" + chipsHtml + "</div>" +
                    "<div style='font-size:11.5px; color:#5b21b6; margin-top:6px;'><b>Next Step:</b> " + card.rec_next + "</div>" +
                "</div>" +
            "</div>";
    }
}

function showGlassToast(message) {
    const container = document.getElementById("toastContainer");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "glass-toast";
    toast.innerHTML = "✨ " + message;
    container.appendChild(toast);
    setTimeout(function() {
        toast.style.opacity = "0";
        setTimeout(function() { if (toast.parentNode) toast.parentNode.removeChild(toast); }, 250);
    }, 2200);
}

function getAudioContext() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!window.sharedAudioCtx && AudioCtx) window.sharedAudioCtx = new AudioCtx();
    if (window.sharedAudioCtx && window.sharedAudioCtx.state === "suspended") window.sharedAudioCtx.resume();
    return window.sharedAudioCtx;
}

function playConfirmationChime(f1, f2) {
    try {
        const ctx = getAudioContext();
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f1 || 587.33, ctx.currentTime);
        osc.frequency.setValueAtTime(f2 || 880.0, ctx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.18);
    } catch (e) {}
}

function toggleSosSiren() {
    const topBtn = document.getElementById("topSirenBtn");
    const mainBtn = document.getElementById("mainSirenBtn");
    if (sirenInterval) {
        clearInterval(sirenInterval); sirenInterval = null;
        if (topBtn) topBtn.innerText = "🔊 Rescue Siren";
        if (mainBtn) mainBtn.innerText = "🔊 START LOUD RESCUE SIREN";
        showGlassToast("Rescue Siren Stopped");
        return;
    }
    const ctx = getAudioContext();
    let highTone = true;
    if (topBtn) topBtn.innerText = "⏹️ Stop Siren";
    if (mainBtn) mainBtn.innerText = "⏹️ STOP RESCUE SIREN";
    showGlassToast("🚨 Rescue Siren Active!");
    function pulse() {
        if (!ctx) return;
        const osc = ctx.createOscillator(); const g = ctx.createGain();
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(highTone ? 880 : 580, ctx.currentTime);
        g.gain.setValueAtTime(0.24, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.42);
        osc.connect(g); g.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + 0.42);
        highTone = !highTone;
    }
    pulse();
    sirenInterval = setInterval(pulse, 450);
}

function startSosBeacon() {
    const overlay = document.getElementById("sosStrobeOverlay");
    if (!overlay) return;
    overlay.style.display = "flex";
    if (!sirenInterval) toggleSosSiren();
    let redState = true;
    if (strobeInterval) clearInterval(strobeInterval);
    strobeInterval = setInterval(function() {
        overlay.style.background = redState ? "#ffffff" : "#dc2626";
        overlay.style.color = redState ? "#dc2626" : "#ffffff";
        redState = !redState;
    }, 380);
}

function stopSosBeacon() {
    const overlay = document.getElementById("sosStrobeOverlay");
    if (overlay) overlay.style.display = "none";
    if (strobeInterval) { clearInterval(strobeInterval); strobeInterval = null; }
    if (sirenInterval) toggleSosSiren();
}

function loadDisasterGuide(key) {
    const item = DISASTER_GUIDES[key] || DISASTER_GUIDES.cyclone;
    playConfirmationChime(659.25, 783.99);
    showGlassToast(item.title);
    const keys = ["cyclone", "flood", "lightning", "heatwave", "earthquake", "blackout"];
    for (let i = 0; i < keys.length; i++) {
        const b = document.getElementById("disBtn-" + keys[i]);
        if (b) b.classList.toggle("active-scenario", keys[i] === key);
    }
    document.getElementById("disasterTitleHeader").innerText = item.title;
    window.latestDisasterSpeechPacks = item.speech;

    let html = "<div class='phase-box phase-before'><h4 style='margin:0 0 6px 0; color:#0369a1;'>🛡️ 1. BEFORE / PREPARATION</h4>";
    for (let i = 0; i < item.before.length; i++) html += "<div class='md-bullet'>✔️ " + item.before[i] + "</div>";
    html += "</div><div class='phase-box phase-during'><h4 style='margin:0 0 6px 0; color:#b91c1c;'>🚨 2. DURING THE EMERGENCY</h4>";
    for (let i = 0; i < item.during.length; i++) html += "<div class='md-bullet'>⚡ " + item.during[i] + "</div>";
    html += "</div><div class='phase-box phase-after'><h4 style='margin:0 0 6px 0; color:#15803d;'>✅ 3. AFTER / RECOVERY</h4>";
    for (let i = 0; i < item.after.length; i++) html += "<div class='md-bullet'>🏥 " + item.after[i] + "</div>";
    html += "</div>";
    document.getElementById("disasterGuideContent").innerHTML = html;
}

function calculateWaterPurification() {
    const liters = Math.max(1, parseFloat(document.getElementById("waterLitersInput").value) || 5);
    const clarity = document.getElementById("waterClarityInput").value;
    const dropsPerLiter = (clarity === "cloudy") ? 4 : 2;
    const totalDrops = Math.round(liters * dropsPerLiter);
    const sugar = Math.round(liters * 6);
    const salt = (liters * 0.5).toFixed(1);
    document.getElementById("waterCalcResult").innerHTML =
        "<b>For " + liters + " L Water:</b> Boil <b>1 min</b> OR add <b>" + totalDrops + " Chlorine drops</b> &amp; wait 30 mins.<br>" +
        "<b>WHO ORS Recipe:</b> Mix <b>" + sugar + " tsp Sugar</b> + <b>" + salt + " tsp Salt</b>.";
}

function updateKitProgress() {
    const boxes = document.querySelectorAll("#survivalKitList input[type='checkbox']");
    let checked = 0;
    for (let i = 0; i < boxes.length; i++) if (boxes[i].checked) checked++;
    const badge = document.getElementById("kitProgressBadge");
    if (badge) badge.innerText = checked + " / " + boxes.length + " Packed";
}

function setVoiceSpeed(speedVal) {
    window.currentPlaybackSpeed = parseFloat(speedVal) || 1.0;
    playConfirmationChime(659.25, 880.0);
    const btns = document.querySelectorAll(".speed-btn");
    for (let i = 0; i < btns.length; i++) {
        const bSpeed = parseFloat(btns[i].getAttribute("data-speed"));
        btns[i].classList.toggle("active-speed", Math.abs(bSpeed - window.currentPlaybackSpeed) < 0.02);
    }
    const kpiBox = document.getElementById("kpiPrivacy");
    if (kpiBox) kpiBox.innerText = window.currentPlaybackSpeed + "x Speed";
    if (window.activeAudioPlayer) {
        try { window.activeAudioPlayer.playbackRate = window.currentPlaybackSpeed; } catch (e) {}
    }
    showGlassToast("Audio Speed: " + window.currentPlaybackSpeed + "x");
}

function findVoiceForLang(langPrefix) {
    if (!("speechSynthesis" in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    const pref = langPrefix.toLowerCase();
    for (let i = 0; i < voices.length; i++) {
        const v = voices[i];
        if (v.lang && v.lang.toLowerCase().indexOf(pref) === 0) return v;
    }
    return null;
}

async function runSequentialSpeechPack(packObj, langName, bannerElementId) {
    stopVoice(true);
    playConfirmationChime(587.33, 880.0);
    window.speechSessionId++;
    const currentSession = window.speechSessionId;
    const banner = document.getElementById(bannerElementId || "ttsStatusBanner");

    const nativeChunks = (packObj && packObj.chunks && packObj.chunks.length > 0) ? packObj.chunks : [];
    const phoneticChunks = (packObj && packObj.phonetic_chunks && packObj.phonetic_chunks.length > 0) ? packObj.phonetic_chunks : nativeChunks;
    const tlCode = (packObj && packObj.tl) ? packObj.tl : "en";
    if (!nativeChunks.length) return;
    showGlassToast("🔊 Speaking " + langName + " (" + window.currentPlaybackSpeed + "x)");

    for (let idx = 0; idx < nativeChunks.length; idx++) {
        if (window.speechSessionId !== currentSession) return;
        const chunkText = nativeChunks[idx];
        const phonText = phoneticChunks[idx] || chunkText;
        const pct = Math.round(((idx + 1) / nativeChunks.length) * 100);

        if (banner) {
            banner.style.display = "block";
            banner.innerHTML =
                "<div style='display:flex; justify-content:space-between; align-items:center;'>" +
                    "<span>🔊 <b>[" + langName + " • " + window.currentPlaybackSpeed + "x] Part " + (idx + 1) + "/" + nativeChunks.length + ":</b> \"" + chunkText.substring(0, 74) + "...\"</span>" +
                    "<span class='pill pill-green'>" + pct + "%</span>" +
                "</div>" +
                "<div style='width:100%; height:6px; background:#bbf7d0; border-radius:4px; margin-top:5px; overflow:hidden;'>" +
                    "<div style='width:" + pct + "%; height:100%; background:#16a34a; transition:width 0.25s ease;'></div>" +
                "</div>";
        }

        const playedStudio = await playSingleStudioChunk(chunkText, tlCode, currentSession);
        if (!playedStudio && window.speechSessionId === currentSession) {
            await playSingleBrowserUtterance(chunkText, phonText, langName, currentSession);
        }
    }

    if (window.speechSessionId === currentSession && banner) {
        banner.innerHTML = "✅ <b>Finished Reading All " + nativeChunks.length + " Parts in " + langName + ".</b>";
        setTimeout(function() { if (window.speechSessionId === currentSession) banner.style.display = "none"; }, 2400);
    }
}

function speakInLanguage(langName) {
    const pack = window.latestSpeechPacks[langName] || window.latestSpeechPacks["English"];
    runSequentialSpeechPack(pack, langName, "ttsStatusBanner");
}

function speakModuleLanguage(moduleType, langName) {
    if (moduleType === "drug") runSequentialSpeechPack(window.latestDrugSpeechPacks[langName] || window.latestDrugSpeechPacks["English"], langName, "drugTtsBanner");
    else if (moduleType === "trauma") runSequentialSpeechPack(window.latestTraumaSpeechPacks[langName] || window.latestTraumaSpeechPacks["English"], langName, "traumaTtsBanner");
    else if (moduleType === "disaster") runSequentialSpeechPack(window.latestDisasterSpeechPacks[langName] || window.latestDisasterSpeechPacks["English"], langName, "disasterTtsBanner");
    else if (moduleType === "manual") runSequentialSpeechPack(window.latestManualSpeechPacks[langName] || window.latestManualSpeechPacks["English"], langName, "manualTtsBanner");
}

function playSingleStudioChunk(chunkText, tlCode, sessionId) {
    return new Promise(async function(resolve) {
        if (window.speechSessionId !== sessionId) return resolve(true);
        try {
            const res = await fetch("/api/tts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: chunkText, tl: tlCode })
            });
            if (!res.ok) return resolve(false);
            const blob = await res.blob();
            if (window.speechSessionId !== sessionId) return resolve(true);
            const audioUrl = URL.createObjectURL(blob);
            const player = new Audio(audioUrl);
            player.playbackRate = window.currentPlaybackSpeed || 1.0;
            window.activeAudioPlayer = player;
            player.onended = function() { URL.revokeObjectURL(audioUrl); resolve(true); };
            player.onerror = function() { URL.revokeObjectURL(audioUrl); resolve(false); };
            await player.play();
        } catch (e) { resolve(false); }
    });
}

function playSingleBrowserUtterance(nativeText, phoneticText, langName, sessionId) {
    return new Promise(function(resolve) {
        if (window.speechSessionId !== sessionId || !("speechSynthesis" in window)) return resolve();
        let targetVoice = findVoiceForLang(langName === "Telugu" ? "te" : (langName === "Tamil" ? "ta" : (langName === "Hindi" ? "hi" : "en")));
        const textToUse = targetVoice ? nativeText : phoneticText;
        if (!targetVoice) targetVoice = findVoiceForLang("en-in") || findVoiceForLang("en");
        const utter = new SpeechSynthesisUtterance(textToUse);
        if (targetVoice) { utter.voice = targetVoice; utter.lang = targetVoice.lang; }
        utter.rate = Math.min(2.0, Math.max(0.5, 0.92 * (window.currentPlaybackSpeed || 1.0)));
        utter.onend = function() { resolve(); };
        utter.onerror = function() { resolve(); };
        window.speechSynthesis.resume();
        window.speechSynthesis.speak(utter);
    });
}

function stopVoice(silent) {
    window.speechSessionId++;
    if (window.activeAudioPlayer) {
        try { window.activeAudioPlayer.pause(); window.activeAudioPlayer.currentTime = 0; } catch (e) {}
        window.activeAudioPlayer = null;
    }
    if ("speechSynthesis" in window) window.speechSynthesis.cancel();
    const banners = ["ttsStatusBanner", "drugTtsBanner", "traumaTtsBanner", "disasterTtsBanner", "manualTtsBanner"];
    for (let i = 0; i < banners.length; i++) {
        const b = document.getElementById(banners[i]);
        if (b && !silent) {
            b.innerText = "⏹️ Audio Stopped.";
            setTimeout(function() { b.style.display = "none"; }, 900);
        }
    }
}

function syncMicLanguage() {
    const dispLang = document.getElementById("languageInput").value;
    const micSel = document.getElementById("micLangSelect");
    if (!micSel) return;
    if (dispLang === "Telugu") micSel.value = "te-IN";
    else if (dispLang === "Tamil") micSel.value = "ta-IN";
    else if (dispLang === "Hindi") micSel.value = "hi-IN";
    else micSel.value = "en-IN";
}

function toggleContinuousMic() {
    const micBtn = document.getElementById("micBtn");
    const statusBox = document.getElementById("micLiveStatus");
    const textArea = document.getElementById("situationText");
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) { alert("Use Chrome or Edge for Voice Dictation."); return; }

    if (window.isMicListening) {
        window.isMicListening = false;
        if (window.recognitionInstance) { try { window.recognitionInstance.stop(); } catch (e) {} }
        micBtn.classList.remove("mic-active-pulse");
        micBtn.innerText = "🎙️ Voice Mic";
        if (statusBox) statusBox.style.display = "none";
        showGlassToast("Voice Input Saved");
        return;
    }

    onManualTyping();
    const chosenLang = document.getElementById("micLangSelect").value || "en-IN";
    window.isMicListening = true;
    window.micCommittedText = textArea.value.trim() ? (textArea.value.trim() + " ") : "";
    const rec = new SpeechRec();
    window.recognitionInstance = rec;
    rec.lang = chosenLang;
    rec.continuous = true;
    rec.interimResults = true;

    micBtn.classList.add("mic-active-pulse");
    micBtn.innerText = "⏹️ Stop Mic";
    if (statusBox) {
        statusBox.style.display = "block";
        statusBox.innerText = "🔴 Dictating in " + chosenLang + " — Speak freely (Click 'Stop Mic' when finished)...";
    }

    rec.onresult = function(event) {
        let interim = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const phrase = event.results[i][0].transcript;
            if (event.results[i].isFinal) window.micCommittedText += phrase.trim() + " ";
            else interim += phrase;
        }
        textArea.value = (window.micCommittedText + interim).trim();
    };
    rec.onend = function() {
        if (window.isMicListening) { try { rec.start(); } catch (e) {} }
    };
    try { rec.start(); } catch (e) {}
}

async function precacheAllVoices() {
    const banner = document.getElementById("ttsStatusBanner");
    if (banner) { banner.style.display = "block"; banner.innerText = "📥 Caching Offline Voice Files..."; }
    try {
        const res = await fetch("/api/tts/precache", { method: "POST" });
        const data = await res.json();
        if (banner) banner.innerText = "✅ " + data.message;
        showGlassToast(data.cached_files + " Voice Files Saved Offline!");
        checkBackendHealth();
    } catch (e) {}
}

function switchTab(tabId, toastLabel) {
    playConfirmationChime(523.25, 659.25);
    if (toastLabel) showGlassToast(toastLabel);
    const panes = ["tab-triage", "tab-disaster", "tab-helplines", "tab-drugs", "tab-trauma", "tab-history", "tab-manual"];
    for (let i = 0; i < panes.length; i++) {
        const p = document.getElementById(panes[i]);
        const b = document.getElementById("btn-" + panes[i]);
        if (p) p.classList.toggle("active", panes[i] === tabId);
        if (b) b.classList.toggle("active", panes[i] === tabId);
    }
}

function formatBold(str) {
    const parts = str.split("**");
    for (let i = 1; i < parts.length; i += 2) parts[i] = "<strong>" + parts[i] + "</strong>";
    return parts.join("");
}

function renderMarkdown(md) {
    if (!md) return "";
    const safe = md.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;");
    const lines = safe.split(NL);
    const out = [];
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.indexOf("### ") === 0) out.push("<h3>" + formatBold(line.substring(4)) + "</h3>");
        else if (line.indexOf("## ") === 0) out.push("<h3>" + formatBold(line.substring(3)) + "</h3>");
        else if (line.indexOf("- ") === 0 || line.indexOf("* ") === 0) out.push("<div class='md-bullet'>• " + formatBold(line.substring(2)) + "</div>");
        else if (line.length > 0) out.push("<p style='margin: 5px 0;'>" + formatBold(line) + "</p>");
    }
    return out.join("");
}

async function checkBackendHealth() {
    const box = document.getElementById("liveHealthBox");
    try {
        const res = await fetch("/api/health");
        const data = await res.json();
        const kpiDocs = document.getElementById("kpiDocs");
        if (kpiDocs) kpiDocs.innerText = data.chromadb_protocols + " Docs | " + data.queue_count + " EHR";
        const badgeEl = document.getElementById("logCountBadge");
        if (badgeEl) badgeEl.innerText = String(data.queue_count || 1);
        const aiStatus = data.ollama_online ? ("🟢 Online (" + data.recommended_model + ")") : "🟠 Offline Safe Mode";
        if (box) box.innerHTML = "<div><b>AI Engine:</b> " + aiStatus + "</div><div><b>Database:</b> ChromaDB (" + data.chromadb_protocols + ") • SQLite (" + data.queue_count + ")</div>";
    } catch (e) {}
}

function selectScenario(num, autoRun) {
    const item = DEMO_SCENARIOS[num];
    if (!item) return;
    window.isManualMode = false;
    window.activeScenarioId = num;
    playConfirmationChime(659.25, 783.99);
    showGlassToast(item.title);

    const manBtn = document.getElementById("manualEntryBtn");
    if (manBtn) manBtn.classList.remove("active-manual");

    const cardBox = document.getElementById("manualInputCard");
    if (cardBox) cardBox.classList.remove("manual-active-box");

    const lbl = document.getElementById("symptomBoxLabel");
    if (lbl) lbl.innerText = "✍️ Patient Symptom / Situation (Type or Speak in 4 Languages):";

    const box = document.getElementById("situationText");
    if (box) box.value = item.text;

    document.getElementById("patientAge").value = item.age;
    document.getElementById("patientWeight").value = item.weight;
    document.getElementById("vitalHR").value = item.hr;
    document.getElementById("vitalBP").value = item.bp;
    document.getElementById("vitalSpO2").value = item.spo2;
    document.getElementById("vitalTemp").value = item.temp;
    document.getElementById("vitalAVPU").value = item.avpu;

    for (let i = 1; i <= 14; i++) {
        const btn = document.getElementById("scenBtn" + i);
        if (btn) {
            btn.classList.toggle("active-scenario", i === num);
            if (i !== num) btn.blur();
        }
    }
    renderVisualAndSmartCards(num);
    if (autoRun) executeTriage();
}

async function executeTriage() {
    const situation = document.getElementById("situationText").value;
    const age = parseInt(document.getElementById("patientAge").value, 10) || 19;
    const weight = parseFloat(document.getElementById("patientWeight").value) || 60.0;
    const hr = parseInt(document.getElementById("vitalHR").value, 10) || 88;
    const bp = parseInt(document.getElementById("vitalBP").value, 10) || 120;
    const spo2 = parseInt(document.getElementById("vitalSpO2").value, 10) || 98;
    const temp = parseFloat(document.getElementById("vitalTemp").value) || 98.6;
    const avpu = document.getElementById("vitalAVPU").value || "Alert";
    const lang = document.getElementById("languageInput").value || "Telugu";
    const model = document.getElementById("modelInput").value || "gemma3:1b";
    const btn = document.getElementById("runBtn");

    if (!situation.trim()) {
        showGlassToast("⚠️ Please type or speak a symptom first!");
        document.getElementById("situationText").focus();
        return;
    }
    stopVoice(true);
    btn.disabled = true;
    btn.innerText = "⏳ Generating Visual Guide, Smart Recommendations & Voice...";

    const visualKey = (!window.isManualMode && window.activeScenarioId >= 1 && window.activeScenarioId <= 14)
        ? window.activeScenarioId
        : detectVisualCardKey(situation);

    if (visualKey >= 1 && visualKey <= 14) {
        renderVisualAndSmartCards(visualKey);
    }

    try {
        const res = await fetch("/api/triage", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ situation: situation, patient_age: age, patient_weight_kg: weight, heart_rate: hr, spo2: spo2, systolic_bp: bp, temp_f: temp, consciousness: avpu, language: lang, model: model })
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Triage error");

        if (visualKey === 0) {
            const dynamicCard = buildDynamicCustomCardFromResponse(situation, data);
            renderVisualAndSmartCards(0, dynamicCard);
        }

        document.getElementById("kpiChroma").innerText = data.telemetry.chroma_latency_ms + " ms";
        document.getElementById("kpiOllama").innerText = data.telemetry.ollama_inference_sec + " sec";
        document.getElementById("kpiNews2").innerText = "N:" + data.vitals_assessment.news2_score + " | SI:" + data.vitals_assessment.shock_index;
        document.getElementById("logCountBadge").innerText = String(data.queue_count || 1);

        const ca = data.clinical_assessment;
        const va = data.vitals_assessment;
        const pd = data.precision_dosing;

        const rVal = document.getElementById("meterRiskVal");
        const rBar = document.getElementById("meterRiskBar");
        if (rVal && rBar) {
            rVal.innerText = ca.risk_score + "/100";
            rBar.style.width = ca.risk_score + "%";
            rBar.style.background = ca.risk_score >= 90 ? "#dc2626" : "#ea580c";
        }
        const nVal = document.getElementById("meterNewsVal");
        const nBar = document.getElementById("meterNewsBar");
        if (nVal && nBar) {
            nVal.innerText = va.news2_score + "/14 | SI:" + va.shock_index;
            nBar.style.width = Math.min(100, Math.max(12, va.news2_score * 8)) + "%";
        }
        const dVal = document.getElementById("meterDoseVal");
        if (dVal) dVal.innerText = pd.weight_kg + " kg Dose";

        document.getElementById("dosingBanner").innerHTML = "💊 <b>Safe Dose for " + pd.weight_kg + " kg (" + age + " yrs):</b> Paracetamol: <b>" + pd.paracetamol_dose + "</b> &nbsp;|&nbsp; 💧 <b>WHO ORS:</b> " + pd.ors_4hr_deficit;

        document.getElementById("chromaResultsBox").innerHTML = data.retrieved_protocols.map(function(p) {
            return "<div class='protocol-card'><div style='display:flex; justify-content:space-between;'><strong>📚 Verified Source: [" + p.category + "] " + p.title + "</strong><span class='pill pill-green'>Match: " + p.confidence + "</span></div><div class='golden-rule'>⚡ GOLDEN RULE: " + p.golden_rule + "</div></div>";
        }).join("");

        if (data.speech_packs) window.latestSpeechPacks = data.speech_packs;
        document.getElementById("aiPlanOutput").innerHTML = renderMarkdown(data.ai_action_plan);
        showGlassToast("Visual Guide & Smart Recommendations Ready!");
        checkBackendHealth();
    } catch (err) {
        document.getElementById("aiPlanOutput").innerHTML = "<div class='triage-alert'>⚠️ " + err.message + "</div>";
    } finally {
        btn.disabled = false;
        btn.innerText = window.currentAssistanceMode === "regular"
            ? "🩺 GET DAILY MEDICAL CARE, HOME REMEDIES & VOICE GUIDE"
            : "🚨 GENERATE VISUAL GUIDE, SMART RECOMMENDATIONS & VOICE";
    }
}

function loadDrugPreset(text, age, weight, btnNum) {
    for (let i = 1; i <= 4; i++) {
        const b = document.getElementById("drugBtn" + i);
        if (b) b.classList.toggle("active-scenario", i === btnNum);
    }
    const inp = document.getElementById("drugInputText");
    if (inp) {
        inp.classList.remove("manual-active-box");
        inp.value = text;
    }
    document.getElementById("drugAge").value = age;
    document.getElementById("drugWeight").value = weight;
    runDrugCheck();
}

async function runDrugCheck() {
    const text = document.getElementById("drugInputText").value;
    const age = parseInt(document.getElementById("drugAge").value, 10) || 68;
    const weight = parseFloat(document.getElementById("drugWeight").value) || 65.0;
    const res = await fetch("/api/drug-check", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ medications_text: text, patient_age: age, patient_weight_kg: weight }) });
    const data = await res.json();
    if (data.speech_packs) window.latestDrugSpeechPacks = data.speech_packs;

    let html = "";
    if (data.interactions_count > 0) {
        for (let i = 0; i < data.interactions.length; i++) {
            const it = data.interactions[i];
            html += "<div class='triage-alert'>🚨 " + it.severity + "</div><div class='protocol-card'><p style='margin:0 0 6px 0;'><b>Danger:</b> " + it.mechanism + "</p><div class='golden-rule'>✅ RECOMMENDED SAFE MEDICINE: " + it.safe_alternative + "</div></div>";
        }
    } else {
        html += "<div class='dosing-card'>✅ Safe Combination — No Dangerous Contraindication</div>";
    }
    const pd = data.precision_dosing;
    html += "<div class='dosing-card'><b>⚖️ Weight-Adjusted Safe Dose (" + pd.weight_kg + " kg, " + age + " yrs):</b><br>• <b>Paracetamol:</b> " + pd.paracetamol_dose + "<br>• <b>ORS Hydration:</b> " + pd.ors_4hr_deficit + "</div>";
    document.getElementById("drugCheckOutput").innerHTML = html;
}

async function runTraumaLab() {
    const eye = parseInt(document.getElementById("gcsEye").value, 10) || 4;
    const verbal = parseInt(document.getElementById("gcsVerbal").value, 10) || 5;
    const motor = parseInt(document.getElementById("gcsMotor").value, 10) || 6;
    const weight = parseFloat(document.getElementById("traumaWeight").value) || 60.0;
    const burn = parseFloat(document.getElementById("traumaBurnPct").value) || 25.0;

    const res = await fetch("/api/trauma-calc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ eye: eye, verbal: verbal, motor: motor, weight_kg: weight, burn_tbsa_pct: burn })
    });
    const d = await res.json();
    if (d.speech_packs) window.latestTraumaSpeechPacks = d.speech_packs;

    document.getElementById("traumaLabOutput").innerHTML =
        "<div class='triage-alert'>🧠 <b>" + d.gcs_severity + "</b></div>" +
        "<div class='vitals-badge'>🔥 <b>" + d.burn_alert + "</b></div>" +
        "<div class='dosing-card'>" +
            "<b>💧 24-Hour Burn Fluid Replacement (4 mL × " + weight + " kg × " + burn + "% Burn):</b><br>" +
            "• <b>Total 24-Hour Fluid:</b> " + d.parkland_total_24h_ml + "<br>" +
            "• <b>First 8 Hours:</b> " + d.parkland_first_8h + "<br>" +
            "• <b>Next 16 Hours:</b> " + d.parkland_next_16h +
        "</div>";
}

function toggleCprMetronome() {
    const btn = document.getElementById("cprToggleBtn");
    const circle = document.getElementById("cprHeartCircle");
    const counter = document.getElementById("cprStepCounter");
    if (cprInterval) {
        clearInterval(cprInterval); cprInterval = null;
        btn.innerText = "▶️ Start 110-BPM CPR Audio Coach";
        counter.innerText = "Metronome Stopped";
        return;
    }
    const ctx = getAudioContext();
    cprBeatCount = 0;
    btn.innerText = "⏹️ Stop CPR Audio Coach";
    cprInterval = setInterval(function() {
        cprBeatCount++;
        const beat = ((cprBeatCount - 1) % 30) + 1;
        circle.classList.add("beat");
        setTimeout(function() { circle.classList.remove("beat"); }, 130);
        counter.innerText = beat === 30 ? "Push 30 / 30 — GIVE 2 BREATHS!" : "Chest Push " + beat + " of 30";
        if (ctx) {
            const osc = ctx.createOscillator(); const g = ctx.createGain();
            osc.frequency.value = beat === 30 ? 920 : 640;
            g.gain.setValueAtTime(0.2, ctx.currentTime); g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);
            osc.connect(g); g.connect(ctx.destination); osc.start(); osc.stop(ctx.currentTime + 0.09);
        }
    }, 545);
}

function startWashTimer(sec, label) {
    if (washTimerInterval) clearInterval(washTimerInterval);
    washSecondsRemaining = sec;
    document.getElementById("timerLabel").innerText = "⏳ RUNNING: " + label;
    updateTimerDisplay();
    washTimerInterval = setInterval(function() {
        washSecondsRemaining--; updateTimerDisplay();
        if (washSecondsRemaining <= 0) {
            clearInterval(washTimerInterval);
            document.getElementById("timerLabel").innerText = "✅ COMPLETED: " + label;
            playConfirmationChime(880, 1046.5);
        }
    }, 1000);
}

function stopWashTimer() {
    if (washTimerInterval) clearInterval(washTimerInterval);
    washSecondsRemaining = 0; updateTimerDisplay();
}

function updateTimerDisplay() {
    const m = Math.floor(washSecondsRemaining / 60); const s = washSecondsRemaining % 60;
    document.getElementById("timerDisplay").innerText = (m < 10 ? "0" : "") + m + ":" + (s < 10 ? "0" : "") + s;
}

async function loadChromaExplorer() {
    const res = await fetch("/api/protocols");
    const data = await res.json();
    document.getElementById("explorerTotal").innerText = data.total;
    document.getElementById("chromaExplorerList").innerHTML = data.protocols.map(function(p) {
        return "<div class='protocol-card'><strong>[" + p.id + "] " + p.title + "</strong><div class='golden-rule'>⚡ " + p.golden_rule + "</div></div>";
    }).join("");
}

async function runLiveBenchmark() {
    const res = await fetch("/api/benchmark");
    const data = await res.json();
    let html = "<div class='dosing-card'>🏆 <b>BENCHMARK: " + data.passed + "/" + data.total_tests + " PASSED (" + data.accuracy + ") in " + data.total_latency_ms + " ms</b></div><table><thead><tr><th>Query</th><th>Expected</th><th>Matched</th><th>Result</th></tr></thead><tbody>";
    for (let i = 0; i < data.results.length; i++) {
        const r = data.results[i];
        html += "<tr><td>" + r.query + "</td><td>" + r.expected + "</td><td><b>" + r.matched_id + "</b> — " + r.matched_title + "</td><td style='color:#16a34a; font-weight:800;'>" + r.status + "</td></tr>";
    }
    document.getElementById("benchmarkOutput").innerHTML = html + "</tbody></table>";
}

async function addCustomProtocol() {
    const title = document.getElementById("customTitle").value;
    const category = document.getElementById("customCategory").value;
    const content = document.getElementById("customContent").value;
    if (!title.trim() || !content.trim()) return;
    const res = await fetch("/api/protocols/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ protocol_id: "HOSP-" + Math.floor(Math.random() * 9000 + 1000), title: title, category: category, content: content }) });
    const data = await res.json();
    document.getElementById("customStatus").innerText = "✅ " + data.message;
    loadChromaExplorer();
}

async function loadMassCasualtyQueue() {
    const res = await fetch("/api/queue");
    const data = await res.json();
    cachedQueue = data.queue || [];
    renderQueueTable();
}

async function simulateMassCasualty() {
    const res = await fetch("/api/queue/simulate", { method: "POST" });
    const data = await res.json();
    cachedQueue = data.queue || [];
    document.getElementById("logCountBadge").innerText = String(cachedQueue.length);
    showGlassToast("+4 Cyclone Victims Added & Sorted!");
    renderQueueTable();
}

async function clearMassCasualty() {
    await fetch("/api/queue/clear", { method: "POST" });
    cachedQueue = [];
    document.getElementById("logCountBadge").innerText = "0";
    renderQueueTable();
}

function renderQueueTable() {
    const container = document.getElementById("historyTableContainer");
    if (!cachedQueue.length) { container.innerHTML = "<p>Queue is empty.</p>"; return; }
    let html = "<table><thead><tr><th>Rank</th><th>Case</th><th>Patient</th><th>Priority</th><th>Vital Scores</th><th>Protocol</th></tr></thead><tbody>";
    for (let i = 0; i < cachedQueue.length; i++) {
        const h = cachedQueue[i];
        const pColor = h.priority.indexOf("RED") !== -1 ? "#dc2626" : (h.priority.indexOf("ORANGE") !== -1 ? "#d97706" : "#0284c7");
        html += "<tr><td><b>#" + (i + 1) + "</b></td><td>" + h.case_id + "</td><td>" + h.patient + "</td><td style='color:" + pColor + "; font-weight:800;'>" + h.priority + "</td><td>Risk: <b>" + h.risk_score + "</b> | NEWS2: <b>" + h.news2 + "</b> | SI: <b>" + h.shock_index + "</b></td><td>" + h.protocol + "</td></tr>";
    }
    container.innerHTML = html + "</tbody></table>";
}

function exportHistoryCsv() {
    if (!cachedQueue.length) return;
    let csv = "Rank,Case_ID,Patient,Priority,Risk_Score,Protocol" + NL;
    for (let i = 0; i < cachedQueue.length; i++) {
        const h = cachedQueue[i];
        csv += (i + 1) + "," + h.case_id + "," + h.patient + ',"' + h.priority + '",' + h.risk_score + ',"' + h.protocol + '"' + NL;
    }
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    a.download = "LifeLine_AI_SQLite_EHR_Queue.csv";
    a.click();
}

window.onload = function() {
    checkBackendHealth();
    renderVisualAndSmartCards(1);
    executeTriage();
    loadDisasterGuide("cyclone");
    calculateWaterPurification();
    runDrugCheck();
    runTraumaLab();
    loadMassCasualtyQueue();
};
