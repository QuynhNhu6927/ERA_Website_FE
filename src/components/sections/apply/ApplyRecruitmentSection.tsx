"use client";

import { useState } from "react";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";

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

export function ApplyRecruitmentSection() {
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
              <Button
                key={tab.key}
                variant={isActive ? "primary" : "ghost"}
                size="sm"
                className="rounded-full"
                style={isActive ? undefined : { color: colors.primary.navy.DEFAULT }}
                onClick={() => setActiveTab(tab.key)}
              >
                {tab.label}
              </Button>
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

            <Button asChild className="flex-shrink-0 rounded-full px-6">
              <Link href={ROUTES.applyDetail}>Xem chi tiết</Link>
            </Button>
          </div>
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-center">
        <Button variant="navy-outline" className="rounded-[15px] px-8">
          Xem tất cả 14 vị trí
        </Button>
      </div>
    </Section>
  );
}
