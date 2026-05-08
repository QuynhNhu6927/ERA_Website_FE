"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const services = [
  { title: "Môi giới dự án", bgColor: colors.primary.DEFAULT },
  { title: "Tư vấn phát triển dự án", bgColor: colors.secondary.DEFAULT },
  { title: "Môi giới nhà riêng lẻ", bgColor: colors.tertiary.orange.DEFAULT },
  { title: "Nghiên cứu thị trường", bgColor: colors.tertiary.purple.DEFAULT },
  { title: "Quản lý bất động sản", bgColor: colors.primary.navy.DEFAULT },
  { title: "Môi giới M&A dự án", bgColor: "#64748b" },
];

export default function AboutERAVNServicesSection() {
  return (
    <Section id="services" padding="md" bg="white" noContainer>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            style={{ color: colors.primary.DEFAULT }}
          >
            LĨNH VỰC HOẠT ĐỘNG
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
            >
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center"
                style={{ backgroundColor: service.bgColor + "15" }}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={service.bgColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-semibold text-lg">{service.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
