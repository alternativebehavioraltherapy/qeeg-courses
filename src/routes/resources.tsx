import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  libraryGroups,
  organizations,
  standardsOfCare,
  type LibraryItem,
} from "@/data/resources";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/resources")({
  head: () =>
    pageHead({
      title: "Resources",
      description:
        "QEEG Courses has adopted the proposed Neurofeedback SOC standards. Mentor-to-mentee medication notes, WinEEG, the double-banana montage, and links to AAPB, ISNR, IQCB, and BCIA.",
      path: "/resources",
    }),
  component: ResourcesPage,
});

function StepList({ steps }: { steps: readonly string[] }) {
  return (
    <ol className="mt-4 grid gap-3">
      {steps.map((step, index) => (
        <li key={step} className="flex gap-3 text-sm leading-relaxed">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-accent-fg">
            {index + 1}
          </span>
          <span className="pt-0.5 text-ink-soft">{step}</span>
        </li>
      ))}
    </ol>
  );
}

function DownloadLink({ item, label }: { item: LibraryItem; label: string }) {
  return (
    <Button
      asChild
      size="lg"
      className="mt-5 h-auto min-h-12 w-full whitespace-normal py-3 text-center sm:w-auto"
    >
      <a
        href={item.href}
        {...(item.external
          ? {}
          : { download: item.filename })}
      >
        <Download />
        {label}
      </a>
    </Button>
  );
}

function ResourcesPage() {
  return (
    <SiteLayout>
      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Resources
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl">
          Standards, tools, and references
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          The standards this program teaches from, the files used in class,
          and the organizations clinicians in this work usually need.
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

        <div className="mt-8 grid gap-8">
          {libraryGroups.map((group) => (
            <section
              key={group.id}
              className="rounded-xl bg-surface p-6 shadow-card sm:p-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                {group.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl">{group.title}</h2>
              <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ink-soft">
                {group.intro}
              </p>

              {group.disclaimer ? (
                <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink">
                  {group.disclaimer}
                </p>
              ) : null}

              <ul
                className={
                  group.items.length > 1
                    ? "mt-8 grid gap-4 lg:grid-cols-2"
                    : "mt-8 grid gap-4"
                }
              >
                {group.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex flex-col rounded-lg border border-border bg-bg p-5 sm:p-6"
                  >
                    <h3 className="font-display text-2xl">{item.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                      {item.summary}
                    </p>
                    {item.steps ? (
                      <div className="mt-4">
                        {item.stepsTitle ? (
                          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
                            {item.stepsTitle}
                          </p>
                        ) : null}
                        <StepList steps={item.steps} />
                      </div>
                    ) : null}
                    <DownloadLink item={item} label={`Download ${item.filename}`} />
                  </li>
                ))}
              </ul>

              {group.useSteps ? (
                <div className="mt-8 border-t border-border pt-8">
                  <h3 className="font-display text-2xl">{group.useTitle}</h3>
                  <StepList steps={group.useSteps} />
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <section className="mt-8">
          <h2 className="font-display text-3xl">Professional organizations</h2>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
            Each link leaves this site.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {organizations.map((org) => (
              <li
                key={org.id}
                className="flex flex-col rounded-xl bg-surface p-6 shadow-card"
              >
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
