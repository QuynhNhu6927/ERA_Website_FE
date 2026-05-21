import type { Metadata } from "next";
import { AboutCompassPage } from "@/components/sections/about/compass/AboutCompassPage";

export const metadata: Metadata = {
  title: "Compass International Holdings - Công ty mẹ của thương hiệu ERA Real Estate",
  description:
    "Compass International Holdings: Sự kết hợp giữa mạng lưới khổng lồ của Anywhere và nền tảng công nghệ đột phá từ Compass để tái định nghĩa ngành môi giới bất động sản.",
  keywords: ["Compass", "ERA Vietnam", "Compass International", "Anywhere"],
  openGraph: {
    title: "Compass International Holdings - Công ty mẹ của thương hiệu ERA Real Estate",
    description:
      "Compass International Holdings: Sự kết hợp giữa mạng lưới khổng lồ của Anywhere và nền tảng công nghệ đột phá từ Compass để tái định nghĩa ngành môi giới bất động sản.",
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
