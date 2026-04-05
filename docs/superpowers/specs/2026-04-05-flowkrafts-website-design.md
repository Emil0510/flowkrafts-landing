# FlowKrafts Agency Website — Design Spec

**Date:** 2026-04-05
**Status:** Approved

---

## Overview

A single-page marketing website for FlowKrafts, an AI automation agency. Built with Next.js (App Router) + Tailwind CSS. Deployed to `flowkrafts.com`.

**Brand:**
- Name: FlowKrafts
- Tagline: "We build systems that work while you sleep"
- Tone: Confident, technical, no fluff
- Booking link: `https://cal.com/flowkrafts`
- Footer email: `info@flowkrafts.com`

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 (App Router) | Framework, SSG, routing |
| Tailwind CSS | Styling |
| `next/font/google` (Inter) | Typography |
| TypeScript | Type safety |

---

## File Structure

```
flowkrafts/
├── app/
│   ├── layout.tsx              # Root layout: Inter font, dark bg, SEO metadata
│   ├── page.tsx                # Assembles all sections in order
│   └── globals.css             # Tailwind base + scroll-behavior: smooth
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx          # Fixed sticky nav, logo, CTA, mobile hamburger
│   │   ├── Hero.tsx            # Tagline + Book a Free Call CTA
│   │   ├── WhatWeDo.tsx        # 2-sentence explanation section
│   │   ├── Services.tsx        # 6-card service grid
│   │   ├── HowItWorks.tsx      # 3-step process
│   │   ├── WhoWeWorkWith.tsx   # 3 client type cards
│   │   ├── CTA.tsx             # "Ready to automate?" section
│   │   └── Footer.tsx          # Logo, tagline, email
│   └── ui/
│       ├── Button.tsx          # Reusable CTA button
│       └── ServiceCard.tsx     # Service card component
├── tailwind.config.ts          # Brand colors, Inter font
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| Background | `#0a0a0a` | Page background |
| Text primary | `#ffffff` | Headings |
| Text secondary | `#a1a1aa` | Body, descriptions |
| Accent blue | `#3b82f6` | CTAs, highlights, "Krafts" in logo |
| Card border | `rgba(255,255,255,0.08)` | Service card borders |
| Card bg | `rgba(255,255,255,0.03)` | Service card fill |

### Typography
- Font: Inter (via `next/font/google`)
- H1: `text-5xl font-bold` (desktop), `text-3xl` (mobile)
- H2 (section titles): `text-3xl font-bold`
- Body: `text-base text-zinc-400`
- Small labels (tools): `text-xs font-medium`

### Spacing
- Section vertical padding: `py-24` (96px) on desktop, `py-16` (64px) on mobile

---

## Sections

### 1. Navbar
- `position: fixed`, full width, `z-50`
- Background: `bg-[#0a0a0a]/80 backdrop-blur-sm` — frosted glass effect
- Logo: `Flow` in white + `Krafts` in `#3b82f6`, bold
- Right side: `Book a Free Call` button → `https://cal.com/flowkrafts`
- Mobile: hamburger icon toggles dropdown with CTA button
- No other nav links (single page, scroll-based)

### 2. Hero
- `min-h-screen`, vertically and horizontally centered
- H1: "We build systems that work while you sleep"
- Subtext: Agency name "FlowKrafts" as a label above H1
- CTA button: "Book a Free Call" → `https://cal.com/flowkrafts`
- No background image, no animation

### 3. What We Do
- Short section, centered text
- Heading: "What We Do"
- Body: "We don't just consult. We build, test and hand over working systems."

### 4. Services
- Section heading: "Our Services"
- 3-column grid (desktop) / 2-column (tablet) / 1-column (mobile)
- Each ServiceCard contains:
  - Unicode icon (top)
  - Title
  - 1-line description
  - Tools row: small `bg-white/10` badges for each tool
  - Deliverables: bulleted list
- Card style: `border border-white/[0.08] rounded-xl p-6 bg-white/[0.03]`
- Hover: `border-white/20` + `translateY(-2px)` transition

**Services data (exactly 6):**

1. **CRM System** — `⚙️`
   - Desc: For consultants, coaches and sales teams who need a simple client pipeline without bloated CRM tools.
   - Tools: Notion, Bolt
   - Deliverables: Notion/Bolt template, pipeline diagram, training video

