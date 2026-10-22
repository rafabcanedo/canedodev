import './globals.css'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">

            <div className="flex flex-col items-center gap-2 text-center">
                <span className="text-7xl font-bold text-primary">404</span>
                <h1 className="text-2xl font-semibold">Oops! Page not found.</h1>
                <p className="text-sm text-muted-foreground max-w-sm">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
            </div>

            <Link href="/" className={buttonVariants({ variant: "ghost" })}>Back to Home</Link>
        </div>
    )
}
