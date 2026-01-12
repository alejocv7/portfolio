"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, ...props }: CardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-3xl border border-white/10 p-6 md:p-8 relative overflow-hidden bg-card/50",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
