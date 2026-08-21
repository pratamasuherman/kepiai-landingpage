import { Reveal } from "@/components/reveal";

export function WhoItsFor() {
  const personas = [
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2D2D78"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-6"
          aria-hidden="true"
        >
          <path d="M3 9l1-5h16l1 5M4 9v11h16V9M4 9h16M9 20v-6h6v6" />
        </svg>
      ),
      label: "The UMKM Owner",
      description:
        "Closing her shop in Bandung, opening her phone to figure out why last week's Reel outperformed a month of posts — no analyst to ask, no idea which number matters.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2D2D78"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-6"
          aria-hidden="true"
        >
          <rect x="6" y="2" width="12" height="20" rx="2" />
          <line x1="10" y1="19" x2="14" y2="19" />
        </svg>
      ),
      label: "The Solo Founder",
      description:
        "Running the brand's Instagram between operations and inventory, guessing at posting times because guessing is faster than learning an enterprise dashboard.",
    },
    {
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2D2D78"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mb-6"
          aria-hidden="true"
        >
          <path d="M3 3v18h18M7 15l4-5 3 3 5-7" />
        </svg>
      ),
      label: "The Brand Manager",
      description:
        "A small team, a large portfolio — spending Sunday assembling a deck instead of planning the quarter.",
    },
  ];

  return (
    <section className="bg-white py-24 md:py-28 border-y border-peri/15">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <Reveal>
          <p className="font-mono text-indigo text-[11px] mb-5 tracking-[0.08em] uppercase">
            Not just us
          </p>
          <h2 className="font-sora font-extrabold text-navy text-[30px] md:text-[38px] leading-[1.15] mb-16 max-w-xl">
            Different scale. Identical problem.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <Reveal key={persona.label} delay={index * 0.1}>
              <div className="persona-card border border-peri/20 rounded-2xl p-7 bg-paper h-full flex flex-col justify-start">
                {persona.icon}
                <p className="font-mono text-indigo text-[10px] mb-2 tracking-[0.08em] uppercase font-semibold">
                  {persona.label}
                </p>
                <p className="text-ink/70 text-[14px] leading-relaxed">
                  {persona.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
