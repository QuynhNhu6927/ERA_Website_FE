"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { colors, withOpacity } from "@/lib/theme";

const quadrants = [
  {
    letter: "E",
    title: "EMPLOYEE",
    subtitle: "Nhân viên",
    desc: "Trao đổi thời gian lấy tiền bạc. Thu nhập ổn định nhưng giới hạn.",
    color: colors.gray[600],
    titleColor: colors.gray[700],
    subtitleColor: colors.gray[500],
    descColor: colors.gray[500],
    hasButton: false,
    bordered: false,
  },
  {
    letter: "S",
    title: "SELF-EMPLOYED",
    subtitle: "Tự kinh doanh",
    desc: "Làm chủ công việc của chính mình. Rất bận rộn, thu nhập phụ thuộc công sức.",
    color: colors.gray[600],
    titleColor: colors.gray[700],
    subtitleColor: colors.gray[500],
    descColor: colors.gray[500],
    hasButton: false,
    bordered: false,
  },
  {
    letter: "B",
    title: "BUSINESS OWNER",
    subtitle: "Chủ doanh nghiệp",
    desc: "Xây dựng hệ thống và đội ngũ. Thu nhập thụ động từ mạng lưới kinh doanh.",
    color: colors.primary.DEFAULT,
    titleColor: colors.primary.DEFAULT,
    subtitleColor: colors.primary.navy.DEFAULT,
    descColor: colors.gray[600],
    hasButton: true,
    buttonText: "Tham khảo lộ trình ERA",
    buttonVariant: "primary" as const,
    bordered: true,
  },
  {
    letter: "I",
    title: "INVESTOR",
    subtitle: "Nhà đầu tư",
    desc: "Tiền làm việc cho bạn. Đạt đến trạng thái tự do tài chính hoàn toàn.",
    color: colors.secondary.DEFAULT,
    titleColor: colors.secondary.DEFAULT,
    subtitleColor: colors.primary.navy.DEFAULT,
    descColor: colors.gray[600],
    hasButton: true,
    buttonText: "Nhận tư vấn",
    buttonVariant: "secondary" as const,
    bordered: true,
  },
];

export function JoinFinancialSection() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        {/* Title */}
        <h2
          className="mb-10"
          style={{
            color: colors.primary.DEFAULT,
            fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 40px)',
            lineHeight: 1.2,
          }}
        >
          BẠN ĐANG Ở ĐÂU
          <br />
          TRÊN HÀNH TRÌNH TÀI CHÍNH ?
        </h2>

        {/* Top Row: Info Card + Video placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] mb-5">
          {/* Left: Info Card */}
          <div
            className="p-8 md:p-10 flex flex-col justify-center"
            style={{ backgroundColor: colors.primary.navy.DEFAULT }}
          >
            <h3
              className="mb-3"
              style={{
                color: colors.neutral.white,
                fontWeight: 700,
                fontSize: 'clamp(24px, 3vw, 32px)',
                lineHeight: 1.2,
              }}
            >
              Tìm hiểu sâu hơn
              <br />
              về Kim Tứ Đồ
            </h3>
            <p
              style={{
                color: withOpacity(colors.neutral.white, 0.75),
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: 1.6,
              }}
            >
              Khám phá chi tiết cách ERA giúp bạn dịch chuyển từ nhóm làm công sang nhóm làm chủ và đầu tư bền vững qua video phân tích chuyên sâu.
            </p>
          </div>

          {/* Right: Video placeholder */}
          <div
            className="flex items-center justify-center min-h-[260px] relative"
            style={{ backgroundColor: colors.gray[100] }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: withOpacity(colors.primary.DEFAULT, 0.1) }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill={colors.primary.DEFAULT}>
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p style={{ color: colors.gray[500], fontSize: '14px' }}>
                Video phân tích Kim Tứ Đồ
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: 4 Quadrant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
          {quadrants.map((q) => (
            <div
              key={q.letter}
              className="rounded-2xl p-4 bg-white shadow-sm h-full flex flex-col hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Top: Letter + Content */}
              <div className="grid grid-cols-[auto_1fr] gap-5 items-stretch flex-1">
                {/* Left: Letter */}
                <div className="flex items-center justify-center">
                  <span
                    className="font-black"
                    style={{
                      color: q.color,
                      fontSize: 'clamp(80px, 7vw, 110px)',
                      lineHeight: 1,
                    }}
                  >
                    {q.letter}
                  </span>
                </div>
                {/* Right: Content */}
                <div className="flex flex-col justify-center gap-0.5 min-w-0">
                  <h4
                    style={{
                      color: q.titleColor,
                      fontWeight: 800,
                      fontSize: 'clamp(18px, 2vw, 24px)',
                      lineHeight: 1.2,
                    }}
                  >
                    {q.title}
                  </h4>
                  <p
                    className="mb-2"
                    style={{
                      color: q.subtitleColor,
                      fontWeight: 400,
                      fontSize: 'clamp(15px, 1.8vw, 20px)',
                      lineHeight: 1.3,
                    }}
                  >
                    {q.subtitle}
                  </p>
                  <p
                    style={{
                      color: q.descColor,
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: 1.5,
                    }}
                  >
                    {q.desc}
                  </p>
                </div>
              </div>
              {/* Bottom: Button on its own row */}
              {q.hasButton && (
                <div className="mt-4">
                  <Button
                    variant={q.buttonVariant}
                    size="sm"
                    className="rounded-lg px-6 py-2.5 min-w-[200px]"
                  >
                    {q.buttonText}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
