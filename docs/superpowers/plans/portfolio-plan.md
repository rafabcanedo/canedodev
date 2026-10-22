# Portfolio Canedo — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the full single-page portfolio with Intro, About Me, How I Work, and My Experience sections, styled with Tailwind CSS v4 and animated with Framer Motion.

**Architecture:** Single page (`page.tsx`) renders four section components from `src/components/sections/`. All content lives in TypeScript data files in `src/data/`. Types centralized in `src/types/index.ts`. Framer Motion handles all scroll-triggered animations. `layout.tsx` holds Navbar and Footer.

**Tech Stack:** Next.js 15 (App Router), React 19, TypeScript 5 strict, Tailwind CSS v4, shadcn/ui base-nova, Framer Motion, lucide-react, next/image

---

## File Map

**Create:**
- `src/types/index.ts` — Experience, StackTopic, ExperienceLogo, IntroHighlight, LayoutProps
- `src/data/intro.ts` — intro section content
- `src/data/about.ts` — about me paragraphs
- `src/data/stack.ts` — how I work topics + items
- `src/data/experience.ts` — experience entries with logos
- `src/components/ui-shared/section-title.tsx` — reusable SectionTitle
- `src/components/ui-shared/index.ts` — barrel export
- `src/components/sections/intro/index.tsx` — Intro section
- `src/components/sections/about-me/index.tsx` — About Me section
- `src/components/sections/how-i-work/index.tsx` — How I Work section
- `src/components/sections/my-experience/index.tsx` — My Experience timeline section

**Modify:**
- `src/app/layout.tsx` — fix invalid HTML (Navbar/Footer outside body), move them inside
- `src/app/page.tsx` — render all four sections
- `src/components/my-components/navbar/index.tsx` — style
- `src/components/my-components/footer/index.tsx` — style
- `src/components/my-components/logo/index.tsx` — style

---

### Task 1: Install Framer Motion

**Files:**
- Modify: `package.json` (via npm)

- [ ] **Step 1: Install**

```bash
npm install framer-motion
```

Expected: `framer-motion` appears in `package.json` dependencies.

---

### Task 2: Define types

**Files:**
- Modify: `src/types/index.ts`

- [ ] **Step 1: Write type definitions**

```ts
import type { StaticImageData } from "next/image"
import type { ReactNode } from "react"

export type ExperienceLogo =
  | { kind: "image"; src: StaticImageData }
  | { kind: "emoji"; value: string }

export interface Experience {
  company: string
  logo: ExperienceLogo
  role: string
  period: string
  bullets: string[]
}

export interface StackTopic {
  topic: string
  items: string[]
}

export interface IntroHighlight {
  color: "yellow" | "blue"
  company: string
  role: string
  period: string
}

export interface LayoutProps<T extends string> {
  children: ReactNode
  params?: Promise<{ [key: string]: string }>
}
```

---

### Task 3: Create data files

**Files:**
- Create: `src/data/intro.ts`
- Create: `src/data/about.ts`
- Create: `src/data/stack.ts`
- Create: `src/data/experience.ts`

- [ ] **Step 1: Create `src/data/intro.ts`**

```ts
import type { IntroHighlight } from "@/types"

export const introAvailability = "Available for work or ready for projects"
export const introGreeting = "Hy there 👋"
export const introHeadline =
  "I'm a fullstack developer focused on performance, scalable systems, and elegant applications."
export const introTagline =
  "Focus in building fullstack web application and coding my world"

export const introHighlights: IntroHighlight[] = [
  {
    color: "yellow",
    company: "Mercado Livre",
    role: "Software Developer",
    period: "2024 – 2026",
  },
  {
    color: "blue",
    company: "Azzurro",
    role: "Founder & Software Developer",
    period: "2024 – 2025",
  },
]
```

- [ ] **Step 2: Create `src/data/about.ts`**

```ts
export const aboutParagraphs: string[] = [
  "I live in Brazil and love traveling to other countries to network, discover new cultures, and gain perspectives you can only find by stepping outside your comfort zone. I believe those experiences deeply shape how we see the world, and ultimately how we build products and create meaningful experiences.",
  "I approach life with calm and creativity, always eager to explore new things. I carry that same mindset into my work, staying curious, giving my best in every project, and genuinely caring about the people I collaborate with.",
]
```

