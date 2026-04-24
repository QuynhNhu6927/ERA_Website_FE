"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import { CircleCheck } from "lucide-react";

const benefits = [
  "Cơ Chế Hoa Hồng Đột Phá Cao Nhất Thị Trường",
  "Hệ Thống Đào Tạo Bài Bản Theo Tiêu Chuẩn Quốc Tế",
  "Hỗ Trợ Công Nghệ Độc Quyền Gia Tăng Hiệu Suất Bán Hàng",
];

export function JoinHeroSection() {
  return (
    <section className="relative min-h-[380px] md:min-h-[440px] lg:min-h-[480px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/join/join_hero_bg.png')" }}
      />
      {/* Light gray overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(237, 237, 237, 0.35)" }}
      />

      <Container className="relative z-10 h-full">
        <div className="relative pt-6 md:pt-8 lg:pt-10 px-4 md:px-10 lg:px-16 pb-10 md:pb-12 lg:pb-14">
          {/* Content */}
          <div className="relative z-20 max-w-4xl">
            <h1
              className="mb-6"
              style={{
                color: colors.primary.DEFAULT,
                fontWeight: 900,
                fontSize: "clamp(32px, 5vw, 56px)",
                lineHeight: 1.5,
                wordSpacing: "0.08em",
              }}
            >
              BỆ PHÓNG TOÀN DIỆN CHO MỌI XUẤT PHÁT ĐIỂM
            </h1>

            <div
              className="inline-block rounded-2xl px-5 py-3 mb-8 max-w-xs"
              style={{ backgroundColor: colors.primary.navy.DEFAULT }}
            >
              <span
                className="text-sm md:text-base font-semibold whitespace-normal"
                style={{ color: colors.neutral.white }}
              >
                Trở thành chuyên viên tư vấn bất động sản tại ERA Vietnam
              </span>
            </div>

            <ul className="space-y-4 max-w-md">
              {benefits.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CircleCheck
                    size={30}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: colors.primary.DEFAULT }}
                  />
                  <span
                    className="text-lg md:text-xl font-medium"
                    style={{ color: colors.gray[700] }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image — absolute bottom right */}
          <div className="absolute bottom-0 right-0 z-10 w-[80%] md:w-[60%] lg:w-[50%] max-w-2xl">
            <div className="relative aspect-[4/3]">
              <Image
                src="/join/join_hero_img.png"
                alt="ERA Team"
                fill
                className="object-contain object-bottom-right"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
