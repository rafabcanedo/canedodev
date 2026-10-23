import { getArticles } from "@/lib/articles"
import { Title } from "@/components/my-components/title"
import { ArticleCard } from "@/components/my-components/article-card"

export default async function BlogPage() {
  const articles = await getArticles()

  return (
    <>
      <Title className="mb-12">My personal Blog</Title>

      <ul className="flex flex-col gap-8">
        {articles.map((article) => (
          <li key={article.slug}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul>
    </>
  )
}
