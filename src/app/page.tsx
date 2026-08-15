import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-background text-foreground dark group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Navbar />
        <div className="px-5 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </div>
        </div>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}