import type { Metadata } from "next";
import { ProjectsPage } from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Dự án Bất động sản - ERA Vietnam",
  description:
    "Khám phá danh mục dự án được chọn lọc khắt khe nhất từ ERA Vietnam. Căn hộ, nhà phố, biệt thự, đất nền từ các chủ đầu tư uy tín.",
  keywords: [
    "dự án bất động sản",
    "căn hộ ERA",
    "nhà phố",
    "biệt thự",
    "đất nền",
    "ERA Vietnam",
  ],
  openGraph: {
    title: "Dự án Bất động sản - ERA Vietnam",
    description:
      "Khám phá danh mục dự án được chọn lọc khắt khe nhất từ ERA Vietnam.",
    type: "website",
    images: [],
  },
};

export default function DuAnPage() {
  return <ProjectsPage />;
}
