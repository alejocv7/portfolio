import { Hero } from "@/components/Hero";
import { TechStack } from "@/components/TechStack";
import { Expertise } from "@/components/Expertise";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-background min-h-screen relative overflow-hidden">
      {/* Top Gradient */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-accent-blue/20 blur-[100px] rounded-full pointer-events-none -z-10 mix-blend-screen" />

      <Hero />
      <Expertise />
      <ProjectShowcase />
      <Contact />
    </div>
  );
}
