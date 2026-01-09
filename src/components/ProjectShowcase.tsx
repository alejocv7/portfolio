"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function ProjectShowcase() {
    return (
        <section id="projects" className="py-24 container mx-auto px-4 md:px-6">
            <div className="mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">Featured Projects</h2>
                <p className="mt-4 text-muted">A selection of my work in robotics and software.</p>
            </div>

            <div className="space-y-12">
                {portfolio.projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative grid gap-8 rounded-2xl border border-white/10 bg-card p-8 lg:grid-cols-2 lg:gap-12 hover:border-accent-blue/30 transition-all hover:-translate-y-1"
                    >
                        <div className={`relative aspect-video overflow-hidden rounded-xl border border-white/10 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div className="flex flex-col justify-center space-y-6">
                            <div>
                                <h3 className="text-2xl font-bold md:text-3xl text-foreground mb-2">{project.title}</h3>
                                <div className="flex flex-wrap gap-2 text-sm">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-accent-blue font-medium">
                                            {t} <span className="text-muted/30 mx-1">•</span>
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <p className="text-muted leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex gap-4 pt-2">
                                {project.link && (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-blue transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10"
                                    >
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </Link>
                                )}
                                {project.repo && (
                                    <Link
                                        href={project.repo}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent-blue transition-colors bg-white/5 px-4 py-2 rounded-lg border border-white/10 hover:bg-white/10"
                                    >
                                        <Github className="h-4 w-4" />
                                        Source Code
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
