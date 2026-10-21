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
