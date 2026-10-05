/**
 * =============================================================================
 * COURSES DATA — the only file you need to edit to add a new class
 * =============================================================================
 *
 * TO ADD A NEW COURSE (the 15-class growth path):
 *   1. Append a new object to `courses` below. Copy an existing entry.
 *   2. Give it a unique `id` (kebab-case, never reuse).
 *   3. If a systeme.io sales page exists, set `salesLink` to the full URL.
 *      If not yet, set salesLink to `null`.
 *      status: "open" + no salesLink → “Inquire” mailto to joshua.moore@altbehtherapy.com
 *      status: "coming-soon" → disabled “In Development” button (no email)
 *   4. Drop the course image in /public/images/ and set `imageSrc`.
 *      Prefer owner technical stills (WinEEG, maps, raw traces) or clinic
 *      photographs already in that folder.
 *   5. Set `featured: true` to also show it on the Home preview (max ~3
 *      featured looks best). Set `status: "coming-soon"` for planned modules.
 *
 * The Home preview and /courses grid both read from this array.
 * No other files need to change for a new class.
 * Do not put editor instructions on the public Courses page.
 *
 * The Home preview and /courses grid both read from this array.
 * No other files need to change for a new class.
 *
 * Do NOT build checkout here. Purchases stay on systeme.io.
 * =============================================================================
 */

import { site } from "@/data/site";

export type CourseStatus = "open" | "early-access" | "coming-soon";

export type CourseModule = {
  title: string;
  duration: string;
  summary: string;
};

export type Course = {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  duration: string;
  priceNote: string;
  /** Full URL to the systeme.io sales page, or null if none yet. */
  salesLink: string | null;
  category: string;
  imageSrc: string;
  imageAlt: string;
  /**
   * What the photograph shows — kept so future editors know why this
   * asset was chosen. Not a "replace later" instruction anymore.
   */
  imageNote: string;
  /** Use "contain" for software screenshots / maps so they are not cropped. */
  imageFit?: "cover" | "contain";
  featured: boolean;
  status: CourseStatus;
  modules?: CourseModule[];
};

export const PRICE_GUIDANCE =
  "Introductory pricing is $50 USD per hour of processed content — a discount from the planned $100 per hour after the 11 phenotype modules are finished. Individual courses are often 1–4 hours; some series reach 40+ hours. Access is unlimited.";

