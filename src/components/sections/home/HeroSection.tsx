"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { colors, withOpacity } from "@/lib/theme";

const slides = [
  {
    id: 1,
    image: "/home/home_banner_hero_1.png",
    imageMobile: "/home/home_banner_hero_1_mb.jpg",
    alt: "ERA Vietnam Team",
  },
  {
    id: 2,
    image: "/home/home_banner_hero_2.png",
    imageMobile: "/home/home_banner_hero_2_mb.jpg",
    alt: "ERA Vietnam Projects",
  },
  {
    id: 3,
    image: "/home/home_banner_hero_1.png",
    imageMobile: "/home/home_banner_hero_1_mb.jpg",
    alt: "ERA Vietnam Projects",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const translateXRef = useRef(0);
  const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto slide every 7 seconds
  useEffect(() => {
    autoSlideRef.current = setInterval(nextSlide, 7000);
    return () => {
      if (autoSlideRef.current) clearInterval(autoSlideRef.current);
    };
  }, [nextSlide]);

  // Touch/Mouse handlers
  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    translateXRef.current = 0;
    if (sliderRef.current) {
      sliderRef.current.classList.remove('transition-transform');
    }
    if (autoSlideRef.current) clearInterval(autoSlideRef.current);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    translateXRef.current = diff;
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(calc(-${currentSlide * 100}vw + ${diff}px))`;
    }
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50; // Minimum swipe distance
    if (translateXRef.current > threshold) {
      prevSlide();
    } else if (translateXRef.current < -threshold) {
      nextSlide();
    } else {
      // Snap back to current slide
      if (sliderRef.current) {
        sliderRef.current.classList.add('transition-transform');
        sliderRef.current.style.transform = `translateX(calc(-${currentSlide * 100}vw))`;
      }
    }
    translateXRef.current = 0;

    // Restart auto slide
    autoSlideRef.current = setInterval(nextSlide, 7000);
  };

  // Touch events
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();

  // Mouse events
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX);
  };
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => {
    if (isDragging) handleEnd();
  };

  return (
    <section 
      ref={sectionRef}
      className="relative flex items-center justify-center overflow-hidden h-[60vh] md:h-[80vh] cursor-grab active:cursor-grabbing"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {/* Background Slideshow - Smooth Slide Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          ref={sliderRef}
          className="absolute inset-y-0 left-0 flex transition-transform duration-500 ease-out h-full"
          style={{
            transform: `translateX(calc(-${currentSlide * 100}vw))`,
          }}
        >
          {/* Slide 1 - eager loaded as LCP */}
          <div
            className="relative h-full flex-shrink-0 overflow-hidden"
            style={{ width: '100vw' }}
          >
            <div className="absolute inset-0 lg:hidden">
              <Image
                src={slides[0].imageMobile}
                alt={slides[0].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
                loading="eager"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 lg:hidden" />
            <div className="hidden lg:block absolute inset-0">
              <Image
                src={slides[0].image}
                alt={slides[0].alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority
                loading="eager"
              />
            </div>
          </div>
          {/* Slides 2-3 - lazy loaded */}
          {slides.slice(1).map((slide) => (
            <div
              key={slide.id}
              className="relative h-full flex-shrink-0 overflow-hidden"
              style={{ width: '100vw' }}
            >
              <div className="absolute inset-0 lg:hidden">
                <Image
                  src={slide.imageMobile}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-black/40 lg:hidden" />
              <div className="hidden lg:block absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content - Mobile: bottom, Desktop: center */}
      <Container className="relative z-10 flex flex-col md:justify-center justify-end h-full pb-20 md:pb-0">
        <div className="text-center">
          {/* Main Title - ERA VIETNAM */}
          <h1 
            className="text-white mb-4 tracking-tight uppercase text-[48px] md:text-[98px]"
            style={{
              fontWeight: 800,
              lineHeight: 1.1,
              textShadow: `0 4px 20px ${withOpacity(colors.neutral.black, 0.5)}, 0 2px 8px ${withOpacity(colors.neutral.black, 0.4)}`,
            }}
          >
            ERA VIETNAM
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-white uppercase tracking-wider text-[32px]"
            style={{
              fontWeight: 400,
              letterSpacing: '0.05em',
              lineHeight: 1.2,
              textShadow: `0 4px 20px ${withOpacity(colors.neutral.black, 0.5)}, 0 2px 8px ${withOpacity(colors.neutral.black, 0.4)}`,
            }}
          >
            EMPOWER PEOPLE,<br className="md:hidden" /> TRANSFORM LIVES
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
