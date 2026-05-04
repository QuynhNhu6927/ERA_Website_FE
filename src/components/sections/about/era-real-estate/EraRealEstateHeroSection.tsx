"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const stats = [
  { value: "39", label: "QUỐC GIA &\nVÙNG LÃNH THỔ" },
  { value: "44", label: "BANG HIỆN DIỆN\nTẠI HOA KỲ" },
  { value: "2,394", label: "VĂN PHÒNG\nTRÊN THẾ GIỚI" },
  { value: "40,000+", label: "AGENTS" },
];

export function EraRealEstateHeroSection() {
  return (
    <section className="relative min-h-[400px] md:min-h-[500px]">
      {/* Background with bottom gradient */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 85%), url('/about/about_era_hero_banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content anchored to bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <Container size="lg">
          <div>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  MẠNG LƯỚI TOÀN CẦU
                  <br />
                  CỦA ERA REAL ESTATE
                </h1>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                Từ nước Mỹ vươn ra toàn cầu, mạng lưới ERA không ngừng mở rộng,
                trở thành bệ phóng vững chắc cho hàng chục ngàn chuyên viên tinh
                hoa.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="relative z-10 translate-y-1/2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-lg"
                >
                  <p
                    className="text-2xl md:text-3xl font-extrabold"
                    style={{ color: colors.primary.DEFAULT }}
                  >
                    {s.value}
                  </p>
                  <p className="text-xs text-gray-600 mt-1 whitespace-pre-line font-medium uppercase tracking-wide">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
