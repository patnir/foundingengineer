import type { ReactNode } from "react";

export type Project = {
  n: string;
  title: string;
  blurb: string;
  url: string;
  href?: string;
  tag: string;
  year: string;
};

export type ExperienceEntry = {
  year: string;
  company: string;
  role: string;
  note: ReactNode;
  tag: string;
  href?: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type CapabilityItem = {
  label: string;
  meta: string;
};

export type CapabilityGroup = {
  title: string;
  items: CapabilityItem[];
};

const inlineLinkStyle: React.CSSProperties = {
  color: "var(--accent)",
  textDecoration: "underline",
  textUnderlineOffset: 2,
};

export const PROJECTS: Project[] = [
  {
    n: "01",
    title: "Grateful",
    blurb: "Social app for daily gratitude. Shipped to App Store + Play Store.",
    url: "grateful.so",
    href: "https://grateful.so",
    tag: "Mobile",
    year: "2025",
  },
  {
    n: "02",
    title: "Dials",
    blurb: "Helping independent watch stores spin up bespoke storefronts.",
    url: "dials.dev",
    href: "https://dials.dev",
    tag: "Client",
    year: "2024",
  },
  {
    n: "03",
    title: "Googoobear",
    blurb:
      "A library of original short stories for kids — read-aloud-friendly, illustrated.",
    url: "googoobear.com",
    href: "https://googoobear.com",
    tag: "Product",
    year: "2025",
  },
  {
    n: "04",
    title: "starter-mini-app",
    blurb: "Zero-config scaffold for shipping mini apps fast. Open source.",
    url: "npm",
    href: "https://www.npmjs.com/package/starterminiapp",
    tag: "DevTool",
    year: "2024",
  },
  {
    n: "05",
    title: "Mini App Assets",
    blurb: "Free, drop-in asset library for mini app developers.",
    url: "miniappassets.com",
    href: "https://miniappassets.com",
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
    href: "https://www.coinbase.com/blog/Coinbase-acquires-team-to-accelerate-privacy-efforts-on-Base",
  },
  {
    year: "2023–25",
    company: "Ironfish",
    role: "Staff Software Engineer",
    note: "Led the bridge integration that unlocked cross-chain liquidity — directly contributed to the Coinbase acquisition.",
    tag: "acquired → Coinbase",
    href: "https://ironfish.network/",
  },
  {
    year: "2021–23",
    company: "Fire",
    role: "Co-Founder · Lead Engineer",
    note: (
      <>
        Scaled 0 → 100K weekly actives. Built all product + infra. Incubated at{" "}
        <a
          href="https://www.atomic.vc/"
          target="_blank"
          rel="noopener noreferrer"
          style={inlineLinkStyle}
        >
          Atomic
        </a>
        .
      </>
    ),
    tag: "acquired → Kerberus",
    href: "https://www.kerberus.com/articles/fire/",
  },
  {
    year: "2018–21",
    company: "Ridgeline",
    role: "Technical Lead · Accounting",
    note: "15th employee. Built the double-entry accounting platform that scaled to $80B AUM.",
    tag: "now 500+ people",
    href: "https://ridgeline.ai/",
  },
];

export const STATS: Stat[] = [
  { value: "2", label: "startups · both acquired" },
  { value: "0→1", label: "what I do best" },
];

export const CAPABILITIES: CapabilityGroup[] = [
  {
    title: "Build",
    items: [
      { label: "Web apps", meta: "React · Next · Remix" },
      { label: "iOS apps", meta: "Swift · React Native" },
      { label: "Android apps", meta: "Kotlin · React Native" },
      { label: "Mac apps", meta: "Swift" },
      { label: "Mini apps", meta: "Farcaster · Base" },
    ],
  },
  {
    title: "Design",
    items: [
      { label: "Product UI", meta: "Figma · Tailwind" },
      { label: "Brand & marks", meta: "Identity · type" },
      { label: "Image gen", meta: "GPT · Midjourney" },
      { label: "Prototypes", meta: "Clickable · animated" },
    ],
  },
  {
    title: "Integrate",
    items: [
      { label: "Shopify", meta: "Storefronts · apps" },
      { label: "QuickBooks", meta: "Accounting · sync" },
      { label: "Stripe", meta: "Payments · subs" },
      { label: "AI providers", meta: "OpenAI · Anthropic" },
      { label: "Auth & email", meta: "Clerk · Postmark" },
    ],
  },
  {
    title: "Store",
    items: [
      { label: "Databases", meta: "Postgres · SQLite" },
      { label: "Files & images", meta: "S3 · R2 · CDN" },
      { label: "Vectors", meta: "pgvector · Pinecone" },
      { label: "Search", meta: "Typesense · Meili" },
    ],
  },
];
