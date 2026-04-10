"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const news = [
  {
    id: 1,
    title: "Thị trường Bất động sản Việt Nam 2024: Cơ hội cho ngườI mua nhà",
    excerpt: "Các chính sách mới và lãi suất ổn định đang tạo đà phục hồi mạnh mẽ cho phân khúc căn hộ cao cấp tại TP.HCM...",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80",
    date: "15 Tháng 5, 2024",
  },
  {
    id: 2,
    title: "ERA Vietnam tổ chức Lễ vinh danh Chuyên viên xuất sắc Quý 1",
    excerpt: "Hàng trăm giải thưởng giá trị đã được trao cho những nỗ lực không ngừng nghỉ của đội ngũ chuyên viên trong 3 tháng qua...",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    date: "10 Tháng 5, 2024",
  },
  {
    id: 3,
    title: "Cập nhật tính năng mới trên nền tảng My Agency v3.0",
    excerpt: "Hệ thống giờ đây cho phép chuyên viên tạo tour tham quan ảo 360 độ trực tiếp cho khách hàng từ xa...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    date: "05 Tháng 5, 2024",
  },
];

export function NewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <section 
      className="py-16 lg:py-20 bg-white"
    >
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 
            className="text-[28px] lg:text-[36px]"
            style={{ 
              fontFamily: 'var(--font-manrope), system-ui, sans-serif',
              fontWeight: 800,
            }}
          >
            <span 
              className="lg:hidden"
              style={{ color: colors.primary.DEFAULT }}
            >
              TIN TỨC & SỰ KIỆN
            </span>
            <span 
              className="hidden lg:inline"
              style={{ color: colors.secondary.DEFAULT }}
            >
              Tin tức & Sự kiện
            </span>
          </h2>
          <a
            href="/tin-tuc"
            className="hidden lg:flex items-center gap-2 transition-colors duration-200 hover:text-primary-dark"
            style={{ color: colors.primary.DEFAULT }}
          >
            <span 
              style={{
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
              }}
            >
              Xem tất cả
            </span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <p 
                className="mb-2"
                style={{ 
                  color: colors.gray[400],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                  fontSize: '12px',
                }}
              >
                {item.date}
              </p>
              <h3 
                className="mb-2 line-clamp-2 transition-colors group-hover:text-primary"
                style={{ 
                  color: colors.neutral.foreground,
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                }}
              >
                {item.title}
              </h3>
              <p 
                className="line-clamp-2"
                style={{ 
                  color: colors.gray[500],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                }}
              >
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile List */}
        <div className="lg:hidden">
          <div className="flex flex-col gap-6">
            {news.map((item, index) => (
              <article
                key={item.id}
                className="flex gap-4 cursor-pointer"
              >
                {/* Thumbnail */}
                <div 
                  className="w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="flex flex-col justify-center">
                  {/* Category - red uppercase */}
                  <p 
                    className="mb-1"
                    style={{ 
                      color: colors.primary.DEFAULT,
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 600,
                      fontSize: '12px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {index === 0 ? 'Tin thị trường' : index === 1 ? 'Tin dự án' : 'Tin công ty'}
                  </p>
                  {/* Title */}
                  <h3 
                    className="mb-1 line-clamp-2"
                    style={{ 
                      color: colors.neutral.foreground,
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.title}
                  </h3>
                  {/* Date */}
                  <p 
                    style={{ 
                      color: colors.gray[400],
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                    }}
                  >
                    {item.date.toUpperCase()}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* View All Button */}
          <a
            href="/tin-tuc"
            className="mt-8 w-full py-4 rounded-xl text-white text-center block transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{
              backgroundColor: colors.primary.DEFAULT,
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              textTransform: 'uppercase',
            }}
          >
            Xem tất cả tin tức
          </a>
        </div>
      </Container>
    </section>
  );
}
