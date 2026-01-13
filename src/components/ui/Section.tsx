import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  maxWidth?: "5xl" | "6xl" | "7xl";
}

const MAX_WIDTH_CLASSES = {
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
} as const;

export function Section({
  id,
  title,
  children,
  className,
  maxWidth = "5xl",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 w-full", className)}>
      <Container className={cn(MAX_WIDTH_CLASSES[maxWidth])}>
        <div className="mb-10">
          <h2 className="text-3xl text-center font-bold tracking-tight sm:text-4xl text-foreground">
            {title}
          </h2>
        </div>
        {children}
      </Container>
    </section>
  );
}
