"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ExternalLink } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function ProjectShowcase() {
  return (
    <Section id="projects" title="Featured Projects" maxWidth="6xl">
      <div className="space-y-16">
        {portfolio.projects.map((project, index) => (
          <Card
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group grid gap-8 lg:grid-cols-2 lg:gap-12 transition-all hover:-translate-y-1"
          >
            <div
              className={`relative aspect-video overflow-hidden rounded-xl border border-white/10 ${
                index % 2 === 1 ? "lg:order-last" : ""
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-center space-y-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-bold md:text-3xl text-foreground mb-2">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-sm">
                  {project.tech.map((t, i) => (
                    <Badge
                      key={t}
                      className="text-accent-blue border-accent-blue/20"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>

              <p className="text-muted leading-relaxed">
                {project.description}
              </p>

              <div className="flex gap-4 pt-2">
                {project.link && (
                  <ButtonLink
                    href={project.link}
                    target="_blank"
                    variant="secondary"
                  >
                    <ExternalLink className="h-4 w-4" />
                    See Project
                  </ButtonLink>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
