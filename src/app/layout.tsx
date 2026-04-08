import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToTopButton } from "@/components/layout/ToTopButton";

export const metadata: Metadata = {
  title: "ERA Vietnam - Empower People, Transform Lives",
  description: "ERA Vietnam - Công ty Cổ phần Bất động sản ERA Việt Nam. Chuyên phân phối các dự án bất động sản cao cấp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <Header />
        <main className="flex-1 pt-16 md:pt-20">{children}</main>
        <Footer />
        <ToTopButton />
      </body>
    </html>
  );
}
