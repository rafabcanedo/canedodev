import { cn } from "@/lib/utils"
import { LogoProps } from "@/types"
import Link from "next/link"

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn(
        "font-poppins font-semibold text-xl text-foreground tracking-tight",
        className
      )}
    >
      <Link href="/">
        Canedo Dev
      </Link>
    </span>
  )
}
