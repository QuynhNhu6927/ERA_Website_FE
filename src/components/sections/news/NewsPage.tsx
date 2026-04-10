import { NewsHeroSection } from "./NewsHeroSection";
import { NewsTabsSection } from "./NewsTabsSection";
import { NewsMarketSection } from "./NewsMarketSection";
import { NewsProjectSection } from "./NewsProjectSection";
import { NewsERASection } from "./NewsERASection";
import { NewsEMagazineSection } from "./NewsEMagazineSection";

export function NewsPage() {
  return (
    <main>
      <NewsHeroSection />
      <NewsTabsSection />
      <NewsMarketSection />
      <NewsProjectSection />
      <NewsERASection />
      <NewsEMagazineSection />
    </main>
  );
}
