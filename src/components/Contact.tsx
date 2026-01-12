"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ButtonLink";
import { Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="py-20 w-full mx-auto max-w-5xl px-6">
      <div className="mb-12">
        <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-foreground">
          Let&apos;s Connect
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center rounded-3xl bg-card/50 p-4 md:p-8 border border-white/10"
      >
        <p className="text-muted mb-8 text-lg">
          If you&apos;re hiring for a software engineering role, I&apos;m happy
          to talk about how my experience fits your team&apos;s needs.
        </p>
        <div className="flex justify-center gap-4">
          <ButtonLink
            href={portfolio.personal.socials.linkedin}
            target="_blank"
            className="btn-secondary"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </ButtonLink>
        </div>
      </motion.div>
    </section>
  );
}
