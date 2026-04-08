import { HeroSection } from "@/components/sections/HeroSection";
import { GlobalNetworkSection } from "@/components/sections/GlobalNetworkSection";
import { JoinEraSection } from "@/components/sections/JoinEraSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="ve-chung-toi">
        <GlobalNetworkSection />
      </section>
      
      {/* Combined Section: JOIN ERA VIETNAM + Events */}
      <section id="join-team" className="bg-gray-50">
        <JoinEraSection />
        <EventsSection />
      </section>
      
      <AcademySection />
      <section id="du-an">
        <ProjectsSection />
      </section>
      <section id="tin-tuc">
        <NewsSection />
      </section>
      <div id="lien-he">
        <Footer />
      </div>
    </>
  );
}
