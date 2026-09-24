"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Star,
  ShoppingCart,
  Heart,
  Truck,
  RotateCcw,
  ShieldCheck,
  Minus,
  Plus,
  ChevronRight,
  ArrowLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/lib/cart-store";
import {
  getProductBySlug,
  getRelatedProducts,
  categories,
} from "@/lib/site-data";
import { ProductCard } from "@/components/site/product-card";

const badgeStyles: Record<string, string> = {
  New: "bg-primary text-primary-foreground",
  Sale: "bg-accent text-accent-foreground",
  Bestseller: "bg-foreground text-background",
  Limited: "bg-destructive text-white",
};

export default function ProductPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const product = getProductBySlug(id ?? "");

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product, 4);
  const category = categories.find((c) => c.slug === product.categorySlug);

  return (
    <>
      <ProductDetail product={product} categoryName={category?.name} />
      {related.length > 0 && <RelatedProducts products={related} />}
    </>
  );
}

function ProductDetail({
  product,
  categoryName,
}: {
  product: ReturnType<typeof getProductBySlug> extends infer T ? Exclude<T, undefined> : never;
  categoryName?: string;
}) {
  const { toast } = useToast();
  const add = useCart((s) => s.add);
  const [qty, setQty] = React.useState(1);
  const [liked, setLiked] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState<"description" | "materials" | "care" | "shipping">("description");

  const handleAdd = () => {
    add(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      },
      qty
    );
    toast({
      title: "Added to cart",
      description: `${qty} × ${product.name} — $${(product.price * qty).toFixed(0)}`,
    });
  };

  return (
    <article>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary/40">
        <div className="container-wide py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[12px] text-muted-foreground">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li><Link href="/shop" className="hover:text-primary">Shop</Link></li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li>
                <Link href={`/shop/${product.categorySlug}`} className="hover:text-primary">
                  {categoryName}
                </Link>
              </li>
              <li><ChevronRight className="h-3 w-3" /></li>
              <li><span className="text-foreground">{product.name}</span></li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="py-8 lg:py-12">
        <div className="container-wide grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover"
            />
            {product.badge && (
              <span
                className={cn(
                  "absolute left-4 top-4 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider",
                  badgeStyles[product.badge]
                )}
              >
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <div className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
              {product.category}
            </div>
            <h1 className="mt-2 font-serif-display text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl text-balance">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-4 w-4",
                      i < Math.floor(product.rating)
                        ? "fill-accent text-accent"
                        : "fill-muted text-muted"
                    )}
                  />
                ))}
              </div>
              <span className="text-[13px] text-muted-foreground">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-serif-display text-3xl font-semibold text-primary sm:text-4xl">
                ${product.price.toFixed(0)}
              </span>
              {product.compareAtPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.compareAtPrice.toFixed(0)}
                  </span>
                  <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-semibold text-accent">
                    Save ${(product.compareAtPrice - product.price).toFixed(0)}
                  </span>
                </>
              )}
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-foreground/80">
              {product.blurb}
            </p>

            {/* Quantity + add to cart */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <div className="flex items-center rounded-full border border-border bg-card">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="grid h-10 w-10 place-items-center rounded-l-full text-foreground hover:bg-muted"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-semibold text-foreground">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="grid h-10 w-10 place-items-center rounded-r-full text-foreground hover:bg-muted"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <Button
                onClick={handleAdd}
                size="lg"
                className="flex-1 gap-2 rounded-full sm:min-w-48"
              >
                <ShoppingCart className="h-4 w-4" /> Add to cart — ${(product.price * qty).toFixed(0)}
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full"
                aria-label="Add to wishlist"
                onClick={() => setLiked((v) => !v)}
              >
                <Heart className={cn("h-5 w-5", liked && "fill-accent text-accent")} />
              </Button>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-2">
              <Fact label="Origin" value={product.origin} />
              <Fact label="SKU" value={product.sku} />
              <Fact label="Materials" value={product.materials} />
              <Fact label="Dimensions" value={product.dimensions} />
            </div>

            {/* Trust badges */}
            <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-secondary/60 p-4">
              {[
                { icon: Truck, label: "Free shipping over $75" },
                { icon: RotateCcw, label: "60-day returns" },
                { icon: ShieldCheck, label: "Lifetime guarantee" },
              ].map((b) => (
                <div key={b.label} className="flex flex-col items-center gap-1 text-center">
                  <b.icon className="h-5 w-5 text-primary" />
                  <span className="text-[11px] font-medium text-foreground/80">{b.label}</span>
                </div>
              ))}
            </div>

            {/* Back to shop */}
            <div className="mt-6">
              <Button asChild variant="ghost" className="gap-2 rounded-full">
                <Link href={`/shop/${product.categorySlug}`}>
                  <ArrowLeft className="h-4 w-4" /> Back to {categoryName}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs: description, materials, care, shipping */}
      <section className="border-t border-border bg-secondary/40 py-12 lg:py-16">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-[200px_1fr] lg:gap-12">
            <div className="flex flex-wrap gap-2 lg:flex-col">
              {([
                { key: "description", label: "Description" },
                { key: "materials", label: "Materials & Dimensions" },
                { key: "care", label: "Care Instructions" },
                { key: "shipping", label: "Shipping & Returns" },
              ] as const).map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={cn(
                    "rounded-full px-4 py-2 text-left text-[13px] font-semibold transition-colors",
                    activeTab === t.key
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-foreground/80 hover:bg-muted"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 lg:p-8">
              {activeTab === "description" && (
                <div>
                  <h2 className="font-serif-display text-xl font-semibold text-foreground">
                    About this product
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                    {product.description}
                  </p>
                </div>
              )}
              {activeTab === "materials" && (
                <div className="space-y-4">
                  <h2 className="font-serif-display text-xl font-semibold text-foreground">
                    Materials & dimensions
                  </h2>
                  <dl className="grid gap-3 sm:grid-cols-2">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Materials</dt>
                      <dd className="mt-1 text-[14px] text-foreground">{product.materials}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Dimensions</dt>
                      <dd className="mt-1 text-[14px] text-foreground">{product.dimensions}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Country of origin</dt>
                      <dd className="mt-1 text-[14px] text-foreground">{product.origin}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">SKU</dt>
                      <dd className="mt-1 text-[14px] text-foreground">{product.sku}</dd>
                    </div>
                  </dl>
                </div>
              )}
              {activeTab === "care" && (
                <div>
                  <h2 className="font-serif-display text-xl font-semibold text-foreground">
                    Care instructions
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
                    {product.care}
                  </p>
                  <p className="mt-4 text-[13px] text-muted-foreground">
                    Questions about care? Email{" "}
                    <a href="mailto:hello@hearthandharbor.com" className="text-primary underline">
                      hello@hearthandharbor.com
                    </a>{" "}
                    — we usually reply within a business day.
                  </p>
                </div>
              )}
              {activeTab === "shipping" && (
                <div className="space-y-4">
                  <h2 className="font-serif-display text-xl font-semibold text-foreground">
                    Shipping & returns
                  </h2>
                  <p className="text-[15px] leading-relaxed text-foreground/80">
                    Ships in one business day from Portland, Maine. Free standard shipping on orders over $75 within the lower 48 states — typically arriving in 2–5 business days.
                  </p>
                  <p className="text-[15px] leading-relaxed text-foreground/80">
                    60-day returns, no restocking fee, on unused items in original packaging. Lifetime guarantee against manufacturing defects on cast iron, forged steel, and mechanical watches.
                  </p>
                  <p className="text-[13px] text-muted-foreground">
                    Read the{" "}
                    <Link href="/shipping-returns" className="text-primary underline">
                      full shipping & returns policy
                    </Link>
                    .
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-[14px] leading-snug text-foreground">{value}</dd>
    </div>
  );
}

function RelatedProducts({ products }: { products: NonNullable<ReturnType<typeof getProductBySlug>>[] }) {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-wide">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          You may also like
        </div>
        <h2 className="font-serif-display text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl">
          Related products
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
