"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import { CircleCheck } from "lucide-react";

const benefits = [
  "Hệ thống đào tạo bài bản theo tiêu chuẩn quốc tế",
  "Cơ chế hoa hồng đột phá cao nhất thị trường",
  "Hỗ trợ công nghệ độc quyền gia tăng hiệu suất bán hàng",
];

export function JoinHeroSection() {
  return (
    <>
      <section className="relative md:min-h-[440px] lg:min-h-[480px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/join/join_hero_bg.webp')" }}
        />
        {/* Light gray overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(237, 237, 237, 0.35)" }}
        />

        <Container className="relative z-10 h-full">
          {/* Desktop */}
          <div className="hidden md:block relative pt-6 md:pt-8 lg:pt-10 px-4 md:px-10 lg:px-16 pb-10 md:pb-12 lg:pb-14">
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
                className="inline-block rounded-2xl px-5 py-3 mb-8 max-w-sm"
                style={{ backgroundColor: colors.primary.navy.DEFAULT }}
              >
                <span
                  className="font-semibold whitespace-normal"
                  style={{ color: colors.neutral.white, fontSize: "clamp(15px, 1.3vw, 24px)" }}
                >
                  Trở thành chuyên viên tư vấn bất động sản tại ERA Vietnam
                </span>
              </div>

              <ul className="space-y-4 max-w-sm">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CircleCheck
                      size={30}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: colors.primary.DEFAULT }}
                    />
                    <span
                      className="font-medium"
                      style={{ color: colors.gray[700], fontSize: "clamp(13px, 1.1vw, 17px)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="absolute bottom-0 right-0 z-10 w-[60%] lg:w-[50%] max-w-2xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/join/join_hero_img.webp"
                  alt="ERA Team"
                  fill
                  className="object-contain object-bottom-right"
                  sizes="(max-width: 1024px) 60vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden relative pt-20 pb-0 px-4 text-center flex flex-col">
            <h1
              className="mb-2"
              style={{
                color: colors.primary.DEFAULT,
                fontWeight: 900,
                fontSize: "24px",
                lineHeight: 1.4,
              }}
            >
              BỆ PHÓNG
              <br />
              TOÀN DIỆN CHO MỌI
              <br />
              XUẤT PHÁT ĐIỂM
            </h1>

            <p
              className="font-semibold mb-4 px-2"
              style={{ color: colors.primary.navy.DEFAULT, fontSize: "14px" }}
            >
              Trở thành chuyên viên tư vấn bất động sản tại ERA Vietnam
            </p>

            <div className="w-[85%] mx-auto mt-auto">
              <Image
                src="/join/join_hero_img_mb.webp"
                alt="ERA Team"
                width={400}
                height={500}
                className="w-full h-auto object-contain"
                sizes="85vw"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Mobile cards */}
      <div className="md:hidden bg-gray-50 pt-6 pb-8 px-4">
        <div className="space-y-3 max-w-sm mx-auto">
          {benefits.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl shadow-md p-4 flex items-start gap-3 ${
                i === 0 ? "mt-[-30px] relative z-10" : ""
              }`}
            >
              <CircleCheck
                size={28}
                className="flex-shrink-0 mt-0.5"
                style={{ color: colors.primary.DEFAULT }}
              />
              <span className="text-sm font-medium" style={{ color: colors.gray[700] }}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
