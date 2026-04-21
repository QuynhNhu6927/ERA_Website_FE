"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/ui/Section";
import { colors, withOpacity } from "@/lib/theme";
import { cn } from "@/lib/utils";

export interface LegalSection {
  id: string;
  heading: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  lastUpdated: string;
  sections: LegalSection[];
}

export function LegalPageLayout({ lastUpdated, sections }: LegalPageLayoutProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Intersection Observer to highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offsetTop = el.offsetTop - 120;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <Section padding="md" bg="white">
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16">
        {/* Sidebar - Desktop sticky, Mobile collapsible */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          {/* Mobile: Dropdown toggle */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl"
              style={{
                backgroundColor: colors.gray[50],
                border: `1px solid ${colors.gray[200]}`,
              }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: colors.primary.navy.DEFAULT }}
              >
                Mục lục
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.gray[500]}
                strokeWidth="2"
                className={cn(
                  "transition-transform duration-200",
                  mobileMenuOpen && "rotate-180"
                )}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          </div>

          <nav
            className={cn(
              "flex flex-col gap-1 overflow-hidden transition-all duration-300",
              mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100"
            )}
          >
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200"
                  style={{
                    color: isActive ? colors.primary.DEFAULT : colors.gray[600],
                    fontWeight: isActive ? 700 : 500,
                    backgroundColor: isActive
                      ? withOpacity(colors.primary.DEFAULT, 0.06)
                      : "transparent",
                    borderLeft: isActive
                      ? `3px solid ${colors.primary.DEFAULT}`
                      : "3px solid transparent",
                  }}
                >
                  {s.heading}
                </button>
              );
            })}
          </nav>

          {/* Last updated - desktop only */}
          <div
            className="hidden lg:block mt-6 pt-6"
            style={{ borderTop: `1px solid ${colors.gray[200]}` }}
          >
            <p
              className="text-xs uppercase tracking-wider font-semibold mb-1"
              style={{ color: colors.gray[400] }}
            >
              Cập nhật lần cuối
            </p>
            <p
              className="text-sm"
              style={{ color: colors.gray[600] }}
            >
              {lastUpdated}
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <article className="min-w-0">
          {/* Last updated - mobile only */}
          <div className="lg:hidden mb-8">
            <p
              className="text-xs uppercase tracking-wider font-semibold mb-1"
              style={{ color: colors.gray[400] }}
            >
              Cập nhật lần cuối
            </p>
            <p
              className="text-sm"
              style={{ color: colors.gray[600] }}
            >
              {lastUpdated}
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {sections.map((s) => (
              <section
                key={s.id}
                id={s.id}
                className="scroll-mt-28"
              >
                <h2
                  className="mb-4"
                  style={{
                    color: colors.primary.navy.DEFAULT,
                    fontWeight: 800,
                    fontSize: "clamp(20px, 2.5vw, 24px)",
                    lineHeight: 1.3,
                  }}
                >
                  {s.heading}
                </h2>
                <div
                  className="prose-custom"
                  style={{
                    color: colors.gray[700],
                    fontSize: "15px",
                    lineHeight: 1.8,
                  }}
                >
                  {s.content}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </Section>
  );
}
