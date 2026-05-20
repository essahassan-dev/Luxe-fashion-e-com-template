// ============================================================
//  LUXE — Mock Product Data  (USD · International)
// ============================================================

const PRODUCTS = [
  {
    id: 1,
    name: "Obsidian Oversized Tee",
    category: "tshirts",
    gender: "men",
    price: 49,
    originalPrice: 79,
    discount: 38,
    rating: 4.8,
    reviews: 124,
    badge: "Bestseller",
    fabric: "100% Premium Pima Cotton",
    description:
      "Crafted from ultra-soft Pima cotton, this oversized tee delivers effortless streetwear energy. Drop shoulders, boxy silhouette, and a heavyweight feel that drapes perfectly.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#1a1a1a", "#f5f0eb", "#4a4a6a"],
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80",
    ],
    tags: ["oversized", "streetwear", "cotton"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isFlashSale: true,
  },
  {
    id: 2,
    name: "Noir Zip Hoodie",
    category: "hoodies",
    gender: "men",
    price: 89,
    originalPrice: 129,
    discount: 31,
    rating: 4.9,
    reviews: 89,
    badge: "New",
    fabric: "French Terry 380GSM",
    description:
      "A heavyweight French Terry hoodie with a full-length YKK zipper. Kangaroo pocket, ribbed cuffs, and a relaxed fit that commands attention.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#0d0d0d", "#2c2c2c", "#1a1a2e"],
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
      "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=600&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
    ],
    tags: ["hoodie", "zip", "heavyweight"],
    inStock: true,
    isNew: true,
    isTrending: true,
    isFlashSale: false,
  },
  {
    id: 3,
    name: "Phantom Cargo Jacket",
    category: "jackets",
    gender: "men",
    price: 149,
    originalPrice: 199,
    discount: 25,
    rating: 4.7,
    reviews: 56,
    badge: "Limited",
    fabric: "Ripstop Nylon Shell",
    description:
      "Military-inspired cargo jacket with a modern silhouette. Multiple utility pockets, adjustable hem, and a water-resistant ripstop nylon shell.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#2d3436", "#636e72", "#1e3a2f"],
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80",
      "https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=600&q=80",
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80",
    ],
    tags: ["jacket", "cargo", "utility"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isFlashSale: true,
  },
  {
    id: 4,
    name: "Velvet Slim Jeans",
    category: "jeans",
    gender: "men",
    price: 69,
    originalPrice: 99,
    discount: 30,
    rating: 4.6,
    reviews: 203,
    badge: "Trending",
    fabric: "98% Cotton 2% Elastane",
    description:
      "Slim-fit jeans with a subtle stretch for all-day comfort. Mid-rise waist, tapered leg, and a clean finish that works from street to studio.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["#1a1a2e", "#2c3e50", "#4a4a4a"],
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&q=80",
      "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&q=80",
    ],
    tags: ["jeans", "slim", "denim"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isFlashSale: false,
  },
  {
    id: 5,
    name: "Ivory Linen Shirt",
    category: "shirts",
    gender: "men",
    price: 55,
    originalPrice: 79,
    discount: 30,
    rating: 4.5,
    reviews: 78,
    badge: "New",
    fabric: "100% European Linen",
    description:
      "Breathable European linen shirt with a relaxed fit. Perfect for warm days — the fabric softens with every wash for a lived-in luxury feel.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["#f5f0eb", "#e8dcc8", "#d4c5a9"],
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
      "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600&q=80",
    ],
    tags: ["shirt", "linen", "casual"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isFlashSale: true,
  },
  {
    id: 6,
    name: "Eclipse Bomber",
    category: "jackets",
    gender: "women",
    price: 129,
    originalPrice: 179,
    discount: 28,
    rating: 4.9,
    reviews: 45,
    badge: "Limited",
    fabric: "Satin Shell with Rib Trim",
    description:
      "A sleek satin bomber with contrast rib trim. Cropped silhouette, embroidered back detail, and a luxe finish that elevates any outfit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["#1a1a1a", "#8b0000", "#1a1a4e"],
    images: [
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&q=80",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
    ],
    tags: ["bomber", "satin", "luxury"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isFlashSale: false,
  },
  {
    id: 7,
    name: "Aura Crop Hoodie",
    category: "hoodies",
    gender: "women",
    price: 69,
    originalPrice: 99,
    discount: 30,
    rating: 4.7,
    reviews: 167,
    badge: "Bestseller",
    fabric: "Brushed Fleece 320GSM",
    description:
      "A cropped hoodie in ultra-soft brushed fleece. Relaxed fit, raw-edge hem, and a minimalist aesthetic that pairs with everything.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#c9b8a8", "#e8d5c4", "#a0856c"],
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600&q=80",
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&q=80",
    ],
    tags: ["hoodie", "crop", "women"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isFlashSale: true,
  },
  {
    id: 8,
    name: "Monochrome Set",
    category: "streetwear",
    gender: "unisex",
    price: 119,
    originalPrice: 159,
    discount: 25,
    rating: 4.8,
    reviews: 92,
    badge: "New",
    fabric: "Cotton-Modal Blend",
    description:
      "A matching co-ord set in a premium cotton-modal blend. Relaxed jogger and oversized tee — the ultimate minimalist streetwear statement.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#1a1a1a", "#f5f5f5", "#808080"],
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&q=80",
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=600&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
    ],
    tags: ["set", "coord", "streetwear"],
    inStock: true,
    isNew: true,
    isTrending: true,
    isFlashSale: false,
  },
  {
    id: 9,
    name: "Cashmere Blend Coat",
    category: "jackets",
    gender: "women",
    price: 249,
    originalPrice: 349,
    discount: 29,
    rating: 5.0,
    reviews: 31,
    badge: "Luxury",
    fabric: "70% Cashmere 30% Wool",
    description:
      "A statement overcoat in a cashmere-wool blend. Longline silhouette, notch lapel, and a drape that speaks pure luxury.",
    sizes: ["XS", "S", "M", "L"],
    colors: ["#c8b8a2", "#1a1a1a", "#8b7355"],
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80",
      "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?w=600&q=80",
    ],
    tags: ["coat", "cashmere", "luxury"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isFlashSale: false,
  },
  {
    id: 10,
    name: "Street Graphic Tee",
    category: "tshirts",
    gender: "unisex",
    price: 35,
    originalPrice: 49,
    discount: 29,
    rating: 4.4,
    reviews: 256,
    badge: "Trending",
    fabric: "180GSM Combed Cotton",
    description:
      "Bold graphic print on a premium combed cotton base. Oversized fit, dropped shoulders, and a statement back print.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["#1a1a1a", "#f5f5f5", "#2c3e50"],
    images: [
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    ],
    tags: ["graphic", "tshirt", "streetwear"],
    inStock: true,
    isNew: false,
    isTrending: true,
    isFlashSale: true,
  },
  {
    id: 11,
    name: "Utility Cargo Pants",
    category: "streetwear",
    gender: "men",
    price: 79,
    originalPrice: 109,
    discount: 28,
    rating: 4.6,
    reviews: 143,
    badge: "Bestseller",
    fabric: "Ripstop Cotton Blend",
    description:
      "Technical cargo pants with six utility pockets. Adjustable waist, tapered leg, and a durable ripstop fabric built for the streets.",
    sizes: ["28", "30", "32", "34", "36"],
    colors: ["#2d3436", "#1e3a2f", "#4a4a4a"],
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
      "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=600&q=80",
    ],
    tags: ["cargo", "pants", "utility"],
    inStock: true,
    isNew: false,
    isTrending: false,
    isFlashSale: false,
  },
  {
    id: 12,
    name: "Silk Touch Dress Shirt",
    category: "shirts",
    gender: "men",
    price: 89,
    originalPrice: 129,
    discount: 31,
    rating: 4.7,
    reviews: 67,
    badge: "Luxury",
    fabric: "Silk-Cotton Blend",
    description:
      "A dress shirt with a silk-cotton blend that offers an unmatched drape. French cuffs, mother-of-pearl buttons, and a slim fit.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["#f5f0eb", "#1a1a1a", "#c8b8a2"],
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
      "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?w=600&q=80",
    ],
    tags: ["shirt", "silk", "luxury"],
    inStock: true,
    isNew: true,
    isTrending: false,
    isFlashSale: false,
  },
];

