"use client";

import { useState } from "react";
import { pricingFaqs } from "@/data/pricing";
import { Reveal } from "@/components/reveal";

export function PricingFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(pricingFaqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-20 md:py-28 border-t border-peri/15 mt-20">
      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-12">
          {/* TODO: copy — FAQ Section Header */}
          <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase mb-4 font-semibold">
            Frequently Asked Questions
          </p>
          <h2 className="font-sora font-extrabold text-navy text-3xl md:text-4xl">
            Everything you need to know
          </h2>
        </Reveal>

        <div className="space-y-4">
          {pricingFaqs.map((faq, index) => {
            const isOpen = openFaq === faq.id;

            return (
              <Reveal key={faq.id} delay={index * 0.08}>
                <div className="rounded-2xl border border-peri/20 bg-white overflow-hidden shadow-sm transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-paper/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint"
                  >
                    <span className="font-sora font-bold text-navy text-base md:text-lg">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full border border-peri/20 flex items-center justify-center text-navy shrink-0 transition-transform duration-250 ${
                        isOpen ? "rotate-180 bg-mint/15" : "bg-paper/50"
                      }`}
                      aria-hidden="true"
                    >
                      <svg
                        width="12"
                        height="12"
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

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-6 pb-6 pt-1 text-ink/70 text-sm leading-relaxed border-t border-peri/10 animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