- [ ] **Step 3: Create `src/data/stack.ts`**

```ts
import type { StackTopic } from "@/types"

export const stack: StackTopic[] = [
  { topic: "Frontend", items: ["Next", "TypeScript", "Vite"] },
  { topic: "Backend", items: ["Golang", "TypeScript", "Java"] },
  { topic: "A.I", items: ["Claude", "Codex", "Gemini"] },
  { topic: "Design", items: ["Figma", "Pen"] },
  { topic: "Infra", items: ["Docker", "Git"] },
]
```

- [ ] **Step 4: Create `src/data/experience.ts`**

```ts
import type { Experience } from "@/types"
import meliLogo from "@/assets/meli-logo.png"
import azzurroLogo from "@/assets/azzurro.png"
import whoIsHappyLogo from "@/assets/who-is-happ.png"

export const experiences: Experience[] = [
  {
    company: "Mercado Livre",
    logo: { kind: "image", src: meliLogo },
    role: "Software Developer",
    period: "2024 – 2026",
    bullets: [
      "Built and maintained fullstack features across two logistics platforms using TypeScript, React, Java Spring Boot, and Golang — from adapting UIs to restructuring backend API responses.",
      "Contributed to a major platform unification initiative, building key operational screens from scratch aligned with UX designs to support multiple logistics workflows.",
      "Handled deployments and feature flags via Fury, monitored performance in Datadog, and worked on backend optimizations including caching and API restructuring.",
    ],
  },
  {
    company: "Azzurro",
    logo: { kind: "image", src: azzurroLogo },
    role: "Founder & Software Developer",
    period: "2024 – 2025",
    bullets: [
      "Architected and delivered responsive web applications and landing pages for content creators, independent professionals, and digital marketing teams — focused on performance, accessibility, and conversion.",
      "Implemented lightweight REST APIs and third-party integrations (contact forms, email services, data handling) to support end-to-end digital solutions.",
      "Managed full project lifecycle — from scoping and client communication to cross-browser testing, domain configuration, and production deployment, aligned with marketing and conversion goals.",
    ],
  },
  {
    company: "Freelancer",
    logo: { kind: "emoji", value: "💻" },
    role: "Software Developer",
    period: "2022 – 2024",
    bullets: [
      "Developed landing pages and websites for local businesses and independent professionals, focused on frontend performance, user interaction, and building online presence.",
      "Strengthened business understanding, client communication, project organization, and time management through hands-on freelance work.",
    ],
  },
  {
    company: "Who is Happy",
    logo: { kind: "image", src: whoIsHappyLogo },
    role: "QA Engineer",
    period: "2021 – 2021",
    bullets: [
      "Tested new features, participated in system design meetings, and contributed to software project structuring based on development best practices.",
      "Supported users to improve their experience and helped optimize team processes to boost productivity.",
    ],
  },
]
```

---

### Task 4: Fix layout.tsx

**Files:**
- Modify: `src/app/layout.tsx`

Current bug: `<Navbar />` and `<Footer />` are placed outside `<body>`, which is invalid HTML. Move them inside `<body>`.

- [ ] **Step 1: Rewrite `src/app/layout.tsx`**

```tsx
import type { Metadata } from "next"
import "./globals.css"
import { geistMono, geistSans, poppins, roboto } from "@/lib/fonts"
import { Geist } from "next/font/google"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/my-components/navbar"
import { Footer } from "@/components/my-components/footer"
import type { LayoutProps } from "@/types"

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Canedo Dev",
  description: "A portfolio developed by Canedo dev",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        roboto.variable,
        poppins.variable,
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 2: Verify**

Run `npm run dev` and open `http://localhost:3000`. No HTML nesting errors in the browser console.

---

### Task 5: Style Logo component

**Files:**
- Modify: `src/components/my-components/logo/index.tsx`

- [ ] **Step 1: Update Logo**

```tsx
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "font-poppins font-semibold text-xl text-foreground tracking-tight",
        className
      )}
    >
      Canedo Dev
    </span>
  )
}
```

---

### Task 6: Style Navbar component

**Files:**
- Modify: `src/components/my-components/navbar/index.tsx`

- [ ] **Step 1: Update Navbar**

```tsx
import { Logo } from "@/components/my-components/logo"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
        <Logo />
      </div>
    </header>
  )
}
```

