"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";
import Image from "next/image";

const months = ["01", "02", "03", "04", "05", "06"];
const years = ["2026", "2025", "2024"];

type Achiever = {
  name: string;
  division: string;
  image: string;
  bgGradient: string;
};

const achievers: Achiever[] = [
  { name: "Phạm Xuân Ngọc", division: "Elite Group", image: "/about/about_awards_best01.webp", bgGradient: "from-purple-600 to-purple-900" },
  { name: "Nguyễn Thị Yến Như", division: "Aether Division", image: "/about/about_awards_best02.webp", bgGradient: "from-blue-500 to-blue-800" },
  { name: "Nguyễn Anh Dũng", division: "AEM Division", image: "/about/about_awards_best03.webp", bgGradient: "from-orange-500 to-orange-700" },
  { name: "Nguyễn Hoài Nam", division: "Legend Group", image: "/about/about_awards_best04.webp", bgGradient: "from-red-600 to-red-900" },
];

const promotedAgents = [
  { name: "Lê Thanh Tâm", group: "Galaxy Group", newCode: "SDD", oldCode: "DD (cũ)", image: "/about/agent_1.png" },
  { name: "Lê Thanh Tâm", group: "Galaxy Group", newCode: "SDD", oldCode: "DD (cũ)", image: "/about/agent_1.png" },
  { name: "Lê Thanh Tâm", group: "Galaxy Group", newCode: "SDD", oldCode: "DD (cũ)", image: "/about/agent_1.png" },
  { name: "Lê Thanh Tâm", group: "Galaxy Group", newCode: "SDD", oldCode: "DD (cũ)", image: "/about/agent_1.png" },
  { name: "Lê Thanh Tâm", group: "Galaxy Group", newCode: "SDD", oldCode: "DD (cũ)", image: "/about/agent_1.png" },
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
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
  { name: "Vũ Hoàng Tùng", date: "04.2026" },
];

