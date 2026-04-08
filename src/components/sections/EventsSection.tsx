"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const events = [
  {
    date: "08",
    month: "APR",
    title: "Agent Workshop: Luxury Sales",
    location: "Hội trường A, 09:00 AM",
  },
  {
    date: "15",
    month: "APR",
    title: "Project Launch: The Horizon",
    location: "InterContinental Saigon",
  },
  {
    date: "22",
    month: "APR",
    title: "Training Day: Digital Marketing",
    location: "Phòng Đào Tạo, Tầng 55",
  },
];

const calendarDays = [
  // Week 1
  { day: 1, status: "normal" }, { day: 2, status: "normal" }, { day: 3, status: "normal" }, 
  { day: 4, status: "normal" }, { day: 5, status: "normal" }, { day: 6, status: "normal" }, 
  { day: 7, status: "normal" },
  // Week 2
  { day: 8, status: "border" }, { day: 9, status: "normal" }, { day: 10, status: "normal" }, 
  { day: 11, status: "normal" }, { day: 12, status: "normal" }, { day: 13, status: "normal" }, 
  { day: 14, status: "normal" },
  // Week 3
  { day: 15, status: "filled" }, { day: 16, status: "normal" }, { day: 17, status: "normal" }, 
  { day: 18, status: "normal" }, { day: 19, status: "normal" }, { day: 20, status: "normal" }, 
  { day: 21, status: "normal" },
  // Week 4
  { day: 22, status: "light" }, { day: 23, status: "normal" }, { day: 24, status: "normal" }, 
  { day: 25, status: "normal" }, { day: 26, status: "normal" }, { day: 27, status: "normal" }, 
  { day: 28, status: "normal" },
  // Week 5
  { day: 29, status: "normal" }, { day: 30, status: "normal" },
];

export function EventsSection() {
  const [currentMonth, setCurrentMonth] = useState(4);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
              <span className="text-[#1a1a4e]">Lịch Sự Kiện</span>
              <span className="text-[#e31937]"> Tháng 4/2026</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-md">
              Cập nhật các chương trình đào tạo, lễ ra quân và sự kiện kết nối tại Vanguard Estate Vietnam.
            </p>
          </div>

          {/* Month Navigation */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors">
              <ChevronLeft size={20} />
            </button>
            <div className="px-6 py-2.5 bg-[#e31937] text-white rounded-lg font-medium">
              Tháng {currentMonth}
            </div>
            <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Content Grid - Equal Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column - Events List */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Events Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm flex-1 flex flex-col">
              <h3 className="font-semibold text-lg text-[#e31937] mb-5">Sự Kiện Nổi Bật</h3>
              
              <div className="space-y-5 flex-1">
                {events.map((event, index) => (
                  <div
                    key={index}
                    className="flex gap-4 cursor-pointer group"
                  >
                    <div className="flex-shrink-0 w-12 text-center">
                      <div className="text-xl font-bold text-[#e31937]">{event.date}</div>
                      <div className="text-xs text-[#e31937] font-medium">{event.month}</div>
                    </div>
                    <div className="flex-1 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <h4 className="font-medium text-[#e31937] text-sm group-hover:underline">
                        {event.title}
                      </h4>
                      <p className="text-gray-400 text-xs mt-1">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <button className="mt-6 w-full py-3 bg-[#e31937] text-white rounded-lg font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#c41230] transition-colors">
                Xem Tất Cả
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Training Marathon Card */}
            <div className="bg-[#1a1a4e] rounded-2xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">Đăng ký tham gia Training Marathon</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Nhằm mục đích hoàn thành đăng ký trở thành Agent chính thức của Era Vietnam
              </p>
            </div>
          </div>

          {/* Right Column - Calendar */}
          <div className="lg:col-span-7 flex">
            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 flex-1 flex flex-col">
              {/* Weekday Headers */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-medium text-gray-400 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2 flex-1">
                {/* Empty cells for offset (April 2026 starts on Wednesday) */}
                {[...Array(2)].map((_, i) => (
                  <div key={`empty-${i}`} className="aspect-square" />
                ))}
                
                {calendarDays.map((dayData, index) => (
                  <div
                    key={index}
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-lg text-sm font-medium relative",
                      dayData.status === "normal" && "text-gray-700 hover:bg-gray-50",
                      dayData.status === "border" && "border-2 border-[#e31937] text-gray-700",
                      dayData.status === "filled" && "bg-[#e31937] text-white",
                      dayData.status === "light" && "bg-gray-100 text-gray-700"
                    )}
                  >
                    {dayData.day}
                    {/* Dots for some days */}
                    {(dayData.status === "border" || dayData.status === "filled") && (
                      <div className={cn(
                        "absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-0.5",
                        dayData.status === "filled" ? "text-white/70" : "text-[#e31937]"
                      )}>
                        <span className="text-[8px]">••</span>
                      </div>
                    )}
                    {dayData.status === "light" && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-400 rounded-full" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
