"use client";

import Link from "next/link";
import { ScrollLink } from "@/components/ScrollLink";
import { Terminal } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

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
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tighter shrink-0"
        >
          <Terminal className="h-6 w-6 text-accent-blue" />
          <span className="font-bold text-foreground">Alejandro Canizares</span>
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map(({ href, label }) => (
            <ScrollLink key={href} href={href} className="btn-link">
              {label}
            </ScrollLink>
          ))}
        </nav>

        <SocialLinks />
      </div>
    </header>
  );
}
