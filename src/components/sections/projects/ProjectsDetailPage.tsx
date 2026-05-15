import { ProjectsHeroSection } from "./ProjectsHeroSection";
import { ProjectsDetailContentSection } from "./ProjectsDetailContentSection";
import { ProjectsRelatedSection } from "./ProjectsRelatedSection";

export function ProjectsDetailPage() {
  return (
    <main className="bg-white">
      <ProjectsHeroSection />
      <ProjectsDetailContentSection />
      <ProjectsRelatedSection />
    </main>
  );
}
