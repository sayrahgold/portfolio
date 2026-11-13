// Your CV content. Add dates, bullets and roles here.
export type Role = {
  title: string;
  company: string;
  location?: string;
  period?: string;
  bullets: string[];
};

export const experience: Role[] = [
  {
    title: "Operations Manager",
    company: "TruePMG",
    period: "2026 — Present",
    bullets: [
      "Run day-to-day operations for a ~40-property short-term rental portfolio across Tennessee, Texas and Indianapolis.",
      "Lead the weekly operations meeting and coordinate cleaners, maintenance teams and virtual assistants.",
      "Write and maintain SOPs, daily reporting and process improvements across guest messaging and housekeeping.",
    ],
  },
  {
    title: "STR Operations",
    company: "Altus Resorts",
    location: "Merritt Island, FL",
    bullets: [
      "Grew a property's occupancy from 38% to 83% in under 30 days.",
      "Managed listings, guest experience and turnover coordination.",
    ],
  },
  {
    title: "Operations & Process Documentation",
    company: "Glory Com Marketing",
    bullets: ["Documented 100+ processes across 14 departments for a marketing operations business."],
  },
  {
    title: "Operations",
    company: "Hunnovate (Digital Agency)",
    bullets: ["Supported cross-functional delivery and internal process setup."],
  },
];

export const skills = [
  "SOP development",
  "Process documentation",
  "Cross-functional coordination",
  "Short-term rental operations",
  "Long- & mid-term rentals",
  "Hostfully · Breezeway · Airbnb",
  "Reporting & KPI tracking",
  "Team & vendor management",
];
