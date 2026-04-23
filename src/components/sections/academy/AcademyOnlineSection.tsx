"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";
import { Lock, Share2, Clock, Eye } from "lucide-react";

const tabs = [
  "Hướng dẫn đăng tin",
  "Quay chụp BĐS chuyên sâu",
  "Capcut cơ bản",
  "Digital Marketing",
  "Kịch bản bán hàng",
];

const lessons = [
  {
    id: 1,
    title: "Bài 01: Giới thiệu về tầm quan trọng của hình ảnh & video trong bất động sản",
    duration: "01:22",
    locked: false,
    thumbnail: "/academy/aca_online_free_course.jpg",
  },
  {
    id: 2,
    title: "Bài 02: Hướng dẫn về thiết bị và set up",
    duration: "08:19",
    locked: true,
  },
  {
    id: 3,
    title: "Bài 03: Hướng dẫn chụp ảnh bất động sản",
    duration: "06:51",
    locked: true,
  },
  {
    id: 4,
    title: "Bài 04: Hướng dẫn chỉnh sửa ảnh bất động sản cơ bản",
    duration: "08:51",
    locked: true,
  },
  {
    id: 5,
    title: "Bài 05: Hướng dẫn quay video bất động sản",
    duration: "08:33",
    locked: true,
  },
];

