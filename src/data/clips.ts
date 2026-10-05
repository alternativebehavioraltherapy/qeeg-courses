/**
 * =============================================================================
 * COURSE CLIPS — YouTube promo / sample videos
 * =============================================================================
 *
 * TO ADD A CLIP:
 *   1. Append an object to `clips` below. Copy an existing one.
 *   2. `youtubeId` is the v= value (e.g. watch?v=dKL1D1OYFdQ → dKL1D1OYFdQ).
 *   3. Optional `relatedHref` sends viewers to a sales page or /courses.
 *   4. Do not add empty placeholder entries. The page maps this array only.
 *
 * The /clips page is the only consumer. Header + footer just link here.
 * =============================================================================
 */

export type CourseClip = {
  id: string;
  youtubeId: string;
  title: string;
  summary: string;
  relatedHref?: string;
  relatedLabel?: string;
};

export const clips: CourseClip[] = [
  {
    id: "phenotypes-orientation-promo",
    youtubeId: "dKL1D1OYFdQ",
    title: "Phenotypes Orientation Promo",
    summary:
      "A short introduction to the orientation module for the phenotypes series — why individual patterns matter more than a DSM label.",
    relatedHref: "https://qeeg.systeme.io/earlymemberupgrade",
    relatedLabel: "Early bundle",
  },
  {
    id: "phenotypes-foundations-series",
    youtubeId: "qrWpntOjbII",
    title: "Neurofeedback Phenotypes: Foundations Series",
    summary:
      "Promo for the initial Foundations block: raw-data reading, phenotype categories, and the longer series still being built.",
    relatedHref: "https://qeeg.systeme.io/earlymemberupgrade",
    relatedLabel: "Early bundle",
  },
  {
    id: "beelab-intro-ad",
    youtubeId: "aOhroyYQozY",
    title: "BeeLab Intro Advertisement",
    summary:
      "Skills-level introduction to BeeLab software and clinic practice — hardware, clean technique, and training that holds a high clinical standard.",
    relatedHref: "https://qeeg.systeme.io/beelaborder",
    relatedLabel: "BeeLab course",
  },
];
