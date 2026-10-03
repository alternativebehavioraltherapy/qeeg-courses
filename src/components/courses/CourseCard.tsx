import { ArrowUpRight } from "lucide-react";
import { inquireHref, type Course } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { OwnerImage } from "@/components/media/OwnerImage";

function statusLabel(status: Course["status"]) {
  if (status === "early-access") return "Early access";
  if (status === "coming-soon") return "In development";
  return "Open";
}

export function CourseCard({ course }: { course: Course }) {
  const isExternal = Boolean(course.salesLink);
  const href = course.salesLink ?? inquireHref(course);
  const inDevelopment = course.status === "coming-soon";
  const cta = isExternal ? "View / Enroll" : "Inquire to enroll";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl bg-surface shadow-card">
      <OwnerImage
        src={course.imageSrc}
        alt={course.imageAlt}
        note={course.imageNote}
        fit={course.imageFit ?? "cover"}
        className="aspect-[4/3]"
        imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      />
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="outline">{course.category}</Badge>
          <Badge variant={course.status === "coming-soon" ? "outline" : "default"}>
            {statusLabel(course.status)}
          </Badge>
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-2xl leading-snug text-ink">{course.title}</h3>
          <p className="text-[0.98rem] leading-relaxed text-muted">{course.shortDesc}</p>
        </div>
        <dl className="mt-auto grid gap-1 text-sm text-muted">
          <div className="flex justify-between gap-4">
            <dt className="text-faint">Length</dt>
            <dd className="text-right text-ink-soft">{course.duration}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-faint">Price</dt>
            <dd className="text-right text-ink-soft">{course.priceNote}</dd>
          </div>
        </dl>
        {inDevelopment ? (
          <Button disabled className="w-full">
            In Development
          </Button>
        ) : (
          <Button asChild className="w-full">
            <a
              href={href}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {cta}
              <ArrowUpRight />
            </a>
          </Button>
        )}
      </div>
    </article>
  );
}
