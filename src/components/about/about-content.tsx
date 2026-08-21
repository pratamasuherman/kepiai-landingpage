"use client";

import { useActiveChapter } from "@/lib/use-active-chapter";
import { ChapterRail } from "@/components/about/chapter-rail";
import { VisualLateDesk } from "@/components/about/visual-late-desk";
import { VisualWorkspace } from "@/components/about/visual-workspace";
import { CapyShowcase } from "@/components/about/capy-showcase";
import { Reveal } from "@/components/reveal";

export function AboutContent() {
  const { activeChapter, isDark } = useActiveChapter();

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Desktop Adaptive Chapter Rail */}
      <ChapterRail activeChapter={activeChapter} isDark={isDark} />

      {/* ========================================================================= */}
      {/* ARC 1: DARK SURFACE (Intro + Chapter 01 — The Pattern)                   */}
      {/* ========================================================================= */}
      <section className="dark-surface pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <div className="grain" aria-hidden="true" />
        <div className="max-w-container mx-auto px-6 md:px-10 relative">
          <div className="lg:pl-64 max-w-4xl space-y-16">
            {/* Intro block */}
            <div className="border-b border-peri/20 pb-12">
              <Reveal>
                <p className="font-mono text-cyan text-[11px] tracking-[0.08em] uppercase mb-4 font-semibold">
                  About Kepiai
                </p>
                <h1 className="font-sora font-extrabold text-[36px] sm:text-[48px] md:text-[54px] leading-[1.08] mb-6">
                  Our Story
                </h1>
                <p className="text-paper/85 text-[18px] md:text-[21px] font-sora font-medium leading-relaxed">
                  &ldquo;The report was due at nine. It was 2 a.m., and we still
                  hadn&apos;t started thinking.&rdquo;
                </p>
              </Reveal>
            </div>

            {/* Chapter 01: The Pattern */}
            <article id="chapter-01" className="scroll-mt-36">
              <Reveal>
                <p className="font-mono text-cyan text-[11px] tracking-[0.08em] uppercase mb-4 font-semibold">
                  01 — The Pattern
                </p>
                <div className="space-y-5 text-paper/80 text-[16px] md:text-[17px] leading-relaxed">
                  <p>
                    That was the pattern. Fourteen tabs open. Instagram Insights
                    exported to CSV, TikTok metrics pasted into column F, a
                    spreadsheet held together by formulas nobody remembered
                    writing. By the time the deck was formatted, the deadline
                    had arrived — and the actual question, the one the client
                    would ask in the meeting, was still unanswered.
                  </p>
                  <p>
                    We were digital analysts and strategists. We built content
                    frameworks, ran campaign post-mortems, benchmarked
                    competitors for brands that took their numbers seriously. We
                    were good at it. But most of the job wasn&apos;t analysis. It
                    was assembly.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <VisualLateDesk />
              </Reveal>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ARC 2: LIGHT SURFACE (Chapters 02–05: Reasoning & Logic)                  */}
      {/* ========================================================================= */}
      <section className="bg-paper text-ink py-24 md:py-32 border-y border-peri/15 relative">
        <div className="max-w-container mx-auto px-6 md:px-10">
          <div className="lg:pl-64 max-w-4xl space-y-24">
            {/* Chapter 02: Not Just Us */}
            <article id="chapter-02" className="scroll-mt-36">
              <Reveal>
                <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase mb-4 font-semibold">
                  02 — Not Just Us
                </p>
                <p className="text-ink/85 text-[17px] md:text-[19px] font-sora font-semibold leading-relaxed mb-8">
                  Then we started noticing the same night happening to people with
                  far fewer resources than us.
                </p>
              </Reveal>

              {/* 3 Personas in Full Wireframe Copy */}
              <div className="space-y-4 mb-8">
                <Reveal delay={0.05}>
                  <div className="border border-peri/20 rounded-2xl p-6 bg-white shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-mint" />
                      <h4 className="font-sora font-bold text-navy text-base">
                        The UMKM Owner
                      </h4>
                    </div>
                    <p className="text-ink/75 text-[15px] leading-relaxed">
                      In Bandung, closing her shop and opening her phone to figure
                      out why last week&apos;s Reel outperformed everything she&apos;d
                      posted in a month — with no analyst to ask, no framework to
                      apply, and no idea which number was the one that mattered.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="border border-peri/20 rounded-2xl p-6 bg-white shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-cyan" />
                      <h4 className="font-sora font-bold text-navy text-base">
                        The Solo Founder
                      </h4>
                    </div>
                    <p className="text-ink/75 text-[15px] leading-relaxed">
                      Running the brand&apos;s Instagram between operations and
                      inventory, guessing at posting times because guessing was
                      faster than learning a dashboard built for enterprise teams.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={0.15}>
                  <div className="border border-peri/20 rounded-2xl p-6 bg-white shadow-xs">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-indigo" />
                      <h4 className="font-sora font-bold text-navy text-base">
                        The Brand Manager
                      </h4>
                    </div>
                    <p className="text-ink/75 text-[15px] leading-relaxed">
                      A small team and a large portfolio, spending Sunday
                      assembling a deck instead of planning the quarter.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.2}>
                <p className="font-sora font-semibold text-navy text-[16px] md:text-[18px]">
                  Different scale. Identical problem. Everyone was drowning in
                  data nobody had translated for them.
                </p>
              </Reveal>
            </article>

            {/* Chapter 03: Why Tools Fell Short */}
            <article id="chapter-03" className="scroll-mt-36">
              <Reveal>
                <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase mb-4 font-semibold">
                  03 — Why Tools Fell Short
                </p>
                <h3 className="font-sora font-extrabold text-navy text-2xl md:text-3xl mb-6">
                  Why the Tools Fell Short
                </h3>
                <div className="text-ink/75 text-[16px] md:text-[17px] leading-relaxed space-y-4">
                  <p>
                    The tools available didn&apos;t solve this for either group.
                    They were built to display, and display is the easy half. A
                    dashboard could show engagement down twelve percent. It could
                    not tell you which content pillar caused it, whether your
                    audience had understood the campaign at all, or which
                    competitor had quietly taken the attention you lost.
                  </p>
                  <p>
                    Everything past the number was still manual and everything past
                    the number was the part that mattered. Enterprise platforms
                    buried it under complexity. Simple tools skipped it entirely.
                  </p>
                </div>
              </Reveal>
            </article>

            {/* Chapter 04: What We Built */}
            <article id="chapter-04" className="scroll-mt-36">
              <Reveal>
                <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase mb-4 font-semibold">
                  04 — What We Built
                </p>
                <div className="text-ink/75 text-[16px] md:text-[17px] leading-relaxed space-y-4">
                  <p className="font-sora font-bold text-navy text-lg md:text-xl">
                    So we built the thing we needed, for the people who need it
                    more.
                  </p>
                  <p>
                    Kepiai unifies Instagram, TikTok, and Facebook into one source
                    of truth, then keeps going where dashboards stop. It reads
                    comment relevance semantically, so you know whether your
                    audience engaged with your message or just typed an emoji. It
                    scores community contribution, so your advocates surface
                    instead of hiding in a like count. It explains video
                    retention by duration and content pillar, so you learn why
                    something held attention. And it exports the whole thing to an
                    editable PowerPoint in your brand colors — the days-long task
                    that used to end our months.
                  </p>
                  <p>
                    We put analyst-grade thinking inside something a brand owner
                    can open on a Tuesday night and understand immediately.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <VisualWorkspace />
              </Reveal>
            </article>

            {/* Chapter 05: The Name */}
            <article id="chapter-05" className="scroll-mt-36">
              <Reveal>
                <p className="font-mono text-indigo text-[11px] tracking-[0.08em] uppercase mb-4 font-semibold">
                  05 — The Name
                </p>
                <div className="text-ink/75 text-[16px] md:text-[17px] leading-relaxed space-y-4 mb-6">
                  <p>
                    The name is deliberate. KPI is the acronym our market loses
                    sleep over — whether you&apos;re presenting to a client or
                    answering to yourself.
                  </p>
                  <p>
                    We put a capybara beside it because the capybara sits
                    perfectly still while the river moves around it. Not
                    oblivious. Unthreatened.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <CapyShowcase />
              </Reveal>
            </article>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ARC 3: DARK SURFACE (Chapter 06 — Built for 2 a.m. & Closing Resolution)  */}
      {/* ========================================================================= */}
      <section className="dark-surface py-28 md:py-36 relative">
        <div className="grain" aria-hidden="true" />
        <div className="max-w-container mx-auto px-6 md:px-10 relative">
          <div className="lg:pl-64 max-w-4xl">
            <article id="chapter-06" className="scroll-mt-36">
              <Reveal>
                <p className="font-mono text-cyan text-[11px] tracking-[0.08em] uppercase mb-4 font-semibold">
                  06 — Built for 2 a.m.
                </p>
                <h2 className="font-sora font-extrabold text-paper text-3xl sm:text-4xl md:text-5xl leading-tight mb-8">
                  We built Kepiai for 2 a.m.
                  <br />
                  So nobody has to be there again.
                </h2>
                <div className="hairline mb-8 opacity-40" />
                <p className="font-sora font-bold text-mint text-2xl md:text-3xl tracking-tight">
                  Chill. We&apos;ve got the metrics.
                </p>
              </Reveal>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
