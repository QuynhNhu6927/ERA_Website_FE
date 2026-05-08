"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const features = [
  {
    title: "Quản lý giỏ hàng thông minh",
    desc: "Tra cứu dự án nhanh chóng, chính xác.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Tracking giao dịch",
    desc: "Lịch sử giao dịch cá nhân và đội nhóm rõ ràng, minh bạch.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Tin tức & Sự kiện",
    desc: "Cập nhật real-time mọi thông báo từ công ty",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Hệ thống E-Learning & Thư viện thông tin tiện lợi",
    desc: "Nâng cao kỹ năng với kho tài liệu đồ sộ",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
];

export default function AboutERAVNAppSection() {
  return (
    <Section padding="md" bg="navy" noContainer>
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Phone Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative w-52 md:w-64 h-96 md:h-[480px] rounded-[2.5rem] border-4 border-white/20 bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center shadow-2xl">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" />
                  <line x1="12" y1="18" x2="12" y2="18.01" />
                </svg>
              </div>
              <p className="text-white/60 text-sm font-medium">My ERA App</p>
              <p className="text-white/40 text-xs mt-1">Mobile App Mockup</p>
              {/* Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black/40 rounded-full" />
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: colors.secondary.DEFAULT }}>
              MY ERA APP
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
              Trợ lý đắc lực dành cho Agent
            </h2>

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white text-sm">{feature.title}</h4>
                    <p className="text-white/60 text-xs mt-0.5">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
