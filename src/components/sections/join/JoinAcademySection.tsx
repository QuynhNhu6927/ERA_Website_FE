"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";

const levels = [
  {
    num: "1",
    title: "Sơ cấp",
    desc: "Xây dựng nền tảng nghiệp vụ về pháp lý, quy trình bán hàng và kỹ năng tìm kiếm khách hàng tiềm năng.",
    color: colors.secondary.DEFAULT,
  },
  {
    num: "2",
    title: "Trung cấp",
    desc: "Kỹ năng thực chiến chốt deal, tư vấn tài chính và xây dựng thương hiệu cá nhân chuyên nghiệp.",
    color: colors.tertiary.orange.DEFAULT,
  },
  {
    num: "3",
    title: "Nâng cấp",
    desc: "Tư duy làm nghề chuyên sâu, kỹ năng lãnh đạo, quản trị đội nhóm và tối ưu hóa hệ thống kinh doanh.",
    color: colors.primary.DEFAULT,
  },
];

export function JoinAcademySection() {
  return (
    <Section padding="md" bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        {/* Left: Image */}
        <div className="relative aspect-square lg:aspect-auto lg:h-full">
          <div className="h-full rounded-3xl overflow-hidden">
            <Image
              src="/join/join_aca.jpg"
              alt="ERA Academy"
              width={600}
              height={500}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Badge — overlapping bottom-right corner */}
          <div
            className="absolute -bottom-4 -right-4 rounded-xl px-5 py-3 shadow-lg"
            style={{ backgroundColor: colors.primary.DEFAULT }}
          >
            <div
              style={{
                color: colors.neutral.white,
                fontWeight: 900,
                fontSize: '28px',
                lineHeight: 1,
              }}
            >
              10+
            </div>
            <div
              style={{
                color: withOpacity(colors.neutral.white, 0.9),
                fontWeight: 500,
                fontSize: '12px',
              }}
            >
              Khóa học mỗi tuần
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          {/* Logo */}
          <Image
            src="/home/aca_era_logo.svg"
            alt="ERA Academy"
            width={200}
            height={60}
            className="mb-3 h-auto"
            loading="lazy"
          />
          <p
            className="mb-8"
            style={{
              color: colors.primary.navy.DEFAULT,
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: 1.5,
            }}
          >
            Hệ thống đào tạo và phát triển năng lực toàn diện tại ERA Vietnam
          </p>

          <div className="space-y-6">
            {levels.map((lv) => (
              <div key={lv.num} className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border-2"
                  style={{
                    borderColor: lv.color,
                    color: lv.color,
                    fontWeight: 700,
                    fontSize: '18px',
                  }}
                >
                  {lv.num}
                </div>
                <div>
                  <h4
                    className="mb-1"
                    style={{
                      color: lv.color,
                      fontWeight: 700,
                      fontSize: '18px',
                    }}
                  >
                    {lv.title}
                  </h4>
                  <p
                    style={{
                      color: colors.gray[600],
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: 1.6,
                    }}
                  >
                    {lv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
