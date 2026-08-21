"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  useMotionTemplate,
} from "framer-motion";
import { Button } from "@/components/ui/button";

function subscribePointerFine(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getPointerFineSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

function getPointerFineServerSnapshot() {
  return false;
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isFinePointer = useSyncExternalStore(
    subscribePointerFine,
    getPointerFineSnapshot,
    getPointerFineServerSnapshot
  );

  // Scroll-linked continuous parallax
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroCopyY = useTransform(scrollYProgress, [0, 1], [0, -46]);
  const heroCopyOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.15]);

  const heroParallaxY = useTransform(scrollYProgress, [0, 1], [0, -92]);
  const heroParallaxScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const heroParallaxOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);

  const glowYNum = useTransform(scrollYProgress, [0, 1], [-8, 36]);
  const glowY = useMotionTemplate`${glowYNum}%`;

  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.08], [0.8, 0]);

  // Cursor spotlight coordinates
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 20 });
  const canSpotlight = isFinePointer && !shouldReduceMotion;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!canSpotlight || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setSpotlightPos({ x, y });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="dark-surface pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden"
    >
      {/* Background radial mint glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useMotionTemplate`radial-gradient(1100px 620px at 82% ${glowY}, rgba(77, 190, 158, 0.16), transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Grain overlay */}
      <div className="grain" aria-hidden="true" />

      {/* Cursor spotlight */}
      {canSpotlight && (
        <div
          className="spotlight"
          style={{
            background: `radial-gradient(480px circle at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(59, 194, 216, 0.10), transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}

      <div className="max-w-container mx-auto px-6 md:px-10 relative grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column — Copy */}
        <motion.div
          id="heroCopy"
          style={
            shouldReduceMotion
              ? undefined
              : {
                  y: heroCopyY,
                  opacity: heroCopyOpacity,
                }
          }
          className="will-change-[transform,opacity]"
        >
          <p className="font-mono text-cyan text-[11px] tracking-[0.08em] uppercase mb-6">
            Social analytics · made legible
          </p>
          <h1 className="font-sora font-extrabold text-[42px] leading-[1.06] sm:text-[52px] md:text-[60px] mb-6">
            Chill.
            <br />
            We&apos;ve got the metrics.
          </h1>
          <p className="text-paper/80 text-[16px] md:text-[17px] leading-relaxed max-w-[440px] mb-9">
            Every platform hands you numbers. Kepiai hands you the reason behind
            them — performance, content, audience, and campaigns, unified into one
            workspace that turns days of reporting into minutes.
          </p>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button href="#products" variant="primary">
              Explore Kepiai
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Button>
            <Button href="#demo" variant="outline-dark">
              Book a Demo
            </Button>
          </div>
          <p className="font-mono text-paper/70 text-[11px] tracking-[0.08em] uppercase">
            Less assembling. More understanding.
          </p>
        </motion.div>

        {/* Right Column — Hero Stage Visual */}
        <div className="hero-stage" aria-hidden="true">
          {/* HARD RULE: Capybara mark sits outside parallax layer and fragment parent, never receives transform */}
          <Image
            src="/capybara-mark.png"
            alt=""
            width={320}
            height={320}
            className="capy-still"
            priority
          />

          {/* Parallax layer containing assembly fragments & insight card */}
          <motion.div
            id="heroParallaxLayer"
            style={
              shouldReduceMotion
                ? undefined
                : {
                    y: heroParallaxY,
                    scale: heroParallaxScale,
                    opacity: heroParallaxOpacity,
                  }
            }
            className="hero-parallax-layer absolute inset-0 will-change-[transform,opacity]"
          >
            {/* Fragment 1: 14 tabs open */}
            <div className="frag frag-tabs">
              <div className="frag-float frag-float-a">
                <div className="frag-inner frag-edge-peri flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-peri/60" />
                  <span className="w-2 h-2 rounded-full bg-peri/60" />
                  <span className="w-2 h-2 rounded-full bg-mint" />
                  <span className="font-mono text-ink/65 text-[9px] ml-1 tracking-[0.08em] uppercase">
                    14 tabs open
                  </span>
                </div>
              </div>
            </div>

            {/* Fragment 2: Column F */}
            <div className="frag frag-sheet">
              <div className="frag-float frag-float-b">
                <div className="frag-inner frag-edge-cyan">
                  <div className="grid grid-cols-4 gap-[3px]">
                    <div className="w-4 h-4 border border-peri/30" />
                    <div className="w-4 h-4 border border-peri/30 bg-peri/10" />
                    <div className="w-4 h-4 border border-peri/30" />
                    <div className="w-4 h-4 border border-peri/30" />
                    <div className="w-4 h-4 border border-peri/30" />
                    <div className="w-4 h-4 border border-peri/30" />
                    <div className="w-4 h-4 border border-peri/30 bg-mint/20" />
                    <div className="w-4 h-4 border border-peri/30" />
                  </div>
                  <p className="font-mono text-ink/65 text-[9px] mt-1.5 tracking-[0.08em] uppercase">
                    Column F
                  </p>
                </div>
              </div>
            </div>

            {/* Fragment 3: Reel · reach */}
            <div className="frag frag-ig">
              <div className="frag-float frag-float-c">
                <div className="frag-inner frag-edge-mint">
                  <p className="font-mono text-ink/70 text-[9px] mb-1 tracking-[0.08em] uppercase">
                    Reel · reach
                  </p>
                  <p className="font-sora font-bold text-navy text-lg leading-none">
                    +212%
                  </p>
                </div>
              </div>
            </div>

            {/* Fragment 4: metrics.csv */}
            <div className="frag frag-tt">
              <div className="frag-float frag-float-d">
                <div className="frag-inner frag-edge-indigo flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#2D2D78">
                    <polygon points="6,4 20,12 6,20" />
                  </svg>
                  <p className="font-mono text-ink/65 text-[9px] tracking-[0.08em] uppercase">
                    metrics.csv
                  </p>
                </div>
              </div>
            </div>

            {/* Fragment 5: 2:14 AM */}
            <div className="frag frag-clock">
              <div className="frag-float frag-float-e">
                <div className="frag-inner frag-edge-peri flex items-center gap-2">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#2D2D78"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 7 12 12 15.5 14" />
                  </svg>
                  <span className="font-mono text-ink/65 text-[9px] tracking-[0.08em] uppercase">
                    2:14 AM
                  </span>
                </div>
              </div>
            </div>

            {/* Insight Card */}
            <div className="insight-card">
              <div className="insight-ring bg-paper rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-mint" />
                  <p className="font-mono text-navy/75 text-[10px] tracking-[0.08em] uppercase">
                    Kepiai Insight
                  </p>
                </div>
                <p className="font-sora font-semibold text-ink text-[15px] leading-snug">
                  Your report is ready to review.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Cue */}
      <motion.div
        id="scrollCue"
        style={shouldReduceMotion ? { opacity: 0.6 } : { opacity: scrollCueOpacity }}
        className="scroll-cue"
        aria-hidden="true"
      >
        <span className="font-mono text-paper/55 text-[9px] tracking-[0.08em] uppercase">
          Scroll
        </span>
        <span className="line">
          <span className="dot" />
        </span>
      </motion.div>
    </section>
  );
}
