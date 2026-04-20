"use client";

import { useState } from "react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";

const videos = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    title: "ERA ACADEMY LÀ GÌ?",
    trainer: "Vũ Thị Kim Oanh - Senior Vice President",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    title: "LỘ TRÌNH ĐÀO TẠO",
    trainer: "Vũ Thị Kim Oanh - Senior Vice President",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    title: "PHƯƠNG PHÁP HỌC TẬP",
    trainer: "Vũ Thị Kim Oanh - Senior Vice President",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    title: "CƠ HỘI NGHỀ NGHIỆP",
    trainer: "Vũ Thị Kim Oanh - Senior Vice President",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
    title: "THÀNH CÔNG CÙNG ERA",
    trainer: "Vũ Thị Kim Oanh - Senior Vice President",
  },
];

const onlineCourses = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    title: "Phân tích tiềm năng khu đông TP.HCM",
    trainer: "Vũ Thị Kim Oanh - 12:45",
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    title: "Phân tích tiềm năng khu đông TP.HCM",
    trainer: "Vũ Thị Kim Oanh - 12:45",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    title: "Phân tích tiềm năng khu đông TP.HCM",
    trainer: "Vũ Thị Kim Oanh - 12:45",
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    title: "Phân tích tiềm năng khu đông TP.HCM",
    trainer: "Vũ Thị Kim Oanh - 12:45",
  },
];

export function AcademyOnlineSection() {
  const [activeVideo, setActiveVideo] = useState(0);

  return (
    <Section padding="md" bg="white">
      {/* Title */}
      <h2
        className="mb-8"
        style={{
          color: colors.primary.navy.DEFAULT,
          fontWeight: 900,
          fontSize: 'clamp(28px, 4vw, 40px)',
          lineHeight: 1.1,
        }}
      >
        HỌC MỌI LÚC – TẬP MỌI NƠI
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 items-stretch">
        {/* Left: Video Carousel */}
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full">
          <Image
            src={videos[activeVideo].image}
            alt={videos[activeVideo].title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
            loading="lazy"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)',
            }}
          />

          {/* Text overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="min-w-0">
                <h3
                  className="mb-1"
                  style={{
                    color: colors.neutral.white,
                    fontWeight: 700,
                    fontSize: 'clamp(18px, 2.5vw, 24px)',
                  }}
                >
                  {videos[activeVideo].title}
                </h3>
                <p
                  style={{
                    color: withOpacity(colors.neutral.white, 0.8),
                    fontSize: '14px',
                  }}
                >
                  {videos[activeVideo].trainer}
                </p>
              </div>

              {/* Dots */}
              <div className="flex gap-2 flex-shrink-0">
                {videos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveVideo(i)}
                    className="w-2 h-2 rounded-full transition-all"
                    style={{
                      backgroundColor:
                        i === activeVideo
                          ? colors.neutral.white
                          : withOpacity(colors.neutral.white, 0.4),
                      transform: i === activeVideo ? 'scale(1.3)' : 'scale(1)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Course List */}
        <div className="flex flex-col gap-4 h-full">
          <h3
            className="mb-2"
            style={{
              color: colors.primary.DEFAULT,
              fontWeight: 600,
              fontSize: '16px',
            }}
          >
            Danh sách khóa học online
          </h3>

          {onlineCourses.map((course) => (
            <div key={course.id} className="flex items-start gap-4 flex-1 rounded-lg px-2 py-2 last:pb-0 cursor-pointer group">
                <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="96px"
                    loading="lazy"
                  />
                </div>
                <div className="min-w-0">
                  <h4
                    className="mb-0.5"
                    style={{
                      color: colors.neutral.foreground,
                      fontWeight: 600,
                      fontSize: '14px',
                      lineHeight: 1.4,
                    }}
                  >
                    {course.title}
                  </h4>
                  <p
                    style={{
                      color: colors.gray[500],
                      fontSize: '12px',
                    }}
                  >
                    {course.trainer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
}
