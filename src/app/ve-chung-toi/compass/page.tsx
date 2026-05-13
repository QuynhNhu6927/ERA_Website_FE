import type { Metadata } from "next";
import { CompassHeroSection } from "@/components/sections/about/compass/CompassHeroSection";
import { CompassBrandsSection } from "@/components/sections/about/compass/CompassBrandsSection";

export const metadata: Metadata = {
  title: "Compass International Holdings - ERA Vietnam",
  description:
    "Sự kết hợp giữa mạng lưới khổng lồ của Anywhere và nền tảng công nghệ đột phá từ Compass để tái định nghĩa ngành môi giới.",
  keywords: ["Compass", "ERA Vietnam", "Compass International", "Anywhere"],
  openGraph: {
    title: "Compass International Holdings - ERA Vietnam",
    description:
      "Sự kết hợp giữa mạng lưới khổng lồ của Anywhere và nền tảng công nghệ đột phá từ Compass để tái định nghĩa ngành môi giới.",
    type: "website",
    images: [
      {
        url: "/about/about_hero_banner.webp",
        alt: "Compass",
      },
    ],
  },
};

export default function CompassPage() {
  return (
    <main>
      <CompassHeroSection />
      <CompassBrandsSection />
    </main>
  );
}
