"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

export function AcademyHeroSection() {
  return (
    <section className="pt-10 bg-white">
      <Container>
        <div 
          className="relative h-[360px] md:h-[480px] rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('/academy/academy_banner.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Overlay */}
          <div 
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          />
          
          {/* Content - Aligned to bottom */}
          <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-8 md:pb-12">
            <h1 
              className="text-white mb-2"
              style={{
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(40px, 8vw, 72px)',
                lineHeight: 1.1,
              }}
            >
              ERA ACADEMY
            </h1>
            <p 
              className="text-white/90 mb-6 max-w-lg"
              style={{
                fontFamily: 'var(--font-manrope)',
                fontSize: '16px',
                lineHeight: 1.5,
              }}
            >
              Hệ thống đào tạo và phát triển năng lực toàn diện tại ERA Vietnam
            </p>
            <button
              className="w-fit px-6 py-3 rounded-full text-white font-semibold transition-all duration-200 hover:opacity-90 hover:shadow-lg"
              style={{ backgroundColor: colors.primary.DEFAULT }}
            >
              ĐĂNG KÝ TƯ VẤN LỘ TRÌNH
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
