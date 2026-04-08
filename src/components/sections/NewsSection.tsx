"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight, Calendar } from "lucide-react";
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
            className="hidden sm:flex items-center gap-2 text-[#e31937] font-medium hover:gap-3 transition-all"
          >
            Xem tất cả
            <ArrowRight size={18} />
          </a>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={item.id}
              className={cn(
                "group cursor-pointer",
                index === 1 && "md:col-span-2 lg:col-span-1"
              )}
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
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar size={14} />
                {item.date}
              </div>
              <h3 className="font-semibold text-lg text-gray-900 group-hover:text-[#e31937] transition-colors mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <a
            href="/tin-tuc"
            className="inline-flex items-center gap-2 text-[#e31937] font-medium"
          >
            Xem tất cả
            <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}
