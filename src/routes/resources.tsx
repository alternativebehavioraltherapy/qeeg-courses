import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { downloads, organizations, standardsOfCare } from "@/data/resources";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  head: () =>
    pageHead({
      title: "Resources",
      description:
        "Neurofeedback Society standards of care, a downloadable WinEEG double-banana montage, and links to AAPB, ISNR, IQCB, and BCIA.",
      path: "/resources",
    }),
  component: ResourcesPage,
});

const wineegSteps = [
  "Open WinEEG.",
  "Go to Setup.",
  "Choose Montage List…",
  "Choose Load.",
  "Select the downloaded file. It will appear as a montage option in WinEEG.",
];

function ResourcesPage() {
  const montage = downloads[0];

  return (
    <SiteLayout>
      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Resources
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl">
          Standards, tools, and professional bodies
        </h1>

        <section className="mt-12 overflow-hidden rounded-xl bg-surface shadow-card">
          <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-12">
            <div className="flex justify-center lg:col-span-5">
              <img
                src={standardsOfCare.logoSrc}
                alt={standardsOfCare.logoAlt}
                className="w-full max-w-sm rounded-lg bg-white object-contain p-4 outline-none"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Endorsed by this teaching program
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                {standardsOfCare.name}
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
                qEEG Courses endorses the standards of care published by the{" "}
                {standardsOfCare.organization}. Read them before you change a
                protocol, write a report, or describe what the record can and
                cannot show.
              </p>
              <div className="mt-6">
                <Button asChild size="lg" className="h-12 px-6">
                  <a
                    href={standardsOfCare.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open neurofeedbacksoc.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl">Double-banana montage for WinEEG</h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            {montage.summary} Download the file, then load it inside WinEEG.
            Do not rename it if you want the montage title to stay
            “Double Banana.”
          </p>
          <ol className="mt-6 grid max-w-2xl gap-3">
            {wineegSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-[1.02rem] leading-relaxed">
                <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg">
                  {index + 1}
                </span>
                <span className="pt-0.5 text-ink-soft">{step}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8">
            <Button asChild size="lg" className="h-12 px-6">
              <a href={montage.href} download={montage.filename}>
                <Download />
                Download {montage.filename}
              </a>
            </Button>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl">Professional organizations</h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
            These are the societies and certification boards clinicians in this
            work usually need to know. Each link leaves this site.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {organizations.map((org) => (
              <li key={org.id} className="rounded-xl bg-surface p-6 shadow-card">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  {org.name}
                </p>
                <h3 className="mt-2 font-display text-2xl">{org.fullName}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{org.summary}</p>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  {org.url.replace(/^https:\/\//, "")}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </SiteLayout>
  );
}
