"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

export function NewsHeroSection() {
  return (
    <section className="pt-10 bg-white">
      <Container>
        <div 
          className="relative h-[360px] md:h-[480px] rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/news/news_banner.jpg')`,
            }}
          />
          
          {/* Overlay */}
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}
          />
          
          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-12 lg:px-16">
            <h1 
              className="mb-4"
              style={{
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(40px, 8vw, 72px)',
                lineHeight: 1.1,
              }}
            >
              <span style={{ color: colors.neutral.white }}>ERA</span>
              <span style={{ color: colors.primary.DEFAULT }}>INSIGHTS</span>
            </h1>
            
            <p 
              className="max-w-xl"
              style={{
                color: colors.neutral.white,
                fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.7,
              }}
            >
              Bản tin bất động sản chuyên sâu, xu hướng thị trường toàn cầu và những câu chuyện thành công tại ERA Vietnam.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
