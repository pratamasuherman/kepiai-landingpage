import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export const metadata = {
  title: "About Us — Kepiai",
  description: "The story behind Kepiai — social analytics built for 2 a.m.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col flex-1">
      <section className="bg-gradient-to-br from-navy via-[#1c1c5c] to-tealdeep text-paper pt-40 pb-32 px-6">
        <div className="max-w-container mx-auto text-center flex flex-col items-center">
          <Reveal>
            <p className="font-mono text-cyan text-[11px] tracking-[0.08em] uppercase mb-4">
              Our Story
            </p>
            <h1 className="font-sora font-extrabold text-4xl sm:text-5xl mb-6">
              About Kepiai
            </h1>
            <p className="text-paper/80 max-w-lg mb-8 leading-relaxed">
              About content — Prompt 3 will implement the sticky 6-chapter story rail
              and the dark-light-dark narrative arc.
            </p>
            <Button variant="primary">Explore Kepiai</Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
