/* =========================================================
   अन्न · Ann Caterers — SITE DATA
   Edit this file to update business details, menu, packages etc.
   No coding knowledge needed: just change the text in quotes.
   ========================================================= */

const SITE = {
  // ⚠️ REPLACE with the client's real details before going live
  phone: "+91 98765 43210",          // shown on site & used for "Call" button
  whatsapp: "919876543210",          // country code + number, digits only
  email: "hello@anncaterers.in",
  address: "Haridwar, Uttarakhand 249401",
  // Google Maps search used for the embedded map (put exact shop name/address here)
  mapQuery: "Har Ki Pauri, Haridwar",
};

/* Occasions ----------------------------------------------------------- */
const OCCASIONS = [
  { icon: "💍", en: "Weddings", hi: "शादी-विवाह", den: "Sangeet, haldi, baraat swagat and the grand reception.", dhi: "संगीत, हल्दी, बारात स्वागत और भव्य रिसेप्शन।" },
  { icon: "🔱", en: "Bhandara", hi: "भंडारा", den: "Large-scale langar and bhandara for 500 to 10,000+ devotees.", dhi: "500 से 10,000+ श्रद्धालुओं के लिए भंडारा।" },
  { icon: "🪔", en: "Puja & Havan", hi: "पूजा व हवन", den: "Sattvik bhog and prasad, made without onion and garlic.", dhi: "बिना प्याज़-लहसुन का सात्विक भोग और प्रसाद।" },
  { icon: "🏠", en: "Griha Pravesh", hi: "गृह प्रवेश", den: "Bless your new home with a warm family feast.", dhi: "नए घर की खुशी, परिवार के साथ भोज।" },
  { icon: "🎂", en: "Birthdays", hi: "जन्मदिन", den: "Kids' favourites, chaat counters and fun live stations.", dhi: "बच्चों की पसंद, चाट काउंटर और लाइव स्टेशन।" },
  { icon: "🏢", en: "Corporate", hi: "कॉर्पोरेट", den: "Meetings, SIDCUL and BHEL events, office lunches.", dhi: "मीटिंग, SIDCUL/भेल आयोजन, ऑफ़िस लंच।" },
  { icon: "👶", en: "Mundan & Naamkaran", hi: "मुंडन व नामकरण", den: "Traditional ceremonies, made special by family and food.", dhi: "पारंपरिक संस्कार, स्वादिष्ट भोजन के साथ।" },
  { icon: "🙏", en: "Shraddh / Terahvi", hi: "श्राद्ध / तेरहवीं", den: "Simple, respectful, traditional meals.", dhi: "सादा, सम्मानजनक, पारंपरिक भोजन।" },
];

