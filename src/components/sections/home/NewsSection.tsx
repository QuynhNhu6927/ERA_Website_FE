"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const news = [
  {
    id: 1,
    title: "Góc nhìn toàn cảnh xu hướng thị trường bất động sản năm 2026",
    excerpt: "Thị trường bất động sản năm 2026 bước vào giai đoạn tái cấu trúc mạnh mẽ, chuyển dịch từ đầu cơ sang giá trị thực.",
    image: "/home/home_news_01.jpg",
    date: "Tháng 4, 2026",
  },
  {
    id: 2,
    title: "ERA Vietnam tổ chức thành công VNBC 2026 tại The Grand Hồ Tràm",
    excerpt: "Sự kiện là một hành trình trải nghiệm đa giác quan: từ những bài học đắt giá, những khoảnh khắc vinh danh xúc động, cho đến đại tiệc giải trí 5 sao đầy gắn kết.",
    image: "/home/home_news_02.jpg",
    date: "Tháng 3, 2026",
  },
  {
    id: 3,
    title: "Lễ ra quân dự án Vinhomes Hải Vân Bay - “Siêu dự án” được mong chờ nhất miền Trung",
    excerpt: "Dự kiến, phân khu Bạch Vân sẽ chính thức 'khóa sổ' vào tuần tới khi quỹ căn đang cạn dần một cách nhanh chóng.",
    image: "/home/home_news_03.jpg",
    date: "Tháng 4, 2026",
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
              style={{ color: colors.secondary.DEFAULT }}
            >
              TIN TỨC & SỰ KIỆN
            </span>
            <span 
              className="hidden lg:inline"
              style={{ color: colors.secondary.DEFAULT }}
            >
              TIN TỨC & SỰ KIỆN
            </span>
          </h2>
          <a
            href="/"
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
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  loading="lazy"
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
                  className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                    loading="lazy"
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
            href="/"
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
