// Hearth & Harbor — site content data
// All copy is real, brand-specific content (no Lorem Ipsum).

export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: "New" | "Sale" | "Bestseller" | "Limited";
  blurb: string;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  itemCount: number;
  image: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
};

export type Brand = {
  name: string;
  note: string;
};

// Stable, verified image URLs (all 200-OK at build time)
const IMG = {
  kitchen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  bath: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
  watches: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  books: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
  lamp: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  store: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  // Replacements (z-ai image-search — OSS-hosted, guaranteed reachable)
  decor: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/797571d729ae.jpg",
  tools: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f46ae54f5b30.jpg",
  skillet: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ed0a74b07b83.jpg",
  linen: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e9058a5dcfe9.jpg",
  coffee: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2869b8bc24d8.png",
  throw: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/a99a5e48821b.jpg",
  marble: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1210e3b862f3.jpg",
  apron: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/794dc06fefda.jpg",
  eyewear: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e5a5ed24c4cc.jpg",
  journal: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/697ab68e4e65.jpeg",
  bathset: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/75d54be9ba51.jpg",
  cutting: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/7a33bc9f6732.jpg",
  fieldwatch: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6e1296f7d3ef.jpg",
  bedding: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2e9a99bbd09a.jpg",
  chef: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/27174b018554.jpg",
};

export const heroImages = {
  kitchenWide: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80",
  linenWide: IMG.linen.replace(/w=800/, "w=1600"),
  toolsWide: IMG.tools,
};

export const aboutImage = IMG.store;

export const categories: Category[] = [
  {
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    tagline: "Tools and tableware that earn their place",
    itemCount: 142,
    image: IMG.kitchen,
  },
  {
    slug: "bath-laundry",
    name: "Bath & Laundry",
    tagline: "Quiet rituals, well-made essentials",
    itemCount: 86,
    image: IMG.bath,
  },
  {
    slug: "home-decor",
    name: "Home & Decor",
    tagline: "Pieces with presence and purpose",
    itemCount: 213,
    image: IMG.decor,
  },
  {
    slug: "tools-workshop",
    name: "Tools & Workshop",
    tagline: "Hand tools that last a lifetime",
    itemCount: 97,
    image: IMG.tools,
  },
  {
    slug: "watches-eyewear",
    name: "Watches & Eyewear",
    tagline: "Considered wearables for daily use",
    itemCount: 64,
    image: IMG.watches,
  },
  {
    slug: "books-stationery",
    name: "Books & Stationery",
    tagline: "Reading and writing worth keeping",
    itemCount: 178,
    image: IMG.books,
  },
];

export const featuredProducts: Product[] = [
  {
    id: "cast-iron-skillet-10",
    name: "Field No.10 Cast Iron Skillet",
    category: "Kitchen & Dining",
    price: 95,
    compareAtPrice: 120,
    rating: 4.9,
    reviews: 412,
    image: IMG.skillet,
    badge: "Sale",
    blurb: "Pre-seasoned, hand-finished in Tennessee. An heirloom in waiting.",
  },
  {
    id: "linen-towel-stripe",
    name: "Stonewashed Linen Towel — Charcoal Stripe",
    category: "Bath & Laundry",
    price: 38,
    rating: 4.8,
    reviews: 188,
    image: IMG.linen,
    badge: "New",
    blurb: "Soft, absorbent, and built to age well. Made from European flax.",
  },
  {
    id: "brass-desk-lamp",
    name: "Halvor Brass Task Lamp",
    category: "Home & Decor",
    price: 245,
    rating: 4.7,
    reviews: 96,
    image: IMG.lamp,
    blurb: "Solid brass with a fabric-wrapped cord. Dimmable warm-white LED.",
  },
  {
    id: "japanese-pull-saw",
    name: "Ryoba Double-Edge Pull Saw",
    category: "Tools & Workshop",
    price: 68,
    rating: 4.9,
    reviews: 521,
    image: IMG.tools,
    badge: "Bestseller",
    blurb: "Japanese impulse-hardened blade cuts on the pull — clean and true.",
  },
  {
    id: "diver-watch-38",
    name: "Coral Bay 38mm Automatic Diver",
    category: "Watches & Eyewear",
    price: 425,
    compareAtPrice: 495,
    rating: 4.8,
    reviews: 73,
    image: IMG.watches,
    badge: "Sale",
    blurb: "Sapphire crystal, 200m water resistance, 40-hour reserve.",
  },
  {
    id: "craft-notebook-a5",
    name: "Harbor A5 Cloth Notebook — Cream",
    category: "Books & Stationery",
    price: 22,
    rating: 4.6,
    reviews: 304,
    image: IMG.journal,
    badge: "New",
    blurb: "Linen-wrapped cover, 192 cream pages, lay-flat binding.",
  },
];

