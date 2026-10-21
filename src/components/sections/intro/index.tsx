"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import avatar from "@/assets/avatar.png"
import {
  introAvailability,
  introGreeting,
  introHeadline,
  introHighlights,
  introTagline,
} from "@/data/intro"

const dotColorMap = {
  yellow: "bg-yellow-400",
  blue: "bg-blue-500",
} as const

export function Intro() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24 flex items-center gap-16">
      <motion.div
        className="flex-1 flex flex-col gap-8"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
          <span className="text-sm text-muted-foreground">{introAvailability}</span>
        </div>

        <div className="flex flex-col gap-3">
          <span className="font-poppins text-2xl font-medium text-foreground">
            {introGreeting}
          </span>
          <h1 className="font-poppins text-4xl font-semibold text-foreground leading-tight">
            {introHeadline}
          </h1>
        </div>

        <div className="flex gap-10">
          {introHighlights.map((h) => (
            <div key={h.company} className="flex items-start gap-2">
              <span
                className={`mt-1 w-2.5 h-2.5 rounded-full shrink-0 ${dotColorMap[h.color]}`}
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-foreground">{h.company}</span>
                <span className="text-xs text-muted-foreground">{h.role}</span>
                <span className="text-xs text-muted-foreground">{h.period}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">{introTagline}</p>
      </motion.div>

      <motion.div
        className="shrink-0"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Image
          src={avatar}
          alt="Canedo Dev avatar"
          width={360}
          height={360}
          className="rounded-2xl"
          priority
        />
      </motion.div>
    </section>
  )
}
