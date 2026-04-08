"use client";

import { useScrollToTop } from "@/hooks/useScrollToTop";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

export function ToTopButton() {
  const { isVisible, scrollToTop } = useScrollToTop(400);

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-40 w-12 h-12 bg-[#e31937] text-white rounded-full shadow-lg",
        "flex items-center justify-center transition-all duration-300",
        "hover:bg-[#c41230] hover:shadow-xl hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-[#e31937] focus:ring-offset-2",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
