"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const months = ["01", "02", "03", "04", "05", "06"];
const years = ["2026", "2025", "2024"];

const achievers = [
  { name: "Phạm Xuân Ngọc", division: "Elite Group", color: colors.primary.DEFAULT },
  { name: "Nguyễn Thị Yến Như", division: "Aether Division", color: colors.secondary.DEFAULT },
  { name: "Nguyễn Anh Dũng", division: "AEM Division", color: colors.tertiary.orange.DEFAULT },
  { name: "Nguyễn Hoài Nam", division: "Legend Group", color: colors.tertiary.purple.DEFAULT },
];

const promotedAgents = [
  { name: "Lê Thanh Tâm", group: "Galaxy Group", code: "SDD", date: "04.2026", initial: "L", color: colors.primary.DEFAULT },
  { name: "Lê Thanh Tâm", group: "Galaxy Group", code: "SDD", date: "04.2026", initial: "L", color: colors.secondary.DEFAULT },
  { name: "Lê Thanh Tâm", group: "Galaxy Group", code: "SDD", date: "04.2026", initial: "L", color: colors.tertiary.orange.DEFAULT },
  { name: "Lê Thanh Tâm", group: "Galaxy Group", code: "SDD", date: "04.2026", initial: "L", color: colors.tertiary.purple.DEFAULT },
  { name: "Lê Thanh Tâm", group: "Galaxy Group", code: "SDD", date: "04.2026", initial: "L", color: colors.primary.navy.DEFAULT },
];

const officialAgents = [
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
];

export default function AboutERAVNAwardsSection() {
  const [selectedMonth, setSelectedMonth] = useState("03");
  const [selectedYear, setSelectedYear] = useState("2026");

  return (
    <Section id="awards" padding="md" bg="white" noContainer>
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold" style={{ color: colors.primary.DEFAULT }}>
            ERA AWARDS - VĂN HÓA VINH DANH
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Tại ERA, mọi sự nỗ lực đều được ghi nhận xứng đáng.
          </p>
          <p className="text-gray-500 text-sm">
            Tự hào tôn vinh những cá nhân và tập thể xuất sắc đã không ngừng phá vỡ mọi giới hạn.
          </p>
        </motion.div>

        {/* Month/Year Selector */}
        <div className="flex items-center justify-between mt-8 mb-8">
          <h3 className="text-xl font-bold" style={{ color: colors.primary.DEFAULT }}>
            VINH DANH MỖI THÁNG
          </h3>
          <div className="flex items-center gap-2">
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm bg-white"
            >
              {months.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
            <span className="text-gray-400">|</span>
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm bg-white"
            >
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Best Achievers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {achievers.map((achiever, index) => (
            <motion.div
              key={`${achiever.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md"
            >
              <div className="aspect-square relative flex items-center justify-center" style={{ backgroundColor: achiever.color + "15" }}>
                <div className="text-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={achiever.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p className="mt-2 text-xs font-medium" style={{ color: achiever.color }}>{achiever.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Agent Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Promoted Agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 rounded-2xl p-5 text-white"
            style={{ backgroundColor: colors.primary.navy.DEFAULT }}
          >
            <h4 className="font-semibold text-lg mb-4">Agent thăng cấp</h4>
            <div className="space-y-3">
              {promotedAgents.slice(0, 5).map((agent, index) => (
                <div key={index} className="flex items-center gap-3 pb-3 border-b border-white/10 last:border-0">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ backgroundColor: agent.color }}>
                    {agent.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{agent.name}</p>
                    <p className="text-xs text-white/60">{agent.group}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold" style={{ color: colors.secondary.DEFAULT }}>{agent.code}</p>
                    <p className="text-xs text-white/60">{agent.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-4 text-xs flex items-center gap-1 hover:underline" style={{ color: colors.secondary.DEFAULT }}>
              Xem thêm <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </motion.div>

          {/* Official Agents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl border border-gray-100 p-5 bg-white shadow-sm"
          >
            <h4 className="font-semibold text-lg mb-4 text-center" style={{ color: colors.primary.navy.DEFAULT }}>
              Agent chính thức
            </h4>
            <div className="grid grid-cols-2 gap-x-8">
              <div className="space-y-2">
                {officialAgents.slice(0, 5).map((agent, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm font-medium" style={{ color: colors.primary.DEFAULT }}>{agent.name}</span>
                    <span className="text-xs text-gray-400">{agent.date}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {officialAgents.slice(5, 10).map((agent, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100">
                    <span className="text-sm font-medium" style={{ color: colors.primary.DEFAULT }}>{agent.name}</span>
                    <span className="text-xs text-gray-400">{agent.date}</span>
                  </div>
                ))}
              </div>
            </div>
            <button className="mt-4 text-xs flex items-center gap-1 mx-auto hover:underline" style={{ color: colors.primary.DEFAULT }}>
              Xem thêm <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
