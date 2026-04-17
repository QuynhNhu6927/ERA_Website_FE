import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ToTopButton } from "@/components/layout/ToTopButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="vi" data-scroll-behavior="smooth" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <div className="flex-1 pt-0 md:pt-16">{children}</div>
        <Footer />
        <ToTopButton />
      </body>
    </html>
  );
}
