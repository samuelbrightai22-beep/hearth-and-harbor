"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft, Clock, Calendar } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { getBlogPostBySlug, getRelatedPosts } from "@/lib/site-data";

export default function BlogPostPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const post = getBlogPostBySlug(id ?? "");

  if (!post) {
    notFound();
  }

  const related = getRelatedPosts(post, 3);

  return (
    <>
      <PageHeader
        eyebrow={post.category}
        title={post.title}
        description={post.excerpt}
        crumbs={[{ label: "Journal", href: "/journal" }, { label: post.title }]}
      >
        <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-primary text-[12px] font-semibold text-primary-foreground">
              {post.author.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <div className="font-semibold text-foreground">{post.author}</div>
              <div className="text-[12px] text-muted-foreground">Editor</div>
            </div>
          </div>
          <span className="hidden h-8 w-px bg-border sm:block" aria-hidden="true" />
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <time dateTime={post.date}>{post.date}</time>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </PageHeader>

      {/* Featured image */}
      <section className="py-8 lg:py-10">
        <div className="container-wide">
          <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-muted">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-8 lg:py-12">
        <div className="container-wide">
          <div className="mx-auto max-w-2xl">
            <div className="space-y-6">
              {post.body.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "font-serif-display text-[20px] leading-relaxed text-foreground sm:text-[22px]"
                      : "text-[16px] leading-[1.75] text-foreground/85"
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            {/* Author bio */}
            <div className="mt-12 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-[14px] font-semibold text-primary-foreground">
                  {post.author.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Written by
                  </div>
                  <div className="font-serif-display text-lg font-semibold text-foreground">
                    {post.author}
                  </div>
                  <p className="mt-1 text-[14px] leading-relaxed text-muted-foreground">
                    {post.authorBio}
                  </p>
                </div>
              </div>
            </div>

            {/* Back to journal */}
            <div className="mt-8">
              <Button asChild variant="ghost" className="gap-2 rounded-full">
                <Link href="/journal">
                  <ArrowLeft className="h-4 w-4" /> Back to journal
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="border-t border-border bg-secondary/40 py-14 lg:py-20">
          <div className="container-wide">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              Keep reading
            </div>
            <h2 className="font-serif-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Related articles
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <article
                  key={p.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card product-card-shadow transition-all hover:-translate-y-1 hover:product-card-shadow-hover"
                >
                  <Link href={`/journal/${p.slug}`} className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                      {p.category}
                    </span>
                  </Link>
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      <time>{p.date}</time>
                      <span aria-hidden="true">·</span>
                      <span>{p.readTime}</span>
                    </div>
                    <h3 className="mt-2 font-serif-display text-lg font-semibold leading-snug text-foreground">
                      <Link href={`/journal/${p.slug}`} className="hover:text-primary transition-colors">
                        {p.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">
                      {p.excerpt}
                    </p>
                    <Link
                      href={`/journal/${p.slug}`}
                      className="mt-auto inline-flex items-center gap-1 pt-4 text-[12px] font-semibold text-primary hover:text-accent transition-colors"
                    >
                      Read
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
