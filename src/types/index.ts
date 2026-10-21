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
