export interface Review {
  id?: string;
  userId?: string;
  userName?: string;
  rating: number;
  comment: string;
  date?: string;
  reviews?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[]; // Updated to include an array of images
  category: string;
  badge?: string;
  description?: string;
  features?: string[];
  brand?: string;
  model?: string;
  warranty?: string;
  reviews?: Review[]; // New property for reviews
}

export const productData: Record<string, Product[]> = {
  foodBeverageContainers: [
    {
      id: "f-001",
      name: "150ml Bru Printed Paper Glass",
      price: 50,
      images: [
        "/products/bru.png",
        "/products/bru_1.png",
      ],
      category: "food-beverage-containers",
      badge: "New",
      description: "Our 150ml paper glass is the perfect solution for serving hot or cold beverages in an eco-conscious and hassle-free way. Crafted from high-quality food-grade paper with a leak-resistant coating, it ensures durability without compromising safety or hygiene. Ideal for tea, coffee, juice, or water at offices, events, cafes, or home use.",
      features: [
        "Capacity: 150 ml",
        "Pieces: 80 per pack",
        "Material: Food-grade paper with PE coating",
        "Use: Suitable for both Tea and Coffee",
        "Ideal for: Parties, catering, takeaway counters, vending machines and daily use",
        "Eco-friendly: Biodegradable and recyclable",
      ],
      brand: "bru Coffee",
      model: "Spectra",
      reviews: [
        {
          rating: 4,
          comment: "Great quality and perfect for parties!"
        },
        {
          rating: 5,
          comment: "Exceptional craftsmanship and timeless design.",
        }
      ]
    },
    {
      id: "f-002",
      name: "Paper Glass 200ml",
      price: 70,
      images: [
        "/products/starbucks.png",
        "/products/starbucks_1.png",
      ],
      category: "food-beverage-containers",
      description: "Crafted from premium food-grade paper, this cup offers the perfect balance of durability and eco-friendliness. Its ideal size makes it suitable for both hot and cold beverages like coffee, tea, juice, or water. Whether it’s for events, offices, cafes, or daily use, this cup delivers convenience without compromising quality.",
      features: [
        "Capacity: 200 ml",
        "Pieces: 80 per pack",
        "Material: Food-safe, biodegradable paper with leak-resistant coating",
        "Use: Suitable for hot & cold drinks",
        "Perfect for: Parties, takeaways, catering, corporate use, and vending machines",
      ],
      brand: "Starbucks Design",
      model: "Spectra",
      reviews: [
        {
          rating: 4,
          comment: "Good for the price, but could be sturdier."
        }
      ]
    },
    {
      id: "f-003",
      name: "Aluminum Container 450ml",
      price: 220,
      images: [
        "/products/containers.png",
        "/products/containerbox.png"
      ],
      category: "food-beverage-containers",
      description: "Aluminum containers are the perfect solution for serving hot food items in an eco-conscious and hassle-free way. Crafted from high-quality food-grade aluminum with a leak-resistant coating, it ensures durability without compromising safety or hygiene.",
      features: [
        "Pieces: 100 per pack",
        "Capacity: 450 ml",
        "Material: Food-grade aluminium with leak-resistant coating",
        "Use: Suitable for hot food items",
        "Ideal for: Parties, catering, takeaway counters and daily use",
      ],
      brand: "AluSHEILD",
      reviews: [
        {
          rating: 4,
          comment: "Good for the price."
        }
      ]
    },
    {
      id: "f-004",
      name: "Aluminium Container 660ml",
      price: 330,
      images: [
        "/products/container650.png",
        "/products/container-650.png",
      ],
      category: "food-beverage-containers",
      description: "Aluminium containers are the perfect solution for serving hot food items in an eco-conscious and hassle-free way. Crafted from high-quality food-grade aluminium with a leak-resistant coating, it ensures durability without compromising safety or hygiene.",
      features: [
        "Pieces: 100 per pack",
        "Capacity: 660 ml",
        "Material: Food-grade aluminium with leak-resistant coating",
        "Use: Suitable for hot food items",
        "Ideal for: Parties, catering, takeaway counters and daily use",
      ],
      brand: "AluSHEILD",
      reviews: [
        {
          rating: 4,
          comment: "Good for the price."
        },
        {
          rating: 5,
          comment: "best quality"
        }
      ]
    },
    {
      id: "f-005",
      name: "Paper Glass 350ml",
      price: 50,
      images: [
        "/products/paper_glass_red2.png",
        "/products/paperglass_red.png",
      ],
      category: "food-beverage-containers",
      description: "Crafted from premium food-grade paper, this cup offers the perfect balance of durability and eco-friendliness. Its ideal size makes it suitable for both hot and cold beverages like coffee, tea, juice, or water. Whether it’s for events, offices, cafes, or daily use, this cup delivers convenience without compromising quality.",
      features: [
        "Pieces: 50 per pack",
        "Capacity: 350 ml",
        "Material: Food-safe, biodegradable paper with leak-resistant coating",
        "Use: Suitable for hot & cold drinks",
        "Ideal for: Parties, catering, takeaway counters and daily use",
      ],
      reviews: [
        {
          rating: 4,
          comment: "Good for the price."
        }
      ]
    },
    {
      id: "f-006",
      name: "Lava Cake Container",
      price: 150,
      images: [
        "/products/lava2.jpeg",
        "/products/lava3.jpeg",
        "/products/lava container.png",
        "/products/lava1.jpeg"
      ],
      category: "food-beverage-containers",
      description: "Aluminium containers are the perfect solution for serving hot food items in an eco-conscious and hassle-free way. Crafted from high-quality food-grade aluminium with a leak-resistant coating, it ensures durability without compromising safety or hygiene.",
      features: [
        "Capacity: 150 ml",
        "Material: Food-grade aluminium with leak-resistant coating",
        "Use: Suitable for hot & cold drinks",
        "Ideal for: Parties, catering, takeaway counters and daily use",
      ],
      brand: "AluSHEILD",
      reviews: [
        {
          rating: 4,
          comment: "Good for the price."
        }
      ]
    },
    {
      id: "f-007",
      name: "Plastic Container (2250)",
      price: 15,
      images: [
        "/products/royal_container.png",
        "/products/royal_container.png",
      ],
      badge: "Per pcs",
      category: "food-beverage-containers",
      description: "Plastic Containers ",
      features: [
        "Size Number: 2250",
        "Material: Fresh plastic container",
        "Ideal for: Parties, catering, takeaway counters and daily use",
      ],
      brand: "AluSHEILD",
      reviews: [
        {
          rating: 4,
          comment: "Good for the price."
        }
      ]
    },
    {
      id: "f-008",
      name: "Biodegradable 5CP Tray",
      price: 199,
      images: [
        "/products/5cp.png",
        "/products/Bio_5cp.png",
        "/products/tray.jpeg"
      ],
      category: "cleaning-hygiene-products",
      description: "  Biodegradable plate ",
      features: [
        "Pack of 25pcs",
        "Microwave Safe",
        "Water and Oil Resistance",
        "Eco-friendly",
        "Food Grade Material used for manufacturing",
        "Perfect for formal events",
        "High absorbency"
      ],
      brand: "Signature Fresh",
      reviews: [
        {
          rating: 5,
          comment: "Fantastic quality, used for our wedding!"
        }
      ]
    },
    {
      id: "f-009",
      name: "Food Plus Cling Wrap",
      price: 260,
      images: [
        "/products/clingfilm.png",
        "/products/cling best fresh.png"
      ],
      category: "food-beverage-containers",
      description: "Food Plus Cling Wrap is great for keeping food fresh and safe. It's designed for easy handling and storage.",
      features: [
        "Material: Safe for food contact",
        "Use: Ideal for wrapping food items",
        "Convenience: Easily tears for quick use",
        "Ideal for: Homes, restaurants, and catering"
      ],
      brand: "Food Plus",
      reviews: [
        {
          rating: 5,
          comment: "Great cling wrap, keeps food fresh!"
        },
        {
          rating: 4,
          comment: "Good quality, but a bit pricey."
        }
      ]
    },
    {
      id: "f-010",
      name: "Jain-Ex Butterpaper Paper",
      price: 149,
      images: [
        "/products/butterpaper_200pcs.png",
        "/products/ChatGPT Image Jun 20, 2025, 10_05_19 PM.png"
      ],
      category: "food-beverage-containers",
      description: "Perfect for wrapping, showcasing, and serving food, Jain-Ex food wrapping paper is versatile and reliable.",
      features: [
        "Size: 11x11 , 11x14",
        "Material: High quality food-safe paper",
        "Use: Ideal for cafes and restaurants",
        "Convenience: Easy to use and cut"
      ],
      brand: "Jain-Ex",
      reviews: [
        {
          rating: 5,
          comment: "Great quality butter paper, perfect for my bakery!"
        },
        {
          rating: 4,
          comment: "Good for the price, but could be thicker."
        }
      ]
    },
    {
      id: "f-011",
      name: "Jain-Ex Aluminum Foil 1 kg",
      price: 480,
      images: [
        "/products/foil_1kg.png",
        "/products/foil-1kg.png"
      ],
      category: "food-beverage-containers",
      description: "This aluminum foil is perfect for wrapping and cooking, ensuring freshness and safety.",
      features: [
        "Weight: 1 kg",
        "Material: Food-grade aluminum",
        "Use: Suitable for cooking and storage",
        "Convenience: Easy to tear and use"
      ],
      brand: "Jain-Ex",
      reviews: [
        {
          rating: 5,
          comment: "Excellent quality aluminum foil, very durable!"
        },
        {
          rating: 4,
          comment: "Good for cooking, but a bit expensive."
        }
      ]
    },
    {
      id: "f-012",
      name: "Jain-Ex Aluminum Foil 9 meters",
      price: 60,
      images: [
        "/products/foil_9mtr.png",
        "/products/foil-9.png"
      ],
      category: "food-beverage-containers",
      description: "A versatile aluminum foil roll that meets your kitchen needs.",
      features: [
        "Length: 9 meters",
        "Material: Food-grade aluminum",
        "Use: Ideal for wrapping, cooking, or grilling",
        "Convenience: Tearing edge included for easy use"
      ],
      brand: "Jain-Ex",
      reviews: [
        {
          rating: 5,
          comment: "Great aluminum foil, very handy for cooking!"
        },
        {
          rating: 3,
          comment: "Good quality, but could be thicker."
        }
      ]
    },
    {
      id: "f-013",
      name: "Jain-Ex Aluminum Foil 25 meters",
      price: 120,
      images: [
        "/products/foil_25mtr.png",
        "/products/foil-25.png"
      ],
      category: "food-beverage-containers",
      description: "Extra-length aluminum foil for all your wrapping needs.",
      features: [
        "Length: 25 meters",
        "Material: Food-grade aluminum",
        "Use: Suitable for practical and versatile kitchen use",
        "Convenience: Easy-to-cut but strong enough to hold"
      ],
      brand: "Jain-Ex",
      reviews: [
        {
          rating: 5,
          comment: "Perfect for my kitchen, love the extra length!"
        },
        {
          rating: 2,
          comment: "Good quality foil, but a bit pricey."
        }
      ]
    },
    {
      id: "f-014",
      name: "Milky Container 250ml",
      price: 160,
      images: [
        "/products/mily_containers.png",
        "/products/mily_containers.png"
      ],
      category: "food-beverage-containers",
      description: "Durable plastic takeaway container, perfect for food service.",
      features: [
        "Size: 250ml",
        "Pieces: 50 per pack",
        "Material: BPA-free plastic",
        "Use: Suitable for hot and cold food",
        "Ideal for: Takeout, deliveries, and meal prep"
      ],
      brand: "Paras",
      reviews: [
         {
          rating: 5,
          comment: "Perfect for my kitchen, love the extra length!"
        },
        {
          rating: 4,
          comment: "Good quality foil, but a bit pricey."
        }
      ]
    },
    {
      id: "f-015",
      name: "Milky Container 500ml",
      price: 230,
      images: [
        "/products/milk_container_250ml.png",
        "/products/milky_container_250ml.png"
      ],
      category: "food-beverage-containers",
      description: "Durable plastic takeaway container, perfect for food service.",
      features: [
        "Size: 500ml and also available in different sizes :- 750ml , 1000ml .",
        "Pieces: 50 per pack",
        "Material: BPA-free plastic",
        "Use: Suitable for hot and cold food",
        "Ideal for: Takeout, deliveries, and meal prep"
      ],
      brand: "Paras",
      reviews: [
         {
          rating: 5,
          comment: "Perfect for my kitchen, love the extra length!"
        },
        {
          rating: 4,
          comment: "Good quality foil, but a bit pricey."
        }
      ]
    }

  ],

  partyItems: [
    {
      id: "pi-001",
      name: "Happy Birthday Foil Balloon(Gold)",
      price: 90,
      images: [
        "/products/HB-gold.jpg",
        "/products/Happy-Birthday.jpg",
      ],
      category: "party-items",
      badge: "Premium",
      description: "Celebrate in style with our dazzling Happy Birthday Foil Balloon – the perfect centerpiece for any birthday bash!.",
      features: [
        "Material: Premium foil",
        "Size: 16 inches",
        "Design: Elegant gold lettering on a white background",
        "Inflation: Air or helium compatible",
        "Reuseable: Durable and long-lasting",
      ],
      warranty: "7days after installing",
      reviews: [
        {
          rating: 5,
          comment: "Absolutely love this laptop! Worth every penny.",
          reviews: "David"
        },
        {
          rating: 4,
          comment: "Great performance, but a bit heavy.",
          reviews: "Emma"
        }
      ]
    },
    {
      id: "pi-002",
      name: "HB Foil Balloon (Silver)",
      price: 90,
      images: [
        "/products/HB-silver.jpg",
        "/products/hb.jpg",
      ],
      category: "party-items",
      badge: "new",
      description: "Celebrate in style with our dazzling Happy Birthday Foil Balloon – the perfect centerpiece for any birthday bash !",
      features: [
        "Material: Premium foil",
        "Size: 16 inches",
        "Design: Elegant silver lettering on a white background",
        "Inflation: Air or helium compatible",
        "Reuseable: Durable and long-lasting",
      ],
      warranty: "7days after installing",
      reviews: [
        {
          rating: 4,
          comment: "Perfect for my development needs!"
        }
      ]
    },
    {
  "id": "pi-003",
  "name": "Anar Candles",
  "price": 50,
  "images": [
    "/products/anar.jpeg",
    "/products/anar1.jpeg",
    "/products/anar-c.jpeg"
  ],
  "category": "party-items",
  "badge": "Best Seller",
  "description": "Add a sparkle to your birthday cake with our vibrant Colorful Birthday Candles. Perfect for all ages!",
  "features": [
    "Material: Wax",
    "Size: 6 inches",
    "Colors: Assorted vibrant colors including red, blue, green, yellow, and silver",
    "Design: Glittery finish for enhanced visual appeal",
    "Quantity: Pack of 6 candles"
  ],
  "warranty": "N/A",
  "reviews": [
    {
      "rating": 5,
      "comment": "These candles made my daughter's birthday cake extra special!",
      "reviews": "Sophia"
    },
    {
      "rating": 4,
      "comment": "Good quality, wish they had more colors.",
      "reviews": "Liam"
    }
  ]
},
{
  "id": "pi-004",
  "name": "Decorative Foil Curtains",
  "price": 40,
  "images": [
    "/products/gold.jpeg",
    "/products/gold-c.jpeg"
  ],
  "category": "party-items",
  "description": "Enhance your celebration with these shimmering Decorative Foil Curtains. Ideal for events and parties.",
  "features": [
    "Material: High-quality foil",
    "Size: 2 panels 3ft x 8ft each",
    "Color: Bright gold",
    "Design: Vertical shiny strips",
    "Quantity: 2 panels per pack"
  ],
  "warranty": "N/A",
  "reviews": [
    {
      "rating": 5,
      "comment": "These curtains transformed our event space beautifully!",
      "userName": "Mia"
    },
    {
      "rating": 4,
      "comment": "Very pretty! Just be careful when hanging them.",
      "userName": "Noah"
    }
  ]
},
{
  "id": "pi-005",
  "name": "Decorative Foil Curtains",
  "price": 40,
  "images": [
    "/products/silver.jpeg",
    "/products/gold-c.jpeg"
  ],
  "category": "party-items",
  "description": "Enhance your celebration with these shimmering Decorative Foil Curtains. Ideal for events and parties.",
  "features": [
    "Material: High-quality foil",
    "Size: 2 panels 3ft x 8ft each",
    "Color: Bright Silver",
    "Design: Vertical shiny strips",
    "Quantity: 2 panels per pack"
  ],
  "warranty": "N/A",
  "reviews": [
    {
      "rating": 5,
      "comment": "These curtains transformed our event space beautifully!",
      "userName": "Mia"
    },
    {
      "rating": 4,
      "comment": "Very pretty! Just be careful when hanging them.",
      "userName": "Noah"
    }
  ]
},
{
  "id": "pi-006",
  "name": "Decorative Foil Curtains",
  "price": 40,
  "images": [
    "/products/pink.jpeg",
    "/products/gold-c.jpeg"
  ],
  "category": "party-items",
  "description": "Enhance your celebration with these shimmering Decorative Foil Curtains. Ideal for events and parties.",
  "features": [
    "Material: High-quality foil",
    "Size: 2 panels 3ft x 8ft each",
    "Color: Bright Pink",
    "Design: Vertical shiny strips",
    "Quantity: 2 panels per pack"
  ],
  "warranty": "N/A",
  "reviews": [
    {
      "rating": 5,
      "comment": "These curtains transformed our event space beautifully!",
      "userName": "Mia"
    },
    {
      "rating": 3,
      "comment": "Very pretty! Just be careful when hanging them.",
      "userName": "Noah"
    }
  ]
}


  ],

  paperPrintingItems: [
    {
      id: "pp-001",
      name: "Shagun Box",
      price: 150,
      images: [
        "/products/shagun2.png",
        "/products/shagun box.png",
      ],
      category: "paper-printing-items",
      description: "The Shagun Box is a beautifully crafted box box designed to hold and present gifts for special occasions. Made from high-quality materials, it features intricate designs and a luxurious finish, making it perfect for weddings, festivals, or any celebratory event.",
      features: [
        "For giving a bundle of 100 currency notes",
        "Material: High-quality board and paper with a glossy finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 4,
          comment: " Perfect for gifting!"
        }
      ]
    },
    {
      id: "pp-002",
      name: "Shagun Box",
      price: 150,
      images: [
        "/products/notes.png",
        "/products/notes1.png",
      ],
      category: "paper-printing-items",
      badge: "New",
      description: "The Shagun Box is a beautifully crafted box box designed to hold and present gifts for special occasions. Made from high-quality materials, it features intricate designs and a luxurious finish, making it perfect for weddings, festivals, or any celebratory event.",
      features: [
        "For giving a bundle of 100 currency notes",
        "Material: High-quality board and paper with a glossy finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 4,
          comment: " Perfect for gifting!"
        }
      ]
    },
    {
      id: "pp-003",
      name: "Shagun Card (Pack of 10)",
      price: 120,
      images: [
        "/products/card1.png",
        "/products/card1.png",

      ],
      category: "paper-printing-items",
      description: " The Shagun Card is a beautifully designed greeting card that is perfect for gifting on special occasions. Made from high-quality paper, it features intricate designs and a luxurious finish, making it ideal for weddings, festivals, or any celebratory event.",
      features: [
        " Give shagun in the festival season like Raksha Bandhan, Diwali, Marriage,etc",
        "Material: High-quality paper with a glossy finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 3,
          comment: " Perfect for gifting!"
        }
      ]
    },
    {
      id: "pp-004",
      name: "Shagun Card (Three fold)",
      price: 120,
      images: [
        "/products/card2.png",
        "/products/card2.png",
      ],
      category: "paper-printing-items",
      description: " The Shagun Card is a beautifully designed greeting card that is perfect for gifting on special occasions. Made from high-quality paper, it features intricate designs and a luxurious finish, making it ideal for weddings, festivals, or any celebratory event.",
      features: [
        "Pack of 10pcs",
        " Give shagun in the festival season like Raksha Bandhan, Diwali, Marriage,etc",
        "Material: High-quality paper with a glossy finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 4,
          comment: " Perfect for gifting!"
        }
      ]
    },
    {
      id: "pp-005",
      name: "Shagun Card (Pack of 25)",
      price: 90,
      images: [
        "/products/card3.png",
        "/products/card3.png",

      ],
      category: "paper-printing-items",
      description: " The Shagun Card is a beautifully designed greeting card that is perfect for gifting on special occasions. Made from high-quality paper, it features intricate designs and a luxurious finish, making it ideal for weddings, festivals, or any celebratory event.",
      features: [
        " Give shagun in the festival season like Raksha Bandhan, Diwali, Marriage,etc",
        "Material: High-quality paper with a Matt finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 4,
          comment: " Perfect for gifting!"
        }
      ]
    },
    {
      id: "pp-006",
      name: "Shagun Card (Pack of 25)",
      price: 90,
      images: [
        "/products/card4.png",
        "/products/card4.png",

      ],
      category: "paper-printing-items",
      description: " The Shagun Card is a beautifully designed greeting card that is perfect for gifting on special occasions. Made from high-quality paper, it features intricate designs and a luxurious finish, making it ideal for weddings, festivals, or any celebratory event.",
      features: [
        " Give shagun in the festival season like Raksha Bandhan, Diwali, Marriage,etc",
        "Material: High-quality paper with a Matt finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 4,
          comment: " Perfect for gifting!"
        }
      ]
    },
    {
      id: "pp-007",
      name: "Shagun Card (Pack of 25)",
      price: 90,
      images: [
        "/products/card5.jpg",
        "/products/card5.jpg",

      ],
      category: "paper-printing-items",
      description: " The Shagun Card is a beautifully designed greeting card that is perfect for gifting on special occasions. Made from high-quality paper, it features intricate designs and a luxurious finish, making it ideal for weddings, festivals, or any celebratory event.",
      features: [
        " Give shagun in the festival season like Raksha Bandhan, Diwali, Marriage,etc",
        "Material: High-quality paper with a glossy finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 3,
          comment: " Perfect for gifting!"
        }
      ]
    },
    {
      id: "pp-008",
      name: "Shagun Card (Pack of 25)",
      price: 70,
      images: [
        "/products/card6.jpg",
        "/products/card6.jpg",
      ],
      category: "paper-printing-items",
      description: " The Shagun Card is a beautifully designed greeting card that is perfect for gifting on special occasions. Made from high-quality paper, it features intricate designs and a luxurious finish, making it ideal for weddings, festivals, or any celebratory event.",
      features: [
        " Give shagun in the festival season like Raksha Bandhan, Diwali, Marriage,etc",
        "Material: High-quality paper with a glossy finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 4,
          comment: " Perfect for gifting!"
        }
      ]
    },
    {
      id: "pp-009",
      name: "Shagun Card (Pack of 25)",
      price: 70,
      images: [
        "/products/card7.jpg",
        "/products/card10.jpg",

      ],
      category: "paper-printing-items",
      description: " The Shagun Card is a beautifully designed greeting card that is perfect for gifting on special occasions. Made from high-quality paper, it features intricate designs and a luxurious finish, making it ideal for weddings, festivals, or any celebratory event.",
      features: [
        " Give shagun in the festival season like Raksha Bandhan, Diwali, Marriage,etc",
        "Material: High-quality paper with a glossy finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 4,
          comment: " Perfect for gifting!"
        }
      ]
    },
    {
      id: "pp-0010",
      name: "Shagun Card (Pack of 25)",
      price: 70,
      images: [
        "/products/card8.png",
        "/products/card8.png",
      ],
      category: "paper-printing-items",
      description: " The Shagun Card is a beautifully designed greeting card that is perfect for gifting on special occasions. Made from high-quality paper, it features intricate designs and a luxurious finish, making it ideal for weddings, festivals, or any celebratory event.",
      features: [
        "Small size card",
        "Colour: White",
        " Give shagun in the festival season like Raksha Bandhan, Diwali, Marriage,etc",
        "Material: High-quality paper with a glossy finish",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Amazing box"
        },
        {
          rating: 4,
          comment: " Perfect for gifting!"
        }
      ]
    },

  ],

  cleaningHygieneProducts: [
    {
      id: "hp-001",
      name: "Kitchen Towel (Non-Woven)",
      price: 110,
      images: [
        "/products/bamboo_kitchen-towel.png",
        "/products/green.jpg",
        "/products/blue.jpg",
        "/products/yellow.jpg",
        "/products/pink.jpg"
      ],
      category: "cleaning-hygiene-products",
      badge: "Premium",
      description: "Kitchen towels are essential for maintaining a clean and hygienic kitchen. Made from high-quality non-woven fabric, these towels are designed to absorb spills, wipe surfaces, and dry hands effectively. They are durable, reusable, and eco-friendly, making them a perfect choice for everyday kitchen use.",
      features: [
        "High-absorbency non-woven fabric",
        "Soft and gentle on surfaces",
        "Machine washable and reusable",
        "Available in multiple colors",
        "Ideal for drying hands, wiping spills, and cleaning surfaces"
      ],
      brand: "Bamboo",
      warranty: "Reusable",
      reviews: [
        {
          rating: 5,
          comment: "Masterpiece, highly recommended!"
        },
        {
          rating: 5,
          comment: "A true work of art!"
        }
      ]
    },
    {
      id: "hp-002",
      name: "Toby Facial Wipes",
      price: 40,
      images: [
        "/products/toby (2).png",
        "/products/lemon.jpg",
        "/products/aloe.jpg",
        "/products/lav.jpg",
        "/products/rose.jpg"
      ],
      category: "cleaning-hygiene-products",
      description: "Toby Facial Wipes are designed to cleanse and refresh your skin on the go. Made with natural ingredients, these wipes effectively remove dirt, makeup, and impurities while leaving your skin feeling soft and rejuvenated. Perfect for travel, gym, or daily use.",
      features: [
        "Net Quantity : 25pcs",
        "Gentle and effective cleansing",
        "Infused with natural ingredients",
        "Alcohol-free and hypoallergenic",
        "Convenient travel-size packaging",
        "Suitable for all skin types",
      ],
      brand: "Toby",
      warranty: "Date mention on Pack",
      reviews: [
        {
          rating: 4,
          comment: "Masterpiece, highly recommended!"
        },
        {
          rating: 5,
          comment: "A true work of art!"
        }
      ]
    },
    {
      id: "hp-003",
      name: "Toby Baby Wipes",
      price: 55,
      images: [
        "/products/babywipes.png",
        "/products/baby.png",
        "/products/baby.jpg",
      ],
      category: "cleaning-hygiene-products",
      description: "Toby Baby Wipes are specially formulated to gently cleanse and soothe your baby's delicate skin. Made with natural ingredients, these wipes are soft, hypoallergenic, and free from harsh chemicals, making them perfect for diaper changes, messy hands, and face cleaning.",
      features: [
        "0+ Months and above",
        "Net Quantity: 72 wipes",
        "Type: Baby Cleansing Wipes",
        "Ideal For: Babys",
        "Scented Wipes",
      ],
      brand: "Toby",
      warranty: "Date mention on Pack",
      reviews: [
        {
          rating: 4,
          comment: "A true work of art!"
        }
      ]
    },
    {
      id: "hp-004",
      name: "Latex Gloves (50Pcs)",
      price: 160,
      images: [
        "/products/dr_care1.png",
        "/products/dr_care.png",

      ],
      category: "cleaning-hygiene-products",
      description: "Dr. Care Latex latexmination gloves are designed for maximum protection and comfort. Made from high-quality latex, these gloves provide excellent barrier protection against contaminants while ensuring a snug fit. Ideal for medical, cleaning, and food handling tasks.",
      features: [
        "Net Quantity : 50pcs",
        "Size : large",
        "Color: Black",
        "Elasticity, comfort, and strong barrier protection against bacteria and viruses.",
        "Latex gloves are ideal for medical, cleaning, and food handling tasks.",
      ],
      brand: "Dr Care",
      warranty: "Date mention on Pack",
      reviews: [
        {
          rating: 5,
          comment: "A true work of art!"
        }
      ]
    },
    {
      id: "hp-005",
      name: "Pocket Tissues (10pkt)",
      price: 60,
      images: [
        "/products/pocket_tissue.png",
        "/products/pocket_tissue1.png",
      ],
      category: "cleaning-hygiene-products",
      description: "Pocket tissues are essential for maintaining hygiene on the go. These soft, absorbent tissues are perfect for wiping hands, faces, and surfaces. Compact and convenient, they fit easily in pockets or bags, making them ideal for travel, work, or everyday use.",
      features: [
        "Net Quantity in 1pkt : 10pcs",
        "Set of 10pkts",
        "Super soft and hygiene",
      ],
      brand: "Daisy Blossom",
      warranty: "Date mention on Pack",
      reviews: [
        {
          rating: 3,
          comment: "A true work of art!"
        }
      ]
    },
    {
      id: "hp-006",
      name: "V-PAC Splash Dinner Napkins",
      price: 90,
      images: [
        "/products/splash tissue.png",
        "/products/splash tissue.png"
      ],
      category: "cleaning-hygiene-products",
      description: "Soft premium quality quilted dinner napkins, perfect for any dining setting.",
      features: [
        "Size: 40cm x 40cm",
        "Pack of 50 pieces",
        "3 Ply for maximum durability",
        "Ideal for both home and restaurant use",
        "Soft and absorbent material"
      ],
      brand: "V-PAC",
      reviews: [
        {
          rating: 5,
          comment: "Very soft and durable!"
        }
      ]
    },
    {
      id: "hp-007",
      name: "V-PAC Printing Napkin(Butterfly)",
      price: 70,
      images: [
        "/products/vpac1.png",
        "/products/vpac.png"

      ],
      category: "cleaning-hygiene-products",
      description: "Premium quality napkins made from 100% virgin pulp for a clean feel.",
      features: [
        "Size: 30cm x 30cm",
        "Pack of 50 pieces",
        "3 Ply for extra absorbency",
        "Feather touch for utmost comfort",
        "Perfect for everyday use"
      ],
      brand: "V-PAC",
      reviews: [
        {
          rating: 4,
          comment: "Great for parties!"
        }
      ]
    },
    {
      id: "hp-008",
      name: "V-PAC Printed Napkin(Parrot)",
      price: 70,
      images: [
        "/products/vpac2.png",
        "/products/vpac.png"

      ],
      category: "cleaning-hygiene-products",
      description: "Colorful printed napkins, perfect for festive occasions.",
      features: [
        "Size: 30cm x 30cm",
        "Pack of 50 pieces",
        "Durable and eye-catching design",
        "Ideal for parties and events"
      ],
      brand: "V-PAC",
      reviews: [
        {
          rating: 4,
          comment: "Lovely design and good quality!"
        }
      ]
    },
    {
      id: "hp-009",
      name: "V-PAC Printed Napkin(Hankey)",
      price: 70,
      images: [
        "/products/vpac3.png",
        "/products/vpac.png"

      ],
      category: "cleaning-hygiene-products",
      description: "Decorative napkins ideal for enhancing table settings.",
      features: [
         "Size: 30cm x 30cm",
        "Pack of 50 pieces",
        "Beautiful designs",
        "Perfect for weddings and celebrations"
      ],
      brand: "V-PAC",
      reviews: [
        {
          rating: 5,
          comment: "Very pretty and high quality!"
        }
      ]
    },
    {
      id: "hp-010",
      name: "Biodegradable 5CP Tray",
      price: 199,
      images: [
        "/products/5cp.png",
        "/products/Bio_5cp.png",
        "/products/tray.jpeg"
      ],
      category: "cleaning-hygiene-products",
      description: " ",
      features: [
        "Pack of 25pcs",
        "Microwave Safe",
        "Water and Oil Resistance",
        "Eco-friendly",
        "Food Grade Material used for manufacturing",
        "Perfect for formal events",
        "High absorbency"
      ],
      brand: "Signature Fresh",
      reviews: [
        {
          rating: 5,
          comment: "Fantastic quality, used for our wedding!"
        }
      ]
    },

    {
      id: "hp-011",
      name: "Wooden Ear buds",
      price: 160,
      images: [
        "/products/ear (3).png",
        "/products/ear.png"
      ],
      category: "cleaning-hygiene-products",
      description: "These Ear buds are made from high-quality wood, providing a natural and eco-friendly alternative to wooden cotton swabs. They are perfect for personal hygiene, cleaning delicate areas, and applying or removing makeup. The soft cotton tips ensure gentle and effective use.",
      features: [
        "Net Quantity : 100pcs",
        "Material use: Wood and Cotton",
      ],
      brand: "",
      warranty: "Date mention on Pack",
      reviews: [
        {
          rating: 2,
          comment: "A true work of art!"
        }
      ]
    },
 
{
  id: "hp-012",
  name: "V-PAC Kitchen Towels",
  price: 60,
  images: [
    "/products/kitchen-towel.jpeg",
    "/products/kitchen-towel.jpeg"
  ],
  category: "cleaning-hygiene-products",
  badge: "Premium",
  description: "V-PAC Kitchen Towels are designed for superior absorbency and durability, making them perfect for maintaining a clean and hygienic kitchen. Ideal for wiping spills, drying hands, and cleaning surfaces.",
  features: [
    "Premium quality paper",
    "Highly absorbent",
    "Soft and gentle on surfaces",
    "Ideal for kitchen and household use",
    "Convenient roll design for easy dispensing"
  ],
  brand: "V-PAC",
  reviews: [
    {
      rating: 5,
      comment: "Excellent quality towels, a must-have in the kitchen!"
    }
  ]
},
  {
    id: "hp-013",
    name: "Taj Toothpicks",
    price: 140,
    images: [
      "/products/taj_toothpicks.png",
      "/products/toothpick.jpg"
    ],
    category: "cleaning-hygiene-products",
    description: "The Hygienic and Clean Way To Guard Decay. Toothpicks packaged for easy access and hygiene.",
    features: [
      "Net Quantity: 100 pcs",
      "Box Contains: 10 Box",
      "Made from natural wood",
      "Hygienically packaged",
      "Ideal for dental hygiene and food presentation"
    ],
    brand: "Taj",
    reviews: [
      {
        rating: 5,
        comment: "Excellent quality!"
      },
      {
        rating: 4,
        comment: "Convenient packaging!"
      }
    ]
  },
  
  {
    id: "hp-014",
    name: "Bamboo Toothpicks (2'')",
    price: 30,
    images: [
      "/products/toothpick1.jpeg",
      "/products/toothpick1.jpeg"
    ],
    category: "cleaning-hygiene-products",
    description: "Purely natural bamboo toothpicks for a sustainable choice.",
    features: [
      "Net Quantity: 100 pcs",
      "100% biodegradable",
      "Ideal for parties and everyday use"
    ],
    reviews: [
      {
        rating: 4,
        comment: "Great for gatherings!"
      }
    ]
  },
  {
    id: "hp-015",
    name: "Bamboo Toothpicks (3'')",
    price: 50,
    images: [
      "/products/toothpick2.jpeg",
      "/products/toothpick2.jpeg"
    ],
    category: "cleaning-hygiene-products",
    description: "Purely natural bamboo toothpicks for a sustainable choice.",
    features: [
      "Net Quantity: 100 pcs",
      "100% biodegradable",
      "Ideal for parties and everyday use"
    ],
    reviews: [
      {
        rating: 5,
        comment: "Great for gatherings!"
      }
    ]
  },
  {
    id: "hp-016",
    name: "Wooden Forks",
    price: 60,
    images: [
      "/products/fock.png",
      "/products/wooden-fock.jpeg",
      "/products/fock1.png"
    ],
    category: "cleaning-hygiene-products",
    description: "Disposable wooden forks, perfect for events and parties.",
    features: [
      "Pack of 100 pcs",
      "Eco-friendly material",
      "Sturdy design for easy handling"
    ],
    reviews: [
      {
        rating: 4,
        comment: "Good quality for the price."
      }
    ]
  },
  {
    id: "hp-017",
    name: "Wooden Spoons",
    price: 60,
    images: [
      "/products/spoon.png",
      "/products/wooden-sp.jpeg"
    ],
    category: "cleaning-hygiene-products",
    description: "Disposable wooden spoons for various uses.",
    features: [
      "Pack of 100 pcs",
      "Eco-friendly and biodegradable",
      "Durable for everyday use"
    ],
    reviews: [
      {
        rating: 5,
        comment: "Perfect for my parties!"
      }
    ]
  }
  ],

  fragranceFreshening: [
    {
      id: "ff-001",
      name: "Toby Room Freshner (Lavender)",
      price: 99,
      images: [
        "/products/lavender.jpg",
        "/products/toby.png",
      ],
      category: "fragrance-freshening",
      badge: "Flagship",
      description: "Transform your space with the soothing scent of lavender. Toby Room Freshener is designed to create a calming atmosphere, perfect for relaxation and stress relief.",
      features: [
        "Long-lasting fragrance",
        "Natural lavender essential oil",
        "Eco-friendly and non-Toxic",
        "Volume: 270ml",
      ],
      brand: "Toby",
      model: "Tb-Lavender-270",
      reviews: [
        {
          rating: 4,
          comment: "Great sound quality, but a bit pricey."
        }
      ]
    },
    {
      id: "ff-002",
      name: "Toby Room Freshner (Musk)",
      price: 99,
      images: [
        "/products/musk.jpg",
        "/products/toby.png",
      ],
      category: "fragrance-freshening",
      description: "Transform your space with the soothing scent of Musk. Toby Room Freshener is designed to create a calming atmosphere, perfect for relaxation and stress relief.",
      features: [
        "Long-lasting fragrance",
        "Eco-friendly and non-Toxic",
        "Volume: 270ml",
      ],
      brand: "Toby",
      model: "Tb-Lavender-270",
      reviews: [
        {
          rating: 4,
          comment: "Great sound quality, but a bit pricey."
        }
      ]
    },
    {
      id: "ff-003",
      name: "Toby Room Freshner (Sandal)",
      price: 99,
      images: [
        "/products/sandal.jpg",
        "/products/toby.png",
      ],
      category: "fragrance-freshening",
      description: "Transform your space with the soothing scent of Sandal. Toby Room Freshener is designed to create a calming atmosphere, perfect for relaxation and stress relief.",
      features: [
        "Long-lasting fragrance",
        "Eco-friendly and non-Toxic",
        "Volume: 270ml",
      ],
      brand: "Toby",
      model: "Tb-Lavender-270",
      reviews: [
        {
          rating: 4.2,
          comment: "Great sound quality, but a bit pricey."
        }
      ]
    },
    {
      id: "ff-004",
      name: "Toby Room Freshner (Aqua)",
      price: 99,
      images: [
        "/products/aqua.jpg",
        "/products/toby.png",
      ],
      category: "fragrance-freshening",
      description: "Transform your space with the soothing scent of lavender. Toby Room Freshener is designed to create a calming atmosphere, perfect for relaxation and stress relief.",
      features: [
        "Long-lasting fragrance",
        "Eco-friendly and non-Toxic",
        "Volume: 270ml",
      ],
      brand: "Toby",
      model: "Tb-Lavender-270",
      reviews: [
        {
          rating: 4,
          comment: "Great sound quality, but a bit pricey."
        }
      ]
    },
    {
      id: "ff-005",
      name: "Toby Room Freshner (Awesome)",
      price: 99,
      images: [
        "/products/awesome.jpg",
        "/products/toby.png",
      ],
      category: "fragrance-freshening",
      badge: "Flagship",
      description: "Transform your space with the soothing scent of lavender. Toby Room Freshener is designed to create a calming atmosphere, perfect for relaxation and stress relief.",
      features: [
        "Long-lasting fragrance",
        "Natural lavender essential oil",
        "Eco-friendly and non-Toxic",
        "Volume: 270ml",
      ],
      brand: "Toby",
      model: "Tb-Lavender-270",
      reviews: [
        {
          rating: 4.6,
          comment: "Great sound quality, but a bit pricey."
        }
      ]
    }
  ],

  carryGiftBags: [
    {
      id: "cb-111",
      name: "Non-Woven D-Cut (Print)",
      price: 160,
      images: [
        "/products/bag.png",
        "/products/bags.png",
      ],
      category: "carry-box-bags",
      badge: "per 1kg",
      description: "",
      features: [
        "Full-grain Leather",
        "Microfiber Lining",
        "Card Slot Pocket",
        "Wireless Charging Compatible",
        "Available for Multiple Phone Models"
      ],
      brand: "LuxCase",
      model: "Premium Leather Series",
      warranty: "1 Year",
      reviews: [
        {
          rating: 4,
          comment: "Stylish and functional!"
        },
        {
          rating: 4,
          comment: "Stylish and functional!"
        }
      ]
    },
    {
      id: "cb-001",
      name: "1Kg Sweet Box",
      price: 14,
      images: [
        "/products/1kgbox.jpg",
        "/products/1kgopen.png",
      ],
      category: "carry-box-bags",
      description: "An elegant box designed for sweet and delectable treats.",
      features: [
        "Material: High-quality cardboard",
        "Size: Perfect for a variety of sweets",
        "Design: Attractive and festive",
      ],
      reviews: [
         {
          rating: 5,
          comment: "Perfect for gifting sweets during festivals!"
         },
         {
          rating: 4,
          comment: "Great quality and design!"
         },
         {
          rating: 4,
          comment: "Loved the traditional look!"
         }
      ],
    },
    {
      id: "cb-002",
      name: "Bhaji Box 1Kg",
      price: 20,
      images: [
        "/products/bhji.jpg",
        "/products/bhaji1.jpg",
      ],
      category: "carry-box-bags",
      description: "A beautiful box for gifting sweets during celebrations.",
      features: [
        "Material: Sturdy paperboard",
        "Ideal for Diwali and other festivals",
        "Comes with a decorative ribbon",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Perfect for gifting sweets during festivals!"
        },
        {
          rating: 4,
          comment: "Great quality and design!"
        },
        {
          rating: 4,
          comment: "Loved the traditional look!"
        },
        {
          rating: 5,
          comment: "Beautifully designed, made my gift stand out!"
        }

      ],
    },
    {
      id: "cb-003",
      name: "Pizza Box (9'') ",
      price: 10,
      images: [
        "/products/pizza9.png",
        "/products/pizza.png",
        "/products/pizzamain.png"
      ],
      category: "carry-box-bags",
      description: "Perfect for carrying hot and fresh pizzas.",
      features: [
        "Material: Durable cardboard",
        "Size: Available in multiple sizes",
        "Grease-resistant",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Perfect for carrying pizzas!"
        },
        {
          rating: 4,
          comment: "Sturdy and keeps the pizza warm!"
        },
        {
          rating: 4,
          comment: "Great quality, no leaks!"
        },
        {
          rating: 4,
          comment: "Ideal for pizza delivery!"
        }
      ],
    },
    {
      id: "cb-004",
      name: "Pizza Box(10'')",
      price: 13,
      images: [
        "/products/pizza10.png",
        "/products/pizza.png",
        "/products/pizzamain.png"
      ],
      category: "carry-box-bags",
      description: "Perfect for carrying hot and fresh pizzas.",
      features: [
        "Material: Durable cardboard",
        "Size: Available in multiple sizes",
        "Grease-resistant",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Perfect for carrying pizzas!"
        },
        {
          rating: 4,
          comment: "Sturdy and keeps the pizza warm!"
        },
        {
          rating: 4,
          comment: "Great quality, no leaks!"
        },
        {
          rating: 4,
          comment: "Ideal for pizza delivery!"
        }
      ],
    },
    {
      id: "cb-005",
      name: "Pizza Box(12'')",
      price: 16,
      images: [
        "/products/pizza12.png",
        "/products/pizza.png",
        "/products/pizzamain.png"
      ],
      category: "carry-box-bags",
      description: "Perfect for carrying hot and fresh pizzas.",
      features: [
        "Material: Durable cardboard",
        "Size: Available in multiple sizes",
        "Grease-resistant",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Perfect for carrying pizzas!"
        },
        {
          rating: 4,
          comment: "Sturdy and keeps the pizza warm!"
        },
        {
          rating: 4,
          comment: "Great quality, no leaks!"
        }
      ],
    },
    {
      id: "cb-006",
      name: "Grilled Sandwich Box",
      price: 5,
      images: [
        "/products/sandwich box.png",
        "/products/sandwich box1.png",
        "/products/sandwichbox3.png"
      ],
      category: "carry-box-bags",
      description: "Ideal for packing delicious grilled sandwiches.",
      features: [
        "Insulated to keep sandwiches warm",
        "Material: Eco-friendly",
        "Design: Attractive and functional",
      ],
      reviews: [
          {
          rating: 5,
          comment: "Great box for sandwiches!",
          },
          {
          rating: 4,
          comment: "Good box for sandwiches!"
          }
      ],
    },
  ]
};
