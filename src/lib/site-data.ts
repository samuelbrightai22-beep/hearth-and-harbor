// Hearth & Harbor — site content data
// All copy is real, brand-specific content (no Lorem Ipsum).

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  gallery?: string[];
  badge?: "New" | "Sale" | "Bestseller" | "Limited";
  blurb: string;
  description: string;
  materials: string;
  dimensions: string;
  care: string;
  origin: string;
  sku: string;
  inStock: boolean;
};

export type Category = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  itemCount: number;
  image: string;
};

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  date: string;
  readTime: string;
  author: string;
  authorBio: string;
  image: string;
};

export type Brand = {
  name: string;
  note: string;
  location: string;
  established: string;
};

// Verified stable image URLs (200-OK at build time)
const IMG = {
  kitchen: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80",
  bath: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=800&q=80",
  watches: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
  books: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=800&q=80",
  lamp: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  store: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
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
    description:
      "Cast iron, stoneware, carbon steel, and solid wood — cookware and tableware chosen for how they age. Most are made by small foundries and individual potters in the United States, Japan, and Portugal, with a focus on materials that improve with use rather than wear out.",
    itemCount: 142,
    image: IMG.kitchen,
  },
  {
    slug: "bath-laundry",
    name: "Bath & Laundry",
    tagline: "Quiet rituals, well-made essentials",
    description:
      "Stonewashed linen, long-staple cotton, and ceramic accessories for the bath and laundry room. European flax, Oeko-Tex certified textiles, and stoneware that won't chip in the wash.",
    itemCount: 86,
    image: IMG.bath,
  },
  {
    slug: "home-decor",
    name: "Home & Decor",
    tagline: "Pieces with presence and purpose",
    description:
      "Lighting, throws, planters, and decorative objects with a quiet presence. Solid brass, hand-thrown ceramics, and natural fibers — chosen for the rooms you actually live in.",
    itemCount: 213,
    image: IMG.decor,
  },
  {
    slug: "tools-workshop",
    name: "Tools & Workshop",
    tagline: "Hand tools that last a lifetime",
    description:
      "Forged steel hand tools, work aprons, and workshop essentials built to be passed down. Lifetime guarantee on forged steel — Japanese pull saws, German chef's knives, American-made waxed canvas.",
    itemCount: 97,
    image: IMG.tools,
  },
  {
    slug: "watches-eyewear",
    name: "Watches & Eyewear",
    tagline: "Considered wearables for daily use",
    description:
      "Mechanical watches, acetate eyewear, and small leather goods. Swiss and Japanese automatic movements, Italian acetate frames, and sapphire crystals — built to be repaired, not replaced.",
    itemCount: 64,
    image: IMG.watches,
  },
  {
    slug: "books-stationery",
    name: "Books & Stationery",
    tagline: "Reading and writing worth keeping",
    description:
      "Cookbooks, design monographs, field journals, and writing tools. Lay-flat bindings, acid-free paper, and cloth covers — for the kitchen counter, the workshop bench, and the bedside table.",
    itemCount: 178,
    image: IMG.books,
  },
];

function makeProduct(p: Omit<Product, "slug" | "categorySlug">): Product {
  return {
    ...p,
    slug: p.id,
    categorySlug:
      categories.find((c) => c.name === p.category)?.slug ?? "shop",
  };
}

