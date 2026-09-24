"use client";

import { Truck, RotateCcw, ShieldCheck, Hammer, Clock, Globe } from "lucide-react";
import { PageHeader } from "@/components/site/page-header";

export default function ShippingReturnsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Customer service"
        title="Shipping, returns & guarantees"
        description="Plain-language policies — no fine print. If something is wrong with your order, we'll make it right. Email returns@hearthandharbor.com and a real person will reply within a business day."
        crumbs={[{ label: "Shipping & Returns" }]}
      />

      {/* Policy cards */}
      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2">
            <PolicyCard
              icon={Truck}
              title="Shipping"
              body="Orders ship within one business day from Portland, Maine. Free standard shipping on orders over $75 within the lower 48 states — typically arriving in 2–5 business days. Expedited shipping is available at checkout, and we ship internationally to over 40 countries with duties calculated up front."
            />
            <PolicyCard
              icon={RotateCcw}
              title="Returns & exchanges"
              body="If something isn't right, you have 60 days to return it — no restocking fee, no questions on unused items in original packaging. Cast iron and tools carry a lifetime guarantee against manufacturing defects. Start a return from your account page or email returns@hearthandharbor.com."
            />
            <PolicyCard
              icon={ShieldCheck}
              title="Guarantees & warranty"
              body="Every forged steel tool, cast iron piece, and mechanical watch we sell carries a lifetime guarantee against manufacturing defects. If a piece fails under normal use, we'll repair, replace, or refund it — at our discretion, in your favor."
            />
            <PolicyCard
              icon={Hammer}
              title="Repairs & care"
              body="Cast iron reseasoning, knife sharpening, and watch servicing are available through our Portland workshop. Drop off in person or mail it in — we'll quote the work before we start, and we never replace parts without checking with you first."
            />
          </div>
        </div>
      </section>

      {/* Shipping rates table */}
      <section className="bg-secondary/40 py-12 lg:py-16">
        <div className="container-wide">
          <h2 className="font-serif-display text-2xl font-semibold text-foreground sm:text-3xl">
            Shipping rates & delivery times
          </h2>
          <p className="mt-2 text-[14px] text-muted-foreground">
            Rates shown for standard shipping. Expedited options calculated at checkout.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="w-full text-left text-[14px]">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-5 py-3 font-semibold text-foreground">Destination</th>
                  <th className="px-5 py-3 font-semibold text-foreground">Rate</th>
                  <th className="px-5 py-3 font-semibold text-foreground">Estimated delivery</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="px-5 py-4 text-foreground">Lower 48 states (orders over $75)</td>
                  <td className="px-5 py-4 font-semibold text-primary">Free</td>
                  <td className="px-5 py-4 text-muted-foreground">2–5 business days</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">Lower 48 states (orders under $75)</td>
                  <td className="px-5 py-4 font-semibold text-foreground">$7.95 flat</td>
                  <td className="px-5 py-4 text-muted-foreground">2–5 business days</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">Alaska & Hawaii</td>
                  <td className="px-5 py-4 font-semibold text-foreground">$18.00 flat</td>
                  <td className="px-5 py-4 text-muted-foreground">5–8 business days</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">Canada</td>
                  <td className="px-5 py-4 font-semibold text-foreground">$22.00 (duties incl.)</td>
                  <td className="px-5 py-4 text-muted-foreground">5–10 business days</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">International (40+ countries)</td>
                  <td className="px-5 py-4 font-semibold text-foreground">Calculated at checkout</td>
                  <td className="px-5 py-4 text-muted-foreground">7–14 business days</td>
                </tr>
                <tr>
                  <td className="px-5 py-4 text-foreground">Expedited (1-day, lower 48)</td>
                  <td className="px-5 py-4 font-semibold text-foreground">$24.00 flat</td>
                  <td className="px-5 py-4 text-muted-foreground">1 business day</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Returns process */}
      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <h2 className="font-serif-display text-2xl font-semibold text-foreground sm:text-3xl">
            How to start a return
          </h2>
          <p className="mt-2 max-w-2xl text-[14px] text-muted-foreground">
            Returns take about 5 minutes to initiate and 7–10 business days to process once we receive the item.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            {[
              { step: "1", title: "Start the return", body: "Log in to your account, find the order, and click 'Start a return.' Or email returns@hearthandharbor.com with your order number." },
              { step: "2", title: "Get your label", body: "We'll email a prepaid return label within one business day. International returns use a different process — we'll send instructions." },
              { step: "3", title: "Pack & ship", body: "Pack the item in its original packaging (if possible). Drop off at any UPS location. Tracking is included." },
              { step: "4", title: "Refund issued", body: "Once we receive and inspect the item, we issue a refund to your original payment method within 3 business days. Exchanges ship same-day." },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-border bg-card p-6">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-[13px] font-bold text-primary-foreground">
                  {s.step}
                </div>
                <div className="mt-3 font-serif-display text-lg font-semibold text-foreground">
                  {s.title}
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifetime guarantee section */}
      <section className="bg-primary py-14 text-primary-foreground lg:py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-accent" aria-hidden="true" />
            <h2 className="mt-4 font-serif-display text-3xl font-semibold sm:text-4xl text-balance">
              Our lifetime guarantee
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-primary-foreground/85">
              Every forged steel tool, cast iron piece, and mechanical watch we sell carries a lifetime guarantee against manufacturing defects. If a piece fails under normal use, we&apos;ll repair, replace, or refund it — at our discretion, in your favor. No fine print, no time limits, no restocking fees.
            </p>
            <p className="mt-4 text-[13px] text-primary-foreground/70">
              Have a piece that needs repair? Email{" "}
              <a href="mailto:repairs@hearthandharbor.com" className="font-semibold text-accent underline">
                repairs@hearthandharbor.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="grid gap-4 sm:grid-cols-3">
            <FactCard icon={Clock} title="Ships in 1 business day" body="Orders placed before 1pm ET ship the same day from Portland, Maine." />
            <FactCard icon={Globe} title="40+ countries" body="International shipping with duties calculated up front — no surprise charges on delivery." />
            <FactCard icon={Hammer} title="Repairs available" body="Cast iron reseasoning, knife sharpening, and watch servicing at our Portland workshop." />
          </div>
        </div>
      </section>
    </>
  );
}

function PolicyCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-5 rounded-2xl border border-border bg-card p-6 lg:p-7">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-serif-display text-xl font-semibold text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </div>
  );
}

function FactCard({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <Icon className="h-6 w-6 text-primary" />
      <h3 className="mt-3 font-serif-display text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">{body}</p>
    </div>
  );
}