/* Menu ----------------------------------------------------------------
   s: true  => sattvik (no onion / garlic)
   tag: optional little label
------------------------------------------------------------------------ */
const MENU = [
  { id: "welcome", en: "Welcome Drinks", hi: "स्वागत पेय", items: [
    { en: "Kesar Badam Milk", hi: "केसर बादाम दूध", s: true },
    { en: "Masala Chaas", hi: "मसाला छाछ", s: true },
    { en: "Aam Panna", hi: "आम पन्ना", s: true },
    { en: "Shikanji", hi: "शिकंजी", s: true },
    { en: "Thandai", hi: "ठंडाई", s: true, tag: "Holi special" },
    { en: "Fresh Fruit Punch", hi: "फ्रूट पंच", s: true },
    { en: "Kulhad Chai", hi: "कुल्हड़ चाय", s: true },
    { en: "Filter Coffee", hi: "फ़िल्टर कॉफ़ी", s: true },
  ]},
  { id: "chaat", en: "Chaat Counter", hi: "चाट काउंटर", items: [
    { en: "Golgappe (Pani Puri)", hi: "गोलगप्पे", s: false, tag: "Live" },
    { en: "Aloo Tikki", hi: "आलू टिक्की", s: false, tag: "Live" },
    { en: "Dahi Bhalla", hi: "दही भल्ला", s: true },
    { en: "Papdi Chaat", hi: "पापड़ी चाट", s: true },
    { en: "Raj Kachori", hi: "राज कचौरी", s: true },
    { en: "Matar Kulcha", hi: "मटर कुलचा", s: false },
    { en: "Pav Bhaji", hi: "पाव भाजी", s: false, tag: "Live" },
    { en: "Palak Patta Chaat", hi: "पालक पत्ता चाट", s: true },
  ]},
  { id: "starters", en: "Starters", hi: "स्टार्टर्स", items: [
    { en: "Paneer Tikka", hi: "पनीर टिक्का", s: false, tag: "Bestseller" },
    { en: "Hara Bhara Kebab", hi: "हरा भरा कबाब", s: false },
    { en: "Veg Spring Roll", hi: "वेज स्प्रिंग रोल", s: false },
    { en: "Mushroom Duplex", hi: "मशरूम डुप्लेक्स", s: false },
    { en: "Paneer Pakoda", hi: "पनीर पकौड़ा", s: true },
    { en: "Mini Samosa", hi: "मिनी समोसा", s: true },
    { en: "Dhokla", hi: "ढोकला", s: true },
    { en: "Chilli Potato", hi: "चिली पोटैटो", s: false },
    { en: "Veg Manchurian", hi: "वेज मंचूरियन", s: false },
  ]},
  { id: "main", en: "Main Course", hi: "मुख्य व्यंजन", items: [
    { en: "Shahi Paneer", hi: "शाही पनीर", s: false, tag: "Bestseller" },
    { en: "Kadhai Paneer", hi: "कड़ाही पनीर", s: false },
    { en: "Paneer Butter Masala", hi: "पनीर बटर मसाला", s: false },
    { en: "Sattvik Paneer (no onion-garlic)", hi: "सात्विक पनीर", s: true },
    { en: "Malai Kofta", hi: "मलाई कोफ़्ता", s: false },
    { en: "Mix Veg", hi: "मिक्स वेज", s: true },
    { en: "Aloo Tamatar (Haridwar style)", hi: "आलू टमाटर (हरिद्वारी)", s: true, tag: "Local" },
    { en: "Kaddu ki Sabzi", hi: "कद्दू की सब्ज़ी", s: true },
    { en: "Matar Mushroom", hi: "मटर मशरूम", s: false },
    { en: "Chana Masala", hi: "छोले", s: false },
    { en: "Kadhi Pakoda", hi: "कढ़ी पकौड़ा", s: true },
    { en: "Dum Aloo", hi: "दम आलू", s: true },
  ]},
  { id: "dal", en: "Dal & Rice", hi: "दाल व चावल", items: [
    { en: "Dal Makhani", hi: "दाल मखनी", s: false, tag: "Bestseller" },
    { en: "Dal Tadka", hi: "दाल तड़का", s: false },
    { en: "Pahadi Gahat Dal", hi: "पहाड़ी गहत दाल", s: true, tag: "Garhwali" },
    { en: "Rajma", hi: "राजमा", s: false },
    { en: "Jeera Rice", hi: "जीरा राइस", s: true },
    { en: "Veg Pulao", hi: "वेज पुलाव", s: true },
    { en: "Veg Biryani", hi: "वेज बिरयानी", s: false },
    { en: "Plain Steamed Rice", hi: "सादा चावल", s: true },
  ]},
  { id: "breads", en: "Breads", hi: "रोटियाँ", items: [
    { en: "Tandoori Roti", hi: "तंदूरी रोटी", s: true },
    { en: "Butter Naan", hi: "बटर नान", s: true },
    { en: "Garlic Naan", hi: "गार्लिक नान", s: false },
    { en: "Lachha Paratha", hi: "लच्छा पराठा", s: true },
    { en: "Missi Roti", hi: "मिस्सी रोटी", s: false },
    { en: "Poori", hi: "पूरी", s: true },
    { en: "Kachori (Bedmi)", hi: "बेड़मी कचौरी", s: true, tag: "Local" },
    { en: "Rumali Roti", hi: "रूमाली रोटी", s: true, tag: "Live" },
  ]},
  { id: "live", en: "Live Counters", hi: "लाइव काउंटर", items: [
    { en: "Dosa Counter", hi: "डोसा काउंटर", s: false, tag: "Live" },
    { en: "Pasta Station", hi: "पास्ता स्टेशन", s: false, tag: "Live" },
    { en: "Tandoor Counter", hi: "तंदूर काउंटर", s: false, tag: "Live" },
    { en: "Chilla & Moong Dal Pakodi", hi: "चीला व मूंग पकौड़ी", s: false, tag: "Live" },
    { en: "Momos", hi: "मोमोज़", s: false, tag: "Live" },
    { en: "Kulfi Cart", hi: "कुल्फ़ी ठेला", s: true, tag: "Live" },
  ]},
  { id: "sweets", en: "Sweets", hi: "मिठाइयाँ", items: [
    { en: "Hot Jalebi with Rabri", hi: "गरम जलेबी रबड़ी", s: true, tag: "Live" },
    { en: "Gulab Jamun", hi: "गुलाब जामुन", s: true },
    { en: "Moong Dal Halwa", hi: "मूंग दाल हलवा", s: true, tag: "Bestseller" },
    { en: "Gajar ka Halwa", hi: "गाजर का हलवा", s: true, tag: "Winter" },
    { en: "Rasmalai", hi: "रसमलाई", s: true },
    { en: "Kheer", hi: "खीर", s: true },
    { en: "Bal Mithai", hi: "बाल मिठाई", s: true, tag: "Pahadi" },
    { en: "Ice Cream (3 flavours)", hi: "आइसक्रीम (3 फ़्लेवर)", s: true },
    { en: "Paan Station", hi: "पान स्टेशन", s: true },
  ]},
  { id: "vrat", en: "Vrat / Fasting", hi: "व्रत विशेष", items: [
    { en: "Kuttu Poori", hi: "कुट्टू की पूरी", s: true },
    { en: "Singhara Pakode", hi: "सिंघाड़े के पकौड़े", s: true },
    { en: "Vrat Aloo", hi: "व्रत वाले आलू", s: true },
    { en: "Sabudana Khichdi", hi: "साबूदाना खिचड़ी", s: true },
    { en: "Sama Rice Pulao", hi: "सामक चावल पुलाव", s: true },
    { en: "Makhana Kheer", hi: "मखाना खीर", s: true },
    { en: "Lauki Halwa", hi: "लौकी हलवा", s: true },
  ]},
];

