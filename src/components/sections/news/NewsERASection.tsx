"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { colors, withOpacity } from "@/lib/theme";

const sideNews = [
  {
    id: 1,
    title: "Tin tức Châu Á Thái Bình Dương",
    time: "12 giờ trước",
    readTime: "5 phút đọc",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    flagCode: "cn",
  },
  {
    id: 2,
    title: "Tin tức ERA USA",
    time: "12 giờ trước",
    readTime: "5 phút đọc",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    flagCode: "us",
  },
  {
    id: 3,
    title: "Tin tức ERA Vietnam",
    time: "12 giờ trước",
    readTime: "5 phút đọc",
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80&w=800",
    flagCode: "vn",
  },
];

const featuredNews = {
  title: "ERA Vietnam công bố định hướng chiến lược Move Up 2026",
  excerpt: "Tập trung vào trải nghiệm khách hàng và số hóa toàn diện quy trình môi giới, khẳng định vị thế dẫn đầu thị trường.",
  image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80",
  flagCode: "vn",
};

export function NewsERASection() {
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
              fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
              fontWeight: 700,
              fontSize: '24px',
            }}
          >
            ERA News
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left - Featured News */}
          <div className="lg:col-span-3">
            <Link href="/news/era-news" className="block">
              <div className="relative h-[420px] rounded-2xl overflow-hidden cursor-pointer group transition-transform duration-300 hover:scale-[1.01] will-change-transform">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
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
                    PHÒNG TRUYỀN THÔNG
                  </div>
                  <h3
                    className="text-white mb-3 leading-tight"
                    style={{
                      fontFamily: 'var(--font-plus-jakarta), system-ui, sans-serif',
                      fontWeight: 700,
                      fontSize: '30px',
                    }}
                  >
                    ERA Vietnam{' '}
                    <span style={{ color: colors.cyanBrightDark }}>công bố định hướng chiến lược Move Up 2026</span>
                  </h3>
                  <div className="flex items-center justify-between gap-4">
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
                    <img
                      src={`https://flagcdn.com/w40/${featuredNews.flagCode}.png`}
                      alt=""
                      className="w-8 h-auto flex-shrink-0"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Right - Side News List */}
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
                <div className="flex-1 py-1 flex flex-col h-full">
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
                  <img
                    src={`https://flagcdn.com/w40/${item.flagCode}.png`}
                    alt=""
                    className="w-6 h-auto mt-auto pt-2"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
