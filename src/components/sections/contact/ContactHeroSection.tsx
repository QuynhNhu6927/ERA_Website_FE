import { Container } from "@/components/ui/Container";
import { colors, withOpacity } from "@/lib/theme";

export function ContactHeroSection() {
  return (
    <section className="bg-white md:pt-10">
      <Container className="px-0 sm:px-8 lg:px-10">
        <div
          className="relative h-[60vh] md:h-[480px] overflow-hidden md:rounded-3xl"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/contact/contact_hero_banner.jpg')`,
            }}
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: withOpacity(colors.neutral.black, 0.4) }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-8 md:pb-16">
            <h1
              className="uppercase"
              style={{
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 800,
                fontSize: 'clamp(40px, 10vw, 54px)',
                lineHeight: 1.15,
                color: colors.neutral.white,
                textShadow: `0 4px 20px ${withOpacity(colors.neutral.black, 0.5)}, 0 2px 8px ${withOpacity(colors.neutral.black, 0.4)}`,
              }}
            >
              Liên hệ với<br />chúng tôi
            </h1>

            <p
              className="max-w-2xl hidden md:block mt-4"
              style={{
                color: colors.neutral.white,
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: 1.7,
                textShadow: `0 4px 20px ${withOpacity(colors.neutral.black, 0.5)}, 0 2px 8px ${withOpacity(colors.neutral.black, 0.4)}`,
              }}
            >
              Kết nối với mạng lưới bất động sản hàng đầu thế giới. Dù bạn đang tìm kiếm cơ hội đầu tư, giải pháp an cư hay mong muốn bứt phá sự nghiệp, ERA Vietnam luôn sẵn sàng đồng hành.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