/* Presets for the menu builder (use exact English item names) --------- */
const PRESETS = [
  { en: "Puja / Sattvik", hi: "पूजा / सात्विक", items: ["Kesar Badam Milk", "Sattvik Paneer (no onion-garlic)", "Aloo Tamatar (Haridwar style)", "Kaddu ki Sabzi", "Jeera Rice", "Poori", "Kheer", "Moong Dal Halwa"] },
  { en: "Classic Wedding", hi: "शादी क्लासिक", items: ["Masala Chaas", "Golgappe (Pani Puri)", "Aloo Tikki", "Paneer Tikka", "Hara Bhara Kebab", "Shahi Paneer", "Malai Kofta", "Dal Makhani", "Veg Pulao", "Butter Naan", "Tandoori Roti", "Hot Jalebi with Rabri", "Gulab Jamun", "Ice Cream (3 flavours)"] },
  { en: "Bhandara", hi: "भंडारा", items: ["Aloo Tamatar (Haridwar style)", "Kaddu ki Sabzi", "Chana Masala", "Poori", "Jeera Rice", "Kheer"] },
  { en: "Navratri Vrat", hi: "नवरात्रि व्रत", items: ["Kuttu Poori", "Singhara Pakode", "Vrat Aloo", "Sabudana Khichdi", "Makhana Kheer"] },
];

/* Packages ------------------------------------------------------------ */
const PACKAGES = [
  { name: "Saatvik", hi: "सात्विक", tag: "Puja · Bhandara", taghi: "पूजा · भंडारा",
    feats: [["1 welcome drink", "1 स्वागत पेय"], ["3 sabzi + 1 dal", "3 सब्ज़ी + 1 दाल"], ["Rice, poori / roti", "चावल, पूरी / रोटी"], ["2 sweets", "2 मिठाइयाँ"], ["No onion-garlic", "बिना प्याज़-लहसुन"]] },
  { name: "Shahi", hi: "शाही", tag: "Most popular", taghi: "सबसे लोकप्रिय", featured: true,
    feats: [["2 welcome drinks", "2 स्वागत पेय"], ["Chaat counter + 4 starters", "चाट काउंटर + 4 स्टार्टर"], ["4 main course + dal makhani", "4 मुख्य व्यंजन + दाल मखनी"], ["Assorted breads & rice", "विभिन्न रोटियाँ व चावल"], ["3 sweets + ice cream", "3 मिठाइयाँ + आइसक्रीम"], ["Uniformed serving staff", "वर्दीधारी सर्विंग स्टाफ़"]] },
  { name: "Maharaja", hi: "महाराजा", tag: "Weddings", taghi: "शादी",
    feats: [["Mocktail bar", "मॉकटेल बार"], ["Full chaat + 6 starters", "पूरा चाट + 6 स्टार्टर"], ["3 live counters", "3 लाइव काउंटर"], ["6 main course + 2 dals", "6 मुख्य व्यंजन + 2 दाल"], ["5 sweets, kulfi & paan", "5 मिठाइयाँ, कुल्फ़ी व पान"], ["Premium crockery & décor", "प्रीमियम क्रॉकरी व सजावट"]] },
];

