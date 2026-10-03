/**
 * Owner photographs and teaching stills used in the site carousel.
 * Logos are excluded. Add new owner images here to appear on Home and About.
 */
export type GallerySlide = {
  src: string;
  alt: string;
  caption: string;
  fit?: "cover" | "contain";
};

export const gallery: GallerySlide[] = [
  {
    src: "/images/joshua-moore.jpg",
    alt: "Joshua Moore wearing EEG sensors while holding a young child also fitted with sensors during a clinic session.",
    caption: "Joshua Moore, MA, LMHC, BCN",
  },
  {
    src: "/images/clinic-5Q8A0108.png",
    alt: "Joshua Moore at the clinic desk reviewing multi-channel EEG on two monitors.",
    caption: "Reading the record in clinic",
  },
  {
    src: "/images/clinic-5Q8A0143.png",
    alt: "Joshua Moore teaching from a laptop with EEG traces visible during a live session.",
    caption: "Teaching from the raw record",
  },
  {
    src: "/images/clinic-5Q8A0296.jpg",
    alt: "Joshua Moore presenting qEEG material with EEG traces projected behind him.",
    caption: "Workshop presentation",
  },
  {
    src: "/images/clinic-5Q8A0257.png",
    alt: "Joshua Moore teaching at a laptop with EEG traces on the display.",
    caption: "Live software walkthrough",
  },
  {
    src: "/images/clinic-electrode-application.jpg",
    alt: "Joshua Moore applying an EEG electrode at the scalp in the clinic.",
    caption: "Electrode application",
  },
  {
    src: "/images/clinic-357A6539.jpg",
    alt: "Close clinic photograph of EEG sensor placement during a session.",
    caption: "Sensor placement",
  },
  {
    src: "/images/eeg-waveform-display.png",
    alt: "Multi-channel EEG traces on a clinic monitor.",
    caption: "Multi-channel EEG display",
  },
  {
    src: "/images/brain-maps-monitors.jpg",
    alt: "Wall of qEEG topographic maps and connectivity plots on clinic monitors.",
    caption: "Maps as a second language",
  },
  {
    src: "/images/wineeg-double-banana.png",
    alt: "WinEEG double-banana montage showing bipolar channels of raw EEG.",
    caption: "WinEEG double-banana montage",
    fit: "contain",
  },
  {
    src: "/images/raw-theta-hibeta.png",
    alt: "Raw EEG referential montage with the Fz channel highlighted.",
    caption: "Raw data — Fz highlighted",
    fit: "contain",
  },
  {
    src: "/images/eeg-annotated-screenshot.jpg",
    alt: "Annotated EEG software screenshot with marked segments.",
    caption: "Annotated software still",
    fit: "contain",
  },
  {
    src: "/images/faa-alpha-topo.png",
    alt: "Frontal alpha asymmetry topographic map from a qEEG recording.",
    caption: "Frontal alpha asymmetry map",
    fit: "contain",
  },
  {
    src: "/images/spectra-rds.png",
    alt: "Electrode spectral plots showing frequency power by channel.",
    caption: "Spectral plots",
    fit: "contain",
  },
  {
    src: "/images/transients-averaged.png",
    alt: "Teaching still of averaged transients in EEG software.",
    caption: "Averaged transients",
    fit: "contain",
  },
];
