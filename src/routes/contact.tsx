import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/faqs";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead({
      title: "Contact and FAQ",
      description:
        "Reach qEEG Courses and Alternative Behavioral Therapy. Phone, email, and answers on pricing, access, languages, and mentoring.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <FaqJsonLd />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl">
          Write, call, or read the full FAQ
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Course questions go to {site.instructor.name}. Clinic questions go
          to the office. Mentoring and language requests are welcome at either
          address.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <dl className="grid gap-6">
              <Item label="Phone">
                <a href={site.contact.phoneHref} className="text-ink hover:text-accent">
                  {site.contact.phone}
                </a>
              </Item>
              <Item label="Course support">
                <a
                  href={`mailto:${site.contact.supportEmail}`}
                  className="text-ink hover:text-accent"
                >
                  {site.contact.supportEmail}
                </a>
              </Item>
              <Item label="Office">
                <a
                  href={`mailto:${site.contact.officeEmail}`}
                  className="text-ink hover:text-accent"
                >
                  {site.contact.officeEmail}
                </a>
              </Item>
              <Item label="Clinic">
                <p>
                  {site.clinic.address}
                  <br />
                  {site.clinic.city}, {site.clinic.region} {site.clinic.postal}
                </p>
                <a
                  href={site.clinic.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-accent underline-offset-4 hover:underline"
                >
                  {site.clinic.url.replace("https://", "")}
                </a>
              </Item>
            </dl>
          </div>
          <div className="overflow-hidden rounded-xl bg-surface shadow-card lg:col-span-6">
            <iframe
              title={`Map of ${site.clinic.name}`}
              className="h-72 w-full border-0 lg:h-full min-h-72"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=3000%20SE%20164th%20Ave%20Suite%20108%20Vancouver%20WA%2098683&z=14&output=embed"
            />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-3xl">Frequently asked questions</h2>
          <Accordion type="single" collapsible className="mt-6 max-w-3xl">
            {faqs.map((f) => (
              <AccordionItem key={f.id} value={f.id}>
                <AccordionTrigger>{f.question}</AccordionTrigger>
                <AccordionContent>{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </SiteLayout>
  );
}

function Item({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <dt className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
        {label}
      </dt>
      <dd className="mt-1 text-lg">{children}</dd>
    </div>
  );
}
