"use client";

import { colors } from "@/lib/theme";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "about", label: "Về ERA Vietnam" },
  { id: "philosophy", label: "Triết lý kinh doanh" },
  { id: "services", label: "Lĩnh vực hoạt động" },
  { id: "core", label: "Năng lực cốt lõi" },
  { id: "divisions", label: "Đội ngũ Divisions" },
  { id: "awards", label: "Vinh danh" },
  { id: "esg", label: "ESG & CSR" },
];

interface AboutERAVNTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function AboutERAVNTabs({ activeTab, onTabChange }: AboutERAVNTabsProps) {
  return (
    <div className="bg-white shadow-sm pt-16 md:pt-20">
      <div className="overflow-hidden">
        <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 px-4 sm:px-8 lg:px-10 py-3 mx-auto max-w-6xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "group relative pb-2 md:pb-3 px-0.5 sm:px-1 md:px-2 text-[11px] sm:text-xs md:text-sm font-medium transition-colors duration-200 text-gray-500 hover:text-primary"
              )}
            >
              {tab.label}
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"
                style={{ backgroundColor: colors.primary.DEFAULT }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
