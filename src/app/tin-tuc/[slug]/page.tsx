import { NewsDetailPage } from "@/components/sections/news";

// Required for static export with dynamic routes
export function generateStaticParams() {
  return [
    { slug: "tin-thi-truong" },
    { slug: "tin-du-an" },
    { slug: "era-news" },
    { slug: "e-magazine" },
  ];
}

export default function NewsDetail() {
  return <NewsDetailPage />;
}
