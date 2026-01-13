"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Terminal } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 md:px-6 relative justify-center">
        <ButtonLink
          href="/"
          variant="link"
          className="flex items-center gap-2 text-lg font-bold tracking-tighter shrink-0"
        >
          <Terminal className="h-6 w-6 text-accent-blue" />
          <span className="font-bold text-foreground">Alejandro Canizares</span>
        </ButtonLink>

        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ href, label }) => (
            <ButtonLink key={href} href={href} variant="link">
              {label}
            </ButtonLink>
          ))}
        </nav>

        <SocialLinks />
      </div>
    </header>
  );
}
