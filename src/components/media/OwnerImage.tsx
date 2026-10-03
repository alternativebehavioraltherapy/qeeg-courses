import { cn } from "@/lib/utils";

/**
 * OwnerImage
 * ----------
 * Photographs and teaching stills belong to Joshua Moore / ABT.
 * Files live in /public/images/. Prefer owner technical stills and
 * clinic photographs — do not invent stock portraits.
 *
 * TO SWAP AN IMAGE:
 *   1. Add the file to /public/images/.
 *   2. Update `src` on the course (src/data/courses.ts) or the page.
 *   3. Keep `note` accurate so future editors know what the shot shows.
 */
type OwnerImageProps = {
  src: string;
  alt: string;
  note: string;
  fit?: "cover" | "contain";
  className?: string;
  imgClassName?: string;
};

export function OwnerImage({
  src,
  alt,
  note,
  fit = "cover",
  className,
  imgClassName,
}: OwnerImageProps) {
  return (
    <figure className={cn("relative overflow-hidden bg-surface-2", className)}>
      <img
        src={src}
        alt={alt}
        title={note}
        className={cn(
          "h-full w-full",
          fit === "contain" ? "object-contain p-3" : "object-cover",
          imgClassName,
        )}
      />
    </figure>
  );
}
