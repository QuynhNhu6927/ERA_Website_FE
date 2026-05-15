"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";
import { Search, ChevronDown, ArrowRight } from "lucide-react";

export function ProjectsHeroSection() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative h-[420px] md:h-[500px] w-full overflow-hidden">
        <Image
          src="/project/project_hero_banner.webp"
          alt="Dự án Bất động sản"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to top, ${colors.primary.navy.DEFAULT} 0%, ${colors.primary.navy.DEFAULT}dd 30%, transparent 70%)`,
          }}
        />
        {/* Content */}
        <Container size="lg" className="relative h-full flex flex-col justify-end pb-20 md:pb-24">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-3">
            Dự án Bất động sản
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-xl leading-relaxed">
            Khám phá danh mục dự án được chọn lọc khắt khe nhất từ ERA Vietnam.
            <br className="hidden md:block" />
            Tương lai của bạn bắt đầu từ đây.
          </p>
        </Container>
      </div>

      {/* Search Bar */}
      <Container size="lg" className="relative -mt-10 z-10">
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-5 flex flex-col md:flex-row items-stretch md:items-center gap-3 md:gap-4">
          {/* Search Input */}
          <div className="flex-1 flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-50">
            <Search size={18} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Khám phá giỏ hàng 100+ dự án của ERA"
              className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
          {/* Dropdowns */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-transparent text-sm text-gray-600 pr-8 pl-3 py-2.5 outline-none cursor-pointer border border-gray-200 rounded-lg">
                <option>Tất cả loại hình</option>
                <option>Căn hộ</option>
                <option>Nhà phố</option>
                <option>Biệt thự</option>
                <option>Đất nền</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
            <div className="relative">
              <select className="appearance-none bg-transparent text-sm text-gray-600 pr-8 pl-3 py-2.5 outline-none cursor-pointer border border-gray-200 rounded-lg">
                <option>Đang mở bán</option>
                <option>Sắp mở bán</option>
                <option>Đã bàn giao</option>
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
          {/* Search Button */}
          <Button variant="primary" size="sm" className="gap-2">
            TÌM KIẾM <ArrowRight size={14} />
          </Button>
        </div>
      </Container>
    </section>
  );
}
