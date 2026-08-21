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

About page has source material from the original wireframe (6-chapter story,
"Not Just Us" personas in longer form, ends on "Built for 2 a.m.") but needs
a dedicated pass before implementation — don't invent it inline while
building components. Flag to the human and draft it as a separate step.

Pricing page: structure is locked (4×3 combination matrix — see AGENTS.md),
but actual prices are not. Build with placeholder figures in the exact
format `Rp —.—` per cell, clearly wired to real data later (i.e. don't hardcode
placeholder strings deep in JSX — pull them from a single typed data object
so swapping in real numbers is a one-file edit, not a hunt-and-replace).