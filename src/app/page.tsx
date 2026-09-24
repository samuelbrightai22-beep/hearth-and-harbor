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
  Hammer,
  Clock,
  MapPin,
  Mail,
  Phone,
  Star,
  Quote,
} from "lucide-react";

import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { HeroCarousel } from "@/components/site/hero-carousel";
import { ProductCard } from "@/components/site/product-card";
import {
  categories,
  featuredProducts,
  trendingProducts,
  bestSellingProducts,
  blogPosts,
  brands,
  aboutImage,
} from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  return (
    <div id="top" className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroCarousel />
        <TrustBar />
        <CategoriesSection />
        <FeaturedProducts />
        <AboutSection />
        <TrendingProducts />
        <BestSellers />
        <BrandsStrip />
        <JournalSection />
        <TestimonialSection />
        <ShippingReturnsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
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
        />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Link
              key={cat.slug}
              id={`cat-${cat.slug}`}
              href="#shop"
              className="group relative overflow-hidden rounded-2xl bg-muted"
              style={{ scrollMarginTop: "120px" }}
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
              <Link href="#shop">View all products <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {featuredProducts.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* About / Brand story                                         */
/* ----------------------------------------------------------- */
function AboutSection() {
  return (
    <section id="about" className="py-14 lg:py-24" style={{ scrollMarginTop: "100px" }}>
      <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <Image
              src={aboutImage}
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
            We started Hearth & Harbor because the things we wanted
            to live with weren&apos;t easy to find.
          </h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
            <p>
              Most of what fills our shelves comes from makers we&apos;ve met
              in person — a fifth-generation cast iron foundry in Tennessee,
              a linen mill in Lithuania that&apos;s been open since 1932,
              a one-person ceramics studio outside Asheville. We choose them
              not because their work photographs well, but because it ages well.
            </p>
            <p>
              That bias — for things that get better with use — is the only
              filter we apply. A cast iron skillet that costs more than the
              department store version, but is still in your kitchen in 2050.
              A linen sheet that softens over a hundred washes instead of
              pilling after ten. A knife that gets sharper with proper care,
              not duller.
            </p>
            <p>
              We ship from Portland, Maine, answer our own email, and stand
              behind every piece with a real return policy and a lifetime
              guarantee on tools and cast iron. If something doesn&apos;t
              hold up, we want to hear about it.
            </p>
          </div>

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
              <Link href="#shop">Shop the collection <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="#contact">Visit our Portland store</Link>
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
              <Link href="#shop">See all trending <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {trendingProducts.slice(0, 4).map((p, i) => (
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
              <Link href="#shop">Browse bestsellers <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {bestSellingProducts.slice(0, 4).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" variant="default" className="gap-2 rounded-full">
            <Link href="#shop">Load more products</Link>
          </Button>
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
/* Journal / Blog                                              */
/* ----------------------------------------------------------- */
function JournalSection() {
  return (
    <section id="journal" className="py-14 lg:py-20" style={{ scrollMarginTop: "100px" }}>
      <div className="container-wide">
        <SectionHeading
          eyebrow="From the journal"
          title="Field notes & guides"
          description="Practical, opinionated writing on owning, fixing, and living with the things you buy. New posts every Tuesday."
          action={
            <Button asChild variant="outline" className="rounded-full">
              <Link href="#journal">Read the journal <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          }
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card product-card-shadow transition-all hover:-translate-y-1 hover:product-card-shadow-hover"
            >
              <Link href="#journal" className="relative aspect-[16/10] overflow-hidden bg-muted">
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
                  <Link href="#journal" className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-[13px] leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-[12px] font-semibold text-primary-foreground">
                    {post.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="text-[12px] font-semibold text-foreground">{post.author}</div>
                    <div className="text-[11px] text-muted-foreground">Editor</div>
                  </div>
                  <Link
                    href="#journal"
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
            &ldquo;I bought a cast iron skillet from Hearth &amp; Harbor five years
            ago. It&apos;s the only pan I still reach for. Their buyers actually
            know what they&apos;re doing.&rdquo;
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
/* Shipping & Returns                                          */
/* ----------------------------------------------------------- */
function ShippingReturnsSection() {
  const policies = [
    {
      icon: Truck,
      title: "Shipping",
      body: "Orders ship within one business day from Portland, Maine. Free standard shipping on orders over $75 within the lower 48 states — typically arriving in 2–5 business days. Expedited shipping is available at checkout, and we ship internationally to over 40 countries with duties calculated up front.",
    },
    {
      icon: RotateCcw,
      title: "Returns & exchanges",
      body: "If something isn't right, you have 60 days to return it — no restocking fee, no questions on unused items in original packaging. Cast iron and tools carry a lifetime guarantee against manufacturing defects. Start a return from your account page or email returns@hearthandharbor.com.",
    },
    {
      icon: ShieldCheck,
      title: "Guarantees & warranty",
      body: "Every forged steel tool, cast iron piece, and mechanical watch we sell carries a lifetime guarantee against manufacturing defects. If a piece fails under normal use, we'll repair, replace, or refund it — at our discretion, in your favor.",
    },
    {
      icon: Hammer,
      title: "Repairs & care",
      body: "Cast iron reseasoning, knife sharpening, and watch servicing are available through our Portland workshop. Drop off in person or mail it in — we'll quote the work before we start, and we never replace parts without checking with you first.",
    },
  ];
  return (
    <section id="shipping" className="py-14 lg:py-20" style={{ scrollMarginTop: "100px" }}>
      <div className="container-wide">
        <SectionHeading
          eyebrow="Customer service"
          title="Shipping, returns & guarantees"
          description="Plain-language policies — no fine print. If something is wrong with your order, we'll make it right."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {policies.map((p) => (
            <div
              key={p.title}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 lg:p-7"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                <p.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-serif-display text-xl font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* FAQ                                                         */
/* ----------------------------------------------------------- */
function FaqSection() {
  const faqs = [
    {
      q: "How long does shipping take?",
      a: "Standard shipping is 2–5 business days within the lower 48 states. Orders placed before 1pm ET ship the same business day from Portland, Maine. Expedited options (1–2 day) are available at checkout.",
    },
    {
      q: "What's your return policy?",
      a: "60 days from delivery, no restocking fee on unused items in original packaging. For used items, reach out and we'll work something out — we'd rather you love what you keep. Lifetime guarantee on cast iron, tools, and watches covers manufacturing defects.",
    },
    {
      q: "Do you offer a trade or wholesale discount?",
      a: "Yes — designers, stylists, hospitality buyers, and retail stores qualify for a trade discount of 15–25% off, depending on volume. Apply through our contact form with your resale certificate or design portfolio.",
    },
    {
      q: "Where are your products made?",
      a: "Most are made in the United States, with a smaller share from Japan, Portugal, Lithuania, and the United Kingdom. Each product page lists the country of origin and the specific maker. We don't drop-ship from anonymous factories.",
    },
    {
      q: "Can I visit your store in person?",
      a: "Yes. Our Portland, Maine storefront is open Tuesday–Saturday, 10am–6pm ET, at 118 Harbor Lane. Many of the online catalog items are on display, and our team is happy to walk you through materials and care.",
    },
    {
      q: "Do you ship internationally?",
      a: "We ship to over 40 countries with calculated duties and taxes shown at checkout, so there are no surprise charges on delivery. International orders typically arrive in 7–14 business days.",
    },
  ];
  return (
    <section id="faq" className="bg-secondary/40 py-14 lg:py-20" style={{ scrollMarginTop: "100px" }}>
      <div className="container-wide">
        <SectionHeading
          eyebrow="Good to know"
          title="Frequently asked questions"
          description="If your question isn't here, email hello@hearthandharbor.com — a real person answers within one business day."
        />
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6 [&_summary]:cursor-pointer">
              <summary className="flex items-start justify-between gap-4 font-serif-display text-lg font-semibold text-foreground marker:content-none">
                {f.q}
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- */
/* Contact                                                     */
/* ----------------------------------------------------------- */
function ContactSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll reply within one business day — usually much sooner.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="py-14 lg:py-20" style={{ scrollMarginTop: "100px" }}>
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left: info */}
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Get in touch
          </div>
          <h2 className="font-serif-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            We answer our own email.
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground/80">
            Questions about a product, an order, or a piece you&apos;re trying
            to fix? Drop us a note — a real person in Portland reads every one
            and usually replies within a business day.
          </p>

          <div className="mt-8 space-y-4">
            <ContactRow
              icon={MapPin}
              title="Visit the store"
              lines={["118 Harbor Lane", "Portland, ME 04101"]}
              note="Open Tue–Sat, 10am–6pm ET"
            />
            <ContactRow
              icon={Mail}
              title="Email us"
              lines={["hello@hearthandharbor.com", "trade@hearthandharbor.com"]}
              note="Replies within 1 business day"
            />
            <ContactRow
              icon={Phone}
              title="Call the shop"
              lines={["(207) 555-0142"]}
              note="Tue–Sat, 10am–6pm ET"
            />
            <ContactRow
              icon={Clock}
              title="Customer service hours"
              lines={["Mon–Fri: 9am–6pm ET", "Sat: 10am–5pm ET"]}
              note="Closed Sundays & major holidays"
            />
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-border bg-card p-6 product-card-shadow lg:p-8">
          <h3 className="font-serif-display text-xl font-semibold text-foreground">
            Send us a message
          </h3>
          <p className="mt-1 text-[13px] text-muted-foreground">
            Required fields marked with *
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name *" htmlFor="firstName">
                <Input id="firstName" name="firstName" required placeholder="Mara" />
              </Field>
              <Field label="Last name *" htmlFor="lastName">
                <Input id="lastName" name="lastName" required placeholder="Whitfield" />
              </Field>
            </div>
            <Field label="Email address *" htmlFor="email">
              <Input id="email" name="email" type="email" required placeholder="you@email.com" />
            </Field>
            <Field label="Subject" htmlFor="subject">
              <Input id="subject" name="subject" placeholder="What's this about?" />
            </Field>
            <Field label="Order number (if applicable)" htmlFor="order">
              <Input id="order" name="order" placeholder="HH-12345" />
            </Field>
            <Field label="Message *" htmlFor="message">
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us what you need — the more detail, the better."
              />
            </Field>
            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-[11px] text-muted-foreground">
                We&apos;ll never share your email. See our privacy policy.
              </p>
              <Button
                type="submit"
                disabled={submitting}
                className="gap-2 rounded-full"
              >
                {submitting ? "Sending…" : "Send message"}
                {!submitting && <ArrowRight className="h-4 w-4" />}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  lines,
  note,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  note: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[13px] font-semibold uppercase tracking-wider text-foreground">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-[14px] text-foreground/85">
            {l}
          </div>
        ))}
        <div className="mt-0.5 text-[12px] text-muted-foreground">{note}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="text-[13px] font-medium text-foreground">
        {label}
      </Label>
      {children}
    </div>
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
