import { colors } from "@/lib/theme";
import { ProjectsHeroSection } from "./ProjectsHeroSection";
import { ProjectsDetailContentSection } from "./ProjectsDetailContentSection";
import { ProjectsRelatedSection } from "./ProjectsRelatedSection";

export function ProjectsDetailPage() {
  return (
    <main style={{ backgroundColor: colors.neutral.white }}>
      <ProjectsHeroSection />
      <ProjectsDetailContentSection />
      <ProjectsRelatedSection />
    </main>
  );
}
