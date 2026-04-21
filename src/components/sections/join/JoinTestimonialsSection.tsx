"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Hoàng Nam",
    role: "Young Agent",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
    quote: "Chỉ sau 6 tháng gia nhập ERA Academy, tôi đã chốt được giao dịch đầu tiên trị giá 5 tỷ đồng. Hệ thống công nghệ thực sự là cứu cánh cho ngườimới như tôi.",
  },
  {
    id: 2,
    name: "Trần Thị Mai Anh",
    role: "Team Leader",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
    quote: "Điều tôi trân trọng nhất ở ERA là văn hóa chia sẻ. Chúng tôi không cạnh tranh triệt tiêu mà cùng nhau xây dựng cộng đồng môi giới văn minh.",
  },
  {
    id: 3,
    name: "Phạm Gia Bảo",
    role: "Career Changer",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100",
    quote: "Từ một nhân viên văn phòng 10 năm, tôi đã tìm thấy sự tự do thực sự tại ERA. Thu nhập thụ động giúp tôi có nhiều thờigian hơn cho gia đình.",
  },
];

export function JoinTestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <Section padding="md" bg="gray">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2
            style={{
              color: colors.secondary.DEFAULT,
              fontWeight: 900,
              fontSize: 'clamp(24px, 3vw, 36px)',
            }}
          >
            NGƯỜI THẬT, VIỆC THẬT
          </h2>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-white"
              style={{ borderColor: colors.border.dark }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors hover:bg-white"
              style={{ borderColor: colors.border.dark }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards - Desktop show all, Mobile slide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              style={{
                display: i === activeIndex ? "block" : undefined,
              }}
            >
              {/* Author */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4
                    className="leading-tight"
                    style={{
                      color: colors.primary.DEFAULT,
                      fontWeight: 700,
                      fontSize: '15px',
                    }}
                  >
                    {t.name}
                  </h4>
                  <p
                    style={{
                      color: colors.gray[500],
                      fontWeight: 400,
                      fontSize: '13px',
                    }}
                  >
                    {t.role}
                  </p>
                </div>
                <span
                  className="ml-auto text-4xl leading-none"
                  style={{ color: withOpacity(colors.primary.DEFAULT, 0.15) }}
                >
                  "
                </span>
              </div>

              {/* Quote */}
              <p
                className="italic"
                style={{
                  color: colors.gray[700],
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: 1.7,
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {/* Mobile dots */}
        <div className="flex justify-center gap-2 mt-6 md:hidden">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="w-2 h-2 rounded-full transition-colors"
              style={{
                backgroundColor: i === activeIndex ? colors.primary.DEFAULT : colors.gray[300],
              }}
            />
          ))}
        </div>
    </Section>
  );
}
