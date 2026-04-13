"use client";

import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

const relatedNews = [
  {
    id: 1,
    date: "15 Tháng 5, 2024",
    title: "Thị trường Bất động sản Việt Nam 2024: Cơ hội cho ngườimua nhà",
    excerpt: "Các chính sách mới và lãi suất ổn định đang tạo đà phục hồi mạnh mẽ cho phân khúc căn hộ cao cấp tại TP.HCM...",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    date: "10 Tháng 5, 2024",
    title: "ERA Vietnam tổ chức Lễ vinh danh Chuyên viên xuất sắc Quý 1",
    excerpt: "Hàng trăm giải thưởng giá trị đã được trao cho những nỗ lực không ngừng nghỉ của đội ngũ chuyên viên trong 3 tháng qua...",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    date: "05 Tháng 5, 2024",
    title: "Cập nhật tính năng mới trên nền tảng My Agency v3.0",
    excerpt: "Hệ thống giờ đây cho phép chuyên viên tạo tour tham quan ảo 360 độ trực tiếp cho khách hàng từ xa...",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80",
  },
];

export function NewsDetailPage() {
  return (
    <main style={{ backgroundColor: colors.gray[50] }}>
      <Container>
          {/* Header - Category + Date */}
          <div className="pt-8 pb-6">
            <h1 
              className="mb-2"
              style={{
                color: colors.secondary.DEFAULT,
                fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                fontWeight: 900,
                fontSize: '40px',
              }}
            >
              TIN TỨC
            </h1>
            <p 
              style={{
                color: colors.gray[500],
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
              }}
            >
              April 10, 2026
            </p>
          </div>

          {/* Article Content */}
          <article className="pb-12">
            {/* Headline + Source */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
              <h2 
                style={{
                  color: colors.primary.DEFAULT,
                  fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                  fontWeight: 900,
                  fontSize: '48px',
                  lineHeight: 1.2,
                }}
              >
                HEADLINE
              </h2>
              <p 
                className="lg:pt-4"
                style={{
                  color: colors.gray[500],
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                }}
              >
                Trích nguồn:........
              </p>
            </div>

            {/* Intro Text */}
            <p 
              className="mb-8"
              style={{
                color: colors.neutral.foreground,
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: 1.7,
              }}
            >
              Thành lập năm 1971 tại Mỹ, ERA (Electronic Realty Associates) tự hào là một trong những thương hiệu môi giới bất động sản nhượng quyền hàng đầu thế giới, trực thuộc sự điều hành của Compass International Holdings - Công ty môi giới bất động sản nhà ở lớn nhất Hoa Kỳ.
            </p>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden mb-8">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" 
                alt="Featured"
                className="w-full h-auto object-cover"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Body Content */}
            <div 
              className="mb-12"
              style={{
                color: colors.neutral.foreground,
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: 1.7,
              }}
            >
              <p className="mb-4">
                Khu dịch vụ du lịch sinh thái, nghỉ dưỡng và giải trí tại bán đảo Tha La, hồ Dầu Tiếng đang được mờigọi đầu tư với tổng vốn hơn 18.000 tỷ đồng.
              </p>
              <p className="mb-4">
                UBND xã Dầu Tiếng, TP HCM vừa công bố thông tin mờigọi nhà đầu tư đăng ký thực hiện dự án Khu dịch vụ du lịch sinh thái, nghỉ dưỡng và giải trí tại bán đảo Tha La, hồ Dầu Tiếng. Dự án có quy mô sử dụng đất gần 207 ha, tổng vốn đầu tư dự kiến hơn 18.000 tỷ đồng.
              </p>
              <p>
                Theo định hướng, dự án có khả năng phục vụ khoảng 29.500 lượt khách mỗi ngày, trong đó khách lưu trú hơn 11.000 ngườii. Tiến độ thực hiện kéo dài 14 năm kể từ khi hoàn tất thủ tục lựa chọn nhà đầu tư và ký kết hợp đồng. Toàn bộ dự án dự kiến hoàn thành, nghiệm thu và đưa vào vận hành từ quý IV/2040.
              </p>
            </div>

            {/* Related News */}
            <div className="mb-12">
              <h3 
                className="mb-6"
                style={{
                  color: colors.secondary.DEFAULT,
                  fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                  fontWeight: 900,
                  fontSize: '32px',
                }}
              >
                Tin tức liên quan
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedNews.map((item) => (
                  <article 
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer group hover:shadow-md"
                  style={{ transition: 'box-shadow 0.2s ease' }}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        style={{ transition: 'transform 0.3s ease' }}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-5">
                      <p 
                        className="text-xs mb-2"
                        style={{ 
                          color: colors.gray[400],
                          fontFamily: 'var(--font-inter)',
                        }}
                      >
                        {item.date}
                      </p>
                      <h4 
                        className="mb-2 line-clamp-2 group-hover:text-primary transition-colors"
                        style={{ 
                          color: colors.neutral.foreground,
                          fontFamily: 'var(--font-inter)',
                          fontWeight: 700,
                          fontSize: '16px',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p 
                        className="text-sm line-clamp-3"
                        style={{ 
                          color: colors.gray[500],
                          fontFamily: 'var(--font-inter)',
                        }}
                      >
                        {item.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div>
              <h4 
                className="mb-4"
                style={{
                  color: colors.neutral.foreground,
                  fontFamily: 'var(--font-plus-jakarta)',
                  fontWeight: 700,
                  fontSize: '20px',
                }}
              >
                Chia sẻ
              </h4>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <img src="/shared/fb_icon.svg" alt="Facebook" className="w-10 h-10" />
                </a>
                {/* Twitter/X */}
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <img src="/shared/x_icon.svg" alt="X" className="w-10 h-10" />
                </a>
                {/* LinkedIn */}
                <a 
                  href="#" 
                  className="w-10 h-10 flex items-center justify-center transition-opacity hover:opacity-80"
                >
                  <img src="/shared/linkedin_icon.svg" alt="LinkedIn" className="w-10 h-10" />
                </a>
              </div>
            </div>
          </article>
      </Container>
    </main>
  );
}
