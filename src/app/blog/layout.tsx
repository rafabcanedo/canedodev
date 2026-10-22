import type { ReactNode } from "react"

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      {children}
    </div>
  )
}
