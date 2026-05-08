"use client";

import { useState } from "react";
import {
  AboutERAVNHeroSection,
  AboutERAVNTabs,
  AboutERAVNContentSection,
  AboutERAVNPhilosophySection,
  AboutERAVNServicesSection,
  AboutERAVNDivisionsSection,
  AboutERAVNAppSection,
  AboutERAVNAwardsSection,
  AboutERAVNESGSection,
  AboutERAVNFAQSection,
} from "@/components/sections/about/about-eravn";

export default function AboutERAVNPage() {
  const [activeTab, setActiveTab] = useState("");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const element = document.getElementById(tab);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main>
      <AboutERAVNHeroSection />
      <AboutERAVNTabs activeTab={activeTab} onTabChange={handleTabChange} />
      <AboutERAVNContentSection />
      <AboutERAVNPhilosophySection />
      <AboutERAVNServicesSection />
      <AboutERAVNDivisionsSection />
      <AboutERAVNAppSection />
      <AboutERAVNAwardsSection />
      <AboutERAVNESGSection />
      <AboutERAVNFAQSection />
    </main>
  );
}