/* Gallery (replace with the client's real event photos: put them in /images and use "images/xyz.jpg") */
const GALLERY = [
  { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=70", en: "North Indian curry spread", cls: "tall" },
  { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=70", en: "Fresh samosas" },
  { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=70", en: "South Indian live counter" },
  { src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=70", en: "Buffet setup", cls: "wide" },
  { src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=70", en: "Paneer dishes" },
  { src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=70", en: "Indian sweets", cls: "tall" },
  { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=70", en: "Biryani" },
  { src: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=70", en: "Thali" },
];

/* Testimonials — ⚠️ SAMPLE TEXT. Replace with the client's real customer reviews before going live. */
const TESTIMONIALS = [
  { en: "Everyone at my daughter's wedding praised the food, especially the hot jalebi-rabri and dal makhani. Service was smooth even with 800 guests.", hi: "बेटी की शादी में सबने खाने की तारीफ़ की, ख़ासकर जलेबी-रबड़ी और दाल मखनी की। 800 मेहमानों में भी सर्विस बढ़िया रही।", who: "Sample review · Wedding, Jwalapur" },
  { en: "We needed a fully sattvik menu for our Bhagwat Katha. It tasted like home and arrived on time every day for 7 days.", hi: "भागवत कथा के लिए पूरा सात्विक मेन्यू चाहिए था। सातों दिन समय पर, घर जैसा स्वाद।", who: "Sample review · Katha, Kankhal" },
  { en: "Booked them for our SIDCUL office annual day. The live counters were a big hit with the team.", hi: "SIDCUL ऑफ़िस के वार्षिक कार्यक्रम के लिए बुक किया। लाइव काउंटर सबको बहुत पसंद आए।", who: "Sample review · Corporate, SIDCUL" },
];

/* FAQ ----------------------------------------------------------------- */
const FAQS = [
  { qen: "What is the minimum number of guests?", qhi: "न्यूनतम कितने मेहमानों के लिए बुकिंग होती है?",
    aen: "We cater events from 30 guests up to 10,000+. Smaller home pujas can also be arranged on request.", ahi: "हम 30 से लेकर 10,000+ मेहमानों तक के आयोजन करते हैं। छोटी घरेलू पूजा भी अनुरोध पर संभव है।" },
  { qen: "Do you make food without onion and garlic?", qhi: "क्या आप बिना प्याज़-लहसुन का खाना बनाते हैं?",
    aen: "Yes. We have a complete sattvik menu, and any dish can be made without onion and garlic. Use the 'Sattvik only' filter in the menu.", ahi: "हाँ। हमारा पूरा सात्विक मेन्यू है, और कोई भी व्यंजन बिना प्याज़-लहसुन बनाया जा सकता है। मेन्यू में 'केवल सात्विक' फ़िल्टर देखें।" },
  { qen: "How early should we book?", qhi: "कितने दिन पहले बुक करना चाहिए?",
    aen: "For weddings, 1–2 months ahead is ideal, especially during the wedding season and Kanwar Yatra. Smaller events can usually be booked a week in advance.", ahi: "शादी के लिए 1–2 महीने पहले, ख़ासकर सहालग और कांवड़ के समय। छोटे आयोजन एक हफ़्ते पहले भी बुक हो जाते हैं।" },
  { qen: "Do you provide serving staff, crockery and setup?", qhi: "क्या सर्विंग स्टाफ़, क्रॉकरी और सेटअप भी देते हैं?",
    aen: "Yes. Our packages include uniformed staff, buffet counters, crockery and cleanup. Tent and décor can be arranged through partners.", ahi: "हाँ। पैकेज में वर्दीधारी स्टाफ़, बुफ़े काउंटर, क्रॉकरी और सफ़ाई शामिल है। टेंट व सजावट पार्टनर के ज़रिए उपलब्ध है।" },
  { qen: "Do you cater outside Haridwar?", qhi: "क्या आप हरिद्वार के बाहर भी सेवा देते हैं?",
    aen: "Yes. We regularly cater in Rishikesh, Roorkee, Dehradun and nearby areas.", ahi: "हाँ, ऋषिकेश, रुड़की, देहरादून और आसपास के क्षेत्रों में नियमित रूप से सेवा देते हैं।" },
  { qen: "Can we do a tasting before booking?", qhi: "क्या बुकिंग से पहले खाना चख सकते हैं?",
    aen: "Absolutely. We offer a tasting session for weddings and large events.", ahi: "बिल्कुल। शादी और बड़े आयोजनों के लिए टेस्टिंग सेशन उपलब्ध है।" },
];
