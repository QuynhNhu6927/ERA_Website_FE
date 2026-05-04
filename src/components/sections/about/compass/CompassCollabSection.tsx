"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

export function CompassCollabSection() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: colors.primary.navy.DEFAULT }}
    >
      <Container>
        <div className="flex flex-col items-center text-center px-4">
          {/* Collaboration Image */}
          <div className="w-full max-w-3xl mb-8">
            <Image
              src="/about/about_compass_collab.png"
              alt="Anywhere x Compass"
              width={900}
              height={220}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Description */}
          <p className="max-w-3xl text-gray-300 text-sm md:text-base leading-relaxed">
            Bằng cách kết hợp mạng lưới nhượng quyền thương hiệu rộng khắp của Anywhere với nền tảng công nghệ môi
            giới đột phá của Compass, chúng tôi đang từng bước tái định nghĩa chuẩn mực của ngành môi giới toàn cầu,
            tối ưu hóa mọi trải nghiệm giao dịch thông qua sức mạnh của dữ liệu và công nghệ.
          </p>
        </div>
      </Container>
    </section>
  );
}
