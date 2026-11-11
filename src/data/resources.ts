/**
 * RESOURCES — standards, downloads, and professional organizations.
 *
 * TO ADD A FILE: put it in /public/downloads/, then append an item to the
 * right group in `libraryGroups`. It shows up as a card. No page edit.
 *   Required: id, title, summary, href, filename
 *   Optional: steps, stepsTitle, external (true when href is not on this site)
 * Clinical teaching notes belong in the "clinical" group so they inherit
 * the shared disclaimer and the “before you use them” steps.
 *
 * TO ADD AN ORGANIZATION: append an object to `organizations`.
 */

export const standardsOfCare = {
  name: "Standards of Care in Neurofeedback",
  organization: "Neurofeedback SOC",
  url: "https://neurofeedbacksoc.com",
  logoSrc: "/images/neurofeedback-soc.png",
  logoAlt:
    "SoC mark — Standards of Care in Neurofeedback, Neurofeedback Society.",
} as const;

export type LibraryItem = {
  id: string;
  title: string;
  summary: string;
  href: string;
  filename: string;
  external?: boolean;
  stepsTitle?: string;
  steps?: readonly string[];
};

export type LibraryGroup = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  disclaimer?: string;
  useTitle?: string;
  useSteps?: readonly string[];
  items: readonly LibraryItem[];
};

const wineegInstallSteps = [
  "Download the zip.",
  "Unzip it on your computer.",
  "Open the setup program in that folder and follow the prompts.",
  "Start WinEEG when the installer finishes.",
] as const;

const montageSteps = [
  "In WinEEG, go to Setup.",
  "Choose Montage List…",
  "Choose Load.",
  "Select the downloaded file. It appears as a montage option.",
] as const;

export const libraryGroups: readonly LibraryGroup[] = [
  {
    id: "clinical",
    eyebrow: "Clinical references",
    title: "Medication and the record",
    intro:
      "Two lists passed from mentor to mentee. One notes observed medication effects on the qEEG. The other estimates how long most of a medication may remain, from how fast half of it leaves.",
    disclaimer:
      "These documents were passed from mentor to mentee. They are teaching notes, not a standard of care and not medical advice. Do not use them without adequate training, consultation, and a careful look at your scope of practice.",
    useTitle: "Before you use them",
    useSteps: [
      "Use them only under consultation and supervision, and only after specific training in qEEG and in how medications can show up on a record.",
      "Stay inside your license and scope of practice. These lists do not authorize you to start, stop, or change a medication.",
      "Treat each line as something to consider, then confirm the drug, dose, and timing with the prescriber and with the record in front of you.",
      "If a name or a number does not match a current source, do not use that line.",
    ],
    items: [
      {
        id: "med-list-2",
        title: "Med List 2.0",
        summary:
          "Observed medication effects on the qEEG: class, possible EEG changes, side effects, and half-life. A clue to check against the record, not a finding and not a reason to change a prescription.",
        href: "/downloads/med-list-2.0.pdf",
        filename: "Med List 2.0.pdf",
      },
      {
        id: "five-half-lives",
        title: "Medications: five half-lives",
        summary:
          "A rough window of about five half-lives: how long until most of a medication may have left the system, based on how fast half of it leaves. Not the half-life itself, and not a washout order.",
        href: "/downloads/medications-five-half-lives.pdf",
        filename: "Medications 5 Times Half-Life.pdf",
      },
    ],
  },
  {
    id: "software",
    eyebrow: "Software",
    title: "WinEEG",
    intro:
      "Version 3.17.31, from Bio-Medical. Install the program, then load the double-banana montage.",
    items: [
      {
        id: "wineeg-installer",
        title: "WinEEG 3.17.31",
        summary: "The installer zip. Unzip it, then run the setup program inside.",
        href: "https://bio-medical.com/download/WinEEG_3_17_31.zip",
        filename: "WinEEG_3_17_31.zip",
        external: true,
        stepsTitle: "Install",
        steps: wineegInstallSteps,
      },
      {
        id: "double-banana-montage",
        title: "Double-banana montage",
        summary:
          "A sensor montage for viewing EEG in the double-banana montage. Load it in WinEEG and it appears as a montage option.",
        href: "/downloads/double-banana-montage.mtg",
        filename: "Double Banana Montage.mtg",
        stepsTitle: "Load the montage",
        steps: montageSteps,
      },
    ],
  },
];

export const organizations = [
  {
    id: "aapb",
    name: "AAPB",
    fullName: "Association for Applied Psychophysiology and Biofeedback",
    url: "https://www.aapb.org",
    summary:
      "The professional society for applied psychophysiology and biofeedback. Membership, meetings, and practice resources for clinicians in the field.",
  },
  {
    id: "isnr",
    name: "ISNR",
    fullName: "International Society for Neuroregulation and Research",
    url: "https://isnr.org",
    summary:
      "The international society for neurofeedback and neuroregulation research, education, and clinical practice.",
  },
  {
    id: "iqcb",
    name: "IQCB",
    fullName: "International QEEG Certification Board",
    url: "https://iqcb.org",
    summary:
      "Board certification in quantitative EEG. Credentials include QEEG-T, QEEG-D, and QEEG-DL for technologists and diplomates who meet education and training standards.",
  },
  {
    id: "bcia",
    name: "BCIA",
    fullName: "Biofeedback Certification International Alliance",
    url: "https://www.bcia.org",
    summary:
      "Certification in biofeedback and neurofeedback. BCN marks board certification in neurofeedback. Certification is not a license to practice.",
  },
] as const;
