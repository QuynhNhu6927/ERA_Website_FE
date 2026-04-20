import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { colors, withOpacity } from "@/lib/theme";

export function AcademyHeroSection() {
  return (
    <Section padding="none" bg="white" className="pt-10">
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
            <div className="mb-2">
              <img
                src="/academy/academy_logo_white.svg"
                alt="ERA Academy"
                className="h-auto w-[clamp(180px,30vw,350px)]"
              />
            </div>
            <p 
              className="text-white/90 mb-3 max-w-lg"
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
              className="w-fit rounded-[20px]"
            >
              ĐĂNG KÝ TƯ VẤN LỘ TRÌNH
            </Button>
          </div>
        </div>
    </Section>
  );
}
