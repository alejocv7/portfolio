"use client";

import { SocialLinks } from "@/components/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-8">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted">
            Alejandro Canizares | Senior Software Engineer
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
