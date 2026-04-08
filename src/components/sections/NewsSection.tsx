"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const news = [
  {
    id: 1,
    title: "Thị trường Bất động sản Việt Nam 2026: Cơ hội cho ngưởi mua nhà",
    excerpt: "Các chính sách mới và lãi suất ổn định đang tạo đà phục hồi mạnh mẽ cho phân khúc căn hộ cao cấp tại TP.HCM...",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80",
    date: "10 Tháng 5, 2024",
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
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-[#1a1a4e]">Tin tức & </span>
            <span className="text-[#e31937]">Sự kiện</span>
          </h2>
          <a
            href="/tin-tuc"
            className="hidden md:flex items-center gap-2 text-[#e31937] font-medium hover:gap-3 transition-all"
          >
            Xem tất cả
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
              <p className="text-sm text-gray-400 mb-2">{item.date}</p>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#e31937] transition-colors mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm line-clamp-2">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile Slider - Ribbon Style */}
        <div className="md:hidden">
          {/* Slider Container */}
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
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Content on image */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-xs text-white/70 mb-1">{item.date}</p>
                      <h3 className="font-semibold text-white text-base line-clamp-2">
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
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {news.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentIndex
                      ? "bg-white w-6"
                      : "bg-white/50"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* View All Button Mobile */}
          <div className="mt-6 text-center">
            <a
              href="/tin-tuc"
              className="inline-flex items-center gap-2 text-[#e31937] font-medium"
            >
              Xem tất cả
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