export const allProducts: Product[] = [
  makeProduct({
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
    description:
      "The Field No.10 is a 10-inch cast iron skillet, hand-finished in Tennessee by a fifth-generation foundry. It arrives pre-seasoned with three layers of organic flaxseed oil, and improves with every use. The handle is intentionally long for stovetop-to-oven work, and the pour spouts are deep enough to drain fat without dripping. At 4.5 pounds, it's heavy enough to hold heat but light enough to flip a tortilla.",
    materials: "Cast iron, organic flaxseed oil seasoning",
    dimensions: "10 inch diameter, 16 inch total length, 1.75 inch depth, 4.5 lb",
    care: "Hand wash with hot water and a brush. Avoid soap. Dry thoroughly over low heat, then wipe with a drop of vegetable oil. Never soak or put in the dishwasher.",
    origin: "South Pittsburgh, Tennessee, USA",
    sku: "HH-KIT-001",
    inStock: true,
  }),
  makeProduct({
    id: "linen-towel-stripe",
    name: "Stonewashed Linen Towel — Charcoal Stripe",
    category: "Bath & Laundry",
    price: 38,
    rating: 4.8,
    reviews: 188,
    image: IMG.linen,
    badge: "New",
    blurb: "Soft, absorbent, and built to age well. Made from European flax.",
    description:
      "A generous 22×36 inch kitchen towel in 100% European flax linen, stonewashed to a soft, lived-in hand. Linen absorbs more water per square inch than cotton and dries faster — meaning fewer damp-smelling towels in the kitchen. The charcoal stripe is woven in, not printed, so it won't fade. Made in a Lithuanian mill that has been weaving linen since 1932.",
    materials: "100% European flax linen, cotton hanging loop",
    dimensions: "22 × 36 inches, 220 gsm",
    care: "Machine wash warm, tumble dry low or line dry. Linen softens with every wash — no fabric softener needed.",
    origin: "Lithuania",
    sku: "HH-BTH-002",
    inStock: true,
  }),
  makeProduct({
    id: "brass-desk-lamp",
    name: "Halvor Brass Task Lamp",
    category: "Home & Decor",
    price: 245,
    rating: 4.7,
    reviews: 96,
    image: IMG.lamp,
    blurb: "Solid brass with a fabric-wrapped cord. Dimmable warm-white LED.",
    description:
      "A solid brass task lamp with a dimmable warm-white LED (2700K, 450 lumens at full brightness). The articulating arm holds position without knobs or locks, and the shade pivots 180 degrees. The fabric-wrapped cord exits the base rather than the arm, so it stays out of the way. Heavy enough to stay put at full extension (8 lb), small enough to live on a desk or shelf.",
    materials: "Solid brass, fabric-wrapped cord, dimmable LED",
    dimensions: "18 inch max height, 9 inch base, 6 inch shade",
    care: "Wipe with a soft, dry cloth. The brass will develop a natural patina over years of use — many owners prefer this. To restore shine, use a brass polish.",
    origin: "Designed in Portland, Maine. Manufactured in Taiwan.",
    sku: "HH-DEC-003",
    inStock: true,
  }),
  makeProduct({
    id: "japanese-pull-saw",
    name: "Ryoba Double-Edge Pull Saw",
    category: "Tools & Workshop",
    price: 68,
    rating: 4.9,
    reviews: 521,
    image: IMG.tools,
    badge: "Bestseller",
    blurb: "Japanese impulse-hardened blade cuts on the pull — clean and true.",
    description:
      "A Ryoba-style pull saw with a 9.5-inch double-edged blade — crosscut teeth on one side (16 tpi), rip teeth on the other (10 tpi). Japanese saws cut on the pull stroke, which keeps the blade in tension and allows for a thinner, more precise kerf than Western push saws. The handle is wrapped rattan over Paulownia wood. Replaceable blades available.",
    materials: "Impulse-hardened steel blade, rattan-wrapped Paulownia handle",
    dimensions: "9.5 inch blade, 22 inch total length",
    care: "Wipe blade with a light machine oil after use to prevent rust. Store in a dry place. Replace blade when teeth feel dull — typically every 2–3 years for a weekend woodworker.",
    origin: "Sanjō, Niigata Prefecture, Japan",
    sku: "HH-TLS-004",
    inStock: true,
  }),
  makeProduct({
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
    description:
      "A 38mm automatic dive watch with a Swiss Sellita SW200-1 movement, sapphire crystal with anti-reflective coating, and 200m water resistance. The case is 316L stainless steel with a sunburst blue dial, and the bracelet is a solid-link oyster style with a diver's extension. Power reserve is 40 hours. The bezel is a unidirectional 120-click ceramic. Sized for everyday wear — not a dinner-plate diver.",
    materials: "316L stainless steel, sapphire crystal, ceramic bezel, Sellita SW200-1 movement",
    dimensions: "38mm case, 13mm thick, 18mm lug width, 42mm lug-to-lug",
    care: "Service every 5–7 years. Sapphire crystal is virtually scratch-proof. Bracelet links can be removed with a small screwdriver — we offer free sizing in our Portland store.",
    origin: "Case and assembly in Hong Kong. Movement in Switzerland.",
    sku: "HH-WAT-005",
    inStock: true,
  }),
  makeProduct({
    id: "craft-notebook-a5",
    name: "Harbor A5 Cloth Notebook — Cream",
    category: "Books & Stationery",
    price: 22,
    rating: 4.6,
    reviews: 304,
    image: IMG.journal,
    badge: "New",
    blurb: "Linen-wrapped cover, 192 cream pages, lay-flat binding.",
    description:
      "A 192-page A5 notebook with a linen-wrapped hardcover, lay-flat Smyth-sewn binding, and 100 gsm acid-free cream paper. The pages are dotted — perfect for writing, sketching, or bullet journaling. Smyth-sewn binding means the book opens fully flat and never loses pages, even after years of use. Ribbon marker, elastic closure, and a back pocket for receipts and clippings.",
    materials: "Linen-wrapped hardcover, 100 gsm acid-free cream paper, ribbon marker",
    dimensions: "5.8 × 8.3 inches (A5), 192 pages",
    care: "Keep away from direct moisture. The linen cover will soften and develop a patina with use.",
    origin: "Printed and bound in the United States",
    sku: "HH-BKS-006",
    inStock: true,
  }),
  makeProduct({
    id: "ceramic-pour-over",
    name: "Stoneware Pour-Over Coffee Set",
    category: "Kitchen & Dining",
    price: 78,
    rating: 4.8,
    reviews: 167,
    image: IMG.coffee,
    badge: "New",
    blurb: "Hand-thrown matte glaze, fits #2 cone filters.",
    description:
      "A hand-thrown stoneware pour-over coffee dripper in a matte oatmeal glaze. Each piece is wheel-thrown by a single potter outside Asheville, North Carolina — slight variations in size and glaze are intentional. Fits standard #2 cone filters (we recommend Melitta unbleached). The thick walls hold heat during brewing, which keeps the slurry at a more consistent temperature than thin ceramic or glass.",
    materials: "Wheel-thrown stoneware, matte food-safe glaze",
    dimensions: "4.5 inch diameter at top, 3.5 inch height, fits #2 cone filters",
    care: "Dishwasher safe. Avoid sudden temperature changes (don't pour boiling water into a cold dripper).",
    origin: "Asheville, North Carolina, USA",
    sku: "HH-KIT-007",
    inStock: true,
  }),
  makeProduct({
    id: "wool-throw-cream",
    name: "Aran Wool Throw — Natural Cream",
    category: "Home & Decor",
    price: 165,
    rating: 4.9,
    reviews: 142,
    image: IMG.throw,
    badge: "Bestseller",
    blurb: "Heavyweight Irish wool, brushed for softness.",
    description:
      "A heavyweight 50×60 inch throw in 100% Irish Aran wool, brushed twice for softness. Made in a small mill on Ireland's west coast that has been weaving since 1892. The natural cream color is the undyed color of the fleece — no dyes, no bleaches. Heavy enough to actually warm you (about 3.5 lb), light enough to drape over the back of a chair without dragging it down.",
    materials: "100% Irish Aran wool, undyed",
    dimensions: "50 × 60 inches, 3.5 lb",
    care: "Dry clean or hand wash in cool water with a wool-safe detergent. Lay flat to dry. Do not machine wash — the wool will felt.",
    origin: "Donegal, Ireland",
    sku: "HH-DEC-008",
    inStock: true,
  }),
  makeProduct({
    id: "marble-serving-board",
    name: "Carrara Marble Serving Board",
    category: "Kitchen & Dining",
    price: 92,
    rating: 4.7,
    reviews: 89,
    image: IMG.marble,
    blurb: "Solid marble with a hand-finished oak handle.",
    description:
      "A 14×8 inch serving board cut from a single piece of Carrara marble, with a hand-finished solid oak handle. The marble stays naturally cool — ideal for serving cheese. The oak handle is treated with food-safe mineral oil and beeswax. Each board is unique — veining patterns vary.",
    materials: "Carrara marble, solid oak handle (food-safe finish)",
    dimensions: "14 × 8 inches, 0.75 inch thick",
    care: "Wipe with a damp cloth. Re-oak handle with food-safe mineral oil every 6 months. Do not submerge.",
    origin: "Carrara, Italy (marble); assembled in Portland, Maine",
    sku: "HH-KIT-009",
    inStock: true,
  }),
  makeProduct({
    id: "leather-apron",
    name: "Waxed Canvas & Leather Apron",
    category: "Tools & Workshop",
    price: 128,
    rating: 4.9,
    reviews: 211,
    image: IMG.apron,
    badge: "New",
    blurb: "16oz Martexin-waxed canvas with vegetable-tanned leather straps.",
    description:
      "A workshop apron in 16 oz Martexin-waxed canvas with vegetable-tanned leather straps and brass hardware. Three front pockets (one large, two small) and a chest pocket sized for a pencil or pen. The straps cross at the back to distribute weight — comfortable for hours at the bench. Made by a small workshop in Pennsylvania.",
    materials: "16 oz Martexin-waxed canvas, vegetable-tanned leather, solid brass hardware",
    dimensions: "32 inch length, 24 inch width, adjustable neck and waist straps",
    care: "Spot clean. Rewax annually with Martexin wax (we sell a tin). Do not machine wash — it will strip the wax.",
    origin: "Reading, Pennsylvania, USA",
    sku: "HH-TLS-010",
    inStock: true,
  }),
  makeProduct({
    id: "acetate-eyewear",
    name: "Marin Acetate Eyewear — Tortoise",
    category: "Watches & Eyewear",
    price: 188,
    rating: 4.6,
    reviews: 64,
    image: IMG.eyewear,
    blurb: "Italian acetate frame with CR-39 polarized lenses.",
    description:
      "A classic round-frame sunglass in Italian Mazzucchelli acetate — the same material used by luxury eyewear houses. The frames are hand-polished over three days and develop a deeper tortoise patina with wear. Lenses are CR-39 polarized, 100% UVA/UVB blocking. Stainless steel hinges with a 7-barrel core for durability.",
    materials: "Italian Mazzucchelli acetate, CR-39 polarized lenses, stainless steel hinges",
    dimensions: "48mm eye, 22mm bridge, 145mm temple",
    care: "Clean with the included microfiber cloth and lens spray. Store in the case when not in use. Do not leave in a hot car — the acetate can warp above 180°F.",
    origin: "Designed in Portland. Frames from Castiglione Olona, Italy. Assembled in China.",
    sku: "HH-WAT-011",
    inStock: true,
  }),
  makeProduct({
    id: "cooking-journal",
    name: "The Yearly Kitchen Journal",
    category: "Books & Stationery",
    price: 34,
    rating: 4.8,
    reviews: 178,
    image: IMG.books,
    blurb: "52 weeks of seasonal recipes, menus, and pantry notes.",
    description:
      "A 52-week guided kitchen journal with prompts for seasonal recipes, weekly menus, pantry restocking, and notes on what worked (and what didn't). Smyth-sewn binding opens fully flat — essential for a book that lives on the kitchen counter. Cloth-wrapped cover, 100 gsm uncoated paper, ribbon marker. Edited and printed by Harbor Press.",
    materials: "Cloth-wrapped hardcover, 100 gsm uncoated paper",
    dimensions: "7 × 9 inches, 240 pages",
    care: "Keep away from direct moisture and stovetop splatter. Wipe cover with a dry cloth.",
    origin: "Portland, Maine, USA",
    sku: "HH-BKS-012",
    inStock: true,
  }),
  makeProduct({
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
    description:
      "A 5.5 quart enameled cast iron Dutch oven, made in a small foundry in Portugal. The enamel is hand-sprayed in three coats and fired at 800°C — denser and more chip-resistant than the standard machine-sprayed enamel you find at this price. The lid has a tight fit with self-basting spikes underneath, and the knob is solid brass rated to 500°F. Compatible with all stovetops including induction.",
    materials: "Enameled cast iron, solid brass knob",
    dimensions: "5.5 quart, 10.75 inch diameter, 6.5 inch depth, 12 lb",
    care: "Dishwasher safe, but we recommend hand washing to preserve the enamel gloss. Use wood or silicone utensils — metal will scratch the enamel over time.",
    origin: "Portugal",
    sku: "HH-KIT-013",
    inStock: true,
  }),
  makeProduct({
    id: "ceramic-bath-set",
    name: "Ridgeway Ceramic Bath Set",
    category: "Bath & Laundry",
    price: 56,
    rating: 4.7,
    reviews: 326,
    image: IMG.bathset,
    blurb: "Three-piece soap dispenser, tumbler, and dish in matte stoneware.",
    description:
      "A three-piece bath accessory set — soap dispenser, tumbler, and soap dish — in matte-glazed stoneware. The soap dispenser has a solid brass pump (won't corrode), and the dish has raised ridges to keep the bar dry. Available in oatmeal, charcoal, and sage. Made by Ridgeway Ceramics, a small studio in upstate New York.",
    materials: "Stoneware, solid brass pump",
    dimensions: "Dispenser 7 inch, tumbler 4 inch, dish 4.5 inch",
    care: "Wipe with a damp cloth. The brass pump will develop a patina — to restore, polish with a brass cleaner.",
    origin: "Ridgeway, New York, USA",
    sku: "HH-BTH-014",
    inStock: true,
  }),
  makeProduct({
    id: "walnut-cutting-board",
    name: "Black Walnut End-Grain Board",
    category: "Kitchen & Dining",
    price: 89,
    rating: 4.9,
    reviews: 612,
    image: IMG.cutting,
    badge: "Bestseller",
    blurb: "American black walnut, hand-finished with mineral oil and beeswax.",
    description:
      "An 18×12 inch end-grain cutting board in American black walnut. End-grain construction means the knife cuts between the wood fibers rather than through them — gentler on the blade and self-heals over time. Each board is hand-finished with food-safe mineral oil and a beeswax topcoat. Made by a small workshop in Ohio.",
    materials: "American black walnut, food-safe mineral oil and beeswax finish",
    dimensions: "18 × 12 × 1.5 inches, 8 lb",
    care: "Hand wash only — never submerge. Re-oil monthly with food-safe mineral oil. Do not put in the dishwasher.",
    origin: "Millersburg, Ohio, USA",
    sku: "HH-KIT-015",
    inStock: true,
  }),
  makeProduct({
    id: "field-watch-36",
    name: "Pebble Cove 36mm Field Watch",
    category: "Watches & Eyewear",
    price: 295,
    rating: 4.8,
    reviews: 184,
    image: IMG.fieldwatch,
    badge: "Bestseller",
    blurb: "Sandblast case, sapphire crystal, Swiss automatic movement.",
    description:
      "A 36mm field watch with a sandblasted 316L stainless steel case, sapphire crystal, and Swiss Sellita SW200-1 automatic movement. The dial is matte black with cream SuperLuminova indices — readable in any light. The caseback is screw-down with a sapphire display window. Ships on a tan vegetable-tanned leather strap with quick-release pins. Sized for any wrist.",
    materials: "Sandblasted 316L stainless steel, sapphire crystal, Sellita SW200-1, vegetable-tanned leather strap",
    dimensions: "36mm case, 11mm thick, 18mm lug width, 45mm lug-to-lug",
    care: "Service every 5–7 years. Sapphire crystal is virtually scratch-proof. Straps are interchangeable — we sell six alternatives.",
    origin: "Case and assembly in Hong Kong. Movement in Switzerland.",
    sku: "HH-WAT-016",
    inStock: true,
  }),
  makeProduct({
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
    description:
      "A three-piece bedding set in 100% European flax linen — queen duvet cover plus two standard pillow shams. Oeko-Tex Standard 100 certified, stonewashed for softness, and finished with a 3-inch hemmed edge. The duvet cover has coconut-shell button closures and internal corner ties to keep the insert in place. Linen regulates temperature — cool in summer, warm in winter.",
    materials: "100% European flax linen, coconut-shell buttons",
    dimensions: "Queen duvet 90×92 inches, 2 standard shams 20×26 inches",
    care: "Machine wash warm, tumble dry low. Linen softens with every wash. Avoid bleach — it weakens the fibers.",
    origin: "Lithuania",
    sku: "HH-BTH-017",
    inStock: true,
  }),
  makeProduct({
    id: "chefs-knife-8",
    name: 'Forged 8" Chef\'s Knife — Walnut',
    category: "Tools & Workshop",
    price: 145,
    rating: 4.9,
    reviews: 743,
    image: IMG.chef,
    badge: "Bestseller",
    blurb: "High-carbon German steel, full tang, walnut handle.",
    description:
      "An 8-inch forged chef's knife in X50CrMoV15 German high-carbon stainless steel — HRC 58 hardness. Full tang construction with three rivets through stabilised American black walnut scales. The blade is hand-sharpened to a 16-degree per side edge. Forged (not stamped) for better balance and durability — the bolster adds weight that makes the knife do the work for you.",
    materials: "X50CrMoV15 high-carbon German steel, stabilised black walnut, brass rivets",
    dimensions: "8 inch blade, 13 inch total, 6.5 oz",
    care: "Hand wash only — never put in the dishwasher. Hone weekly with a honing rod. Sharpen every 6–12 months with a whetstone — we offer free sharpening at our Portland store.",
    origin: "Solingen, Germany (blade); assembled in Portland, Maine",
    sku: "HH-TLS-018",
    inStock: true,
  }),
];

