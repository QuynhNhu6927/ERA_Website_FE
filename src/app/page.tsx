import type { Metadata } from "next";
import { HomePage } from "@/components/sections/home";

export const metadata: Metadata = {
  title: "ERA Vietnam - Thương hiệu môi giới BĐS quốc tế hàng đầu",
  description:
    "Trực thuộc Compass International Holdings. Sở hữu hệ sinh thái công nghệ và 2.300+ Agents",
  keywords: ["ERA Vietnam", "môi giới bất động sản", "ERA Real Estate", "BĐS", "Compass International"],
  openGraph: {
    title: "ERA Vietnam - Thương hiệu môi giới BĐS quốc tế hàng đầu",
    description:
      "Trực thuộc Compass International Holdings. Sở hữu hệ sinh thái công nghệ và 2.300+ Agents",
    type: "website",
  },
};

export default function Home() {
  return <HomePage />;
}
