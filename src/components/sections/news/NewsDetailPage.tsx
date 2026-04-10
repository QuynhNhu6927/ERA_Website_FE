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
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
                    className="bg-white rounded-2xl overflow-hidden shadow-sm cursor-pointer group transition-all duration-300 hover:shadow-md"
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#1877F2' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* Twitter */}
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#1DA1F2' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                {/* LinkedIn */}
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-opacity hover:opacity-80"
                  style={{ backgroundColor: '#0A66C2' }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </main>
  );
}
