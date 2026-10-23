import { Title } from "@/components/my-components/title"
import { MoveRight } from "lucide-react"
import Link from "next/link"

export function MyPersonalBlog() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-24">
            <Title className="mb-12">My personal blog</Title>

            <div className="flex flex-row gap-1 items-center justify-end">
                <span className="text-sm text-zinc-700 hover:underline cursor-pointer">
                    <Link href="/blog">See more</Link>
                </span>
                <MoveRight className="w-4 h-4 text-zinc-700" />
            </div>
        </section>
    )
}
