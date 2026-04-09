"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { colors } from "@/lib/theme";

const tabs = [
  { id: "booking", label: "Dang nhan booking" },
  { id: "top-sales", label: "Top doanh thu" },
  { id: "trending", label: "Hot tren thi truong" },
];

const projects = [
  {
    id: 1,
    name: "Grand Marina Saigon",
    location: "Quan 1, TP. Ho Chi Minh",
    price: "15.000",
    unit: "USD/m2",
    type: "Luxury Branded",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    badges: ["PREMIUM", "Hot Booking"],
    featured: true,
  },
  {
    id: 2,
    name: "Eco Retreat",
    location: "Tay Ninh",
    price: null,
    unit: null,
    type: "Eco Living",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80",
    badges: [],
    featured: false,
  },
  {
    id: 3,
    name: "Ixora Ho Tram",
    location: "Ba Ria - Vung Tau",
    price: null,
    unit: null,
    type: "Beach Resort",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    badges: [],
    featured: false,
  },
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("booking");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section 
      className="py-12 md:py-12"
      style={{ backgroundColor: colors.gray[50] }}
    >
      <Container>
        <div className="flex flex-col md:block mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span style={{ color: colors.secondary.DEFAULT }}>Du An </span>
            <span style={{ color: colors.primary.DEFAULT }}>ERA Vietnam</span>
          </h2>
          <p 
            className="text-sm max-w-xl mb-6 md:mb-0"
            style={{ color: colors.gray[600] }}
          >
            Kham pha nhung du an bat dong san hang dau duoc phan phoi boi ERA Vietnam, tu can ho cao cap den biet thu nghi duong sang trong.
          </p>
        </div>

        {/* Tabs - Desktop */}
        <div 
          className="hidden md:flex flex-wrap gap-2 mb-8"
          style={{ borderBottom: `1px solid ${colors.gray[200]}` }}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-3 text-sm font-medium transition-colors relative"
              )}
              style={{
                color: activeTab === tab.id 
                  ? colors.primary.DEFAULT 
                  : colors.gray[500],
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span 
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: colors.primary.DEFAULT }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Project */}
          <div className="lg:col-span-2 lg:row-span-2 group cursor-pointer">
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {projects[0].badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2 py-1 rounded-full text-xs font-medium"
                    style={{
                      backgroundColor: badge === "PREMIUM" 
                        ? colors.primary.DEFAULT 
                        : colors.neutral.white,
                      color: badge === "PREMIUM" 
                        ? colors.neutral.white 
                        : colors.gray[800],
                    }}
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div 
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{ color: colors.neutral.white }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {projects[0].name}
                </h3>
                <div 
                  className="flex items-center gap-2 text-sm mb-4"
                  style={{ color: `${colors.neutral.white}CC` }}
                >
                  <MapPin size={16} />
                  {projects[0].location}
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <p 
                      className="text-xs uppercase tracking-wider"
                      style={{ color: `${colors.neutral.white}99` }}
                    >
                      Gia tu
                    </p>
                    <p className="text-xl font-bold">
                      {projects[0].price} {projects[0].unit}
                    </p>
                  </div>
                  <div 
                    className="h-10 w-px"
                    style={{ backgroundColor: `${colors.neutral.white}4D` }}
                  />
                  <div>
                    <p 
                      className="text-xs uppercase tracking-wider"
                      style={{ color: `${colors.neutral.white}99` }}
                    >
                      Loai
                    </p>
                    <p className="text-lg">{projects[0].type}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Projects */}
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer relative h-[240px] rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div 
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
              />
              
              <div 
                className="absolute bottom-0 left-0 right-0 p-5"
                style={{ color: colors.neutral.white }}
              >
                <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                <div 
                  className="flex items-center gap-2 text-sm"
                  style={{ color: `${colors.neutral.white}CC` }}
                >
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="w-full flex-shrink-0 relative aspect-[4/5]"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }}
                  />
                  
                  {/* Badges */}
                  {project.badges.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-2 py-1 rounded-full text-xs font-medium"
                          style={{
                            backgroundColor: badge === "PREMIUM" 
                              ? colors.primary.DEFAULT 
                              : colors.neutral.white,
                            color: badge === "PREMIUM" 
                              ? colors.neutral.white 
                              : colors.gray[800],
                          }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 p-5"
                    style={{ color: colors.neutral.white }}
                  >
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <div 
                      className="flex items-center gap-2 text-sm mb-3"
                      style={{ color: `${colors.neutral.white}CC` }}
                    >
                      <MapPin size={14} />
                      {project.location}
                    </div>
                    {project.price && (
                      <div className="flex items-center gap-4">
                        <div>
                          <p 
                            className="text-xs uppercase"
                            style={{ color: `${colors.neutral.white}99` }}
                          >
                            Gia tu
                          </p>
                          <p className="text-lg font-bold">{project.price} {project.unit}</p>
                        </div>
                        <div>
                          <p 
                            className="text-xs uppercase"
                            style={{ color: `${colors.neutral.white}99` }}
                          >
                            Loai
                          </p>
                          <p className="text-sm">{project.type}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: colors.overlay.light }}
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} style={{ color: colors.gray[700] }} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
              style={{ backgroundColor: colors.overlay.light }}
              aria-label="Next slide"
            >
              <ChevronRight size={20} style={{ color: colors.gray[700] }} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: index === currentIndex ? '24px' : '8px',
                    backgroundColor: index === currentIndex 
                      ? colors.neutral.white 
                      : `${colors.neutral.white}80`,
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
