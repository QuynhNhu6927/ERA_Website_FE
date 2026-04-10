"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const tabs = [
  { id: "market", label: "Tin Thị Trường" },
  { id: "project", label: "Tin Dự Án" },
  { id: "era", label: "ERA News" },
  { id: "magazine", label: "E-Magazine" },
];

export function NewsTabsSection() {
  const [activeTab, setActiveTab] = useState("market");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="py-10 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Tabs */}
          <div className="flex gap-6 lg:gap-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative pb-3 transition-colors"
                style={{
                  color: activeTab === tab.id ? colors.primary.DEFAULT : colors.gray[500],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
              >
                {tab.label}
                {/* Active underline */}
                {activeTab === tab.id && (
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: colors.primary.DEFAULT }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-3">
            <div 
              className="flex items-center gap-3 px-5 py-3 flex-1 lg:w-[480px] transition-shadow duration-300 hover:shadow-md"
              style={{ 
                backgroundColor: colors.neutral.white,
                borderRadius: '24px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.primary.DEFAULT} strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
              <input
                type="text"
                placeholder="Tìm kiếm tin tức, dự án hoặc xu hướng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                style={{ 
                  color: colors.gray[700],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '18px',
                }}
              />
            </div>
            <button
              className="px-8 py-3 text-white font-medium transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ 
                backgroundColor: colors.primary.DEFAULT,
                borderRadius: '24px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '18px',
              }}
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
