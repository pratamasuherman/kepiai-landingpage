/**
 * Pricing Data Structure
 *
 * All tier names, descriptions, support levels, prices, and FAQ items
 * are centralized here so updating them later is a single-file edit.
 *
 * All prices and copy marked below are placeholders.
 */

export interface PerformanceTier {
  id: string;
  name: string;
  description: string;
  badge?: string;
}

export interface ReportSupportLevel {
  id: string;
  name: string;
  description: string;
}

export interface PricingFAQ {
  id: string;
  question: string;
  answer: string;
}

/* TODO: copy — Header block copy */
export const pricingHeader = {
  eyebrow: "Transparent combinations",
  title: "Simple, modular pricing.",
  subhead:
    "Choose your Performance Intelligence tier, then pair it with the Report Generator support level that fits your team's workflow.",
};

/* TODO: copy — Performance tier definitions */
export const performanceTiers: PerformanceTier[] = [
  {
    id: "starter",
    name: "Starter",
    description: "For solo creators and small UMKMs tracking essential core channels.",
  },
  {
    id: "growth",
    name: "Growth",
    description: "For growing brands with multi-channel campaigns and active audiences.",
    badge: "Popular",
  },
  {
    id: "pro",
    name: "Pro",
    description: "For established marketing teams managing high-volume content operations.",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For agencies and large brands requiring custom connectors and governance.",
  },
];

/* TODO: copy — Report Support level definitions */
export const reportSupportLevels: ReportSupportLevel[] = [
  {
    id: "self-serve",
    name: "Self-Serve",
    description: "Automated templates and one-click PPTX/PDF exports.",
  },
  {
    id: "guided",
    name: "Guided",
    description: "Monthly analyst walkthrough and tailored reporting insights.",
  },
  {
    id: "full-service",
    name: "Full-Service",
    description: "Dedicated analyst reporting, bespoke decks, and strategic reviews.",
  },
];

/**
 * 4x3 Combination Price Grid
 * Keyed by [performanceTierId][reportSupportLevelId]
 * Every cell's placeholder value is strictly "Rp —"
 */
export const priceGrid: Record<string, Record<string, string>> = {
  starter: {
    "self-serve": "Rp —",
    guided: "Rp —",
    "full-service": "Rp —",
  },
  growth: {
    "self-serve": "Rp —",
    guided: "Rp —",
    "full-service": "Rp —",
  },
  pro: {
    "self-serve": "Rp —",
    guided: "Rp —",
    "full-service": "Rp —",
  },
  enterprise: {
    "self-serve": "Rp —",
    guided: "Rp —",
    "full-service": "Rp —",
  },
};

/* TODO: copy — Pricing FAQs */
export const pricingFaqs: PricingFAQ[] = [
  {
    id: "faq-1",
    question: "Can I change my Performance tier or Report Support level later?",
    answer:
      "Yes. You can upgrade, downgrade, or switch your combination at the start of any billing cycle directly from your account settings.",
  },
  {
    id: "faq-2",
    question: "What channels and platforms are supported?",
    answer:
      "Kepiai connects with Instagram, TikTok, YouTube, Facebook, LinkedIn, and custom CSV imports. Higher tiers support additional connectors and custom integrations.",
  },
  {
    id: "faq-3",
    question: "How does the Guided vs. Full-Service report support work?",
    answer:
      "Guided includes scheduled monthly review sessions with a social analytics specialist. Full-Service provides end-to-end report preparation, commentary, and presentation decks ready to share with stakeholders.",
  },
  {
    id: "faq-4",
    question: "Is there a free trial or onboarding demo available?",
    answer:
      "We offer a 14-day trial of our Self-Serve plans and personalized walkthrough demos for teams evaluating Guided and Full-Service options.",
  },
];
