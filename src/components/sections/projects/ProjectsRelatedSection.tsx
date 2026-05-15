"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const relatedProjects = [
  {
    id: 1,
    title: "Sunwah Pearl",
    location: "TP. Thủ Đức, TP. Hồ Chí Minh",
    tag: "Dự án mới",
    image: "/project/project_project_item.webp",
  },
  {
    id: 2,
    title: "Sunwah Pearl",
    location: "TP. Thủ Đức, TP. Hồ Chí Minh",
    tag: "Dự án mới",
    image: "/project/project_project_item.webp",
  },
  {
    id: 3,
    title: "Sunwah Pearl",
    location: "TP. Thủ Đức, TP. Hồ Chí Minh",
    tag: "Dự án mới",
    image: "/project/project_project_item.webp",
  },
];

export function ProjectsRelatedSection() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const maxIndex = Math.max(0, relatedProjects.length - 3);

  const handlePrev = () => setScrollIndex((i) => Math.max(0, i - 1));
  const handleNext = () => setScrollIndex((i) => Math.min(maxIndex, i + 1));

  return (
    <section className="pb-16 bg-white">
      <Container size="lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2
            style={{
              color: colors.primary.DEFAULT,
              fontWeight: 900,
              fontSize: "clamp(20px, 3vw, 28px)",
            }}
          >
            Những dự án khác
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={scrollIndex === 0}
              className="w-10 h-10 flex items-center justify-center rounded-full border transition-colors hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ borderColor: colors.gray[300] }}
            >
              <ChevronLeft size={18} style={{ color: colors.gray[600] }} />
            </button>
            <button
              onClick={handleNext}
              disabled={scrollIndex >= maxIndex}
              className="w-10 h-10 flex items-center justify-center rounded-full border transition-colors hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed"
              style={{ borderColor: colors.gray[300] }}
            >
              <ChevronRight size={18} style={{ color: colors.gray[600] }} />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <span
                  className="absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-md"
                  style={{
                    backgroundColor: colors.secondary.DEFAULT,
                    color: colors.neutral.white,
                  }}
                >
                  {project.tag}
                </span>
              </div>
              <div className="p-4">
                <p
                  className="text-[11px] font-bold uppercase tracking-wider mb-1"
                  style={{ color: colors.primary.DEFAULT }}
                >
                  DỰ ÁN
                </p>
                <h3
                  className="text-xl font-black mb-1"
                  style={{ color: colors.primary.navy.DEFAULT }}
                >
                  {project.title}
                </h3>
                <div
                  className="flex items-center gap-1 text-sm mb-4"
                  style={{ color: colors.gray[500] }}
                >
                  <MapPin size={14} />
                  <span>{project.location}</span>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-sm font-semibold transition-colors hover:underline"
                  style={{ color: colors.primary.navy.DEFAULT }}
                >
                  Xem Chi Tiết <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
