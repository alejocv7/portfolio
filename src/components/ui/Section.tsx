import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "wide" | "full";
}

export function Section({
  id,
  title,
  children,
  className,
  size = "narrow",
}: SectionProps) {
  return (
    <section id={id} className={cn("py-20 w-full", className)}>
      <Container size={size}>
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
