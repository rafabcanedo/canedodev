import { Suspense } from "react"
import { notFound } from "next/navigation"
import { getArticle, getArticleSlugs } from "@/lib/articles"

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  if (!getArticleSlugs().includes(slug)) notFound()

  const { content, frontmatter } = await getArticle(slug)

  return (
    <article>
      <header className="mb-10 flex flex-col gap-2">
        <span className="text-xs text-muted-foreground">{frontmatter.date}</span>
        <h1 className="font-poppins text-3xl font-bold text-foreground">{frontmatter.title}</h1>
        <p className="text-muted-foreground">{frontmatter.description}</p>
      </header>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        {content}
      </div>
    </article>
  )
}

export default function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense>
      <Article params={params} />
    </Suspense>
  )
}
