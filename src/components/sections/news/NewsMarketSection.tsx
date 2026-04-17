import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { colors, withOpacity } from "@/lib/theme";

const sideNews = [
  {
    id: 1,
    title: "Quy hoạch hạ tầng mới tại khu Đông TP.HCM",
    time: "12 giờ trước",
    readTime: "5 phút đọc",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Dòng tiền đầu tư đang dồn về phân khúc nghỉ dưỡng",
    time: "1 ngày trước",
    readTime: "4 phút đọc",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Luật Đất Đai sửa đổi: Những điểm mới cần lưu ý",
    time: "2 ngày trước",
    readTime: "8 phút đọc",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  },
];

const featuredNews = {
  title: "Tác động của lãi suất ngân hàng đến thị trường Bất Động Sản 2024",
  excerpt: "Phân tích chuyên sâu về sự dịch chuyển dòng vốn và những dự báo mới nhất từ các chuyên gia kinh tế hàng đầu.",
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
};

export function NewsMarketSection() {
  return (
    <section className="py-12" style={{ backgroundColor: colors.gray[50] }}>
      <Container>
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-8">
          <div 
            className="w-1 h-6 rounded-full"
            style={{ backgroundColor: colors.primary.DEFAULT }}
          />
          <h2 
            style={{
              color: colors.primary.DEFAULT,
              fontFamily: 'var(--font-plus-jakarta-sans), system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '30px',
            }}
          >
            Tin Thị Trường
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left - Featured News (3 cols) */}
          <div className="lg:col-span-3">
            <Link href="/news/tin-thi-truong" className="block">
            <div className="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-[1.01] will-change-transform">
              <Image
                src={featuredNews.image}
                alt={featuredNews.title}
                fill
                className="object-cover"
                sizes="100vw"
                loading="eager"
                priority
              />
              
              {/* Gradient Overlay */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(to top, ${withOpacity(colors.neutral.black, 0.85)} 0%, ${withOpacity(colors.neutral.black, 0.4)} 40%, ${withOpacity(colors.neutral.black, 0.1)} 100%)` 
                }}
              />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div 
                  className="inline-flex px-4 py-1.5 rounded-full text-xs font-semibold text-white mb-3"
                  style={{ backgroundColor: colors.primary.DEFAULT }}
                >
                  TIÊU ĐIỂM
                </div>
                <h3 
                  className="text-white mb-3 leading-tight"
                  style={{ 
                    fontFamily: 'var(--font-plus-jakarta)',
                    fontWeight: 700,
                    fontSize: '30px',
                  }}
                >
                  {featuredNews.title}
                </h3>
                <p 
                  className="text-white/80 line-clamp-2"
                  style={{ 
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: '16px',
                  }}
                >
                  {featuredNews.excerpt}
                </p>
              </div>
            </div>
            </Link>
          </div>

          {/* Right - News List (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4 h-full">
            {sideNews.map((item) => (
              <article
                key={item.id}
                className="flex gap-4 cursor-pointer group bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-200 flex-1"
              >
                <div className="relative w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 py-1">
                  <h3
                    className="mb-2 line-clamp-2 group-hover:text-primary transition-colors"
                    style={{
                      color: colors.neutral.foreground,
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 700,
                      fontSize: '18px',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: colors.gray[400],
                      fontFamily: 'var(--font-inter)',
                      fontWeight: 400,
                      fontSize: '14px',
                    }}
                  >
                    {item.time} • {item.readTime}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
