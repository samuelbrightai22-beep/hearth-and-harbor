"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Leaf,
  Hammer,
  Heart,
  MapPin,
  ArrowRight,
  Quote,
  Users,
} from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { brands } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Hearth & Harbor"
        description="A curated marketplace for considered home goods — kitchen, dining, bath, decor, tools, watches, and books. Independently owned since 2018."
        crumbs={[{ label: "Our Story" }]}
      />

      {/* Hero image */}
      <section className="py-10 lg:py-14">
        <div className="container-wide">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80"
              alt="The Hearth & Harbor Portland storefront"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Founder story */}
      <section className="py-12 lg:py-20">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              How it started
            </div>
            <h2 className="font-serif-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
              We started Hearth & Harbor because the things we wanted to live with weren&apos;t easy to find.
            </h2>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/80">
              <p>
                The idea for Hearth & Harbor started in a small apartment in Portland, Maine, in 2018. Mara had just moved back to the States after a year of cooking in Italy, and her cheap college pots were falling apart. She wanted a cast iron skillet that would last — not the $20 one from the supermarket, but not the $400 designer one either. She found the Field No.10 — a small foundry in Tennessee making a skillet for around $100 — and started telling everyone she knew about it.
              </p>
              <p>
                A year later, she and her partner Henry were looking for linen sheets. They wanted European flax, stonewashed, in a colour that wasn&apos;t beige. They found a mill in Lithuania that had been weaving linen since 1932 — and started importing small batches to sell to friends. By 2019, they had a website, a storage unit, and a Post Office account. By 2021, they had a storefront on Harbor Lane.
              </p>
              <p>
                Today we work with 180+ makers across the United States, Japan, Portugal, Lithuania, Ireland, and Italy. Most are family-run businesses. Many have fewer than ten employees. We choose them because their work ages well — and because they answer their own email, the same way we do.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="gap-2 rounded-full">
                <Link href="/shop">Shop the collection <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/contact">Visit our Portland store</Link>
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=80"
                alt="Mara Whitfield, founder, at the Portland storefront"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-serif-display text-3xl font-semibold text-primary">7 years</div>
              <div className="mt-1 text-[13px] leading-snug text-muted-foreground">
                Independently owned and operated from Portland, Maine — since 2018.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-14 text-primary-foreground lg:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {[
              { stat: "180+", label: "Independent makers" },
              { stat: "60-day", label: "Easy returns" },
              { stat: "4.9★", label: "Average rating" },
              { stat: "12,000+", label: "Orders shipped" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif-display text-4xl font-semibold sm:text-5xl">{s.stat}</div>
                <div className="mt-2 text-[13px] text-primary-foreground/80">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 lg:py-20">
        <div className="container-wide">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            What we believe
          </div>
          <h2 className="font-serif-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl text-balance">
            Three principles guide every buying decision.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Hammer,
                title: "Built to last",
                body: "We don&apos;t carry anything we wouldn&apos;t still be using in ten years. Cast iron, forged steel, full-tang knives, mechanical watches — things designed to be repaired, not replaced. If a piece fails under normal use, we&apos;ll repair or replace it.",
              },
              {
                icon: Leaf,
                title: "Made responsibly",
                body: "Every maker we work with is a real person or a real family. We know the names of the potters, the smiths, and the watchmakers. Most are small workshops in the US, Japan, and Europe. We don&apos;t drop-ship from anonymous factories.",
              },
              {
                icon: Heart,
                title: "Honest pricing",
                body: "We charge a fair price for the work that goes into a piece — and we tell you exactly where your money goes. No fake markdowns, no inflated MSRPs, no perpetual sales. If something is on sale, it&apos;s because we negotiated a real discount.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif-display text-xl font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground" dangerouslySetInnerHTML={{ __html: v.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Makers & brands */}
      <section className="bg-secondary/40 py-14 lg:py-20">
        <div className="container-wide">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            The makers
          </div>
          <h2 className="font-serif-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            Brands & makers we carry
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            A curated roster of independent makers and small studios — many family-run, all chosen for craft over scale.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {brands.map((brand) => (
              <div key={brand.name} className="rounded-2xl border border-border bg-card p-5">
                <div className="font-serif-display text-lg font-semibold text-primary">{brand.name}</div>
                <div className="mt-1 text-[13px] text-foreground/85">{brand.note}</div>
                <div className="mt-3 flex items-center gap-3 border-t border-border pt-3 text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {brand.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    Est. {brand.established}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="py-14 lg:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center lg:p-12">
            <Quote className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
            <p className="mt-6 font-serif-display text-2xl font-medium leading-relaxed text-foreground sm:text-3xl text-balance">
              &ldquo;We don&apos;t want to be the biggest. We want to be the place you come back to when you need something that actually works.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-[13px] text-muted-foreground">
              <Users className="h-4 w-4 text-primary" />
              Mara Whitfield & Henry Lao · Co-founders, Hearth & Harbor
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
