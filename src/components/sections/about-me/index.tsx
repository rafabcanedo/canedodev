"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import aboutMeImage from "@/assets/about-me.png"
import { aboutParagraphs } from "@/data/about"
import { Title } from "@/components/my-components/title"

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
      </motion.div>
    </section>
  )
}