- [ ] **Step 2: Verify**

Open `http://localhost:3000`. Navbar shows "Canedo Dev" on the left, stays sticky at top on scroll.

---

### Task 7: Style Footer component

**Files:**
- Modify: `src/components/my-components/footer/index.tsx`

- [ ] **Step 1: Update Footer**

```tsx
export function Footer() {
  return (
    <footer className="w-full border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-sm text-muted-foreground">Developed by Canedo</span>
        <span className="text-sm text-muted-foreground">
          © 2026 CanedoDev. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
```

---

### Task 8: Create SectionTitle shared component

**Files:**
- Create: `src/components/ui-shared/section-title.tsx`
- Create: `src/components/ui-shared/index.ts`

- [ ] **Step 1: Create SectionTitle**

`src/components/ui-shared/section-title.tsx`:

```tsx
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  className?: string
}

export function SectionTitle({ children, className }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        "font-poppins text-3xl font-semibold text-foreground",
        className
      )}
    >
      {children}
    </h2>
  )
}
```

- [ ] **Step 2: Create barrel export**

`src/components/ui-shared/index.ts`:

```ts
export { SectionTitle } from "./section-title"
```

---

### Task 9: Build Intro section

**Files:**
- Create: `src/components/sections/intro/index.tsx`

- [ ] **Step 1: Create Intro section**

```tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import avatar from "@/assets/avatar.png"
import {
  introAvailability,
  introGreeting,
  introHeadline,
  introHighlights,
  introTagline,
} from "@/data/intro"

const dotColorMap = {
  yellow: "bg-yellow-400",
  blue: "bg-blue-500",
} as const

export function Intro() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 flex items-center gap-16">
      <motion.div
        className="flex-1 flex flex-col gap-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-sm text-muted-foreground">{introAvailability}</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-poppins text-2xl font-medium text-foreground">
            {introGreeting}
          </span>
          <h1 className="font-poppins text-4xl font-semibold text-foreground leading-tight">
            {introHeadline}
          </h1>
        </div>

        <div className="flex gap-10">
          {introHighlights.map((h) => (
            <div key={h.company} className="flex items-start gap-2">
              <span
                className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 ${dotColorMap[h.color]}`}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">{h.company}</span>
                <span className="text-xs text-muted-foreground">{h.role}</span>
                <span className="text-xs text-muted-foreground">{h.period}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">{introTagline}</p>
      </motion.div>

      <motion.div
        className="shrink-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={avatar}
          alt="Canedo Dev avatar"
          width={360}
          height={360}
          className="rounded-2xl"
          priority
        />
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx temporarily to verify**

In `src/app/page.tsx`:

```tsx
import { Intro } from "@/components/sections/intro"

export default function Home() {
  return (
    <main>
      <Intro />
    </main>
  )
}
```

- [ ] **Step 3: Verify**

Open `http://localhost:3000`. Check: green badge top-left, greeting, headline, two highlight entries (yellow dot Mercado Livre, blue dot Azzurro), tagline, avatar on the right.

---

### Task 10: Build About Me section

**Files:**
- Create: `src/components/sections/about-me/index.tsx`

- [ ] **Step 1: Create About Me section**

```tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import aboutMeImage from "@/assets/about-me.png"
import { aboutParagraphs } from "@/data/about"
import { SectionTitle } from "@/components/ui-shared"

export function AboutMe() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 flex items-center gap-16">
      <motion.div
        className="shrink-0"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={aboutMeImage}
          alt="About Canedo Dev"
          width={340}
          height={340}
          className="rounded-xl"
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Title>About Me</Title>
        <div className="flex flex-col gap-4">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="text-base text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import { Intro } from "@/components/sections/intro"
import { AboutMe } from "@/components/sections/about-me"

export default function Home() {
  return (
    <main>
      <Intro />
      <AboutMe />
    </main>
  )
}
```

- [ ] **Step 3: Verify**

Scroll to About Me. Image on the left, "About Me" title + two paragraphs on the right. Both sides slide in from opposite directions on scroll.

---

### Task 11: Build How I Work section

**Files:**
- Create: `src/components/sections/how-i-work/index.tsx`

- [ ] **Step 1: Create How I Work section**

