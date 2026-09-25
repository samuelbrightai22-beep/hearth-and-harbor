"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import { PageHeader } from "@/components/site/page-header";
import { categories, getProductsByCategory } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export default function CategoryPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return (
    <>
      <PageHeader
        eyebrow={`${category.itemCount} items`}
        title={category.name}
        description={category.description}
        crumbs={[{ label: "Shop", href: "/shop" }, { label: category.name }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/shop">
              <ArrowLeft className="h-4 w-4" /> All products
            </Link>
          </Button>
        </div>
      </PageHeader>

      <section className="py-10 lg:py-14">
        <div className="container-wide">
          {/* Featured category banner */}
          <div className="relative mb-10 overflow-hidden rounded-2xl">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white lg:p-8">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-accent">
                  {category.tagline}
                </div>
                <div className="mt-1 font-serif-display text-2xl font-semibold sm:text-3xl">
                  Curated by our editors
                </div>
              </div>
            </div>
          </div>

          {/* Other categories chips */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-semibold uppercase tracking-wider text-muted-foreground">
              Other categories:
            </span>
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/shop/${c.slug}`}
                  className="rounded-full border border-border bg-card px-3 py-1 text-[12px] font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                >
                  {c.name}
                </Link>
              ))}
          </div>

          <div className="mb-4 text-[13px] text-muted-foreground">
            {products.length} products in {category.name}
          </div>

          {products.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <p className="text-[15px] font-medium text-foreground">
                More {category.name.toLowerCase()} coming soon.
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Our buyers are working on it — check back next week.
              </p>
              <Button asChild className="mt-4 gap-2 rounded-full">
                <Link href="/shop">
                  Browse all products <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
