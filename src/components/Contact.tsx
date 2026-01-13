import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Linkedin } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Contact() {
  return (
    <Section id="contact" title="Let's Connect">
      <Card
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-muted mb-8">
          If you&apos;re hiring for a software engineering role, I&apos;m happy
          to talk about how my experience fits your team&apos;s needs.
        </p>
        <div className="flex justify-center gap-4">
          <ButtonLink
            href={portfolio.personal.socials.linkedin}
            target="_blank"
            variant="secondary"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </ButtonLink>
        </div>
      </Card>
    </Section>
  );
}
