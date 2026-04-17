import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const contactCards = [
  {
    id: 1,
    icon: "/contact/contact_hotline_icon.svg",
    title: "Hotline 24/7",
    description: "Tổng đài tiếp nhận và giải đáp mọi thông tin, thắc mắc chung về dịch vụ và hoạt động của ERA Vietnam.",
    action: "1800 6701",
    actionColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
  {
    id: 2,
    icon: "/contact/contact_operate_icon.svg",
    title: "Bộ phận Vận Hành",
    description: "Giải đáp các vấn đề liên quan đến hệ thống, quy trình vận hành và hỗ trợ trực tiếp đội ngũ Agent.",
    action: "thongbao@era.com.vn",
    actionColor: colors.secondary.DEFAULT,
    borderColor: colors.secondary.DEFAULT,
  },
  {
    id: 3,
    icon: "/contact/contact_market_icon.svg",
    title: "Bộ phận Marketing",
    description: "Kết nối để trao đổi về các cơ hội hợp tác truyền thông, sự kiện và chiến dịch quảng bá thương hiệu.",
    action: "mkt@era.com.vn",
    actionColor: colors.orangeVivid,
    borderColor: colors.orangeVivid,
  },
  {
    id: 4,
    icon: "/contact/contact_recruitment_icon.svg",
    title: "Bộ phận Tuyển dụng",
    description: "Chào đón bạn trở thành một phần của ERA Vietnam.",
    action: "hr@era.com.vn",
    actionColor: colors.cyanBright,
    borderColor: colors.cyanBright,
  },
];

export function ContactCardsSection() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: colors.gray[50] }}>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {contactCards.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-2xl p-4 md:p-6 flex flex-row md:flex-col items-start md:items-stretch gap-4 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 will-change-transform"
              style={{ borderBottom: `4px solid ${card.borderColor}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${card.borderColor}15` }}
              >
                <img src={card.icon} alt={card.title} className="w-6 h-6" />
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3
                  className="mb-1 md:mb-2"
                  style={{
                    color: colors.neutral.foreground,
                    fontFamily: 'var(--font-manrope), system-ui, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>

                <p
                  className="hidden md:block mb-4 flex-1"
                  style={{
                    color: colors.gray[500],
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: 1.6,
                  }}
                >
                  {card.description}
                </p>

                <span
                  className="font-bold"
                  style={{ color: card.actionColor, fontFamily: 'var(--font-manrope), system-ui, sans-serif', fontWeight: 700, fontSize: '16px' }}
                >
                  {card.action}
                </span>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
