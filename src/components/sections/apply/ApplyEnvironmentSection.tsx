"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/theme";
import { ApplyGalleryModal } from "./ApplyGalleryModal";

const galleryImages = [
  "/join/join_envi_1.jpg",
  "/join/join_envi_3.jpg",
  "/join/join_envi_2.jpg",
  "/join/join_envi_4.jpg",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
];

const teamAvatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=60",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=60",
];

export function ApplyEnvironmentSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = useCallback(() => {
    setCurrentIndex(4); // mặc định mở ở ảnh thứ 5 (các ảnh demo)
    setIsOpen(true);
  }, []);

  return (
    <Section padding="md" bg="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Gallery */}
        <div className="flex gap-4">
          {/* Cột trái: lệch lên trên */}
          <div className="flex-1 flex flex-col gap-4 -translate-y-5">
            <button
              onClick={openGallery}
              className="text-left rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={galleryImages[0]}
                alt="ERA Team Event"
                width={400}
                height={300}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
            <button
              onClick={openGallery}
              className="text-left rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={galleryImages[2]}
                alt="ERA Office"
                width={400}
                height={300}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          </div>
          {/* Cột phải: lệch xuống dưới */}
          <div className="flex-1 flex flex-col gap-4 translate-y-5">
            <button
              onClick={openGallery}
              className="text-left rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={galleryImages[1]}
                alt="ERA Anniversary"
                width={400}
                height={300}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
            <button
              onClick={openGallery}
              className="text-left rounded-2xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <Image
                src={galleryImages[3]}
                alt="ERA Activity"
                width={400}
                height={300}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          </div>
        </div>

        {/* Right: Content */}
        <div>
          <h2
            className="mb-4"
            style={{
              color: colors.tertiary.orange.DEFAULT,
              fontWeight: 900,
              fontSize: 'clamp(28px, 3.5vw, 40px)',
              lineHeight: 1.2,
            }}
          >
            Môi trường
            <br />
            làm việc cởi mở
          </h2>
          <p
            className="mb-8"
            style={{
              color: colors.gray[600],
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: 1.7,
            }}
          >
            Tại ERA Vietnam, chúng tôi không chỉ xây dựng văn phòng, chúng tôi kiến tạo không gian nuôi dưỡng sự sáng tạo và kết nối. Môi trường làm việc chuyên nghiệp nhưng không kém phần năng động, nơi mỗi cá nhân được tôn trọng và tỏa sáng.
          </p>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {teamAvatars.map((src, i) => (
                <div
                  key={i}
                  className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white"
                >
                  <Image
                    src={src}
                    alt="Team member"
                    fill
                    className="object-cover"
                    sizes="32px"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <span
              style={{
                color: colors.primary.navy.DEFAULT,
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              Hơn 2.000+ cộng sự tại Việt Nam
            </span>
          </div>
        </div>
      </div>

      <ApplyGalleryModal
        images={galleryImages}
        currentIndex={currentIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </Section>
  );
}
