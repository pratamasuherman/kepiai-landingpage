import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "Pricing — Kepiai",
  description: "Transparent pricing matrices for Kepiai analytics and report generation.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col flex-1 pt-32 pb-24 px-6 bg-paper">
      <div className="max-w-container mx-auto text-center flex flex-col items-center">
        <Reveal>
          <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase mb-4">
            Transparent Combinations
          </p>
          <h1 className="font-sora font-extrabold text-navy text-4xl sm:text-5xl mb-6">
            Pricing
          </h1>
          <p className="text-ink/70 max-w-lg mb-8 leading-relaxed">
            Pricing content — Prompt 2 will implement the 4×3 combination matrix
            with desktop grid, tablet sticky scroll, and mobile accordion views.
          </p>
          <Button variant="primary">Find Your Kepi Match</Button>
        </Reveal>
      </div>
    </div>
  );
}
