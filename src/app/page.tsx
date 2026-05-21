import type { Metadata } from "next";
import { HomePage } from "@/components/sections/home";

export const metadata: Metadata = {
  title: "ERA Vietnam - Thương hiệu môi giới BĐS quốc tế hàng đầu",
  description:
    "ERA Vietnam - Thương hiệu môi giới BĐS quốc tế, trực thuộc Compass International Holdings. Tự hào với hệ sinh thái công nghệ và 2.300+ Agents.",
  keywords: [
    "ERA Vietnam", 
    "môi giới bất động sản", 
    "ERA Real Estate", 
    "BĐS", 
    "Compass International"
  ],
  openGraph: {
    title: "ERA Vietnam - Thương hiệu môi giới BĐS quốc tế hàng đầu",
    description:
      "ERA Vietnam - Thương hiệu môi giới BĐS quốc tế, trực thuộc Compass International Holdings. Tự hào với hệ sinh thái công nghệ và 2.300+ Agents.",
    type: "website",
    images: [
      {
        url: "/home/home_news_02.webp",
        alt: "ERA VIETNAM",
      },
    ],
  },
};

export default function Home() {
  return <HomePage />;
}
