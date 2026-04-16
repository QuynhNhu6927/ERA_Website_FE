import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

export function ContactHeroSection() {
  return (
    <section className="pt-10 bg-white">
      <Container>
        <div
          className="relative h-[360px] md:h-[480px] rounded-3xl overflow-hidden"
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
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-12 lg:px-16 pb-10 md:pb-16">
            <h1
              className="mb-4 uppercase"
              style={{
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 800,
                fontSize: '54px',
                lineHeight: 1.15,
                color: colors.neutral.white,
              }}
            >
              Liên hệ với<br />chúng tôi
            </h1>

            <p
              className="max-w-2xl"
              style={{
                color: colors.neutral.white,
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 500,
                fontSize: '18px',
                lineHeight: 1.7,
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
