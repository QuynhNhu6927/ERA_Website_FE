"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { MapPin, ChevronLeft, ChevronRight } from "lucide-react";

const tabs = [
  { id: "booking", label: "Đang nhận booking" },
  { id: "top-sales", label: "Top doanh thu" },
  { id: "trending", label: "Hot trên thị trường" },
];

const projects = [
  {
    id: 1,
    name: "Grand Marina Saigon",
    location: "Quận 1, TP. Hồ Chí Minh",
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
    location: "Tây Ninh",
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
    location: "Bà Rịa - Vũng Tàu",
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
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <div className="flex flex-col md:block mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            <span className="text-[#1a1a4e]">Dự Án </span>
            <span className="text-[#e31937]">ERA Vietnam</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-xl mb-6 md:mb-0">
            Khám phá những dự án bất động sản hàng đầu được phân phối bởi ERA Vietnam, từ căn hộ cao cấp đến biệt thự nghỉ dưỡng sang trọng.
          </p>
        </div>

        {/* Tabs - Desktop */}
        <div className="hidden md:flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-3 text-sm font-medium transition-colors relative",
                activeTab === tab.id
                  ? "text-[#e31937]"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e31937]" />
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {projects[0].badges.map((badge) => (
                  <Badge
                    key={badge}
                    className={cn(
                      badge === "PREMIUM"
                        ? "bg-[#e31937] text-white"
                        : "bg-white text-gray-800"
                    )}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {projects[0].name}
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                  <MapPin size={16} />
                  {projects[0].location}
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider">Giá từ</p>
                    <p className="text-xl font-bold">
                      {projects[0].price} {projects[0].unit}
                    </p>
                  </div>
                  <div className="h-10 w-px bg-white/30" />
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider">Loại</p>
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider - Ribbon Style */}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Badges */}
                  {project.badges.length > 0 && (
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.badges.map((badge) => (
                        <span
                          key={badge}
                          className={cn(
                            "px-2 py-1 rounded-full text-xs font-medium",
                            badge === "PREMIUM"
                              ? "bg-[#e31937] text-white"
                              : "bg-white text-gray-800"
                          )}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
                      <MapPin size={14} />
                      {project.location}
                    </div>
                    {project.price && (
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-xs text-white/60 uppercase">Giá từ</p>
                          <p className="text-lg font-bold">{project.price} {project.unit}</p>
                        </div>
                        <div>
                          <p className="text-xs text-white/60 uppercase">Loại</p>
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
              className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg"
              aria-label="Next slide"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentIndex
                      ? "bg-white w-6"
                      : "bg-white/50"
                  )}
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
