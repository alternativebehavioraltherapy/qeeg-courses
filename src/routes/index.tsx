import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  BookOpen,
  Compass,
  HeartHandshake,
  Scale,
  Stethoscope,
} from "lucide-react";
import { CourseGrid } from "@/components/courses/CourseGrid";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { OwnerImage } from "@/components/media/OwnerImage";
import { PhotoCarousel } from "@/components/media/PhotoCarousel";
import { BeeMedicBadge } from "@/components/partners/BeeMedicBadge";
import { CourseListJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getFeaturedCourses } from "@/data/courses";
import { featuredFaqs } from "@/data/faqs";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "qEEG Courses — Raw Data Interpretation & Neurofeedback Phenotypes",
      description:
        "Practical qEEG and neurofeedback training for clinicians. Learn to read raw EEG, interpret phenotypes, and apply findings with ethical judgment. Taught by Joshua Moore, MA, LMHC, BCN.",
      path: "/",
    }),
  component: Home,
});

const topics = [
  {
    icon: Scale,
    title: "Ethics and competence",
    body: "Side-effects, abreactions, documentation, and the line between what you can train and what you should refer.",
  },
  {
    icon: Stethoscope,
    title: "Practical clinical skills",
    body: "Protocol integration, referral judgment, and using findings inside a real caseload — not a slide deck.",
  },
  {
    icon: Activity,
    title: "qEEG interpretation",
    body: "Raw brainwaves first. Maps are a second language. Phenotypes are how the record starts to mean something.",
  },
  {
    icon: Compass,
    title: "Big-picture application",
    body: "How a finding should change someone’s day — sleep, vigilance, mood, work — not just a z-score on a printout.",
  },
  {
    icon: BookOpen,
    title: "Real skill coaching",
    body: "Demonstrations on actual records. You watch the reading happen, then practice the same moves.",
  },
  {
    icon: HeartHandshake,
    title: "Practical application",
    body: "Case-shaped presentations of uncovered findings, so the theory has somewhere to land.",
  },
];

/**
 * Testimonials are currently anonymous on the existing site.
 * TO REPLACE: swap quote / attribution with named practitioner quotes
 * (with permission) when they are collected.
 */
const testimonials = [
  {
    quote: "We need more content like this.",
    attribution: "Neurofeedback practitioner",
  },
  {
    quote: "I’m excited for more of this course.",
    attribution: "Neurofeedback practitioner",
  },
];

function Home() {
  const featured = getFeaturedCourses();

  return (
    <SiteLayout>
      <CourseListJsonLd />
      <FaqJsonLd />

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Training for working clinicians
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-[3.4rem]">
              Master qEEG raw data interpretation and neurofeedback phenotypes
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Practical training for clinicians who want to read the record —
              not just the map. Phenotypes, ethics, protocol judgment, and
              coaching on real data, taught by {site.instructor.name},{" "}
              {site.instructor.credentials}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button asChild size="lg">
                <a href={site.sales.memberLoginUrl}>Take me to my courses</a>
              </Button>
              <Button asChild size="lg" variant="ink">
                <a
                  href={site.sales.starterBundle}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Enroll in the Early Bundle
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/courses">Browse the catalog</Link>
              </Button>
            </div>
            <div className="mt-8 rounded-xl border border-border bg-surface px-5 py-5 shadow-card sm:px-6">
              <BeeMedicBadge
                size="lg"
                showLabel
                description={`${site.name} is an authorized BeeMedic training partner. We offer training to the highest clinical standard.`}
              />
            </div>
            <p className="mt-5 text-sm text-faint">
              Already purchased? Use Take me to my courses to open the member
              login. New enrollments stay on the existing systeme.io checkout.
            </p>
          </div>
          <div className="lg:col-span-5">
            <PhotoCarousel aspectClass="aspect-[4/3] lg:aspect-[5/6]" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3 sm:px-6">
          <Stat k="~$50 / hour" v="Introductory discount on processed content" />
          <Stat k="Unlimited" v="Access, with course updates included" />
          <Stat k="11 modules" v="Phenotype series — then the $100 / hour rate" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Catalog
            </p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">
              Courses available now
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              A library built to grow — add a class in one data file and it
              appears here and on the catalog page.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/courses">All courses</Link>
          </Button>
        </div>
        <div className="mt-10">
          <CourseGrid items={featured} />
        </div>
      </section>

      <section className="bg-ink text-accent-fg">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-fg/55">
            What we actually teach
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl sm:text-4xl">
            Excellence in the most accurate practices we can defend
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <div key={t.title} className="border-t border-white/15 pt-6">
                <t.icon className="size-5 text-accent-fg/70" />
                <h3 className="mt-4 font-display text-2xl">{t.title}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-accent-fg/70">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
        <OwnerImage
          src={site.instructor.photoSrc}
          alt={site.instructor.photoAlt}
          note="Owner photograph of Joshua Moore, used as the instructor portrait."
          className="aspect-[4/3] rounded-xl shadow-card"
        />
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            Instructor
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">
            {site.instructor.name}
          </h2>
          <p className="mt-1 text-muted">
            {site.instructor.credentials} · {site.instructor.role}
          </p>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">
            {site.instructor.shortBio}
          </p>
          {site.instructor.bio.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 text-[1.05rem] leading-relaxed text-muted">
              {p}
            </p>
          ))}
          <p className="mt-4 text-muted">
            Clinical work continues at{" "}
            <a
              href={site.clinic.url}
              className="text-accent underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.clinic.name}
            </a>{" "}
            in {site.clinic.city}, {site.clinic.region}.
          </p>
          <Button asChild variant="outline" className="mt-6">
            <Link to="/about">Mission and background</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
            From practitioners
          </p>
          <h2 className="mt-3 font-display text-3xl">What people are saying</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.quote}
                className="rounded-xl bg-bg px-7 py-8 shadow-card"
              >
                <p className="font-display text-2xl leading-snug text-ink">
                  “{t.quote}”
                </p>
                <footer className="mt-5 text-sm text-muted">— {t.attribution}</footer>
              </blockquote>
            ))}
          </div>
          <p className="mt-6 text-sm text-faint">
            Named testimonials can replace these anonymous quotes when
            permission is on file.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Questions
        </p>
        <h2 className="mt-3 font-display text-3xl">A short FAQ</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Access, pricing, and how often new modules land. The full list
          lives on the contact page.
        </p>
        <Accordion type="single" collapsible className="mt-6 max-w-3xl">
          {featuredFaqs.map((f) => (
            <AccordionItem key={f.id} value={f.id}>
              <AccordionTrigger>{f.question}</AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteLayout>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <p className="font-display text-2xl text-ink">{k}</p>
      <p className="mt-1 text-sm text-muted">{v}</p>
    </div>
  );
}
