"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "du-an", label: "Dự án" },
  { id: "chuyen-nhuong", label: "Chuyển nhượng" },
];

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    alt: "ERA Vietnam Team",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
    alt: "Real Estate",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    alt: "Modern Building",
  },
];

export function HeroSection() {
  const [activeTab, setActiveTab] = useState("du-an");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 7 seconds
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
              style={{
                backgroundImage: `url('${slide.image}')`,
              }}
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Title */}
          <div className="mb-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              ERA VIETNAM
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-normal tracking-[0.2em] uppercase">
              Empower People, Transform Lives
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-white rounded-xl shadow-2xl p-5 max-w-2xl mx-auto">
            {/* Tabs */}
            <div className="flex gap-6 mb-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 pb-2 text-sm font-medium transition-colors relative",
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

            {/* Search Input */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Tìm kiếm theo khu vực, dự án hoặc từ khóa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#e31937] focus:ring-2 focus:ring-[#e31937]/20 outline-none transition-all text-sm"
                />
              </div>
              <Button
                variant="primary"
                size="md"
                className="whitespace-nowrap rounded-lg px-8"
              >
                Tìm kiếm
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
