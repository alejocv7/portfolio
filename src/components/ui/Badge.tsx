import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

import { THEME } from "@/lib/constants";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-default border hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-white/5 text-white/70 border-white/10 shadow-lg shadow-black/20 hover:border-white/20",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        blue: `${THEME.blue.bg} ${THEME.blue.text} ${THEME.blue.border} ${THEME.blue.hover}`,
        purple: `${THEME.purple.bg} ${THEME.purple.text} ${THEME.purple.border} ${THEME.purple.hover}`,
        emerald: `${THEME.emerald.bg} ${THEME.emerald.text} ${THEME.emerald.border} ${THEME.emerald.hover}`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends Omit<HTMLMotionProps<"span">, "variant">,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
}

export function Badge({ children, className, variant, ...props }: BadgeProps) {
  return (
    <motion.span
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    >
      {children}
    </motion.span>
  );
}
