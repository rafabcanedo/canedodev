import { Title } from "@/components/my-components/title"
import { Badge } from "@/components/ui/badge"
import { Construction } from "lucide-react"

export function MyPersonalBlog() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-24">
            <Title className="mb-4">My personal blog</Title>

            <div className="flex justify-center">
                <Badge variant="outline" className="text-muted-foreground gap-1.5">
                    <Construction size={12} />
                    In development
                </Badge>
            </div>

            {/* <div className="flex flex-row gap-1 items-center justify-end">
                <span className="text-sm text-zinc-700 hover:underline cursor-pointer">
                    <Link href="/blog">See more</Link>
                </span>
                <MoveRight className="w-4 h-4 text-zinc-700" />
            </div> */}
        </section>
    )
}
