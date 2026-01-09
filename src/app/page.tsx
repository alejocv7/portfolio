import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Expertise } from "@/components/Expertise";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-background min-h-screen">
      <Hero />
      <TechStack />
      <Expertise />
      <ProjectShowcase />
      <Contact />
    </div>
  );
}