// Helper: get products by category slug
export function getProductsByCategory(categorySlug: string): Product[] {
  return allProducts.filter((p) => p.categorySlug === categorySlug);
}

// Helper: get a single product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}

// Helper: get related products (same category, excluding current)
export function getRelatedProducts(product: Product, count = 4): Product[] {
  return allProducts
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, count);
}

// Back-compat aliases used by the existing home page
export const featuredProducts = allProducts.filter((p) =>
  ["cast-iron-skillet-10", "linen-towel-stripe", "brass-desk-lamp", "japanese-pull-saw"].includes(p.id)
);
export const trendingProducts = allProducts.filter((p) =>
  ["ceramic-pour-over", "wool-throw-cream", "marble-serving-board", "leather-apron"].includes(p.id)
);
export const bestSellingProducts = allProducts.filter((p) =>
  ["enamel-dutch-oven", "walnut-cutting-board", "field-watch-36", "chefs-knife-8"].includes(p.id)
);

export const blogPosts: BlogPost[] = [
  {
    id: "cast-iron-care-guide",
    slug: "cast-iron-care-guide",
    title: "The Field Guide to Cast Iron Care",
    excerpt:
      "How to season, clean, and pass down a cast iron skillet for the next forty years — from first rinse to daily use.",
    category: "Kitchen",
    date: "March 14, 2026",
    readTime: "6 min read",
    author: "Mara Whitfield",
    authorBio:
      "Mara is our kitchen category buyer. She has been cooking on cast iron for fifteen years and has strong opinions about soap.",
    image: IMG.skillet,
    body: [
      "Cast iron is the only cookware that gets better the more you use it. A new skillet comes from the foundry with a thin, factory-applied seasoning — usually three layers of flaxseed or grapeseed oil, baked on at high heat. Your job is to thicken that seasoning into a glossy, naturally non-stick surface over months and years of use.",
      "The two things that will ruin a skillet are rust and the dishwasher. Rust happens when water sits on bare iron for too long — usually after a wash, when the skillet is put away damp. The dishwasher strips seasoning in a single cycle and exposes the iron to water for an hour. Don't do either.",
      "The right way to clean a skillet is hot water and a stiff brush, immediately after cooking. If you have stuck-on food, simmer a half-inch of water in the pan for a minute and scrape with a spatula. Soap is fine — modern dish soap doesn't strip seasoning the way lye-based soaps did a hundred years ago. But it's also not necessary for cast iron.",
      "After washing, dry the skillet thoroughly. The fastest way is to minute on a low burner — the residual heat evaporates every drop. Then, while it's still warm, wipe the inside with a paper towel dipped in a drop of vegetable oil. Wipe it again with a dry towel to remove excess. You're not re-seasoning — you're just protecting the surface.",
      "Once a year or so, you'll want to re-season. This is a 90-minute process: scrub the pan down to bare iron with steel wool, coat it thinly with flaxseed oil, and bake it upside-down at 500°F for an hour. Repeat three or four times. The result is a hard, black, glassy surface that's the closest thing to non-stick you can get without Teflon.",
      "Treat your skillet right and it will outlive you. We have customers cooking on skillets their great-grandmothers bought in 1940. The patina is the point — every meal adds a layer.",
    ],
  },
  {
    id: "linen-vs-cotton",
    slug: "linen-vs-cotton",
    title: "Linen vs. Cotton: A Long-Term Look at Bedding",
    excerpt:
      "Both materials age beautifully, but they do it in very different ways. A practical comparison for choosing your sheets.",
    category: "Bath & Laundry",
    date: "March 7, 2026",
    readTime: "8 min read",
    author: "Henry Lao",
    authorBio:
      "Henry runs our textiles category. He has visited linen mills in Lithuania and cotton fields in Texas.",
    image: IMG.linen,
    body: [
      "Linen and cotton are the two most common natural-fiber bedding materials. Both have been used for thousands of years. Both can last twenty years if you treat them right. But they are not interchangeable, and the choice between them depends on what you want your sheets to feel like in year ten.",
      "Cotton is the default. It's soft from day one, easy to care for (machine wash, tumble dry), and available at every price point. Long-staple cotton — Egyptian, Pima, Supima — is stronger and softer than short-staple, and the extra cost is worth it for sheets you'll use every night.",
      "Linen starts stiff and softens with every wash. After about ten washes, it has the drape of well-loved cotton. After a hundred, it's the softest thing you own. Linen is also more breathable than cotton — the fibers wick moisture and regulate temperature better, which is why linen sheets feel cool in summer and warm in winter.",
      "The trade-off is wrinkles. Linen wrinkles. Always. Some people love this — it's part of the material's charm, evidence that the fabric has been used and lived-in. Others find it sloppy. If you fall in the second camp, linen is not for you, and that's fine. Cotton percale or sateen will give you the crisp, smooth look you want.",
      "Price: linen is more expensive. European flax (the only flax worth buying for textiles) is grown in a narrow band across Belgium, France, and the Netherlands. The growing season is short, the harvest is labour-intensive (flax is pulled, not cut, to preserve the long fibers), and the retting process takes weeks. Cotton, by contrast, grows across the southern United States, India, Egypt, and dozens of other countries.",
      "Our recommendation: if you sleep hot, live in a humid climate, or want sheets that will last twenty years, buy linen. If you want soft from day one, easy to care for, and don't care about longevity, buy cotton. We carry both — and we use both at home, depending on the season.",
    ],
  },
  {
    id: "knife-sharpening-basics",
    slug: "knife-sharpening-basics",
    title: "How to Sharpen a Kitchen Knife at Home",
    excerpt:
      "Whetstone, pull-through, or send it out? A practical approach to keeping a sharp edge on the knives you use every day.",
    category: "Tools",
    date: "February 28, 2026",
    readTime: "10 min read",
    author: "Tomas Bauer",
    authorBio:
      "Tomas is our tools category buyer. He sharpens his own knives and has been doing it for twenty years.",
    image: IMG.chef,
    body: [
      "A sharp knife is a safer knife. Dull knives require more pressure to cut, which means more slipping, more accidents, and more injuries. A sharp knife goes where you point it and stops when it hits the board.",
      "There are three ways to sharpen a knife: a whetstone, a pull-through sharpener, or sending it to a professional. Each has trade-offs.",
      "The whetstone is the best. It's a flat abrasive stone — usually two-sided, with a coarse grit (1000) and a fine grit (6000). You soak the stone in water for ten minutes, then draw the knife across it at a consistent 15- to 20-degree angle, ten times per side. Switch to the fine grit and repeat. The whole process takes about ten minutes per knife.",
      "The whetstone removes only as much steel as necessary, leaves a clean edge, and doesn't heat-treat the blade (which can soften the temper). It's also the most skilful — the first few times you do it, the edge will be uneven. After a month of practice, you'll be sharpening better than the guy at the farmers' market who charges $8 a knife.",
      "The pull-through sharpener is faster and easier. It has carbide or ceramic blades set at a fixed angle — you draw the knife through a slot, and it removes steel to a preset bevel. The problem is it removes too much steel. Every sharpening takes a year off the knife's life. Use it for cheap knives you don't care about. Don't use it on a $150 chef's knife.",
      "Sending it out is the easiest and most expensive. A professional sharpener will charge $8–$15 per knife and return it in a week. Some do house calls. Most restaurant supply stores sharpen knives. The results are excellent — usually better than a beginner whetstone job — but the cost adds up if you have a block full of knives.",
      "Our recommendation: buy a $40 dual-grit whetstone, watch a fifteen-minute YouTube video, and learn. It's a meditative practice, you'll save money, and your knives will always be sharp.",
    ],
  },
  {
    id: "warm-lighting-guide",
    slug: "warm-lighting-guide",
    title: "Designing a Warm-Lit Room: A Lighting Primer",
    excerpt:
      "Color temperature, layering, and how to make a room feel like home after dark — without brightening the ceiling.",
    category: "Home & Decor",
    date: "February 21, 2026",
    readTime: "7 min read",
    author: "Naomi Strand",
    authorBio:
      "Naomi is our home and decor buyer. She has designed lighting for restaurants and residential clients for ten years.",
    image: IMG.lamp,
    body: [
      "Most rooms are over-lit. A single ceiling fixture blasting 800 lumens down on a room is the most common lighting mistake we see — it flattens everything, casts unflattering shadows under eyes, and makes a space feel like a conference room.",
      "Good lighting is layered. Three sources, at three heights, with three different color temperatures. Here's the recipe.",
      "Start with task lighting — a lamp you can read by. This is your brightest source: 450 lumens or more, with a focused beam, at table or desk height. A library lamp, a swing-arm sconce, a directed floor lamp. Color temperature 2700K (warm white) — never brighter than 3000K for residential.",
      "Add ambient lighting — a soft, diffuse glow that fills the room without a visible source. A paper lantern, a frosted-glass table lamp, an uplight bouncing off a wall. Color temperature 2200K–2700K. Brightness: 200–300 lumens. This is what makes a room feel warm.",
      "Finish with accent lighting — a small, directional light on a single object. A picture light over a painting, a candle in a fireplace, a strip of LEDs under a cabinet. This is decorative — it draws the eye, gives the room depth, and tells you where to look.",
      "The color temperature rule: warmer is almost always better for residential. 2700K is the standard. 2200K is candle-flame warm — perfect for a bedroom or dining room. 3000K is the upper limit for a kitchen counter. Anything brighter than 3000K belongs in a hospital or an office.",
      "Dimmers on every circuit. Even a 450-lumen task lamp should dim — sometimes you want full brightness to read a recipe, sometimes you want a soft glow for a glass of wine at the kitchen island. Dimmable LEDs and a $20 wall dimmer are the single highest-impact lighting upgrade you can make.",
    ],
  },
  {
    id: "spring-pantry-reset",
    slug: "spring-pantry-reset",
    title: "The Spring Pantry Reset",
    excerpt:
      "A simple, repeatable process for clearing the pantry, restocking essentials, and finding the recipes you actually cook.",
    category: "Kitchen",
    date: "February 14, 2026",
    readTime: "5 min read",
    author: "Mara Whitfield",
    authorBio:
      "Mara is our kitchen category buyer. She has been cooking on cast iron for fifteen years and has strong opinions about soap.",
    image: IMG.coffee,
    body: [
      "The pantry reset is a once-a-year ritual we recommend to anyone who cooks. The idea is simple: empty the pantry, throw out what's expired, clean the shelves, and restock with the things you actually use. It takes an afternoon, and the payoff is a pantry that works for you instead of against you.",
      "Start by taking everything out. Everything. Lay it on the kitchen counter or the dining table. Group by category: grains and pastas, canned goods, baking supplies, oils and vinegars, spices, snacks.",
      "Now the ruthless part: check every expiration date. Spices over a year old go. Oils that smell off go. Anything you can't remember buying goes. If you haven't used a jar in twelve months, you're not going to use it in the next twelve. Be honest with yourself.",
      "Wipe down the shelves. This is the only time of year you'll do this — make it count. A damp cloth with a drop of dish soap, then a dry cloth. If you have weevils or pantry moths, this is when you deal with them — wipe shelves with white vinegar and let dry completely before restocking.",
      "Restock by category. Put the heaviest items (flour, sugar, grains) on the bottom shelf. Daily-use items at eye level. Baking supplies together. Spices in a single layer where you can see them — stacking spice jars means the back row never gets used.",
      "Finally, make a list of what you need to replace. The reset isn't about throwing things out — it's about knowing what you have so you can cook without buying duplicates. After the reset, you'll find you actually use your pantry. The jar of saffron you forgot you had becomes a Tuesday-night paella.",
    ],
  },
  {
    id: "choosing-first-mechanical-watch",
    slug: "choosing-first-mechanical-watch",
    title: "Choosing Your First Mechanical Watch",
    excerpt:
      "Movements, case sizes, and why the most important spec is one nobody talks about: how it feels on your wrist.",
    category: "Watches",
    date: "February 7, 2026",
    readTime: "9 min read",
    author: "Henry Lao",
    authorBio:
      "Henry runs our watches and eyewear category. He has been collecting mechanical watches for twelve years.",
    image: IMG.watches,
    body: [
      "A mechanical watch is the only piece of jewelry most men will wear every day for thirty years. It's also one of the few objects in modern life that you can buy once and pass down to your kids. So it's worth getting right.",
      "Three things matter: movement, case size, and how it feels on your wrist. In that order.",
      "Movement. The movement is the engine. Two main types: automatic (self-winding, powered by a rotor that spins as you move) and hand-wound (you wind it daily by hand). Automatic is more convenient. Hand-wound is more romantic — a small daily ritual that connects you to the watch. Both are mechanical. Quartz is battery-powered and accurate but lacks the soul of a mechanical movement.",
      "The two main movement makers at the entry level are Sellita (Swiss) and Miyota (Japanese). Sellita is the more traditional choice — Swiss-made, used by Tudor and Oris. Miyota is more affordable — Japanese, used by microbrands like Halios and Baltic. Both are reliable. Both can be serviced for fifty years.",
      "Case size. This is the most over-discussed spec in watch buying. Bigger isn't better. 36–39mm is the sweet spot for almost every wrist — the same diameter as a vintage Rolex Datejust from 1965. Anything over 42mm looks dated (this was the trend in 2010). Anything under 34mm is small even on a slim wrist. Measure your wrist with a tape measure — 6.5 to 7.5 inches is average and 38mm looks right.",
      "Lug-to-lug is the measurement nobody talks about. It's the distance from the top of the strap to the bottom, and it matters more than case diameter. A 40mm watch with a 50mm lug-to-lug will hang off the edge of a 6.5-inch wrist. A 40mm watch with a 46mm lug-to-lug will fit perfectly. Check the spec sheet before you buy.",
      "Finally, how it feels. This is the most important spec and the only one nobody can tell you. You have to put the watch on your wrist. A watch that looks great on Instagram but feels wrong on your wrist will end up in a drawer. A watch that fits will be worn every day for thirty years. We encourage trying watches in person before buying — that's why we have a Portland store.",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, count = 3): BlogPost[] {
  return blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, count);
}

export const brands: Brand[] = [
  { name: "Field Company", note: "Cast iron cookware", location: "Tennessee, USA", established: "2015" },
  { name: "Misto Linen", note: "European flax textiles", location: "Lithuania", established: "1932" },
  { name: "Ridge Workshop", note: "Hand tools", location: "Pennsylvania, USA", established: "1998" },
  { name: "Coral Bay", note: "Mechanical watches", location: "Hong Kong / Switzerland", established: "2014" },
  { name: "Halvor & Sons", note: "Lighting", location: "Portland, USA", established: "2010" },
  { name: "Marin Eyewear", note: "Italian acetate frames", location: "Castiglione Olona, Italy", established: "2009" },
  { name: "Ridgeway Ceramics", note: "Stoneware", location: "New York, USA", established: "2014" },
  { name: "Harbor Press", note: "Books & stationery", location: "Portland, USA", established: "2016" },
];

export const navCategories = [
  {
    label: "Shop All",
    href: "/shop",
    children: categories.map((c) => ({ label: c.name, href: `/shop/${c.slug}`, note: c.tagline })),
  },
  { label: "Our Story", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Shipping & Returns", href: "/shipping-returns" },
  { label: "Contact", href: "/contact" },
];

// FAQ data — used on /faq page
export const faqs = [
  {
    category: "Orders & Shipping",
    items: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping is 2–5 business days within the lower 48 states. Orders placed before 1pm ET ship the same business day from Portland, Maine. Expedited options (1–2 day) are available at checkout.",
      },
      {
        q: "Do you offer free shipping?",
        a: "Yes — free standard shipping on orders over $75 within the lower 48 states. Orders under $75 ship for a flat $7.95. International shipping is calculated at checkout.",
      },
      {
        q: "Can I track my order?",
        a: "Yes. You'll receive a tracking number by email within 24 hours of your order shipping. You can also log in to your account to track current and past orders.",
      },
      {
        q: "Do you ship internationally?",
        a: "We ship to over 40 countries with calculated duties and taxes shown at checkout, so there are no surprise charges on delivery. International orders typically arrive in 7–14 business days.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    items: [
      {
        q: "What's your return policy?",
        a: "60 days from delivery, no restocking fee on unused items in original packaging. For used items, reach out and we'll work something out — we'd rather you love what you keep. Lifetime guarantee on cast iron, tools, and watches covers manufacturing defects.",
      },
      {
        q: "How do I start a return?",
        a: "Log in to your account, find the order, and click 'Start a return.' Or email returns@hearthandharbor.com with your order number. We'll send a prepaid return label within one business day.",
      },
      {
        q: "Can I exchange instead of returning?",
        a: "Yes — exchanges are free. Start an exchange the same way as a return, select the item you want instead, and we'll ship it as soon as we receive your return.",
      },
      {
        q: "What if my item arrived damaged?",
        a: "Take a photo and email us at returns@hearthandharbor.com within 7 days of delivery. We'll send a replacement immediately — no need to wait for the return.",
      },
    ],
  },
  {
    category: "Products & Care",
    items: [
      {
        q: "Where are your products made?",
        a: "Most are made in the United States, with a smaller share from Japan, Portugal, Lithuania, and the United Kingdom. Each product page lists the country of origin and the specific maker. We don't drop-ship from anonymous factories.",
      },
      {
        q: "How do I care for cast iron?",
        a: "Hand wash with hot water and a brush. Avoid soap. Dry thoroughly over low heat, then wipe with a drop of vegetable oil. Never soak or put in the dishwasher. Full care guide on our Journal.",
      },
      {
        q: "Do you offer sharpening or repair services?",
        a: "Yes — knife sharpening, cast iron reseasoning, and watch servicing are available through our Portland workshop. Drop off in person or mail it in. We'll quote the work before we start.",
      },
      {
        q: "Are your products covered by a warranty?",
        a: "Every forged steel tool, cast iron piece, and mechanical watch carries a lifetime guarantee against manufacturing defects. Other items have a 1-year warranty. If something fails under normal use, we'll repair, replace, or refund.",
      },
    ],
  },
  {
    category: "Trade & Wholesale",
    items: [
      {
        q: "Do you offer a trade discount?",
        a: "Yes — designers, stylists, hospitality buyers, and retail stores qualify for a trade discount of 15–25% off, depending on volume. Apply through our contact form with your resale certificate or design portfolio.",
      },
      {
        q: "Can I visit your store?",
        a: "Yes. Our Portland, Maine storefront is open Tuesday–Saturday, 10am–6pm ET, at 118 Harbor Lane. Many of the online catalog items are on display, and our team is happy to walk you through materials and care.",
      },
      {
        q: "Do you offer gift cards?",
        a: "Yes — digital gift cards from $25 to $500. They never expire and ship immediately by email. Available on the gift cards page.",
      },
      {
        q: "How do I become a wholesale partner?",
        a: "We work with select independent retailers. Email wholesale@hearthandharbor.com with your store details, photos, and a list of brands you currently carry. We'll respond within two weeks.",
      },
    ],
  },
];
