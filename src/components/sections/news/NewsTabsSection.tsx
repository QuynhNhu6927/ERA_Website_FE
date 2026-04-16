"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";

const tabs = [
  { id: "market", label: "Tin Thị Trường", targetId: "tin-thi-truong" },
  { id: "project", label: "Tin Dự Án", targetId: "tin-du-an" },
  { id: "era", label: "ERA News", targetId: "era-news" },
  { id: "press", label: "Thông cáo báo chí", targetId: "thong-cao-bao-chi" },
  { id: "magazine", label: "E-Magazine", targetId: "e-magazine" },
];

export function NewsTabsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleTabClick = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 120;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Tabs */}
          <div className="flex gap-4 lg:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.targetId)}
                className="group relative pb-3 cursor-pointer whitespace-nowrap flex-shrink-0 text-gray-500 hover:text-primary transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '18px',
                  fontWeight: 500,
                }}
              >
                {tab.label}
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200"
                  style={{ backgroundColor: colors.primary.DEFAULT }}
                />
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center gap-3">
            <div
              className="flex items-center px-5 py-3 h-12 flex-1 lg:w-[380px] transition-shadow duration-200 hover:shadow-md"
              style={{
                backgroundColor: colors.neutral.white,
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              }}
            >
              <input
                type="text"
                placeholder="Tìm kiếm tin tức, dự án hoặc xu hướng..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none min-w-0"
                style={{
                  color: colors.gray[700],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontSize: '14px',
                }}
              />
            </div>
            <Button
              aria-label="Tìm kiếm"
              variant="primary"
              size="sm"
              className="h-12 w-12 rounded-xl p-0 flex-shrink-0"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.3-4.3"/>
              </svg>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
