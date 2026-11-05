import { Card, CardContent } from "@/components/ui/card"
import type { AboutDetail } from "@/types"

export function ExperienceCard({ detail }: { detail: AboutDetail }) {
  const Icon = detail.icon
  return (
    <Card size="sm">
      <CardContent className="flex items-center gap-4">
        <div className="p-2 rounded-lg bg-muted">
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{detail.label}</p>
          <p className="text-sm font-medium">{detail.value}</p>
        </div>
      </CardContent>
    </Card>
  )
}