export const trendingProducts: Product[] = [
  {
    id: "ceramic-pour-over",
    name: "Stoneware Pour-Over Coffee Set",
    category: "Kitchen & Dining",
    price: 78,
    rating: 4.8,
    reviews: 167,
    image: IMG.coffee,
    badge: "New",
    blurb: "Hand-thrown matte glaze, fits #2 cone filters.",
  },
  {
    id: "wool-throw-cream",
    name: "Aran Wool Throw — Natural Cream",
    category: "Home & Decor",
    price: 165,
    rating: 4.9,
    reviews: 142,
    image: IMG.throw,
    badge: "Bestseller",
    blurb: "Heavyweight Irish wool, brushed for softness.",
  },
  {
    id: "marble-serving-board",
    name: "Carrara Marble Serving Board",
    category: "Kitchen & Dining",
    price: 92,
    rating: 4.7,
    reviews: 89,
    image: IMG.marble,
    blurb: "Solid marble with a hand-finished oak handle.",
  },
  {
    id: "leather-apron",
    name: "Waxed Canvas & Leather Apron",
    category: "Tools & Workshop",
    price: 128,
    rating: 4.9,
    reviews: 211,
    image: IMG.apron,
    badge: "New",
    blurb: "16oz Martexin-waxed canvas with vegetable-tanned leather straps.",
  },
  {
    id: "acetate-eyewear",
    name: "Marin Acetate Eyewear — Tortoise",
    category: "Watches & Eyewear",
    price: 188,
    rating: 4.6,
    reviews: 64,
    image: IMG.eyewear,
    blurb: "Italian acetate frame with CR-39 polarized lenses.",
  },
  {
    id: "cooking-journal",
    name: "The Yearly Kitchen Journal",
    category: "Books & Stationery",
    price: 34,
    rating: 4.8,
    reviews: 178,
    image: IMG.books,
    blurb: "52 weeks of seasonal recipes, menus, and pantry notes.",
  },
];

