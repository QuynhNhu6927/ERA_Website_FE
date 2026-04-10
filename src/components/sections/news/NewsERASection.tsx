"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const tabs = [
  { id: "press", label: "Thông cáo báo chí" },
  { id: "event", label: "Sự kiện ký kết" },
  { id: "team", label: "Đội ngũ & Coreteam" },
  { id: "internal", label: "Hoạt động nội bộ" },
];

const sideNews = [
  {
    id: 1,
    category: "SỰ KIỆN KÝ KẾT",
    title: "Hợp tác chiến lược giữa ERA Vietnam và ngân hàng Techcombank",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    category: "ĐỘI NGŨ",
    title: "Bổ nhiệm Giám đốc Điều hành mới khu vực miền Bắc",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    category: "HOẠT ĐỘNG NỘI BỘ",
    title: "Giải chạy ERA Connect: Nâng cao tinh thần đồng đội 2023",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80",
  },
];

const featuredNews = {
  title: "ERA Vietnam công bố định hướng chiến lược Move Up 2026",
  excerpt: "Tập trung vào trải nghiệm khách hàng và số hóa toàn diện quy trình môi giới, khẳng định vị thế dẫn đầu thị trường.",
  author: "Phòng Truyền Thông",
  date: "15 Tháng 10, 2023",
  image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80",
};

// Component for side news card with hover effect
function SideNewsCard({ item }: { item: typeof sideNews[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article 
      className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md"
      style={{ 
        borderLeft: `4px solid ${isHovered ? colors.primary.DEFAULT : 'transparent'}`,
        transition: 'all 0.3s',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-5 flex flex-col justify-center">
        <p 
          className="text-xs mb-2 transition-all duration-200"
          style={{ 
            color: isHovered ? colors.primary.DEFAULT : colors.secondary.DEFAULT,
            fontFamily: 'var(--font-inter)',
            fontWeight: isHovered ? 700 : 600,
          }}
        >
          {item.category}
        </p>
        <h4 
          className="line-clamp-2 transition-colors"
          style={{ 
            color: isHovered ? colors.primary.DEFAULT : colors.neutral.foreground,
            fontFamily: 'var(--font-inter)',
            fontWeight: 600,
            fontSize: '15px',
          }}
        >
          {item.title}
        </h4>
      </div>
    </article>
  );
}

export function NewsERASection() {
  const [activeTab, setActiveTab] = useState("press");

  return (
    <section className="py-12" style={{ backgroundColor: colors.gray[50] }}>
      <Container>
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-6">
          <div 
            className="w-1 h-6 rounded-full"
            style={{ backgroundColor: colors.primary.DEFAULT }}
          />
          <h2 
            style={{
              color: colors.primary.DEFAULT,
              fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
            }}
          >
            ERA News
          </h2>
        </div>

        {/* Tabs + Button Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          {/* Tabs */}
          <div className="flex gap-6 lg:gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative pb-2 transition-all duration-200 hover:text-primary text-sm"
                style={{
                  color: activeTab === tab.id ? colors.primary.DEFAULT : colors.gray[500],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: activeTab === tab.id ? 500 : 400,
                }}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span 
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: colors.primary.DEFAULT }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Button */}
          <button
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium w-fit transition-all duration-200 hover:opacity-90 hover:shadow-xl"
            style={{ backgroundColor: colors.primary.DEFAULT }}
          >
            Tất cả hoạt động
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left - Featured News */}
          <article className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer group transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
            <div className="h-64 overflow-hidden">
              <img 
                src={featuredNews.image} 
                alt={featuredNews.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 
                className="mb-3 line-clamp-2 group-hover:text-primary transition-colors"
                style={{ 
                  color: colors.neutral.foreground,
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 700,
                  fontSize: '20px',
                }}
              >
                {featuredNews.title}
              </h3>
              <p 
                className="mb-4 line-clamp-2"
                style={{ 
                  color: colors.gray[500],
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize: '14px',
                }}
              >
                {featuredNews.excerpt}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ backgroundColor: colors.primary.DEFAULT }}
                >
                  ERA
                </div>
                <div>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: colors.neutral.foreground }}
                  >
                    {featuredNews.author}
                  </p>
                  <p 
                    className="text-xs"
                    style={{ color: colors.gray[400] }}
                  >
                    {featuredNews.date}
                  </p>
                </div>
              </div>
            </div>
          </article>

          {/* Right - Side News List */}
          <div className="space-y-4">
            {sideNews.map((item) => (
              <SideNewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
