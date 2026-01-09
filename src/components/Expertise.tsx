"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { Code2, Cpu, Wrench } from "lucide-react";

const icons = {
    "Software Development": Code2,
    "Robotics & Hardware": Cpu,
    "Tools & Others": Wrench,
};

const titleColors = {
    "Software Development": "text-accent-blue",
    "Robotics & Hardware": "text-accent-purple",
    "Tools & Others": "text-accent-emerald",
};

export function Expertise() {
    return (
        <section id="skills" className="py-24 container mx-auto px-4 md:px-6">
            <div className="mb-12">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Technical Expertise</h2>
                <p className="mt-4 text-muted">A blend of software engineering and robotics.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {portfolio.skills.map((skill, index) => {
                    const Icon = icons[skill.category as keyof typeof icons] || Wrench;
                    const titleColor = titleColors[skill.category as keyof typeof titleColors] || "text-foreground";
                    const bgColor = titleColor.replace('text-', 'bg-') + "/5";
                    const borderColor = titleColor.replace('text-', 'border-') + "/20";

                    return (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden rounded-2xl border ${borderColor} bg-card p-8 transition-all hover:border-opacity-50 group hover:-translate-y-1`}
                        >
                            {/* Subtle gradient glow */}
                            <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl rounded-full opacity-20 pointer-events-none ${titleColor.replace('text-', 'bg-')}`} />

                            <div className={`mb-6 inline-flex items-center justify-center rounded-xl ${bgColor} p-3 border ${borderColor}`}>
                                <Icon className={`h-6 w-6 ${titleColor}`} />
                            </div>
                            <h3 className={`mb-4 text-xl font-bold ${titleColor}`}>{skill.category}</h3>
                            <ul className="space-y-4 text-muted">
                                {skill.items.map((item) => (
                                    <li key={item} className="flex items-center text-sm">
                                        <span className={`mr-3 h-1.5 w-1.5 rounded-full ${titleColor.replace('text-', 'bg-')}`} />
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
