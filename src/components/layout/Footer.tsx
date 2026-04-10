"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";

export function Footer() {
  return (
    <footer 
      className="text-white py-12 lg:py-16"
      style={{ backgroundColor: colors.secondary.DEFAULT }}
    >
      <Container>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 mb-10">
          
          {/* Company Info - Left side */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/shared/logo_short_white.svg" 
                alt="ERA Vietnam" 
                className="h-10 w-auto"
              />
              <span 
                className="text-xl font-bold"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                ERA Vietnam
              </span>
            </div>
            
            {/* Company full name */}
            <p 
              className="text-sm mb-6 tracking-wider"
              style={{ 
                color: colors.gray[300],
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 500,
              }}
            >
              CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN ERA VIỆT NAM
            </p>
            
            {/* HQ Address */}
            <div className="mb-6">
              <h4 
                className="text-base font-semibold mb-2"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Trụ sở chính
              </h4>
              <p 
                className="text-sm leading-relaxed"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Số 22 - 24, Đường số 5, KĐT Sala, Phường An Khánh, TP. Hồ Chí Minh
              </p>
            </div>
            
            {/* Business Registration */}
            <div className="mb-6">
              <h4 
                className="text-base font-semibold mb-2"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Địa chỉ ĐKKD
              </h4>
              <p 
                className="text-sm leading-relaxed mb-1"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                MST: 0312393109 - Sở KHĐT TP. Hồ Chí Minh cấp ngày 30/07/2013
              </p>
              <p 
                className="text-sm leading-relaxed"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Lầu 14, L14-01, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh, Việt Nam
              </p>
            </div>
            
            {/* Contact */}
            <div className="space-y-1">
              <p 
                className="text-sm"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Hotline: 1800 6701
              </p>
              <p 
                className="text-sm"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Email: info@era.com.vn
              </p>
            </div>
          </div>
          
          {/* Branch Offices */}
          <div className="lg:col-span-3">
            <h4 
              className="text-base font-semibold mb-4"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Văn phòng chi nhánh
            </h4>
            
            <div className="mb-4">
              <p 
                className="text-sm font-medium mb-1"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                VP Đà Nẵng:
              </p>
              <p 
                className="text-sm leading-relaxed"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Tầng 2, 368 Trần Hưng Đạo, phường An Hải, TP. Đà Nẵng
              </p>
            </div>
            
            <div>
              <p 
                className="text-sm font-medium mb-1"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                VP Hà Nội:
              </p>
              <p 
                className="text-sm leading-relaxed"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                P201 Tòa nhà Viễn Đông, số 36 Hoàng Cầu, Phường Ô Chợ Dừa, Hà Nội
              </p>
            </div>
          </div>
          
          {/* About Links */}
          <div className="lg:col-span-2">
            <h4 
              className="text-base font-semibold mb-4"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Về chúng tôi
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={ROUTES.brandStory}
                  className="text-sm transition-colors"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.DEFAULT}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.gray[300]}
                >
                  Câu chuyện thương hiệu
                </Link>
              </li>
              <li>
                <Link 
                  href={ROUTES.operations}
                  className="text-sm transition-colors"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.DEFAULT}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.gray[300]}
                >
                  Lĩnh vực hoạt động
                </Link>
              </li>
              <li>
                <Link 
                  href={ROUTES.recruitment}
                  className="text-sm transition-colors"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.DEFAULT}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.gray[300]}
                >
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Links */}
          <div className="lg:col-span-2">
            <h4 
              className="text-base font-semibold mb-4"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Theo dõi chúng tôi
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="#" 
                  className="text-sm flex items-center gap-3 transition-colors"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.DEFAULT}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.gray[300]}
                >
                  <img src="/shared/fb_icon.svg" alt="Facebook" className="w-6 h-6" />
                  Facebook
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-sm flex items-center gap-3 transition-colors"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.primary.DEFAULT}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.gray[300]}
                >
                  <img src="/shared/ytb_icon.svg" alt="Youtube" className="w-6 h-6" />
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-6 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4"
          style={{ borderTop: `1px solid ${colors.gray[700]}` }}
        >
          {/* BCT Logo */}
          <img 
            src="/shared/bct_icon.svg" 
            alt="Bộ Công Thương" 
            className="h-12 w-auto"
          />
          
          {/* Copyright & Links */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-8">
            <p 
              className="text-xs"
              style={{ 
                color: colors.gray[400],
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
              }}
            >
              © 2026 ERA Vietnam. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href={ROUTES.terms}
                className="text-xs transition-colors hover:text-white"
                style={{ 
                  color: colors.gray[400],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Điều khoản sử dụng
              </Link>
              <Link 
                href={ROUTES.privacy}
                className="text-xs transition-colors hover:text-white"
                style={{ 
                  color: colors.gray[400],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Chính sách bảo mật
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
