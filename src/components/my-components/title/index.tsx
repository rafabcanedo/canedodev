import { cn } from "@/lib/utils"
import { TitleProps } from "@/types"

export function Title({ children, className }: TitleProps) {
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
