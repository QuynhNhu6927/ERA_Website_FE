import { memo } from "react";
import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";

export const NewsHeroSection = memo(function NewsHeroSection() {
  return (
    <Section padding="none" bg="white" containerClassName="px-0 sm:px-8 lg:px-10" className="md:pt-10">
        <div
          className="relative h-[60vh] md:h-[480px] overflow-hidden md:rounded-3xl"
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
            style={{ backgroundColor: withOpacity(colors.neutral.black, 0.35) }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16">
            <h1
              className="mb-4"
              style={{
                fontWeight: 900,
                fontSize: 'clamp(60px, 8vw, 72px)',
                lineHeight: 1.1,
                textShadow: `0 4px 20px ${withOpacity(colors.neutral.black, 0.5)}, 0 2px 8px ${withOpacity(colors.neutral.black, 0.4)}`,
              }}
            >
              <span className="block md:inline" style={{ color: colors.neutral.white }}>ERA</span>
              <span className="block md:inline" style={{ color: colors.primary.DEFAULT }}>INSIGHTS</span>
            </h1>

            <p
              className="max-w-xl hidden md:block"
              style={{
                color: colors.neutral.white,
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.7,
              }}
            >
              Bản tin bất động sản chuyên sâu, xu hướng thị trường toàn cầu và những câu chuyện thành công tại ERA Vietnam.
            </p>
          </div>
        </div>
    </Section>
  );
});
