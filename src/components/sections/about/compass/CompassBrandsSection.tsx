"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";

const brands = [
  { name: "ERA", logo: "/about/compass_b1.svg" },
  { name: "Compass", logo: "/about/compass_b2.svg" },
  { name: "Century 21", logo: "/about/compass_b3.svg" },
  { name: "Coldwell Banker", logo: "/about/compass_b4.svg" },
  { name: "Coldwell Banker Commercial", logo: "/about/compass_b5.svg" },
  { name: "Sotheby's", logo: "/about/compass_b6.svg" },
  { name: "Corcoran", logo: "/about/compass_b7.svg" },
  { name: "Better Homes", logo: "/about/compass_b8.svg" },
  { name: "Christie's", logo: "/about/compass_b9.svg" },
];

export function CompassBrandsSection() {
  // Row-major order: col 1 = indices 0,3,6; col 2 = 1,4,7; col 3 = 2,5,8
  const col1 = [brands[0], brands[3], brands[6]];
  const col2 = [brands[1], brands[4], brands[7]];
  const col3 = [brands[2], brands[5], brands[8]];

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

          {/* Brand Cards Grid - 3 columns with explicit alignment */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-6 md:gap-y-8 mb-12">
            {/* Column 1 - left aligned */}
            <div className="flex flex-col items-start gap-y-6 md:gap-y-8">
              {col1.map((brand, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-white h-[190px] w-[260px] flex items-center justify-center shadow-sm p-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="relative w-[70%] h-[70%]">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      sizes="200px"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Column 2 - center aligned */}
            <div className="flex flex-col items-center gap-y-6 md:gap-y-8">
              {col2.map((brand, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-white h-[190px] w-[260px] flex items-center justify-center shadow-sm p-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="relative w-[70%] h-[70%]">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      sizes="200px"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
            {/* Column 3 - right aligned */}
            <div className="flex flex-col items-end gap-y-6 md:gap-y-8">
              {col3.map((brand, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-100 bg-white h-[190px] w-[260px] flex items-center justify-center shadow-sm p-6 transition-transform duration-300 hover:scale-105 cursor-pointer"
                >
                  <div className="relative w-[70%] h-[70%]">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                      sizes="200px"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - aligned to left & right columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4 md:gap-x-6">
            <Button
              asChild
              variant="primary"
              className="py-4 px-8 md:px-12 rounded-xl justify-self-start w-[280px]"
            >
              <Link href={`${ROUTES.aboutUs}/era-real-estate`}>Về ERA Real Estate</Link>
            </Button>
            <div />
            <Button
              asChild
              variant="secondary"
              className="py-4 px-8 md:px-12 rounded-xl justify-self-end w-[280px]"
            >
              <Link href="/">Về ERA Vietnam</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
