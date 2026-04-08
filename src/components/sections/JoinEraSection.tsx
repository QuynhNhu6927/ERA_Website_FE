"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight, DollarSign, GraduationCap, Layers, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: DollarSign,
    title: "Cơ chế hoa hồng",
    subtitle: "đột phá",
    description: "Cơ chế hoa hồng đột phá",
    color: "bg-[#1a1a4e]",
    linkColor: "text-cyan-400",
  },
  {
    icon: GraduationCap,
    title: "Đào tạo tiêu chuẩn",
    subtitle: "quốc tế",
    description: "Đào tạo tiêu chuẩn quốc tế",
    color: "bg-[#e31937]",
    linkColor: "text-yellow-300",
  },
  {
    icon: Layers,
    title: "Diverse Portfolio",
    subtitle: "",
    description: "Đa dạng nguồn hàng phân phối",
    color: "bg-[#1a1a4e]",
    linkColor: "text-cyan-400",
  },
  {
    icon: Rocket,
    title: "Exclusive Sales",
    subtitle: "Tech",
    description: "Độc quyền công nghệ bán hàng",
    color: "bg-[#e31937]",
    linkColor: "text-yellow-300",
  },
];

export function JoinEraSection() {
  return (
    <section className="relative">
      {/* Background Image Section */}
      <div className="relative h-[350px] md:h-[450px]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Title - centered on background */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            JOIN ERA VIETNAM
          </h2>
        </div>
      </div>

      {/* Cards Section - overlapping the background */}
      <div className="relative -mt-24 md:-mt-32 pb-16 md:pb-24">
        <Container>
          {/* Grid 2x2 on mobile, 4 columns on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className={cn(
                    "rounded-2xl p-4 md:p-6 transition-transform hover:-translate-y-2 flex flex-col",
                    benefit.color
                  )}
                >
                  {/* Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3 md:mb-4 flex-shrink-0">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-base md:text-lg text-white leading-tight mb-1">
                    {benefit.title}
                  </h3>
                  {benefit.subtitle && (
                    <h3 className="font-semibold text-base md:text-lg text-white leading-tight mb-2 md:mb-3">
                      {benefit.subtitle}
                    </h3>
                  )}

                  {/* Description - flex-1 to push Learn More to bottom */}
                  <p className="text-white/70 text-sm mb-4 flex-1">
                    {benefit.description}
                  </p>

                  {/* Learn More Link - always at bottom */}
                  <button
                    className={cn(
                      "flex items-center gap-2 text-xs md:text-sm font-medium transition-colors mt-auto",
                      benefit.linkColor,
                      "hover:opacity-80"
                    )}
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
