"use client";

import { Container } from "@/components/ui/Container";
import ROUTES from "@/lib/routes";
import { colors } from "@/lib/theme";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutHeroSection() {
  return (
    <section
      className="relative min-h-[500px] md:min-h-[550px] flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.4)), url('/about/about_hero_banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Compass
              <br />
              International
              <br />
              Holdings
            </h1>
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3"
              style={{ color: colors.secondary.DEFAULT }}
            >
              Sức mạnh hậu thuẫn
            </p>
            <p className="text-gray-300 mt-4 text-sm md:text-base leading-relaxed max-w-2xl">
              Nền tảng bất động sản hàng đầu thế giới, sự kết hợp hoàn hảo giữa
              công nghệ đột phá và mạng lưới{" "}
              <span
                className="font-semibold"
                style={{ color: colors.secondary.DEFAULT }}
              >
                250.000 chuyên viên tư vấn toàn cầu
              </span>
            </p>
          </div>

          <Link
            href={ROUTES.compass}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:shadow-lg flex-shrink-0"
            style={{ backgroundColor: colors.primary.DEFAULT }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                colors.primary.dark.DEFAULT;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                colors.primary.DEFAULT;
            }}
          >
            Tìm hiểu về Compass <ArrowRight size={16} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
