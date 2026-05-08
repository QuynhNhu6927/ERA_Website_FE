"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ROUTES from "@/lib/routes";

export function AboutEraGlobalSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span style={{ color: colors.primary.navy.DEFAULT }}>
                ERA Real Estate
              </span>
              <br />
              <span style={{ color: colors.primary.DEFAULT }}>
                Di sản & Tầm vóc
              </span>
              <br />
              <span style={{ color: colors.primary.DEFAULT }}>toàn cầu</span>
            </h2>

            <div
              className="mt-5 pl-0 border-l-0 lg:pl-4 lg:border-l-2 text-gray-600 text-[15px] leading-relaxed"
              style={{ borderColor: colors.primary.DEFAULT }}
            >
              <p>
                Ra đời năm 1971 bởi nhà sáng lập Jim Jackson, ERA (viết tắt của
                Electronic Realty Associates) tự hào là thương hiệu tiên phong
                trên thế giới đưa công nghệ vào lĩnh vực môi giới bất động sản.
                Hiện nay, mạng lưới ERA đã vươn tầm toàn cầu với hơn 40.000
                chuyên viên tinh hoa, hoạt động tại 2.000 văn phòng trải dài khắp
                39 quốc gia.
              </p>
            </div>

            <Link
              href={ROUTES.era}
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
              Tìm hiểu về ERA Real Estate <ArrowRight size={16} />
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[340px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <Image
                  src="/about/about_era.jpg"
                  alt="ERA Real Estate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />

              </div>
              <Image
                src="/about/about_era_sign.png"
                alt="ERA Sign"
                width={200}
                height={80}
                className="absolute -bottom-0 -right-4 md:-right-20 w-[55%] md:w-[70%] h-auto object-contain pointer-events-none"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
