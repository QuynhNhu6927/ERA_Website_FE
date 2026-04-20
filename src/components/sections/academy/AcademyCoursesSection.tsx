"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";
import {
  OnboardingTab,
  ExpertSeriesTab,
  ProcoachingTab,
  InternationalTab,
} from "./courses";

const tabs = [
  { id: "onboarding", label: "Onboarding", Component: OnboardingTab },
  { id: "expert", label: "Expert Series", Component: ExpertSeriesTab },
  { id: "coaching", label: "Procoaching", Component: ProcoachingTab },
  { id: "international", label: "Đào tạo Quốc tế", Component: InternationalTab },
];

export function AcademyCoursesSection() {
  const [activeTab, setActiveTab] = useState("onboarding");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const ActiveComponent = tabs.find((t) => t.id === activeTab)?.Component ?? OnboardingTab;

  return (
    <Section padding="md" bg="gray">
      {/* Title */}
      <div className="text-center mb-4">
        <h2
          style={{
            color: colors.primary.DEFAULT,
            fontWeight: 900,
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 1.1,
          }}
        >
          CÁC KHOÁ HỌC NỔI BẬT
        </h2>
        <p
          className="max-w-2xl mx-auto mt-2"
          style={{
            color: colors.gray[600],
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: 1.5,
          }}
        >
          Hệ thống khóa học đa dạng, dẫn dắt từ kiến thức nền tảng cho đến kỹ năng thực chiến chuyên sâu, giúp bạn tự tin làm chủ mọi giao dịch.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isHovered = hoveredTab === tab.id;
          const bg = isActive
            ? colors.primary.DEFAULT
            : isHovered
              ? withOpacity(colors.primary.DEFAULT, 0.08)
              : colors.neutral.white;
          const textColor = isActive
            ? colors.neutral.white
            : isHovered
              ? colors.primary.DEFAULT
              : colors.gray[600];
          const border = isActive
            ? colors.primary.DEFAULT
            : isHovered
              ? colors.primary.DEFAULT
              : colors.gray[300];
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              className="px-6 py-2.5 rounded-lg text-sm font-medium transition-all border"
              style={{
                backgroundColor: bg,
                color: textColor,
                borderColor: border,
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      <ActiveComponent />
    </Section>
  );
}
