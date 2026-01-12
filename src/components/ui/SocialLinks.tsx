"use client";

import { Github, Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
}

const socialLinks = [
  {
    name: "GitHub",
    href: portfolio.personal.socials.github,
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: portfolio.personal.socials.linkedin,
    icon: Linkedin,
  },
];

export function SocialLinks({ className }: SocialLinksProps) {
  return (
    <div className={cn("flex gap-4 shrink-0 ml-auto items-center", className)}>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            <Icon className="h-5 w-5" />
            <span className="sr-only">{social.name}</span>
          </a>
        );
      })}
    </div>
  );
}
