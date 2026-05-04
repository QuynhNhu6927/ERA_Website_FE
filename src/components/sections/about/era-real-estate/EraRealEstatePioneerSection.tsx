"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import { Printer, Globe, Handshake, User } from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    icon: Printer,
    color: colors.primary.navy.DEFAULT,
    text: "Công ty đầu tiên sử dụng máy Fax để đăng tin môi giới trên toàn nước Mỹ vào năm 1972",
  },
  {
    icon: Globe,
    color: colors.primary.DEFAULT,
    text: "Công ty đầu tiên sử dụng Internet để đăng tin môi giới",
  },
  {
    icon: Handshake,
    color: colors.primary.navy.DEFAULT,
    text: "Công ty cung cấp dịch vụ môi giới bất động sản đầu tiên nhượng quyền thương hiệu thành công ra khỏi nước Mỹ",
  },
  {
    icon: User,
    color: colors.primary.DEFAULT,
    text: "Công ty môi giới bất động sản đầu tiên được điều hành bởi một Nữ CEO",
  },
];

export function EraRealEstatePioneerSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container size="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            <span style={{ color: colors.primary.navy.DEFAULT }}>
              TIÊN PHONG TRONG LĨNH VỰC
            </span>
            <br />
            <span style={{ color: colors.primary.DEFAULT }}>
              MÔI GIỚI BẤT ĐỘNG SẢN
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-[15px] leading-relaxed max-w-2xl mx-auto">
            ERA tự hào nắm giữ những kỷ lục &quot;Đầu tiên&quot; trên thế giới, liên tục
            phá vỡ mọi giới hạn truyền thống để dẫn dắt thị trường.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: m.color }}
              >
                <m.icon size={28} className="text-white" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-8 md:gap-12 mt-12">
          <Link
            href="/ve-chung-toi/apac"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg w-full"
            style={{ backgroundColor: colors.primary.DEFAULT }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                colors.primary.dark.DEFAULT;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                colors.primary.DEFAULT;
            }}
          >
            Về ERA APAC
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-lg w-full"
            style={{ backgroundColor: colors.primary.navy.DEFAULT }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#0a0a33";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                colors.primary.navy.DEFAULT;
            }}
          >
            Về ERA Vietnam
          </Link>
        </div>
      </Container>
    </section>
  );
}
