"use client";

import { memo, useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors, withOpacity } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";
import Link from "next/link";
import { cn } from "@/lib/utils";

const relatedNews = [
  {
    id: 1,
    date: "15 Tháng 5, 2024",
    title: "Thị trường Bất động sản Việt Nam 2024: Cơ hội cho ngườimua nhà",
    excerpt: "Các chính sách mới và lãi suất ổn định đang tạo đà phục hồi mạnh mẽ cho phân khúc căn hộ cao cấp tại TP.HCM...",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    date: "10 Tháng 5, 2024",
    title: "ERA Vietnam tổ chức Lễ vinh danh Chuyên viên xuất sắc Quý 1",
    excerpt: "Hàng trăm giải thưởng giá trị đã được trao cho những nỗ lực không ngừng nghỉ của đội ngũ chuyên viên trong 3 tháng qua...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    date: "05 Tháng 5, 2024",
    title: "Cập nhật tính năng mới trên nền tảng My Agency v3.0",
    excerpt: "Hệ thống giờ đây cho phép chuyên viên tạo tour tham quan ảo 360 độ trực tiếp cho khách hàng từ xa...",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
  },
];

const socialLinks = [
  { name: "Facebook", src: "/shared/fb_icon.svg", href: "#" },
  { name: "Twitter", src: "/shared/x_icon.svg", href: "#" },
  { name: "LinkedIn", src: "/shared/linkedin_icon.svg", href: "#" },
  { name: "Share", src: "/news/news_share_icon.svg", href: "#" },
];

