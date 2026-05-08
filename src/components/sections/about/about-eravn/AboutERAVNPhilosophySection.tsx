"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const coreValues = [
  { label: "THỐNG NHẤT", color: colors.primary.DEFAULT, position: "top" },
  { label: "CHÍNH TRỰC", color: colors.secondary.DEFAULT, position: "right" },
  { label: "BIẾT ƠN", color: colors.tertiary.purple.DEFAULT, position: "bottom-right" },
  { label: "ĐỔI MỚI", color: colors.primary.navy.DEFAULT, position: "bottom-left" },
  { label: "ĐAM MÊ", color: colors.tertiary.orange.DEFAULT, position: "left" },
];

export default function AboutERAVNPhilosophySection() {
  return (
    <Section id="philosophy" padding="md" bg="gray" className="bg-gray-50/50" noContainer>
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
            TRIẾT LÝ DOANH NGHIỆP
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Vision & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="border-l-4 pl-6" style={{ borderColor: colors.primary.DEFAULT }}>
              <h3 className="font-bold text-sm uppercase tracking-wider" style={{ color: colors.primary.DEFAULT }}>
                Tầm nhìn
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                ERA Vietnam là công ty môi giới bất động sản do khách hàng và nhân viên môi giới lựa chọn
              </p>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: colors.primary.navy.DEFAULT }}>
              <h3 className="font-bold text-sm uppercase tracking-wider" style={{ color: colors.primary.navy.DEFAULT }}>
                Sứ mệnh
              </h3>
              <div className="mt-3 text-gray-600 text-sm leading-relaxed space-y-3">
                <p>
                  Tại ERA, chúng tôi cam kết đem lại dịch vụ tốt nhất, kết quả tốt nhất và luôn hướng đến sự
                  hài lòng cao nhất từ khách hàng.
                </p>
                <p>
                  <span className="font-semibold">Với Agent:</span> Nhân viên ERA luôn được cung cấp,
                  cập nhật những công cụ hỗ trợ cho việc bán hàng và kiến thức đào tạo chuyên sâu để có
                  thể hoàn thành tốt công việc.
                </p>
                <p>
                  <span className="font-semibold">Với khách hàng:</span> Khách hàng có thể hoàn toàn
                  tự tin khi làm việc với chuyên viên môi giới của ERA những người luôn đặt tâm huyết trong
                  việc phục vụ khách hàng bằng thái độ chính trực nhất.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Core Values Circle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white shadow-lg border-4 border-gray-100 flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold" style={{ color: colors.primary.DEFAULT }}>
                    05
                  </span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1 text-center px-2">
                    GIÁ TRỊ CỐT LÕI
                  </span>
                </div>
              </div>

              {/* Values */}
              {coreValues.map((value, index) => {
                const angle = (index * 72 - 90) * (Math.PI / 180);
                const radius = 140;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                return (
                  <motion.div
                    key={value.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                    className="absolute w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-white text-xs md:text-sm font-bold text-center shadow-lg"
                    style={{
                      backgroundColor: value.color,
                      left: `calc(50% + ${x}px - 40px)`,
                      top: `calc(50% + ${y}px - 40px)`,
                    }}
                  >
                    <span className="leading-tight px-1">{value.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
