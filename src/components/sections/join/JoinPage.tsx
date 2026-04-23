import { JoinHeroSection } from "./JoinHeroSection";
import { JoinCoreValuesSection } from "./JoinCoreValuesSection";
import { JoinRecruitmentSection } from "./JoinRecruitmentSection";
import { JoinTestimonialsSection } from "./JoinTestimonialsSection";
import { JoinEnvironmentSection } from "./JoinEnvironmentSection";
import { JoinApplySection } from "./JoinApplySection";

export function JoinPage() {
  return (
    <main>
      <JoinHeroSection />
      <JoinRecruitmentSection />
      <JoinCoreValuesSection />
      <JoinTestimonialsSection />
      <JoinEnvironmentSection />
      <JoinApplySection />
    </main>
  );
}
