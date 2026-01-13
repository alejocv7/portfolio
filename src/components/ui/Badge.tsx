import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-default border hover:scale-110  hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-white/5 text-white/70 border-white/10 shadow-lg shadow-black/20 hover:border-white/20",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:border-accent-blue/50",
        purple:
          "bg-accent-purple/10 text-accent-purple border-accent-purple/20 hover:border-accent-purple/50",
        emerald:
          "bg-accent-emerald/10 text-accent-emerald border-accent-emerald/20 hover:border-accent-emerald/50",
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
