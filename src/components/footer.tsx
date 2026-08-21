import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="demo" className="bg-white pt-20 pb-10 border-t border-peri/15">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 mb-4 group"
              aria-label="Kepiai home"
            >
              <Image
                src="/capybara-mark.png"
                alt=""
                width={802}
                height={630}
                className="h-7 w-auto"
              />
              <span className="font-sora font-bold text-navy text-lg">
                kepiai
              </span>
            </Link>
            <p className="text-ink/70 text-[14px] leading-relaxed max-w-[240px]">
              Chill. We&apos;ve got the metrics.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <p className="font-mono text-ink/70 text-[10px] tracking-[0.08em] uppercase mb-4">
              Product
            </p>
            <ul className="space-y-3 text-[14px] text-ink/70">
              <li>
                <Link
                  href="/#products"
                  className="hover:text-indigo transition-colors"
                >
                  Performance Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/#products"
                  className="hover:text-indigo transition-colors"
                >
                  Report Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-indigo transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <p className="font-mono text-ink/70 text-[10px] tracking-[0.08em] uppercase mb-4">
              Company
            </p>
            <ul className="space-y-3 text-[14px] text-ink/70">
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about#story"
                  className="hover:text-indigo transition-colors"
                >
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Started Column */}
          <div>
            <p className="font-mono text-ink/70 text-[10px] tracking-[0.08em] uppercase mb-4">
              Get started
            </p>
            <ul className="space-y-3 text-[14px] text-ink/70">
              <li>
                <Link
                  href="/#quiz"
                  className="hover:text-indigo transition-colors"
                >
                  Find Your Kepi Match
                </Link>
              </li>
              <li>
                <Link
                  href="#demo"
                  className="hover:text-indigo transition-colors"
                >
                  Book a Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="hairline mb-8" />

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 text-ink/70 text-[12px]">
          <p>© 2026 Kepiai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