const COLLECTIONS = [
  {
    id: "men",
    name: "Men's Collection",
    subtitle: "Redefine Masculine Style",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=800&q=80",
    count: 48,
  },
  {
    id: "women",
    name: "Women's Collection",
    subtitle: "Effortless Elegance",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
    count: 62,
  },
  {
    id: "streetwear",
    name: "Streetwear",
    subtitle: "Urban Culture Defined",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=800&q=80",
    count: 35,
  },
  {
    id: "luxury",
    name: "Luxury Wear",
    subtitle: "Crafted for the Discerning",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80",
    count: 24,
  },
  {
    id: "hoodies",
    name: "Oversized Fits",
    subtitle: "Comfort Meets Cool",
    image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800&q=80",
    count: 29,
  },
  {
    id: "tshirts",
    name: "Casual Basics",
    subtitle: "The Foundation of Style",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
    count: 41,
  },
];

const LOOKBOOK = [
  {
    id: 1,
    title: "Winter Noir",
    subtitle: "AW 2025 Collection",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=900&q=80",
    tag: "Editorial",
  },
  {
    id: 2,
    title: "Urban Drift",
    subtitle: "Streetwear Series",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=900&q=80",
    tag: "Campaign",
  },
  {
    id: 3,
    title: "Ivory Dreams",
    subtitle: "Minimal Luxury",
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=900&q=80",
    tag: "Lookbook",
  },
  {
    id: 4,
    title: "Street Pulse",
    subtitle: "SS 2025 Drop",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&q=80",
    tag: "Editorial",
  },
];

