import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { CourseListJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import { courses, PRICE_GUIDANCE } from "@/data/courses";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/courses")({
  head: () =>
    pageHead({
      title: "Course catalog",
      description:
        "Browse qEEG and neurofeedback courses: phenotypes Foundations series, BeeLab clinic skills, practical software, and raw-data interpretation. Enroll on existing systeme.io sales pages.",
      path: "/courses",
    }),
  component: CoursesPage,
});

function CoursesPage() {
  const categories = useMemo(() => {
    const set = new Set(courses.map((c) => c.category));
    return ["All", ...Array.from(set)];
  }, []);
  const [filter, setFilter] = useState("All");
  const items =
    filter === "All" ? courses : courses.filter((c) => c.category === filter);

  return (
    <SiteLayout>
      <CourseListJsonLd />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Catalog
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl">
          Courses in qEEG, phenotypes, and clinical software
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          {PRICE_GUIDANCE} Each enroll button opens the live systeme.io sales
          page when one exists. Nothing here processes a payment.
        </p>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter by series">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "inline-flex h-10 items-center rounded-full border px-4 text-sm font-medium transition-colors",
                filter === cat
                  ? "border-ink bg-ink text-accent-fg"
                  : "border-border-strong bg-transparent text-ink hover:bg-surface-2",
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10">
          <CourseGrid items={items} />
        </div>

        {/*
          EDITOR NOTE — do not put “how to add a class” copy on this page.
          To add a course: append an object in src/data/courses.ts (see the
          header comment there). Home + this grid update automatically.
        */}
        <aside className="mt-16 rounded-xl bg-surface p-8 shadow-card">
          <h2 className="font-display text-2xl">Early-member discounts</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Early members receive the best discounts until all future modules
            are fully completed. Those offers are sent by email. If you have
            lost access to the email, cannot find it (check spam), or need
            help with an admin issue, write to{" "}
            <a
              href={`mailto:${site.contact.officeEmail}`}
              className="text-accent underline-offset-4 hover:underline"
            >
              {site.contact.officeEmail}
            </a>
            .
          </p>
          <Button asChild className="mt-6">
            <a href={`mailto:${site.contact.officeEmail}?subject=Early member offer or admin help`}>
              Email the office
            </a>
          </Button>
        </aside>
      </section>
    </SiteLayout>
  );
}
