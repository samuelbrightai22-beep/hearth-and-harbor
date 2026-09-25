"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Truck,
  RotateCcw,
  ShieldCheck,
  Leaf,
  Star,
  Quote,
  MapPin,
} from "lucide-react";

import { HeroCarousel } from "@/components/site/hero-carousel";
import { ProductCard } from "@/components/site/product-card";
import {
  categories,
  featuredProducts,
  trendingProducts,
  bestSellingProducts,
  blogPosts,
  brands,
} from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TrustBar />
      <CategoriesSection />
      <FeaturedProducts />
      <AboutTeaser />
      <TrendingProducts />
      <BestSellers />
      <BrandsStrip />
      <JournalTeaser />
      <TestimonialSection />
      <ShippingTeaser />
      <StoreVisitCTA />
    </>
  );
}

/* ----------------------------------------------------------- */
/* Trust bar — quick proof points under the hero              */
/* ----------------------------------------------------------- */
function TrustBar() {
  const items = [
    { icon: Truck, title: "Free shipping over $75", note: "Ships in 1 business day" },
    { icon: RotateCcw, title: "60-day easy returns", note: "No restocking fee" },
    { icon: ShieldCheck, title: "Lifetime tool guarantee", note: "On forged steel" },
    { icon: Leaf, title: "Carbon-neutral delivery", note: "Every order, offset" },
  ];
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="container-wide grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 lg:py-6">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <div className="text-[13px] font-semibold leading-tight text-foreground">
                {item.title}
              </div>
              <div className="text-[11px] text-muted-foreground">{item.note}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Shop by Category                                            */
/* ----------------------------------------------------------- */
function CategoriesSection() {
  return (
    <section id="shop" className="py-14 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Browse"
          title="Shop by category"
          description="Six rooms of considered goods. Each one curated by an editor who actually uses what they sell."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/shop">View all products <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/shop/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-muted"
            >
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                    {cat.itemCount} items
                  </span>
                </div>
                <h3 className="mt-2 font-serif-display text-2xl font-semibold">{cat.name}</h3>
                <p className="mt-1 text-[13px] text-white/85">{cat.tagline}</p>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent">
                  Shop {cat.name.toLowerCase()}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Featured products                                           */
/* ----------------------------------------------------------- */
function FeaturedProducts() {
  return (
    <section className="bg-secondary/40 py-14 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Editor's picks"
          title="Top featured products"
          description="The pieces our buyers reach for first this season — chosen for materials, maker, and how they hold up over years."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/shop">View all products <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {featuredProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* About teaser — links to /about                              */
/* ----------------------------------------------------------- */
function AboutTeaser() {
  return (
    <section className="py-14 lg:py-24">
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80"
              alt="Inside the Hearth & Harbor Portland workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden w-56 rounded-2xl border border-border bg-card p-5 shadow-lg sm:block lg:-right-8">
            <div className="font-serif-display text-3xl font-semibold text-primary">7 years</div>
            <div className="mt-1 text-[12px] leading-snug text-muted-foreground">
              Independently owned and operated from Portland, Maine — since 2018.
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Our story
          </div>
          <h2 className="font-serif-display text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-5xl text-balance">
            We started Hearth & Harbor because the things we wanted to live with weren&apos;t easy to find.
          </h2>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-foreground/80">
            Most of what fills our shelves comes from makers we&apos;ve met in person — a fifth-generation cast iron foundry in Tennessee, a linen mill in Lithuania that&apos;s been open since 1932, a one-person ceramics studio outside Asheville. We choose them not because their work photographs well, but because it ages well.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { stat: "180+", label: "Independent makers" },
              { stat: "60-day", label: "Easy returns" },
              { stat: "4.9★", label: "Average rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif-display text-2xl font-semibold text-primary sm:text-3xl">
                  {s.stat}
                </div>
                <div className="mt-1 text-[12px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="gap-2 rounded-full">
              <Link href="/about">Read our full story <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/contact">Visit our Portland store</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Trending products                                           */
/* ----------------------------------------------------------- */
function TrendingProducts() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Trending now"
          title="Hot trending products"
          description="What's been quietly leaving our shelves this month — restocked, reordered, and reviewed."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/shop">See all trending <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {trendingProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Best sellers                                                */
/* ----------------------------------------------------------- */
function BestSellers() {
  return (
    <section className="bg-secondary/40 py-14 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Customer favorites"
          title="Top best selling"
          description="The pieces our customers come back for — rated 4.7 stars or higher, with at least 80 reviews each."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/shop">Browse bestsellers <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {bestSellingProducts.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Brands strip                                                */
/* ----------------------------------------------------------- */
function BrandsStrip() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-12 lg:py-16">
      <div className="container-wide">
        <SectionHeading
          eyebrow="The makers"
          title="Brands we carry"
          description="A curated roster of independent makers and small studios — many family-run, all chosen for craft over scale."
        />
      </div>
      <div className="relative mt-10 overflow-hidden border-y border-border bg-card py-6">
        <div className="flex w-max animate-marquee items-center gap-12">
          {doubled.map((brand, i) => (
            <div key={i} className="flex shrink-0 items-center gap-3 px-4">
              <span className="font-serif-display text-2xl font-semibold text-primary/80">
                {brand.name}
              </span>
              <span className="text-[12px] text-muted-foreground">— {brand.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Journal teaser                                              */
/* ----------------------------------------------------------- */
function JournalTeaser() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-wide">
        <SectionHeading
          eyebrow="From the journal"
          title="Field notes & guides"
          description="Practical, opinionated writing on owning, fixing, and living with the things you buy. New posts every Tuesday."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="/journal">Read the journal <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card product-card-shadow transition-all hover:-translate-y-1 hover:product-card-shadow-hover"
            >
              <Link href={`/journal/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                  {post.category}
                </span>
              </Link>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <time dateTime={post.date}>{post.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-2 font-serif-display text-xl font-semibold leading-snug text-foreground">
                  <Link href={`/journal/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-[12px] font-semibold text-primary-foreground">
                    {post.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-foreground">{post.author}</div>
                    <div className="text-[11px] text-muted-foreground">Editor</div>
                  </div>
                  <Link
                    href={`/journal/${post.slug}`}
                    className="ml-auto inline-flex items-center gap-1 text-[12px] font-semibold text-primary hover:text-accent transition-colors"
                  >
                    Read
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Testimonial                                                 */
/* ----------------------------------------------------------- */
function TestimonialSection() {
  return (
    <section className="bg-primary py-14 text-primary-foreground lg:py-20">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <Quote className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
          <p className="mt-6 font-serif-display text-2xl font-medium leading-relaxed sm:text-3xl lg:text-4xl text-balance">
            &ldquo;I bought a cast iron skillet from Hearth & Harbor five years ago. It&apos;s the only pan I still reach for. Their buyers actually know what they&apos;re doing.&rdquo;
          </p>
          <div className="mt-8 flex items-center justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <div className="mt-4 text-[13px] text-primary-foreground/80">
            Sarah K. · Verified customer · Bought the Field No.10 Skillet
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Shipping teaser                                             */
/* ----------------------------------------------------------- */
function ShippingTeaser() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container-wide">
        <div className="grid gap-6 rounded-2xl border border-border bg-card p-8 lg:grid-cols-4 lg:gap-8 lg:p-10">
          <div className="lg:col-span-1">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Plain-language policies
            </div>
            <h2 className="font-serif-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl">
              Shipping, returns & guarantees
            </h2>
            <p className="mt-2 text-[14px] text-muted-foreground">
              No fine print. If something is wrong with your order, we&apos;ll make it right.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3 lg:col-span-3">
            {[
              { icon: Truck, title: "Free shipping over $75", note: "Ships in 1 business day from Portland, ME" },
              { icon: RotateCcw, title: "60-day easy returns", note: "No restocking fee, no questions on unused items" },
              { icon: ShieldCheck, title: "Lifetime tool guarantee", note: "On forged steel, cast iron, and watches" },
            ].map((b) => (
              <div key={b.title} className="flex flex-col gap-2">
                <b.icon className="h-6 w-6 text-primary" />
                <div className="font-serif-display text-base font-semibold text-foreground">{b.title}</div>
                <div className="text-[13px] leading-relaxed text-muted-foreground">{b.note}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <Button asChild variant="outline" className="gap-2 rounded-full">
            <Link href="/shipping-returns">Read full policy <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Store visit CTA                                             */
/* ----------------------------------------------------------- */
function StoreVisitCTA() {
  return (
    <section className="bg-secondary/40 py-14 lg:py-20">
      <div className="container-wide">
        <div className="grid items-center gap-8 rounded-2xl bg-primary p-8 text-primary-foreground lg:grid-cols-2 lg:p-12">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]">
              <MapPin className="h-3 w-3" aria-hidden="true" />
              Portland, Maine
            </div>
            <h2 className="font-serif-display text-3xl font-semibold leading-tight sm:text-4xl text-balance">
              Visit the store, or send us a note.
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-primary-foreground/85">
              118 Harbor Lane is open Tuesday–Saturday, 10am–6pm ET. Most of the online catalog is on display — and a real person answers every email within a business day.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild variant="secondary" className="gap-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Get in touch <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/faq">Read FAQ</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1200&q=80"
              alt="Hearth & Harbor storefront in Portland, Maine"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Section heading helper                                      */
/* ----------------------------------------------------------- */
function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
          {eyebrow}
        </div>
        <h2 className="font-serif-display text-3xl font-semibold leading-[1.1] text-foreground sm:text-4xl lg:text-[2.6rem] text-balance">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
