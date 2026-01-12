"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ButtonLink";
import { Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 container mx-auto max-w-5xl px-4 md:px-6 text-center"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl bg-card/50 p-12 border border-white/5"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-muted mb-8 text-lg">
          I&apos;m interested to hear about your project!
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
