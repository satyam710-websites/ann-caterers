/* =========================================================
   अन्न · Ann Caters & Events — PLATTER MENUS
   The three set menus shown on the Packages section and on platter.html.
   After editing, regenerate the PDFs (see README → "Platter PDFs").

   Each section: { title, note?, items: [ "Dish", ["Dish", "description"] ] }
   ========================================================= */

const PLATTERS = [
  {
    id: "silver",
    name: "The Silver Platter",
    short: "Silver",
    intro: "A complete, well-rounded spread for weddings and celebrations.",
    highlights: [
      "Welcome drinks & butler-passed snacks",
      "Live chaat counters in pure desi ghee",
      "Soup station, salad bar & papad station",
      "Indian & Mughlai main course",
      "China Town & live pasta station",
      "Jalebi-rabri, kulfi & ice cream",
    ],
    sections: [
      { title: "Welcome Drinks", items: [
        ["Mineral Water", "200 ml bottles & 20 L jars"],
        ["Aerated Drinks", "Coke, Fanta, Limca & Sprite"],
        "Hot Coffee",
      ]},
      { title: "Butler-Passed Snacks", items: [
        "Kabuli Chana Chilli", "Cheese Bon Bon", "Amritsari Rice Balls", "Chana Kebab with Hummus Dip",
        "Dahi ke Kebab", "Mushroom Cigar Rolls with Schezwan Sauce", "Honey & Herbed Baby Potatoes",
        "French Fries", "Peanut Kebab with Peanut Butter",
      ]},
      { title: "Premium Lakhnawi Angara Snacks", note: "With different marinations", items: [
        "Paneer Dhaniya Ajwaini Tikka", "Soya Chaap on Grill",
      ]},
      { title: "Live Counters", note: "Prepared in pure desi ghee", items: [
        ["Bharwa Gol Gappe", "Four flavours of water, suji & aata"],
        "Aloo, Matar & Paneer ki Tikki", "Dahi Bhalla Papdi Chaat", "Ram Laddu", "English Chaat",
      ]},
      { title: "Soup Station", items: [
        "Fresh Tomato & Basil Soup", "Palak Shorba",
        ["Accompaniments", "Veg canapés, dips, soup sticks, dinner rolls, butter cubes, salt & pepper and Chinese sauces"],
      ]},
      { title: "Indian Salad", items: [
        "Garden Fresh Green Salad", "Pineapple Hara Dhaniya Kachumber", "Cucumber Salad", "Lachha Pyaaz", "Aloo Chaat", "Fruit Chaat",
      ]},
      { title: "Continental Salad", items: ["Russian Salad", "Waldorf Salad", "Coleslaw"] },
      { title: "Raita", items: ["Mix Fruit Raita", "Aloo, Jeera & Pudina Raita"] },
      { title: "Live Amritsari Papad Station", items: [
        "Plain", "Jeera", "Kali Mirch", "Sabut Dana", "Fryums", "Tandoori Papad", "Masala Papad",
      ]},
      { title: "Desi Ghar ki Chutney", items: [
        ["Gund Chutney", "Onion chutney with green chilli & vinegar"],
        ["Doon Chutney", "Walnut chutney in yoghurt, flavoured with royal cumin"],
        ["Muz Chutney", "Radish chutney cooked the traditional way"],
      ]},
      { title: "Main Course", note: "Prepared in pure desi ghee", items: [
        "Nawabi Jeera, Paneer & Peas Pulao", "Mushroom Hara Pyaaz", "Lasooni Makai Palak", "Dal Makhani", "Kadhai Paneer",
      ]},
      { title: "Mughlai Cuisine", items: [
        "Masala Soya Chaap on Tawa",
        ["Tawa-e-Bagicha", "Seasonal dry vegetables, pre-cooked"],
        "Rumali Roti",
      ]},
      { title: "Taste of Punjab", items: ["Amritsari Kulche", "Chana Masala", "Imli & Pyaaz ki Chutney"] },
      { title: "Indian Breads", items: [
        "Mughlai Lachha Paratha", "Achari Paratha", "Butter Naan", "Stuffed Naan", "Missi Roti", "Plain Tandoori Roti",
      ]},
      { title: "China Town", items: [
        "Vegetable Manchurian Gravy",
        ["Chilli Garlic Noodles", "Noodles tossed with vegetables in chilli & garlic sauce"],
      ]},
      { title: "Pasta Live Station", items: [
        ["Penne ai Funghi", "Mushroom & tomato, finished with herbed cream sauce"],
        ["Fettuccine Arrabbiata", "Olives, tomato concassé, olive oil, chilli flakes & mushroom"],
        ["Fusilli al Pesto", "Fresh basil, garlic, parmesan & pine nuts"],
        ["Toppings", "Mushroom, baby corn, broccoli, onion rings, tomatoes, peppers, parsley, red cabbage"],
        ["Pasta", "Fusilli, penne, farfalle, conchiglie, spaghetti"],
        ["Sauces", "Bolognese, arrabbiata, pesto, mushroom & cream cheese"],
      ]},
      { title: "Mithai ki Dukan", items: [
        ["Hot Station", "Jalebi with gulab jal rabri"],
        ["Cold Station", "Kesaria tilla kulfi"],
        ["Ice Cream", "Butterscotch, rabri malai, strawberry, pineapple"],
      ]},
      { title: "Late-Night Service", items: ["Mineral Water", "Hot Coffee", "Cookies"] },
    ],
  },

  {
    id: "golden",
    name: "The Golden Platter",
    short: "Golden",
    featured: true,
    intro: "Our most popular menu, with more live counters and a full Punjabi spread.",
    highlights: [
      "Boondi jaljeera & 7 butler-passed snacks",
      "4 Lakhnawi angara grills",
      "6 live counters incl. pav bhaji",
      "Indian, continental & Italian salads",
      "Taste of Punjab with sarson da saag",
      "Halwa station, kheer & kulfi",
    ],
    sections: [
      { title: "Welcome Drinks", items: [
        ["Mineral Water", "200 ml bottles & 20 L jars"],
        ["Aerated Drinks", "Coke, Fanta, Limca & Sprite"],
        "Boondi Jaljeera", "Hot Coffee",
      ]},
      { title: "Butler-Passed Snacks", items: [
        ["Chutney Bomb", "Mashed potato stuffed with fresh pudina chutney"],
        ["Kathi Kebab Salsa Potatoes", "Round potato slices tossed in cheese salsa"],
        ["Cheese Corn Rolls", "Gujiya stuffed with cheese & green peas"],
        ["Peanut Paneer", "Cottage cheese fingers coated in crushed peanut"],
        ["Bell Mushroom", "Button mushroom with bell peppers & sweet chilli salsa"],
        ["Pizza Rolls", "Stuffed with pizza toppings & cheese, with garlic mayo"],
        ["Italian Cheese Fingers", "Italian herbs, served with tartar sauce"],
      ]},
      { title: "Premium Lakhnawi Angara Snacks", note: "With different marinations, served with mint dip", items: [
        "Mushroom Malai Tikka", "Stuffed Tandoori Aloo", "Soya Chaap on Grill", "Paneer Bhujia Wala",
      ]},
      { title: "Live Counters", note: "Prepared in pure desi ghee", items: [
        ["Pani Puri", "Four flavours of water, suji & aata"],
        "Dahi Mewa Raj Bhog", "Aloo, Matar & Paneer ki Tikki", "Pav Bhaji", "Dal Vada", "Dal Moradabadi",
      ]},
      { title: "Soup Station", items: [
        "Fresh Tomato & Basil Soup", "Sweet Corn Asparagus Soup",
        ["Accompaniments", "Veg canapés, dips, soup sticks, dinner rolls, butter cubes, salt & pepper and Chinese sauces"],
      ]},
      { title: "Indian Salad", items: [
        "Garden Fresh Green Salad", "Pineapple Hara Dhaniya Kachumber", "Cucumber Salad", "Lachha Pyaaz", "Aloo Chaat", "Fruit Chaat",
      ]},
      { title: "Continental Salad", items: ["Russian Salad", "Waldorf Salad", "Coleslaw"] },
      { title: "Italian Salad", items: ["Cheese Macaroni Salad", "Penne & Fusilli in Chilli Sauce", "Niçoise Salad", "Florida Salad"] },
      { title: "Raita", items: ["Mix Fruit Raita", "Aloo, Jeera & Pudina Raita"] },
      { title: "Live Amritsari Papad Station", items: [
        "Plain", "Jeera", "Kali Mirch", "Sabut Dana", "Fryums", "Tandoori Papad", "Masala Papad",
      ]},
      { title: "Desi Ghar ki Chutney", items: [
        ["Gund Chutney", "Onion chutney with green chilli & vinegar"],
        ["Doon Chutney", "Walnut chutney in yoghurt, flavoured with royal cumin"],
        ["Muz Chutney", "Radish chutney cooked the traditional way"],
      ]},
      { title: "Main Course", note: "Prepared in pure desi ghee", items: [
        "Dal Makhani", "Kofta-e-Firdaus", "Vilayati Subz", "Gobhi Adraki", "Dum Aloo Banarasi", "Paneer Tikka Lababdar",
      ]},
      { title: "Live Indian Counter", items: [
        ["Tawa-e-Bagicha", "Seasonal dry vegetables served on a special steel tawa"],
        "Tawa Chaap",
      ]},
      { title: "Basmati Khazana", items: ["Punjabi Sada Chawal", "Nawabi Jeera, Paneer & Peas Pulao", "Vegetable Ginger Fried Rice"] },
      { title: "Taste of Punjab", items: [
        "Sarson da Saag", "Makki di Roti", "Desi Ghee, Gur & Shakkar", "Amritsari Kulche", "Chana Masala",
        "Imli & Pyaaz ki Chutney", "Rajma Raseele", "Baingan da Bharta", "Punjabi Kadhi", "Sada Chawal",
      ]},
      { title: "Indian Breads", items: [
        "Mughlai Lachha Paratha", "Kandhari Naan", "Achari Paratha", "Khasta Roti", "Butter Naan",
        "Stuffed Naan", "Missi Roti", "Biscuity Roti", "Plain Tandoori Roti",
      ]},
      { title: "China Town Live", items: [
        "Stir-Fried Deluxe Vegetables in Hot Garlic Sauce", "Exotic Vegetables in Sweet & Sour Sauce",
        "Vegetable Ginger Fried Rice", "Chilli Garlic Noodles",
      ]},
      { title: "Pasta Live Station", items: [
        ["Penne ai Funghi", "Mushroom & tomato, finished with herbed cream sauce"],
        ["Fettuccine Arrabbiata", "Olives, tomato concassé, olive oil, chilli flakes & mushroom"],
        ["Fusilli al Pesto", "Fresh basil, garlic, parmesan & pine nuts"],
        ["Toppings", "Mushroom, baby corn, broccoli, onion rings, tomatoes, peppers, parsley, red cabbage"],
        ["Pasta", "Fusilli, penne, farfalle, conchiglie, spaghetti"],
        ["Sauces", "Bolognese, arrabbiata, pesto, mushroom & cream cheese"],
      ]},
      { title: "Mithai ki Dukan", items: [
        ["Hot Station", "Garam gulab jamun"],
        ["Cold Station", "Kesaria tilla kulfi, kesar dry fruit kheer"],
        ["Halwa Station (any one)", "Moong dal, gajar, badam or zafrani halwa"],
        ["Ice Cream", "Butterscotch, rabri malai, strawberry, pineapple"],
      ]},
      { title: "Late-Night Service", items: ["Mineral Water", "Hot Coffee", "Cookies"] },
    ],
  },

  {
    id: "platinum",
    name: "The Platinum Platter",
    short: "Platinum",
    intro: "Our grandest menu: live mocktails, a paneer station and a full mithai ki dukan.",
    highlights: [
      "Live mocktail bar",
      "11 butler-passed snacks & 6 angara grills",
      "8 live counters incl. masala dosa",
      "Live paneer station & dal tadka with phulka",
      "Oriental, Italian & continental salads",
      "Jalebi-rabri, rasmalai, kheer & halwa",
    ],
    sections: [
      { title: "Welcome Drinks", items: [
        ["Mineral Water", "200 ml bottles & 20 L jars"],
        ["Aerated Drinks", "Coke, Fanta, Limca & Sprite"],
        "Hot Coffee",
      ]},
      { title: "Live Mocktails", items: ["Virgin Mojito", "Virgin Piña Colada", "Watermelon Collapse", "Cucumber Delight"] },
      { title: "Butler-Passed Snacks", items: [
        "Italian Cheese Fingers with Tartar Sauce", "Moong Dal Ladoo with Mooli Lachha & Chutney",
        "Crispy Onion Rings with Savoury Dips", "Crispy Pinwheels with Sweet Chilli Dip", "Falafel with Hummus",
        ["Pizza Rolls", "Stuffed with pizza toppings & cheese, with garlic mayo"],
        "Spinach Pockets with Tartar Dip",
        ["Topped Potatoes", "Bell pepper, mayo & peanut butter"],
        "Cheese Corn Rolls", "Peanut Paneer with Peanut Butter", "Mushroom Duplex with Cocktail Dip",
      ]},
      { title: "Premium Lakhnawi Angara Snacks", note: "With different marinations, served with pudina dip", items: [
        "Mushroom Malai Tikka", "Cheese Stuffed Potatoes", "Soya Chaap on Grill", "Paneer Bhujia Wala", "Kurkuri Arbi Tikka", "Fresh Fruit Tikka",
      ]},
      { title: "Live Counters", note: "Prepared in pure desi ghee", items: [
        ["Pani Puri", "Four flavours of water, suji & aata"],
        "Dahi Mewa Rajbhog", "Aloo, Matar & Paneer ki Tikki", "Pav Bhaji", "Masala Dosa with Sambhar",
        "Chane ki Kachri", "Dal Moradabadi", "Tawa Aloo Matar Bhojpuri",
      ]},
      { title: "Soup Station", items: [
        "Fresh Tomato & Basil Soup", "Palak Shorba", "Sweet Corn Asparagus Soup",
        ["Accompaniments", "Veg canapés, dips, soup sticks, dinner rolls, butter cubes, salt & pepper and Chinese sauces"],
      ]},
      { title: "Indian Salad", items: [
        "Garden Fresh Green Salad", "Pineapple Hara Dhaniya Kachumber", "Cucumber Salad", "Lachha Pyaaz", "Aloo Chaat", "Fruit Chaat",
      ]},
      { title: "Continental Salad", items: ["Russian Salad", "Waldorf Salad", "Coleslaw"] },
      { title: "Oriental Salad", items: [
        "Thai Salad", "Red Cabbage Salad", "Spicy Noodle Salad", "Asparagus Salad", "Broccoli Salad", "Kimchi Salad", "Oriental Rice Salad",
      ]},
      { title: "Italian Salad", items: ["Cheese Macaroni Salad", "Penne & Fusilli in Chilli Sauce", "Niçoise Salad", "Florida Salad"] },
      { title: "Raita", items: ["Mix Fruit Raita", "Aloo, Jeera & Pudina Raita"] },
      { title: "Live Amritsari Papad Station", items: [
        "Plain", "Jeera", "Kali Mirch", "Sabut Dana", "Fryums", "Tandoori Papad", "Masala Papad",
      ]},
      { title: "Desi Ghar ki Chutney", items: [
        ["Gund Chutney", "Onion chutney with green chilli & vinegar"],
        ["Doon Chutney", "Walnut chutney in yoghurt, flavoured with royal cumin"],
        ["Muz Chutney", "Radish chutney cooked the traditional way"],
      ]},
      { title: "Main Course", note: "Prepared in pure desi ghee", items: [
        "Dal Makhani", "Kofta-e-Firdaus", "Vilayati Subz", "Gobhi Adraki", "Methi Malai Matar", "Dum Aloo Banarasi",
      ]},
      { title: "Paneer Station Live", note: "Cottage cheese delicacies cooked live, straight from pan to plate", items: [
        "Cheese Tomato", "Paneer Tikka Lababdar",
      ]},
      { title: "Live Indian Counter with Rumali Roti", items: [
        "Soya Chaap in Palak Gravy on Tawa", "Mushroom Taka-Tak on Tawa",
        ["Tawa-e-Bagicha", "Seasonal dry vegetables served on a special steel tawa"],
      ]},
      { title: "Basmati Khazana", items: [
        "Steamed Rice", "Punjabi Sada Chawal", "Nawabi Jeera, Paneer & Peas Pulao", "Vegetable Ginger Fried Rice",
      ]},
      { title: "Desi Rasoi", items: ["Gajar Matar", "Aloo Methi", "Bhindi Masala"] },
      { title: "Live Dal Tadka with Tawa Phulka", note: "Desi ghee tadka with onion, garlic, green chilli, tomato, coriander & jeera", items: [
        "Arhar, Urad, Chana & Moong Dal",
      ]},
      { title: "Taste of Punjab", items: [
        "Amritsari Kulche", "Chana Masala", "Imli & Pyaaz ki Chutney", "Rajma Raseele", "Baingan da Bharta", "Punjabi Kadhi", "Sada Chawal",
      ]},
      { title: "Indian Breads", items: [
        "Mughlai Lachha Paratha", "Kandhari Naan", "Achari Paratha", "Khasta Roti", "Butter Naan",
        "Stuffed Naan", "Missi Roti", "Biscuity Roti", "Plain Tandoori Roti",
      ]},
      { title: "China Town Live", items: [
        "Stir-Fried Deluxe Vegetables in Hot Garlic Sauce", "Exotic Vegetables in Sweet & Sour Sauce",
        "Vegetable Ginger Fried Rice", "Chilli Garlic Noodles",
      ]},
      { title: "Pasta Live Station", items: [
        ["Penne ai Funghi", "Mushroom & tomato, finished with herbed cream sauce"],
        ["Fettuccine Arrabbiata", "Olives, tomato concassé, olive oil, chilli flakes & mushroom"],
        ["Fusilli al Pesto", "Fresh basil, garlic, parmesan & pine nuts"],
        ["Toppings", "Mushroom, baby corn, broccoli, onion rings, tomatoes, peppers, parsley, red cabbage"],
        ["Pasta", "Fusilli, penne, farfalle, conchiglie, spaghetti"],
        ["Sauces", "Bolognese, arrabbiata, pesto, mushroom & cream cheese"],
      ]},
      { title: "Mithai ki Dukan", items: [
        ["Hot Station", "Jalebi with gulab jal rabri, garam gulab jamun"],
        ["Cold Station", "Rasmalai, kesar dry fruit kheer, spongy rasgulla, tilla kulfi, ice cream"],
        ["Halwa Station", "Moong dal halwa"],
      ]},
    ],
  },
];
