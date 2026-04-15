import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const contactCards = [
  {
    id: 1,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.primary.DEFAULT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: "Hotline 24/7",
    description: "Round-the-clock assistance for all your immediate real estate inquiries.",
    action: "1800 6701",
    actionColor: colors.primary.DEFAULT,
    borderColor: colors.primary.DEFAULT,
  },
  {
    id: 2,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.secondary.DEFAULT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
    title: "Bộ phận Vận Hành",
    description: "Dedicated support for transaction processing and logistical coordination.",
    action: "thongbao@era.com.vn",
    actionColor: colors.secondary.DEFAULT,
    borderColor: colors.secondary.DEFAULT,
  },
  {
    id: 3,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F78C00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5.08V2c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v3.08c0 2.95 2.36 5.34 5.28 5.42 2.96-.08 5.36-2.47 5.36-5.42z"/>
        <path d="M7 11v11"/>
        <path d="M14 9h8"/>
        <path d="M18 5v8"/>
        <path d="M18 13v8"/>
      </svg>
    ),
    title: "Bộ phận Marketing",
    description: "Collaborate with our creative team on branding and property visibility.",
    action: "mkt@era.com.vn",
    actionColor: "#F78C00",
    borderColor: "#F78C00",
  },
  {
    id: 4,
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.accentBlue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
    title: "Bộ phận Tuyển dụng",
    description: "Join our elite circle of real estate professionals and move up.",
    action: "hr@era.com.vn",
    actionColor: colors.accentBlue,
    borderColor: colors.accentBlue,
  },
];

export function ContactCardsSection() {
  return (
    <section className="py-12 md:py-16" style={{ backgroundColor: colors.gray[50] }}>
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card) => (
            <article
              key={card.id}
              className="bg-white rounded-2xl p-6 flex flex-col transition-all duration-200 hover:shadow-md hover:scale-[1.02] will-change-transform"
              style={{ borderBottom: `4px solid ${card.borderColor}` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${card.borderColor}15` }}
              >
                {card.icon}
              </div>

              <h3
                className="mb-2"
                style={{
                  color: colors.neutral.foreground,
                  fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                  fontWeight: 700,
                  fontSize: '18px',
                }}
              >
                {card.title}
              </h3>

              <p
                className="text-sm mb-4 flex-1"
                style={{
                  color: colors.gray[500],
                  fontFamily: 'var(--font-inter)',
                  lineHeight: 1.6,
                }}
              >
                {card.description}
              </p>

              <span
                className="text-sm font-semibold"
                style={{ color: card.actionColor, fontFamily: 'var(--font-inter)' }}
              >
                {card.action}
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
