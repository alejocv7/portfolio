"use client";

import Link, { LinkProps } from "next/link";
import React from "react";

interface ScrollLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollLink({ children, href, ...props }: ScrollLinkProps) {
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
    <Link href={href} onClick={handleScroll} {...props}>
      {children}
    </Link>
  );
}
