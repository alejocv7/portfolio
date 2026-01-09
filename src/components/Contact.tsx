"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Contact() {
    return (
        <section id="contact" className="py-24 container mx-auto px-4 md:px-6 text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-2xl rounded-3xl bg-gradient-to-br from-accent-blue/10 to-accent-purple/10 p-12 border border-white/5"
            >
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Let&apos;s Work Together</h2>
                <p className="text-muted mb-8 text-lg">
                    I&apos;m always interested in new opportunities in robotics and software engineering.
                </p>
                <div className="flex justify-center gap-4">
                    <Link
                        href={portfolio.personal.socials.email}
                        className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-muted"
                    >
                        <Mail className="mr-2 h-4 w-4" />
                        Email Me
                    </Link>
                    <Link
                        href={portfolio.personal.socials.linkedin}
                        target="_blank"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 text-sm font-medium transition-colors hover:bg-white/10"
                    >
                        <Linkedin className="mr-2 h-4 w-4" />
                        LinkedIn
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
