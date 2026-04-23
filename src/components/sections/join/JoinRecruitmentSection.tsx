"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/theme";

const tabs = [
  { key: "all", label: "Tất cả" },
  { key: "hcm", label: "TP. HCM" },
  { key: "hn", label: "Hà Nội" },
  { key: "dn", label: "Đà Nẵng" },
];

const jobs = [
  {
    id: 1,
    title: "Chuyên viên Communication",
    dept: "Marketing",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thờі gian",
    city: "hcm",
  },
  {
    id: 2,
    title: "Admin",
    dept: "Kinh doanh",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thờі gian",
    city: "hcm",
  },
  {
    id: 3,
    title: "Kế toán Tổng hợp",
    dept: "Tài chính",
    location: "Hà Nội",
    type: "Toàn thờі gian",
    city: "hn",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    dept: "Công nghệ",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thờі gian",
    city: "hcm",
  },
];

export function JoinRecruitmentSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredJobs =
    activeTab === "all" ? jobs : jobs.filter((j) => j.city === activeTab);

  return (
    <Section padding="md" bg="white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h2
          style={{
            color: colors.primary.DEFAULT,
            fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: 1.1,
          }}
        >
          VỊ TRÍ ĐANG TUYỂN DỤNG
        </h2>

        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = tab.key === activeTab;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  backgroundColor: isActive
                    ? colors.primary.DEFAULT
                    : "transparent",
                  color: isActive ? colors.neutral.white : colors.primary.navy.DEFAULT,
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Job List */}
      <div className="flex flex-col gap-4 mb-8">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="flex items-center justify-between gap-4 rounded-2xl bg-white px-6 py-5 shadow-sm transition-all duration-300"
          >
            <div className="min-w-0">
              <h3
                className="text-base md:text-lg font-semibold mb-1"
                style={{ color: colors.primary.navy.DEFAULT }}
              >
                {job.title}
              </h3>
              <div
                className="flex flex-wrap items-center gap-3 text-xs md:text-sm"
                style={{ color: colors.gray[500] }}
              >
                <span>{job.dept}</span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="inline-block w-1 h-1 rounded-full"
                    style={{ backgroundColor: colors.gray[400] }}
                  />
                  {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <span
                    className="inline-block w-1 h-1 rounded-full"
                    style={{ backgroundColor: colors.gray[400] }}
                  />
                  {job.type}
                </span>
              </div>
            </div>

            <Link
              href="/join/chuyen-vien-marketing-du-an"
              className="flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: colors.primary.DEFAULT }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  colors.primary.dark.DEFAULT;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  colors.primary.DEFAULT;
              }}
            >
              Xem chi tiet
            </Link>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-center">
        <button
          className="px-8 py-3 rounded-[15px] text-sm font-semibold transition-colors"
          style={{
            border: `1.5px solid ${colors.primary.navy.DEFAULT}`,
            color: colors.primary.navy.DEFAULT,
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              colors.primary.navy.DEFAULT;
            (e.currentTarget as HTMLButtonElement).style.color =
              colors.neutral.white;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "transparent";
            (e.currentTarget as HTMLButtonElement).style.color =
              colors.primary.navy.DEFAULT;
          }}
        >
          Xem tất cả 14 vị trí
        </button>
      </div>
    </Section>
  );
}
