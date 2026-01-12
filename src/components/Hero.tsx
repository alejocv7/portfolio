"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollLink } from "@/components/ScrollLink";
import { ArrowRight, ArrowDown, ChevronDown } from "lucide-react";
import { portfolio } from "@/data/portfolio";

const categoryColors = {
  "Backend Development":
    "bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:border-accent-blue/50",
  "Cloud & DevOps":
    "bg-accent-purple/10 text-accent-purple border-accent-purple/20 hover:border-accent-purple/50",
  "Data & Streaming":
    "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20 hover:border-accent-emerald/50",
};

export function Hero() {
  return (
    <section
      id="about"
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 text-center md:px-6"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-accent-purple/10 via-background to-background" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl space-y-8"
      >
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl sm:text-6xl font-extrabold tracking-tight text-foreground">
            Hi, I&apos;m{" "}
            <span className="text-gradient leading-tight">
              {portfolio.personal.name}
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg md:text-2xl sm:text-xl font-bold text-foreground">
            {portfolio.personal.role}
          </p>
          <p className="mx-auto max-w-2xl text-md md:text-lg text-muted/90 leading-relaxed">
            {portfolio.personal.bio}
          </p>
        </div>

        {/* Floating Bubble Tech Stack */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {portfolio.skills.map((category) =>
            category.items.slice(0, 3).map((skill, index) => {
              const colorClass =
                categoryColors[
                  category.category as keyof typeof categoryColors
                ] || "bg-white/5 text-muted border-white/10";

              return (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.02 }}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-default ${colorClass} hover:scale-110 hover:bg-opacity-20 shadow-lg shadow-black/20`}
                >
                  {skill}
                </motion.span>
              );
            })
          )}
        </div>

        {/* Quick buttons */}
        <div className="flex flex-row items-center justify-center gap-4 pt-6">
          <ScrollLink
            href="#projects"
            className="group flex w-36 items-center justify-center gap-2 rounded-full bg-foreground py-3 text-sm font-bold text-background transition-all hover:scale-105"
          >
            View Projects
            <ArrowDown className="h-4 w-4" />
          </ScrollLink>
          <Link
            href={portfolio.personal.socials.linkedin}
            target="_blank"
            className="group flex w-36 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 py-3 text-sm font-bold backdrop-blur-sm transition-all hover:bg-white/10 hover:scale-105"
          >
            Connect
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </motion.div>

      {/* Scroll to explore */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 0.5, duration: 0.5 },
          y: {
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <p className="text-xs font-medium text-muted/60 tracking-wider uppercase">
          Scroll to explore
        </p>
        <ChevronDown className="h-5 w-5 text-muted/60" />
      </motion.div>
    </section>
  );
}
