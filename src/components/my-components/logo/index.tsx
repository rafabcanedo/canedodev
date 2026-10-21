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