```tsx
"use client"

import { motion } from "framer-motion"
import { stack } from "@/data/stack"
import { SectionTitle } from "@/components/ui-shared"

export function HowIWork() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle className="mb-12">How I Work</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map((item, i) => (
          <motion.div
            key={item.topic}
            className="border border-border rounded-xl p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className="font-poppins font-semibold text-sm text-foreground">
              {item.topic}
            </span>
            <div className="w-full h-px bg-border" />
            <ul className="flex flex-col gap-2">
              {item.items.map((tool) => (
                <li key={tool} className="text-sm text-muted-foreground">
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
import { Intro } from "@/components/sections/intro"
import { AboutMe } from "@/components/sections/about-me"
import { HowIWork } from "@/components/sections/how-i-work"

export default function Home() {
  return (
    <main>
      <Intro />
      <AboutMe />
      <HowIWork />
    </main>
  )
}
```

- [ ] **Step 3: Verify**

Scroll to How I Work. 5 cards in a responsive grid (3 cols desktop, 2 tablet, 1 mobile). Each: topic title, divider, items list. Cards stagger in on scroll.

---

### Task 12: Build My Experience section

**Files:**
- Create: `src/components/sections/my-experience/index.tsx`

Layout notes:
- Each entry is a flex row: `w-48` left column | `w-0` dot column | `flex-1` right column, with `gap-8` (2rem) between them
- The absolute timeline line sits at `left-[14rem]` = 192px (w-48) + 32px (gap-8) = 224px from the container left, which is exactly where the dot column begins
- `scaleY` on the line with `origin-top` creates the draw-down animation

- [ ] **Step 1: Create My Experience section**

```tsx
"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useSpring } from "framer-motion"
import { experiences } from "@/data/experience"
import { SectionTitle } from "@/components/ui-shared"
import type { Experience } from "@/types"

function ExperienceEntry({ exp }: { exp: Experience }) {
  return (
    <motion.div
      className="flex gap-8 py-12"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-48 shrink-0 flex flex-col items-end gap-1 text-right pt-1">
        {exp.logo.kind === "image" ? (
          <Image
            src={exp.logo.src}
            alt={exp.company}
            height={28}
            width={80}
            className="object-contain object-right"
          />
        ) : (
          <span className="text-2xl">{exp.logo.value}</span>
        )}
        <span className="font-medium text-sm text-foreground">{exp.company}</span>
        <span className="text-xs text-muted-foreground">{exp.period}</span>
      </div>

      <div className="relative shrink-0 w-0">
        <div className="absolute top-1.5 w-3 h-3 rounded-full bg-foreground border-2 border-background -translate-x-1/2" />
      </div>

      <div className="flex-1 flex flex-col gap-3">
        <span className="font-poppins font-semibold text-lg text-foreground">{exp.role}</span>
        <ul className="flex flex-col gap-2">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
              <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function MyExperience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 20%"],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle className="mb-4">My Experience</SectionTitle>

      <div ref={sectionRef} className="relative mt-8">
        <div className="absolute left-[14rem] top-0 bottom-0 w-px bg-border overflow-hidden">
          <motion.div
            className="h-full w-full bg-foreground origin-top"
            style={{ scaleY }}
          />
        </div>

        {experiences.map((exp) => (
          <ExperienceEntry key={exp.company} exp={exp} />
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Verify**

Scroll through My Experience. Vertical line draws itself downward. 4 entries: logos/emoji on left, role + bullets on right. Each entry fades in on scroll.

---

### Task 13: Wire up page.tsx

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Final page.tsx**

```tsx
import { Intro } from "@/components/sections/intro"
import { AboutMe } from "@/components/sections/about-me"
import { HowIWork } from "@/components/sections/how-i-work"
import { MyExperience } from "@/components/sections/my-experience"

export default function Home() {
  return (
    <main>
      <Intro />
      <AboutMe />
      <HowIWork />
      <MyExperience />
    </main>
  )
}
```

- [ ] **Step 2: Final verification**

Open `http://localhost:3000` and scroll through the full page. Verify:
- Navbar sticky with "Canedo Dev" logo on the left
- Intro: green badge, greeting, headline, highlight cards, tagline, avatar
- About Me: image left, text right, slide-in animation on scroll
- How I Work: 5 staggered cards in responsive grid
- My Experience: timeline line draws down, 4 entries with logos/emoji and bullets
- Footer: two lines of text, left and right aligned
