"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { experiences } from "@/data/experience"
import { Title } from "@/components/my-components/title"
import { ExperienceInteractive } from "@/components/my-components/experience-interactive"

export function MyExperience() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 90%"],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 40 })

  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <Title className="mb-4">My Experience</Title>

      <div ref={sectionRef} className="relative mt-8">
        <div className="absolute left-56 top-0 bottom-0 w-px bg-border overflow-hidden">
          <motion.div
            className="h-full w-full bg-foreground origin-top"
            style={{ scaleY }}
          />
        </div>

        {experiences.map((exp) => (
          <ExperienceInteractive key={exp.company} exp={exp} />
        ))}
      </div>
    </section>
  )
}
