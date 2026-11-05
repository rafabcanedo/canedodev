"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import aboutMeImage from "@/assets/about-me.png"
import { aboutParagraphs } from "@/data/about"
import { Title } from "@/components/my-components/title"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AboutMe() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 flex items-center gap-16">
      <motion.div
        className="shrink-0"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={aboutMeImage}
          alt="About Canedo Dev"
          width={340}
          height={340}
          className="rounded-xl"
        />
      </motion.div>

      <motion.div
        className="flex flex-col gap-6"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Title>About Me</Title>
        <div className="flex flex-col gap-4">
          {aboutParagraphs.map((p, i) => (
            <p key={i} className="text-base text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div>
          <Link href="/about" className={cn(buttonVariants({ variant: "outline" }), "w-36 h-10")}>
            More about me
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
