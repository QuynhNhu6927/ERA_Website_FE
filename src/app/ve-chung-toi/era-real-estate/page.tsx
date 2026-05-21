import type { Metadata } from "next";
import { EraRealEstatePage } from "@/components/sections/about/era-real-estate";

export const metadata: Metadata = {
  title: "Về ERA Real Estate - Thương hiệu môi giới BĐS toàn cầu",
  description:
    "ERA Real Estate - Thương hiệu nhượng quyền môi giới bất động sản hàng đầu thế giới từ 1971. Tiên phong DNA công nghệ, vươn tầm hiện diện tại hơn 38+ quốc gia và vùng lãnh thổ.",
  keywords: ["ERA Real Estate", "ERA toàn cầu", "môi giới BĐS", "ERA 1971"],
  openGraph: {
    title: "Về ERA Real Estate - Thương hiệu môi giới BĐS toàn cầu",
    description:
      "ERA Real Estate - Thương hiệu nhượng quyền môi giới bất động sản hàng đầu thế giới từ 1971. Tiên phong DNA công nghệ, vươn tầm hiện diện tại hơn 38+ quốc gia và vùng lãnh thổ.",
    type: "website",
    images: [
      {
        url: "/about/about_section02.webp",
        alt: "ERA Asia Pacific",
      },
    ],
  },
};

export default function EraRealEstate() {
  return <EraRealEstatePage />;
}
