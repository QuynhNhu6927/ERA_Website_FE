"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const stats = [
  { value: "39", label: "QUỐC GIA &\nVÙNG LÃNH THỔ" },
  { value: "44", label: "BANG HIỆN DIỆN\nTẠI HOA KỲ" },
  { value: "2,394", label: "VĂN PHÒNG\nTRÊN THẾ GIỚI" },
  { value: "40,000+", label: "AGENTS" },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-lg">
      <p className="text-2xl md:text-3xl font-extrabold" style={{ color: colors.primary.DEFAULT }}>
        {value}
      </p>
      <p className="text-xs text-gray-600 mt-1 whitespace-pre-line font-medium uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

export function EraRealEstateHeroSection() {
  return (
    <>
      <section className="relative min-h-[500px] md:h-[500px] overflow-visible flex items-end">
        {/* Background with bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, transparent 85%), url('/about/about_era_hero_banner.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Container size="lg" className="relative z-10 w-full pb-0">
          {/* Title — desktop only */}
          <div className="hidden md:block pb-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
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

          {/* Title — mobile only */}
          <div className="md:hidden pb-0 text-center">
            <h1 className="text-2xl font-extrabold text-white leading-tight">
              MẠNG LƯỚI TOÀN CẦU
              <br />
              CỦA ERA REAL ESTATE
            </h1>
          </div>

          {/* Stats — mobile: row 1 (2 cards half in/half out) */}
          <div className="md:hidden grid grid-cols-2 gap-3 translate-y-1/2">
            {stats.slice(0, 2).map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} />
            ))}
          </div>

          {/* Stats — desktop: 1 row 4 cols */}
          <div className="hidden md:grid grid-cols-4 gap-4 translate-y-1/2 relative z-10">
            {stats.map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </Container>
      </section>

      {/* Stats — mobile: row 2 (2 cards fully outside hero) */}
      <div className="md:hidden bg-white pt-20 pb-8">
        <Container size="lg">
          <div className="grid grid-cols-2 gap-3">
            {stats.slice(2, 4).map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
