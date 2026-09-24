"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { blogPosts } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export default function JournalPage() {
  const categories = ["All", ...Array.from(new Set(blogPosts.map((p) => p.category)))];
  const [active, setActive] = React.useState("All");

  const filtered = active === "All" ? blogPosts : blogPosts.filter((p) => p.category === active);
  const [featured, ...rest] = filtered;

  return (
    <>
      <PageHeader
        eyebrow="Journal"
        title="Field notes & guides"
        description="Practical, opinionated writing on owning, fixing, and living with the things you buy. New posts every Tuesday — written by our editors, not a content team."
        crumbs={[{ label: "Journal" }]}
      />

      <section className="py-10 lg:py-14">
        <div className="container-wide">
          {/* Filter chips */}
          <div className="mb-8 flex flex-wrap items-center gap-2 border-b border-border pb-6">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                  active === c
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground/80 hover:bg-muted"
                )}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          {featured && (
            <Link
              href={`/journal/${featured.slug}`}
              className="group mb-10 grid overflow-hidden rounded-2xl border border-border bg-card product-card-shadow transition-all hover:-translate-y-1 hover:product-card-shadow-hover lg:grid-cols-2"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-muted lg:aspect-auto">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent-foreground">
                  Featured
                </span>
              </div>
              <div className="flex flex-col justify-center p-6 lg:p-10">
                <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">
                    {featured.category}
                  </span>
                  <time>{featured.date}</time>
                  <span aria-hidden="true">·</span>
                  <span>{featured.readTime}</span>
                </div>
                <h2 className="mt-3 font-serif-display text-2xl font-semibold leading-tight text-foreground sm:text-3xl text-balance">
                  {featured.title}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-[12px] font-semibold text-primary-foreground">
                    {featured.author.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-foreground">{featured.author}</div>
                    <div className="text-[11px] text-muted-foreground">Editor</div>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary">
                  Read the full article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          )}

          {/* Grid of posts */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card product-card-shadow transition-all hover:-translate-y-1 hover:product-card-shadow-hover"
              >
                <Link href={`/journal/${post.slug}`} className="relative aspect-[16/10] overflow-hidden bg-muted">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
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
    </>
  );
}
