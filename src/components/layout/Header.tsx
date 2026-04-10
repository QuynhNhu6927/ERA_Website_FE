"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { X } from "lucide-react";
import { colors } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";

const ICON_SIZES = {
  navIcon: 18,
  hotlineIcon: 18,
  socialIcon: 40,
};

const navLinks = [
  { href: ROUTES.projects, label: "Dự án", icon: "/mobile_header/menu_project_icon.svg" },
  { href: ROUTES.joinTeam, label: "Join Team ERA", icon: "/mobile_header/menu_join_icon.svg" },
  { href: ROUTES.news, label: "Tin tức", icon: "/mobile_header/menu_news_icon.svg" },
  { href: ROUTES.contact, label: "Liên hệ", icon: "/mobile_header/menu_contact_icon.svg" },
  { href: ROUTES.aboutUs, label: "Về chúng tôi", icon: "/mobile_header/menu_about_icon.svg" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-transform duration-300", isVisible ? "translate-y-0" : "-translate-y-full")} style={{ backgroundColor: colors.neutral.white, boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1)' }}>
        <Container>
          <div className="flex items-center justify-between h-14 md:h-16" style={{ fontFamily: 'var(--font-inter)' }}>
            <Link href="/" className="hidden md:flex items-center">
              <Image src="/logo.svg" alt="ERA Vietnam" width={134} height={38} className="h-10 w-auto" priority />
            </Link>
            <button className="md:hidden p-2 flex items-center justify-center" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
              <img src="/mobile_header/menu_hambuger_icon.svg" alt="Menu" style={{ width: '40px', height: '40px' }} />
            </button>
            <Link href="/" className="md:hidden flex items-center absolute left-1/2 -translate-x-1/2">
              <img src="/logo_short.svg" alt="ERA Vietnam" style={{ width: '50px', height: '50px' }} />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isHovered = hoveredItem === link.href;
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      onMouseEnter={() => setHoveredItem(link.href)} 
                      onMouseLeave={() => setHoveredItem(null)} 
                      className="text-sm transition-all duration-200"
                      style={{ color: isHovered ? colors.primary.DEFAULT : colors.gray[700], fontWeight: isHovered ? 800 : 500, fontSize: '14px' }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <Link href={ROUTES.login} className="flex items-center justify-center px-5 py-2 text-sm transition-colors hover:opacity-90" style={{ backgroundColor: colors.primary.DEFAULT, color: colors.neutral.white, fontWeight: 600, fontSize: '14px', borderRadius: '8px' }}>
                Login/Đăng ký
              </Link>
            </div>
            <Link href={ROUTES.login} className="md:hidden p-2 flex items-center justify-center">
              <img src="/mobile_header/menu_user_icon.svg" alt="User" style={{ width: '40px', height: '40px' }} />
            </Link>
          </div>
        </Container>
      </header>

      <div className={cn("fixed inset-0 z-[60] transition-all duration-300 md:hidden", isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none")}>
        <div className="absolute inset-0 bg-black/30" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={cn("absolute top-0 left-0 h-full w-[85%] max-w-[320px] transition-transform duration-300 flex flex-col", isMobileMenuOpen ? "translate-x-0" : "-translate-x-full")} style={{ backgroundColor: colors.neutral.white }}>
          
          {/* Section 1: Header */}
          <div className="flex items-center justify-between px-5 py-4" style={{ backgroundColor: '#FFFFFFCC' }}>
            <Image src="/logo.svg" alt="ERA Vietnam" width={120} height={36} className="h-9 w-auto" priority />
            <button className="p-2" style={{ color: colors.gray[700] }} onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X size={14} />
            </button>
          </div>

          {/* Section 2: Nav Links */}
          <div className="px-5 py-5" style={{ backgroundColor: '#F7F9FC' }}>
            <nav className="flex flex-col gap-6" style={{ fontFamily: 'var(--font-inter)' }}>
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 py-3"
                  style={{ color: colors.secondary.DEFAULT, fontWeight: 500, fontSize: '16px' }}
                >
                  <img src={link.icon} alt={link.label} style={{ width: ICON_SIZES.navIcon, height: ICON_SIZES.navIcon }} />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Section 3: Hotline + Social + Footer */}
          <div className="flex-1 px-5 py-6 flex flex-col" style={{ backgroundColor: '#F2F4F7' }}>
            {/* Hotline */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col">
                <p className="uppercase tracking-wider mb-2" style={{ color: colors.gray[500], fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: '10px' }}>
                  HOTLINE HỖ TRỢ 24/7
                </p>
                <span style={{ color: colors.primary.DEFAULT, fontFamily: 'var(--font-manrope)', fontWeight: 900, fontSize: '24px' }}>
                  1800 6701
                </span>
              </div>
              <a href="tel:18006701" className="flex items-center justify-center" style={{ backgroundColor: colors.primary.DEFAULT, width: '48px', height: '48px', borderRadius: '12px', boxShadow: `0px 4px 6px -4px ${colors.primary.hotline}33, 0px 10px 15px -3px ${colors.primary.hotline}33` }}>
                <img src="/mobile_header/menu_hotline_icon.svg" alt="Call" style={{ width: ICON_SIZES.hotlineIcon, height: ICON_SIZES.hotlineIcon }} />
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="flex items-center justify-center">
                <img src="/mobile_header/menu_fb_icon.svg" alt="Facebook" style={{ width: ICON_SIZES.socialIcon, height: ICON_SIZES.socialIcon }} />
              </a>
              <a href="#" className="flex items-center justify-center">
                <img src="/mobile_header/menu_ytb_icon.svg" alt="Youtube" style={{ width: ICON_SIZES.socialIcon, height: ICON_SIZES.socialIcon }} />
              </a>
            </div>
            
            {/* Footer Text */}
            <p className="text-xs mt-auto pt-4" style={{ color: colors.gray[700], fontFamily: 'var(--font-manrope)', fontSize: '10px' }}>
              © 2024 ERA Vietnam. Một thương hiệu thuộc hệ thống ERA Real Estate toàn cầu. Bản quyền đã được bảo hộ.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
