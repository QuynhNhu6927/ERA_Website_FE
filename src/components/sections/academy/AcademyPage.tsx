import { AcademyHeroSection } from "./AcademyHeroSection";
import { AcademyRoadmapSection } from "./AcademyRoadmapSection";
import { AcademyCoursesSection } from "./AcademyCoursesSection";
import { AcademyTestimonialsSection } from "./AcademyTestimonialsSection";
import { AcademyOnlineSection } from "./AcademyOnlineSection";
import { AcademyMyEraSection } from "./AcademyMyEraSection";

export function AcademyPage() {
  return (
    <main>
      <AcademyHeroSection />
      <AcademyRoadmapSection />
      <AcademyCoursesSection />
      <AcademyTestimonialsSection />
      <AcademyOnlineSection />
      <AcademyMyEraSection />
    </main>
  );
}
