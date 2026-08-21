# Copy deck — Homepage (locked)

Every line below has been reviewed and approved in the working prototype.
Use verbatim. If a line needs to change, that's a conversation, not a
silent edit during implementation.

## Nav

- Logo wordmark: `kepiai` (lowercase, matches logo asset)
- Links: Product · Pricing · About Us
- CTA: "Book a Demo"

## Hero

- Eyebrow: "Social analytics · made legible"
- Headline: "Chill. We've got the metrics."
- Subhead: "Every platform hands you numbers. Kepiai hands you the reason behind them — performance, content, audience, and campaigns, unified into one workspace that turns days of reporting into minutes."
- Primary CTA: "Explore Kepiai"
- Secondary CTA: "Book a Demo"
- Micro caption: "Less assembling. More understanding."
- Hero visual fragments (illustrative, not real data): "14 tabs open" · "Column F" · "Reel · reach / +212%" · "metrics.csv" · "2:14 AM"
- Insight card: "Kepiai Insight" / "Your report is ready to review."

## What Kepiai replaces

Eyebrow: "What Kepiai replaces"

01. "Instagram Insights, exported to CSV."
02. "TikTok metrics, pasted into column F."
03. "A spreadsheet held together by formulas nobody remembers writing."
04. "Sunday afternoons assembling a deck instead of planning the quarter."

Resolving line: "One workspace. Every answer already in it."

## Products

Eyebrow: "The workspace"
Heading: "You have the insights. Now make them count."
Subhead: "We've transformed your metrics into clear insights and actionable reports. All that's left is turning them into your next confident move."

### 01 — Performance Intelligence
Heading: "Know what happened. Understand why. Decide what comes next."
Body: "Connect your channel, content, audience, campaign, and community performance in one intelligent view — moving beyond surface-level metrics to what's actually driving results."
Features: Unified channel performance · Content intelligence · Audience insights · Campaign & community analysis
Link: "Explore Performance Intelligence"
Demo panel label: "Performance overview" / "Illustrative view"
Sample stats (illustrative only): Engagement score 92 · Content pillars 6 · Retention lift +18%

### Connector
"Performance Intelligence finds the meaning. Report Generator makes it ready to share."

### 02 — Report Generator
Heading: "Turn performance data into a story people can understand and act on."
Body: "Transform complex data into structured, editable, presentation-ready reports — automated generation, analyst interpretation, or deeper strategic consultancy."
Features: Automated reporting · Custom brand templates · Analyst interpretation · Key findings & recommendations
Link: "Explore Report Generator"
Demo panel label: "Draft report" / "Illustrative view"
Chip: "Exported to .pptx, on brand"

### Products closer
"Not sure which combination is right for you?"
CTA: "Find Your Kepi Match"

## Who it's for

Eyebrow: "Not just us"
Heading: "Different scale. Identical problem."

**The UMKM Owner** — "Closing her shop in Bandung, opening her phone to figure out why last week's Reel outperformed a month of posts — no analyst to ask, no idea which number matters."

**The Solo Founder** — "Running the brand's Instagram between operations and inventory, guessing at posting times because guessing is faster than learning an enterprise dashboard."

**The Brand Manager** — "A small team, a large portfolio — spending Sunday assembling a deck instead of planning the quarter."

## Quiz invite

Eyebrow: "Find your kepi match"
Heading: "Tell us how your team works."
Body: "Answer a few quick questions about your channels, reporting routine, and challenges — we'll match you with the right combination."
CTA: "Start the Quiz"
Micro caption: "About three minutes. No spreadsheets required."

## Footer

Tagline: "Chill. We've got the metrics."
Product: Performance Intelligence · Report Generator · Pricing
Company: About Us · Our Story
Get started: Find Your Kepi Match · Book a Demo
Legal: "© 2026 Kepiai. All rights reserved."

---

# Copy not yet written

