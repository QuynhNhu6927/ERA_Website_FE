"use client";

import { useState, useEffect } from "react";

export function useScrollToTop(threshold: number = 400) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;
    let currentVisible = false;

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const shouldBeVisible = window.scrollY > threshold;
        if (shouldBeVisible !== currentVisible) {
          currentVisible = shouldBeVisible;
          setIsVisible(shouldBeVisible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { isVisible, scrollToTop };
}
