/**
 * =============================================================================
 * SITE CONFIG — qEEG Courses (qeegcourses.com)
 * =============================================================================
 * Edit contact details, SEO defaults, and external URLs here.
 *
 * HYBRID ARCHITECTURE (read this first):
 *   This custom site is the marketing / information layer only.
 *   All purchases happen on existing systeme.io sales pages.
 *   Never add a checkout, cart, or payment form here.
 *
 *   After publish, the owner points the GoDaddy domain (www) at this
 *   host. Sales and login stay on systeme.io hostnames, not on www paths.
 *   Keep salesLink values as full https://qeeg.systeme.io/... URLs
 *   (member login is https://systeme.io/en/login).
 *
 * FORMS:
 *   This site does not collect emails. Course support is a mailto to
 *   joshua.moore@altbehtherapy.com. Do not add a fake newsletter box.
 *
 * MEMBER AREA:
 *   "Take me to my courses" / "My courses" must open the systeme.io
 *   member login (site.sales.memberLoginUrl), never a custom login page.
 *
 * PARTNERSHIP:
 *   Authorized BeeMedic Training Partner is a primary marketing claim.
 *   Show the badge on the home hero (below the CTAs) and on About.
 *   Do not put it in the header next to the qEEG Courses logo.
 *   Copy must not say the manufacturer sets the training standard.
 * =============================================================================
 */

export const site = {
  name: "qEEG Courses",
  legalName: "Alternative Behavioral Therapy, INC",
  tagline: "Practical qEEG and neurofeedback training for clinicians.",
  url: "https://www.qeegcourses.com",
  locale: "en-US",

  instructor: {
    name: "Joshua Moore",
    credentials: "MA, LMHC, BCN",
    role: "President",
    photoSrc: "/images/joshua-moore.jpg",
    photoAlt:
      "Joshua Moore wearing EEG sensors while holding a young child also fitted with sensors during a clinic session.",
    shortBio:
      "Joshua Moore, MA, LMHC, BCN, is a licensed mental health counselor and board-certified neurofeedback clinician with twenty years in mental health. He teaches qEEG from the raw record outward — phenotypes, protocol judgment, and the ethics of actually using the data with people.",
    bio: [
      "He has been mentored extensively by Jay Gunkelman and Dr. Lisa Black. That apprenticeship sits behind how he reads a record and how he teaches other clinicians to do the same.",
      "Twenty years in mental health, and deep work across a wide range of neurofeedback approaches — including amplitude training, infra-low frequency (ILF) since 2013, qEEG-informed protocols, and phenotype-based reading. Clinic work integrates talk therapy, EMDR, and Internal Family Systems when the record is not the whole story.",
      "He owns and operates Alternative Behavioral Therapy in Vancouver, Washington, consults on qEEG and neurofeedback internationally, and mentors qualifying clinicians. He is the author of Neurofeedback For All: A Beginner’s Introduction. Clinical inquiries belong on the clinic site. Course questions belong here.",
    ],
  },

  clinic: {
    name: "Alternative Behavioral Therapy",
    url: "https://neurofeedbackcare.com/",
    address: "3000 SE 164th Ave Suite 108",
    city: "Vancouver",
    region: "WA",
    postal: "98683",
    country: "US",
  },

  contact: {
    phone: "1-360-553-1350",
    phoneHref: "tel:+13605531350",
    officeEmail: "office@altbehtherapy.com",
    supportEmail: "joshua.moore@altbehtherapy.com",
  },

  /**
   * Known systeme.io sales / member URLs.
   * Add new sales pages here as they are published, then reference them
   * from a course in src/data/courses.ts.
   */
  sales: {
    starterBundle: "https://qeeg.systeme.io/starterdiscount",
    beelabLanding: "https://qeeg.systeme.io/beelaborder",
    /**
     * systeme.io member-area login — returning students use this
     * to open courses they already purchased.
     */
    memberLoginUrl: "https://systeme.io/en/login",
  },

  partners: {
    beemedic: {
      name: "BeeMedic",
      label: "Authorized BeeMedic Training Partner",
      badgeSrc: "/images/beemedic-authorized-partner.png",
      badgeAlt:
        "Authorized BeeMedic Training Partner badge — qEEG Courses is an official BeeMedic training partner.",
    },
  },

  social: {
    /**
     * TO SET: add public profiles when ready.
     * Example: youtube: "https://www.youtube.com/@..."
     */
    youtube: "",
  },

  contentRoadmap: {
    hoursReady: 5,
    hoursMapped: 5,
    hoursPlanned: 100,
    monthlyTargetHours: 3,
    languagesPlanned: 21,
    newCourseCadence: "every 1–3 months",
  },
} as const;

export type SiteConfig = typeof site;
