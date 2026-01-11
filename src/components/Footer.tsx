import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-8">
      <div className="px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted">
            Alejandro Canizares | Senior Software Engineer
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/alejocv7"
              target="_blank"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/alejandrocanizares/"
              target="_blank"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
