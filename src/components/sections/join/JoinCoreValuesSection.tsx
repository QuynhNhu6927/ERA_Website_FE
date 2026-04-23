"use client";

import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";
import { Users, ShieldCheck, Lightbulb, Heart, Flame } from "lucide-react";

const values = [
  {
    key: "unity",
    title: "Unity",
    desc: "Đoàn kết, thống nhất.",
    color: colors.primary.DEFAULT,
    icon: Users,
  },
  {
    key: "integrity",
    title: "Integrity",
    desc: "Chính trực.",
    color: colors.secondary.DEFAULT,
    icon: ShieldCheck,
  },
  {
    key: "innovation",
    title: "Innovation",
    desc: "Đổi mới.",
    color: colors.tertiary.orange.DEFAULT,
    icon: Lightbulb,
  },
  {
    key: "gratitude",
    title: "Gratitude",
    desc: "Lòng biết ơn.",
    color: colors.tertiary.purple.DEFAULT,
    icon: Heart,
  },
  {
    key: "passion",
    title: "Passion",
    desc: "Đam mê.",
    color: colors.primary.navy.DEFAULT,
    icon: Flame,
  },
];

export function JoinCoreValuesSection() {
  return (
    <Section padding="md" bg="gray">
      {/* Title */}
      <h2
        className="text-center mb-14"
        style={{
          color: colors.primary.DEFAULT,
          fontWeight: 900,
          fontSize: "clamp(28px, 4vw, 40px)",
          lineHeight: 1.1,
        }}
      >
        GIÁ TRỊ CỐT LÕI
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch justify-items-center max-w-5xl mx-auto">
        {/* Left: Slogan Card */}
        <div className="rounded-[30px] shadow-lg bg-white p-12 md:p-20 flex items-center justify-center">
          <div>
            <p
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                lineHeight: 1.15,
                fontWeight: 400,
              }}
            >
              <span style={{ color: colors.primary.DEFAULT }}>U</span>
              <span style={{ color: colors.gray[600], fontSize: "0.55em" }}> and </span>
              <span style={{ color: colors.secondary.DEFAULT }}>I</span>
              <span style={{ color: colors.tertiary.orange.DEFAULT }}> I</span>
              <span style={{ color: colors.gray[600] }}>n</span>
            </p>
            <p
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                lineHeight: 1.15,
                fontWeight: 400,
              }}
            >
              <span style={{ color: colors.tertiary.purple.DEFAULT }}>G</span>
              <span style={{ color: colors.gray[600] }}>reat</span>
            </p>
            <p
              style={{
                fontSize: "clamp(36px, 6vw, 64px)",
                lineHeight: 1.15,
                fontWeight: 400,
              }}
            >
              <span style={{ color: colors.primary.navy.DEFAULT }}>P</span>
              <span style={{ color: colors.gray[600] }}>ossibilities</span>
            </p>
          </div>
        </div>

        {/* Right: Timeline Values */}
        <div className="relative flex flex-col justify-center py-2">
          {/* Dashed line */}
          <div
            className="absolute left-4 top-2 bottom-2 w-px border-l border-dashed"
            style={{ borderColor: colors.gray[300] }}
          />

          {values.map((v, i) => {
            const Icon = v.icon;
            const offsetClass =
              i === 0 || i === 4 ? "ml-0" : i === 2 ? "ml-16" : "ml-8";
            const offsetPx =
              i === 0 || i === 4 ? 0 : i === 2 ? 64 : 32;
            const cardWidth = 384 - offsetPx;
            return (
              <div key={v.key} className="relative mb-4 last:mb-0">
                {/* Dot — cố định trên line, không di chuyển theo card */}
                <div
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                  style={{ backgroundColor: v.color }}
                />

                {/* Card — có margin-left stagger, rìa phải thẳng hàng */}
                <div className={`pl-10 ${offsetClass}`}>
                  <div
                    className="rounded-xl px-5 py-5 flex items-center gap-4 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 max-w-full"
                    style={{ backgroundColor: v.color, width: `${cardWidth}px` }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: colors.neutral.white }}
                    >
                      <Icon size={20} style={{ color: v.color }} />
                    </div>
                    <div>
                      <p
                        className="text-base font-bold"
                        style={{ color: colors.neutral.white }}
                      >
                        {v.title}
                      </p>
                      <p
                        className="text-sm"
                        style={{
                          color: withOpacity(colors.neutral.white, 0.9),
                        }}
                      >
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
