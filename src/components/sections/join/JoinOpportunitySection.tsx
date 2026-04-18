"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";

const cards = [
  {
    image: "/join/join_op_01.jpg",
    badge: "20% Nhân Sự",
    title: "Back Office",
    desc: "Kế toán, pháp lý, admin, marketing v.v. hỗ trợ đắc lực cho đội ngũ kinh doanh với môi trường làm việc chuyên nghiệp, ổn định",
    btn: "Khám Phá",
    btnColor: colors.gray[800],
    bgColor: withOpacity(colors.neutral.white, 0.08),
    hoverBgColor: colors.primary.DEFAULT,
  },
  {
    image: "/join/join_aca.jpg",
    badge: "80% Nhân Sự",
    title: "Agents",
    desc: "Môi giới thổ cư, dự án, căn hộ...thu nhập không giới hạn, làm chủ thờigian, được đào tạo từ a-z",
    btn: "Bứt Phá",
    btnColor: colors.secondary.DEFAULT,
    bgColor: colors.secondary.DEFAULT,
    hoverBgColor: withOpacity(colors.neutral.white, 0.08),
  },
];

function OpportunityCard({ c }: { c: (typeof cards)[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="rounded-2xl overflow-hidden w-full max-w-lg flex flex-col transition-all duration-300 hover:scale-[1.02]"
      style={{ backgroundColor: hovered ? c.hoverBgColor : c.bgColor }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="relative aspect-[3/2]">
        <Image
          src={c.image}
          alt={c.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          loading="lazy"
        />
        {/* Badge */}
        <span
          className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium"
          style={{
            backgroundColor: colors.primary.DEFAULT,
            color: colors.neutral.white,
          }}
        >
          {c.badge}
        </span>
      </div>

      {/* Content */}
      <div className="px-6 sm:px-8 lg:px-10 py-6 md:py-8 flex flex-col flex-grow">
        <div className="max-w-xs mx-auto text-left flex flex-col flex-grow">
          <h3
            className="mb-3"
            style={{
              color: colors.neutral.white,
              fontWeight: 700,
              fontSize: 'clamp(22px, 2.5vw, 28px)',
            }}
          >
            {c.title}
          </h3>
          <p
            className="mb-4"
            style={{
              color: withOpacity(colors.neutral.white, 0.75),
              fontSize: '14px',
              lineHeight: 1.6,
            }}
          >
            {c.desc}
          </p>
          <div className="mt-auto">
            <button
              className="w-full py-3 rounded-xl font-medium text-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: colors.neutral.white,
                color: c.btnColor,
              }}
            >
              {c.btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function JoinOpportunitySection() {
  return (
    <Section padding="md" bg="navy">
      {/* Header */}
      <div className="text-center mb-10">
        <h2
          className="mb-3"
          style={{
            color: colors.secondary.DEFAULT,
            fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 40px)',
          }}
        >
          CƠ HỘI ĐANG MỞ
        </h2>
        <p
          className="max-w-xl mx-auto"
          style={{
            color: withOpacity(colors.neutral.white, 0.85),
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: 1.6,
          }}
        >
          Chọn vị trí phù hợp để bắt đầu hành trình của bạn tại ERA Vietnam
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-14">
        {cards.map((c) => (
          <OpportunityCard key={c.title} c={c} />
        ))}
      </div>

    </Section>
  );
}
