// import { getArticles } from "@/lib/articles"
// import { ArticleCard } from "@/components/my-components/article-card"
import { Title } from "@/components/my-components/title"
import { Construction } from "lucide-react"

export default function BlogPage() {
  // const articles = await getArticles()

  return (
    <>
      <Title className="mb-12">My personal Blog</Title>

      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <Construction size={40} className="text-muted-foreground" />
        <div className="flex flex-col gap-2">
          <p className="font-poppins font-semibold text-foreground">The blog is in development.</p>
          <p className="text-sm text-muted-foreground">New posts are on the way. Check back soon.</p>
        </div>
      </div>

      {/* <ul className="flex flex-col gap-8">
        {articles.map((article) => (
          <li key={article.slug}>
            <ArticleCard article={article} />
          </li>
        ))}
      </ul> */}
    </>
  )
}
