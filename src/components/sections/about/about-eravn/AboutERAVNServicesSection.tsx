"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const services = [
  { title: "Môi giới dự án", image: "/home/home_banner_hero_1.webp" },
  { title: "Môi giới nhà riêng lẻ", image: "/home/home_banner_hero_2.webp" },
  { title: "Tư vấn phát triển bất động sản", image: "/about/about_section02.webp" },
  { title: "Nghiên cứu thị trường", image: "/about/about_apac_img.webp" },
  { title: "Tư vấn & môi giới M&A dự án", image: "/join/join_envi.webp" },
  { title: "Quản lý bất động sản", image: "/about/about_era_hero_banner.webp" },
];

export default function AboutERAVNServicesSection() {
  return (
    <Section id="services" padding="md" bg="gray" noContainer>
      <Container size="lg">
        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: colors.primary.DEFAULT }}
          >
            LĨNH VỰC HOẠT ĐỘNG
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-center">
                <h3 className="text-white font-semibold text-lg">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
