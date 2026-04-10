"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";

const benefits = [
  {
    icon: "/join/join_money_icon.svg",
    title: "Cơ chế hoa hồng đột phá",
    description: "Tối đa hóa thu nhập cá nhân với chính sách hoa hồng tùy tiến triển đỉnh cao.",
    bgColor: colors.secondary.DEFAULT,
    linkColor: colors.link.cyan,
    linkHoverColor: colors.link.cyanLight,
    href: ROUTES.commission,
  },
  {
    icon: "/join/join_learn_icon.svg",
    title: "Đào tạo tiêu chuẩn quốc tế",
    description: "Nâng tầm kỹ năng với hệ thống ERA Academy.",
    bgColor: colors.primary.DEFAULT,
    linkColor: colors.link.yellow,
    linkHoverColor: colors.link.yellowLight,
    href: ROUTES.training,
  },
  {
    icon: "/join/join_product_icon.svg",
    title: "Đa dạng nguồn hàng phân phối",
    description: "Dễ dàng tìm kiếm sản phẩm phù hợp cho mọi khách hàng với đủ hàng không lo.",
    bgColor: colors.secondary.DEFAULT,
    linkColor: colors.link.cyan,
    linkHoverColor: colors.link.cyanLight,
    href: ROUTES.inventory,
  },
  {
    icon: "/join/join_tech_icon.svg",
    title: "Đặc quyền công nghệ bán hàng",
    description: "Làm chủ mọi giao dịch với hệ sinh thái My ERA.",
    bgColor: colors.primary.DEFAULT,
    linkColor: colors.link.yellow,
    linkHoverColor: colors.link.yellowLight,
    href: ROUTES.technology,
  },
];

export function JoinTeamSection() {
  return (
    <div 
      className="relative"
      style={{ backgroundColor: colors.gray[50] }}
    >
      {/* Background Image Section - Mobile: home_join_mb.png, Desktop: home_join.png */}
      <div 
        className="relative h-[400px] md:h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: "url('/home/home_join.png')",
        }}
        data-desktop-bg="url('/home/home_join.png')"
      >
        <style>{`
          @media (min-width: 768px) {
            [data-desktop-bg] {
              background-image: url('/home/home_join.png') !important;
            }
          }
        `}</style>
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        />
        
        {/* Title - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 
            className="text-white text-[36px] lg:text-[72px]"
            style={{
              fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
              fontWeight: 900,
            }}
          >
            JOIN TEAM ERA
          </h2>
        </div>
      </div>

      {/* Cards Section - overlapping */}
      <div className="relative -mt-32 pb-16">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {benefits.map((benefit, index) => (
              <a
                key={index}
                href={benefit.href}
                className="group rounded-xl p-4 lg:p-6 flex flex-col min-h-[160px] lg:min-h-[280px] transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                style={{ backgroundColor: benefit.bgColor }}
              >
                {/* Icon with white background */}
                <div 
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center mb-3 lg:mb-4"
                  style={{ backgroundColor: colors.neutral.white }}
                >
                  <img 
                    src={benefit.icon} 
                    alt={benefit.title}
                    className="w-5 h-5 lg:w-6 lg:h-6"
                  />
                </div>

                {/* Title - Plus Jakarta Sans, 700, 16px mobile, 24px desktop */}
                <h3 
                  className="text-white mb-2 lg:mb-3"
                  style={{
                    fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: 1.3,
                  }}
                >
                  {benefit.title}
                </h3>

                {/* Description - Manrope, 500, 14px - hidden on mobile */}
                <p 
                  className="hidden lg:block mb-6 flex-1"
                  style={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: 1.5,
                  }}
                >
                  {benefit.description}
                </p>

                {/* Learn More - Manrope, 700, 14px - hidden on mobile */}
                <span 
                  className="hidden lg:flex items-center gap-2 text-sm transition-colors duration-200"
                  style={{
                    color: benefit.linkColor,
                    fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                    fontWeight: 700,
                    fontSize: '14px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = benefit.linkHoverColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = benefit.linkColor;
                  }}
                >
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
