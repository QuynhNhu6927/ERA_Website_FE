"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/theme";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Minh Anh",
    role: "Marketing Executive",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    quote:
      "Không gian mở cho sự sáng tạo và DNA công nghệ xuyên suốt là điều tôi yêu thích nhất tại ERA. Được tự do triển khai các chiến dịch mới mẻ, làm chủ các công cụ Digital trong một tập thể đầy năng lượng giúp tôi nâng tầm bản thân mỗi ngày.",
  },
  {
    id: 2,
    name: "Trần Thị Mai Anh",
    role: "Team Leader",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
    quote:
      "Điều tôi trân trọng nhất ở ERA là văn hóa chia sẻ. Chúng tôi không cạnh tranh triệt tiêu mà cùng nhau xây dựng cộng đồng môi giới văn minh.",
  },
  {
    id: 3,
    name: "Phạm Gia Bảo",
    role: "Career Changer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
    quote:
      "Từ một nhân viên văn phòng 10 năm, tôi đã tìm thấy sự tự do thực sự tại ERA. Thu nhập thụ động giúp tôi có nhiều thờі gian hơn cho gia đình.",
  },
];

export function JoinTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  const t = testimonials[activeIndex];

  return (
    <Section padding="md" bg="white">
      {/* Title */}
      <h2
        className="text-center mb-10"
        style={{
          color: colors.primary.DEFAULT,
          fontWeight: 900,
          fontSize: "clamp(28px, 4vw, 40px)",
          lineHeight: 1.1,
        }}
      >
        CÂU CHUYỆN CỦA ERA-ers
      </h2>

      {/* Main Card */}
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-white grid grid-cols-1 md:grid-cols-2 min-h-[420px] md:min-h-[440px]">
        {/* Left: Image */}
        <div className="relative aspect-[4/3] md:aspect-auto h-full min-h-[280px]">
          <Image
            src={t.image}
            alt={t.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right: Quote */}
        <div className="p-8 md:p-10 flex flex-col justify-between h-full overflow-y-auto">
          <div>
            {/* Quote mark */}
            <span
              className="text-5xl md:text-6xl font-serif leading-none block mb-4"
              style={{ color: colors.primary.DEFAULT }}
            >
              &ldquo;
            </span>

            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: colors.gray[700] }}
            >
              {t.quote}
            </p>
          </div>

          <div className="flex items-end justify-between mt-8">
            <div>
              <p
                className="font-bold text-base md:text-lg"
                style={{ color: colors.primary.navy.DEFAULT }}
              >
                {t.name}
              </p>
              <p className="text-sm" style={{ color: colors.gray[500] }}>
                {t.role}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-gray-50"
                style={{ borderColor: colors.gray[300] }}
                aria-label="Trước"
              >
                <ChevronLeft
                  size={18}
                  style={{ color: colors.gray[600] }}
                />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-gray-50"
                style={{ borderColor: colors.gray[300] }}
                aria-label="Sau"
              >
                <ChevronRight
                  size={18}
                  style={{ color: colors.gray[600] }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
