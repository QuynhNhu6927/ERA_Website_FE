"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const stats = [
  { value: "14", label: "QUỐC GIA &\nVÙNG LÃNH THỔ" },
  { value: "560", label: "VĂN PHÒNG\nTRÊN THẾ GIỚI" },
  { value: "21,000+", label: "AGENTS" },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 text-center shadow-lg h-full flex flex-col justify-center">
      <p className="text-2xl md:text-3xl font-extrabold" style={{ color: colors.primary.DEFAULT }}>
        {value}
      </p>
      <p className="text-xs text-gray-600 mt-1 whitespace-pre-line font-medium uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
}

export function ApacHeroSection() {
  return (
    <>
      <section className="relative min-h-[500px] md:h-[500px] overflow-visible flex items-end">
        {/* Background with bottom gradient */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 30%, transparent 85%), url('/about/about_section02.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <Container size="lg" className="relative z-10 w-full pb-0">
          {/* Title + description — desktop */}
          <div className="hidden md:block pb-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  ERA CHÂU Á THÁI BÌNH
                  <br />
                  DƯƠNG - APAC REALTY
                </h1>
              </div>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md">
                Không chỉ dừng lại ở nước Mỹ, ERA đã vươn mình mạnh mẽ để trở
                thành một trong những mạng lưới bất động sản lớn mạnh nhất khu
                vực Châu Á - Thái Bình Dương.
              </p>
            </div>
          </div>

          {/* Title — mobile only */}
          <div className="md:hidden pb-0 text-center">
            <h1 className="text-2xl font-extrabold text-white leading-tight">
              ERA CHÂU Á THÁI BÌNH
              <br />
              DƯƠNG - APAC REALTY
            </h1>
          </div>

          {/* Stats — mobile: card 1 half in/half out */}
          <div className="md:hidden translate-y-1/2">
            <StatCard value={stats[0].value} label={stats[0].label} />
          </div>

          {/* Stats — desktop: 1 row 3 cols */}
          <div className="hidden md:grid grid-cols-3 gap-4 translate-y-1/2 relative z-10">
            {stats.map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </Container>
      </section>

      {/* Stats — mobile: cards 2 & 3 fully outside hero */}
      <div className="md:hidden bg-white pt-20 pb-8">
        <Container size="lg">
          <div className="grid grid-cols-1 gap-3 auto-rows-[1fr]">
            {stats.slice(1, 3).map((s, i) => (
              <StatCard key={i} value={s.value} label={s.label} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
