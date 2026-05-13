import type { Metadata } from "next";
import { JoinPage } from "@/components/sections/join";

export const metadata: Metadata = {
  title: "Gia nhập ERA Vietnam - Bệ phóng bứt phá sự nghiệp môi giới BĐS",
  description:
    "Kế thừa nền tảng công nghệ Mỹ, nhận đào tạo chứng chỉ quốc tế và hoa hồng hấp dẫn nhất.",
  openGraph: {
    title: "Gia nhập ERA Vietnam - Bệ phóng bứt phá sự nghiệp môi giới BĐS",
    description:
      "Kế thừa nền tảng công nghệ Mỹ, nhận đào tạo chứng chỉ quốc tế và hoa hồng hấp dẫn nhất.",
    type: "website",
    images: [
      {
        url: "/join/join_aca.webp",
        alt: "Join ERA Vietnam",
      },
    ],
  },
};

export default function Join() {
  return <JoinPage />;
}
