import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface BadgeProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode;
  variant?: "default" | "secondary";
  className?: string;
}

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold transition-colors cursor-default border border-white/10 bg-white/5 shadow-lg shadow-black/20 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  );
}
