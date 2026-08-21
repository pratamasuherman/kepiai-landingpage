import Image from "next/image";

export function CapyShowcase() {
  return (
    <div className="my-8 rounded-2xl border border-peri/20 bg-white p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6">
      <div className="w-24 h-24 rounded-2xl bg-paper border border-peri/20 flex items-center justify-center p-4 shrink-0 shadow-inner">
        <Image
          src="/capybara-mark.png"
          alt="Kepiai Capybara Mark"
          width={802}
          height={630}
          className="w-full h-auto"
        />
      </div>

      <div>
        <p className="font-mono text-indigo text-[10px] tracking-[0.08em] uppercase font-semibold mb-1">
          The Capybara Thesis
        </p>
        <p className="font-sora font-bold text-navy text-lg leading-snug mb-1">
          &ldquo;Sits perfectly still while the river moves around it.&rdquo;
        </p>
        <p className="text-ink/70 text-sm leading-relaxed">
          Not oblivious. Unthreatened. A calm presence in a noisy data stream.
        </p>
      </div>
    </div>
  );
}
