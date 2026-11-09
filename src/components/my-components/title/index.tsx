import { cn } from "@/lib/utils"
import { TitleProps } from "@/types"

export function Title({ children, className, size = "title" }: TitleProps) {
  if (size === "subtitle") {
    return (
      <h3
        className={cn(
          "font-poppins text-sm font-semibold uppercase tracking-wide text-foreground",
          className
        )}
      >
        {children}
      </h3>
    )
  }

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
