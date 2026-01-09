"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";

export function TechStack() {
    const allSkills = portfolio.skills.flatMap((s) => s.items);

    return (
        <section className="border-y border-white/5 bg-white/5 py-12 backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-6">
                <p className="mb-6 text-center text-sm font-medium text-muted uppercase tracking-wider">
                    Technologies & Tools
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {allSkills.map((skill, index) => (
                        <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground hover:bg-white/10 hover:border-accent-purple/50 transition-colors cursor-default"
                        >
                            {skill}
                        </motion.span>
                    ))}
                </div>
            </div>
        </section>
    );
}
