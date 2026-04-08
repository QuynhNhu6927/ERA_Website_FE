"use client";

import { Container } from "@/components/ui/Container";
import { Globe, Building, Users } from "lucide-react";

const stats = [
  { icon: Globe, value: "39+", label: "COUNTRIES" },
  { icon: Building, value: "2,394+", label: "OFFICES" },
  { icon: Users, value: "40k+", label: "AGENTS" },
];

// Hotspot positions (percentage from left/top)
const hotspots = [
  { left: 18, top: 32, delay: 0 },      // USA
  { left: 45, top: 28, delay: 0.5 },    // Europe
  { left: 75, top: 38, delay: 1 },      // Singapore/Asia
  { left: 82, top: 42, delay: 1.5 },    // Japan
  { left: 22, top: 58, delay: 0.3 },    // South America
  { left: 50, top: 50, delay: 0.8 },    // Africa/Middle East
  { left: 80, top: 65, delay: 1.2 },    // Australia
];

export function GlobalNetworkSection() {
  return (
    <section className="py-12 md:py-12 bg-white">
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
                  <div key={index} className="text-left">
                    <Icon className="w-5 h-5 text-[#e31937] mb-2" strokeWidth={1.5} />
                    <p className="text-2xl md:text-3xl font-bold text-[#1a1a4e]">
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
            <div className="bg-[#0a0e27] rounded-3xl aspect-[4/3] relative overflow-hidden shadow-2xl">
              {/* World Map SVG - Simplified continents */}
              <svg 
                viewBox="0 0 800 500" 
                className="absolute inset-0 w-full h-full opacity-30"
                fill="currentColor"
              >
                <g className="text-slate-500">
                  {/* North America */}
                  <path d="M50,80 Q80,60 150,70 Q200,65 240,100 Q250,140 230,180 Q200,200 180,220 Q150,230 120,210 Q80,190 60,150 Q40,120 50,80 Z" />
                  {/* South America */}
                  <path d="M180,240 Q210,230 230,260 Q250,300 240,350 Q220,400 200,420 Q180,430 170,400 Q160,350 165,300 Q170,260 180,240 Z" />
                  {/* Europe */}
                  <path d="M350,80 Q380,70 420,75 Q450,85 460,110 Q450,140 430,150 Q400,155 370,145 Q340,130 340,100 Q345,85 350,80 Z" />
                  {/* Africa */}
                  <path d="M360,160 Q400,150 440,170 Q470,200 460,250 Q450,300 430,350 Q400,380 370,360 Q340,320 340,270 Q345,210 360,160 Z" />
                  {/* Asia */}
                  <path d="M470,70 Q520,60 580,70 Q640,80 680,110 Q720,140 730,180 Q720,220 680,240 Q630,250 580,240 Q520,230 480,200 Q450,160 460,120 Q465,90 470,70 Z" />
                  {/* Australia */}
                  <path d="M650,300 Q690,290 720,310 Q740,340 730,370 Q710,390 680,385 Q650,380 640,350 Q635,320 650,300 Z" />
                </g>
              </svg>

              {/* Hotspots */}
              {hotspots.map((spot, index) => (
                <div
                  key={index}
                  className="absolute w-3 h-3"
                  style={{
                    left: `${spot.left}%`,
                    top: `${spot.top}%`,
                  }}
                >
                  <div 
                    className="w-3 h-3 bg-[#e31937] rounded-full relative"
                    style={{ animationDelay: `${spot.delay}s` }}
                  >
                    <div 
                      className="absolute -inset-2 bg-[#e31937]/40 rounded-full animate-ping"
                      style={{ animationDelay: `${spot.delay}s` }}
                    />
                    <div 
                      className="absolute -inset-1 bg-[#e31937]/20 rounded-full animate-pulse"
                      style={{ animationDelay: `${spot.delay}s` }}
                    />
                  </div>
                </div>
              ))}

              {/* Strategic Hubs Card + SAFE WORK container */}
              <div className="absolute bottom-6 right-6 max-w-[250px]">
                <div className="bg-slate-800/40 backdrop-blur-md rounded-xl p-4 border border-slate-700/30 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-[#e31937] rounded-lg flex items-center justify-center">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white font-semibold text-sm">Strategic Hubs</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Connecting investors in Singapore, Japan, and the USA directly to the Vietnamese market.
                  </p>
                </div>
                
                {/* SAFE WORK text */}
                <div className="text-left text-slate-600/80 text-[10px] font-medium tracking-[0.3em] uppercase mt-2">
                  SAFE WORK
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
