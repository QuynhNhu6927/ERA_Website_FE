"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

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

export default function AboutERAVNESGSection() {
  return (
    <Section id="esg" padding="md" bg="gray" className="bg-gray-50/50" noContainer>
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
                    style={{ backgroundColor: colors.secondary.DEFAULT }}
                  >
                    {activity.icon}
                  </div>
                  <p className="text-sm text-gray-600 pt-2">{activity.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholders */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <div className="rounded-2xl overflow-hidden shadow-lg h-64 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={colors.secondary.DEFAULT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p className="mt-2 text-xs font-medium text-gray-400">Ảnh CSR</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-40 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.secondary.DEFAULT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="mt-1 text-[10px] font-medium text-gray-400">Hoạt động</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-40 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.secondary.DEFAULT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="mt-1 text-[10px] font-medium text-gray-400">Cộng đồng</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
