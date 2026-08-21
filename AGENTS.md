# AGENTS.md — Kepiai marketing site

This file is standing context. Read it fully before starting any task in this repo.
It encodes decisions that were already made and validated — do not re-derive or
"improve" them without being asked. Consistency across pages matters more than
any single page being clever.

## What this project is

Kepiai is a social analytics + reporting SaaS for Indonesian social media
managers — UMKM owners, solo founders, brand managers. The brand's own thesis,
taken from its story copy: "sits perfectly still while the river moves around
it. Not oblivious. Unthreatened." Every design decision should be legible
against that sentence. Calm confidence, not noise.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion for all animation — no other animation library
- Fonts loaded via `next/font/google`, never a `<link>` tag or CDN import
- No backend/CMS in this phase — content is hardcoded in components

Commands: `npm run dev`, `npm run build`, `npm run lint`.

## Reference implementation — read this first, every time

`/reference/homepage-prototype.html` is a working, browser-tested prototype of
the homepage that has already been reviewed and approved. It is not a mockup —
it is ground truth for:

- Exact color values and where each is used
- Exact motion timings, easings, and sequencing (hero assembly animation,
  scroll parallax, scroll-reveals, count-ups, chart draw-ins)
- Section order and structure
- Accessibility patterns (focus states, reduced-motion handling, contrast)

When building the homepage, port this file's behavior faithfully into
Next.js/Tailwind/Framer Motion — do not reinterpret or simplify the motion
design. When building Pricing or About, this file is still the source of
truth for every *shared* pattern (nav behavior, buttons, type scale, dark vs.
light section treatment, reveal timing) even though those pages have their
own content.

`/reference/copy-deck.md` contains every line of copy already locked for the
homepage. Use it verbatim. Do not rewrite, "improve," or shorten it without
being asked — it went through several rounds of review already.

## Brand tokens

Use these as Tailwind theme colors, not one-off hex values in components.

| Token | Hex | Use |
|---|---|---|
| `navy` | `#2D2D78` | Primary text on light bg, dark-surface gradient base |
| `tealdeep` | `#04505E` | Dark-surface gradient end stop |
| `mint` | `#4DBE9E` | Accent — fills, icons, decorative only. **Never as text on a light background** (fails contrast — see rule below) |
| `cyan` | `#3BC2D8` | Accent, works as text on dark backgrounds only |
| `indigo` | `#303E99` | The workhorse text-accent color on light backgrounds — labels, eyebrows, links |
| `peri` (periwinkle) | `#7A80BE` | Hairline rules and decorative dividers only — fails text contrast on light bg, do not use for text |
| `paper` | `#F7F7FB` | Light section background |
| `ink` | `#14152B` | Body text on light backgrounds |

Fonts (all via `next/font/google`):
- **Sora** (700/800) — display/headings
- **Plus Jakarta Sans** (400/500/600/700) — body/UI
- **IBM Plex Mono** (500/600) — eyebrows, labels, data, prices. Uppercase, tracked (`letter-spacing: 0.08em`)

## Contrast rule — this is not optional

Every text/background pairing must be checked against real WCAG contrast math
before shipping, not eyeballed. Minimums: 4.5:1 for text under ~18px, 3:1 for
larger/bold text. Two specific traps this project already hit once:

1. **Low-opacity dark color on a light background gets *lighter*, not more
   "muted-but-legible."** `navy/40` on `paper` fails badly. For muted text on
   light backgrounds, use a solid mid-tone (`indigo` at full or near-full
   opacity) — never a dark color faded toward the background.
2. **`mint` and `peri` both fail as text color on `paper`** (measured ~2.1:1
   and ~3.5:1). They work great as fills, icons, dots, and hairlines. If you
   want a small mono label to read as "brand-colored," use `indigo` instead.

If unsure, compute it — don't guess from how it looks in the editor.

## Motion principles

1. **The signature moment is the hero assembly animation** (scattered UI
   fragments — browser tabs, a spreadsheet corner, an IG stat, a TikTok chip,
   a clock reading "2:14 AM" — drift, idle-bob independently, then converge
   into one "Kepiai Insight" card). This exists once, on the homepage. Do not
   repeat this exact device elsewhere — find something else if another page
   needs a moment.
2. **The capybara mark never moves.** Structurally, it must sit outside
   whatever wrapper receives scroll-parallax or entrance-animation transforms,
   so it never inherits motion. This is a hard rule, not a suggestion — it's
   the entire visual argument of the brand.
3. **Dark sections carry narrative, light sections carry function.** Hero,
   the quiz-invite CTA, and story/emotional beats on About are dark
   (navy→tealdeep gradient). Pricing tables, comparisons, and anything the
   user needs to scan or decide from stays light. Never darken a page whose
   job is comparison.
4. **Scroll-linked parallax, never scroll-jacking.** Elements may drift/fade
   at different rates as the user scrolls past a section. Never pin a section
   and hijack scroll to scrub a locked timeline — it's fragile, it's bad for
   motion sensitivity, and it fights the brand's own "calm" premise.
5. **One orchestrated moment lands harder than scattered effects.** Default
   to restraint. Scroll-reveals (fade + translateY, ~700ms, staggered) are
   the baseline for everything; save anything bigger for a single deliberate
   spot per page.
6. **`prefers-reduced-motion: reduce` must be respected everywhere**, no
   exceptions — jump straight to end-states, disable parallax and idle-drift
   entirely, keep scroll-reveals but skip the transition.

## Copy voice

Plain, specific, a little wry. Never generic SaaS marketing filler. Pull
directly from `/reference/copy-deck.md`. Do not invent testimonials, client
logos, or statistics presented as real client data — if a mock/illustrative
number is shown (e.g. in a product demo visual), it must be labeled
"Illustrative view" or equivalent, never implied to be real.

## Explicitly forbidden — generic AI-design tells

Do not do any of the following unless a human explicitly asks for it:

- Purple-to-pink or blue-to-purple gradients
- A centered hero: eyebrow + headline + subhead + two pill buttons, dead
  center, no asymmetry
- Generic 3-column icon+headline+paragraph "feature grid" using stock icon
  sets — this project has exactly two products; give them real, distinct
  treatment, not templated cards
- Fake testimonial cards with star ratings and stock avatar circles
- Wavy SVG blob dividers between sections
- Emoji used as icons
- An infinitely-pulsing CTA button or glow
- Numbered markers (01/02/03) used decoratively where there's no real
  sequence — the one place they're justified here is Performance
  Intelligence → Report Generator, because that actually is a real order of
  operations

## Accessibility floor (non-negotiable)

- Visible focus states on every interactive element (`focus-visible`, not
  removed)
- Full keyboard navigability, including the mobile menu
- All contrast per the rule above
- `prefers-reduced-motion` respected everywhere
- Alt text on meaningful images, empty `alt=""` on decorative ones (the
  fragment mockups and capybara watermark are decorative)
- Skip-to-content link

## Page-specific notes

**Pricing** (`/pricing`): Keep the full 4×3 combination matrix on desktop —
this was a deliberate decision, not a default. On tablet, sticky first
column with horizontal scroll. On mobile, collapse into 4 accordion groups
(one per Performance tier), each expanding to its 3 report-support options.
Include a persistent "Not sure? Take the quiz" affordance since the matrix
and the quiz solve the same problem for different people.

**About** (`/about`): Sticky chapter rail, 6 chapters, dark → light → dark
arc (night → daylight reasoning → night again, ending on "Built for 2 a.m.").
This mirrors the story's own structure — don't flatten it to all-light or
all-dark for "consistency" with the rest of the site; the arc is the point.
