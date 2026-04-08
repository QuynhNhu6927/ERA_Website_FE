"use client";

import { Container } from "@/components/ui/Container";
import { Globe, Building, Users } from "lucide-react";

const stats = [
  { icon: Globe, value: "39+", label: "COUNTRIES" },
  { icon: Building, value: "2,394+", label: "OFFICES" },
  { icon: Users, value: "40k+", label: "AGENTS" },
];

export function GlobalNetworkSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-1">
              <span className="text-[#1a1a4e]">ERA Global</span>
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-[#e31937] mb-3">
              Network
            </h2>
            
            {/* Subtitle */}
            <p className="text-lg text-gray-600 italic mb-6">
              Mạng lưới kết nối toàn cầu
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed text-sm mb-10 max-w-md">
              Tap into an unparalleled ecosystem of real estate professionals across the globe. 
              We bridge continents to bring world-class property solutions to Vietnam.
            </p>

            {/* Stats */}
            <div className="flex gap-10">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="w-5 h-5 text-[#e31937] mx-auto mb-2" strokeWidth={1.5} />
                    <p className="text-2xl md:text-3xl font-bold text-[#e31937]">
                      {stat.value}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Map Visualization */}
          <div className="relative">
            <div className="bg-[#0a0e27] rounded-3xl p-6 md:p-8 aspect-[4/3] relative overflow-hidden">
              {/* World Map Background - Simplified dots pattern */}
              <div className="absolute inset-0 opacity-40">
                <svg viewBox="0 0 800 400" className="w-full h-full" fill="none">
                  {/* World map dots - stylized */}
                  <g fill="currentColor" className="text-slate-600">
                    {/* North America */}
                    <circle cx="150" cy="120" r="3" />
                    <circle cx="170" cy="110" r="2" />
                    <circle cx="180" cy="130" r="2" />
                    <circle cx="200" cy="100" r="3" />
                    <circle cx="220" cy="120" r="2" />
                    {/* South America */}
                    <circle cx="250" cy="250" r="3" />
                    <circle cx="260" cy="280" r="2" />
                    {/* Europe */}
                    <circle cx="380" cy="100" r="3" />
                    <circle cx="400" cy="90" r="2" />
                    <circle cx="420" cy="110" r="2" />
                    {/* Africa */}
                    <circle cx="400" cy="180" r="3" />
                    <circle cx="420" cy="220" r="2" />
                    {/* Asia */}
                    <circle cx="500" cy="120" r="3" />
                    <circle cx="550" cy="100" r="3" />
                    <circle cx="580" cy="140" r="2" />
                    <circle cx="600" cy="110" r="3" />
                    {/* Australia */}
                    <circle cx="650" cy="280" r="3" />
                  </g>
                  {/* Connection lines */}
                  <g stroke="currentColor" strokeWidth="0.5" className="text-slate-700" opacity="0.3">
                    <path d="M150,120 Q300,80 380,100" />
                    <path d="M380,100 Q450,90 550,100" />
                    <path d="M550,100 Q580,120 600,110" />
                    <path d="M200,100 Q350,60 500,120" />
                  </g>
                </svg>
              </div>

              {/* Hotspots - glowing red dots */}
              <div className="absolute top-[25%] left-[20%]">
                <div className="w-3 h-3 bg-[#e31937] rounded-full" />
                <div className="absolute -inset-2 bg-[#e31937]/30 rounded-full animate-ping" />
                <div className="absolute -inset-1 bg-[#e31937]/20 rounded-full animate-pulse" />
              </div>
              <div className="absolute top-[22%] left-[48%]">
                <div className="w-3 h-3 bg-[#e31937] rounded-full" />
                <div className="absolute -inset-2 bg-[#e31937]/30 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
              </div>
              <div className="absolute top-[28%] left-[72%]">
                <div className="w-3 h-3 bg-[#e31937] rounded-full" />
                <div className="absolute -inset-2 bg-[#e31937]/30 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
              </div>
              <div className="absolute top-[35%] left-[75%]">
                <div className="w-2 h-2 bg-[#e31937] rounded-full" />
              </div>
              <div className="absolute top-[68%] left-[78%]">
                <div className="w-3 h-3 bg-[#e31937] rounded-full" />
              </div>

              {/* Info Card */}
              <div className="absolute bottom-6 right-6 bg-slate-800/80 backdrop-blur-sm rounded-xl p-4 max-w-[220px] border border-slate-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[#e31937]/20 rounded-lg flex items-center justify-center">
                    <Globe className="w-4 h-4 text-[#e31937]" />
                  </div>
                  <span className="text-white font-semibold text-sm">Strategic Hubs</span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Connecting investors in Singapore, Japan, and the USA directly to the Vietnamese market.
                </p>
              </div>

              {/* SAFE WORK text - subtle watermark */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-700 text-xs font-medium tracking-widest opacity-30">
                SAFE WORK
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
