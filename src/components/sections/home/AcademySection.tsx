"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

export function AcademySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col order-2 lg:order-1">
            {/* Title - Mobile: 48px centered, Desktop: 72px left */}
            <h2 
              className="mb-4 lg:mb-6 text-center lg:text-left leading-none"
              style={{
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 900,
                fontSize: '48px',
              }}
            >
              <span style={{ color: colors.secondary.DEFAULT }}>ERA</span>
              <br className="lg:hidden" />
              <span className="hidden lg:inline"> </span>
              <span style={{ color: colors.primary.DEFAULT }}>ACADEMY</span>
            </h2>

            {/* Description - Mobile: centered, Desktop: left */}
            <p 
              className="mb-6 lg:mb-8 lg:max-w-lg text-center lg:text-left"
              style={{
                color: colors.gray[600],
                fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                fontWeight: 400,
                fontSize: '18px',
                lineHeight: 1.6,
              }}
            >
              ERA Academy là hệ thống đào tạo thực chiến và phát triển năng lực toàn diện được thiết kế theo tiêu chuẩn quốc tế. Với lộ trình từ nền tảng sơ cấp, thực chiến trung cấp cho đến tư duy nâng cao, chúng tôi trang bị toàn diện kỹ năng môi giới. Ứng dụng công nghệ và xây dựng thương hiệu cá nhân để Agent bứt phá hiệu suất, định hình sự nghiệp bền vững.
            </p>

            {/* Mobile Image - shown between description and button */}
            <div 
              className="lg:hidden mb-6 rounded-2xl overflow-hidden"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                alt="ERA Academy Training"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CTA Button - Mobile: full width, Desktop: fit content */}
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-lg text-white w-full lg:w-fit transition-opacity hover:opacity-90"
              style={{
                backgroundColor: colors.primary.DEFAULT,
                fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                textTransform: 'uppercase',
              }}
            >
              Xem thông tin chi tiết
              <svg className="hidden lg:block" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right Content - Desktop Image only */}
          <div className="relative hidden lg:block order-1 lg:order-2">
            {/* Desktop: Frame with shadow and caption */}
            <div 
              className="relative rounded-xl p-3"
              style={{ 
                backgroundColor: colors.neutral.white,
                boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.15)',
              }}
            >
              {/* Main Image */}
              <div 
                className="rounded-lg overflow-hidden"
                style={{ aspectRatio: '4/3' }}
              >
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
                  alt="ERA Academy Training"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Desktop: Caption - positioned outside the frame at bottom left */}
            <div 
              className="absolute -bottom-4 left-4 px-5 py-3 rounded-lg"
              style={{
                backgroundColor: colors.secondary.DEFAULT,
              }}
            >
              <p 
                className="text-white text-sm"
                style={{
                  fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                  fontWeight: 500,
                  lineHeight: 1.4,
                }}
              >
                Chương trình đào tạo kỹ năng,
                <br />
                kiến thức hàng tuần
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
