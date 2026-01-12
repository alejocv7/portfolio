import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxWidth?: "5xl" | "6xl" | "7xl";
}

export function Section({
  id,
  title,
  children,
  className,
  containerClassName,
  maxWidth = "5xl",
}: SectionProps) {
  const maxWidthClass = {
    "5xl": "max-w-5xl",
    "6xl": "max-w-6xl",
    "7xl": "max-w-7xl",
  }[maxWidth];

  return (
    <section
      id={id}
      className={cn("py-20 w-full mx-auto px-6", maxWidthClass, className)}
    >
      <div className="mb-10">
        <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-foreground">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
