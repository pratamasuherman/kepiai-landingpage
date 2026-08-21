import type { Metadata } from "next";
import { pricingHeader } from "@/data/pricing";
import { Reveal } from "@/components/reveal";
import { QuizCallout } from "@/components/pricing/quiz-callout";
import { PricingMatrixDesktop } from "@/components/pricing/pricing-matrix-desktop";
import { PricingMatrixTablet } from "@/components/pricing/pricing-matrix-tablet";
import { PricingMatrixMobile } from "@/components/pricing/pricing-matrix-mobile";
import { PricingFAQ } from "@/components/pricing/pricing-faq";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore transparent 4x3 modular combinations of Performance Intelligence and Report Generator.",
  openGraph: {
    title: "Pricing | Kepiai",
    description:
      "Explore transparent 4x3 modular combinations of Performance Intelligence and Report Generator.",
    url: "https://kepiai.com/pricing",
    siteName: "Kepiai",
    type: "website",
    locale: "id_ID",
  },
};

export default function PricingPage() {
  return (
    <div className="bg-paper min-h-screen pt-32 pb-24 md:pt-36">
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Header block */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <Reveal>
            <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase mb-4 font-semibold">
              {pricingHeader.eyebrow}
            </p>
            <h1 className="font-sora font-extrabold text-navy text-[36px] md:text-[48px] leading-[1.1] mb-5">
              {pricingHeader.title}
            </h1>
            <p className="text-ink/70 text-[16px] md:text-[17px] leading-relaxed">
              {pricingHeader.subhead}
            </p>
          </Reveal>
        </div>

        {/* Persistent Quiz Affordance Callout */}
        <QuizCallout />

        {/* 3 Responsive Matrix Modes */}
        <Reveal>
          {/* Mode 1: Desktop (≥1024px) */}
          <PricingMatrixDesktop />

          {/* Mode 2: Tablet (768–1023px) */}
          <PricingMatrixTablet />

          {/* Mode 3: Mobile (<768px) */}
          <PricingMatrixMobile />
        </Reveal>

        {/* FAQ Section */}
        <PricingFAQ />
      </div>
    </div>
  );
}
