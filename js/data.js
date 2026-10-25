/* =========================================================
   अन्न · Ann Caters & Events — SITE DATA
   Edit this file to update business details, menu, FAQ etc.
   (The three platter menus live in js/platters.js.)
   No coding knowledge needed: just change the text in quotes.
   ========================================================= */

const SITE = {
  // ⚠️ REPLACE with the client's real details before going live
  phones: ["+91-9997884749", "+91-7906105183"],  // shown on site; the first is used for the floating "Call" button
  whatsapp: ["919997884749", "917906105183"],    // country code + number, digits only; the first is used for all WhatsApp buttons
  email: "hello@anncaterers.in",
  address: "Haridwar, Uttarakhand 249401",
};

/* Occasions ----------------------------------------------------------- */
const OCCASIONS = [
  { icon: "💍", name: "Weddings", desc: "From the sangeet to the reception, every function covered." },
  { icon: "🥂", name: "Engagements & Receptions", desc: "Elegant spreads for your biggest evenings." },
  { icon: "🏢", name: "Corporate Events", desc: "Conferences, launches, annual days and office lunches." },
  { icon: "🎂", name: "Birthdays & Anniversaries", desc: "Celebrations with live counters and crowd favourites." },
  { icon: "🍷", name: "Private Parties", desc: "Cocktail evenings, kitty parties and house parties." },
  { icon: "🏡", name: "Housewarming", desc: "A warm, generous meal for family and friends." },
  { icon: "🏔️", name: "Destination Weddings", desc: "Haridwar, Rishikesh and nearby resorts." },
  { icon: "🍽️", name: "Get Together", desc: "Relaxed gatherings with family and friends." },
];

/* Menu ----------------------------------------------------------------
   tag: optional little label shown next to the dish
------------------------------------------------------------------------ */
const VEG_MENU = [
  { id: "welcome", name: "Welcome Drinks", items: [
    { name: "Kesar Badam Milk" }, { name: "Masala Chaas" }, { name: "Aam Panna" }, { name: "Shikanji" },
    { name: "Fresh Fruit Punch" }, { name: "Mocktails", tag: "Popular" }, { name: "Kulhad Chai" }, { name: "Coffee" },
  ]},
  { id: "chaat", name: "Chaat & Fast Food", items: [
    { name: "Golgappe (Pani Puri)", tag: "Live" }, { name: "Aloo Tikki", tag: "Live" }, { name: "Dahi Bhalla" },
    { name: "Papdi Chaat" }, { name: "Raj Kachori" }, { name: "Pav Bhaji", tag: "Live" },
    { name: "Chowmein" }, { name: "Momos", tag: "Live" }, { name: "Pasta", tag: "Live" },
  ]},
  { id: "starters", name: "Starters", items: [
    { name: "Paneer Tikka", tag: "Bestseller" }, { name: "Hara Bhara Kebab" }, { name: "Veg Spring Roll" },
    { name: "Mushroom Duplex" }, { name: "Paneer Pakoda" }, { name: "Mini Samosa" },
    { name: "Chilli Potato" }, { name: "Veg Manchurian" }, { name: "Dhokla" },
  ]},
  { id: "main", name: "Main Course", items: [
    { name: "Shahi Paneer", tag: "Bestseller" }, { name: "Kadhai Paneer" }, { name: "Paneer Butter Masala" },
    { name: "Malai Kofta" }, { name: "Mix Veg" }, { name: "Matar Mushroom" },
    { name: "Chana Masala" }, { name: "Kadhi Pakoda" }, { name: "Dum Aloo" },
  ]},
  { id: "dal", name: "Dal & Rice", items: [
    { name: "Dal Makhani", tag: "Bestseller" }, { name: "Dal Tadka" }, { name: "Rajma" },
    { name: "Steamed Rice" }, { name: "Jeera Rice" }, { name: "Veg Pulao" }, { name: "Veg Biryani" },
  ]},
  { id: "breads", name: "Breads", items: [
    { name: "Tandoori Roti" }, { name: "Butter Naan" }, { name: "Garlic Naan" }, { name: "Lachha Paratha" },
    { name: "Missi Roti" }, { name: "Poori" }, { name: "Rumali Roti", tag: "Live" },
  ]},
  { id: "sweets", name: "Sweets & Desserts", items: [
    { name: "Hot Jalebi with Rabri", tag: "Live" }, { name: "Gulab Jamun" }, { name: "Moong Dal Halwa", tag: "Bestseller" },
    { name: "Gajar ka Halwa", tag: "Winter" }, { name: "Rasmalai" }, { name: "Kheer" },
    { name: "Ice Cream (any flavour)" }, { name: "Kulfi" }, { name: "Paan Station" },
  ]},
];

