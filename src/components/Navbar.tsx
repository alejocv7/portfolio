"use client";

import Link from "next/link";
import { Github, Linkedin, Terminal } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="flex h-16 items-center px-4 md:px-6 relative justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tighter shrink-0"
        >
          <Terminal className="h-6 w-6 text-accent-blue" />
          <span className="font-bold text-foreground">Alejandro Canizares</span>
        </Link>

        <nav className="absolute hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            href="#about"
            className="text-muted hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="#skills"
            className="text-muted hover:text-foreground transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="text-muted hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-muted hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-4 shrink-0">
          <Link
            href="https://github.com/alejocv7"
            target="_blank"
            className="text-muted hover:text-foreground transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/alejandrocanizares/"
            target="_blank"
            className="text-muted hover:text-foreground transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
