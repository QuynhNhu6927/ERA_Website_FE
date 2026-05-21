import type { Metadata } from "next";
import { AboutPage } from "@/components/sections/about";

export const metadata: Metadata = {
  title: "Về chúng tôi - ERA Vietnam",
  description:
    "Khám phá hành trình của ERA Vietnam: Từ sức mạnh hậu thuẫn Compass, di sản toàn cầu ERA Real Estate 1971, mạng lưới ERA APAC đến bệ phóng vững chắc tại Việt Nam.",
  keywords: ["ERA Vietnam", "về ERA", "ERA Real Estate", "ERA APAC", "Compass"],
  openGraph: {
    title: "Về chúng tôi - ERA Vietnam",
    description:
      "Khám phá hành trình của ERA Vietnam: Từ sức mạnh hậu thuẫn Compass, di sản toàn cầu ERA Real Estate 1971, mạng lưới ERA APAC đến bệ phóng vững chắc tại Việt Nam.",
    type: "website",
    images: [
      {
        url: "/home/home_news_02.webp",
        alt: "Về chúng tôi - ERA Vietnam",
      },
    ],
  },
};

export default function VeChungToi() {
  return <AboutPage />;
}
