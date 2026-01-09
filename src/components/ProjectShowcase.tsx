"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function ProjectShowcase() {
    return (
        <section id="projects" className="bg-white/5 py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
                    <p className="mt-4 text-muted">A selection of my work in robotics and software.</p>
                </div>

                <div className="space-y-24">
                    {portfolio.projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center"
                        >
                            <div className={`relative aspect-video overflow-hidden rounded-xl border border-white/10 ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold md:text-3xl">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <p className="text-lg text-muted leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex gap-4">
                                    {project.link && (
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent-blue transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            View Project
                                        </Link>
                                    )}
                                    {project.repo && (
                                        <Link
                                            href={project.repo}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 text-sm font-medium hover:text-accent-blue transition-colors"
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
            </div>
        </section>
    );
}
