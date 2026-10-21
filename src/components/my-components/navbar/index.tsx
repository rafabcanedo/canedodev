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