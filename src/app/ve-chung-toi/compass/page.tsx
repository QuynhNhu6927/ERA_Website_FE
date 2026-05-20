import type { Metadata } from "next";
import { AboutCompassPage } from "@/components/sections/about/compass/AboutCompassPage";

export const metadata: Metadata = {
  title: "Compass International Holdings - ERA Vietnam",
  description:
    "Compass International Holdings: Sự kết hợp giữa mạng lưới khổng lồ của Anywhere và nền tảng công nghệ đột phá từ Compass để tái định nghĩa ngành môi giới.",
  keywords: ["Compass", "ERA Vietnam", "Compass International", "Anywhere"],
  openGraph: {
    title: "Compass International Holdings - ERA Vietnam",
    description:
      "Compass International Holdings: Sự kết hợp giữa mạng lưới khổng lồ của Anywhere và nền tảng công nghệ đột phá từ Compass để tái định nghĩa ngành môi giới.",
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
  return <AboutCompassPage />;
}
