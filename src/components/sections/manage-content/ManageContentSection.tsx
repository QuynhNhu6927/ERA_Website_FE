"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, FileText, Building2, Users, Phone, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { colors, withOpacity } from "@/lib/theme";

interface ContentCard {
  id: string;
  title: string;
  image?: string;
  icon?: React.ReactNode;
  color?: string;
}

const contentCards: ContentCard[] = [
  {
    id: "news",
    title: "Tin tức",
    image: "/news/news_banner.jpg",
  },
  {
    id: "projects",
    title: "Dự án",
    icon: <Building2 size={40} />,
    color: colors.primary.DEFAULT,
  },
  {
    id: "about",
    title: "Về chúng tôi",
    icon: <Users size={40} />,
    color: "#3b82f6",
  },
  {
    id: "contact",
    title: "Liên hệ",
    icon: <Phone size={40} />,
    color: "#10b981",
  },
  {
    id: "join",
    title: "Join Team ERA",
    icon: <Briefcase size={40} />,
    color: "#f59e0b",
  },
  {
    id: "legal",
    title: "Pháp lý",
    icon: <FileText size={40} />,
    color: "#6366f1",
  },
];

export function ManageContentSection() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCards = contentCards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="min-h-screen py-10 md:py-16">
      <Container>
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1
            className="text-2xl md:text-3xl font-bold mb-2"
            style={{ color: colors.gray[900] }}
          >
            Quản lý nội dung
          </h1>
          <p className="text-sm md:text-base" style={{ color: colors.gray[500] }}>
            Chọn trang nội dung bạn muốn chỉnh sửa
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 md:mb-10 max-w-xl">
          <div className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: colors.gray[400] }}>
            <Search size={18} />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm trang nội dung..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border outline-none transition-all text-sm"
            style={{ borderColor: colors.gray[200], backgroundColor: colors.neutral.white }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = colors.primary.DEFAULT;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${withOpacity(colors.primary.DEFAULT, 0.1)}`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = colors.gray[200];
              e.currentTarget.style.boxShadow = "none";
            }}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {filteredCards.map((card) => (
            <button
              key={card.id}
              className="group text-left rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                borderColor: colors.gray[200],
                backgroundColor: colors.neutral.white,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.primary.DEFAULT;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.gray[200];
              }}
            >
              {/* Image / Placeholder */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                {card.image ? (
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${withOpacity(card.color || colors.primary.DEFAULT, 0.12)} 0%, ${withOpacity(card.color || colors.primary.DEFAULT, 0.04)} 100%)`,
                      color: card.color || colors.primary.DEFAULT,
                    }}
                  >
                    {card.icon}
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="p-4">
                <h3
                  className="text-sm font-semibold transition-colors"
                  style={{ color: colors.gray[800] }}
                >
                  {card.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center py-16">
            <p className="text-sm" style={{ color: colors.gray[400] }}>
              Không tìm thấy trang nội dung nào
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
