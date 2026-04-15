"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submission
  };

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: colors.gray[50] }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Image + CTA Card */}
          <div className="relative rounded-2xl overflow-hidden h-[420px] lg:h-auto min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
              alt="ERA Vietnam Team"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Bottom overlay card */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
              style={{ backgroundColor: colors.secondary.DEFAULT }}
            >
              <h3
                className="mb-2"
                style={{
                  color: colors.neutral.white,
                  fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                }}
              >
                Đang tìm kiếm cơ hội nghề nghiệp?
              </h3>
              <p
                className="text-sm mb-4"
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontFamily: 'var(--font-inter)',
                  lineHeight: 1.6,
                }}
              >
                Trở thành một phần của cộng đồng môi giới bất động sản toàn cầu.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ color: colors.neutral.white, fontFamily: 'var(--font-inter)' }}
              >
                Gia nhập ERA ngay
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white rounded-2xl p-6 md:p-10">
            <h2
              className="mb-2"
              style={{
                color: colors.secondary.DEFAULT,
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 900,
                fontSize: '32px',
                lineHeight: 1.2,
              }}
            >
              Gửi tin nhắn cho<br />
              <span style={{ color: colors.primary.DEFAULT }}>ERA Vietnam</span>
            </h2>
            <p
              className="mb-8 text-sm"
              style={{
                color: colors.gray[500],
                fontFamily: 'var(--font-inter)',
                lineHeight: 1.6,
              }}
            >
              Để lại thông tin của bạn, đội ngũ chuyên viên của chúng tôi sẽ liên hệ tư vấn trong vòng 24h.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: colors.neutral.foreground, fontFamily: 'var(--font-inter)' }}
                  >
                    Họ và tên
                  </label>
                  <input
                    type="text"
                    placeholder="Nguyễn Văn A"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg outline-none transition-shadow focus:ring-2"
                    style={{
                      backgroundColor: colors.gray[50],
                      color: colors.neutral.foreground,
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                      '--tw-ring-color': `${colors.primary.DEFAULT}33`,
                    } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: colors.neutral.foreground, fontFamily: 'var(--font-inter)' }}
                  >
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    placeholder="090 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg outline-none transition-shadow focus:ring-2"
                    style={{
                      backgroundColor: colors.gray[50],
                      color: colors.neutral.foreground,
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                      '--tw-ring-color': `${colors.primary.DEFAULT}33`,
                    } as React.CSSProperties}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: colors.neutral.foreground, fontFamily: 'var(--font-inter)' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-shadow focus:ring-2"
                  style={{
                    backgroundColor: colors.gray[50],
                    color: colors.neutral.foreground,
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    '--tw-ring-color': `${colors.primary.DEFAULT}33`,
                  } as React.CSSProperties}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: colors.neutral.foreground, fontFamily: 'var(--font-inter)' }}
                >
                  LỜI NHẮN
                </label>
                <textarea
                  placeholder="Bạn cần ERA hỗ trợ vấn đề gì?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg outline-none transition-shadow focus:ring-2 resize-none"
                  style={{
                    backgroundColor: colors.gray[50],
                    color: colors.neutral.foreground,
                    fontFamily: 'var(--font-inter)',
                    fontSize: '14px',
                    '--tw-ring-color': `${colors.primary.DEFAULT}33`,
                  } as React.CSSProperties}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-lg text-white font-semibold transition-opacity duration-200 hover:opacity-90"
                style={{
                  backgroundColor: colors.primary.DEFAULT,
                  fontFamily: 'var(--font-inter)',
                  fontSize: '16px',
                }}
              >
                Gửi yêu cầu tư vấn
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
