"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { colors, withOpacity } from "@/lib/theme";
import { ROUTES } from "@/lib/routes";

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
    <Section padding="md" bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-8 lg:gap-12">
          {/* Title */}
          <div className="lg:col-span-1">
            <h2
              className="mb-2"
              style={{
                color: colors.primary.navy.DEFAULT,
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
              className="mb-6 lg:mb-0"
              style={{
                color: colors.gray[600],
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: 1.6,
              }}
            >
              Để lại thông tin của bạn, đội ngũ chuyên viên của chúng tôi sẽ liên hệ tư vấn trong vòng 24h.
            </p>
          </div>

          {/* Form */}
          <div
            className="row-start-2 lg:row-start-1 lg:col-start-2 lg:row-span-2 bg-white rounded-3xl p-6 md:p-10 h-full flex flex-col"
            style={{ boxShadow: `0 10px 40px -10px ${withOpacity(colors.neutral.black, 0.1)}` }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 flex flex-col h-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: colors.gray[600], fontWeight: 600 }}
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
                      fontSize: '14px',
                      '--tw-ring-color': `${colors.primary.DEFAULT}33`,
                    } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-2"
                    style={{ color: colors.gray[600], fontWeight: 600 }}
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
                      fontSize: '14px',
                      '--tw-ring-color': `${colors.primary.DEFAULT}33`,
                    } as React.CSSProperties}
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: colors.gray[600], fontWeight: 600 }}
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
                    fontSize: '14px',
                    '--tw-ring-color': `${colors.primary.DEFAULT}33`,
                  } as React.CSSProperties}
                />
              </div>

              <div>
                <label
                  className="block text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: colors.gray[600], fontWeight: 600 }}
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
                style={{ fontSize: '16px', fontWeight: 600 } as React.CSSProperties}
              >
                Gửi yêu cầu tư vấn
              </Button>
            </form>
          </div>

          {/* Image + CTA Card */}
          <div className="row-start-3 lg:row-start-2 lg:col-start-1 rounded-3xl overflow-hidden flex flex-col flex-1 min-h-0">
            <div className="relative w-full" style={{ aspectRatio: '16/6' }}>
              <img
                src="/contact/contact_inbox_form.jpg"
                alt="ERA Vietnam Team"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div
              className="p-5 md:p-6 flex-shrink-0"
              style={{ backgroundColor: colors.primary.navy.DEFAULT }}
            >
              <h3
                className="mb-1"
                style={{
                  color: colors.neutral.white,
                  fontWeight: 600,
                  fontSize: '18px',
                }}
              >
                Đang tìm kiếm cơ hội nghề nghiệp?
              </h3>
              <p
                className="mb-3"
                style={{
                  color: withOpacity(colors.neutral.white, 0.8),
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: 1.5,
                }}
              >
                Trở thành một phần của cộng đồng môi giới bất động sản toàn cầu.
              </p>
              <a
                href={ROUTES.join}
                className="inline-flex items-center gap-1 transition-opacity hover:opacity-80"
                style={{ color: colors.neutral.white, fontWeight: 700, fontSize: '16px' }}
              >
                Gia nhập ERA ngay
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
    </Section>
  );
}
