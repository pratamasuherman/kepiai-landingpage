"use client";

import { useState, useEffect } from "react";

export const CHAPTER_IDS = [
  "chapter-01",
  "chapter-02",
  "chapter-03",
  "chapter-04",
  "chapter-05",
  "chapter-06",
] as const;

export type ChapterId = (typeof CHAPTER_IDS)[number];

export const CHAPTER_CONFIG: Record<
  ChapterId,
  { num: string; title: string; isDark: boolean }
> = {
  "chapter-01": { num: "01", title: "The Pattern", isDark: true },
  "chapter-02": { num: "02", title: "Not Just Us", isDark: false },
  "chapter-03": { num: "03", title: "Why Tools Fell Short", isDark: false },
  "chapter-04": { num: "04", title: "What We Built", isDark: false },
  "chapter-05": { num: "05", title: "The Name", isDark: false },
  "chapter-06": { num: "06", title: "Built for 2 a.m.", isDark: true },
};

export function useActiveChapter() {
  const [activeChapter, setActiveChapter] = useState<ChapterId>("chapter-01");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible sections
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Sort by intersection ratio or proximity to top viewport
          const mostVisible = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );
          if (mostVisible.target.id) {
            setActiveChapter(mostVisible.target.id as ChapterId);
          }
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.1, 0.3, 0.6],
      }
    );

    CHAPTER_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return {
    activeChapter,
    isDark: CHAPTER_CONFIG[activeChapter]?.isDark ?? false,
  };
}
