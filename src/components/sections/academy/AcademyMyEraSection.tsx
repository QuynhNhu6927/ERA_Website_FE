"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { colors, withOpacity } from "@/lib/theme";

export function AcademyMyEraSection() {
  return (
    <Section padding="md" bg="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Phone Image */}
        <div className="relative flex justify-center">
          <Image
            src="/academy/aca_myera.png"
            alt="MYERA App"
            width={400}
            height={500}
            className="h-auto w-full max-w-sm object-contain"
            loading="lazy"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2
            className="mb-4"
            style={{
              fontWeight: 900,
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1.1,
            }}
          >
            <span style={{ color: colors.primary.navy.DEFAULT }}>QUẢN LÝ VIỆC HỌC</span>
            <br />
            <span style={{ color: colors.primary.navy.DEFAULT }}>NGAY TRÊN </span>
            <span style={{ color: colors.primary.DEFAULT }}>MYERA</span>
          </h2>

          <p
            className="mb-6"
            style={{
              color: colors.gray[600],
              fontWeight: 400,
              fontSize: '15px',
              lineHeight: 1.6,
            }}
          >
            Ứng dụng dành riêng cho Agent ERA Vietnam.
            <br />
            Theo dõi lịch học, kết quả đào tạo và đăng ký sự kiện chỉ với một chạm.
          </p>

          {/* Store Badges */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a href="#" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/academy/aca_myera_ios.png"
                alt="Download on the App Store"
                width={140}
                height={42}
                className="h-14 w-auto object-contain"
                loading="lazy"
              />
            </a>
            <a href="#" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/academy/aca_myera_and.png"
                alt="Get it on Google Play"
                width={140}
                height={42}
                className="h-14 w-auto object-contain"
                loading="lazy"
              />
            </a>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full mb-8"
            style={{ backgroundColor: colors.gray[200] }}
          />

          {/* CTA Block */}
          <h3
            className="mb-2"
            style={{
              color: colors.primary.DEFAULT,
              fontWeight: 700,
              fontSize: 'clamp(20px, 2.5vw, 28px)',
            }}
          >
            Start Your Global Journey
          </h3>
          <p
            className="mb-6"
            style={{
              color: colors.gray[600],
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: 1.6,
            }}
          >
            Join the next cohort of ERA professionals. Enrollments are now open for the Singapore Mastery session.
          </p>

          <Button
            variant="primary"
            size="lg"
            className="w-full rounded-[24px] font-bold uppercase tracking-wide"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </Section>
  );
}
