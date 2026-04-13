"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const tabs = [
  { id: "all", label: "Tất cả" },
  { id: "onboarding", label: "On Boarding" },
  { id: "expert", label: "Expert" },
  { id: "coaching", label: "Pro Coaching" },
  { id: "tech", label: "Tech & AI" },
];

const courses = [
  {
    id: 1,
    title: "Resales 101: Quy trình chuyển nhượng",
    trainer: "Nguyễn Văn A",
    date: "15/10/2024",
    type: "Offline",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    status: "available",
    category: "onboarding",
    isHot: false,
  },
  {
    id: 2,
    title: "Marketing 101: Xây dựng thương hiệu cá nhân",
    trainer: "Trần Thị B",
    date: "Sắp ra mắt",
    type: "Online",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    status: "coming",
    category: "expert",
    isHot: true,
  },
  {
    id: 3,
    title: "Dự án Cao cấp: Phân tích và Tiếp cận khách hàng",
    trainer: "Lê Văn C",
    date: "20/10/2024",
    type: "Offline",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    status: "available",
    category: "coaching",
    isHot: false,
  },
  {
    id: 4,
    title: "Resales 101: Quy trình chuyển nhượng",
    trainer: "Nguyễn Văn A",
    date: "15/10/2024",
    type: "Offline",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    status: "available",
    category: "onboarding",
    isHot: false,
  },
  {
    id: 5,
    title: "Marketing 101: Xây dựng thương hiệu cá nhân",
    trainer: "Trần Thị B",
    date: "Sắp ra mắt",
    type: "Online",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    status: "waiting",
    category: "expert",
    isHot: false,
  },
  {
    id: 6,
    title: "Dự án Cao cấp: Phân tích và Tiếp cận khách hàng",
    trainer: "Lê Văn C",
    date: "20/10/2024",
    type: "Offline",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
    status: "available",
    category: "coaching",
    isHot: false,
  },
];

export function AcademyCoursesSection() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredCourses = activeTab === "all" 
    ? courses 
    : courses.filter(c => c.category === activeTab);

  return (
    <section className="py-12" style={{ backgroundColor: colors.gray[50] }}>
      <Container>
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 
            style={{
              color: colors.primary.DEFAULT,
              fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
              fontWeight: 800,
              fontSize: '36px',
              marginBottom: '8px',
            }}
          >
            CÁC KHOÁ HỌC NỔI BẬT
          </h2>
          <p 
            style={{
              color: colors.gray[500],
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
            }}
          >
            Cập nhật những kiến thức mới nhất trong ngành BĐS
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-6 lg:gap-10 justify-center mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative pb-2 transition-colors text-sm"
              style={{
                color: activeTab === tab.id ? colors.primary.DEFAULT : colors.gray[500],
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontSize: '16px',
                fontWeight: activeTab === tab.id ? 500 : 400,
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span 
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: colors.primary.DEFAULT }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <article 
              key={course.id}
              className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer group flex flex-col"
              style={{ 
                backgroundColor: course.isHot ? '#CD2037' : colors.neutral.white,
                transition: 'box-shadow 0.2s ease',
                willChange: 'box-shadow',
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden flex-shrink-0">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                  style={{ transition: 'transform 0.3s ease' }}
                  loading="lazy"
                  decoding="async"
                />
                {/* Type Badge */}
                <span 
                  className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-medium"
                  style={{ 
                    backgroundColor: course.type === "Online" ? colors.primary.DEFAULT : colors.secondary.DEFAULT,
                    color: colors.neutral.white,
                  }}
                >
                  {course.type}
                </span>
                {/* HOT Badge */}
                {course.isHot && (
                  <span 
                    className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: colors.primary.DEFAULT }}
                  >
                    HOT
                  </span>
                )}
              </div>

              {/* Content - Flex column with justify-between for equal alignment */}
              <div className="p-5 flex flex-col flex-1">
                {/* Title - fixed min height */}
                <h3 
                  className="mb-3 line-clamp-2 group-hover:text-primary"
                  style={{
                    color: course.isHot ? colors.neutral.white : colors.neutral.foreground,
                    fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                    fontWeight: 700,
                    fontSize: '20px',
                    lineHeight: 1.3,
                    minHeight: '52px',
                  }}
                >
                  {course.title}
                </h3>

                {/* Trainer - fixed position */}
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: course.isHot ? colors.neutral.white : colors.primary.DEFAULT,
                             color: course.isHot ? colors.primary.DEFAULT : colors.neutral.white,
                    }}
                  >
                    {course.trainer.charAt(0)}
                  </div>
                  <span 
                    style={{
                      color: course.isHot ? 'rgba(255,255,255,0.9)' : colors.gray[500],
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                    }}
                  >
                    Trainer: {course.trainer}
                  </span>
                </div>

                {/* Footer - pushed to bottom */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span 
                    style={{
                      color: course.isHot ? '#FFBF00' : (course.status === "coming" ? colors.primary.DEFAULT : colors.gray[500]),
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: '16px',
                    }}
                  >
                    {course.date}
                  </span>
                  
                  {course.status === "available" && (
                    <button
                      className="px-4 py-1.5 rounded text-white text-sm font-medium transition-opacity hover:opacity-90"
                      style={{ 
                        backgroundColor: '#3E5BA4',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 600,
                        fontSize: '14px',
                        borderRadius: '8px',
                      }}
                    >
                      Đăng ký
                    </button>
                  )}
                  {course.status === "coming" && (
                    <button
                      className="px-4 py-1.5 rounded text-sm font-medium transition-opacity hover:opacity-90"
                      style={{ 
                        backgroundColor: '#FFBF00',
                        color: colors.neutral.black,
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 600,
                        fontSize: '14px',
                        borderRadius: '8px',
                      }}
                    >
                      Chờ thông báo
                    </button>
                  )}
                  {course.status === "waiting" && (
                    <button
                      className="px-4 py-1.5 rounded text-sm font-medium"
                      style={{ 
                        backgroundColor: colors.gray[100],
                        color: colors.gray[500],
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 600,
                        fontSize: '14px',
                        borderRadius: '8px',
                      }}
                    >
                      Chờ thông báo
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
