"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#du-an", label: "Dự án" },
  { href: "#join-team", label: "Join Team ERA" },
  { href: "#tin-tuc", label: "Tin tức" },
  { href: "#lien-he", label: "Liên hệ" },
  { href: "#ve-chung-toi", label: "Về chúng tôi" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <Container>
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#e31937] rounded flex items-center justify-center">
              <svg viewBox="0 0 40 40" className="w-7 h-7">
                <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">ERA</text>
              </svg>
            </div>
            <span className="font-bold text-sm text-[#1a1a4e] tracking-wide">
              ERA VIETNAM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-gray-700 hover:text-[#e31937] transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="hidden sm:flex items-center justify-center px-4 py-1.5 bg-[#e31937] text-white text-sm font-medium rounded-full hover:bg-[#c41230] transition-colors"
            >
              Login/Đăng ký
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300",
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        )}
      >
        <Container>
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 text-gray-700 hover:text-[#e31937] font-medium border-b border-gray-100 last:border-0 last:pb-0 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/login"
              className="mt-4 flex items-center justify-center px-5 py-3 bg-[#e31937] text-white text-sm font-medium rounded-full hover:bg-[#c41230] transition-colors"
            >
              Login/Đăng ký
            </Link>
          </nav>
        </Container>
      </div>
    </header>
  );
}
