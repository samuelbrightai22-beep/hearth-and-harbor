import { PageHeader } from "@/components/site/page-header";

export const metadata = {
  title: "Terms of Service — Hearth & Harbor",
  description: "The terms under which Hearth & Harbor LLC operates this website and fulfills orders.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of service"
        description="Last updated: January 1, 2026. These terms govern your use of hearthandharbor.com and the products we sell."
        crumbs={[{ label: "Terms of Service" }]}
      />
      <section className="py-12 lg:py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl space-y-8 text-[15px] leading-relaxed text-foreground/80">
            <Section title="1. About us">
              <p>
                Hearth & Harbor LLC (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a Maine limited liability company, headquartered at 118 Harbor Lane, Portland, ME 04101. Our storefront is open Tuesday through Saturday, 10am–6pm ET.
              </p>
            </Section>
            <Section title="2. Using this site">
              <p>
                You may use this site for personal, non-commercial shopping. You may not scrape content, resell products without our written consent (see our trade program), or use automated tools to monitor the site. We reserve the right to refuse service to anyone for any lawful reason.
              </p>
            </Section>
            <Section title="3. Pricing & availability">
              <p>
                Prices are listed in US dollars and are subject to change without notice. We make every effort to display accurate pricing and availability, but errors happen. If we cannot fulfill an order at the listed price, we will cancel the order and refund your payment in full.
              </p>
            </Section>
            <Section title="4. Orders">
              <p>
                All orders are subject to acceptance and availability. We reserve the right to decline or cancel any order. If your order is cancelled after payment, we will issue a full refund within 3 business days.
              </p>
              <p className="mt-3">
                Orders ship within 1 business day from Portland, Maine. Free standard shipping on orders over $75 within the lower 48 states — see our shipping & returns policy for full details.
              </p>
            </Section>
            <Section title="5. Returns & warranty">
              <p>
                60-day returns on unused items in original packaging. Cast iron, forged steel tools, and mechanical watches carry a lifetime guarantee against manufacturing defects. See our shipping & returns policy for full details on the return process.
              </p>
            </Section>
            <Section title="6. Product information">
              <p>
                We make every effort to display accurate product information — materials, dimensions, country of origin, and care instructions. Minor variations are expected in hand-made products (pottery, leather, wood). Colors may appear slightly different in person due to monitor calibration.
              </p>
            </Section>
            <Section title="7. Intellectual property">
              <p>
                All content on this site — including product photography, written copy, and the Hearth & Harbor logo — is owned by Hearth & Harbor LLC or used with permission. You may not reproduce, distribute, or use this content without our written consent.
              </p>
            </Section>
            <Section title="8. Limitation of liability">
              <p>
                Hearth & Harbor LLC is not liable for indirect, incidental, or consequential damages arising from the use of our products. Our total liability for any claim is limited to the purchase price of the product(s) in question.
              </p>
            </Section>
            <Section title="9. Governing law">
              <p>
                These terms are governed by the laws of the State of Maine, USA. Any disputes will be resolved in the courts of Cumberland County, Maine.
              </p>
            </Section>
            <Section title="10. Changes to these terms">
              <p>
                We may update these terms from time to time. The &quot;last updated&quot; date at the top of this page reflects the most recent revision. Continued use of the site after changes constitutes acceptance of the new terms.
              </p>
            </Section>
            <Section title="11. Contact">
              <p>
                Questions about these terms? Email{" "}
                <a href="mailto:hello@hearthandharbor.com" className="font-semibold text-primary underline">
                  hello@hearthandharbor.com
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
