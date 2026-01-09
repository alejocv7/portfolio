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

const bulletColors = {
    "Software Development": "bg-accent-blue",
    "Robotics & Hardware": "bg-accent-purple",
    "Tools & Others": "bg-accent-emerald",
};

export function Expertise() {
    return (
        <section id="skills" className="py-24 container mx-auto px-4 md:px-6">
            <div className="mb-12">
                <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-foreground">Technical Expertise</h2>
            </div>

            <div className="max-w-6xl mx-auto rounded-3xl border border-white/10 bg-card/50 p-8 md:p-12 relative overflow-hidden">
                {/* Decorative background blend */}
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-accent-blue/10 blur-3xl rounded-full pointer-events-none" />


                <div className="grid gap-8 md:grid-cols-3">
                    {portfolio.skills.map((skill, index) => {
                        const Icon = icons[skill.category as keyof typeof icons] || Wrench;
                        const titleColor = titleColors[skill.category as keyof typeof titleColors] || "text-foreground";
                        const bgColor = titleColor.replace('text-', 'bg-') + "/10";
                        const borderColor = titleColor.replace('text-', 'border-') + "/20";
                        const bulletColor = bulletColors[skill.category as keyof typeof bulletColors] || "bg-foreground";

                        return (
                            <motion.div
                                key={skill.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative overflow-hidden rounded-2xl border ${borderColor} bg-background/40 p-6 transition-all hover:${bgColor} group hover:border-2`}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`inline-flex items-center justify-center rounded-xl ${bgColor} p-2.5 border ${borderColor}`}>
                                        <Icon className={`h-5 w-5 ${titleColor}`} />
                                    </div>
                                    <h3 className={`text-lg font-bold ${titleColor}`}>{skill.category}</h3>
                                </div>

                                <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-muted">
                                    {skill.items.map((item) => (
                                        <li key={item} className="flex items-center text-sm">
                                            <span className={`mr-3 h-1.5 w-1.5 shrink-0 rounded-full ${bulletColor}`} />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
