"use client"

import { motion } from "framer-motion"
import { stack } from "@/data/stack"
import { Title } from "@/components/my-components/title"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const MotionCard = motion.create(Card)

export function HowIWork() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <Title className="mb-12">How I Work</Title>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stack.map((item, i) => (
          <MotionCard
            key={item.topic}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <CardHeader>
              <CardTitle className="font-poppins font-semibold text-sm text-foreground">
                {item.topic}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="flex flex-col gap-2">
                {item.items.map((tool) => (
                  <li key={tool} className="text-sm text-muted-foreground">
                    {tool}
                  </li>
                ))}
              </ul>
            </CardContent>
          </MotionCard>
        ))}
      </div>
    </section>
  )
}
