"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CompassMergeAnimation } from "@/components/sections/about/compass/CompassMergeAnimation";
import { colors, withOpacity } from "@/lib/theme";

export function CompassHeroSection() {
  const [cycle, setCycle] = useState(0);

  // Loop the merge animation every 18 seconds
  useEffect(() => {
    const timer = setInterval(() => setCycle((c) => c + 1), 18000);
    return () => clearInterval(timer);
  }, []);

  const paragraph2 =
    "Bằng cách kết hợp mạng lưới nhượng quyền thương hiệu rộng khắp của Anywhere với nền tảng công nghệ môi giới đột phá của Compass, chúng tôi đang từng bước tái định nghĩa chuẩn mực của ngành môi giới toàn cầu, tối ưu hóa mọi trải nghiệm giao dịch thông qua sức mạnh của dữ liệu và công nghệ.";

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/join/join_hero_bg.png')" }}
      />
      {/* Light overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: withOpacity("#ededed", 0.35) }}
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center pt-16 md:pt-12 pb-16 md:pb-24 px-4">
          {/* Logo image + intro text */}
          <div className="text-center mb-10 md:mb-14">
            <div className="relative w-64 h-16 md:w-96 md:h-24 mx-auto">
              <Image
                src="/about/about_compass_inter.png"
                alt="Compass International Holdings"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mt-6 md:mt-8">
              Năm 2026,{" "}
              <span className="font-medium text-black">
                Anywhere (tập đoàn về dịch vụ bất động sản lớn nhất thế giới) chính thức sáp nhập cùng Compass
              </span>{" "}
              (thương hiệu môi giới bất động sản nhà ở Top 1 Hoa Kỳ), ra mắt dưới tên gọi{" "}
              <span className="whitespace-nowrap">
                COMPASS INTERNATIONAL HOLDINGS.
              </span>
            </p>
          </div>

          {/* Merge Animation (loop) — desktop only */}
          <div className="hidden md:block">
            <CompassMergeAnimation cycle={cycle} />
          </div>
        </div>
      </Container>

      {/* Bottom text with dark blue background — full width, sát bottom */}
      <div className="relative z-10 w-full text-white py-10 md:py-12 px-6 text-center" style={{ backgroundColor: colors.primary.navy.DEFAULT }}>
        <p className="max-w-4xl mx-auto text-sm md:text-base leading-relaxed italic">
          {paragraph2}
        </p>
      </div>
    </section>
  );
}
