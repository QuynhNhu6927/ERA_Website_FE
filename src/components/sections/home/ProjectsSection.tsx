"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

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
            boxShadow: '0 10px 60px rgba(0,0,0,0.12)' 
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

        {/* Stats - Mobile: centered stacked; Desktop: inline */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-2 lg:gap-8">
          {/* Number - Mobile: centered 80px; Desktop: left 300px */}
          <div 
            className="text-[80px] lg:text-[300px] leading-none text-center lg:text-left"
            style={{
              color: colors.primary.DEFAULT,
              fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
              fontWeight: 900,
            }}
          >
            110<span className="text-[40px] lg:text-[150px] align-super">+</span>
          </div>
          
          {/* Description - Mobile: centered 24px; Desktop: left 55px */}
          <p 
            className="flex-1 text-[24px] lg:text-[55px] text-center lg:text-left lg:pt-12"
            style={{
              color: colors.secondary.DEFAULT,
              fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
              fontWeight: 500,
              lineHeight: 1.3,
            }}
          >
            Dự án ghi nhận giao dịch thành công năm 2025
          </p>
        </div>
      </Container>
    </section>
  );
}
