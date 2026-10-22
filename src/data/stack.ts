import { Container, Monitor, Pen, Server, Sparkles } from "lucide-react"
import type { StackTopic } from "@/types"

export const stack: StackTopic[] = [
  { topic: "Frontend", icon: Monitor, items: ["Next", "TypeScript", "Vite"] },
  { topic: "Backend", icon: Server, items: ["Golang", "TypeScript", "Java"] },
  { topic: "A.I", icon: Sparkles, items: ["Claude", "Codex", "Gemini"] },
  { topic: "Design", icon: Pen, items: ["Figma", "Pen"] },
  { topic: "Infra", icon: Container, items: ["Docker", "Git"] },
]
