import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  downloads,
  organizations,
  standardsOfCare,
  wineeg,
} from "@/data/resources";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  head: () =>
    pageHead({
      title: "Resources",
      description:
        "QEEG Courses has adopted the proposed Neurofeedback SOC standards. Download WinEEG, load the double-banana montage, and find AAPB, ISNR, IQCB, and BCIA.",
      path: "/resources",
    }),
  component: ResourcesPage,
});

const installSteps = [
  "Download the zip.",
  "Unzip it on your computer.",
  "Open the setup program in that folder and follow the prompts.",
  "Start WinEEG when the installer finishes.",
];

const montageSteps = [
  "In WinEEG, go to Setup.",
  "Choose Montage List…",
  "Choose Load.",
  "Select the downloaded file. It appears as a montage option.",
];

function StepList({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="mt-5 grid gap-3">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-3 leading-relaxed">
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-medium text-accent-fg">
            {index + 1}
          </span>
          <span className="pt-0.5 text-ink-soft">{step}</span>
        </li>
      ))}
    </ol>
  );
}

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
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          The standards this program teaches from, the WinEEG files used in
          class, and the organizations clinicians in this work usually need.
        </p>

        <section className="mt-12 rounded-xl bg-surface p-6 shadow-card sm:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-12">
            <div className="flex justify-center lg:col-span-5">
              <img
                src={standardsOfCare.logoSrc}
                alt={standardsOfCare.logoAlt}
                className="w-full max-w-sm rounded-lg bg-white object-contain p-4 outline-none"
              />
            </div>
            <div className="lg:col-span-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                Standards of care
              </p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                {standardsOfCare.name}
              </h2>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink-soft">
                QEEG Courses supports the adoption of standards in the field
                and has adopted the proposed standards from{" "}
                {standardsOfCare.organization}.
              </p>
              <div className="mt-6">
                <Button asChild size="lg">
                  <a
                    href={standardsOfCare.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read the standards
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-surface p-6 shadow-card sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Software
          </p>
          <h2 className="mt-3 font-display text-3xl">WinEEG</h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
            Version {wineeg.version}, from Bio-Medical. Download the zip, then
            install it before you load the montage below.
          </p>

          <div className="mt-8 grid gap-10 border-t border-border pt-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl">Install</h3>
              <StepList steps={installSteps} />
              <div className="mt-6">
                <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal py-3 text-center">
                  <a href={wineeg.href}>
                    <Download />
                    Download WinEEG {wineeg.version}
                  </a>
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl">Double-banana montage</h3>
              <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
                {montage.summary}
              </p>
              <StepList steps={montageSteps} />
              <div className="mt-6">
                <Button asChild size="lg" className="h-auto min-h-12 whitespace-normal py-3 text-center">
                  <a href={montage.href} download={montage.filename}>
                    <Download />
                    Download the montage
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-3xl">Professional organizations</h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
            Each link leaves this site.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {organizations.map((org) => (
              <li key={org.id} className="flex flex-col rounded-xl bg-surface p-6 shadow-card">
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-accent">
                  {org.name}
                </p>
                <h3 className="mt-2 font-display text-2xl">{org.fullName}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {org.summary}
                </p>
                <a
                  href={org.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex break-all text-sm font-medium text-accent underline-offset-4 hover:underline"
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
