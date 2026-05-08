"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ROUTES from "@/lib/routes";

export function AboutEraApacSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[1/1] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src="/about/about_section02.jpg"
                alt="ERA Asia Pacific"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span style={{ color: colors.primary.navy.DEFAULT }}>
                ERA Asia Pacific
              </span>
              <br />
              <span style={{ color: colors.primary.DEFAULT }}>
                Thế mạnh khu vực
              </span>
            </h2>

            <div
              className="mt-5 pl-0 border-l-0 lg:pl-4 lg:border-l-2 text-gray-600 text-[15px] leading-relaxed"
              style={{ borderColor: colors.primary.DEFAULT }}
            >
              <p>
                Mạng lưới bất động sản hàng đầu khu vực với sự hiện diện mạnh mẽ
                tại hơn 14 quốc gia và vùng lãnh thổ. ERA APAC là công ty môi
                giới bất động sản lớn nhất Châu Á - Thái Bình Dương bằng cách kết
                nối các cơ hội đầu tư xuyên quốc gia.
              </p>
            </div>

            <Link
              href={ROUTES.apac}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg mt-8 w-full lg:w-auto"
              style={{ backgroundColor: colors.primary.navy.DEFAULT }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#0a0a33";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  colors.primary.navy.DEFAULT;
              }}
            >
              Xem mạng lưới APAC <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
