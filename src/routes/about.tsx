import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PhotoCarousel } from "@/components/media/PhotoCarousel";
import { BeeMedicBadge } from "@/components/partners/BeeMedicBadge";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead({
      title: "About and mission",
      description:
        "High-quality, accessible qEEG and neurofeedback education. Meet Joshua Moore, MA, LMHC, BCN, and the mission behind Alternative Behavioral Therapy’s course library.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  const r = site.contentRoadmap;

  return (
    <SiteLayout>
      <article className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Mission
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl sm:text-5xl">
          High-quality training, made as accessible as we can make it
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          We want more clinicians to read raw EEG well, understand phenotypes,
          and use those findings without abandoning the person in front of
          them. Quality first. Then reach — languages, price, community, and
          a publishing cadence we can actually keep.
        </p>

        <div className="mt-12">
          <PhotoCarousel />
        </div>

        <section className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 flex items-center gap-4">
              <img
                src={site.instructor.photoSrc}
                alt={site.instructor.photoAlt}
                className="size-16 rounded-full object-cover object-[30%_20%] shadow-card sm:size-20"
              />
              <div>
                <h2 className="font-display text-3xl">The instructor</h2>
                <p className="mt-1 text-muted">
                  {site.instructor.name}, {site.instructor.credentials} ·{" "}
                  {site.instructor.role}
                </p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-ink-soft">
              <p>{site.instructor.shortBio}</p>
              {site.instructor.bio.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={site.clinic.url} target="_blank" rel="noopener noreferrer">
                  Visit the clinic
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${site.contact.supportEmail}`}>Course support</a>
              </Button>
            </div>
          </div>
          <aside className="rounded-xl bg-surface p-7 shadow-card lg:col-span-5">
            <h3 className="font-display text-2xl">Content roadmap</h3>
            <dl className="mt-6 grid gap-4 text-sm">
              <Row k="Processed content ready" v={`${r.hoursReady} hours`} />
              <Row k="Mapped, not yet recorded" v={`${r.hoursMapped} hours`} />
              <Row k="Lecture planned" v={`More than ${r.hoursPlanned} hours`} />
              <Row
                k="Publishing target"
                v={`About ${r.monthlyTargetHours} hours / month`}
              />
              <Row k="Language goal" v={`Dubbing and captions, up to ${r.languagesPlanned}`} />
              <Row k="New courses" v={r.newCourseCadence} />
            </dl>
          </aside>
        </section>

        <section className="mt-16 rounded-xl border border-border bg-surface px-6 py-8 shadow-card sm:px-10 sm:py-10">
          <BeeMedicBadge
            size="lg"
            showLabel
            description={`${site.name} is an authorized BeeMedic training partner. We offer BeeLab and clinic-skills training to the highest clinical standard — that standard is ours to keep, not a manufacturer’s to set.`}
          />
          <p className="mt-6 max-w-3xl text-[1.05rem] leading-relaxed text-ink-soft">
            The partnership means students learn BeeLab in the context of a
            working clinic: hardware, clean technique, documentation, and
            protocol judgment. The {site.partners.beemedic.label} badge is
            earned; the teaching still answers to the record and the person
            in the chair.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a
                href={site.sales.beelabLanding}
                target="_blank"
                rel="noopener noreferrer"
              >
                BeeLab course
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/clips">Watch course clips</Link>
            </Button>
          </div>
        </section>

        <section className="mt-20 border-t border-border pt-16">
          <h2 className="font-display text-3xl">How we intend to matter</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-display text-2xl">Raw data first</h3>
              <p className="mt-3 text-muted">
                Maps are downstream. If you cannot see the rhythm in the
                record, a database comparison will not save the protocol. We
                teach the eye before we teach the software.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl">Access without dilution</h3>
              <p className="mt-3 text-muted">
                Introductory pricing is $50 per hour of processed content —
                a discount from the planned $100 per hour after the 11
                phenotype modules are finished. Access is unlimited. Language
                support is on the roadmap. Periodic free live workshops are
                for people already in the library.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl">A community that reads</h3>
              <p className="mt-3 text-muted">
                Peer consultation space, group mentoring by request, and a
                plan for CE after the Foundations series is complete. We will
                not trade standards for speed.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-xl bg-ink px-7 py-10 text-accent-fg sm:px-10">
          <h2 className="font-display text-3xl">Promo sessions</h2>
          <p className="mt-3 max-w-2xl text-accent-fg/75">
            Short orientation films already exist for the phenotypes
            Foundations series and the BeeLab intro. Embed the owner’s videos
            here when the preferred host URLs are confirmed.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <VideoSlot
              title="Orientation promo"
              note="Replace with the 3-minute phenotypes Orientation Module promo (owner video)."
            />
            <VideoSlot
              title="Foundations series"
              note="Replace with the ~15-minute Phenotypes Foundations Series promo (owner video)."
            />
            <VideoSlot
              title="BeeLab intro"
              note="Replace with the 3-minute BeeLab Intro and Clinic Skills promo (owner video)."
            />
          </div>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-3xl">The clinic and the workshops</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Teaching grew out of the Vancouver practice. The photographs in
            the gallery above are owner images from sessions, workshops, and
            the room where the records are actually read.
          </p>
        </section>

        <section className="mt-20">
          <h2 className="font-display text-3xl">Get involved</h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            Speakers, mentors, and distributors who share the standard are
            welcome. The stronger the response to the library, the more time
            can go into the next hundred hours.
          </p>
          <Button asChild className="mt-6">
            <a href={`mailto:${site.contact.supportEmail}?subject=Collaboration`}>
              Write about a collaboration
            </a>
          </Button>
        </section>
      </article>
    </SiteLayout>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
      <dt className="text-muted">{k}</dt>
      <dd className="text-right font-medium text-ink">{v}</dd>
    </div>
  );
}

function VideoSlot({ title, note }: { title: string; note: string }) {
  return (
    <div className="rounded-lg border border-white/15 bg-white/5 p-5">
      <p className="font-medium">{title}</p>
      {/* REPLACE WITH OWNER'S VIDEO: {note} */}
      <p className="mt-2 text-sm leading-relaxed text-accent-fg/60">{note}</p>
    </div>
  );
}
