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
      <section id="tin-thi-truong"><NewsMarketSection /></section>
      <section id="tin-du-an"><NewsProjectSection /></section>
      <section id="era-news"><NewsERASection /></section>
      <section id="e-magazine"><NewsEMagazineSection /></section>
    </main>
  );
}
