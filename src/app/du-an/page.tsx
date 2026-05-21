import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Tổng Hợp Dự Án Bất Động Sản Hàng Đầu | ERA Vietnam",
  description:
    "Khám phá rổ hàng 150+ dự án BĐS đa dạng phân khúc từ các chủ đầu tư uy tín. Cơ hội đầu tư sinh lời và an cư lý tưởng được chọn lọc khắt khe bởi chuyên gia ERA Vietnam.",
  keywords: [
    "dự án bất động sản",
    "căn hộ ERA",
    "nhà phố",
    "biệt thự",
    "đất nền",
    "ERA Vietnam",
  ],
  openGraph: {
    title: "Tổng Hợp Dự Án Bất Động Sản Hàng Đầu | ERA Vietnam",
    description:
      "Khám phá rổ hàng 150+ dự án BĐS đa dạng phân khúc từ các chủ đầu tư uy tín. Cơ hội đầu tư sinh lời và an cư lý tưởng được chọn lọc khắt khe bởi chuyên gia ERA Vietnam.",
    type: "website",
    images: [
      {
        url: "/project/project_hero_banner.webp",
        alt: "Dự Án Bất Động Sản Phân Phối Chính Thức Bởi ERA Vietnam",
      },
    ],
  },
};

export default function DuAnPage() {
  return <ProjectsPage />;
}