export const bestSellingProducts: Product[] = [
  {
    id: "enamel-dutch-oven",
    name: "Harbor 5.5qt Enameled Dutch Oven",
    category: "Kitchen & Dining",
    price: 245,
    compareAtPrice: 295,
    rating: 4.9,
    reviews: 894,
    image: IMG.kitchen,
    badge: "Bestseller",
    blurb: "Cast iron with a hand-sprayed enamel interior. Made in Portugal.",
  },
  {
    id: "ceramic-bath-set",
    name: "Ridgeway Ceramic Bath Set",
    category: "Bath & Laundry",
    price: 56,
    rating: 4.7,
    reviews: 326,
    image: IMG.bathset,
    blurb: "Three-piece soap dispenser, tumbler, and dish in matte stoneware.",
  },
  {
    id: "walnut-cutting-board",
    name: "Black Walnut End-Grain Board",
    category: "Kitchen & Dining",
    price: 89,
    rating: 4.9,
    reviews: 612,
    image: IMG.cutting,
    badge: "Bestseller",
    blurb: "American black walnut, hand-finished with mineral oil and beeswax.",
  },
  {
    id: "field-watch-36",
    name: "Pebble Cove 36mm Field Watch",
    category: "Watches & Eyewear",
    price: 295,
    rating: 4.8,
    reviews: 184,
    image: IMG.fieldwatch,
    badge: "Bestseller",
    blurb: "Sandblast case, sapphire crystal, Swiss automatic movement.",
  },
  {
    id: "linen-bedding-set",
    name: "Stonewashed Linen Bedding Set — Sage",
    category: "Bath & Laundry",
    price: 285,
    compareAtPrice: 340,
    rating: 4.8,
    reviews: 268,
    image: IMG.bedding,
    badge: "Sale",
    blurb: "European flax, Oeko-Tex certified. Queen duvet + 2 shams.",
  },
  {
    id: "chefs-knife-8",
    name: "Forged 8\" Chef's Knife — Walnut",
    category: "Tools & Workshop",
    price: 145,
    rating: 4.9,
    reviews: 743,
    image: IMG.chef,
    badge: "Bestseller",
    blurb: "High-carbon German steel, full tang, walnut handle.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "cast-iron-care-guide",
    title: "The Field Guide to Cast Iron Care",
    excerpt:
      "How to season, clean, and pass down a cast iron skillet for the next forty years — from first rinse to daily use.",
    category: "Kitchen",
    date: "March 14, 2026",
    readTime: "6 min read",
    author: "Mara Whitfield",
    image: IMG.skillet,
  },
  {
    id: "linen-vs-cotton",
    title: "Linen vs. Cotton: A Long-Term Look at Bedding",
    excerpt:
      "Both materials age beautifully, but they do it in very different ways. A practical comparison for choosing your sheets.",
    category: "Bath & Laundry",
    date: "March 7, 2026",
    readTime: "8 min read",
    author: "Henry Lao",
    image: IMG.linen,
  },
  {
    id: "knife-sharpening-basics",
    title: "How to Sharpen a Kitchen Knife at Home",
    excerpt:
      "Whetstone, pull-through, or send it out? A practical approach to keeping a sharp edge on the knives you use every day.",
    category: "Tools",
    date: "February 28, 2026",
    readTime: "10 min read",
    author: "Tomas Bauer",
    image: IMG.chef,
  },
  {
    id: "warm-lighting-guide",
    title: "Designing a Warm-Lit Room: A Lighting Primer",
    excerpt:
      "Color temperature, layering, and how to make a room feel like home after dark — without brightening the ceiling.",
    category: "Home & Decor",
    date: "February 21, 2026",
    readTime: "7 min read",
    author: "Naomi Strand",
    image: IMG.lamp,
  },
  {
    id: "spring-pantry-reset",
    title: "The Spring Pantry Reset",
    excerpt:
      "A simple, repeatable process for clearing the pantry, restocking essentials, and finding the recipes you actually cook.",
    category: "Kitchen",
    date: "February 14, 2026",
    readTime: "5 min read",
    author: "Mara Whitfield",
    image: IMG.coffee,
  },
  {
    id: "choosing-first-mechanical-watch",
    title: "Choosing Your First Mechanical Watch",
    excerpt:
      "Movements, case sizes, and why the most important spec is one nobody talks about: how it feels on your wrist.",
    category: "Watches",
    date: "February 7, 2026",
    readTime: "9 min read",
    author: "Henry Lao",
    image: IMG.watches,
  },
];

export const brands: Brand[] = [
  { name: "Field Company", note: "Cast iron cookware" },
  { name: "Misto Linen", note: "European flax textiles" },
  { name: "Ridge Workshop", note: "Hand tools" },
  { name: "Coral Bay", note: "Mechanical watches" },
  { name: "Halvor & Sons", note: "Lighting" },
  { name: "Marin Eyewear", note: "Italian acetate frames" },
  { name: "Ridgeway Ceramics", note: "Stoneware" },
  { name: "Harbor Press", note: "Books & stationery" },
];

export const navCategories = [
  {
    label: "Shop All",
    href: "#shop",
    children: categories.map((c) => ({ label: c.name, href: `#cat-${c.slug}`, note: c.tagline })),
  },
  { label: "Our Story", href: "#about" },
  { label: "Journal", href: "#journal" },
  { label: "Shipping & Returns", href: "#shipping" },
  { label: "Contact", href: "#contact" },
];
