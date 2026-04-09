"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

export function AcademySection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Title */}
            <h2 
              className="mb-6"
              style={{
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 900,
                fontSize: '72px',
              }}
            >
              <span style={{ color: colors.secondary.DEFAULT }}>ERA </span>
              <span style={{ color: colors.primary.DEFAULT }}>Academy</span>
            </h2>

            {/* Description */}
            <p 
              className="mb-8"
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

            {/* CTA Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white w-fit transition-opacity hover:opacity-90"
              style={{
                backgroundColor: colors.primary.DEFAULT,
                fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
              }}
            >
              Xem thông tin chi tiết
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div 
              className="rounded-lg overflow-hidden shadow-xl"
              style={{ aspectRatio: '4/3' }}
            >
              <img
                src="/academy/academy_image.jpg"
                alt="ERA Academy Training"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Caption */}
            <div 
              className="absolute -bottom-4 left-4 px-4 py-2 rounded"
              style={{
                backgroundColor: colors.secondary.DEFAULT,
              }}
            >
              <p 
                className="text-white text-sm"
                style={{
                  fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                  fontWeight: 500,
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
