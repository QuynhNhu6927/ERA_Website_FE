import { JoinHeroSection } from "./JoinHeroSection";
import { JoinFinancialSection } from "./JoinFinancialSection";
import { JoinWhySection } from "./JoinWhySection";
import { JoinAcademySection } from "./JoinAcademySection";
import { JoinTestimonialsSection } from "./JoinTestimonialsSection";
import { JoinEnvironmentSection } from "./JoinEnvironmentSection";
import { JoinOpportunitySection } from "./JoinOpportunitySection";
import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";

export function JoinPage() {
  return (
    <main>
      <JoinHeroSection />
      <JoinFinancialSection />
      <JoinWhySection />
      <JoinAcademySection />
      <JoinTestimonialsSection />
      <JoinEnvironmentSection />
      <JoinOpportunitySection />
      <Section bg="navy" padding="none" noContainer className="py-2">
        <div className="h-px w-full" style={{ backgroundColor: withOpacity(colors.neutral.white, 0.2) }} />
      </Section>
    </main>
  );
}