Pricing page: structure is locked (4×3 combination matrix — see AGENTS.md),
but actual prices are not. Built with placeholder figures in the exact
format `Rp —` per cell, wired through `src/data/pricing.ts` so swapping in
real numbers is a one-file edit.

---

# Copy — About page (locked)

Source: original wireframe's Section 5, extracted verbatim, with "Kepi.ai"
renamed to "Kepiai" throughout for consistency with the rest of the site,
and the Solo Founder line adjusted to gender-neutral phrasing to match the
homepage's "Who It's For" section (see conversation notes — flagged, not
silently decided).

## Nav rail (sticky, 6 chapters)

01 — The Pattern
02 — Not Just Us
03 — Why Tools Fell Short
04 — What We Built
05 — The Name
06 — Built for 2 a.m.

Rail stays in view while scrolling and highlights the active chapter as the
reader passes it.

## Intro (above chapter 01)

Heading: "Our Story"
Line: "The report was due at nine. It was 2 a.m., and we still hadn't started thinking."

## 01 — The Pattern

"That was the pattern. Fourteen tabs open. Instagram Insights exported to CSV, TikTok metrics pasted into column F, a spreadsheet held together by formulas nobody remembered writing. By the time the deck was formatted, the deadline had arrived — and the actual question, the one the client would ask in the meeting, was still unanswered.

We were digital analysts and strategists. We built content frameworks, ran campaign post-mortems, benchmarked competitors for brands that took their numbers seriously. We were good at it. But most of the job wasn't analysis. It was assembly."

Visual placeholder: late desk, laptop glow, half-built deck, 2 a.m. mood (dark/moody — this is a "build a visual" spot, not a stock photo, per AGENTS.md's no-stock-photo stance)

## 02 — Not Just Us

"Then we started noticing the same night happening to people with far fewer resources than us."

**The UMKM Owner** — "In Bandung, closing her shop and opening her phone to figure out why last week's Reel outperformed everything she'd posted in a month — with no analyst to ask, no framework to apply, and no idea which number was the one that mattered."

**The Solo Founder** — "Running the brand's Instagram between operations and inventory, guessing at posting times because guessing was faster than learning a dashboard built for enterprise teams." *(adjusted from original "his own brand's" — see note above)*

**The Brand Manager** — "A small team and a large portfolio, spending Sunday assembling a deck instead of planning the quarter."

Closing line: "Different scale. Identical problem. Everyone was drowning in data nobody had translated for them."

## 03 — Why Tools Fell Short

Heading (in-page): "Why the Tools Fell Short"

"The tools available didn't solve this for either group. They were built to display, and display is the easy half. A dashboard could show engagement down twelve percent. It could not tell you which content pillar caused it, whether your audience had understood the campaign at all, or which competitor had quietly taken the attention you lost. Everything past the number was still manual and everything past the number was the part that mattered. Enterprise platforms buried it under complexity. Simple tools skipped it entirely."

## 04 — What We Built

"So we built the thing we needed, for the people who need it more.

Kepiai unifies Instagram, TikTok, and Facebook into one source of truth, then keeps going where dashboards stop. It reads comment relevance semantically, so you know whether your audience engaged with your message or just typed an emoji. It scores community contribution, so your advocates surface instead of hiding in a like count. It explains video retention by duration and content pillar, so you learn why something held attention. And it exports the whole thing to an editable PowerPoint in your brand colors — the days-long task that used to end our months.

We put analyst-grade thinking inside something a brand owner can open on a Tuesday night and understand immediately."

Visual placeholder: the Kepiai workspace, unified Instagram/TikTok/Facebook view
Caption: "Not a simplified version of the real tool. The real tool, made legible."

## 05 — The Name

"The name is deliberate. KPI is the acronym our market loses sleep over — whether you're presenting to a client or answering to yourself.

We put a capybara beside it because the capybara sits perfectly still while the river moves around it. Not oblivious. Unthreatened."

## 06 — Built for 2 a.m.

"We built Kepiai for 2 a.m. So nobody has to be there again."

Closing tagline: "Chill. We've got the metrics."