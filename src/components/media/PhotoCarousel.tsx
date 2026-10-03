import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { gallery, type GallerySlide } from "@/data/gallery";
import { cn } from "@/lib/utils";

type PhotoCarouselProps = {
  slides?: GallerySlide[];
  className?: string;
  aspectClass?: string;
};

export function PhotoCarousel({
  slides = gallery,
  className,
  aspectClass = "aspect-[4/3] sm:aspect-[16/10]",
}: PhotoCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = slides.length;
  const slide = slides[index];

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => (i + dir + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused || total < 2) return;
    const id = window.setInterval(() => go(1), 6500);
    return () => window.clearInterval(id);
  }, [go, paused, total]);

  if (!slide) return null;

  return (
    <div
      className={cn("relative overflow-hidden rounded-xl bg-ink shadow-card", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={cn("relative w-full", aspectClass)}>
        {slides.map((s, i) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-500",
              s.fit === "contain" ? "object-contain bg-ink p-4" : "object-cover",
              i === index ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-4 pb-4 pt-16">
        <p className="text-sm font-medium text-accent-fg">{slide.caption}</p>
        <p className="mt-0.5 text-xs text-accent-fg/60">
          {index + 1} / {total}
        </p>
      </div>

      {total > 1 ? (
        <>
          <button
            type="button"
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-ink shadow-card"
            onClick={() => go(-1)}
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-bg/90 text-ink shadow-card"
            onClick={() => go(1)}
          >
            <ChevronRight className="size-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  i === index ? "w-5 bg-accent-fg" : "w-1.5 bg-accent-fg/40",
                )}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
