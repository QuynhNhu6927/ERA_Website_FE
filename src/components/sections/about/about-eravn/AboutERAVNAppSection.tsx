"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import Image from "next/image";

const features = [
  {
    title: "Giao diện thân thiện, dễ sử dụng",
    desc: "Trải nghiệm mượt mà, thao tác nhanh chóng cho mọi đối tượng",
    iconSrc: "/about/about_eravn_app_1.svg",
  },
  {
    title: "Tra cứu & quản lý thông tin bất động sản",
    desc: "Tìm kiếm nhanh, theo dõi tiến độ & cơ hội dự án dễ dàng",
    iconSrc: "/about/about_eravn_app_2.svg",
  },
  {
    title: "Lịch sự kiện & check-in tiện lợi",
    desc: "Đăng ký, theo dõi & check-in sự kiện chỉ trong vài bước",
    iconSrc: "/about/about_eravn_app_3.svg",
  },
  {
    title: "Quản lý giao dịch minh bạch",
    desc: "Lịch sử cá nhân và đội nhóm rõ ràng, dễ kiểm soát",
    iconSrc: "/about/about_eravn_app_4.svg",
  },
  {
    title: "Tin đăng bất động sản thật",
    desc: "Đăng tin nhanh, chính xác, tiếp cận đúng đối tượng hiệu quả",
    iconSrc: "/about/about_eravn_app_5.svg",
  },
  {
    title: "Hệ thống & nội dung đào tạo chuyên nghiệp",
    desc: "Chương trình đào tạo & đội phát triển năng lực chuyên sâu",
    iconSrc: "/about/about_eravn_app_6.svg",
  },
];

export default function AboutERAVNAppSection() {
  return (
    <Section padding="md" bg="navy" noContainer>
      <Container size="lg">
        {/* Title */}
        <div className="mb-6 md:mb-8 text-center">
          <p className="text-3xl md:text-4xl font-bold uppercase" style={{ color: colors.secondary.DEFAULT }}>
            MY ERA APP
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Trợ lý đắc lực dành cho Agent
          </h2>
        </div>

        {/* Image + Features */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center">
          {/* Phone Image */}
          <div className="flex justify-center">
            <div className="relative w-64 md:w-80 lg:w-96 aspect-[3/4]">
              <Image
                src="/about/about_eravn_mobileApp.webp"
                alt="My ERA App"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Features */}
          <div>
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center shrink-0 relative">
                    <Image src={feature.iconSrc} alt={feature.title} fill className="object-contain p-2" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-sky-400">{feature.title}</h4>
                    <p className="text-white/70 text-sm mt-1 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
