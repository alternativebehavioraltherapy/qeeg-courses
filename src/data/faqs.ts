/**
 * FAQs used on Home (subset) and /contact (full list).
 * TO EDIT: change copy here; both pages stay in sync.
 */

export type Faq = {
  id: string;
  question: string;
  answer: string;
  featured?: boolean;
};

export const faqs: Faq[] = [
  {
    id: "cadence",
    question: "How often do new courses come out?",
    answer:
      "New courses are released every 1–3 months. That cadence may increase as the library grows. More than 100 hours of lecture are planned; the current target is about 3 hours of processed content per month.",
    featured: true,
  },
  {
    id: "length",
    question: "How long are the courses?",
    answer:
      "Most individual courses are 1–4 hours. Some belong to a longer series — the phenotypes Foundations work, for example, can extend past 40 hours as modules are added.",
    featured: true,
  },
  {
    id: "cost",
    question: "How much do the courses cost?",
    answer:
      "Introductory pricing is $50 USD per hour of processed content. After the 11 phenotype modules are finished, the rate is expected to rise to about $100 per hour. Limited early-member bundles are priced separately when they are open.",
    featured: true,
  },
  {
    id: "access",
    question: "How long do I have access to the material?",
    answer:
      "Access is unlimited. You keep the material you purchased, including updates to those courses.",
    featured: true,
  },
  {
    id: "updates",
    question: "What happens if the material is updated?",
    answer:
      "Updates to courses you own are included at no extra charge. Unlimited access means you do not lose the library when a module is revised.",
    featured: true,
  },
  {
    id: "pricing-window",
    question: "Will the $50-per-hour rate last?",
    answer:
      "The $50-per-hour price is an introductory discount on processed content. Once the 11 phenotype modules are finished, the planned rate is about $100 per hour.",
  },
  {
    id: "languages",
    question: "Do you offer other languages?",
    answer:
      "The aim is to expand into as many as 21 languages with dubbing and closed captions where they can be produced well. Request what you need at joshua.moore@altbehtherapy.com — language support is added when it is available, at no extra charge.",
  },
  {
    id: "who",
    question: "Who are these courses for?",
    answer:
      "Licensed clinicians and neurofeedback practitioners who want practical skill beyond a basic didactic — especially those who want to read raw EEG, understand phenotypes, and apply findings with ethical judgment.",
  },
  {
    id: "ceu",
    question: "Will these courses offer CE or CEU credit?",
    answer:
      "CE / CEU integration is planned after the initial Foundations series is complete. Standards will be retained as speaking talent and accreditation are added.",
  },
  {
    id: "mentoring",
    question: "Is mentoring available?",
    answer:
      "Affordable group mentoring is offered periodically. Inquire at joshua.moore@altbehtherapy.com. Early members also receive access to peer consultation forums.",
  },
];

export const featuredFaqs = faqs.filter((f) => f.featured);
