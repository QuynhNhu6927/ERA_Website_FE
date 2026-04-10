"use client";

import { AcademyHeroSection } from "./AcademyHeroSection";
import { AcademyRoadmapSection } from "./AcademyRoadmapSection";
import { AcademyCoursesSection } from "./AcademyCoursesSection";

export function AcademyPage() {
  return (
    <main>
      <AcademyHeroSection />
      <AcademyRoadmapSection />
      <AcademyCoursesSection />
    </main>
  );
}
