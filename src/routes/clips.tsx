import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { clips } from "@/data/clips";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/clips")({
  head: () =>
    pageHead({
      title: "Course Clips",
      description:
        "Watch short qEEG Courses clips: phenotypes orientation, the Foundations series, and BeeLab intro. Then open the full catalog.",
      path: "/clips",
    }),
  component: ClipsPage,
});

function ClipsPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Course Clips
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl">
          Watch a few minutes, then open the catalog
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Short promos from the live courses. These are samples — enrollment
          stays on the existing sales pages.
        </p>

        <div className="mt-8">
          <Button asChild size="lg" className="h-14 px-8 text-base sm:text-lg">
            <Link to="/courses">
              Go to the course catalog
              <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-12">
          {clips.map((clip) => (
            <article key={clip.id} className="grid gap-5 lg:grid-cols-12">
              <div className="overflow-hidden rounded-xl bg-ink shadow-card lg:col-span-7">
                <div className="relative aspect-video">
                  <iframe
                    title={clip.title}
                    src={`https://www.youtube-nocookie.com/embed/${clip.youtubeId}`}
                    className="absolute inset-0 h-full w-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <h2 className="font-display text-2xl sm:text-3xl">{clip.title}</h2>
                <p className="mt-3 text-[1.05rem] leading-relaxed text-muted">
                  {clip.summary}
                </p>
                {clip.relatedHref ? (
                  <Button asChild variant="outline" className="mt-5">
                    <a
                      href={clip.relatedHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {clip.relatedLabel ?? "Related course"}
                    </a>
                  </Button>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-16 rounded-xl bg-surface p-8 text-center shadow-card">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Library
          </p>
          <h2 className="mt-3 font-display text-3xl">More to come</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            New clips land here as modules are published. The catalog is the
            place to enroll.
          </p>
          <Button asChild size="lg" className="mt-6 h-14 px-8 text-base">
            <Link to="/courses">
              Browse all courses
              <ArrowRight />
            </Link>
          </Button>
        </aside>
      </section>
    </SiteLayout>
  );
}
