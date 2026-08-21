import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function QuizInvite() {
  return (
    <section id="quiz" className="dark-surface py-28 md:py-36 text-center">
      <div className="grain" aria-hidden="true" />
      <div className="max-w-2xl mx-auto px-6 relative">
        <Reveal>
          <p className="font-mono text-cyan text-[11px] mb-6 tracking-[0.08em] uppercase font-semibold">
            Find your kepi match
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-sora font-extrabold text-[32px] md:text-[42px] leading-[1.15] mb-6">
            Tell us how your team works.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-paper/75 text-[16px] leading-relaxed mb-10 max-w-md mx-auto">
            Answer a few quick questions about your channels, reporting routine,
            and challenges — we&apos;ll match you with the right combination.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <Button href="#quiz" variant="primary">
            Start the Quiz
          </Button>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="font-mono text-paper/70 text-[11px] mt-6 tracking-[0.08em] uppercase">
            About three minutes. No spreadsheets required.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
