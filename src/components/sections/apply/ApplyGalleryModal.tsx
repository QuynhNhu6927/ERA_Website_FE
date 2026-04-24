"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ApplyGalleryModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ApplyGalleryModal({
  images,
  currentIndex,
  isOpen,
  onClose,
}: ApplyGalleryModalProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    if (isOpen) setActiveIndex(currentIndex);
  }, [isOpen, currentIndex]);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(((index % images.length) + images.length) % images.length);
    },
    [images.length]
  );

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  /* Lock body scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  /* Keyboard */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose, goPrev, goNext]);

  if (!isOpen) return null;

  /** Tính offset của ảnh i so với active, xử lý infinite loop */
  const getOffset = (i: number) => {
    let offset = i - activeIndex;
    if (offset > images.length / 2) offset -= images.length;
    if (offset < -images.length / 2) offset += images.length;
    return offset;
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 select-none">
      {/* Overlay click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
        aria-label="Đóng"
      >
        <X size={20} />
      </button>

      {/* Prev / Next arrows */}
      <button
        onClick={goPrev}
        className="absolute left-2 md:left-6 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
        aria-label="Trước"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 md:right-6 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
        aria-label="Sau"
      >
        <ChevronRight size={24} />
      </button>

      {/* Ribbon — dải ảnh absolute */}
      <div className="relative w-full h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        {images.map((src, i) => {
          const offset = getOffset(i);
          const isActive = offset === 0;

          return (
            <div
              key={i}
              onClick={() => !isActive && goTo(i)}
              className="absolute transition-all duration-500 ease-out"
              style={{
                transform: `translateX(calc(${offset} * (100% + 1.5rem))) scale(${isActive ? 1 : 0.8})`,
                opacity: isActive ? 1 : Math.max(0, 0.5 - Math.abs(offset) * 0.12),
                zIndex: isActive ? 20 : 10 - Math.abs(offset),
                cursor: isActive ? "default" : "pointer",
              }}
            >
              <div className="w-[70vw] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 70vw, 450px"
                  unoptimized
                  priority={isActive}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Counter */}
      <div className="absolute bottom-6 md:bottom-8 z-30 text-sm text-white/60 font-medium tracking-wider">
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}
