import type { Metadata } from "next";
import { ApacPage } from "@/components/sections/about/apac";

export const metadata: Metadata = {
  title: "Về ERA APAC - Mạng lưới BĐS hàng đầu khu vực Châu Á",
  description:
    "Mạng lưới BĐS hàng đầu khu vực được dẫn dắt bởi trụ sở Singapore. Tiên phong kết nối các cơ hội đầu tư BĐS xuyên quốc gia tại Châu Á.",
  keywords: ["ERA APAC", "ERA Singapore", "mạng lưới BĐS Châu Á", "đầu tư BĐS"],
  openGraph: {
    title: "Về ERA APAC - Mạng lưới BĐS hàng đầu khu vực Châu Á",
    description:
      "Mạng lưới BĐS hàng đầu khu vực được dẫn dắt bởi trụ sở Singapore. Tiên phong kết nối các cơ hội đầu tư BĐS xuyên quốc gia tại Châu Á.",
    type: "website",
    images: [
      {
        url: "/about/about_era_hero_banner.webp",
        alt: "APAC",
      },
    ],
  },
};

export default function Apac() {
  return <ApacPage />;
}
