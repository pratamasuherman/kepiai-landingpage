"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 60);
  });

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "Product", href: "/#products" },
    { label: "Pricing", href: "/pricing" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header
      id="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow,border-color] duration-350 ${
        isScrolled
          ? "bg-paper/90 backdrop-blur-[14px] shadow-[0_1px_0_rgba(20,21,43,0.08)] border-b border-peri/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-container mx-auto px-6 md:px-10 py-5 flex items-center justify-between transition-[padding] duration-350">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label="Kepiai home"
        >
          <Image
            src="/capybara-mark.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span
            className={`font-sora font-bold text-lg tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-navy" : "text-paper"
            }`}
          >
            kepiai
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative font-medium text-sm transition-colors duration-300 group py-1 ${
                isScrolled ? "text-ink hover:text-navy" : "text-paper hover:text-paper"
              }`}
            >
              {link.label}
              <span
                className="absolute left-0 bottom-0 h-[1.5px] w-0 bg-mint transition-all duration-280 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            href="#demo"
            variant={isScrolled ? "outline-light" : "outline-dark"}
            className="!py-2.5 !px-5 text-sm !font-bold"
          >
            Book a Demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className={`md:hidden p-1.5 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint ${
            isScrolled ? "text-ink hover:text-navy" : "text-paper hover:text-paper"
          }`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-paper border-t border-peri/20 px-6 py-6 flex flex-col gap-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-ink font-semibold text-base hover:text-indigo transition-colors py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            href="#demo"
            variant="outline-light"
            className="w-full justify-center mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Demo
          </Button>
        </div>
      )}
    </header>
  );
}
