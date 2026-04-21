"use client";

import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";

interface LegalHeroSectionProps {
  title: string;
  subtitle?: string;
}

export function LegalHeroSection({ title, subtitle }: LegalHeroSectionProps) {
  return (
    <Section
      padding="none"
      bg="white"
      containerClassName="px-0 sm:px-8 lg:px-10"
      className="md:pt-10"
    >
      <div className="relative h-[40vh] md:h-[400px] overflow-hidden md:rounded-3xl">
        {/* ============================================
            Base gradient layers
            ============================================ */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(135deg, ${colors.primary.navy.DEFAULT} 0%, #0a0a5c 40%, ${colors.primary.dark.DEFAULT} 100%)`,
          }}
        />

        {/* ============================================
            Decorative blurred orb - top right
            ============================================ */}
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full blur-[100px] md:blur-[120px]"
          style={{
            background: `radial-gradient(circle, ${withOpacity(colors.primary.DEFAULT, 0.45)} 0%, transparent 70%)`,
          }}
        />

        {/* ============================================
            Decorative blurred orb - bottom left
            ============================================ */}
        <div
          className="absolute -bottom-32 -left-20 w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full blur-[90px] md:blur-[110px]"
          style={{
            background: `radial-gradient(circle, ${withOpacity(colors.secondary.DEFAULT, 0.25)} 0%, transparent 70%)`,
          }}
        />

        {/* ============================================
            Subtle center glow
            ============================================ */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[120px]"
          style={{
            background: `radial-gradient(ellipse, ${withOpacity(colors.primary.DEFAULT, 0.12)} 0%, transparent 70%)`,
          }}
        />

        {/* ============================================
            Diagonal gradient stripe
            ============================================ */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(160deg, transparent 40%, ${withOpacity(colors.primary.DEFAULT, 0.15)} 60%, transparent 80%)`,
          }}
        />

        {/* ============================================
            Dot pattern overlay
            ============================================ */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${colors.neutral.white} 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* ============================================
            Top edge accent line
            ============================================ */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: `linear-gradient(90deg, ${colors.primary.DEFAULT} 0%, ${colors.secondary.DEFAULT} 50%, ${colors.tertiary.orange.DEFAULT} 100%)`,
          }}
        />

        {/* ============================================
            Decorative shapes - floating squares
            ============================================ */}
        <div
          className="absolute top-[15%] right-[12%] w-16 h-16 md:w-24 md:h-24 rotate-12 opacity-[0.07]"
          style={{
            border: `2px solid ${colors.neutral.white}`,
            borderRadius: "12px",
          }}
        />
        <div
          className="absolute bottom-[20%] right-[25%] w-10 h-10 md:w-14 md:h-14 -rotate-6 opacity-[0.06]"
          style={{
            border: `2px solid ${colors.secondary.DEFAULT}`,
            borderRadius: "8px",
          }}
        />
        <div
          className="absolute top-[30%] left-[8%] w-8 h-8 md:w-12 md:h-12 rotate-45 opacity-[0.05]"
          style={{
            backgroundColor: colors.neutral.white,
            borderRadius: "4px",
          }}
        />

        {/* ============================================
            Bottom gradient fade to white
            ============================================ */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background: `linear-gradient(to top, ${withOpacity(colors.primary.navy.DEFAULT, 0.4)} 0%, transparent 100%)`,
          }}
        />

        {/* ============================================
            Content
            ============================================ */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-12 lg:px-16">
          {/* Small accent label */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-8 h-[2px]"
              style={{ backgroundColor: colors.primary.DEFAULT }}
            />
            <span
              className="text-xs font-bold uppercase tracking-[0.2em]"
              style={{ color: withOpacity(colors.neutral.white, 0.6) }}
            >
              ERA Vietnam
            </span>
          </div>

          <h1
            className="uppercase"
            style={{
              fontWeight: 900,
              fontSize: "clamp(32px, 6vw, 52px)",
              lineHeight: 1.1,
              color: colors.neutral.white,
            }}
          >
            {title}
          </h1>

          {subtitle && (
            <p
              className="max-w-2xl mt-5"
              style={{
                color: withOpacity(colors.neutral.white, 0.75),
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: 1.7,
              }}
            >
              {subtitle}
            </p>
          )}

          {/* Bottom decorative dots */}
          <div className="flex items-center gap-2 mt-8">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: colors.primary.DEFAULT }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: withOpacity(colors.secondary.DEFAULT, 0.7) }}
            />
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: withOpacity(colors.tertiary.orange.DEFAULT, 0.5) }}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
