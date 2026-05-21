"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const coreValues = [
  { label: "THỐNG\nNHẤT", color: colors.primary.DEFAULT, delay: "0s" },
  { label: "CHÍNH\nTRỰC", color: colors.secondary.DEFAULT, delay: "-5s" },
  { label: "BIẾT ƠN", color: colors.tertiary.purple.DEFAULT, delay: "-10s" },
  { label: "ĐỔI MỚI", color: colors.primary.navy.DEFAULT, delay: "-15s" },
  { label: "ĐAM MÊ", color: colors.tertiary.orange.DEFAULT, delay: "-20s" },
];

export default function AboutERAVNPhilosophySection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Section id="philosophy" padding="md" bg="white" noContainer>
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
              <h3 className="font-bold text-base uppercase tracking-wider" style={{ color: colors.primary.DEFAULT }}>
                Tầm nhìn
              </h3>
              <p className="mt-3 text-gray-600 text-base leading-relaxed">
                ERA Vietnam là công ty môi giới bất động sản do khách hàng và nhân viên môi giới lựa chọn
              </p>
            </div>

            <div className="border-l-4 pl-6" style={{ borderColor: colors.primary.navy.DEFAULT }}>
              <h3 className="font-bold text-base uppercase tracking-wider" style={{ color: colors.primary.navy.DEFAULT }}>
                Sứ mệnh
              </h3>
              <div className="mt-3 text-gray-600 text-base leading-relaxed space-y-3">
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

          {/* Right: Core Values Orbit Animation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div
              className="relative mx-auto"
              style={{ width: "clamp(320px, 45vw, 520px)", height: "clamp(320px, 45vw, 520px)" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Inline keyframes */}
              <style>{`
                @keyframes orbit-spin {
                  100% { transform: rotate(360deg); }
                }
                @keyframes orbit-counter-spin {
                  100% { transform: rotate(-360deg); }
                }
              `}</style>

              {/* Center Circle */}
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white flex flex-col items-center justify-center z-10"
                style={{
                  width: "clamp(140px, 20vw, 200px)",
                  height: "clamp(140px, 20vw, 200px)",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="absolute rounded-full"
                  style={{
                    width: "calc(100% - 20px)",
                    height: "calc(100% - 20px)",
                    border: "1px solid rgba(0,0,0,0.03)",
                  }}
                />
                <span
                  className="font-black leading-none"
                  style={{
                    color: colors.primary.DEFAULT,
                    fontSize: "clamp(56px, 8vw, 90px)",
                    letterSpacing: "-2px",
                  }}
                >
                  05
                </span>
                <span
                  className="font-black uppercase text-center px-2 mt-1"
                  style={{
                    color: colors.primary.navy.DEFAULT,
                    fontSize: "clamp(12px, 1.5vw, 16px)",
                    letterSpacing: "0.5px",
                  }}
                >
                  GIÁ TRỊ CỐT LÕI
                </span>
              </div>

              {/* Orbit Rings */}
              {coreValues.map((value, index) => (
                <div
                  key={value.label}
                  className="absolute top-1/2 left-1/2 rounded-full pointer-events-none"
                  style={{
                    width: "clamp(240px, 34vw, 380px)",
                    height: "clamp(240px, 34vw, 380px)",
                    marginTop: "calc(clamp(240px, 34vw, 380px) / -2)",
                    marginLeft: "calc(clamp(240px, 34vw, 380px) / -2)",
                    animation: `orbit-spin 25s linear infinite`,
                    animationDelay: value.delay,
                    animationPlayState: isHovered ? "paused" : "running",
                  }}
                >
                  {/* Planet wrapper — counter spin to keep text upright */}
                  <div
                    className="absolute pointer-events-auto"
                    style={{
                      top: "calc(clamp(28px, 4vw, 48px) * -1)",
                      left: "calc(50% - clamp(28px, 4vw, 48px))",
                      width: "clamp(56px, 8vw, 96px)",
                      height: "clamp(56px, 8vw, 96px)",
                      animation: `orbit-counter-spin 25s linear infinite`,
                      animationDelay: value.delay,
                      animationPlayState: isHovered ? "paused" : "running",
                    }}
                  >
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-center cursor-pointer transition-all duration-300"
                      style={{
                        backgroundColor: value.color,
                        fontSize: "clamp(10px, 1.2vw, 14px)",
                        lineHeight: 1.3,
                        border: "5px solid #ffffff",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.15)",
                        textTransform: "uppercase",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.15)";
                        e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.3)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                        e.currentTarget.style.boxShadow = "0 5px 15px rgba(0,0,0,0.15)";
                      }}
                    >
                      <span className="whitespace-pre-line px-1">{value.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
