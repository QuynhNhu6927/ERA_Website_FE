"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { X, LogOut, ChevronDown } from "lucide-react";
import { colors, withOpacity } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";
import { User } from "@/types/user";

const ICON_SIZES = {
  navIcon: 18,
  hotlineIcon: 18,
  socialIcon: 40,
};

const navLinks: { href: string; label: string; icon: string; external?: boolean }[] = [
  { href: "/", label: "Dự án", icon: "/mobile_header/menu_project_icon.svg"},
  { href: ROUTES.join, label: "Join Team ERA", icon: "/mobile_header/menu_join_icon.svg"},
  { href: "/", label: "Tin tức", icon: "/mobile_header/menu_news_icon.svg" },
  { href: ROUTES.contact, label: "Liên hệ", icon: "/mobile_header/menu_contact_icon.svg" },
  { href: "/", label: "Về chúng tôi", icon: "/mobile_header/menu_about_icon.svg" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const rafRef = useRef<number | null>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const displayName = user?.fullName || user?.name || "User";

  useEffect(() => {
    try {
      const stored = localStorage.getItem("era_user");
      if (stored) {
        setUser(JSON.parse(stored));
      }
    } catch {
      setUser(null);
    }
  }, []);

  // Close profile dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isProfileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const currentScrollY = window.scrollY;

        setIsScrolled(currentScrollY > 50);

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
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [lastScrollY]);

  const handleLogout = () => {
    localStorage.removeItem("era_access_token");
    localStorage.removeItem("era_user");
    setUser(null);
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    setIsUserDrawerOpen(false);
    window.location.reload();
  };

  const AvatarCircle = ({ size = 36, className = "" }: { size?: number; className?: string }) => (
    <div
      className={cn("rounded-full flex items-center justify-center text-sm font-bold text-white overflow-hidden shrink-0", className)}
      style={{ backgroundColor: colors.primary.DEFAULT, width: size, height: size }}
      title={displayName}
    >
      {user?.avatar ? (
        <Image
          src={user.avatar}
          alt={displayName}
          width={size}
          height={size}
          className="w-full h-full object-cover"
        />
      ) : (
        displayName.charAt(0).toUpperCase()
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Header */}
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )} 
        style={{
          backgroundColor: colors.neutral.white,
          boxShadow: isScrolled ? `0 1px 3px 0 ${withOpacity(colors.neutral.black, 0.1)}` : 'none',
        }}
      >
        <Container>
          <div className="flex items-center justify-between h-16">
            <Link href={ROUTES.home} className="flex items-center">
              <Image src="/logo.svg" alt="ERA Vietnam" width={134} height={38} className="h-10 w-auto" priority />
            </Link>
            <div className="flex items-center gap-8">
              <nav className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isHovered = hoveredItem === link.label;
                  const commonProps = {
                    onMouseEnter: () => setHoveredItem(link.label),
                    onMouseLeave: () => setHoveredItem(null),
                    className: "text-sm transition-all duration-200",
                    style: { color: isHovered ? colors.primary.DEFAULT : colors.gray[700], fontWeight: isHovered ? 800 : 500, fontSize: '14px' }
                  };
                  
                  if (link.external) {
                    return (
                      <a 
                        key={link.label}
                        {...commonProps}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    );
                  }
                  
                  return (
                    <Link 
                      key={link.label}
                      {...commonProps}
                      href={link.href}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              {user ? (
                <div className="relative" ref={profileRef}>
                  <button
                    onClick={() => setIsProfileOpen((prev) => !prev)}
                    className="flex items-center gap-1 outline-none"
                    aria-label="Open profile menu"
                  >
                    <AvatarCircle size={36} />
                    <ChevronDown
                      size={14}
                      className={cn("transition-transform duration-200", isProfileOpen && "rotate-180")}
                      style={{ color: colors.gray[500] }}
                    />
                  </button>
                  
                  {/* Profile Dropdown */}
                  {isProfileOpen && (
                    <div
                      className="absolute right-0 top-full mt-2 w-56 rounded-xl shadow-xl border overflow-hidden"
                      style={{
                        backgroundColor: colors.neutral.white,
                        borderColor: colors.gray[200],
                      }}
                    >
                      <div className="px-4 py-3 border-b" style={{ borderColor: colors.gray[100] }}>
                        <p className="text-sm font-semibold" style={{ color: colors.gray[900] }}>
                          {displayName}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: colors.gray[500] }}>
                          {user.email}
                        </p>
                      </div>
                      <span
                        className="block px-4 py-2.5 text-sm transition-colors hover:bg-gray-50 cursor-pointer"
                        style={{ color: colors.gray[700] }}
                      >
                        Quản lý nội dung
                      </span>
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-gray-50"
                        style={{ color: colors.gray[700] }}
                      >
                        <LogOut size={14} />
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button asChild variant="primary" size="sm">
                  <Link href="#">
                    Đăng nhập
                  </Link>
                </Button>
              )}   
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Header - Floating Pills */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 md:hidden",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="px-3 pt-3 flex items-center justify-between">
          {/* Left: Floating pill with User + Hamburger */}
          <div
            className={cn(
              "flex items-center gap-0.5 px-1.5 py-1 rounded-full shadow-lg transition-all duration-300 bg-white",
              isScrolled ? "shadow-md" : ""
            )}
          >
            {user ? (
              <button
                className="p-1.5 flex items-center justify-center"
                onClick={() => setIsUserDrawerOpen(true)}
                aria-label="Open profile"
              >
                <AvatarCircle size={20} className="text-xs" />
              </button>
            ) : (
              <Link href="#" className="p-1.5 flex items-center justify-center">
                <Image
                  src="/mobile_header/menu_user_icon.svg"
                  alt="User"
                  width={20}
                  height={20}
                  style={{ width: '20px', height: '20px' }}
                />
              </Link>
            )}
            <div className="w-px h-4 bg-gray-300" />
            <button
              className="p-1.5 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Image
                src="/mobile_header/menu_hambuger_icon.svg"
                alt="Menu"
                width={20}
                height={20}
                style={{ width: '20px', height: '20px' }}
              />
            </button>
          </div>

          {/* Right: Logo floating */}
          <div
            className={cn(
              "flex items-center justify-center p-1.5 rounded-full shadow-lg transition-all duration-300 bg-white",
              isScrolled ? "shadow-md" : ""
            )}
          >
            <Link href={ROUTES.home} className="flex items-center">
              <Image
                src="/logo_short.svg"
                alt="ERA Vietnam"
                width={28}
                height={28}
                style={{ width: '28px', height: '28px' }}
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div className={cn("fixed inset-0 z-[60] transition-all duration-300 md:hidden", isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none")}>
        <div className="absolute inset-0 bg-black/30" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={cn("absolute top-0 left-0 h-full w-[85%] max-w-[320px] transition-transform duration-300 flex flex-col", isMobileMenuOpen ? "translate-x-0" : "-translate-x-full")} style={{ backgroundColor: colors.neutral.white }}>
          
          {/* Section 1: Header */}
          <div className="flex items-center justify-between px-5 py-4" style={{ backgroundColor: withOpacity(colors.neutral.white, 0.8) }}>
            <Image src="/logo.svg" alt="ERA Vietnam" width={120} height={36} className="h-9 w-auto" priority />
            <button className="p-2" style={{ color: colors.gray[700] }} onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X size={14} />
            </button>
          </div>

          {/* Section 2: Nav Links */}
          <div className="px-5 py-5" style={{ backgroundColor: colors.gray[50] }}>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const linkClass = "flex items-center gap-4 py-3";
                const linkStyle = { color: colors.primary.navy.DEFAULT, fontWeight: 500, fontSize: '16px' };
                const iconElement = <Image src={link.icon} alt={link.label} width={ICON_SIZES.navIcon} height={ICON_SIZES.navIcon} style={{ width: ICON_SIZES.navIcon, height: ICON_SIZES.navIcon }} />;
                
                if (link.external) {
                  return (
                    <a 
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={linkClass}
                      style={linkStyle}
                    >
                      {iconElement}
                      {link.label}
                    </a>
                  );
                }
                
                return (
                  <Link 
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={linkClass}
                    style={linkStyle}
                  >
                    {iconElement}
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Section 3: Hotline + Social + Footer */}
          <div className="flex-1 px-5 py-6 flex flex-col" style={{ backgroundColor: colors.gray[100] }}>
            {/* Hotline */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex flex-col">
                <p className="uppercase tracking-wider mb-2" style={{ color: colors.gray[500], fontWeight: 700, fontSize: '10px' }}>
                  HOTLINE HỖ TRỢ 24/7
                </p>
                <span style={{ color: colors.primary.DEFAULT, fontWeight: 900, fontSize: '24px' }}>
                  1800 6701
                </span>
              </div>
              <a href="tel:18006701" className="flex items-center justify-center" style={{ backgroundColor: colors.primary.DEFAULT, width: '48px', height: '48px', borderRadius: '12px', boxShadow: `0px 4px 6px -4px ${colors.primary.hotline}33, 0px 10px 15px -3px ${colors.primary.hotline}33` }}>
                <Image src="/mobile_header/menu_hotline_icon.svg" alt="Call" width={ICON_SIZES.hotlineIcon} height={ICON_SIZES.hotlineIcon} style={{ width: ICON_SIZES.hotlineIcon, height: ICON_SIZES.hotlineIcon }} />
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-6">
              <a href="/" className="flex items-center justify-center">
                <Image src="/mobile_header/menu_fb_icon.svg" alt="Facebook" width={ICON_SIZES.socialIcon} height={ICON_SIZES.socialIcon} style={{ width: ICON_SIZES.socialIcon, height: ICON_SIZES.socialIcon }} />
              </a>
              <a href="/" className="flex items-center justify-center">
                <Image src="/mobile_header/menu_ytb_icon.svg" alt="Youtube" width={ICON_SIZES.socialIcon} height={ICON_SIZES.socialIcon} style={{ width: ICON_SIZES.socialIcon, height: ICON_SIZES.socialIcon }} />
              </a>
            </div>
            
            {/* Footer Text */}
            <p className="text-xs mt-auto pt-4" style={{ color: colors.gray[700], fontSize: '10px' }}>
              © 2024 ERA Vietnam. Một thương hiệu thuộc hệ thống ERA Real Estate toàn cầu. Bản quyền đã được bảo hộ.
            </p>
          </div>

        </div>
      </div>

      {/* Mobile User Drawer */}
      <div className={cn("fixed inset-0 z-[60] transition-all duration-300 md:hidden", isUserDrawerOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none")}>
        <div className="absolute inset-0 bg-black/30" onClick={() => setIsUserDrawerOpen(false)} />
        <div className={cn("absolute top-0 left-0 h-full w-[85%] max-w-[320px] transition-transform duration-300 flex flex-col", isUserDrawerOpen ? "translate-x-0" : "-translate-x-full")} style={{ backgroundColor: colors.neutral.white }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: colors.gray[200] }}>
            <span className="text-sm font-semibold" style={{ color: colors.gray[900] }}>Tài khoản</span>
            <button className="p-2" style={{ color: colors.gray[700] }} onClick={() => setIsUserDrawerOpen(false)} aria-label="Close profile">
              <X size={14} />
            </button>
          </div>

          {/* User Info */}
          {user && (
            <div className="flex-1 px-5 py-6 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <AvatarCircle size={48} />
                <div className="min-w-0">
                  <p className="text-base font-semibold truncate" style={{ color: colors.gray[900] }}>
                    {displayName}
                  </p>
                  <p className="text-sm truncate" style={{ color: colors.gray[500] }}>
                    {user.email}
                  </p>
                </div>
              </div>

              <span
                className="block py-3 px-4 rounded-xl text-sm font-medium mb-4 cursor-pointer transition-colors hover:bg-gray-50"
                style={{ color: colors.gray[700] }}
              >
                Quản lý nội dung
              </span>

              <button
                onClick={handleLogout}
                className="mt-auto w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-colors"
                style={{
                  backgroundColor: withOpacity(colors.primary.DEFAULT, 0.08),
                  color: colors.primary.DEFAULT,
                }}
              >
                <LogOut size={16} />
                Đăng xuất
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
