"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

import { cva, type VariantProps } from "class-variance-authority";
import { THEME } from "@/lib/constants";

const cardVariants = cva(
  "rounded-3xl border p-6 md:p-8 relative overflow-hidden transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-white/10 bg-card/50",
        blue: `${THEME.blue.border} ${THEME.blue.hover} bg-background/40 hover:bg-accent-blue/5 group`,
        purple: `${THEME.purple.border} ${THEME.purple.hover} bg-background/40 hover:bg-accent-purple/5 group`,
        emerald: `${THEME.emerald.border} ${THEME.emerald.hover} bg-background/40 hover:bg-accent-emerald/5 group`,
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
