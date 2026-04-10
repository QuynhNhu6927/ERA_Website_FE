"use client";

import { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme";

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
    <section 
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: 'calc(100vh - 56px)' }}
    >
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
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
        />
      </div>

      {/* Content - Mobile: bottom, Desktop: center */}
      <Container className="relative z-10 flex flex-col md:justify-center justify-end h-full pb-20 md:pb-0">
        <div className="text-center">
          {/* Main Title - ERA VIETNAM */}
          <h1 
            className="text-white mb-4 tracking-tight uppercase text-[48px] md:text-[98px]"
            style={{ 
              fontFamily: 'var(--font-manrope), system-ui, sans-serif',
              fontWeight: 800,
              lineHeight: 1.1,
            }}
          >
            ERA VIETNAM
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-white uppercase tracking-wider text-[32px]"
            style={{ 
              fontFamily: 'var(--font-montserrat), system-ui, sans-serif',
              fontWeight: 600,
              letterSpacing: '0.05em',
              lineHeight: 1.2,
            }}
          >
            EMPOWER PEOPLE,<br />TRANSFORM LIVES
          </p>
        </div>
      </Container>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: index === currentSlide ? '40px' : '24px',
              backgroundColor: index === currentSlide 
                ? colors.neutral.white 
                : `${colors.neutral.white}66`,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
