"use client"

import { motion } from "framer-motion"
import { stack } from "@/data/stack"
import { SectionTitle } from "@/components/ui-shared"

export function HowIWork() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <SectionTitle className="mb-12">How I Work</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map((item, i) => (
          <motion.div
            key={item.topic}
            className="border border-border rounded-xl p-6 flex flex-col gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <span className="font-poppins font-semibold text-sm text-foreground">
              {item.topic}
            </span>
            <div className="w-full h-px bg-border" />
            <ul className="flex flex-col gap-2">
              {item.items.map((tool) => (
                <li key={tool} className="text-sm text-muted-foreground">
                  {tool}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
