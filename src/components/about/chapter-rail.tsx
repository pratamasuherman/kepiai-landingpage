"use client";

import Link from "next/link";
import {
  CHAPTER_IDS,
  CHAPTER_CONFIG,
  type ChapterId,
} from "@/lib/use-active-chapter";

interface ChapterRailProps {
  activeChapter: ChapterId;
  isDark: boolean;
}

export function ChapterRail({ activeChapter, isDark }: ChapterRailProps) {
  return (
    <>
      {/* Desktop Fixed Adaptive Rail */}
      <aside className="hidden lg:block fixed top-36 left-[max(2.5rem,calc((100vw-1240px)/2+2.5rem))] w-56 z-30 pointer-events-auto">
        <div className="transition-colors duration-300">
          <p
            className={`font-mono text-[10px] tracking-[0.08em] uppercase mb-6 font-semibold transition-colors duration-300 ${
              isDark ? "text-cyan" : "text-indigo"
            }`}
          >
            Chapters
          </p>

          <nav className="space-y-3" aria-label="Story Chapters">
            {CHAPTER_IDS.map((id) => {
              const chapter = CHAPTER_CONFIG[id];
              const isActive = activeChapter === id;

              return (
                <Link
                  key={id}
                  href={`#${id}`}
                  className={`group flex items-center gap-3 py-1.5 transition-colors duration-250 text-sm ${
                    isActive
                      ? isDark
                        ? "text-cyan font-bold"
                        : "text-indigo font-bold"
                      : isDark
                      ? "text-paper/60 hover:text-paper"
                      : "text-ink/60 hover:text-navy"
                  }`}
                >
                  {/* Indicator Line / Dot */}
                  <span
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      isActive
                        ? isDark
                          ? "w-4 bg-cyan"
                          : "w-4 bg-indigo"
                        : "w-1.5 bg-peri/40 group-hover:bg-peri/70"
                    }`}
                    aria-hidden="true"
                  />

                  <span className="font-mono text-[11px] tracking-[0.08em]">
                    {chapter.num}
                  </span>
                  <span className="truncate">{chapter.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile Horizontal Chapter Strip */}
      <div className="lg:hidden sticky top-[68px] z-40 bg-paper/90 backdrop-blur-md border-b border-peri/20 py-2.5 px-4 -mx-6 mb-8 overflow-x-auto no-scrollbar shadow-xs">
        <div className="flex items-center gap-2 min-w-max">
          {CHAPTER_IDS.map((id) => {
            const chapter = CHAPTER_CONFIG[id];
            const isActive = activeChapter === id;

            return (
              <Link
                key={id}
                href={`#${id}`}
                className={`px-3 py-1 rounded-full text-xs font-mono tracking-wide transition-all ${
                  isActive
                    ? "bg-navy text-paper font-semibold shadow-sm"
                    : "bg-paper text-ink/70 hover:text-navy border border-peri/20"
                }`}
              >
                {chapter.num} · {chapter.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