2. **Order System** — `📦`
   - Desc: For restaurants, boutique shops and small e-commerce — automated order intake, confirmation and email notifications.
   - Tools: Bolt, N8N
   - Deliverables: Form link, flow diagram, demo video

3. **Marketing Automation** — `📣`
   - Desc: For B2B founders on LinkedIn or email — post calendars, cold email sequences and content generation on autopilot.
   - Tools: Notion, Apollo/Instantly, GPT
   - Deliverables: Content templates, email sequence, auto-publish plan

4. **Visual & Video Production (AI-Automated)** — `🎬`
   - Desc: For influencer agencies and content consultants — automated image/video generation and publishing workflows.
   - Tools: Fal.ai, N8N
   - Deliverables: Prompt templates, automated output system, demo video

5. **Text-Based Bot (GPT + RAG)** — `🤖`
   - Desc: For educators, product owners and support teams — a chatbot that answers questions from your own documents.
   - Tools: GPT, RAG architecture
   - Deliverables: Embedded bot, demo, PDF upload instructions

6. **Training & Onboarding System** — `🎓`
   - Desc: For any service business with a client onboarding process — video series, quizzes and automated follow-up reminders.
   - Tools: Loom, Notion, email automation
   - Deliverables: Training flow, email sequence, onboarding page design

### 5. How It Works
- Heading: "How It Works"
- 3 steps in horizontal row (desktop) / vertical stack (mobile):
  1. **Discover** — We learn your workflow and identify the highest-leverage automation.
  2. **Build** — We build and test the system end-to-end, no black boxes.
  3. **Hand Over** — You get full ownership: documentation, training and source files.
- Steps connected by dashed line on desktop
- Each step: numbered circle (blue) + bold title + description

### 6. Who We Work With
- Heading: "Who We Work With"
- 3 cards side by side (desktop) / stacked (mobile):
  1. **Consultants & Coaches** — "Drowning in manual follow-ups and scattered client data."
  2. **Small Business Owners** — "Running operations on spreadsheets and WhatsApp groups."
  3. **B2B Founders** — "Spending hours on content and outreach that should run itself."

### 7. CTA Section
- Dark section, centered
- Heading: "Ready to automate?"
- Subtext: "Let's find the highest-leverage system for your business."
- Button: "Book a Free Call" → `https://cal.com/flowkrafts`
- Subtle blue glow/border accent around the section

### 8. Footer
- Simple, single row on desktop
- Left: Logo (`Flow` white + `Krafts` blue) + tagline in small gray text below
- Right: `info@flowkrafts.com`
- Bottom: copyright line `© 2026 FlowKrafts. All rights reserved.`

---

## SEO Metadata (`app/layout.tsx`)

```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://flowkrafts.com'),
  title: 'FlowKrafts — We build systems that work while you sleep',
  description: 'AI automation agency. We build, test and hand over working systems for consultants, founders and small businesses.',
  openGraph: {
    title: 'FlowKrafts — We build systems that work while you sleep',
    description: 'AI automation agency. We build, test and hand over working systems.',
    url: 'https://flowkrafts.com',
    siteName: 'FlowKrafts',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowKrafts',
    description: 'AI automation agency. We build systems that work while you sleep.',
  },
  alternates: {
    canonical: 'https://flowkrafts.com',
  },
}
```

---

## Responsive Breakpoints

| Breakpoint | Services Grid | How It Works | Who We Work With |
|------------|--------------|--------------|-----------------|
| Mobile (<768px) | 1 column | Vertical stack | 1 column |
| Tablet (768–1024px) | 2 columns | Vertical stack | 1 column |
| Desktop (>1024px) | 3 columns | Horizontal row | 3 columns |

---

## Interactions

- **Smooth scroll:** `html { scroll-behavior: smooth }` in globals.css
- **Card hover:** `transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20`
- **Button hover:** `hover:bg-blue-500` (slightly lighter blue)
- **Navbar blur:** `backdrop-blur-sm` always active (no JS scroll listener needed)
- **Mobile menu:** React `useState` toggle, slides down below navbar

---

## Constraints

- No images, no stock photos — Unicode icons only
- No external JS dependencies beyond Next.js + Tailwind
- Fully static export compatible (`output: 'export'` optional)
- All CTA buttons link to `https://cal.com/flowkrafts`
