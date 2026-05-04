"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { CompassMergeAnimation } from "@/components/sections/about/compass/CompassMergeAnimation";

function TypewriterText({
  text,
  delay = 0,
  speed = 22,
}: {
  text: string;
  delay?: number;
  speed?: number;
}) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const startTimer = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [text, delay, speed]);

  return <span>{displayed}</span>;
}

export function CompassHeroSection() {
  const [cycle, setCycle] = useState(0);

  // Loop the merge animation every 12 seconds
  useEffect(() => {
    const timer = setInterval(() => setCycle((c) => c + 1), 12000);
    return () => clearInterval(timer);
  }, []);

  const primaryColor = "#C8102E";

  const paragraph1 =
    "Năm 2026, Anywhere (tập đoàn về dịch vụ bất động sản lớn nhất thế giới) chính thức sáp nhập cùng Compass (thương hiệu môi giới bất động sản nhà ở Top 1 Hoa Kỳ), ra mắt dưới tên gọi COMPASS INTERNATIONAL HOLDINGS.";

  const paragraph2 =
    "Bằng cách kết hợp mạng lưới nhượng quyền thương hiệu rộng khắp của Anywhere với nền tảng công nghệ môi giới đột phá của Compass, chúng tôi đang từng bước tái định nghĩa chuẩn mực của ngành môi giới toàn cầu, tối ưu hóa mọi trải nghiệm giao dịch thông qua sức mạnh của dữ liệu và công nghệ.";

  return (
    <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/join/join_hero_bg.png')" }}
      />
      {/* Light overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(237, 237, 237, 0.35)" }}
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center py-16 md:py-20 px-4">
          {/* Merge Animation (loop) */}
          <div className="mb-16 md:mb-24">
            <CompassMergeAnimation key={cycle} cycle={cycle} />
          </div>

          {/* Typewriter paragraphs */}
          <div className="max-w-3xl mx-auto space-y-5 text-center">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              <TypewriterText text={paragraph1} delay={500} speed={28} />
            </p>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: primaryColor }}>
              <TypewriterText text={paragraph2} delay={4500} speed={28} />
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