const REVIEWS = [
  {
    id: 1,
    name: "James Whitfield",
    avatar: "JW",
    rating: 5,
    date: "March 2025",
    text: "Absolutely premium quality. The fabric feels luxurious and the fit is perfect. LUXE has become my go-to brand for everything.",
    product: "Obsidian Oversized Tee",
    verified: true,
  },
  {
    id: 2,
    name: "Sofia Andersson",
    avatar: "SA",
    rating: 5,
    date: "April 2025",
    text: "The Aura Crop Hoodie is everything. Soft, stylish, and the color is exactly as shown. Shipping to Sweden was fast too!",
    product: "Aura Crop Hoodie",
    verified: true,
  },
  {
    id: 3,
    name: "Marcus Chen",
    avatar: "MC",
    rating: 4,
    date: "May 2025",
    text: "Great quality jacket. The stitching is immaculate and the material feels durable. Slightly runs large but absolutely worth it.",
    product: "Phantom Cargo Jacket",
    verified: true,
  },
];

const COUPONS = {
  LUXE10:   10,
  LUXE20:   20,
  NEWUSER:  15,
  FLASH30:  30,
};

// ── Utilities ────────────────────────────────────────────────

// Format price in USD
function formatPrice(price) {
  return "$" + Number(price).toFixed(2);
}

function getProductById(id) {
  return PRODUCTS.find((p) => p.id === parseInt(id));
}

function getProductsByCategory(category) {
  if (category === "all") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category || p.gender === category);
}

function getTrendingProducts() {
  return PRODUCTS.filter((p) => p.isTrending);
}

function getFlashSaleProducts() {
  return PRODUCTS.filter((p) => p.isFlashSale);
}

function renderStars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating))  html += '<i class="bi bi-star-fill"></i>';
    else if (i - rating < 1)      html += '<i class="bi bi-star-half"></i>';
    else                          html += '<i class="bi bi-star"></i>';
  }
  return html;
}


