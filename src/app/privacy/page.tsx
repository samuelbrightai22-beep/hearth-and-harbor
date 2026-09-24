import { PageHeader } from "@/components/site/page-header";

export const metadata = {
  title: "Privacy Policy — Hearth & Harbor",
  description: "How Hearth & Harbor collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy policy"
        description="Last updated: January 1, 2026. We collect as little information as possible to fulfill your orders and run our business."
        crumbs={[{ label: "Privacy Policy" }]}
      />
      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl space-y-8 text-[15px] leading-relaxed text-foreground/80">
            <Section title="1. What we collect">
              <p>
                We collect information you provide directly — your name, email, shipping address, and payment information when you place an order. We also collect browsing data (pages visited, time on site) through privacy-respecting analytics that do not use cross-site tracking cookies.
              </p>
              <p className="mt-3">
                We do not sell your personal information to third parties. We do not share your email with marketing partners. Period.
              </p>
            </Section>
            <Section title="2. How we use your information">
              <p>We use your information to:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Fulfill orders, including shipping and returns</li>
                <li>Communicate with you about your order</li>
                <li>Send our Sunday Dispatch newsletter (only if you opt in — you can unsubscribe at any time)</li>
                <li>Improve our website and product selection</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Section>
            <Section title="3. Payment processing">
              <p>
                Payment information is processed by Shopify Payments and is never stored on our servers. We never see or store your full credit card number. Chargebacks and refunds are handled through your card issuer and Shopify Payments.
              </p>
            </Section>
            <Section title="4. Cookies">
              <p>
                We use essential cookies for the cart and checkout to function. We use analytics cookies to understand aggregate site usage. You can disable cookies in your browser — the cart will still work, but site analytics will be limited.
              </p>
            </Section>
            <Section title="5. Your rights">
              <p>
                Under GDPR and CCPA, you have the right to access, correct, or delete the personal information we hold about you. To exercise these rights, email privacy@hearthandharbor.com. We&apos;ll respond within 30 days.
              </p>
            </Section>
            <Section title="6. Data retention">
              <p>
                We retain order information for 7 years (for tax and warranty purposes). Email newsletter subscriptions are retained until you unsubscribe. Browsing data is anonymized after 90 days.
              </p>
            </Section>
            <Section title="7. Third-party services">
              <p>We work with the following third parties who process data on our behalf:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li><strong>Shopify</strong> — e-commerce platform and payment processing</li>
                <li><strong>USPS, UPS</strong> — shipping carriers</li>
                <li><strong>Klaviyo</strong> — email newsletter delivery</li>
                <li><strong>Google Analytics</strong> — aggregate site analytics (anonymized)</li>
              </ul>
            </Section>
            <Section title="8. Contact">
              <p>
                Questions about privacy? Email{" "}
                <a href="mailto:privacy@hearthandharbor.com" className="font-semibold text-primary underline">
                  privacy@hearthandharbor.com
                </a>{" "}
                or write to us at 118 Harbor Lane, Portland, ME 04101.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif-display text-xl font-semibold text-foreground sm:text-2xl">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
