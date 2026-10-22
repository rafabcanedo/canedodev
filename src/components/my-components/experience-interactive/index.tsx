import Image from "next/image"
import type { Experience } from "@/types"
import { motion } from "framer-motion"

export function ExperienceInteractive({ exp }: { exp: Experience }) {
    return (
        <motion.div
            className="flex gap-8 py-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
        >
            <div className="w-48 shrink-0 flex flex-col items-end gap-1 text-right pt-1">
                {exp.logo.kind === "image" ? (
                    <Image
                        src={exp.logo.src}
                        alt={exp.company}
                        height={28}
                        width={80}
                        className="object-contain object-right"
                    />
                ) : (
                    <span className="text-[28px] leading-none">{exp.logo.value}</span>
                )}
                <span className="font-medium text-sm text-foreground">{exp.company}</span>
                <span className="text-xs text-muted-foreground">{exp.period}</span>
            </div>

            <div className="relative shrink-0 w-0">
                <div className="absolute top-1.5 w-3 h-3 rounded-full bg-foreground border-2 border-background -translate-x-1/2" />
            </div>

            <div className="flex-1 flex flex-col gap-3">
                <span className="font-poppins font-semibold text-lg text-foreground">{exp.role}</span>
                <ul className="flex flex-col gap-2">
                    {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="mt-2 w-1 h-1 rounded-full bg-muted-foreground shrink-0" />
                            {bullet}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}
