import fs from "fs"
import path from "path"
import { compileMDX } from "next-mdx-remote/rsc"
import type { ArticleFrontmatter, ArticleMeta } from "@/types"

const articlesDir = path.join(process.cwd(), "content/articles")

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(articlesDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""))
}

export async function getArticles(): Promise<ArticleMeta[]> {
  const slugs = getArticleSlugs()
  const articles = await Promise.all(
    slugs.map(async (slug) => {
      const source = fs.readFileSync(path.join(articlesDir, `${slug}.mdx`), "utf-8")
      const { frontmatter } = await compileMDX<ArticleFrontmatter>({
        source,
        options: { parseFrontmatter: true },
      })
      return { slug, ...frontmatter }
    })
  )
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getArticle(slug: string) {
  const filePath = path.join(articlesDir, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, "utf-8")
  return compileMDX<ArticleFrontmatter>({
    source,
    options: { parseFrontmatter: true },
  })
}
