"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { colors, withOpacity } from "@/lib/theme";

export function JoinHeroSection() {
  const textShadow = `0 4px 20px ${withOpacity(colors.neutral.black, 0.5)}, 0 2px 8px ${withOpacity(colors.neutral.black, 0.4)}`;

  return (
    <section className="relative h-[60vh] md:h-[80vh] min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/join/join_hero_banner.jpg')" }}
      />
      {/* Dark Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: withOpacity(colors.neutral.black, 0.3) }}
      />
      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-12 md:pb-16">
        <Container className="w-full">
          <h1
            className="mb-1"
            style={{
              color: colors.neutral.white,
              fontWeight: 900,
              fontSize: 'clamp(32px, 5vw, 50px)',
              lineHeight: 1.1,
              textShadow,
            }}
          >
            PHÁ VỠ{" "}
            <span style={{ color: colors.primary.DEFAULT}}>GIỚI HẠN</span>
          </h1>
          <h2
            className="mb-6"
            style={{
              color: colors.neutral.white,
              fontWeight: 900,
              fontSize: 'clamp(32px, 5vw, 50px)',
              lineHeight: 1.1,
              textShadow,
            }}
          >
            TỰ DO TÀI CHÍNH
          </h2>
          <Button
            variant="primary"
            size="md"
            className="px-6 py-3 gap-2"
            style={{ borderRadius: '12px' }}
          >
            Khám Phá Cơ Hội Agent
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Button>
        </Container>
      </div>
    </section>
  );
}
