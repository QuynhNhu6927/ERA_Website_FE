"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CompassOrbit } from "./CompassOrbit";
import { colors } from "@/lib/theme";

const stats = [
  {
    value: "39",
    label: "QUỐC GIA",
    icon: "/network/network_countries_icon.svg",
  },
  {
    value: "2,394",
    label: "VĂN PHÒNG",
    icon: "/network/network_office_icon.svg",
  },
  {
    value: "40.000+",
    label: "AGENTS",
    icon: "/network/network_agent_icon.svg",
  },
];

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: string;
}) {
  return (
    <div className="flex flex-col items-start h-full">
      <Image
        src={icon}
        alt={label}
        width={32}
        height={32}
        className="w-8 h-8"
      />
      <div className="flex-1 min-h-[4px]" />
      <div className="flex flex-col items-start">
        <p
          className="text-[30px] lg:text-[36px] leading-tight"
          style={{
            color: colors.primary.navy.DEFAULT,
            fontWeight: 800,
          }}
        >
          {value}
        </p>
        <p
          className="uppercase tracking-wider text-sm mt-1"
          style={{
            color: colors.primary.navy.DEFAULT,
            fontWeight: 600,
          }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

function InfoBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3
        className="text-base lg:text-lg font-bold mb-3 uppercase tracking-wide"
        style={{ color: colors.primary.navy.DEFAULT }}
      >
        {title}
      </h3>
      <div
        className="pl-5 border-l-[3px] text-sm lg:text-base leading-relaxed"
        style={{ borderColor: colors.primary.DEFAULT, color: colors.gray[700] }}
      >
        {children}
      </div>
    </div>
  );
}

export function JoinCompassSection() {
  return (
    <Section padding="md" bg="white">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-[28px] lg:text-[40px] font-black leading-tight mb-4">
            <span style={{ color: colors.primary.DEFAULT }}>ERA REAL ESTATE</span>{" "}
            <span style={{ color: colors.primary.navy.DEFAULT }}>
              TỰ HÀO LÀ THÀNH VIÊN CỦA
            </span>
            <br />
            <span style={{ color: colors.primary.DEFAULT }}>
              COMPASS INTERNATIONAL HOLDINGS
            </span>
          </h2>
          <p
            className="text-base lg:text-lg max-w-3xl mx-auto"
            style={{ color: colors.gray[600] }}
          >
            Nền tảng bất động sản hàng đầu thế giới, sự kết hợp hoàn hảo
            <br className="hidden lg:block" /> giữa công nghệ đột phá và mạng lưới
            250.000+ chuyên gia toàn cầu
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left - Compass Orbit */}
          <div className="relative w-full flex items-center justify-center min-h-[320px] md:min-h-[420px]">
            {/* Mobile: wrapped in fixed-size container to prevent overflow */}
            <div className="md:hidden w-[304px] h-[304px] overflow-hidden flex items-center justify-center">
              <CompassOrbit />
            </div>
            {/* Desktop: full size as before */}
            <div className="hidden md:block">
              <CompassOrbit />
            </div>
          </div>

          {/* Right - Info */}
          <div className="flex flex-col gap-8">
            <InfoBlock title="COMPASS INTERNATIONAL HOLDINGS">
              <p>
                Năm 2026 đánh dấu bước ngoặt của ngành bất động sản toàn cầu:{" "}
                <strong style={{ color: colors.primary.navy.DEFAULT }}>
                  Anywhere
                </strong>{" "}
                (tập đoàn về dịch vụ bất động sản lớn nhất thế giới) chính thức
                sáp nhập cùng{" "}
                <strong style={{ color: colors.primary.navy.DEFAULT }}>
                  Compass
                </strong>{" "}
                (thương thương hiệu môi giới bất động sản nhà ở Top 1 Hoa Kỳ),
                ra mắt dưới tên gọi{" "}
                <strong style={{ color: colors.primary.navy.DEFAULT }}>
                  COMPASS INTERNATIONAL HOLDINGS.
                </strong>
              </p>
            </InfoBlock>

            <InfoBlock title="ERA REAL ESTATE">
              <p className="mb-5">
                Thành lập năm 1971 tại Mỹ, ERA tự hào là một trong những thương
                hiệu môi giới bất động sản nhượng quyền hàng đầu thế giới, với
                mạng lưới hiện diện tại hơn 39 quốc gia.
              </p>
              <div className="flex justify-between">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>
            </InfoBlock>

            <InfoBlock title="ERA VIETNAM">
              <p>
                Với sự hậu thuẫn vững chắc, ERA Vietnam sẽ mang đến cho bạn cơ hội
                phát triển sự nghiệp bền vững, bứt phá thu nhập và khẳng định giá
                trị bản thân trong một hệ sinh thái chuyên nghiệp, chuẩn mực toàn
                cầu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-5">
                <Button asChild variant="primary" size="md">
                  <a href="#" className="gap-2">
                    Gia nhập ERA ngay
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 12L10 8L6 4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="md"
                  style={{ backgroundColor: colors.secondary.DEFAULT }}
                >
                  <a href="#" className="gap-2">
                    <Image
                      src="/shared/zalo_icon.svg"
                      alt="Zalo"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    Tư vấn qua Zalo
                  </a>
                </Button>
              </div>
            </InfoBlock>
          </div>
        </div>
      </Container>
    </Section>
  );
}
