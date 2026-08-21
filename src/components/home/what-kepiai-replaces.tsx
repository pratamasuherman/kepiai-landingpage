"use client";

import { useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/reveal";

interface ItemProps {
  num: string;
  text: string;
  delayIndex: number;
}

function StrikeItem({ num, text, delayIndex }: ItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const shouldReduceMotion = useReducedMotion();

  const isStruck = shouldReduceMotion || isInView;

  return (
    <div ref={ref}>
      <Reveal delay={delayIndex * 0.08} className="flex items-start gap-4 py-4 border-b border-peri/15">
        <span className="font-mono text-indigo text-[11px] pt-1 tracking-[0.08em] uppercase">
          {num}
        </span>
        <p className="text-ink/55 text-[17px] md:text-[19px] font-sora">
          <span
            style={{
              textDecorationLine: "line-through",
              textDecorationThickness: "1.5px",
              textDecorationColor: isStruck ? "rgba(122, 128, 190, 0.8)" : "transparent",
              transition: shouldReduceMotion
                ? "none"
                : `text-decoration-color 0.55s cubic-bezier(0.16, 1, 0.3, 1) ${delayIndex * 0.08 + 0.3}s`,
            }}
          >
            {text}
          </span>
        </p>
      </Reveal>
    </div>
  );
}

export function WhatKepiaiReplaces() {
  const items = [
    { num: "01", text: "Instagram Insights, exported to CSV." },
    { num: "02", text: "TikTok metrics, pasted into column F." },
    {
      num: "03",
      text: "A spreadsheet held together by formulas nobody remembers writing.",
    },
    {
      num: "04",
      text: "Sunday afternoons assembling a deck instead of planning the quarter.",
    },
  ];

  return (
    <section className="bg-paper py-20 md:py-24 border-b border-peri/15">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase mb-10">
            What Kepiai replaces
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {items.map((item, idx) => (
            <StrikeItem
              key={item.num}
              num={item.num}
              text={item.text}
              delayIndex={idx}
            />
          ))}
        </div>

        <Reveal delay={0.25}>
          <p className="font-sora font-bold text-navy text-2xl md:text-3xl mt-12">
            One workspace. Every answer already in it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
