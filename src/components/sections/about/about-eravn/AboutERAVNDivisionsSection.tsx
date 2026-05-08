"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const divisions = [
  { name: "Trần Vĩnh Phi Long", group: "Galaxy Group", initial: "T", color: colors.primary.DEFAULT },
  { name: "Vũ Thị Thu Trang", group: "Universe Group", initial: "V", color: colors.secondary.DEFAULT },
  { name: "Nguyễn Long Sơn", group: "Legend Group", initial: "N", color: colors.tertiary.orange.DEFAULT },
  { name: "Trần Thị Hoàng Nhi", group: "Elite Group", initial: "T", color: colors.tertiary.purple.DEFAULT },
  { name: "Ngô Trung Hiếu", group: "Hell Division", initial: "N", color: colors.primary.navy.DEFAULT },
  { name: "Phạm Thị Thuý Hồng", group: "Mercury Division", initial: "P", color: "#64748b" },
  { name: "Phan Thị Thu Hương", group: "AEM Division", initial: "P", color: colors.primary.DEFAULT },
  { name: "Lai Trúc Quân", group: "SUN Division", initial: "L", color: colors.secondary.DEFAULT },
  { name: "Nguyễn Thu Trang", group: "Ability Division", initial: "N", color: colors.tertiary.orange.DEFAULT },
  { name: "Nguyễn Thị Yến Như", group: "Aether Division", initial: "N", color: colors.tertiary.purple.DEFAULT },
  { name: "Nguyễn Phước Sửu", group: "Happy Plus Division", initial: "N", color: colors.primary.navy.DEFAULT },
  { name: "Nguyễn Thị Thanh Tâm", group: "Tara Division", initial: "N", color: "#64748b" },
];

export default function AboutERAVNDivisionsSection() {
  return (
    <Section id="divisions" padding="md" bg="gray" className="bg-gray-50/50" noContainer>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: colors.primary.DEFAULT }}>
            HỆ THỐNG DIVISIONS
          </h2>
          <h3 className="text-xl md:text-2xl font-bold mt-1" style={{ color: colors.primary.navy.DEFAULT }}>
            TẠI ERA VIETNAM
          </h3>
          <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-sm md:text-base">
            ERA Vietnam tự hào sở hữu 12 division, mỗi division đóng vai trò quan trọng trong sự phát triển của công ty và
            mang đến những giá trị triết thực cho khách hàng trong lĩnh vực môi giới bất động sản.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {divisions.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center"
            >
              <div
                className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full flex items-center justify-center border-4 border-white shadow-md"
                style={{ backgroundColor: person.color + "15", borderColor: person.color + "30" }}
              >
                <span className="text-3xl md:text-4xl font-bold" style={{ color: person.color }}>
                  {person.initial}
                </span>
              </div>
              <h4 className="mt-3 font-semibold text-sm" style={{ color: colors.primary.DEFAULT }}>
                {person.name}
              </h4>
              <p className="text-xs text-gray-500">{person.group}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="text-sm font-medium flex items-center gap-1 mx-auto hover:underline" style={{ color: colors.primary.DEFAULT }}>
            Xem thêm
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </Container>
    </Section>
  );
}
