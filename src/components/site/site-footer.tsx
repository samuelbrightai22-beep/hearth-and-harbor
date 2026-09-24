"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
  RotateCcw,
  CreditCard,
} from "lucide-react";
import { categories } from "@/lib/site-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function SiteFooter() {
  const { toast } = useToast();
  const [email, setEmail] = React.useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        description: "We promise we won't share it.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Welcome aboard",
      description: "You're on the list — first dispatch arrives Sunday morning.",
    });
    setEmail("");
  };

  return (
    <footer className="mt-auto bg-foreground text-background">
      {/* Newsletter */}
      <section className="border-b border-white/10 bg-primary text-primary-foreground">
        <div className="container-wide grid items-center gap-8 py-12 lg:grid-cols-2 lg:py-14">
          <div>
            <h3 className="font-serif-display text-2xl font-semibold sm:text-3xl">
              The Sunday Dispatch
            </h3>
            <p className="mt-2 max-w-md text-sm text-primary-foreground/85">
              One thoughtful email each week — new arrivals, restocked favorites,
              and a short field note from our editors. No noise.
            </p>
          </div>
          <form
            onSubmit={onSubscribe}
            className="flex flex-col gap-3 sm:flex-row lg:justify-end"
          >
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              aria-label="Email address"
              className="max-w-sm bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60 border-primary-foreground/20"
            />
            <Button
              type="submit"
              variant="secondary"
              className="shrink-0 gap-2 rounded-full bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Mail className="h-4 w-4" />
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Trust badges */}
      <section className="border-b border-white/10">
        <div className="container-wide grid grid-cols-2 gap-4 py-8 sm:grid-cols-4">
          {[
            { icon: Truck, title: "Free shipping over $75", note: "Lower 48 states, 2–5 day delivery" },
            { icon: RotateCcw, title: "60-day returns", note: "Easy returns, no restocking fee" },
            { icon: ShieldCheck, title: "Lifetime guarantee", note: "On all tools and cast iron" },
            { icon: CreditCard, title: "Secure checkout", note: "Shop Pay, Apple Pay, all major cards" },
          ].map((badge) => (
            <div key={badge.title} className="flex items-start gap-3">
              <badge.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <div className="text-sm font-semibold text-background">{badge.title}</div>
                <div className="mt-0.5 text-[12px] leading-snug text-background/65">{badge.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main footer */}
      <section className="container-wide grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:grid-cols-5">
        <div className="col-span-2 lg:col-span-1">
          <img
            src="/logo.svg"
            alt="Hearth & Harbor"
            width={200}
            height={44}
            className="h-9 w-auto brightness-0 invert"
          />
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-background/70">
            A curated marketplace for considered home goods — kitchen, dining, bath,
            decor, tools, watches, and books. Independently owned since 2018.
          </p>
          <div className="mt-4 space-y-2 text-[13px] text-background/80">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>118 Harbor Lane, Portland, ME 04101</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-accent" />
              <span>(207) 555-0142</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-accent" />
              <span>hello@hearthandharbor.com</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-background/50">
            Shop
          </div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-background/85">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link href={`#cat-${cat.slug}`} className="hover:text-accent transition-colors">
                  {cat.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="#shop" className="hover:text-accent transition-colors">
                Shop all products
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-background/50">
            Customer service
          </div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-background/85">
            <li><Link href="#shipping" className="hover:text-accent transition-colors">Shipping & returns</Link></li>
            <li><Link href="#shipping" className="hover:text-accent transition-colors">Track your order</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Contact us</Link></li>
            <li><Link href="#faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Trade program</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Gift cards</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-background/50">
            About
          </div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-background/85">
            <li><Link href="#about" className="hover:text-accent transition-colors">Our story</Link></li>
            <li><Link href="#journal" className="hover:text-accent transition-colors">Journal</Link></li>
            <li><Link href="#about" className="hover:text-accent transition-colors">Sustainability</Link></li>
            <li><Link href="#about" className="hover:text-accent transition-colors">Makers & brands</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Careers</Link></li>
            <li><Link href="#contact" className="hover:text-accent transition-colors">Wholesale</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[11px] font-semibold uppercase tracking-wider text-background/50">
            Follow along
          </div>
          <ul className="mt-4 space-y-2.5 text-[13px] text-background/85">
            <li className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-accent" />
              <a href="#contact" className="hover:text-accent transition-colors">Instagram</a>
            </li>
            <li className="flex items-center gap-2">
              <Facebook className="h-4 w-4 text-accent" />
              <a href="#contact" className="hover:text-accent transition-colors">Facebook</a>
            </li>
            <li className="flex items-center gap-2">
              <Twitter className="h-4 w-4 text-accent" />
              <a href="#contact" className="hover:text-accent transition-colors">Pinterest</a>
            </li>
            <li className="flex items-center gap-2">
              <Youtube className="h-4 w-4 text-accent" />
              <a href="#contact" className="hover:text-accent transition-colors">YouTube</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Bottom bar */}
      <section className="border-t border-white/10">
        <div className="container-wide flex flex-col items-center justify-between gap-4 py-6 text-[12px] text-background/60 sm:flex-row">
          <div>© {new Date().getFullYear()} Hearth & Harbor LLC. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            <Link href="#shipping" className="hover:text-accent">Privacy policy</Link>
            <Link href="#shipping" className="hover:text-accent">Terms of service</Link>
            <Link href="#shipping" className="hover:text-accent">Accessibility</Link>
            <Link href="#shipping" className="hover:text-accent">Cookie settings</Link>
          </div>
          <div className="flex items-center gap-1.5" aria-label="Accepted payment methods">
            {["VISA", "MC", "AMEX", "Pay", "GPay"].map((p) => (
              <span
                key={p}
                className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
