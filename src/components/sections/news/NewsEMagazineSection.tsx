"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const magazines = [
  {
    id: 1,
    title: "ERA Magazine",
    subtitle: "Số 15 | Tháng 4/2024",
    description: "Tạp chí chính thức của ERA Vietnam",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    title: "Market Report",
    subtitle: "Q1-2024",
    description: "Báo cáo thị trường BĐS quý I",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Investment Guide",
    subtitle: "2024 Edition",
    description: "Cẩm nang đầu tư bất động sản",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80",
  },
];

export function NewsEMagazineSection() {
  return (
    <section className="py-12" style={{ backgroundColor: colors.gray[50] }}>
      <Container>
        {/* Section Title */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div 
              className="w-1 h-6 rounded-full"
              style={{ backgroundColor: colors.primary.DEFAULT }}
            />
            <h2 
              style={{
                color: colors.primary.DEFAULT,
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '24px',
              }}
            >
              E-Magazine
            </h2>
          </div>
          
          <button
            className="text-sm font-medium flex items-center gap-1 transition-colors duration-200 hover:text-primary-dark"
            style={{ color: colors.primary.DEFAULT }}
          >
            Xem tất cả
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {magazines.map((mag) => (
            <article 
              key={mag.id}
              className="group cursor-pointer"
            >
              {/* Magazine Cover */}
              <div 
                className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
              >
                <img 
                  src={mag.image} 
                  alt={mag.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(182, 23, 34, 0.9)' }}
                >
                  <span 
                    className="text-white font-medium flex items-center gap-2"
                    style={{ fontFamily: 'var(--font-plus-jakarta)' }}
                  >
                    Đọc ngay
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
              
              {/* Info */}
              <div>
                <h3 
                  className="font-bold mb-1"
                  style={{ 
                    color: colors.neutral.foreground,
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontSize: '18px',
                  }}
                >
                  {mag.title}
                </h3>
                <p 
                  className="text-sm mb-1"
                  style={{ color: colors.primary.DEFAULT }}
                >
                  {mag.subtitle}
                </p>
                <p 
                  className="text-sm"
                  style={{ color: colors.gray[400] }}
                >
                  {mag.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