export const NewsDetailPage = memo(function NewsDetailPage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(e.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    }
    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isSearchOpen]);

  return (
    <main style={{ backgroundColor: colors.gray[50] }}>
      <Container>
        <article className="pt-20 md:pt-16 pb-12">
          {/* Breadcrumb + Search */}
          <div
            ref={searchRef}
            className="mb-4 flex items-center justify-between gap-3"
          >
            {/* Breadcrumb text — hidden on mobile only when search open */}
            <div
              className={cn(
                "flex items-center min-w-0 transition-all duration-200",
                isSearchOpen ? "opacity-0 w-0 overflow-hidden lg:opacity-100 lg:w-auto" : ""
              )}
            >
              <Link
                href={ROUTES.news}
                style={{ color: colors.gray[500], fontSize: "14px" }}
                className="hover:text-primary transition-colors flex-shrink-0"
              >
                Tin tức
              </Link>
              <span
                className="mx-2 flex-shrink-0"
                style={{ color: colors.gray[400] }}
              >
                /
              </span>
              <span
                className="truncate"
                style={{
                  color: colors.primary.DEFAULT,
                  fontSize: "14px",
                  fontWeight: 700,
                }}
              >
                Tin Thị Trường
              </span>
            </div>

            {/* Desktop search — always visible */}
            <div className="hidden lg:flex items-center gap-2">
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-lg w-[260px]"
                style={{ backgroundColor: colors.gray[100] }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.gray[400]}
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm min-w-0"
                  style={{ color: colors.neutral.foreground }}
                />
              </div>
              <button
                className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ backgroundColor: colors.primary.DEFAULT }}
                aria-label="Tìm kiếm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.neutral.white}
                  strokeWidth="2.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
            </div>

            {/* Mobile search input — expands when active */}
            <div
              className={cn(
                "flex items-center gap-2 transition-all duration-300 overflow-hidden lg:hidden",
                isSearchOpen ? "flex-1" : "w-0 opacity-0"
              )}
            >
              <div
                className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg"
                style={{ backgroundColor: colors.gray[100] }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.gray[400]}
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent outline-none text-sm min-w-0"
                  style={{ color: colors.neutral.foreground }}
                  autoFocus={isSearchOpen}
                />
              </div>

              {/* Search submit button */}
              <button
                className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg"
                style={{ backgroundColor: colors.primary.DEFAULT }}
                aria-label="Tìm kiếm"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.neutral.white}
                  strokeWidth="2.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>

              {/* Close button */}
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="flex-shrink-0 p-1"
                aria-label="Đóng tìm kiếm"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={colors.gray[500]}
                  strokeWidth="2"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Mobile search toggle button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className={cn(
                "lg:hidden flex items-center justify-center w-8 h-8 rounded-lg transition-colors flex-shrink-0",
                isSearchOpen ? "hidden" : ""
              )}
              style={{ backgroundColor: colors.primary.DEFAULT }}
              aria-label="Mở tìm kiếm"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.neutral.white}
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>

          {/* Title */}
          <h1
            className="mb-4"
            style={{
              color: colors.primary.DEFAULT,
              fontWeight: 800,
              fontSize: "clamp(24px, 4vw, 32px)",
              lineHeight: 1.3,
            }}
          >
            Tác động của lãi suất ngân hàng đến thị trường Bất Động Sản 2024
          </h1>

          {/* Excerpt */}
          <p
            className="mb-8"
            style={{
              color: colors.gray[600],
              fontSize: "15px",
              lineHeight: 1.6,
            }}
          >
            Thành lập năm 1971 tại Mỹ, ERA (Electronic Realty Associates) tự hào là một trong những thương hiệu môi giới bất động sản nhượng quyền hàng đầu thế giới, trực thuộc sự điều hành của Compass International Holdings - Công ty môi giới bất động sản nhà ở lớn nhất Hoa Kỳ.
          </p>

          {/* Featured Image */}
          <div className="relative rounded-2xl overflow-hidden mb-8 aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Featured"
              fill
              className="object-cover"
              sizes="100vw"
              loading="eager"
              priority
            />
          </div>

          {/* Body Content */}
          <div
            className="mb-8"
            style={{
              color: colors.neutral.foreground,
              fontSize: "15px",
              lineHeight: 1.8,
            }}
          >
            <p className="mb-4">
              Khu dịch vụ du lịch sinh thái, nghỉ dưỡng và giải trí tại bán đảo Tha La, hồ Dầu Tiếng đang được mờigọi đầu tư với tổng vốn hơn 18.000 tỷ đồng.
            </p>
            <p className="mb-4">
              UBND xã Dầu Tiếng, TP HCM vừa công bố thông tin mờigọi nhà đầu tư đăng ký thực hiện dự án Khu dịch vụ du lịch sinh thái, nghỉ dưỡng và giải trí tại bán đảo Tha La, hồ Dầu Tiếng. Dự án có quy mô sử dụng đất gần 207 ha, tổng vốn đầu tư dự kiến hơn 18.000 tỷ đồng.
            </p>
            <p>
              Theo định hướng, dự án có khả năng phục vụ khoảng 29.500 lượt khách mỗi ngày, trong đó khách lưu trú hơn 11.000 ngườii. Tiến độ thực hiện kéo dài 14 năm kể từ khi hoàn tất thủ tục lựa chọn nhà đầu tư và ký kết hợp đồng. Toàn bộ dự án dự kiến hoàn thành, nghiệm thu và đưa vào vận hành từ quý IV/2040.
            </p>
          </div>

          {/* Source + Date row */}
          <div className="flex items-center justify-between mb-10">
            <p
              style={{
                color: colors.gray[500],
                fontSize: "14px",
              }}
            >
              Trích nguồn:.......
            </p>
            <p
              style={{
                color: colors.gray[500],
                fontSize: "14px",
              }}
            >
              April 10, 2026
            </p>
          </div>

          {/* Share Section */}
          <div className="mb-10">
            <h4
              className="mb-3"
              style={{
                color: colors.neutral.foreground,
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              Chia sẻ
            </h4>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={link.name}
                  className="flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <Image
                    src={link.src}
                    alt={link.name}
                    width={36}
                    height={36}
                    className="w-9 h-9"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Related News */}
          <div>
            <h3
              className="mb-6"
              style={{
                color: colors.primary.navy.DEFAULT,
                fontWeight: 900,
                fontSize: "28px",
              }}
            >
              Tin tức liên quan
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer group hover:shadow-md transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      style={{ transition: "transform 0.3s ease" }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p
                      className="text-xs mb-2"
                      style={{
                        color: colors.gray[400],
                      }}
                    >
                      {item.date}
                    </p>
                    <h4
                      className="mb-2 line-clamp-2 group-hover:text-primary transition-colors"
                      style={{
                        color: colors.neutral.foreground,
                        fontWeight: 700,
                        fontSize: "16px",
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-sm line-clamp-3"
                      style={{
                        color: colors.gray[500],
                      }}
                    >
                      {item.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </article>
      </Container>
    </main>
  );
});