export function AcademyOnlineSection() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <Section padding="md" bg="white">
      {/* Title */}
      <h2
        className="mb-6"
        style={{
          color: colors.primary.navy.DEFAULT,
          fontWeight: 900,
          fontSize: "clamp(28px, 4vw, 40px)",
          lineHeight: 1.1,
        }}
      >
        HỌC MỌI LÚC – TẬP MỌI NƠI
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {tabs.map((tab, i) => {
          const isActive = i === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 border"
              style={{
                backgroundColor: isActive ? colors.primary.DEFAULT : colors.neutral.white,
                color: isActive ? colors.neutral.white : colors.gray[700],
                borderColor: isActive ? colors.primary.DEFAULT : colors.gray[300],
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
        {/* Left: Video Player + Info */}
        <div className="rounded-2xl shadow-sm bg-white overflow-hidden">
          <div
            className="relative aspect-video flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${colors.primary.navy.DEFAULT} 0%, #1a1a4e 100%)`,
            }}
          >
            {/* Decorative background pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, ${colors.primary.DEFAULT} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${colors.secondary.DEFAULT} 0%, transparent 40%)`,
              }}
            />

            {/* Lock overlay content */}
            <div className="relative z-10 flex flex-col items-center text-center px-6">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: withOpacity(colors.neutral.white, 0.15) }}
              >
                <Lock size={32} style={{ color: colors.neutral.white }} />
              </div>
              <h3
                className="text-lg md:text-xl font-bold mb-2"
                style={{ color: colors.neutral.white }}
              >
                Nội dung này dành riêng cho ERA Agent
              </h3>
              <p
                className="text-sm max-w-md mb-6"
                style={{ color: withOpacity(colors.neutral.white, 0.8) }}
              >
                Nâng tầm sự nghiệp bất động sản chuyên nghiệp cùng mạng lưới toàn cầu của ERA Vietnam.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: colors.primary.DEFAULT,
                    color: colors.neutral.white,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.primary.dark.DEFAULT;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.primary.DEFAULT;
                  }}
                >
                  <Image
                    src="/academy/aca_onboard_icon_white.svg"
                    width={16}
                    height={16}
                    alt=""
                  />
                  Gia nhập ERA để mở khóa
                </button>
                <button
                  className="inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all border"
                  style={{
                    backgroundColor: withOpacity(colors.neutral.white, 0.1),
                    color: colors.neutral.white,
                    borderColor: withOpacity(colors.neutral.white, 0.3),
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = withOpacity(colors.neutral.white, 0.2);
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = withOpacity(colors.neutral.white, 0.1);
                  }}
                >
                  Đăng nhập
                </button>
              </div>
            </div>
          </div>

          {/* Video Info */}
          <div className="p-5 md:p-6">
            <div className="flex items-start justify-between gap-4">
              <h3
                className="text-lg md:text-xl font-bold"
                style={{ color: colors.neutral.foreground }}
              >
                Bài 01: Giới thiệu về tầm quan trọng của hình ảnh & video trong bất động sản
              </h3>
              <button
                className="flex-shrink-0 px-3 py-2 rounded-lg flex items-center justify-center transition-colors"
                style={{ backgroundColor: colors.gray[100] }}
                aria-label="Chia sẻ"
              >
                <Share2 size={18} style={{ color: colors.neutral.black }} />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-2">
              <div className="flex items-center gap-1.5 text-sm" style={{ color: colors.gray[500] }}>
                <Clock size={14} />
                <span>01:22</span>
              </div>
              <div className="flex items-center gap-1.5 text-sm" style={{ color: colors.gray[500] }}>
                <Eye size={14} />
                <span>1.2k lượt xem</span>
              </div>
              <span
                className="inline-flex items-center gap-1 text-xs font-medium"
                style={{ color: colors.primary.DEFAULT }}
              >
                <Image
                  src="/academy/aca_online_exclusive.svg"
                  width={14}
                  height={14}
                  alt=""
                />
                ERA Exclusive
              </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed" style={{ color: colors.gray[600] }}>
              Trong thờі đại số, bạn chỉ có 5 giây để giữ chân khách hàng lướt xem tin đăng! Khám phá lý do tại sao hình ảnh và video chất lượng không chỉ là minh họa, mà chính là &quot;vũ khí&quot; chốt deal mạnh mẽ nhất giúp bạn đánh bại đối thủ.
            </p>
          </div>
        </div>

        {/* Right: Lesson List */}
        <div className="flex flex-col h-full">
          {/* Header — nằm ngoài card */}
          <div className="flex items-center justify-between mb-3">
            <h3
              style={{
                color: colors.primary.navy.DEFAULT,
                fontWeight: 800,
                fontSize: "clamp(18px, 2vw, 22px)",
              }}
            >
              Danh sách bài học
            </h3>
            <span
              className="text-xs font-medium tracking-wide"
              style={{ color: colors.gray[500] }}
            >
              01 / 09{" "}
              <span className="ml-1" style={{ color: colors.gray[700] }}>
                HOÀN TẤT
              </span>
            </span>
          </div>

          {/* Card */}
          <div className="rounded-b-2xl shadow-sm overflow-hidden flex flex-col flex-1">
            {/* List */}
            <div
              className="flex-1 pb-3 pt-0 overflow-y-auto flex flex-col"
              style={{ backgroundColor: colors.primary.navy.DEFAULT }}
            >
              {/* Bài 01 */}
              <div
                className="mb-2 transition-colors cursor-pointer"
                style={{
                  backgroundColor: withOpacity(colors.neutral.white, 0.05),
                  borderLeft: `3px solid ${colors.primary.DEFAULT}`,
                }}
              >
                <div className="flex items-center gap-3 px-3 pb-3 pt-3">
                  <div className="relative w-36 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={lessons[0].thumbnail || ""}
                      alt={lessons[0].title}
                      fill
                      className="object-cover"
                      sizes="144px"
                    />
                  </div>
                  <div className="min-w-0 flex-1 h-24 flex flex-col justify-center">
                    <p
                      className="text-[10px] font-semibold uppercase tracking-wider mb-0.5"
                      style={{ color: colors.secondary.DEFAULT }}
                    >
                      HỌC THỬ MIỄN PHÍ
                    </p>
                    <p
                      className="text-sm font-medium leading-snug"
                      style={{
                        color: colors.neutral.white,
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {lessons[0].title}
                    </p>
                    <p
                      className="text-xs mt-0.5"
                      style={{ color: colors.gray[400] }}
                    >
                      {lessons[0].duration}
                    </p>
                  </div>
                </div>
              </div>

              {/* Các bài locked */}
              <div className="flex-1 flex flex-col justify-evenly">
                {lessons.slice(1).map((lesson) => (
                  <div
                    key={lesson.id}
                    className="flex items-center gap-2 px-3 py-1 transition-colors cursor-pointer"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: withOpacity(colors.neutral.white, 0.1) }}
                    >
                      <Lock size={14} style={{ color: colors.gray[400] }} />
                    </div>
                    <div className="min-w-0 flex-1 flex flex-col justify-center">
                      <p
                        className="text-sm font-medium leading-snug"
                        style={{ color: colors.gray[400] }}
                      >
                        {lesson.title}
                      </p>
                      <p
                        className="text-xs mt-0.5"
                        style={{ color: colors.gray[500] }}
                      >
                        {lesson.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div
              className="px-5 py-4"
              style={{
                backgroundColor: colors.primary.navy.DEFAULT,
                borderTop: `1px solid ${withOpacity(colors.neutral.white, 1)}`,
              }}
            >
              <p
                className="text-xs mb-3 text-center"
                style={{ color: withOpacity(colors.neutral.white, 1) }}
              >
                Nâng cấp tài khoản để xem toàn bộ 9 bài học trong lộ trình này.
              </p>
              <button
                className="w-full py-2.5 rounded-lg text-sm font-semibold text-white transition-colors"
                style={{ backgroundColor: colors.primary.DEFAULT }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.primary.dark.DEFAULT;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = colors.primary.DEFAULT;
                }}
              >
                MỞ KHÓA LỘ TRÌNH
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
