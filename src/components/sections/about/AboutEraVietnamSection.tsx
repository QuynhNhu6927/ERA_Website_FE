"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function AboutEraVietnamSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span style={{ color: colors.primary.navy.DEFAULT }}>
                ERA Vietnam
              </span>
              <br />
              <span style={{ color: colors.primary.DEFAULT }}>
                Bệ phóng tại
              </span>
              <br />
              <span style={{ color: colors.primary.DEFAULT }}>
                địa phương
              </span>
            </h2>

            <div
              className="mt-5 pl-0 border-l-0 lg:pl-4 lg:border-l-2 text-gray-600 text-[15px] leading-relaxed"
              style={{ borderColor: colors.primary.DEFAULT }}
            >
              <p>
                Kế thừa DNA công nghệ và tiêu chuẩn quốc tế từ tập đoàn mẹ để
                kiến tạo nên bệ phóng sự nghiệp vững chắc nhất cho người môi giới
                tại Việt Nam.
              </p>
            </div>

            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg mt-8 w-full lg:w-auto"
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
              Về ERA Vietnam <ArrowRight size={16} />
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[1/1] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
              <Image
                src="/home/home_banner_hero_2_mb.webp"
                alt="ERA Vietnam"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
