import { SocialLinks } from "@/components/ui/SocialLinks";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background py-8">
      <Container>
        <div className="flex items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted">
            {portfolio.personal.name} | {portfolio.personal.role}
          </p>
          <SocialLinks />
        </div>
      </Container>
    </footer>
  );
}
