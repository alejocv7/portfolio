"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const categoryColors = {
    "Software Development": "bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:border-accent-blue/50",
    "Robotics & Hardware": "bg-accent-purple/10 text-accent-purple border-accent-purple/20 hover:border-accent-purple/50",
    "Tools & Others": "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20 hover:border-accent-emerald/50",
};

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center md:px-6">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/10 via-background to-background" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl space-y-8"
            >
                <div className="space-y-4">
                    <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl text-foreground">
                        Hi, I&apos;m <span className="text-gradient leading-tight">{portfolio.personal.name}</span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl font-medium">
                        {portfolio.personal.role}
                    </p>
                    <p className="mx-auto max-w-2xl text-base text-muted/80 leading-relaxed italic">
                        &ldquo;{portfolio.personal.bio}&rdquo;
                    </p>
                </div>

                {/* Floating Bubble Tech Stack */}
                <div className="flex flex-wrap justify-center gap-3 pt-4">
                    {portfolio.skills.map((category) => (
                        category.items.map((skill, index) => {
                            const colorClass = categoryColors[category.category as keyof typeof categoryColors] || "bg-white/5 text-muted border-white/10";

                            return (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5 + (index * 0.02) }}
                                    className={`
                    px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-default
                    ${colorClass}
                    hover:scale-110 hover:bg-opacity-20 shadow-lg shadow-black/20
                  `}
                                >
                                    {skill}
                                </motion.span>
                            );
                        })
                    ))}
                </div>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row pt-6">
                    <Link
                        href="#projects"
                        className="group flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-bold text-background transition-all hover:scale-105"
                    >
                        View Projects
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href={portfolio.personal.socials.linkedin}
                        target="_blank"
                        className="group flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-bold backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
                    >
                        Connect
                        <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