export const courses: Course[] = [
  {
    id: "phenotypes-foundations-early-bundle",
    title: "Phenotypes: Foundations Series — Early Bundle",
    shortDesc:
      "Orientation plus three core modules on low-voltage fast, frontal lobe disturbances, and frontal alpha asymmetries — raw-data walkthroughs included.",
    longDesc:
      "The Foundation series is the starting path for clinicians who want to become excellent at qEEG and neurofeedback phenotypes. Eleven phenotype modules are planned. You learn the theory, how to identify each pattern in the raw record, the relevant research, treatment considerations, and you watch real data being read. Early members receive exclusive content, early access to future modules, peer consultation space, and discounted mentoring options. Introductory pricing of $50 per processed hour holds until those eleven modules are finished; the planned rate after that is about $100 per hour. Access is unlimited.",
    duration: "About 10 hours",
    priceNote: "$350 limited-time early bundle (50% off)",
    salesLink: "https://qeeg.systeme.io/starterdiscount",
    category: "Foundations",
    imageSrc: "/images/clinic-5Q8A0094.jpg",
    imageAlt:
      "Glass teaching head fitted with a red-and-blue EEG cap — used for the Introduction to qEEG Phenotypes early-member bundle.",
    imageNote:
      "Owner photograph 5Q8A0094. Course card for the phenotypes early bundle.",
    imageFit: "cover",
    featured: true,
    status: "early-access",
    modules: [
      {
        title: "Orientation Module",
        duration: "1 hour",
        summary: "Review of all phenotypes and the theory that holds the series together.",
      },
      {
        title: "Low-Voltage Fast Module",
        duration: "3 hours",
        summary:
          "Theory, identification, research, treatment, and a real-data walkthrough.",
      },
      {
        title: "Frontal Lobe Disturbances Module",
        duration: "3.5 hours",
        summary:
          "Theory, training, vigilance considerations, research, and a real-data walkthrough.",
      },
      {
        title: "Frontal Alpha Asymmetries Module",
        duration: "2.5 hours",
        summary:
          "Theory, symptom presentation, training options, research, and a real-data walkthrough.",
      },
    ],
  },
  {
    id: "beelab-intro-clinic-skills",
    title: "BeeLab Intro and Clinic Skills",
    shortDesc:
      "A practical introduction to BeeLab software and the clinic skills needed to use it with real clients.",
    longDesc:
      "Software only helps if it is used with judgment. This course introduces BeeLab in the context of a working clinic: how to move through the tool without losing the clinical thread, how to keep documentation clean, and how to turn software output back into decisions a person can actually sit with.",
    duration: "3 hours",
    priceNote: "$50 / processed hour (intro rate)",
    salesLink: "https://qeeg.systeme.io/beelaborder",
    category: "Software",
    imageSrc: "/images/clinic-5Q8A0257-beelab.jpg",
    imageAlt:
      "Joshua Moore applying an EEG electrode at the scalp during a clinic session — Intro to BeeLab course photograph.",
    imageNote:
      "Owner photograph 5Q8A0257. Course card for BeeLab Intro and Clinic Skills.",
    imageFit: "cover",
    featured: true,
    status: "open",
  },
  {
    id: "vigilance-sleep-neuro-markers",
    title: "Vigilance and Sleep Neuro-Markers",
    shortDesc:
      "Stay tuned! Planned module on vigilance and sleep markers in the raw record and how those findings inform training.",
    longDesc:
      "A planned module on identifying vigilance and sleep neuro-markers, the research behind them, and how to use those findings without losing the clinical picture.",
    duration: "To be announced",
    priceNote: "$50 / processed hour (intro rate)",
    salesLink: null,
    category: "Phenotypes",
    imageSrc: "/images/clinic-5Q8A0113.jpg",
    imageAlt:
      "Hands preparing conductive paste in the cups of a red-and-purple EEG cap — recording setup for vigilance and sleep work.",
    imageNote:
      "Owner photograph 5Q8A0113. Course card for Vigilance and Sleep Neuro-Markers.",
    imageFit: "cover",
    featured: false,
    status: "coming-soon",
  },
  {
    id: "ptsd-history-theory-research",
    title: "PTSD: History, Theory, Research, and Applications",
    shortDesc:
      "Stay tuned! Planned module on the history, theory, research, and clinical applications of qEEG and neurofeedback in PTSD.",
    longDesc:
      "A planned module covering how PTSD has been understood, what the research actually shows, and how qEEG findings can be applied with judgment in the room.",
    duration: "To be announced",
    priceNote: "$50 / processed hour (intro rate)",
    salesLink: null,
    category: "Clinical Applications",
    imageSrc: "/images/clinic-5Q8A0108.png",
    imageAlt:
      "Joshua Moore at the clinic desk reviewing multi-channel EEG on two monitors — clinical application of the record.",
    imageNote:
      "Owner clinic photograph 5Q8A0108. Reviewing records for clinical application work such as PTSD.",
    imageFit: "cover",
    featured: false,
    status: "coming-soon",
  },
  {
    id: "rare-neuro-markers",
    title: "Rare Neuro-Markers: Theory, Research, and Application",
    shortDesc:
      "Stay tuned! Planned module on uncommon EEG markers — how to recognize them, what the literature says, and when they change a protocol.",
    longDesc:
      "A planned module on rare neuro-markers: theory, supporting research, and how to apply an uncommon finding without over-reading it.",
    duration: "To be announced",
    priceNote: "$50 / processed hour (intro rate)",
    salesLink: null,
    category: "Phenotypes",
    imageSrc: "/images/clinic-5Q8A0229.jpg",
    imageAlt:
      "Wall of qEEG topographic maps and connectivity plots on clinic monitors — used to locate uncommon neuro-markers.",
    imageNote:
      "Owner photograph 5Q8A0229. Course card for Rare Neuro-Markers.",
    imageFit: "cover",
    featured: false,
    status: "coming-soon",
  },
  {
    id: "qeeg-recordings-skills-standards",
    title: "QEEG Recordings: Skills and Standards",
    shortDesc:
      "Stay tuned! Planned module on how to acquire a clean qEEG — montage, impedance, artifact, and the standards that make a record usable.",
    longDesc:
      "A planned module on recording skills and standards: clean acquisition, montage choices, and the habits that keep a qEEG defensible.",
    duration: "To be announced",
    priceNote: "$50 / processed hour (intro rate)",
    salesLink: null,
    category: "Recordings",
    imageSrc: "/images/wineeg-double-banana.png",
    imageAlt:
      "WinEEG double-banana montage showing bipolar channels of raw EEG — teaching frame for recording montage standards.",
    imageNote:
      "Owner WinEEG still (WinEEGDoubleBanana.png). Recording montage and acquisition standards.",
    imageFit: "contain",
    featured: false,
    status: "coming-soon",
  },
];

export function getFeaturedCourses() {
  return courses.filter((c) => c.featured);
}

export function getCourseById(id: string) {
  return courses.find((c) => c.id === id);
}

export function inquireHref(course: Course) {
  const subject = encodeURIComponent(`Inquiry: ${course.title}`);
  return `mailto:${site.contact.supportEmail}?subject=${subject}`;
}
