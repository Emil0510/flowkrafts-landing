# Integration Timeline Section Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a modern “Integration Timeline” section (Option A: vertical timeline) to the home page after Services, using the exact provided copy.

**Architecture:** Implement as a new presentational section component under `components/sections/`, rendered from `app/page.tsx` inside the existing `Reveal` wrapper. Update the home page Jest test to assert the section is present.

**Tech Stack:** Next.js App Router, React, Tailwind CSS, Jest + Testing Library.

---

### Task 1: Add/Update the home page test (TDD)

**Files:**
- Modify: `__tests__/page.test.tsx`

- [ ] **Step 1: Add an assertion for the new section heading**

Add an expectation for the Integration Timeline section heading:

```ts
expect(screen.getByRole('heading', { name: /integration timeline/i })).toBeInTheDocument()
```

- [ ] **Step 2: Run the test to verify it fails**

Run:
```bash
npm test -- __tests__/page.test.tsx
```

Expected: FAIL because the section does not exist yet.

---

### Task 2: Implement the `IntegrationTimeline` section (Option A)

**Files:**
- Create: `components/sections/IntegrationTimeline.tsx`

- [ ] **Step 1: Create the section component**

Implement a section with:
- `id="timeline"` and `className="xtract-section scroll-mt-24 ..."`
- Badge “Integration Timeline”
- H2 heading “Integration Timeline”
- Subtitle line
- Vertical timeline with 3 cards: `01`, `02`, `03` + title + provided paragraphs

- [ ] **Step 2: Confirm section renders without errors**

Run:
```bash
npm run lint
```

Expected: PASS.

---

### Task 3: Wire it into the home page after Services

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Import the new section and render after Services**

Add:
```ts
import IntegrationTimeline from '@/components/sections/IntegrationTimeline'
```

Render it after `<Services />` inside an existing `Reveal` wrapper.

- [ ] **Step 2: Run tests + build**

Run:
```bash
npm test
npm run build
```

Expected: PASS.

