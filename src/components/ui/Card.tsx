"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "rounded-3xl border p-6 md:p-8 relative overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-card/50",
        blue: "border-accent-blue/20 bg-background/40 hover:bg-accent-blue/5 hover:border-accent-blue/50 group",
        purple:
          "border-accent-purple/20 bg-background/40 hover:bg-accent-purple/5 hover:border-accent-purple/50 group",
        emerald:
          "border-accent-emerald/20 bg-background/40 hover:bg-accent-emerald/5 hover:border-accent-emerald/50 group",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface CardProps
  extends HTMLMotionProps<"div">,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className, variant, ...props }: CardProps) {
  return (
    <motion.div className={cn(cardVariants({ variant, className }))} {...props}>
      {children}
    </motion.div>
  );
}
