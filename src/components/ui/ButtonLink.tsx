"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-bold transition-all",
  {
    variants: {
      variant: {
        primary: "bg-foreground text-background hover:scale-105 w-36 py-3",
        secondary:
          "border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:scale-105 w-36 py-3",
        link: "text-muted font-medium hover:text-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonLinkProps
  extends LinkProps,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  className?: string;
  target?: string;
}

export function ButtonLink({
  children,
  href,
  className,
  variant,
  ...props
}: ButtonLinkProps) {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    props.onClick?.(e);

    // Only handle smooth scrolling for hash links
    if (typeof href !== "string" || !href.startsWith("#")) return;

    e.preventDefault();
    const elem = document.querySelector(href);
    if (!elem) return;

    elem.scrollIntoView({ behavior: "smooth" });
    // Use replaceState to update URL without adding a new history entry
    // avoiding "back button" traps for scroll movements
    window.history.replaceState(null, "", href);
  };

  return (
    <Link
      href={href}
      onClick={handleScroll}
      className={cn(buttonVariants({ variant, className }))}
    >
      {children}
    </Link>
  );
}
