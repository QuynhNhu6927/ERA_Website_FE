"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme";

const news = [
  {
    id: 1,
    title: "Thi truong Bat dong san Viet Nam 2026: Co hoi cho nguoi mua nha",
    excerpt: "Cac chinh sach moi va lai suat on dinh dang tao da phuc hoi manh me cho phan khuc can ho cao cap tai TP.HCM...",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80",
    date: "10 Thang 5, 2024",
  },
  {
    id: 2,
    title: "ERA Vietnam to chuc Le vinh danh Chuyen vien xuat sac Quy 1",
    excerpt: "Hang tram giai thuong gia tri da duoc trao cho nhung no luc khong ngung nghi cua doi ngu chuyen vien trong 3 thang qua...",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80",
    date: "10 Thang 5, 2024",
  },
  {
    id: 3,
    title: "Cap nhat tinh nang moi tren nen tang My Agency v3.0",
    excerpt: "He thong gio day cho phep chuyen vien tao tour tham quan ao 360 do truc tiep cho khach hang tu xa...",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    date: "05 Thang 5, 2024",
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
      className="py-12 md:py-12"
      style={{ backgroundColor: colors.neutral.white }}
    >
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span style={{ color: colors.secondary.DEFAULT }}>Tin tuc & </span>
            <span style={{ color: colors.primary.DEFAULT }}>Su kien</span>
          </h2>
          <a
            href="/tin-tuc"
            className="hidden md:flex items-center gap-2 font-medium hover:gap-3 transition-all"
            style={{ color: colors.primary.DEFAULT }}
          >
            Xem tat ca
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <p 
                className="text-sm mb-2"
                style={{ color: colors.gray[400] }}
              >
                {item.date}
              </p>
              <h3 
                className="font-semibold text-lg mb-2 line-clamp-2"
                style={{ color: colors.neutral.foreground }}
              >
                <span 
                  className="group-hover:text-primary transition-colors"
                  style={{ color: 'inherit' }}
                >
                  {item.title}
                </span>
              </h3>
              <p 
                className="text-sm line-clamp-2"
                style={{ color: colors.gray[500] }}
              >
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {news.map((item) => (
                <article
                  key={item.id}
                  className="w-full flex-shrink-0"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div 
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
                    />
                    
                    {/* Content on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p 
                        className="text-xs mb-1"
                        style={{ color: `${colors.neutral.white}B3` }}
                      >
                        {item.date}
                      </p>
                      <h3 
                        className="font-semibold text-base line-clamp-2"
                        style={{ color: colors.neutral.white }}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: colors.overlay.light }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} style={{ color: colors.gray[700] }} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: colors.overlay.light }}
              aria-label="Next slide"
            >
              <ChevronRight size={20} style={{ color: colors.gray[700] }} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {news.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: index === currentIndex ? '24px' : '8px',
                    backgroundColor: index === currentIndex 
                      ? colors.neutral.white 
                      : `${colors.neutral.white}80`,
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Button Mobile */}
          <div className="mt-6 text-center">
            <a
              href="/tin-tuc"
              className="inline-flex items-center gap-2 font-medium"
              style={{ color: colors.primary.DEFAULT }}
            >
              Xem tat ca
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