const NONVEG_MENU = [
  { id: "nv-soup", name: "Soups", items: [
    { name: "Chicken Shorba" }, { name: "Chicken Manchow Soup" }, { name: "Mutton Shorba" },
  ]},
  { id: "nv-chicken-starters", name: "Chicken Starters", items: [
    { name: "Chicken Tikka", tag: "Bestseller" }, { name: "Tandoori Chicken" }, { name: "Chicken Malai Tikka" },
    { name: "Chicken Seekh Kebab" }, { name: "Chicken 65" }, { name: "Chilli Chicken" }, { name: "Chicken Lollipop" },
  ]},
  { id: "nv-mutton-starters", name: "Mutton Starters", items: [
    { name: "Mutton Seekh Kebab" }, { name: "Galouti Kebab", tag: "Premium" }, { name: "Shami Kebab" },
  ]},
  { id: "nv-chicken-main", name: "Chicken Main Course", items: [
    { name: "Butter Chicken", tag: "Bestseller" }, { name: "Kadhai Chicken" }, { name: "Chicken Curry (home style)" },
    { name: "Chicken Korma" }, { name: "Chicken Changezi" }, { name: "Chicken Do Pyaza" },
  ]},
  { id: "nv-mutton-main", name: "Mutton Main Course", items: [
    { name: "Mutton Rogan Josh", tag: "Bestseller" }, { name: "Mutton Curry" }, { name: "Bhuna Gosht" },
    { name: "Mutton Korma" }, { name: "Keema Matar" }, { name: "Pahadi Mutton", tag: "Local" },
  ]},
  { id: "nv-biryani", name: "Biryani & Pulao", items: [
    { name: "Chicken Dum Biryani", tag: "Bestseller" }, { name: "Mutton Biryani" }, { name: "Mutton Yakhni Pulao" },
  ]},
];

/* Gallery (veg food only — replace with the client's real event photos in /images) */
const GALLERY = [
  { src: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=800&q=70", alt: "North Indian curry spread", cls: "tall" },
  { src: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=70", alt: "Fresh samosas" },
  { src: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=70", alt: "South Indian live counter" },
  { src: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=800&q=70", alt: "Buffet setup", cls: "wide" },
  { src: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=70", alt: "Paneer dishes" },
  { src: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=800&q=70", alt: "Indian sweets", cls: "tall" },
  { src: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=800&q=70", alt: "Biryani" },
  { src: "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=800&q=70", alt: "Thali" },
];

/* Testimonials — ⚠️ SAMPLE TEXT. Replace with the client's real customer reviews before going live. */
const TESTIMONIALS = [
  { text: "Everyone at our wedding praised the food, especially the live counters and the hot jalebi-rabri. Service was smooth even with 800 guests.", who: "Sample review · Wedding" },
  { text: "Our reception menu was excellent, from the butler-passed snacks to the desserts. A very professional team.", who: "Sample review · Reception" },
  { text: "Booked them for our SIDCUL office annual day. The live counters were a big hit with the team.", who: "Sample review · Corporate, SIDCUL" },
];

/* FAQ ----------------------------------------------------------------- */
const FAQS = [
  { q: "What's included in each platter?",
    a: "Each platter is a complete set menu, from welcome drinks to desserts. You can view the full menu on this website or download it as a PDF, and any dish can be swapped to suit your event. Contact us for a quote." },
  { q: "Do you serve non-vegetarian food?",
    a: "Yes, we offer a chicken and mutton menu, prepared and served separately from the veg food. As per local regulations, non-vegetarian food is not served within Haridwar’s municipal limits and restricted zones. It is available only at venues where it is legally permitted, so please share your venue with us and we’ll confirm." },
  { q: "What is the minimum number of guests?",
    a: "We cater events from 30 guests up to several thousand. Smaller get-togethers can also be arranged on request." },
  { q: "How early should we book?",
    a: "For weddings, 1–2 months ahead is ideal, especially during the wedding season. Smaller events can usually be booked a week in advance." },
  { q: "Do you provide serving staff, crockery and setup?",
    a: "Yes. We provide serving staff, buffet counters, crockery and cleanup. Tent and décor can be arranged through partners." },
  { q: "Do you cater outside Haridwar?",
    a: "Yes. We regularly cater in Rishikesh, Roorkee, Dehradun and nearby areas." },
];
