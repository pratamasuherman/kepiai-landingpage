import React from "react";

export function VisualWorkspace() {
  return (
    <div className="my-8">
      <div className="rounded-2xl border border-peri/20 bg-white p-6 sm:p-8 shadow-md overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between border-b border-peri/15 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-mint" />
            <p className="font-mono text-navy text-xs font-semibold tracking-[0.08em] uppercase">
              Kepiai Unified Intelligence
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono text-indigo text-[10px] tracking-[0.08em] uppercase bg-paper px-2.5 py-1 rounded-full border border-peri/20">
              IG · TikTok · FB
            </span>
          </div>
        </div>

        {/* 3 Unified Modules */}
        <div className="grid sm:grid-cols-3 gap-4 mb-6">
          {/* Module 1: Semantic Relevance */}
          <div className="p-4 rounded-xl bg-paper/60 border border-peri/15">
            <p className="font-mono text-ink/60 text-[9px] tracking-[0.08em] uppercase mb-1">
              Semantic Sentiment
            </p>
            <p className="font-sora font-bold text-navy text-lg">94.2%</p>
            <p className="text-xs text-ink/70 mt-1">
              Deep resonance vs. superficial emojis
            </p>
          </div>

          {/* Module 2: Community Advocates */}
          <div className="p-4 rounded-xl bg-paper/60 border border-peri/15">
            <p className="font-mono text-ink/60 text-[9px] tracking-[0.08em] uppercase mb-1">
              Advocate Score
            </p>
            <p className="font-sora font-bold text-navy text-lg">+31.4%</p>
            <p className="text-xs text-ink/70 mt-1">
              Organic advocacy uplift
            </p>
          </div>

          {/* Module 3: Retention by Pillar */}
          <div className="p-4 rounded-xl bg-paper/60 border border-peri/15">
            <p className="font-mono text-ink/60 text-[9px] tracking-[0.08em] uppercase mb-1">
              Retention by Pillar
            </p>
            <p className="font-sora font-bold text-navy text-lg">68s avg</p>
            <p className="text-xs text-ink/70 mt-1">
              Education &gt; Promotional
            </p>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="flex items-center justify-between bg-mint/10 border border-mint/30 rounded-xl px-4 py-3">
          <div className="flex items-center gap-2 text-navy text-xs font-semibold">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#2D2D78"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Exported to brand-formatted .pptx deck
          </div>
          <span className="font-mono text-navy text-[10px] tracking-[0.08em] uppercase font-bold">
            Ready to present
          </span>
        </div>
      </div>

      {/* Caption */}
      <p className="font-mono text-ink/60 text-[11px] tracking-[0.08em] uppercase text-center mt-3">
        Not a simplified version of the real tool. The real tool, made legible.
      </p>
    </div>
  );
}
