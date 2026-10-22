import Link from "next/link"
import { getArticles } from "@/lib/articles"
import { Title } from "@/components/my-components/title"

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <>
      <Title className="mb-12">Blog</Title>

      <ul className="flex flex-col gap-8">
        {articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/blog/${article.slug}`} className="group flex flex-col gap-1">
              <span className="text-xs text-muted-foreground">{article.date}</span>
              <span className="font-poppins font-semibold text-foreground group-hover:underline">
                {article.title}
              </span>
              <span className="text-sm text-muted-foreground">{article.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
