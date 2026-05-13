import type { Metadata } from "next";
import {
  ContactHeroSection,
  ContactCardsSection,
  ContactOfficesSection,
  ContactFormSection,
} from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Liên hệ ERA Vietnam - Tư vấn bất động sản chuyên nghiệp",
  description:
    "Gọi ngay Hotline 1800 6701 hoặc để lại thông tin, chúng tôi sẽ hỗ trợ bạn nhanh nhất!",
  keywords: ["ERA Vietnam", "liên hệ ERA", "tư vấn BĐS", "hotline ERA"],
  openGraph: {
    title: "Liên hệ ERA Vietnam - Tư vấn bất động sản chuyên nghiệp",
    description:
      "Gọi ngay Hotline 1800 6701 hoặc để lại thông tin, chúng tôi sẽ hỗ trợ bạn nhanh nhất!",
    type: "website",
    images: [
      {
        url: "/contact/contact_hero_banner.webp",
        alt: "Contact ERA Vietnam",
      },
    ],
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactHeroSection />
      <ContactCardsSection />
      <ContactOfficesSection />
      <ContactFormSection />
    </main>
  );
}
