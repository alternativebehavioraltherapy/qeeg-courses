/**
 * RESOURCES — public downloads and professional organizations.
 *
 * TO ADD A DOWNLOAD: append an object to `downloads`.
 * Put a local file in /public/downloads/ and set `href` to that public path,
 * or set `href` to an external URL and `external: true`.
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

export const wineeg = {
  name: "WinEEG",
  version: "3.17.31",
  href: "https://bio-medical.com/download/WinEEG_3_17_31.zip",
  filename: "WinEEG_3_17_31.zip",
} as const;

export const downloads = [
  {
    id: "double-banana-montage",
    title: "Double-banana montage",
    filename: "Double Banana Montage.mtg",
    href: "/downloads/double-banana-montage.mtg",
    summary:
      "A sensor montage for viewing EEG in the double-banana montage. Load it in WinEEG and it appears as a montage option.",
  },
] as const;

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
