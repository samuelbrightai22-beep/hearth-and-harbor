"use client";

import * as React from "react";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { faqs } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Good to know"
        title="Frequently asked questions"
        description="If your question isn't here, email hello@hearthandharbor.com — a real person answers within one business day."
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="py-12 lg:py-16">
        <div className="container-wide grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-12">
          {/* Sidebar with category anchors */}
          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              Topics
            </div>
            <nav className="mt-3 flex flex-wrap gap-2 lg:flex-col">
              {faqs.map((cat) => (
                <a
                  key={cat.category}
                  href={`#${slugify(cat.category)}`}
                  className="rounded-full px-3 py-1.5 text-[13px] font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary lg:rounded-md lg:bg-transparent lg:hover:bg-muted/60"
                >
                  {cat.category}
                </a>
              ))}
            </nav>
          </aside>

          {/* FAQ content */}
          <div className="space-y-12">
            {faqs.map((cat) => (
              <div key={cat.category} id={slugify(cat.category)} style={{ scrollMarginTop: "120px" }}>
                <h2 className="font-serif-display text-2xl font-semibold text-foreground sm:text-3xl">
                  {cat.category}
                </h2>
                <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
                  {cat.items.map((item, i) => (
                    <details key={i} className="group p-6 [&_summary]:cursor-pointer">
                      <summary className="flex items-start justify-between gap-4 font-serif-display text-lg font-semibold text-foreground marker:content-none">
                        {item.q}
                        <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-border text-primary transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-[14px] leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact CTA */}
            <div className="rounded-2xl border border-border bg-secondary/60 p-8 text-center lg:p-12">
              <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="font-serif-display text-2xl font-semibold text-foreground">
                Still have questions?
              </h2>
              <p className="mt-2 text-[14px] text-muted-foreground">
                Email us at{" "}
                <a href="mailto:hello@hearthandharbor.com" className="font-semibold text-primary underline">
                  hello@hearthandharbor.com
                </a>{" "}
                — a real person in Portland reads every email and usually replies within a business day.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Button asChild className="gap-2 rounded-full">
                  <Link href="/contact">Contact us <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/shipping-returns">Shipping & returns</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
