import { EraRealEstateHeroSection } from "./EraRealEstateHeroSection";
import { EraRealEstateHistorySection } from "./EraRealEstateHistorySection";
import { EraRealEstatePioneerSection } from "./EraRealEstatePioneerSection";

export function EraRealEstatePage() {
  return (
    <main>
      <EraRealEstateHeroSection />
      <EraRealEstateHistorySection />
      <EraRealEstatePioneerSection />
    </main>
  );
}
