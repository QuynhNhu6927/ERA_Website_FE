"use client";

import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";

const cards = [
  {
    id: "01",
    title: "THƯƠNG HIỆU TOÀN CẦU",
    description:
      "Một trong những thương hiệu môi giới BĐS hàng đầu tại Mỹ & Châu Á Thái Bình Dương",
    variant: "primary" as const,
  },
  {
    id: "02",
    title: "SẢN PHẨM ĐA DẠNG",
    description:
      "Dễ dàng tìm kiếm sản phẩm phù hợp cho mọi khách hàng với rổ hàng hơn 150 dự án trong và ngoài nước",
    variant: "navy" as const,
  },
  {
    id: "03",
    title: "ĐÀO TẠO CHUYÊN NGHIỆP",
    description:
      "Agent được định hướng đào tạo và trang bị đầy đủ kiến thức, kỹ năng cần thiết để trở thành một chuyên viên tư vấn bất động sản toàn diện",
    variant: "navy" as const,
  },
  {
    id: "04",
    title: "CÔNG NGHỆ ĐỒNG HÀNH",
    description:
      "Agent được hỗ trợ công nghệ độc quyền giúp tối ưu hiệu suất và gia tăng lượt khách hàng tiềm năng",
    variant: "navy" as const,
  },
  {
    id: "05",
    title: "THU NHẬP ĐỘT PHÁ",
    description:
      "Tối đa hóa thu nhập cá nhân với chính sách hoa hồng lũy tiến hấp dẫn.\n\nĐặc biệt, hệ thống chia sẻ doanh thu giúp bạn xây dựng nguồn thu nhập thụ động bền vững từ việc phát triển đội nhóm",
    variant: "navy" as const,
  },
];

function DiffCard({
  id,
  title,
  description,
  variant,
  className = "",
}: {
  id: string;
  title: string;
  description: string;
  variant: "primary" | "navy";
  className?: string;
}) {
  const bgColor =
    variant === "primary" ? colors.primary.DEFAULT : colors.primary.navy.DEFAULT;

  return (
    <div
      className={`bg-white rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] flex flex-col gap-4 ${className}`}
    >
      {/* Header */}
      <div
        className="flex items-center rounded-lg overflow-hidden"
        style={{ backgroundColor: bgColor }}
      >
        <span className="text-3xl lg:text-4xl font-black text-white px-4 py-3 leading-none">
          {id}
        </span>
        <div className="w-px h-8 bg-white/30" />
        <span className="text-sm lg:text-base font-bold text-white px-4 py-3 leading-tight uppercase">
          {title}
        </span>
      </div>

      {/* Description */}
      <p
        className="text-sm lg:text-base leading-relaxed"
        style={{ color: colors.gray[600] }}
      >
        {description.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            {i < description.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}

export function JoinDifferenceSection() {
  return (
    <Section padding="md" bg="gray">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-[28px] lg:text-[40px] font-black leading-tight">
            <span style={{ color: colors.primary.navy.DEFAULT }}>
              ĐIỂM KHÁC BIỆT
            </span>
            <br />
            <span style={{ color: colors.primary.DEFAULT }}>
              NÂNG TẦM SỰ NGHIỆP
            </span>
          </h2>
        </div>

        {/* Cards - Mobile */}
        <div className="grid grid-cols-1 gap-6 mb-10 md:hidden">
          {cards.map((card) => (
            <DiffCard key={card.id} {...card} />
          ))}
        </div>

        {/* Cards - Desktop */}
        <div className="hidden md:flex flex-col gap-6 mb-10">
          {/* Row 1: Card 01 + Line + Card 02 */}
          <div className="grid grid-cols-[3fr_2fr] gap-6 items-stretch">
            {/* Card 01 with red line below */}
            <div className="flex flex-col h-full">
              <DiffCard {...cards[0]} className="flex-1" />
              <div
                className="h-1 rounded-full mt-5"
                style={{ backgroundColor: colors.primary.DEFAULT }}
              />
            </div>
            {/* Card 02 */}
            <DiffCard {...cards[1]} />
          </div>

          {/* Row 2-3: Card 03 + Card 04 | Card 05 + Line */}
          <div className="grid grid-cols-2 gap-6 items-start">
            {/* Left: Card 03 + Card 04 */}
            <div className="flex flex-col gap-6">
              <DiffCard {...cards[2]} />
              <DiffCard {...cards[3]} />
            </div>
            {/* Right: Card 05 with navy line below */}
            <div className="flex flex-col h-full">
              <DiffCard {...cards[4]} className="flex-1" />
              <div
                className="h-1 rounded-full mt-5"
                style={{ backgroundColor: colors.primary.navy.DEFAULT }}
              />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Button asChild variant="primary" size="lg">
            <a href="#">GIA NHẬP TEAM ERA NGAY</a>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
