import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type BeeMedicBadgeProps = {
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  description?: string;
  className?: string;
};

const sizeClass = {
  sm: "h-20 w-20",
  md: "h-32 w-32 sm:h-36 sm:w-36",
  lg: "h-28 w-28 sm:h-36 sm:w-36 md:h-44 md:w-44",
} as const;

export function BeeMedicBadge({
  size = "md",
  showLabel = false,
  description,
  className,
}: BeeMedicBadgeProps) {
  const p = site.partners.beemedic;

  return (
    <div
      className={cn(
        "flex items-center gap-3",
        size === "lg" && "flex-col gap-4 text-center sm:flex-row sm:gap-6 sm:text-left",
        className,
      )}
    >
      <img
        src={p.badgeSrc}
        alt={showLabel ? "" : p.badgeAlt}
        className={cn("shrink-0 rounded-md object-contain", sizeClass[size])}
      />
      {showLabel ? (
        <div className="min-w-0">
          {size === "lg" ? (
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
              Official partnership
            </p>
          ) : null}
          <p
            className={cn(
              "font-medium leading-snug text-ink",
              size === "lg"
                ? "mt-1 font-display text-2xl sm:text-3xl md:text-4xl"
                : size === "md"
                  ? "text-base sm:text-lg"
                  : "text-sm",
            )}
          >
            {p.label}
          </p>
          {description ? (
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
