"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors, withOpacity } from "@/lib/theme";

export function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section 
      className="py-16 md:py-20"
      style={{ backgroundColor: colors.gray[50] }}
    >
      <Container>
        {/* Title - Mobile: stacked centered 32px; Desktop: inline left 48px */}
        <h2 
          className="mb-4 text-center lg:text-left"
          style={{
            fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
            fontWeight: 900,
          }}
        >
          <span 
            className="text-[32px] lg:text-[48px] lg:mr-2"
            style={{ color: colors.secondary.DEFAULT }}
          >
            DANH MỤC DỰ ÁN
          </span>
          <br className="lg:hidden" />
          <span 
            className="text-[32px] lg:text-[48px]"
            style={{ color: colors.primary.DEFAULT }}
          >
            ĐA DẠNG
          </span>
        </h2>

        {/* Description - Mobile: centered 16px; Desktop: left 18px */}
        <p 
          className="mb-10 text-center lg:text-left"
          style={{
            color: colors.gray[600],
            fontFamily: 'var(--font-manrope), system-ui, sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 1.6,
          }}
        >
          ERA Vietnam là một trong những đơn vị phân phối nhiều dự án nhất thị trường bất động sản. Mạng lưới ERA Vietnam không chỉ mang về nguồn hàng dồi dào mà còn chứng minh năng lực triển khai thực tế xuất sắc.
        </p>

        {/* Search Box - Mobile: icon button; Desktop: text button */}
        <div 
          className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 lg:pr-5 rounded-2xl lg:rounded-3xl mb-12 lg:mb-16"
          style={{ 
            backgroundColor: colors.neutral.white, 
            boxShadow: `0 10px 60px ${withOpacity(colors.neutral.black, 0.12)}` 
          }}
        >
          <div 
            className="flex-1 flex items-center gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-xl"
            style={{ backgroundColor: colors.gray[50] }}
          >
            {/* Search icon - desktop only */}
            <svg className="hidden lg:block w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={colors.gray[400]} strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
            <input
              type="text"
              placeholder="Khám phá giỏ hàng 100+ dự án của ERA"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 outline-none text-sm bg-transparent"
              style={{ 
                color: colors.gray[700],
                fontFamily: 'var(--font-manrope), system-ui, sans-serif',
              }}
            />
          </div>
          {/* Mobile: Icon button */}
          <button
            className="lg:hidden w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: colors.primary.DEFAULT }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.3-4.3"/>
            </svg>
          </button>
          {/* Desktop: Text button */}
          <button
            className="hidden lg:block px-10 py-3 rounded-xl text-white font-medium transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{
              backgroundColor: colors.primary.DEFAULT,
              fontFamily: 'var(--font-manrope), system-ui, sans-serif',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            Tìm kiếm
          </button>
        </div>

        {/* Mobile: Text on top + Images vertical; Desktop: Images horizontal + Text bottom */}
        <div className="flex flex-col">
          {/* Stats - Mobile: top center; Desktop: center */}
          <div className="flex flex-col lg:flex-col mb-6 lg:mt-6 lg:mb-0 order-1 lg:order-2 text-center">
            {/* Desktop: 110 DỰ ÁN cùng hàng, cùng size, căn giữa */}
            <div 
              className="hidden lg:flex items-baseline mt-10 justify-center gap-4 leading-none"
              style={{
                color: '#00B6E9',
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(80px, 10vw, 140px)',
              }}
            >
              <span>110</span>
              <span>DỰ ÁN</span>
            </div>
            
            {/* Mobile: 110 DỰ ÁN cùng hàng, cùng size */}
            <div 
              className="flex items-baseline justify-center gap-2 lg:hidden leading-none"
              style={{
                color: '#00B6E9',
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(56px, 12vw, 80px)',
              }}
            >
              <span>110</span>
              <span>DỰ ÁN</span>
            </div>
            
            {/* Subtitle */}
            <span 
              className="mt-2 lg:mt-4"
              style={{
                color: colors.secondary.DEFAULT,
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 500,
                fontSize: 'clamp(20px, 5vw, 42px)',
              }}
            >
              Giao dịch thành công năm 2025
            </span>
          </div>

          {/* Project Images - Mobile: vertical stack; Desktop: horizontal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 order-2 lg:order-1">
            <Image
              src="/home/home_pj_01.webp"
              alt="Dự án 1"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl lg:rounded-3xl"
              loading="lazy"
            />
            <Image
              src="/home/home_pj_02.webp"
              alt="Dự án 2"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl lg:rounded-3xl"
              loading="lazy"
            />
            <Image
              src="/home/home_pj_03.webp"
              alt="Dự án 3"
              width={800}
              height={600}
              className="w-full h-auto rounded-2xl lg:rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
