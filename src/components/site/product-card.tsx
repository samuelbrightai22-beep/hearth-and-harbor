"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/lib/cart-store";

type ProductCardProps = {
  product: Product;
  className?: string;
  index?: number;
};

const badgeStyles: Record<NonNullable<Product["badge"]>, string> = {
  New: "bg-primary text-primary-foreground",
  Sale: "bg-accent text-accent-foreground",
  Bestseller: "bg-foreground text-background",
  Limited: "bg-destructive text-white",
};

export function ProductCard({ product, className, index = 0 }: ProductCardProps) {
  const { toast } = useToast();
  const add = useCart((s) => s.add);
  const [added, setAdded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    add({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    setAdded(true);
    toast({
      title: "Added to cart",
      description: `${product.name} — $${product.price.toFixed(0)}`,
    });
    window.setTimeout(() => setAdded(false), 1800);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked((v) => !v);
  };

  return (
    <Link
      href={`/product/${product.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card product-card-shadow transition-all duration-300 hover:-translate-y-1 hover:product-card-shadow-hover",
        className,
      )}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider",
              badgeStyles[product.badge],
            )}
          >
            {product.badge}
          </span>
        )}
        <button
          type="button"
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          onClick={handleLike}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:bg-white"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              liked ? "fill-accent text-accent" : "text-foreground/60",
            )}
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
          {product.category}
        </div>
        <h3 className="font-serif-display text-base font-semibold leading-snug text-foreground">
          {product.name}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-snug text-muted-foreground">
          {product.blurb}
        </p>

        <div className="mt-2 flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-3 w-3",
                  i < Math.floor(product.rating)
                    ? "fill-accent text-accent"
                    : "fill-muted text-muted",
                )}
              />
            ))}
          </div>
          <span className="text-[11px] text-muted-foreground">
            {product.rating.toFixed(1)} · {product.reviews}
          </span>
        </div>

        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="flex items-baseline gap-2">
            <span className="font-serif-display text-lg font-semibold text-primary">
              ${product.price.toFixed(0)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.compareAtPrice.toFixed(0)}
              </span>
            )}
          </div>
          <Button
            size="sm"
            onClick={handleAdd}
            aria-label={`Add ${product.name} to cart`}
            className="h-9 gap-1.5 rounded-full px-3"
            variant={added ? "secondary" : "default"}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            <span className="text-xs">{added ? "Added" : "Add"}</span>
          </Button>
        </div>
      </div>
    </Link>
  );
}
