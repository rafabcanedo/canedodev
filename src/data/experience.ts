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
