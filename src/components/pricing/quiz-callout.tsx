import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function QuizCallout() {
  return (
    <Reveal className="mb-14">
      <div className="border border-peri/20 bg-white rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-mint/15 flex items-center justify-center shrink-0 text-navy mt-0.5">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-navy"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div>
            <h3 className="font-sora font-bold text-navy text-lg mb-1">
              Not sure which combination fits?
            </h3>
            <p className="text-ink/70 text-sm leading-relaxed max-w-xl">
              Answer 4 quick questions about your team size, channels, and reporting
              routine — we&apos;ll match you with the right performance tier and support level.
            </p>
          </div>
        </div>
        <Button href="/#quiz" variant="primary" className="shrink-0 whitespace-nowrap">
          Take the Quiz
        </Button>
      </div>
    </Reveal>
  );
}
