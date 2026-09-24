import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-wide">
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 text-center lg:p-12">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary">
            <Search className="h-6 w-6 text-primary" />
          </div>
          <div className="font-serif-display text-7xl font-semibold text-primary sm:text-8xl">
            404
          </div>
          <h1 className="mt-3 font-serif-display text-2xl font-semibold text-foreground sm:text-3xl">
            This page wandered off.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist — or has been moved. Try the homepage, or browse the catalog.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="gap-2 rounded-full">
              <Link href="/">
                <Home className="h-4 w-4" /> Back to home
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <Link href="/shop">
                Shop all products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-[13px] text-muted-foreground">
            <p className="font-semibold text-foreground">Popular destinations:</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              <Link href="/about" className="rounded-full bg-secondary px-3 py-1 hover:bg-muted">Our story</Link>
              <Link href="/journal" className="rounded-full bg-secondary px-3 py-1 hover:bg-muted">Journal</Link>
              <Link href="/shipping-returns" className="rounded-full bg-secondary px-3 py-1 hover:bg-muted">Shipping & returns</Link>
              <Link href="/faq" className="rounded-full bg-secondary px-3 py-1 hover:bg-muted">FAQ</Link>
              <Link href="/contact" className="rounded-full bg-secondary px-3 py-1 hover:bg-muted">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
