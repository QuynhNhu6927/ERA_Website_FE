import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { colors, withOpacity } from "@/lib/theme";

export function AcademyHeroSection() {
  return (
    <Section padding="none" bg="white" containerClassName="px-0 sm:px-8 lg:px-10" className="md:pt-10">
        <div 
          className="relative h-[420px] md:h-[480px] overflow-hidden md:rounded-3xl"
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
          
          {/* Content - Mobile: center, Desktop: bottom left */}
          <div className="relative z-10 h-full flex flex-col justify-end items-center md:items-start text-center md:text-left px-6 md:px-12 lg:px-16 pb-8 md:pb-12">
            <div className="mb-5 md:mb-2 mx-auto md:mx-0">
              {/* Mobile logo */}
              <img
                src="/academy/aca_logo_mb.svg"
                alt="ERA Academy"
                className="h-auto w-[clamp(250px,30vw,350px)] md:hidden"
              />
              {/* Desktop logo */}
              <img
                src="/academy/academy_logo_white.svg"
                alt="ERA Academy"
                className="h-auto w-[clamp(180px,30vw,350px)] hidden md:block"
              />
            </div>
            <p 
              className="hidden md:block text-white/90 mb-3 max-w-lg"
              style={{
                fontSize: '16px',
                lineHeight: 1.5,
                textShadow: `0 4px 20px ${withOpacity(colors.neutral.black, 0.5)}, 0 2px 8px ${withOpacity(colors.neutral.black, 0.4)}`,
              }}
            >
              Hệ thống đào tạo và phát triển năng lực toàn diện tại ERA Vietnam
            </p>
            <Button
              variant="primary"
              size="md"
              className="w-fit rounded-[20px] mx-auto md:mx-0"
            >
              ĐĂNG KÝ TƯ VẤN LỘ TRÌNH
            </Button>
          </div>
        </div>
    </Section>
  );
}
