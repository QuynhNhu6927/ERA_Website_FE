"use client";

import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";

const stats = [
  { value: "17", label: "QUỐC GIA" },
  { value: "590", label: "VĂN PHÒNG" },
  { value: "24.700+", label: "AGENTS" },
];

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    title: "Cơ chế hoa hồng đột phá",
    desc: "Cơ chế hoa hồng lên tới 80% và thu nhập thụ động bền vững từ việc xây dựng đội ngũ kế tân.",
    bg: colors.primary.DEFAULT,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
      </svg>
    ),
    title: "ERA Tech",
    desc: "Quản lý giỏ hàng, khách hàng và quy trình giao dịch 100% trên nền tảng kỹ thuật số hiện đại.",
    bg: colors.primary.navy.DEFAULT,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-6h6v6" />
      </svg>
    ),
    title: "Rổ hàng\n150+ dự án",
    desc: "...",
    bg: colors.secondary.DEFAULT,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M11 5.08V2a1 1 0 0 1 2 0v3.08a9.003 9.003 0 0 1 6.5 8.92 9 9 0 1 1-15 0A9.003 9.003 0 0 1 11 5.08z" />
        <circle cx="12" cy="14" r="3" />
      </svg>
    ),
    title: "Marketing\nSupport",
    desc: "Hệ thống tài liệu, landing page và các chiến dịch truyền thông phủ rộng hỗ trợ tiếp cận khách hàng.",
    bg: colors.tertiary.orange.DEFAULT,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Admin Support",
    desc: "Đội ngũ pháp lý và admin chuyên nghiệp hỗ trợ xử lý giấy tờ, thủ tục giao dịch nhanh chóng.",
    bg: colors.tertiary.purple.DEFAULT,
  },
];

export function JoinWhySection() {
  return (
    <Section padding="md" bg="navy">
      {/* Title */}
      <div className="text-center mb-10">
        <h2
          className="mb-3"
          style={{
            color: colors.secondary.DEFAULT,
            fontWeight: 900,
            fontSize: 'clamp(28px, 4vw, 40px)',
          }}
        >
          JOIN TEAM ERA – SHAPE NEW ERA
        </h2>
        <p
          className="max-w-3xl mx-auto"
          style={{
            color: withOpacity(colors.neutral.white, 0.8),
            fontWeight: 400,
            fontSize: '15px',
            lineHeight: 1.6,
          }}
        >
          ERA (Electronic Realty Associates) được thành lập năm 1971, tự hào là thành viên của Compass International Holdings, công ty môi giới bất động sản nhà ở lớn nhất Hoa Kỳ.
        </p>
      </div>

      {/* Stats Bar */}
      <div
        className="rounded-3xl p-6 md:p-8 mb-10"
        style={{ backgroundColor: colors.primary.DEFAULT }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-8">
          {/* Left: Text */}
          <div className="text-center md:text-left md:w-2/5">
            <h3
              className="mb-2"
              style={{
                color: colors.neutral.white,
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 36px)',
                lineHeight: 1.2,
              }}
            >
              Global Brand
            </h3>
            <p
              style={{
                color: withOpacity(colors.neutral.white, 0.85),
                fontSize: '14px',
                lineHeight: 1.5,
              }}
            >
              Gia nhập mạng lưới toàn cầu tại hơn 35 quốc gia. Uy tín thương hiệu giúp bạn chốt hợp đồng nhanh hơn.
            </p>
          </div>

          {/* Divider between text and stats */}
          <div
            className="hidden md:block"
            style={{
              width: '1px',
              height: '50px',
              backgroundColor: withOpacity(colors.neutral.white, 0.3),
            }}
          />

          {/* Right: Stats with vertical dividers */}
          <div className="flex items-center justify-around md:w-3/5 gap-4 md:gap-0">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center">
                {i > 0 && (
                  <div
                    className="hidden md:block mx-4 lg:mx-8"
                    style={{
                      width: '1px',
                      height: '50px',
                      backgroundColor: withOpacity(colors.neutral.white, 0.3),
                    }}
                  />
                )}
                <div className="text-center px-2 md:px-4">
                  <div
                    style={{
                      color: colors.neutral.white,
                      fontWeight: 900,
                      fontSize: 'clamp(28px, 3.5vw, 42px)',
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      color: withOpacity(colors.neutral.white, 0.85),
                      fontWeight: 500,
                      fontSize: '13px',
                      marginTop: '4px',
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="rounded-2xl p-5"
            style={{
              backgroundColor: withOpacity(colors.neutral.white, 0.04),
              border: `1px solid ${withOpacity(colors.neutral.white, 0.12)}`,
            }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
              style={{ backgroundColor: b.bg, color: colors.neutral.white }}
            >
              {b.icon}
            </div>
            <h4
              className="mb-3 whitespace-pre-line"
              style={{
                color: colors.neutral.white,
                fontWeight: 700,
                fontSize: '15px',
                lineHeight: 1.4,
              }}
            >
              {b.title}
            </h4>
            <p
              style={{
                color: withOpacity(colors.neutral.white, 0.6),
                fontWeight: 400,
                fontSize: '13px',
                lineHeight: 1.6,
              }}
            >
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
