"use client";

import Image from "next/image";
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
        {/* Desktop: Logo only on top left */}
        <div className="hidden lg:flex items-center gap-3 mb-6">
          <Image
            src="/shared/logo_short_white.svg"
            alt="ERA Vietnam"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
          <span 
            className="text-xl font-bold"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            ERA Vietnam
          </span>
        </div>

        {/* Mobile: Logo + Company Name */}
        <div className="lg:hidden mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/shared/logo_short_white.svg"
              alt="ERA Vietnam"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span 
              className="text-xl font-bold"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              ERA Vietnam
            </span>
          </div>
          <p 
            className="text-sm tracking-wider font-semibold"
            style={{ 
              color: colors.neutral.white,
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
            }}
          >
            CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN ERA VIỆT NAM
          </p>
        </div>

        {/* Desktop: 4 Headings in 1 row - Flexbox */}
        <div className="hidden lg:flex justify-between mb-6">
          <h3 
            className="text-sm tracking-wider font-semibold"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', width: '28%' }}
          >
            CÔNG TY CỔ PHẦN BẤT ĐỘNG SẢN ERA VIỆT NAM
          </h3>
          <h4 
            className="text-base font-semibold"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', width: '22%' }}
          >
            Văn phòng làm việc
          </h4>
          <h4 
            className="text-base font-semibold"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', width: '15%' }}
          >
            Về chúng tôi
          </h4>
          <h4 
            className="text-base font-semibold text-left"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif', width: '15%' }}
          >
            Theo dõi chúng tôi
          </h4>
        </div>

        {/* Main Footer Content - 4 Columns */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 mb-10">
          
          {/* Column 1: MST, Address, Contact */}
          <div className="lg:w-[28%]">
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.gray[300] }}>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p 
                    className="text-xs leading-relaxed"
                    style={{ 
                      color: colors.gray[300],
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    }}
                  >
                    MST: 0312393109 - Sở KHĐT TP. Hồ Chí Minh cấp ngày 30/07/2013
                  </p>
                  <p 
                    className="text-xs leading-relaxed mt-1"
                    style={{ 
                      color: colors.gray[300],
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    }}
                  >
                    Địa chỉ ĐKKD: Lầu 14, L14-01, 72 Lê Thánh Tôn, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>
              
              {/* Main Office - mobile only */}
              <div className="flex items-start gap-2 lg:hidden">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.neutral.white }}>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p 
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    Trụ sở chính
                  </p>
                  <p 
                    className="text-xs leading-relaxed mt-1"
                    style={{ 
                      color: colors.gray[300],
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    }}
                  >
                    Số 22 - 24, Đường số 5, KĐT Sala, Phường An Khánh, TP. Hồ Chí Minh
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.gray[300] }}>
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p 
                  className="text-xs"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  Hotline: 1800 6701
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.gray[300] }}>
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p 
                  className="text-xs"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  Email: info@era.com.vn
                </p>
              </div>
            </div>
          </div>
          
          {/* Column 2: Office Locations */}
          <div className="lg:w-[22%]">
            {/* Mobile heading */}
            <h4 
              className="lg:hidden text-base font-semibold mb-4 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.neutral.white }}>
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Văn Phòng Chi Nhánh
            </h4>
            
            {/* Desktop: Trụ sở chính */}
            <div className="hidden lg:block mb-4">
              <div className="flex items-start gap-2 mb-1">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.neutral.white }}>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p 
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  Trụ sở chính
                </p>
              </div>
              <p 
                className="text-xs leading-relaxed pl-6"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Số 22 - 24, Đường số 5, KĐT Sala, Phường An Khánh, TP. Hồ Chí Minh
              </p>
            </div>
            
            <div className="mb-4">
              <div className="flex items-start gap-2 mb-1">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.neutral.white }}>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p 
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  VP Đà Nẵng:
                </p>
              </div>
              <p 
                className="text-xs leading-relaxed pl-6"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Tầng 2, 368 Trần Hưng Đạo, phường An Hải, TP. Đà Nẵng
              </p>
            </div>
            
            <div>
              <div className="flex items-start gap-2 mb-1">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: colors.neutral.white }}>
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p 
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  VP Hà Nội:
                </p>
              </div>
              <p 
                className="text-xs leading-relaxed pl-6"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                P201 Toà nhà Viễn Đông, số 36 Hoàng Cầu, Phường Ô Chợ Dừa, Hà Nội
              </p>
            </div>
          </div>
          
          {/* Column 3: About Links */}
          <div className="lg:w-[15%]">
            {/* Mobile heading */}
            <h4 
              className="lg:hidden text-base font-semibold mb-4"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Về chúng tôi
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  Câu chuyện thương hiệu
                </Link>
              </li>
              <li>
                <Link 
                  href="/"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  Lĩnh vực hoạt động
                </Link>
              </li>
              <li>
                <Link 
                  href="/"
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ 
                    color: colors.gray[300],
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  Tuyển dụng
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Social Links */}
          <div className="lg:w-[15%]">
            {/* Mobile heading */}
            <h4 
              className="lg:hidden text-base font-semibold mb-4"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Theo dõi chúng tôi
            </h4>
            <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-3">
              {/* Mobile: icon only */}
              <Link 
                href="/" 
                className="lg:hidden transition-colors hover:opacity-80"
              >
                <Image src="/shared/fb_icon.svg" alt="Facebook" width={40} height={40} className="w-10 h-10" />
              </Link>
              <Link 
                href="/" 
                className="lg:hidden transition-colors hover:opacity-80"
              >
                <Image src="/shared/ytb_icon.svg" alt="Youtube" width={40} height={40} className="w-10 h-10" />
              </Link>
              {/* Desktop: icon + text */}
              <Link 
                href="/" 
                className="hidden lg:flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                <Image src="/shared/fb_icon.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" />
                Facebook
              </Link>
              <Link 
                href="/" 
                className="hidden lg:flex items-center gap-3 text-sm transition-colors hover:opacity-80"
                style={{ 
                  color: colors.gray[300],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                <Image src="/shared/ytb_icon.svg" alt="Youtube" width={24} height={24} className="w-6 h-6" />
                Youtube
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-6 flex flex-col gap-4"
          style={{ borderTop: `1px solid ${colors.gray[700]}` }}
        >
          {/* Copyright & Links - Mobile */}
          <div className="flex flex-col gap-3 lg:hidden">
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
                href="/"
                className="text-xs transition-colors hover:text-white"
                style={{ 
                  color: colors.gray[400],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Điều khoản sử dụng
              </Link>
              <Link 
                href="/"
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
          
          {/* BCT Logo */}
          <img
            src="/shared/bct_icon.svg"
            alt="Bộ Công Thương"
            className="h-12 w-auto self-start"
          />
          
          {/* Copyright & Links - Desktop */}
          <div className="hidden lg:flex flex-row justify-between items-center gap-4">
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
                href="/"
                className="text-xs transition-colors hover:text-white"
                style={{ 
                  color: colors.gray[400],
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                Điều khoản sử dụng
              </Link>
              <Link 
                href="/"
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
