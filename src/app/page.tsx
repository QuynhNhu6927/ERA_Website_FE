import { HeroSection } from "@/components/sections/HeroSection";
import { GlobalNetworkSection } from "@/components/sections/GlobalNetworkSection";
import { JoinTeamSection } from "@/components/sections/JoinTeamSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { NewsSection } from "@/components/sections/NewsSection";
import { Footer } from "@/components/layout/Footer";
import { colors } from "@/lib/theme";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section id="ve-chung-toi">
        <GlobalNetworkSection />
      </section>
      
      {/* Join Team ERA Section */}
      <section id="join-team">
        <JoinTeamSection />
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
