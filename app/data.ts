export type Project = {
  n: string;
  title: string;
  blurb: string;
  url: string;
  tag: string;
  year: string;
};

export type ExperienceEntry = {
  year: string;
  company: string;
  role: string;
  note: string;
  tag: string;
};

export type Stat = {
  value: string;
  label: string;
};

export const PROJECTS: Project[] = [
  {
    n: "01",
    title: "Googoobear",
    blurb:
      "A library of original short stories for kids — read-aloud-friendly, illustrated.",
    url: "googoobear.com",
    tag: "Product",
    year: "2025",
  },
  {
    n: "02",
    title: "Grateful",
    blurb: "Social app for daily gratitude. Shipped to App Store + Play Store.",
    url: "grateful.so",
    tag: "Mobile",
    year: "2025",
  },
  {
    n: "03",
    title: "Dials",
    blurb: "Helping independent watch stores spin up bespoke storefronts.",
    url: "dials.dev",
    tag: "Client",
    year: "2024",
  },
  {
    n: "04",
    title: "starter-mini-app",
    blurb: "Zero-config scaffold for shipping mini apps fast. Open source.",
    url: "npm · github",
    tag: "DevTool",
    year: "2024",
  },
  {
    n: "05",
    title: "Mini App Assets",
    blurb: "Free, drop-in asset library for mini app developers.",
    url: "miniappassets.com",
    tag: "DevTool",
    year: "2024",
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    year: "2025 →",
    company: "Coinbase",
    role: "Technical Lead · Base Privacy",
    note: "Leading private onchain payments rails for Fortune 500 clients. Launched Base Verify.",
    tag: "now",
  },
  {
    year: "2023–25",
    company: "Ironfish",
    role: "Staff Software Engineer",
    note: "Led the bridge integration that unlocked cross-chain liquidity — directly contributed to the Coinbase acquisition.",
    tag: "acquired → Coinbase",
  },
  {
    year: "2021–23",
    company: "Fire",
    role: "Co-Founder · Lead Engineer",
    note: "Scaled 0 → 100K weekly actives. Built all product + infra. Incubated at Atomic.",
    tag: "acquired → Kerberus",
  },
  {
    year: "2018–21",
    company: "Ridgeline",
    role: "Technical Lead · Accounting",
    note: "15th employee. Built the double-entry accounting platform that scaled to $80B AUM.",
    tag: "now 500+ people",
  },
];

export const STATS: Stat[] = [
  { value: "2", label: "startups · both acquired" },
  { value: "0→1", label: "what I do best" },
];
