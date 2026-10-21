# Portfolio Canedo — Design Spec

**Date:** 2026-10-21
**Author:** rafabcanedo

---

## Overview

A minimalist single-page developer portfolio for Canedo Dev. Four sections rendered on one page with scroll-triggered animations via Framer Motion. Content lives in TypeScript data files. Types and interfaces centralized in `src/types/`.

---

## Architecture

### Folder Structure

```
src/
  app/
    page.tsx                  → renders all sections in order
  components/
    my-components/
      navbar/                 → sticky, transparent bg, logo left
      footer/                 → centered copyright line
      logo/                   → text logo "Canedo Dev"
    sections/
      intro/
      about-me/
      how-i-work/
      my-experience/
    ui/                       → shadcn components
    ui-shared/                → SectionTitle, Card, Badge (reusable shared)
  data/
    intro.ts
    about.ts
    stack.ts
    experience.ts
  types/
    index.ts                  → Experience, StackTopic, and other interfaces
```

### page.tsx shape

```tsx
<Navbar />
<main>
  <Intro />
  <AboutMe />
  <HowIWork />
  <MyExperience />
</main>
<Footer />
```

### Tech decisions

- **Animations:** Framer Motion — `whileInView` for section fade-ins, `useScroll` + `scaleY` for timeline line draw, stagger for cards
- **Styling:** Tailwind CSS v4, shadcn/ui base-nova, CSS variables
- **Fonts:** Poppins for headings, Geist for body (already configured)
- **Icons:** lucide-react
- **Content:** TypeScript data files in `src/data/`, not hardcoded in components

---

## Navbar

- Sticky, transparent background
- Logo component (`Canedo Dev` text) on the left
- Full width with centered max-width container
- No nav links — logo only

---

## Footer

- Simple centered row
- Text: `"Developed by Canedo"` + `"© 2026 CanedoDev. All rights reserved."`
- Minimal styling only

---

## Section 1 — Intro

**Layout:** Two-column — content left, avatar right.

**Left column (top to bottom):**
1. Green dot + `"Available for work or ready for projects"` — availability badge
2. Greeting: `"Hy there 👋"` — large, Poppins
3. Headline: `"I'm a fullstack developer focused on performance, scalable systems, and elegant applications."` — large, Poppins
4. Two mini experience cards inline (no border):
   - 🟡 Mercado Livre / Software Developer / 2024–2026
   - 🔵 Azzurro / Founder & Software Developer / 2024–2025
5. Tagline: `"Focus in building fullstack web application and coding my world"` — small, muted

**Right column:**
- `avatar.png` — rounded corners, fixed size

**Colored dots:** Simple `div` circles (no library) — green, yellow, blue.

---

## Section 2 — About Me

**Layout:** Two-column — image left, text right.

**Left:** `about-me.png` — fixed size, slightly rounded corners.

**Right:**
- `SectionTitle`: `"About Me"`
- Body text (two paragraphs):

> "I live in Brazil and love traveling to other countries to network, discover new cultures, and gain perspectives you can only find by stepping outside your comfort zone. I believe those experiences deeply shape how we see the world, and ultimately how we build products and create meaningful experiences.
>
> I approach life with calm and creativity, always eager to explore new things. I carry that same mindset into my work, staying curious, giving my best in every project, and genuinely caring about the people I collaborate with."

**Animation:** Fade-in on scroll (`whileInView`).

---

## Section 3 — How I Work

**Layout:** `SectionTitle` centered, then a responsive card grid.

**Grid:** 3 columns desktop / 2 columns tablet / 1 column mobile.

**Topics and items:**

| Topic    | Items                        |
|----------|------------------------------|
| Frontend | Next, TypeScript, Vite       |
| Backend  | Golang, TypeScript, Java     |
| A.I      | Claude, Codex, Gemini        |
| Design   | Figma, Pen                   |
| Infra    | Docker, Git                  |

**Card anatomy:** Topic title (bold) → thin divider → list of items (plain text, no icons).

**Style:** Subtle border, rounded corners, no heavy shadows — minimal.

**Animation:** Stagger fade-in on scroll (Framer Motion stagger children).

---

## Section 4 — My Experience

**Layout:** Vertical timeline — company/date left-aligned against a vertical line, role/bullets right.

**Timeline line:** Draws itself downward as the user scrolls — Framer Motion `useScroll` + `scaleY` on the line element.

**Entries (top to bottom):**

### Mercado Livre — Software Developer — 2024–2026
Logo: `meli-logo.png` (~32px height)
- Built and maintained fullstack features across two logistics platforms using TypeScript, React, Java Spring Boot, and Golang — from adapting UIs to restructuring backend API responses.
- Contributed to a major platform unification initiative, building key operational screens from scratch aligned with UX designs to support multiple logistics workflows.
- Handled deployments and feature flags via Fury, monitored performance in Datadog, and worked on backend optimizations including caching and API restructuring.

### Azzurro — Founder & Software Developer — 2024–2025
Logo: `azzurro.png` (~32px height)
- Architected and delivered responsive web applications and landing pages for content creators, independent professionals, and digital marketing teams — focused on performance, accessibility, and conversion.
- Implemented lightweight REST APIs and third-party integrations (contact forms, email services, data handling) to support end-to-end digital solutions.
- Managed full project lifecycle — from scoping and client communication to cross-browser testing, domain configuration, and production deployment, aligned with marketing and conversion goals.

### Freelancer — Software Developer — 2022–2024
Icon: 💻 emoji
- Developed landing pages and websites for local businesses and independent professionals, focused on frontend performance, user interaction, and building online presence.
- Strengthened business understanding, client communication, project organization, and time management through hands-on freelance work.

### Who is Happy — QA Engineer — 2021–2021
Logo: `who-is-happ.png` (~32px height) — filename missing `y`, rename to `who-is-happy.png`
- Tested new features, participated in system design meetings, and contributed to software project structuring based on development best practices.
- Supported users to improve their experience and helped optimize team processes to boost productivity.

**Entry animation:** Each entry fades in as it enters the viewport.

---

## Assets

| File              | Used in        |
|-------------------|----------------|
| `avatar.png`      | Intro (right)  |
| `about-me.png`    | About Me (left)|
| `meli-logo.png`   | Experience     |
| `azzurro.png`     | Experience     |
| `who-is-happ.png` | Experience     |

---

## Out of Scope

- Contact section
- Projects section
- Dark mode
- Navigation links in navbar (logo only for now)
- Real logo (text logo used until a proper logo is created)
