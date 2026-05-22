"use client";

import { useState, useCallback } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import Image from "next/image";
import { ApplyGalleryModal } from "../../apply/ApplyGalleryModal";

const activities = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    text: "Giảm thiểu rác thải nhựa tại văn phòng",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: "Tích cực trong các hoạt động thiện nguyện, đồng hành cùng thế hệ tương lai",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    text: "Quản trị: Minh bạch và chính trực trong mọi hoạt động",
  },
];

const esgImages = [
  "/about/about_ESG_01.webp",
  "/about/about_ESG_02.webp",
  "/about/about_ESG_03.webp",
  "/about/about_ESG_04.webp",
];

export default function AboutERAVNESGSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  }, []);

  return (
    <Section id="esg" padding="md" bg="gray">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ color: colors.primary.DEFAULT }}>
              HÀNH TRÌNH
              <br />
              KIẾN TẠO
              <br />
              <span style={{ color: colors.primary.navy.DEFAULT }}>GIÁ TRỊ XÃ HỘI</span>
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-sm">
              Tại ERA Vietnam, chúng tôi tin rằng kinh doanh không chỉ là những
              con số, mà còn là trách nhiệm với cộng đồng và môi trường.
              Các chương trình CSR và tiêu chuẩn ESG được lồng ghép chặt chẽ
              trong mọi hoạt động vận hành.
            </p>

            <div className="mt-8 space-y-4">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: colors.secondary.DEFAULT }}
                  >
                    {activity.icon}
                  </div>
                  <p className="text-sm text-gray-600 pt-2">{activity.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <button
              onClick={() => openGallery(0)}
              className="w-full text-left rounded-2xl overflow-hidden shadow-lg relative aspect-[2/1] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Image src={esgImages[0]} alt="ESG 1" fill className="object-cover" />
            </button>
            <div className="grid grid-cols-[1fr_1.5fr] gap-2 grid-rows-2">
              <button
                onClick={() => openGallery(1)}
                className="text-left rounded-2xl overflow-hidden shadow-lg relative aspect-[16/7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Image src={esgImages[1]} alt="ESG 2" fill className="object-cover" />
              </button>
              <button
                onClick={() => openGallery(2)}
                className="text-left rounded-2xl overflow-hidden shadow-lg relative row-span-2 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Image src={esgImages[2]} alt="ESG 3" fill className="object-cover" />
              </button>
              <button
                onClick={() => openGallery(3)}
                className="text-left rounded-2xl overflow-hidden shadow-lg relative aspect-[16/7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <Image src={esgImages[3]} alt="ESG 4" fill className="object-cover" />
              </button>
            </div>
          </div>
        </div>
      </Container>

      <ApplyGalleryModal
        images={esgImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </Section>
  );
}
