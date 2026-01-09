"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Code2, Cpu, Wrench } from "lucide-react";

const icons = {
    "Software Development": Code2,
    "Robotics & Hardware": Cpu,
    "Tools & Others": Wrench,
};

export function Expertise() {
    return (
        <section id="skills" className="py-24 container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Technical Expertise</h2>
                <p className="mt-4 text-muted">A blend of software engineering and robotics.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {portfolio.skills.map((skill, index) => {
                    const Icon = icons[skill.category as keyof typeof icons] || Wrench;
                    return (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-accent-blue/50"
                        >
                            <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent-blue/10 p-3 text-accent-blue">
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-4 text-xl font-bold">{skill.category}</h3>
                            <ul className="space-y-2 text-muted">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center">
                                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent-blue" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
