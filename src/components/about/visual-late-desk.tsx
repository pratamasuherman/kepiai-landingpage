import React from "react";

export function VisualLateDesk() {
  return (
    <div className="relative rounded-2xl border border-peri/20 bg-navy/60 backdrop-blur-sm p-6 sm:p-8 my-8 overflow-hidden shadow-2xl">
      {/* Background Soft Screen Glow */}
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-72 h-72 bg-radial from-cyan/20 via-mint/10 to-transparent blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative flex flex-col gap-5">
        {/* Top bar with time and status */}
        <div className="flex items-center justify-between border-b border-peri/20 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-peri/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-peri/50" />
            <span className="w-2.5 h-2.5 rounded-full bg-mint" />
            <span className="font-mono text-paper/60 text-[10px] tracking-[0.08em] uppercase ml-2">
              Deck_Final_v4_2AM.pptx
            </span>
          </div>

          <div className="flex items-center gap-2 bg-paper/10 px-2.5 py-1 rounded-md border border-peri/20">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4DBE9E"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="font-mono text-cyan text-xs font-semibold tracking-wider">
              2:14 AM
            </span>
          </div>
        </div>

        {/* Abstract desk / workspace geometry */}
        <div className="grid grid-cols-3 gap-4 pt-2">
          <div className="col-span-2 space-y-3">
            <div className="h-3 rounded-full bg-paper/20 w-3/4" />
            <div className="h-2 rounded-full bg-paper/15 w-full" />
            <div className="h-2 rounded-full bg-paper/15 w-5/6" />
            <div className="h-2 rounded-full bg-paper/10 w-2/3" />
          </div>
          <div className="rounded-lg border border-peri/25 bg-paper/5 p-3 flex flex-col justify-between">
            <div className="grid grid-cols-3 gap-1.5 opacity-60">
              <div className="h-3 bg-peri/30 rounded-xs" />
              <div className="h-3 bg-peri/30 rounded-xs" />
              <div className="h-3 bg-mint/40 rounded-xs" />
              <div className="h-3 bg-peri/30 rounded-xs" />
              <div className="h-3 bg-cyan/30 rounded-xs" />
              <div className="h-3 bg-peri/30 rounded-xs" />
            </div>
            <p className="font-mono text-paper/50 text-[9px] mt-2 tracking-[0.08em] uppercase">
              Column F · raw
            </p>
          </div>
        </div>

        {/* Caption */}
        <p className="font-mono text-paper/50 text-[10px] tracking-[0.08em] uppercase text-right pt-2">
          Mood representation · 2 a.m. assembly
        </p>
      </div>
    </div>
  );
}