export default function AboutERAVNAwardsSection() {
  const [activeTab, setActiveTab] = useState<"monthly" | "yearly">("monthly");
  const [selectedMonth, setSelectedMonth] = useState("03");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <Section id="awards" padding="md" bg="white" noContainer>
      <Container size="lg">
        {/* Title */}
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span style={{ color: colors.primary.DEFAULT }}>ERA AWARDS</span>
            <span style={{ color: colors.primary.navy.DEFAULT }}> - VĂN HÓA VINH DANH</span>
          </h2>
          <p className="mt-3 text-gray-500 text-sm">
            Tại ERA, mọi sự nỗ lực đều được ghi nhận xứng đáng.
          </p>
          <p className="text-gray-500 text-sm">
            Tự hào tôn vinh những cá nhân và tập thể xuất sắc đã không ngừng phá vỡ mọi giới hạn.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mt-6 mb-8">
          <div className="inline-flex items-center rounded-lg overflow-hidden border border-gray-200">
            <Button
              variant={activeTab === "monthly" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("monthly")}
              className="w-48 h-10 rounded-none text-gray-600 hover:bg-gray-50"
            >
              Vinh Danh Tháng
            </Button>
            <Button
              variant={activeTab === "yearly" ? "primary" : "ghost"}
              size="sm"
              onClick={() => setActiveTab("yearly")}
              className="w-48 h-10 rounded-none text-gray-600 hover:bg-gray-50"
            >
              Vinh Danh Thường Niên
            </Button>
          </div>
        </div>

        {activeTab === "monthly" && (
          <>
            {/* Month Selector */}
            <div className="flex items-center justify-between mt-8 mb-6">
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: colors.primary.DEFAULT }}>
                VINH DANH MỖI THÁNG
              </h3>
              <div className="relative">
                <Button
                  variant="navy"
                  size="sm"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="gap-2"
                >
                  <span>{selectedMonth}</span>
                  <span className="text-white/50">|</span>
                  <span>{selectedYear}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </Button>
                {dropdownOpen && (
                  <div className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-100 p-2 z-10 min-w-[140px]">
                    <div className="grid grid-cols-3 gap-1">
                      {months.map((m) => (
                        <button
                          key={m}
                          onClick={() => { setSelectedMonth(m); setDropdownOpen(false); }}
                          className={`px-2 py-1 rounded text-xs ${selectedMonth === m ? "text-white" : "hover:bg-gray-50"}`}
                          style={selectedMonth === m ? { backgroundColor: colors.primary.navy.DEFAULT } : undefined}
                        >
                          {m}
                        </button>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-1 pt-1 grid grid-cols-1 gap-1">
                      {years.map((y) => (
                        <button
                          key={y}
                          onClick={() => { setSelectedYear(y); setDropdownOpen(false); }}
                          className={`px-2 py-1 rounded text-xs text-left ${selectedYear === y ? "text-white" : "hover:bg-gray-50"}`}
                          style={selectedYear === y ? { backgroundColor: colors.primary.navy.DEFAULT } : undefined}
                        >
                          {y}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Best Achievers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {achievers.map((achiever, index) => (
                <div
                  key={`${achiever.name}-${index}`}
                  className="rounded-xl overflow-hidden shadow-md relative group border-2 border-white"
                >
                  <div className="aspect-square relative">
                    <Image
                      src={achiever.image}
                      alt={achiever.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Agent Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Promoted Agents */}
              <div
                className="lg:col-span-2 rounded-2xl p-5 text-white"
                style={{ backgroundColor: colors.primary.navy.DEFAULT }}
              >
                <h4 className="font-semibold text-2xl mb-6 text-center" style={{ color: colors.secondary.DEFAULT }}>Agent thăng cấp</h4>
                <div className="space-y-0">
                  {promotedAgents.map((agent, index) => (
                    <div key={index} className="flex items-center gap-4 py-3 border-b border-white/10">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white/30">
                        <Image src={agent.image} alt={agent.name} fill className="object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate" style={{ color: colors.secondary.DEFAULT }}>{agent.name}</p>
                        <p className="text-xs text-white/60">{agent.group}</p>
                      </div>
                      <div className="w-px h-8 bg-white/20 shrink-0" />
                      <div className="text-right shrink-0 min-w-[50px]">
                        <p className="text-sm font-semibold" style={{ color: colors.secondary.DEFAULT }}>{agent.newCode}</p>
                        <p className="text-xs text-white/60">{agent.oldCode}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 text-sm flex items-center gap-1 mx-auto hover:underline text-white">
                  Xem thêm <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>

              {/* Official Agents */}
              <div
                className="lg:col-span-3 rounded-2xl border border-gray-100 p-5 bg-white shadow-sm"
              >
                <h4 className="font-semibold text-2xl mb-6 text-center" style={{ color: colors.primary.navy.DEFAULT }}>
                  Agent chính thức
                </h4>
                <div className="grid grid-cols-2 gap-x-0 divide-x divide-gray-200">
                  <div className="space-y-0 pr-6">
                    {officialAgents.slice(0, 8).map((agent, index) => (
                      <div key={index} className="flex items-center justify-between py-2.5 border-b border-gray-100">
                        <span className="text-sm font-medium" style={{ color: colors.primary.DEFAULT }}>{agent.name}</span>
                        <span className="text-xs text-gray-400">{agent.date}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-0 pl-6">
                    {officialAgents.slice(8, 16).map((agent, index) => (
                      <div key={index} className="flex items-center justify-between py-2.5 border-b border-gray-100">
                        <span className="text-sm font-medium" style={{ color: colors.primary.DEFAULT }}>{agent.name}</span>
                        <span className="text-xs text-gray-400">{agent.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className="mt-6 text-sm flex items-center gap-1 mx-auto hover:underline" style={{ color: colors.primary.navy.DEFAULT }}>
                  Xem thêm <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
              </div>
            </div>
          </>
        )}

        {activeTab === "yearly" && (
          <div className="text-center py-20 text-gray-400">
            <p>Nội dung vinh danh thường niên sẽ được cập nhật.</p>
          </div>
        )}
      </Container>
    </Section>
  );
}
