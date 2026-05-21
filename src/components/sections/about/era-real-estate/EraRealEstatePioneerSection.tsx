"use client";

import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/theme";
import { Printer, Globe, Handshake, User } from "lucide-react";

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
    <Section bg="white" padding="none" className="py-16 md:py-24" containerClassName="max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
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
            phá vỡ mọi giới hạn truyền thống để dẫn dắt thị trường
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 items-stretch auto-rows-[1fr] sm:auto-rows-auto">
          {milestones.map((m, i) => (
            <div
              key={i}
              className="flex flex-row sm:flex-col items-center gap-4 sm:gap-0 p-4 sm:p-6 rounded-2xl bg-white shadow-lg h-full md:hover:scale-[1.03] transition-all duration-300 text-left sm:text-center"
            >
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 sm:mb-4"
                style={{ backgroundColor: m.color }}
              >
                <m.icon size={22} className="text-white sm:w-7 sm:h-7" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{m.text}</p>
            </div>
          ))}
        </div>
    </Section>
  );
}
