"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { heroImages } from "@/lib/site-data";

type Slide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  align: "left" | "center" | "right";
  tone: "light" | "dark";
};

const slides: Slide[] = [
  {
    eyebrow: "Spring Kitchen Edit",
    title: "Considered cookware\nfor the long haul",
    subtitle:
      "Cast iron, hand-thrown stoneware, and carbon steel — chosen for how they age, not how they photograph.",
    cta: "Shop Kitchen & Dining",
    href: "#cat-kitchen-dining",
    image: heroImages.kitchenWide,
    align: "left",
    tone: "light",
  },
  {
    eyebrow: "New Arrivals",
    title: "Linen that softens\nwith every wash",
    subtitle:
      "European flax, stonewashed to a lived-in hand. Bedding, towels, and tablecloths built to outlast trends.",
    cta: "Shop Bath & Laundry",
    href: "#cat-bath-laundry",
    image: heroImages.linenWide,
    align: "right",
    tone: "dark",
  },
  {
    eyebrow: "Tools & Workshop",
    title: "Hand tools worth\nhanding down",
    subtitle:
      "Forged steel, walnut handles, and lifetime guarantees. The kind of tools your grandfather would have bought.",
    cta: "Shop Tools & Workshop",
    href: "#cat-tools-workshop",
    image: heroImages.toolsWide,
    align: "left",
    tone: "light",
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const count = slides.length;

  const next = React.useCallback(
    () => setCurrent((c) => (c + 1) % count),
    [count],
  );
  const prev = React.useCallback(
    () => setCurrent((c) => (c - 1 + count) % count),
    [count],
  );

  React.useEffect(() => {
    if (paused) return;
    const t = window.setInterval(next, 6500);
    return () => window.clearInterval(t);
  }, [next, paused]);

  return (
    <section
      className="relative w-full overflow-hidden bg-muted"
      aria-roledescription="carousel"
      aria-label="Featured collections"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[60vh] min-h-[460px] w-full sm:h-[68vh] lg:h-[78vh]">
        {slides.map((slide, i) => {
          const active = i === current;
          return (
            <div
              key={i}
              aria-hidden={!active}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                active ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <Image
                src={slide.image}
                alt={slide.title.replace(/\n/g, " ")}
                fill
                sizes="100vw"
                priority={i === 0}
                className="object-cover"
              />
              <div
                className={cn(
                  "absolute inset-0",
                  slide.tone === "dark"
                    ? "bg-gradient-to-r from-black/55 via-black/25 to-transparent"
                    : "bg-gradient-to-r from-white/85 via-white/45 to-transparent",
                )}
              />
              <div
                className={cn(
                  "container-wide absolute inset-0 flex items-center",
                  slide.align === "right" ? "justify-end" : "justify-start",
                  slide.align === "center" && "justify-center",
                )}
              >
                <div
                  className={cn(
                    "max-w-xl animate-fade-in-up",
                    slide.align === "right" && "text-right",
                    slide.tone === "dark" ? "text-white" : "text-foreground",
                  )}
                >
                  <div
                    className={cn(
                      "mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
                      slide.tone === "dark"
                        ? "border-white/40 text-white"
                        : "border-primary/30 bg-white/70 text-primary backdrop-blur",
                    )}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {slide.eyebrow}
                  </div>
                  <h2 className="font-serif-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl text-balance whitespace-pre-line">
                    {slide.title}
                  </h2>
                  <p
                    className={cn(
                      "mt-4 max-w-md text-[15px] leading-relaxed sm:text-base",
                      slide.tone === "dark" ? "text-white/90" : "text-foreground/80",
                      slide.align === "right" && "ml-auto",
                    )}
                  >
                    {slide.subtitle}
                  </p>
                  <div
                    className={cn(
                      "mt-6 flex items-center gap-3",
                      slide.align === "right" && "justify-end",
                    )}
                  >
                    <Button asChild size="lg" className="gap-2 rounded-full">
                      <a href={slide.href}>
                        {slide.cta}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className={cn(
                        "rounded-full border",
                        slide.tone === "dark"
                          ? "border-white/40 text-white hover:bg-white hover:text-foreground"
                          : "border-foreground/20 bg-white/40 backdrop-blur hover:bg-white",
                      )}
                    >
                      <a href="#about">Read our story</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-foreground shadow-sm backdrop-blur transition hover:bg-white lg:grid"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/80 text-foreground shadow-sm backdrop-blur transition hover:bg-white lg:grid"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all",
                i === current ? "w-8 bg-accent" : "w-2.5 bg-white/70 hover:bg-white",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
