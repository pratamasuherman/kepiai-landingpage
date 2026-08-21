"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { useCountUp } from "@/lib/use-count-up";
import { easeOutExpo } from "@/lib/motion";

function PerformanceChartVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  const scoreCount = useCountUp(92, isInView);
  const pillarsCount = useCountUp(6, isInView);
  const retentionCount = useCountUp(18, isInView);

  const bars = [
    { height: "40%", bg: "bg-peri/40", delay: 0.05 },
    { height: "65%", bg: "bg-peri/40", delay: 0.15 },
    { height: "50%", bg: "bg-cyan/70", delay: 0.25 },
    { height: "90%", bg: "bg-mint", delay: 0.35 },
    { height: "30%", bg: "bg-peri/40", delay: 0.45 },
  ];

  return (
    <div
      ref={containerRef}
      className="border border-peri/20 rounded-2xl p-6 md:p-8 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <p className="font-mono text-ink/70 text-[10px] tracking-[0.08em] uppercase">
          Performance overview
        </p>
        <p className="font-mono text-indigo text-[10px] tracking-[0.08em] uppercase font-semibold">
          Illustrative view
        </p>
      </div>

      {/* SVG Line Chart */}
      <svg viewBox="0 0 300 100" className="w-full h-28 mb-6 overflow-visible">
        <defs>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3BC2D8" />
            <stop offset="100%" stopColor="#4DBE9E" />
          </linearGradient>
        </defs>
        <motion.polyline
          pathLength={1}
          points="0,78 55,64 110,68 165,38 220,44 300,14"
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0, strokeDashoffset: shouldReduceMotion ? 0 : 1 }}
          animate={
            isInView
              ? { pathLength: 1, strokeDashoffset: 0 }
              : { pathLength: shouldReduceMotion ? 1 : 0, strokeDashoffset: shouldReduceMotion ? 0 : 1 }
          }
          transition={{ duration: 1.3, ease: easeOutExpo, delay: 0.15 }}
        />
      </svg>

      {/* Stat Count-up Blocks */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="font-sora font-bold text-navy text-xl">{scoreCount}</p>
          <p className="font-mono text-ink/70 text-[9px] mt-1 tracking-[0.08em] uppercase">
            Engagement score
          </p>
        </div>
        <div>
          <p className="font-sora font-bold text-navy text-xl">{pillarsCount}</p>
          <p className="font-mono text-ink/70 text-[9px] mt-1 tracking-[0.08em] uppercase">
            Content pillars
          </p>
        </div>
        <div>
          <p className="font-sora font-bold text-navy text-xl">+{retentionCount}%</p>
          <p className="font-mono text-ink/70 text-[9px] mt-1 tracking-[0.08em] uppercase">
            Retention lift
          </p>
        </div>
      </div>

      {/* 5 Growth Bars */}
      <div className="flex items-end gap-2 h-10 mt-6">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className={`w-full rounded-sm ${bar.bg}`}
            style={{ height: bar.height, transformOrigin: "bottom" }}
            initial={{ scaleY: shouldReduceMotion ? 1 : 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: shouldReduceMotion ? 1 : 0 }}
            transition={{ duration: 0.7, ease: easeOutExpo, delay: bar.delay }}
          />
        ))}
      </div>
    </div>
  );
}

function ReportMockVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      ref={containerRef}
      className="border border-peri/20 rounded-2xl p-6 md:p-8 bg-white shadow-sm"
    >
      <div className="flex items-center justify-between mb-6">
        <p className="font-mono text-ink/70 text-[10px] tracking-[0.08em] uppercase">
          Draft report
        </p>
        <p className="font-mono text-indigo text-[10px] tracking-[0.08em] uppercase font-semibold">
          Illustrative view
        </p>
      </div>

      {/* Skeleton Lines */}
      <motion.div
        className="h-3 rounded-full bg-navy/80 w-full mb-3 origin-left"
        initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: shouldReduceMotion ? 1 : 0 }}
        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.05 }}
      />
      <motion.div
        className="h-2 rounded-full bg-peri/30 w-full mb-2 origin-left"
        initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: shouldReduceMotion ? 1 : 0 }}
        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.18 }}
      />
      <motion.div
        className="h-2 rounded-full bg-peri/30 w-[80%] mb-6 origin-left"
        initial={{ scaleX: shouldReduceMotion ? 1 : 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: shouldReduceMotion ? 1 : 0 }}
        transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.3 }}
      />

      {/* Placeholder Grid */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="h-14 rounded-lg bg-paper border border-peri/20" />
        <div className="h-14 rounded-lg bg-paper border border-peri/20" />
        <div className="h-14 rounded-lg bg-paper border border-peri/20" />
      </div>

      {/* PPTX Export Chip */}
      <motion.div
        className="inline-flex items-center gap-2 bg-mint/15 text-navy font-mono text-[10px] tracking-[0.08em] uppercase px-3 py-2 rounded-full font-semibold"
        initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 8 }}
        transition={{ duration: 0.6, ease: easeOutExpo, delay: 0.55 }}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2D2D78"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
        Exported to .pptx, on brand
      </motion.div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="bg-paper py-24 md:py-32">
      <div className="max-w-container mx-auto px-6 md:px-10">
        {/* Intro */}
        <div className="max-w-2xl mb-20 md:mb-24">
          <Reveal>
            <p className="font-mono text-indigo text-[11px] mb-5 tracking-[0.08em] uppercase">
              The workspace
            </p>
            <h2 className="font-sora font-extrabold text-navy text-[34px] md:text-[44px] leading-[1.1] mb-5">
              You have the insights. Now make them count.
            </h2>
            <p className="text-ink/65 text-[16px] md:text-[17px] leading-relaxed">
              We&apos;ve transformed your metrics into clear insights and
              actionable reports. All that&apos;s left is turning them into your
              next confident move.
            </p>
          </Reveal>
        </div>

        {/* Product 01 — Performance Intelligence */}
        <div className="grid md:grid-cols-2 gap-14 items-center mb-6">
          <Reveal className="order-2 md:order-1">
            <PerformanceChartVisual />
          </Reveal>

          <Reveal className="order-1 md:order-2" delay={0.1}>
            <p className="font-mono text-indigo text-[11px] mb-4 tracking-[0.08em] uppercase">
              01 — Performance Intelligence
            </p>
            <h3 className="font-sora font-bold text-ink text-2xl md:text-[28px] mb-4 leading-snug">
              Know what happened. Understand why. Decide what comes next.
            </h3>
            <p className="text-ink/65 leading-relaxed mb-6">
              Connect your channel, content, audience, campaign, and community
              performance in one intelligent view — moving beyond surface-level
              metrics to what&apos;s actually driving results.
            </p>
            <ul className="space-y-2.5 mb-7">
              <li className="flex items-center gap-2.5 text-[14px] text-ink/75">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                Unified channel performance
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-ink/75">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                Content intelligence
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-ink/75">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                Audience insights
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-ink/75">
                <span className="w-1.5 h-1.5 rounded-full bg-mint" />
                Campaign &amp; community analysis
              </li>
            </ul>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 font-bold text-indigo text-sm relative group py-1"
            >
              Explore Performance Intelligence
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <span
                className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-mint transition-all duration-280 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                aria-hidden="true"
              />
            </Link>
          </Reveal>
        </div>

        {/* Connector Divider */}
        <Reveal>
          <div className="flex items-center gap-4 my-10 md:my-14 max-w-2xl mx-auto">
            <div className="hairline flex-1" />
            <p className="font-mono text-ink/70 text-[10px] text-center px-2 tracking-[0.08em] uppercase">
              Performance Intelligence finds the meaning.
              <br />
              Report Generator makes it ready to share.
            </p>
            <div className="hairline flex-1" />
          </div>
        </Reveal>

        {/* Product 02 — Report Generator */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <Reveal>
            <p className="font-mono text-indigo text-[11px] mb-4 tracking-[0.08em] uppercase">
              02 — Report Generator
            </p>
            <h3 className="font-sora font-bold text-ink text-2xl md:text-[28px] mb-4 leading-snug">
              Turn performance data into a story people can understand and act on.
            </h3>
            <p className="text-ink/65 leading-relaxed mb-6">
              Transform complex data into structured, editable, presentation-ready
              reports — automated generation, analyst interpretation, or deeper
              strategic consultancy.
            </p>
            <ul className="space-y-2.5 mb-7">
              <li className="flex items-center gap-2.5 text-[14px] text-ink/75">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                Automated reporting
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-ink/75">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                Custom brand templates
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-ink/75">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                Analyst interpretation
              </li>
              <li className="flex items-center gap-2.5 text-[14px] text-ink/75">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan" />
                Key findings &amp; recommendations
              </li>
            </ul>
            <Link
              href="#products"
              className="inline-flex items-center gap-2 font-bold text-indigo text-sm relative group py-1"
            >
              Explore Report Generator
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
              <span
                className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-mint transition-all duration-280 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                aria-hidden="true"
              />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <ReportMockVisual />
          </Reveal>
        </div>

        {/* Closer */}
        <Reveal className="text-center mt-20 md:mt-24">
          <p className="text-ink/60 mb-3 text-sm">
            Not sure which combination is right for you?
          </p>
          <Button href="#quiz" variant="outline-light">
            Find Your Kepi Match
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
