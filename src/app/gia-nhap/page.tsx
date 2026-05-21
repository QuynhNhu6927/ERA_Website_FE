import type { Metadata } from "next";
import { JoinPage } from "@/components/sections/join";

export const metadata: Metadata = {
  title: "Tuyển Dụng Chuyên Viên BĐS | Hoa Hồng Đột Phá Cùng ERA",
  description:
    "Gia nhập ERA Vietnam - Bệ phóng bứt phá sự nghiệp môi giới BĐS với mức hoa hồng đột phá. Kế thừa nền tảng công nghệ Mỹ, nhận đào tạo chứng chỉ quốc tế và hoa hồng hấp dẫn nhất.",
  openGraph: {
    title: "Tuyển Dụng Chuyên Viên BĐS | Hoa Hồng Đột Phá Cùng ERA",
    description:
      "Gia nhập ERA Vietnam - Bệ phóng bứt phá sự nghiệp môi giới BĐS với mức hoa hồng đột phá. Kế thừa nền tảng công nghệ Mỹ, nhận đào tạo chứng chỉ quốc tế và hoa hồng hấp dẫn nhất.",
    type: "website",
    images: [
      {
        url: "/join/join_aca.webp",
        alt: "TRỞ THÀNH CHUYÊN VIÊN TƯ VẤN BĐS TẠI ERA VIETNAM",
      },
    ],
  },
};

export default function Join() {
  return <JoinPage />;
}
