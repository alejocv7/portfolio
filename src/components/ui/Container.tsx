import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  size?: "narrow" | "wide" | "full";
}

const CONTAINER_SIZES = {
  narrow: "max-w-5xl",
  wide: "max-w-6xl",
  full: "max-w-7xl",
} as const;

export function Container({
  children,
  className,
  size = "full",
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto px-4 md:px-6", CONTAINER_SIZES[size], className)}
      {...props}
    >
      {children}
    </div>
  );
}
