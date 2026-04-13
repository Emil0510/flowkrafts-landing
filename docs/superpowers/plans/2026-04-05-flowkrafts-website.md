# FlowKrafts Agency Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready single-page marketing website for FlowKrafts using Next.js 14 + Tailwind CSS, deployed to flowkrafts.com.

**Architecture:** Single `app/page.tsx` assembles all sections. Each section is an isolated React component in `components/sections/`. Shared UI pieces (Button, ServiceCard) live in `components/ui/`. Static site — no API routes, no data fetching. Services data lives in `lib/services.ts`.

**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Jest, React Testing Library

---

## File Map

| File | Responsibility |
|------|---------------|
| `app/layout.tsx` | Root layout: Inter font, dark bg, SEO metadata |
| `app/page.tsx` | Assembles all sections in order |
| `app/globals.css` | Tailwind base + `scroll-behavior: smooth` + body defaults |
| `tailwind.config.ts` | Extend palette with brand blue `#3b82f6` |
| `lib/services.ts` | Services data array (6 items) |
| `components/ui/Button.tsx` | Reusable CTA anchor button |
| `components/ui/ServiceCard.tsx` | Service card: icon, title, desc, tools, deliverables |
| `components/sections/Navbar.tsx` | Fixed nav, logo, CTA, mobile hamburger |
| `components/sections/Hero.tsx` | Full-height hero with tagline + CTA |
| `components/sections/WhatWeDo.tsx` | 2-sentence explanation section |
| `components/sections/Services.tsx` | 3-col grid of ServiceCards |
| `components/sections/HowItWorks.tsx` | 3-step process section |
| `components/sections/WhoWeWorkWith.tsx` | 3 client type cards |
| `components/sections/CTA.tsx` | "Ready to automate?" section |
| `components/sections/Footer.tsx` | Logo, tagline, email, copyright |
| `jest.config.ts` | Jest + jsdom + next/jest integration |
| `jest.setup.ts` | Import `@testing-library/jest-dom` |

---

## Task 1: Scaffold the Next.js project

**Files:**
- Create: `flowkrafts/` (entire project)

- [ ] **Step 1: Run create-next-app from the parent directory**

```bash
cd /Users/emilabdurahmanli/Documents/startup
npx create-next-app@latest flowkrafts --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"
```

When prompted, accept all defaults. This creates: App Router, TypeScript, Tailwind CSS, ESLint, `@/*` path alias.

- [ ] **Step 2: Verify the dev server starts**

```bash
cd flowkrafts
npm run dev
```

Expected: `▲ Next.js 14.x.x — Local: http://localhost:3000`

Open `http://localhost:3000` in browser. You should see the default Next.js welcome page.

- [ ] **Step 3: Stop the dev server and commit the scaffold**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js 14 + Tailwind project"
```

---

## Task 2: Install and configure testing

**Files:**
- Create: `jest.config.ts`
- Create: `jest.setup.ts`
- Modify: `package.json` (add test scripts)

- [ ] **Step 1: Install testing dependencies**

```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom @types/jest
```

- [ ] **Step 2: Create `jest.config.ts`**

```ts
import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({ dir: './' })

const config: Config = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}

export default createJestConfig(config)
```

- [ ] **Step 3: Create `jest.setup.ts`**

```ts
import '@testing-library/jest-dom'
```

- [ ] **Step 4: Add test scripts to `package.json`**

Open `package.json` and add to `"scripts"`:

```json
"test": "jest",
"test:watch": "jest --watch"
```

- [ ] **Step 5: Verify Jest works**

```bash
npm test -- --passWithNoTests
```

Expected: `Test Suites: 0 passed, 0 total`

- [ ] **Step 6: Commit**

```bash
git add jest.config.ts jest.setup.ts package.json package-lock.json
git commit -m "chore: configure Jest + React Testing Library"
```

---

## Task 3: Configure Tailwind CSS and global styles

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`

- [ ] **Step 1: Update `tailwind.config.ts` with brand color**

Replace the entire file with:

```ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#3b82f6',
        },
      },
    },
  },
  plugins: [],
}

export default config
```

