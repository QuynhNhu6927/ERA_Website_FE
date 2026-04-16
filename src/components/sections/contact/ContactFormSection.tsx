"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">
          {/* Left - Title + Image + CTA Card */}
          <div className="flex flex-col h-full">
            <h2
              className="mb-2"
              style={{
                color: colors.secondary.DEFAULT,
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 700,
                fontSize: '40px',
                lineHeight: 1.15,
              }}
            >
              Gửi tin nhắn cho
              <br />
              <span style={{ color: colors.primary.DEFAULT }}>ERA Vietnam</span>
            </h2>
            <p
              className="mb-6"
              style={{
                color: colors.gray[600],
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
              }}
            >
              Để lại thông tin của bạn, đội ngũ chuyên viên của chúng tôi sẽ liên hệ tư vấn trong vòng 24h.
            </p>

            {/* Image + CTA Card combined */}
            <div className="rounded-3xl overflow-hidden flex flex-col flex-1 min-h-0">
              <div className="relative w-full" style={{ aspectRatio: '16/10' }}>
                <img
                  src="/contact/contact_inbox_form.jpg"
                  alt="ERA Vietnam Team"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div
                className="p-5 md:p-6 flex-shrink-0"
                style={{ backgroundColor: colors.secondary.DEFAULT }}
              >
                <h3
                  className="mb-1"
                  style={{
                    color: colors.neutral.white,
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '18px',
                  }}
                >
                  Đang tìm kiếm cơ hội nghề nghiệp?
                </h3>
                <p
                  className="mb-3"
                  style={{
                    color: 'rgba(255,255,255,0.8)',
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: 1.5,
                  }}
                >
                  Trở thành một phần của cộng đồng môi giới bất động sản toàn cầu.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
                  style={{ color: colors.neutral.white, fontFamily: 'var(--font-inter)', fontWeight: 700, fontSize: '16px' }}
                >
                  Gia nhập ERA ngay
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="bg-white rounded-3xl p-6 md:p-10 h-full flex flex-col"
            style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 flex flex-col h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: colors.gray[600], fontFamily: 'var(--font-inter)', fontWeight: 600 }}
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
                    style={{ color: colors.gray[600], fontFamily: 'var(--font-inter)', fontWeight: 600 }}
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
                  style={{ color: colors.gray[600], fontFamily: 'var(--font-inter)', fontWeight: 600 }}
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
                  style={{ color: colors.gray[600], fontFamily: 'var(--font-inter)', fontWeight: 600 }}
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

              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full rounded-3xl py-4 mt-auto"
                style={{ fontFamily: 'var(--font-inter)', fontSize: '16px', fontWeight: 600 } as React.CSSProperties}
              >
                Gửi yêu cầu tư vấn
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
