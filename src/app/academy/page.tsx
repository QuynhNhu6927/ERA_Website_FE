import type { Metadata } from "next";
import { AcademyPage } from "@/components/sections/academy";

export const metadata: Metadata = {
  title: "ERA Academy - Hệ thống đào tạo và phát triển năng lực chuẩn quốc tế",
  description:
    "ERA Academy - Hệ thống đào tạo và phát triển năng lực được thiết kế theo tiêu chuẩn quốc tế. Agent được trang bị trọn vẹn kiến thức và kỹ năng để trở thành chuyên gia BĐS toàn diện.",
  openGraph: {
    title: "ERA Academy - Hệ thống đào tạo và phát triển năng lực chuẩn quốc tế",
    description:
      "ERA Academy - Hệ thống đào tạo và phát triển năng lực được thiết kế theo tiêu chuẩn quốc tế. Agent được trang bị trọn vẹn kiến thức và kỹ năng để trở thành chuyên gia BĐS toàn diện.",
    type: "website",
    images: [
      {
        url: "/home/home_academy.webp",
        alt: "ERA Academy",
      },
    ],
  },
};

export default function Academy() {
  return <AcademyPage />;
}
