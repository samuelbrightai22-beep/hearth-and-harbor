"use client";

import * as React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message sent",
        description: "We'll reply within one business day — usually much sooner.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="We answer our own email."
        description="Questions about a product, an order, or a piece you're trying to fix? Drop us a note — a real person in Portland reads every one and usually replies within a business day."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-12 lg:py-16">
        <div className="container-wide grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: info */}
          <div>
            <h2 className="font-serif-display text-2xl font-semibold text-foreground sm:text-3xl">
              Visit, call, or write.
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">
              118 Harbor Lane is open Tuesday through Saturday. Stop by — most of the online catalog is on display, and our team is happy to walk you through materials, care, and what to choose for your kitchen or workshop.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow
                icon={MapPin}
                title="Visit the store"
                lines={["118 Harbor Lane", "Portland, ME 04101"]}
                note="Open Tue–Sat, 10am–6pm ET"
              />
              <ContactRow
                icon={Mail}
                title="Email us"
                lines={["hello@hearthandharbor.com", "trade@hearthandharbor.com (trade & wholesale)", "returns@hearthandharbor.com (returns)"]}
                note="Replies within 1 business day"
              />
              <ContactRow
                icon={Phone}
                title="Call the shop"
                lines={["(207) 555-0142"]}
                note="Tue–Sat, 10am–6pm ET"
              />
              <ContactRow
                icon={Clock}
                title="Customer service hours"
                lines={["Mon–Fri: 9am–6pm ET", "Sat: 10am–5pm ET", "Sun: Closed"]}
                note="Closed Sundays & major US holidays"
              />
            </div>

            {/* Social */}
            <div className="mt-8 border-t border-border pt-6">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Follow along
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[
                  { icon: Instagram, label: "Instagram", handle: "@hearthandharbor" },
                  { icon: Facebook, label: "Facebook", handle: "/hearthandharbor" },
                  { icon: Twitter, label: "Pinterest", handle: "/hearthand" },
                  { icon: Youtube, label: "YouTube", handle: "@hearthandharbor" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[13px] font-medium text-foreground/80 transition-colors hover:border-primary hover:text-primary"
                  >
                    <s.icon className="h-3.5 w-3.5" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl border border-border bg-card p-6 product-card-shadow lg:p-8">
            <h2 className="font-serif-display text-xl font-semibold text-foreground">
              Send us a message
            </h2>
            <p className="mt-1 text-[13px] text-muted-foreground">
              Required fields marked with *
            </p>
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name *" htmlFor="firstName">
                  <Input id="firstName" name="firstName" required placeholder="Mara" />
                </Field>
                <Field label="Last name *" htmlFor="lastName">
                  <Input id="lastName" name="lastName" required placeholder="Whitfield" />
                </Field>
              </div>
              <Field label="Email address *" htmlFor="email">
                <Input id="email" name="email" type="email" required placeholder="you@email.com" />
              </Field>
              <Field label="Subject" htmlFor="subject">
                <Input id="subject" name="subject" placeholder="What's this about?" />
              </Field>
              <Field label="Order number (if applicable)" htmlFor="order">
                <Input id="order" name="order" placeholder="HH-12345" />
              </Field>
              <Field label="Message *" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us what you need — the more detail, the better."
                />
              </Field>
              <div className="flex items-center justify-between gap-4 pt-2">
                <p className="text-[11px] text-muted-foreground">
                  We&apos;ll never share your email. See our{" "}
                  <a href="/privacy" className="font-semibold text-primary underline">privacy policy</a>.
                </p>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="gap-2 rounded-full"
                >
                  {submitting ? "Sending…" : "Send message"}
                  {!submitting && <ArrowRight className="h-4 w-4" />}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="border-t border-border bg-secondary/40 py-12 lg:py-16">
        <div className="container-wide">
          <div className="rounded-2xl overflow-hidden border border-border bg-card">
            <div className="grid lg:grid-cols-[1fr_2fr]">
              <div className="p-6 lg:p-8">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                  Find us
                </div>
                <h2 className="font-serif-display text-2xl font-semibold text-foreground sm:text-3xl">
                  118 Harbor Lane, Portland, ME
                </h2>
                <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                  Two blocks from the Old Port district, on the corner of Harbor Lane and Fore Street. Street parking is available on Fore Street and the surrounding blocks.
                </p>
                <div className="mt-4 text-[13px] text-muted-foreground">
                  <div className="font-semibold text-foreground">Public transit</div>
                  <div className="mt-1">
                    METRO Husky Line Stop 8 (Fore & Exchange) — 3 minute walk.
                  </div>
                </div>
                <Button asChild variant="outline" className="mt-6 gap-2 rounded-full">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=118+Harbor+Lane+Portland+ME"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="h-4 w-4" /> Open in Google Maps
                  </a>
                </Button>
              </div>
              <div className="relative min-h-[280px] bg-muted">
                <iframe
                  title="Hearth & Harbor location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-70.2650%2C43.6545%2C-70.2500%2C43.6620&layer=mapnik&marker=43.6582%2C-70.2575"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  title,
  lines,
  note,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lines: string[];
  note: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[13px] font-semibold uppercase tracking-wider text-foreground">
          {title}
        </div>
        {lines.map((l) => (
          <div key={l} className="text-[14px] text-foreground/85">
            {l}
          </div>
        ))}
        <div className="mt-0.5 text-[12px] text-muted-foreground">{note}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={htmlFor} className="text-[13px] font-medium text-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
