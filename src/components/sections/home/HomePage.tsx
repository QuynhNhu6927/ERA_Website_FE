import { HeroSection } from "./HeroSection";
import { GlobalNetworkSection } from "./GlobalNetworkSection";
import { JoinTeamSection } from "./JoinTeamSection";
import { AcademySection } from "./AcademySection";
import { ProjectsSection } from "./ProjectsSection";
import { NewsSection } from "./NewsSection";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      
      <section id="ve-chung-toi">
        <GlobalNetworkSection />
      </section>
      
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
    </main>
  );
}
