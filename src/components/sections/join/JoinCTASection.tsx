"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

export function JoinCTASection() {
  return (
    <section
      className="relative py-14 md:py-18 lg:py-20"
      style={{ backgroundColor: colors.primary.DEFAULT }}
    >
      <Container className="text-center">
        <h2
          className="mb-8"
          style={{
            color: colors.neutral.white,
            fontWeight: 700,
            fontSize: "clamp(20px, 3vw, 32px)",
            lineHeight: 1.3,
          }}
        >
          BẮT ĐẦU HÀNH TRÌNH CỦA BẠN TẠI ERA NGAY HÔM NAY
        </h2>

        <Link
          href="/apply/"
          className="inline-block px-8 py-3 rounded-xl text-sm md:text-base font-semibold transition-all duration-200 hover:shadow-lg"
          style={{
            backgroundColor: colors.neutral.white,
            color: colors.primary.DEFAULT,
          }}
        >
          ỨNG TUYỂN NGAY
        </Link>
      </Container>
    </section>
  );
}
