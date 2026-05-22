import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/tin-tuc/quan-ly", "/du-an/quan-ly", "/ung-tuyen/quan-ly"],
    },
    sitemap: "https://era.com.vn/sitemap.xml",
  };
}
