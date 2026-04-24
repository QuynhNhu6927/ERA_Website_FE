import { ApplyHeroSection } from "./ApplyHeroSection";
import { ApplyCoreValuesSection } from "./ApplyCoreValuesSection";
import { ApplyRecruitmentSection } from "./ApplyRecruitmentSection";
import { ApplyTestimonialsSection } from "./ApplyTestimonialsSection";
import { ApplyEnvironmentSection } from "./ApplyEnvironmentSection";
import { ApplySection } from "./ApplySection";

export function ApplyPage() {
  return (
    <main>
      <ApplyHeroSection />
      <ApplyRecruitmentSection />
      <ApplyCoreValuesSection />
      <ApplyTestimonialsSection />
      <ApplyEnvironmentSection />
      <ApplySection />
    </main>
  );
}