- [ ] **Step 2: Replace `app/globals.css` with brand defaults**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0a0a0a;
  color: #ffffff;
}
```

- [ ] **Step 3: Verify the dev server still starts cleanly**

```bash
npm run dev
```

Expected: No errors in terminal.

- [ ] **Step 4: Commit**

```bash
git add tailwind.config.ts app/globals.css
git commit -m "style: configure Tailwind brand palette and global base styles"
```

---

## Task 4: Create the Button component

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `__tests__/ui/Button.test.tsx`

- [ ] **Step 1: Create the test directory and write the failing test**

```bash
mkdir -p __tests__/ui
```

Create `__tests__/ui/Button.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Button from '@/components/ui/Button'

describe('Button', () => {
  it('renders children as link text', () => {
    render(<Button href="https://cal.com/flowkrafts">Book a Free Call</Button>)
    expect(screen.getByText('Book a Free Call')).toBeInTheDocument()
  })

  it('sets the correct href', () => {
    render(<Button href="https://cal.com/flowkrafts">Book a Free Call</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', 'https://cal.com/flowkrafts')
  })

  it('opens in a new tab', () => {
    render(<Button href="https://cal.com/flowkrafts">Book a Free Call</Button>)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm test -- __tests__/ui/Button.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/ui/Button'`

- [ ] **Step 3: Create `components/ui/Button.tsx`**

```bash
mkdir -p components/ui
```

```tsx
import Link from 'next/link'

interface ButtonProps {
  href: string
  children: React.ReactNode
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block px-6 py-3 rounded-lg font-semibold text-sm bg-[#3b82f6] text-white transition-all duration-200 hover:bg-blue-500"
    >
      {children}
    </Link>
  )
}
```

- [ ] **Step 4: Run the test to verify it passes**

```bash
npm test -- __tests__/ui/Button.test.tsx
```

Expected: PASS — 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/ui/Button.tsx __tests__/ui/Button.test.tsx
git commit -m "feat: add Button UI component"
```

---

## Task 5: Create the ServiceCard component

**Files:**
- Create: `components/ui/ServiceCard.tsx`
- Create: `__tests__/ui/ServiceCard.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/ui/ServiceCard.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import ServiceCard from '@/components/ui/ServiceCard'

const props = {
  icon: '⚙️',
  title: 'CRM System',
  description: 'For consultants and coaches.',
  tools: ['Notion', 'Bolt'],
  deliverables: ['Notion template', 'Training video'],
}

describe('ServiceCard', () => {
  it('renders the title', () => {
    render(<ServiceCard {...props} />)
    expect(screen.getByText('CRM System')).toBeInTheDocument()
  })

  it('renders all tools as badges', () => {
    render(<ServiceCard {...props} />)
    expect(screen.getByText('Notion')).toBeInTheDocument()
    expect(screen.getByText('Bolt')).toBeInTheDocument()
  })

  it('renders all deliverables', () => {
    render(<ServiceCard {...props} />)
    expect(screen.getByText('Notion template')).toBeInTheDocument()
    expect(screen.getByText('Training video')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(<ServiceCard {...props} />)
    expect(screen.getByText('⚙️')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/ui/ServiceCard.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/ui/ServiceCard'`

- [ ] **Step 3: Create `components/ui/ServiceCard.tsx`**

```tsx
interface ServiceCardProps {
  icon: string
  title: string
  description: string
  tools: string[]
  deliverables: string[]
}

export default function ServiceCard({ icon, title, description, tools, deliverables }: ServiceCardProps) {
  return (
    <div className="border border-white/[0.08] rounded-xl p-6 bg-white/[0.03] transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 flex flex-col gap-4">
      <div className="text-3xl">{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-zinc-400 text-sm">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <span key={tool} className="text-xs bg-white/10 text-zinc-300 px-2 py-1 rounded-md">
            {tool}
          </span>
        ))}
      </div>
      <ul className="space-y-1.5">
        {deliverables.map((item) => (
          <li key={item} className="text-xs text-zinc-500 flex items-start gap-1.5">
            <span className="text-[#3b82f6] mt-0.5 shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/ui/ServiceCard.test.tsx
```

Expected: PASS — 4 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/ui/ServiceCard.tsx __tests__/ui/ServiceCard.test.tsx
git commit -m "feat: add ServiceCard UI component"
```

---

## Task 6: Create services data

**Files:**
- Create: `lib/services.ts`
- Create: `__tests__/lib/services.test.ts`

- [ ] **Step 1: Write the failing test**

```bash
mkdir -p __tests__/lib
```

Create `__tests__/lib/services.test.ts`:

```ts
import { services } from '@/lib/services'

describe('services', () => {
  it('contains exactly 6 services', () => {
    expect(services).toHaveLength(6)
  })

  it('each service has required fields', () => {
    services.forEach((s) => {
      expect(s).toHaveProperty('icon')
      expect(s).toHaveProperty('title')
      expect(s).toHaveProperty('description')
      expect(s.tools.length).toBeGreaterThan(0)
      expect(s.deliverables.length).toBeGreaterThan(0)
    })
  })

  it('has the correct service titles in order', () => {
    expect(services.map((s) => s.title)).toEqual([
      'CRM System',
      'Order System',
      'Marketing Automation',
      'Visual & Video Production (AI-Automated)',
      'Text-Based Bot (GPT + RAG)',
      'Training & Onboarding System',
    ])
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/lib/services.test.ts
```

Expected: FAIL — `Cannot find module '@/lib/services'`

- [ ] **Step 3: Create `lib/services.ts`**

```bash
mkdir -p lib
```

```ts
export interface Service {
  icon: string
  title: string
  description: string
  tools: string[]
  deliverables: string[]
}

export const services: Service[] = [
  {
    icon: '⚙️',
    title: 'CRM System',
    description:
      'For consultants, coaches and sales teams who need a simple client pipeline without bloated CRM tools.',
    tools: ['Notion', 'Bolt'],
    deliverables: ['Notion/Bolt template', 'Pipeline diagram', 'Training video'],
  },
  {
    icon: '📦',
    title: 'Order System',
    description:
      'For restaurants, boutique shops and small e-commerce — automated order intake, confirmation and email notifications.',
    tools: ['Bolt', 'N8N'],
    deliverables: ['Form link', 'Flow diagram', 'Demo video'],
  },
  {
    icon: '📣',
    title: 'Marketing Automation',
    description:
      'For B2B founders on LinkedIn or email — post calendars, cold email sequences and content generation on autopilot.',
    tools: ['Notion', 'Apollo/Instantly', 'GPT'],
    deliverables: ['Content templates', 'Email sequence', 'Auto-publish plan'],
  },
  {
    icon: '🎬',
    title: 'Visual & Video Production (AI-Automated)',
    description:
      'For influencer agencies and content consultants — automated image/video generation and publishing workflows.',
    tools: ['Fal.ai', 'N8N'],
    deliverables: ['Prompt templates', 'Automated output system', 'Demo video'],
  },
  {
    icon: '🤖',
    title: 'Text-Based Bot (GPT + RAG)',
    description:
      'For educators, product owners and support teams — a chatbot that answers questions from your own documents.',
    tools: ['GPT', 'RAG architecture'],
    deliverables: ['Embedded bot', 'Demo', 'PDF upload instructions'],
  },
  {
    icon: '🎓',
    title: 'Training & Onboarding System',
    description:
      'For any service business with a client onboarding process — video series, quizzes and automated follow-up reminders.',
    tools: ['Loom', 'Notion', 'Email automation'],
    deliverables: ['Training flow', 'Email sequence', 'Onboarding page design'],
  },
]
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/lib/services.test.ts
```

Expected: PASS — 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add lib/services.ts __tests__/lib/services.test.ts
git commit -m "feat: add services data"
```

---

## Task 7: Create the Navbar section

**Files:**
- Create: `components/sections/Navbar.tsx`
- Create: `__tests__/sections/Navbar.test.tsx`

- [ ] **Step 1: Write the failing test**

```bash
mkdir -p __tests__/sections
```

Create `__tests__/sections/Navbar.test.tsx`:

```tsx
import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '@/components/sections/Navbar'

describe('Navbar', () => {
  it('renders the FlowKrafts logo text', () => {
    render(<Navbar />)
    expect(screen.getByText('Flow')).toBeInTheDocument()
    expect(screen.getByText('Krafts')).toBeInTheDocument()
  })

  it('renders the desktop CTA button', () => {
    render(<Navbar />)
    const links = screen.getAllByRole('link', { name: /book a free call/i })
    expect(links.length).toBeGreaterThan(0)
    expect(links[0]).toHaveAttribute('href', 'https://cal.com/flowkrafts')
  })

  it('toggles mobile menu on hamburger click', () => {
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle menu')
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    fireEvent.click(toggle)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/sections/Navbar.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/sections/Navbar'`

- [ ] **Step 3: Create `components/sections/Navbar.tsx`**

```bash
mkdir -p components/sections
```

```tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          <span className="text-white">Flow</span>
          <span className="text-[#3b82f6]">Krafts</span>
        </Link>

        <div className="hidden md:block">
          <Button href="https://cal.com/flowkrafts">Book a Free Call</Button>
        </div>

        <button
          className="md:hidden text-white text-xl"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden px-6 pb-4 bg-[#0a0a0a]/95 border-t border-white/[0.06]"
        >
          <Button href="https://cal.com/flowkrafts">Book a Free Call</Button>
        </div>
      )}
    </nav>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/sections/Navbar.test.tsx
```

Expected: PASS — 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/sections/Navbar.tsx __tests__/sections/Navbar.test.tsx
git commit -m "feat: add Navbar section with mobile hamburger menu"
```

---

## Task 8: Create the Hero section

**Files:**
- Create: `components/sections/Hero.tsx`
- Create: `__tests__/sections/Hero.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/sections/Hero.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Hero from '@/components/sections/Hero'

describe('Hero', () => {
  it('renders the tagline', () => {
    render(<Hero />)
    expect(screen.getByText(/we build systems that work while you sleep/i)).toBeInTheDocument()
  })

  it('renders the FlowKrafts label', () => {
    render(<Hero />)
    expect(screen.getByText('FlowKrafts')).toBeInTheDocument()
  })

  it('renders a CTA link to cal.com', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /book a free call/i })
    expect(link).toHaveAttribute('href', 'https://cal.com/flowkrafts')
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/sections/Hero.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/sections/Hero'`

- [ ] **Step 3: Create `components/sections/Hero.tsx`**

```tsx
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6 pt-16">
      <div className="max-w-3xl">
        <p className="text-[#3b82f6] text-sm font-semibold uppercase tracking-widest mb-4">
          FlowKrafts
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          We build systems that work while you sleep
        </h1>
        <p className="text-zinc-400 text-lg mb-10">
          AI automation for consultants, founders and small businesses.
        </p>
        <Button href="https://cal.com/flowkrafts">Book a Free Call</Button>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/sections/Hero.test.tsx
```

Expected: PASS — 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/sections/Hero.tsx __tests__/sections/Hero.test.tsx
git commit -m "feat: add Hero section"
```

---

## Task 9: Create the WhatWeDo section

**Files:**
- Create: `components/sections/WhatWeDo.tsx`
- Create: `__tests__/sections/WhatWeDo.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/sections/WhatWeDo.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import WhatWeDo from '@/components/sections/WhatWeDo'

describe('WhatWeDo', () => {
  it('renders the section heading', () => {
    render(<WhatWeDo />)
    expect(screen.getByText('What We Do')).toBeInTheDocument()
  })

  it('renders the body copy', () => {
    render(<WhatWeDo />)
    expect(
      screen.getByText(/we don't just consult\. we build, test and hand over working systems\./i)
    ).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/sections/WhatWeDo.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/sections/WhatWeDo'`

- [ ] **Step 3: Create `components/sections/WhatWeDo.tsx`**

```tsx
export default function WhatWeDo() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
        <p className="text-zinc-400 text-lg leading-relaxed">
          We don&apos;t just consult. We build, test and hand over working systems.
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/sections/WhatWeDo.test.tsx
```

Expected: PASS — 2 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/sections/WhatWeDo.tsx __tests__/sections/WhatWeDo.test.tsx
git commit -m "feat: add WhatWeDo section"
```

---

## Task 10: Create the Services section

**Files:**
- Create: `components/sections/Services.tsx`
- Create: `__tests__/sections/Services.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/sections/Services.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Services from '@/components/sections/Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders all 6 service cards', () => {
    render(<Services />)
    expect(screen.getByText('CRM System')).toBeInTheDocument()
    expect(screen.getByText('Order System')).toBeInTheDocument()
    expect(screen.getByText('Marketing Automation')).toBeInTheDocument()
    expect(screen.getByText('Visual & Video Production (AI-Automated)')).toBeInTheDocument()
    expect(screen.getByText('Text-Based Bot (GPT + RAG)')).toBeInTheDocument()
    expect(screen.getByText('Training & Onboarding System')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/sections/Services.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/sections/Services'`

- [ ] **Step 3: Create `components/sections/Services.tsx`**

```tsx
import ServiceCard from '@/components/ui/ServiceCard'
import { services } from '@/lib/services'

export default function Services() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Our Services</h2>
        <p className="text-zinc-400 text-center mb-16">Six systems. Real deliverables. No fluff.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/sections/Services.test.tsx
```

Expected: PASS — 2 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/sections/Services.tsx __tests__/sections/Services.test.tsx
git commit -m "feat: add Services section with 6-card grid"
```

---

## Task 11: Create the HowItWorks section

**Files:**
- Create: `components/sections/HowItWorks.tsx`
- Create: `__tests__/sections/HowItWorks.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/sections/HowItWorks.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import HowItWorks from '@/components/sections/HowItWorks'

describe('HowItWorks', () => {
  it('renders the section heading', () => {
    render(<HowItWorks />)
    expect(screen.getByText('How It Works')).toBeInTheDocument()
  })

  it('renders all 3 steps', () => {
    render(<HowItWorks />)
    expect(screen.getByText('Discover')).toBeInTheDocument()
    expect(screen.getByText('Build')).toBeInTheDocument()
    expect(screen.getByText('Hand Over')).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/sections/HowItWorks.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/sections/HowItWorks'`

- [ ] **Step 3: Create `components/sections/HowItWorks.tsx`**

```tsx
const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We learn your workflow and identify the highest-leverage automation.',
  },
  {
    number: '02',
    title: 'Build',
    description: 'We build and test the system end-to-end, no black boxes.',
  },
  {
    number: '03',
    title: 'Hand Over',
    description: 'You get full ownership: documentation, training and source files.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6]/20 border border-[#3b82f6]/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#3b82f6] font-bold text-sm">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-zinc-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/sections/HowItWorks.test.tsx
```

Expected: PASS — 2 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/sections/HowItWorks.tsx __tests__/sections/HowItWorks.test.tsx
git commit -m "feat: add HowItWorks section"
```

---

## Task 12: Create the WhoWeWorkWith section

**Files:**
- Create: `components/sections/WhoWeWorkWith.tsx`
- Create: `__tests__/sections/WhoWeWorkWith.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/sections/WhoWeWorkWith.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith'

describe('WhoWeWorkWith', () => {
  it('renders the section heading', () => {
    render(<WhoWeWorkWith />)
    expect(screen.getByText('Who We Work With')).toBeInTheDocument()
  })

  it('renders all 3 client types', () => {
    render(<WhoWeWorkWith />)
    expect(screen.getByText('Consultants & Coaches')).toBeInTheDocument()
    expect(screen.getByText('Small Business Owners')).toBeInTheDocument()
    expect(screen.getByText('B2B Founders')).toBeInTheDocument()
  })

  it('renders each pain point', () => {
    render(<WhoWeWorkWith />)
    expect(screen.getByText(/drowning in manual follow-ups/i)).toBeInTheDocument()
    expect(screen.getByText(/running operations on spreadsheets/i)).toBeInTheDocument()
    expect(screen.getByText(/spending hours on content/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/sections/WhoWeWorkWith.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/sections/WhoWeWorkWith'`

- [ ] **Step 3: Create `components/sections/WhoWeWorkWith.tsx`**

```tsx
const clients = [
  {
    icon: '💼',
    type: 'Consultants & Coaches',
    pain: 'Drowning in manual follow-ups and scattered client data.',
  },
  {
    icon: '🏪',
    type: 'Small Business Owners',
    pain: 'Running operations on spreadsheets and WhatsApp groups.',
  },
  {
    icon: '🚀',
    type: 'B2B Founders',
    pain: 'Spending hours on content and outreach that should run itself.',
  },
]

export default function WhoWeWorkWith() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-16">Who We Work With</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {clients.map((client) => (
            <div
              key={client.type}
              className="border border-white/[0.08] rounded-xl p-6 bg-white/[0.03] text-center"
            >
              <div className="text-4xl mb-4">{client.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{client.type}</h3>
              <p className="text-zinc-400 text-sm">{client.pain}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/sections/WhoWeWorkWith.test.tsx
```

Expected: PASS — 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/sections/WhoWeWorkWith.tsx __tests__/sections/WhoWeWorkWith.test.tsx
git commit -m "feat: add WhoWeWorkWith section"
```

---

## Task 13: Create the CTA section

**Files:**
- Create: `components/sections/CTA.tsx`
- Create: `__tests__/sections/CTA.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/sections/CTA.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import CTA from '@/components/sections/CTA'

describe('CTA', () => {
  it('renders the heading', () => {
    render(<CTA />)
    expect(screen.getByText('Ready to automate?')).toBeInTheDocument()
  })

  it('renders the subtext', () => {
    render(<CTA />)
    expect(
      screen.getByText(/let's find the highest-leverage system for your business/i)
    ).toBeInTheDocument()
  })

  it('renders a CTA link to cal.com', () => {
    render(<CTA />)
    const link = screen.getByRole('link', { name: /book a free call/i })
    expect(link).toHaveAttribute('href', 'https://cal.com/flowkrafts')
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/sections/CTA.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/sections/CTA'`

- [ ] **Step 3: Create `components/sections/CTA.tsx`**

```tsx
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center border border-[#3b82f6]/20 rounded-2xl p-16 bg-[#3b82f6]/[0.04]">
        <h2 className="text-4xl font-bold text-white mb-4">Ready to automate?</h2>
        <p className="text-zinc-400 mb-10">
          Let&apos;s find the highest-leverage system for your business.
        </p>
        <Button href="https://cal.com/flowkrafts">Book a Free Call</Button>
      </div>
    </section>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/sections/CTA.test.tsx
```

Expected: PASS — 3 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/sections/CTA.tsx __tests__/sections/CTA.test.tsx
git commit -m "feat: add CTA section"
```

---

## Task 14: Create the Footer section

**Files:**
- Create: `components/sections/Footer.tsx`
- Create: `__tests__/sections/Footer.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/sections/Footer.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Footer from '@/components/sections/Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Flow')).toBeInTheDocument()
    expect(screen.getByText('Krafts')).toBeInTheDocument()
  })

  it('renders the tagline', () => {
    render(<Footer />)
    expect(screen.getByText(/we build systems that work while you sleep/i)).toBeInTheDocument()
  })

  it('renders the email as a mailto link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /info@flowkrafts.com/i })
    expect(link).toHaveAttribute('href', 'mailto:info@flowkrafts.com')
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 FlowKrafts/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/sections/Footer.test.tsx
```

Expected: FAIL — `Cannot find module '@/components/sections/Footer'`

- [ ] **Step 3: Create `components/sections/Footer.tsx`**

```tsx
export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xl font-bold">
            <span className="text-white">Flow</span>
            <span className="text-[#3b82f6]">Krafts</span>
          </p>
          <p className="text-zinc-500 text-sm mt-1">We build systems that work while you sleep</p>
        </div>
        <a
          href="mailto:info@flowkrafts.com"
          className="text-zinc-400 text-sm hover:text-white transition-colors"
        >
          info@flowkrafts.com
        </a>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/[0.04]">
        <p className="text-zinc-600 text-xs text-center">
          © 2026 FlowKrafts. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/sections/Footer.test.tsx
```

Expected: PASS — 4 tests passed

- [ ] **Step 5: Commit**

```bash
git add components/sections/Footer.tsx __tests__/sections/Footer.test.tsx
git commit -m "feat: add Footer section"
```

---

## Task 15: Update layout.tsx with SEO metadata and Inter font

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Step 1: Replace `app/layout.tsx` with production layout**

```tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://flowkrafts.com'),
  title: 'FlowKrafts — We build systems that work while you sleep',
  description:
    'AI automation agency. We build, test and hand over working systems for consultants, founders and small businesses.',
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```

- [ ] **Step 2: Verify the dev server starts with no errors**

```bash
npm run dev
```

Expected: No errors. Visit `http://localhost:3000` — page background should be `#0a0a0a` (near-black).

- [ ] **Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: configure layout with Inter font and production SEO metadata"
```

---

## Task 16: Assemble page.tsx

**Files:**
- Modify: `app/page.tsx`
- Create: `__tests__/page.test.tsx`

- [ ] **Step 1: Write the failing test**

Create `__tests__/page.test.tsx`:

```tsx
import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home page', () => {
  it('renders all major sections', () => {
    render(<Home />)
    // Hero
    expect(screen.getByText(/we build systems that work while you sleep/i)).toBeInTheDocument()
    // Services
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    // How it works
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    // Who we work with
    expect(screen.getByText('Who We Work With')).toBeInTheDocument()
    // CTA
    expect(screen.getByText('Ready to automate?')).toBeInTheDocument()
    // Footer
    expect(screen.getByText(/info@flowkrafts.com/i)).toBeInTheDocument()
  })
})
```

- [ ] **Step 2: Run to verify it fails**

```bash
npm test -- __tests__/page.test.tsx
```

Expected: FAIL — imports fail because `app/page.tsx` still has the default scaffold content.

- [ ] **Step 3: Replace `app/page.tsx` with assembled page**

```tsx
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import WhatWeDo from '@/components/sections/WhatWeDo'
import Services from '@/components/sections/Services'
import HowItWorks from '@/components/sections/HowItWorks'
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <Services />
        <HowItWorks />
        <WhoWeWorkWith />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
```

- [ ] **Step 4: Run test to verify it passes**

```bash
npm test -- __tests__/page.test.tsx
```

Expected: PASS — 1 test passed

- [ ] **Step 5: Run all tests to verify nothing is broken**

```bash
npm test
```

Expected: All test suites pass. No failures.

- [ ] **Step 6: Commit**

```bash
git add app/page.tsx __tests__/page.test.tsx
git commit -m "feat: assemble full page with all sections"
```

---

## Task 17: Final build verification

**Files:** None — verification only

- [ ] **Step 1: Run the full test suite one final time**

```bash
npm test
```

Expected: All tests pass, zero failures.

- [ ] **Step 2: Run the production build**

```bash
npm run build
```

Expected: Output ends with:
```
Route (app)   Size
┌ ○ /         ...
└ ○ _not-found ...
✓ Compiled successfully
```

No errors, no warnings about missing modules.

- [ ] **Step 3: Preview the production build locally**

```bash
npm run start
```

Open `http://localhost:3000`. Verify:
- Background is near-black (`#0a0a0a`)
- Navbar is fixed with `Flow` white + `Krafts` blue
- Hero shows tagline and CTA button
- Services grid shows all 6 cards
- How It Works shows 3 steps
- Who We Work With shows 3 client cards
- CTA section has blue border accent
- Footer shows email and copyright
- Mobile: resize browser to 375px — hamburger appears, grid collapses to 1 column

- [ ] **Step 4: Final commit**

```bash
git add .
git commit -m "chore: verified production build and all tests passing"
```

---

## Summary

| Task | Components Built | Tests |
|------|-----------------|-------|
| 1 | Project scaffold | — |
| 2 | Jest + RTL config | — |
| 3 | Tailwind + globals | — |
| 4 | `Button` | 3 |
| 5 | `ServiceCard` | 4 |
| 6 | `lib/services.ts` | 3 |
| 7 | `Navbar` | 3 |
| 8 | `Hero` | 3 |
| 9 | `WhatWeDo` | 2 |
| 10 | `Services` | 2 |
| 11 | `HowItWorks` | 2 |
| 12 | `WhoWeWorkWith` | 3 |
| 13 | `CTA` | 3 |
| 14 | `Footer` | 4 |
| 15 | `layout.tsx` | — |
| 16 | `page.tsx` | 1 |
| 17 | Build verification | — |

**Total: 33 tests across 11 test files**
