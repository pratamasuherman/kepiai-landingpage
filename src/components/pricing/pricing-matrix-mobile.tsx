"use client";

import { useState } from "react";
import {
  performanceTiers,
  reportSupportLevels,
  priceGrid,
} from "@/data/pricing";
import { Button } from "@/components/ui/button";

export function PricingMatrixMobile() {
  const [openTiers, setOpenTiers] = useState<Record<string, boolean>>({
    starter: true, // open first tier by default
  });

  const toggleTier = (tierId: string) => {
    setOpenTiers((prev) => ({
      ...prev,
      [tierId]: !prev[tierId],
    }));
  };

  return (
    <div className="block md:hidden space-y-4">
      {performanceTiers.map((tier) => {
        const isOpen = !!openTiers[tier.id];

        return (
          <div
            key={tier.id}
            className="rounded-2xl border border-peri/20 bg-white overflow-hidden shadow-sm"
          >
            {/* Accordion Trigger Header */}
            <button
              type="button"
              onClick={() => toggleTier(tier.id)}
              aria-expanded={isOpen}
              aria-controls={`tier-content-${tier.id}`}
              className="w-full p-5 text-left flex items-center justify-between gap-4 bg-paper/30 hover:bg-paper/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-sora font-bold text-navy text-base">
                    {tier.name}
                  </h4>
                  {tier.badge && (
                    <span className="bg-mint/20 text-navy font-mono text-[9px] tracking-[0.08em] uppercase px-2 py-0.5 rounded-full font-bold">
                      {tier.badge}
                    </span>
                  )}
                </div>
                <p className="text-ink/70 text-xs leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div
                className={`w-8 h-8 rounded-full border border-peri/20 flex items-center justify-center text-navy shrink-0 transition-transform duration-250 ${
                  isOpen ? "rotate-180 bg-mint/15" : "bg-white"
                }`}
                aria-hidden="true"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </button>

            {/* Accordion Expanded Content */}
            {isOpen && (
              <div
                id={`tier-content-${tier.id}`}
                className="p-5 divide-y divide-peri/15 border-t border-peri/15 animate-in fade-in duration-200"
              >
                {reportSupportLevels.map((support) => {
                  const price = priceGrid[tier.id]?.[support.id] || "Rp —";

                  return (
                    <div
                      key={`${tier.id}-${support.id}`}
                      className="py-4 first:pt-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <p className="font-sora font-bold text-navy text-sm">
                            {support.name}
                          </p>
                          <p className="text-ink/70 text-xs leading-relaxed mt-0.5">
                            {support.description}
                          </p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-sora font-extrabold text-navy text-lg leading-tight">
                            {price}
                          </p>
                          <span className="font-mono text-ink/60 text-[9px] tracking-[0.08em] uppercase">
                            / month
                          </span>
                        </div>
                      </div>

                      <Button
                        href="#demo"
                        variant="outline-light"
                        className="w-full !py-2 text-xs justify-center font-bold mt-2"
                      >
                        Select {tier.name} + {support.name}
                      </Button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
