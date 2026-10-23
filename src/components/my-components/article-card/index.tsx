import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import type { ArticleMeta } from "@/types"

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group block w-full">
      <Card>
        <CardHeader>
          <span className="text-xs text-muted-foreground">{article.date}</span>
          <CardTitle className="font-poppins font-semibold text-foreground group-hover:underline">
            {article.title}
          </CardTitle>
          <CardDescription>{article.description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
