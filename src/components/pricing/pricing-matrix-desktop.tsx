"use client";

import { useState } from "react";
import {
  performanceTiers,
  reportSupportLevels,
  priceGrid,
} from "@/data/pricing";
import { Button } from "@/components/ui/button";

export function PricingMatrixDesktop() {
  const [hoveredCell, setHoveredCell] = useState<{
    tierId: string;
    supportId: string;
  } | null>(null);

  return (
    <div className="hidden lg:block overflow-hidden rounded-2xl border border-peri/20 bg-white shadow-sm">
      <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] divide-x divide-peri/15">
        {/* Top-Left Corner Cell */}
        <div className="p-6 bg-paper/60 flex flex-col justify-end border-b border-peri/15">
          <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase font-semibold">
            Performance \ Support
          </p>
        </div>

        {/* Column Headers (Report Support Levels) */}
        {reportSupportLevels.map((support) => {
          const isColumnActive = hoveredCell?.supportId === support.id;
          return (
            <div
              key={support.id}
              className={`p-6 flex flex-col justify-between border-b border-peri/15 transition-colors duration-250 ${
                isColumnActive ? "bg-mint/10" : "bg-paper/40"
              }`}
            >
              <div>
                <p className="font-sora font-bold text-navy text-lg mb-1">
                  {support.name}
                </p>
                <p className="text-ink/70 text-xs leading-relaxed">
                  {support.description}
                </p>
              </div>
            </div>
          );
        })}

        {/* Matrix Rows (Performance Tiers) */}
        {performanceTiers.map((tier) => {
          const isRowActive = hoveredCell?.tierId === tier.id;

          return (
            <div
              key={tier.id}
              className="contents divide-x divide-peri/15"
            >
              {/* Row Header (Performance Tier) */}
              <div
                className={`p-6 flex flex-col justify-center border-b border-peri/15 transition-colors duration-250 ${
                  isRowActive ? "bg-mint/10" : "bg-paper/20"
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
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

              {/* 3 Price Cells in this Row */}
              {reportSupportLevels.map((support) => {
                const isCurrentCell =
                  hoveredCell?.tierId === tier.id &&
                  hoveredCell?.supportId === support.id;
                const isColActive = hoveredCell?.supportId === support.id;
                const price = priceGrid[tier.id]?.[support.id] || "Rp —";

                return (
                  <div
                    key={`${tier.id}-${support.id}`}
                    onMouseEnter={() =>
                      setHoveredCell({ tierId: tier.id, supportId: support.id })
                    }
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`p-6 border-b border-peri/15 flex flex-col justify-between transition-[background-color,box-shadow,transform] duration-250 cursor-pointer ${
                      isCurrentCell
                        ? "bg-white shadow-[0_12px_28px_-10px_rgba(4,10,30,0.18)] z-10 -translate-y-0.5 ring-1 ring-mint"
                        : isRowActive || isColActive
                        ? "bg-paper/60"
                        : "bg-white"
                    }`}
                  >
                    <div>
                      <span className="font-mono text-ink/50 text-[10px] tracking-[0.08em] uppercase block mb-1">
                        {tier.name} + {support.name}
                      </span>
                      <p className="font-sora font-extrabold text-navy text-2xl tracking-tight">
                        {price}
                      </p>
                      <span className="font-mono text-ink/60 text-[10px] tracking-[0.08em] uppercase">
                        / month
                      </span>
                    </div>

                    <div className="mt-6">
                      <Button
                        href="#demo"
                        variant={isCurrentCell ? "primary" : "outline-light"}
                        className="w-full !py-2 !px-3 text-xs justify-center font-bold"
                      >
                        Select Plan
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
