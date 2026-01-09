"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 text-center md:px-6">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-purple/20 via-background to-background" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl space-y-6"
            >
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Hi, I&apos;m <span className="text-accent-blue">{portfolio.personal.name}</span>
                </h1>
                <p className="mx-auto max-w-2xl text-lg text-muted md:text-xl">
                    {portfolio.personal.role}
                    <br />
                    <span className="text-foreground/80">{portfolio.personal.bio}</span>
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="#projects"
                        className="group flex items-center justify-center rounded-full bg-foreground px-8 py-3 text-sm font-medium text-background transition-all hover:bg-muted"
                    >
                        View Work
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        href={portfolio.personal.socials.linkedin}
                        target="_blank"
                        className="group flex items-center justify-center rounded-full border border-white/10 bg-background/50 px-8 py-3 text-sm font-medium backdrop-blur-sm transition-all hover:bg-white/5"
                    >
                        Contact Me
                        <ArrowRight className="ml-2 h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
