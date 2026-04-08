import { HeroSection } from "@/components/sections/HeroSection";
import { GlobalNetworkSection } from "@/components/sections/GlobalNetworkSection";
import { JoinEraSection } from "@/components/sections/JoinEraSection";
import { EventsSection } from "@/components/sections/EventsSection";
import { AcademySection } from "@/components/sections/AcademySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { NewsSection } from "@/components/sections/NewsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <GlobalNetworkSection />
      <JoinEraSection />
      <EventsSection />
      <AcademySection />
      <ProjectsSection />
      <NewsSection />
    </>
  );
}
