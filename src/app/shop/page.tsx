"use client";

import * as React from "react";
import { SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import { PageHeader } from "@/components/site/page-header";
import { allProducts, categories } from "@/lib/site-data";
import { cn } from "@/lib/utils";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

export default function ShopPage() {
  const [activeCat, setActiveCat] = React.useState<string>("all");
  const [sort, setSort] = React.useState<SortKey>("featured");

  const filtered = React.useMemo(() => {
    let result =
      activeCat === "all"
        ? [...allProducts]
        : allProducts.filter((p) => p.categorySlug === activeCat);
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        result.sort((a, b) => (b.badge === "New" ? 1 : 0) - (a.badge === "New" ? 1 : 0));
        break;
      default:
        break;
    }
    return result;
  }, [activeCat, sort]);

  return (
    <>
      <PageHeader
        eyebrow="Shop"
        title="All products"
        description="Every piece in the Hearth & Harbor catalog — cookware, textiles, lighting, tools, watches, and books. Filter by category, sort by price or rating."
        crumbs={[{ label: "Shop" }]}
      />

      <section className="py-10 lg:py-14">
        <div className="container-wide">
          {/* Filter + sort bar */}
          <div className="mb-8 flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveCat("all")}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                  activeCat === "all"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground/80 hover:bg-muted"
                )}
              >
                All ({allProducts.length})
              </button>
              {categories.map((c) => {
                const count = allProducts.filter((p) => p.categorySlug === c.slug).length;
                return (
                  <button
                    key={c.slug}
                    onClick={() => setActiveCat(c.slug)}
                    className={cn(
                      "rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors",
                      activeCat === c.slug
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground/80 hover:bg-muted"
                    )}
                  >
                    {c.name} ({count})
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                aria-label="Sort products"
                className="rounded-md border border-border bg-card px-3 py-1.5 text-[13px] font-medium text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="featured">Featured</option>
                <option value="newest">New arrivals</option>
                <option value="price-asc">Price: low to high</option>
                <option value="price-desc">Price: high to low</option>
                <option value="rating">Highest rated</option>
              </select>
            </div>
          </div>

          <div className="mb-4 text-[13px] text-muted-foreground">
            Showing {filtered.length} of {allProducts.length} products
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-12 text-center">
              <p className="text-[15px] font-medium text-foreground">No products in this category yet.</p>
              <p className="mt-1 text-[13px] text-muted-foreground">Try another filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
