"use client";

import {
  performanceTiers,
  reportSupportLevels,
  priceGrid,
} from "@/data/pricing";
import { Button } from "@/components/ui/button";

export function PricingMatrixTablet() {
  return (
    <div className="hidden md:block lg:hidden relative rounded-2xl border border-peri/20 bg-white shadow-sm overflow-hidden">
      {/* Right-edge scroll indicator gradient */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-paper/90 to-transparent z-30"
        aria-hidden="true"
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse text-left">
          <thead>
            <tr className="border-b border-peri/15 bg-paper/60">
              {/* Sticky Corner Header */}
              <th className="sticky left-0 z-20 bg-paper/95 backdrop-blur-sm p-5 border-r border-peri/15 w-[220px] shadow-[2px_0_6px_-2px_rgba(20,21,43,0.06)]">
                <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase font-semibold">
                  Performance \ Support
                </p>
              </th>

              {/* Support Column Headers */}
              {reportSupportLevels.map((support) => (
                <th
                  key={support.id}
                  className="p-5 border-r last:border-r-0 border-peri/15 min-w-[180px]"
                >
                  <p className="font-sora font-bold text-navy text-base mb-1">
                    {support.name}
                  </p>
                  <p className="text-ink/70 text-xs font-normal leading-relaxed">
                    {support.description}
                  </p>
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-peri/15">
            {performanceTiers.map((tier) => (
              <tr key={tier.id} className="hover:bg-paper/30 transition-colors">
                {/* Sticky Performance Tier Column */}
                <th className="sticky left-0 z-20 bg-white p-5 border-r border-peri/15 shadow-[2px_0_6px_-2px_rgba(20,21,43,0.06)] align-top">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-sora font-bold text-navy text-sm">
                      {tier.name}
                    </span>
                    {tier.badge && (
                      <span className="bg-mint/20 text-navy font-mono text-[9px] tracking-[0.08em] uppercase px-2 py-0.5 rounded-full font-bold">
                        {tier.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-ink/70 text-xs font-normal leading-relaxed">
                    {tier.description}
                  </p>
                </th>

                {/* Price Cells */}
                {reportSupportLevels.map((support) => {
                  const price = priceGrid[tier.id]?.[support.id] || "Rp —";

                  return (
                    <td
                      key={`${tier.id}-${support.id}`}
                      className="p-5 border-r last:border-r-0 border-peri/15 align-top min-w-[180px]"
                    >
                      <span className="font-mono text-ink/50 text-[10px] tracking-[0.08em] uppercase block mb-1">
                        {tier.name} + {support.name}
                      </span>
                      <p className="font-sora font-extrabold text-navy text-xl">
                        {price}
                      </p>
                      <span className="font-mono text-ink/60 text-[10px] tracking-[0.08em] uppercase block mb-4">
                        / month
                      </span>
                      <Button
                        href="#demo"
                        variant="outline-light"
                        className="w-full !py-2 !px-3 text-xs justify-center font-bold"
                      >
                        Select Plan
                      </Button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
