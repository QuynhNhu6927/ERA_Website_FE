"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CompassOrbit } from "./CompassOrbit";
import { colors } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const stats = [
  {
    value: "39+",
    label: "QUỐC GIA",
    icon: "/network/network_countries_icon.svg",
  },
  {
    value: "2,394",
    label: "VĂN PHÒNG",
    icon: "/network/network_office_icon.svg",
  },
  {
    value: "40,000+",
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
      <Image src={icon} alt={label} width={32} height={32} className="w-8 h-8" />
      <div className="flex-1 min-h-[4px]" />
      <div className="flex flex-col items-start">
        <p
          className="text-[30px] lg:text-[36px] leading-tight"
          style={{ color: colors.primary.navy.DEFAULT, fontWeight: 800 }}
        >
          {value}
        </p>
        <p
          className="uppercase tracking-wider text-sm mt-1"
          style={{ color: colors.primary.navy.DEFAULT, fontWeight: 600 }}
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
  const { isVisible } = useScrollToTop(400);

  return (
    <Section padding="md" bg="white">
      <Container size="lg">
        {/* Desktop */}
        <div className="hidden lg:block">
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
              <br className="hidden lg:block" /> giữa công nghệ đột phá và mạng
              lưới 250,000+ chuyên gia toàn cầu
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Compass Orbit */}
            <div className="relative w-full flex items-center justify-center min-h-[320px] md:min-h-[420px]">
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
                  (thương hiệu môi giới bất động sản nhà ở Top 1 Hoa Kỳ),
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
                  Với sự hậu thuẫn vững chắc, ERA Vietnam sẽ mang đến cho bạn cơ
                  hội phát triển sự nghiệp bền vững, bứt phá thu nhập và khẳng định
                  giá trị bản thân trong một hệ sinh thái chuyên nghiệp, chuẩn mực
                  toàn cầu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-5">
                  <Button asChild variant="primary" size="md">
                    <a href="https://app.era.com.vn/register" className="gap-2">
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
                    <a href="https://zalo.me/0325381107" target="_blank" rel="noopener noreferrer" className="gap-2">
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
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex flex-col items-center gap-6">
          {/* CTA Button */}
          <Button asChild variant="primary" size="md" className="w-full">
            <a href={ROUTES.apply} className="gap-2 justify-center">
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

          {/* Title */}
          <div className="text-center">
            <h2 className="text-[22px] font-black leading-tight">
              <span style={{ color: colors.primary.DEFAULT }}>ERA REAL ESTATE</span>
              <br />
              <span style={{ color: colors.primary.navy.DEFAULT }}>
                TỰ HÀO LÀ THÀNH VIÊN CỦA
              </span>
              <br />
              <span style={{ color: colors.primary.DEFAULT }}>
                COMPASS INTERNATIONAL HOLDINGS
              </span>
            </h2>
          </div>

          {/* Compass Animation */}
          <div className="flex items-center justify-center -mx-4">
            <CompassOrbit mobile={true} />
          </div>

          {/* Building Image (mobile only) */}
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/about/about_hero_banner.webp"
              alt="Compass Building"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Compass Info */}
          <div className="text-center">
            <h3
              className="text-base font-bold mb-3 uppercase tracking-wide"
              style={{ color: colors.primary.navy.DEFAULT }}
            >
              COMPASS INTERNATIONAL HOLDINGS
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: colors.gray[700] }}>
              Năm 2026 đánh dấu bước ngoặt của ngành bất động sản toàn cầu:{" "}
              <strong style={{ color: colors.primary.navy.DEFAULT }}>Anywhere</strong>{" "}
              (tập đoàn về dịch vụ bất động sản lớn nhất thế giới) chính thức sáp
              nhập cùng{" "}
              <strong style={{ color: colors.primary.navy.DEFAULT }}>Compass</strong>{" "}
              (thương thương hiệu môi giới bất động sản nhà ở Top 1 Hoa Kỳ), ra mắt
              dưới tên gọi{" "}
              <strong style={{ color: colors.primary.navy.DEFAULT }}>
                COMPASS INTERNATIONAL HOLDINGS.
              </strong>
            </p>
          </div>

          {/* ERA Real Estate */}
          <div className="text-center">
            <h3
              className="text-base font-bold mb-3 uppercase tracking-wide"
              style={{ color: colors.primary.navy.DEFAULT }}
            >
              ERA REAL ESTATE
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: colors.gray[700] }}>
              Thành lập năm 1971 tại Mỹ, ERA tự hào là một trong những thương hiệu
              môi giới bất động sản nhượng quyền hàng đầu thế giới, với mạng lưới
              hiện diện tại hơn 39 quốc gia.
            </p>
            {/* Stats */}
            <div className="flex justify-between px-2">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <Image src={stat.icon} alt={stat.label} width={32} height={32} className="w-8 h-8" />
                  <div className="h-1" />
                  <p className="text-[22px] font-extrabold leading-tight" style={{ color: colors.primary.navy.DEFAULT }}>
                    {stat.value}
                  </p>
                  <p className="uppercase tracking-wider text-[10px] mt-0.5 font-semibold" style={{ color: colors.primary.navy.DEFAULT }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Image (mobile only) */}
          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/join/join_map_mobile.webp"
              alt="ERA Global Network"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* ERA Vietnam */}
          <div className="text-center">
            <h3
              className="text-base font-bold mb-3 uppercase tracking-wide"
              style={{ color: colors.primary.navy.DEFAULT }}
            >
              ERA VIETNAM
            </h3>
            <p className="text-sm leading-relaxed mb-5" style={{ color: colors.gray[700] }}>
              Với sự hậu thuẫn vững chắc, ERA Vietnam sẽ mang đến cho bạn cơ hội
              phát triển sự nghiệp bền vững, bứt phá thu nhập và khẳng định giá trị
              bản thân trong một hệ sinh thái chuyên nghiệp, chuẩn mực toàn cầu.
            </p>
            <Button
              asChild
              variant="primary"
              size="md"
              className="w-full"
              style={{ backgroundColor: colors.primary.navy.DEFAULT }}
            >
              <a href={ROUTES.eraVn} className="gap-2 justify-center">
                Về ERA Vietnam
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
          </div>
        </div>
      </Container>

      {/* Mobile Floating Zalo Button */}
      <a
        href="https://zalo.me/0325381107"
        target="_blank"
        rel="noopener noreferrer"
        className={`lg:hidden fixed bottom-20 right-6 z-40 w-12 h-12 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        aria-label="Tư vấn qua Zalo"
      >
        <Image
          src="/shared/zalo_icon.svg"
          alt="Zalo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      </a>
    </Section>
  );
}
