import { AboutHeroSection } from "./AboutHeroSection";
import { AboutEraGlobalSection } from "./AboutEraGlobalSection";
import { AboutEraApacSection } from "./AboutEraApacSection";
import { AboutEraVietnamSection } from "./AboutEraVietnamSection";

export function AboutPage() {
  return (
    <main>
      <AboutHeroSection />
      <AboutEraGlobalSection />
      <AboutEraApacSection />
      <AboutEraVietnamSection />
    </main>
  );
}
