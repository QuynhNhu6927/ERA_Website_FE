"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";

export function CompassBrandsSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="px-4">
          {/* Section Title */}
          <h2
            className="text-center text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide mb-12"
            style={{ color: colors.primary.DEFAULT }}
          >
            DANH MỤC THƯƠNG HIỆU TOÀN CẦU
          </h2>

          {/* Brand Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-100 bg-white min-h-[140px] flex items-center justify-center shadow-sm"
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 max-w-3xl mx-auto">
            <Button asChild variant="primary" className="w-full py-4 rounded-xl">
              <Link href={`${ROUTES.aboutUs}/era-real-estate`}>Về ERA Real Estate</Link>
            </Button>
            <Button asChild variant="secondary" className="w-full py-4 rounded-xl">
              <Link href="/">Về ERA Vietnam</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
