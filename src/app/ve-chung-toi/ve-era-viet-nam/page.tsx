import type { Metadata } from "next";
import { AboutERAVNPage } from "@/components/sections/about/about-eravn";

export const metadata: Metadata = {
  title: "Về ERA Vietnam - Bệ phóng sự nghiệp BĐS chuẩn quốc tế",
  description:
    "Tự hào sở hữu 3 văn phòng, mạng lưới 2.300+ Agents tinh hoa và phân phối 150+ dự án lớn.",
  keywords: ["ERA Vietnam", "về ERA Vietnam", "môi giới BĐS", "ERA Agents"],
  openGraph: {
    title: "Về ERA Vietnam - Bệ phóng sự nghiệp BĐS chuẩn quốc tế",
    description:
      "Tự hào sở hữu 3 văn phòng, mạng lưới 2.300+ Agents tinh hoa và phân phối 150+ dự án lớn.",
    type: "website",
    images: [
      {
        url: "/home/home_news_02.webp",
        alt: "About ERA Vietnam",
      },
    ],
  },
};

export default function VeEraVietNam() {
  return <AboutERAVNPage />;
}
