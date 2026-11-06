import { GraduationCap, CodeXml, Laptop } from "lucide-react"
import type { AboutDetail } from "@/types"

export const aboutDetails: AboutDetail[] = [
  { icon: GraduationCap, label: "Degree",     value: "Sistemas de Informação" },
  { icon: CodeXml,       label: "Experience", value: "Fullstack Developer" },
  { icon: Laptop,        label: "Position",   value: "-" },
]

export const aboutGoals: string[] = [
  "Unification of a microservices system to support a new version of our app",
  "Adaptation of new data in our system, saving the company over $140k monthly",
  "Development of a fully innovative fullstack project, eliminating the need for users to rely on Excel",
  "Creation of a new Golang initiative to replace legacy and separate projects",
  "Website development for 20+ clients, helping them grow their digital presence",
]

export const aboutParagraphs: string[] = [
  "I live in Brazil and love traveling to other countries to network, discover new cultures, and gain perspectives you can only find by stepping outside your comfort zone. I believe those experiences deeply shape how we see the world, and ultimately how we build products and create meaningful experiences.",
  "I approach life with calm and creativity, always eager to explore new things. I carry that same mindset into my work, staying curious, giving my best in every project, and genuinely caring about the people I collaborate with.",
]
