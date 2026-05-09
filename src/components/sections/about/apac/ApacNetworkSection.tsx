"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ApacNetworkSection() {
  return (
    <section className="pt-16 md:pt-32 pb-12 md:pb-24 bg-white">
      <Container size="lg">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-4xl font-bold leading-tight">
            <span style={{ color: colors.primary.navy.DEFAULT }}>
              MẠNG LƯỚI{" "}
            </span>
            <span style={{ color: colors.primary.DEFAULT }}>ERA{" "}</span>
            <span style={{ color: colors.primary.navy.DEFAULT }}>
              TẠI {" "}
            </span>
            <br />
            <span style={{ color: colors.primary.navy.DEFAULT }}>
              CHÂU Á - THÁI BÌNH DƯƠNG
            </span>
          </h2>
        </div>

        {/* Map image */}
        <div className="relative w-full md:max-w-4xl mx-auto aspect-[4/3] md:aspect-[16/9] md:rounded-2xl overflow-hidden">
          <Image
            src="/about/about_apac_map.webp"
            alt="ERA APAC Network Map"
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
          {/* Badge — mobile only, bottom-left of map */}
          <div
            className="md:hidden absolute bottom-2 left-0 px-3 py-2 rounded-xl text-white text-center shadow-lg"
            style={{ backgroundColor: colors.primary.DEFAULT }}
          >
            <span className="text-xl font-extrabold block">45 NĂM</span>
            <span className="text-[10px] font-medium uppercase leading-tight block mt-0.5">
              KIẾN TẠO TẠI<br />ĐẢO QUỐC SƯ TỬ
            </span>
          </div>
        </div>

        {/* Singapore info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center md:mt-[-120px] relative z-10">
            <div className="relative w-full max-w-[500px]">
              <div className="relative aspect-[4/3] md:aspect-[1/1] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <Image
                  src="/about/about_apac_img.webp"
                  alt="ERA Singapore"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>
              {/* Badge — desktop only, on Singapore image */}
              <div
                className="hidden md:block absolute top-0 right-0 translate-x-[40%] translate-y-[30%] px-5 py-3 rounded-lg text-white text-left shadow-lg"
                style={{ backgroundColor: colors.primary.DEFAULT }}
              >
                <span className="text-xl md:text-2xl font-extrabold block">
                  45 Năm
                </span>
                <span className="text-[10px] font-medium uppercase leading-tight block mt-0.5">
                  KIẾN TẠO TẠI QUỐC ĐẢO SƯ TỬ
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center lg:text-left">
            {/* Mobile title */}
            <h3 className="md:hidden text-2xl md:text-3xl font-bold">
              <span style={{ color: colors.primary.DEFAULT }}>ERA </span>
              <span style={{ color: colors.primary.navy.DEFAULT }}>SINGAPORE</span>
            </h3>
            {/* Desktop title — navy */}
            <h3
              className="hidden md:block text-2xl md:text-3xl font-bold"
              style={{ color: colors.primary.navy.DEFAULT }}
            >
              ERA SINGAPORE
            </h3>
            <p
              className="text-lg md:text-xl font-bold mt-1"
              style={{ color: colors.primary.DEFAULT }}
            >
              TRỤ SỞ CHÍNH KHU VỰC APAC
            </p>

            <div
              className="mt-5 px-4 md:px-0 md:pl-4 border-l-0 md:border-l-2 text-gray-600 text-[15px] leading-relaxed space-y-4"
              style={{ borderColor: colors.primary.DEFAULT }}
            >
              <p>
                Đóng vai trò là{" "}
                <strong style={{ color: colors.primary.DEFAULT }}>
                  &apos;trái tim&apos; điều hành
                </strong>{" "}
                của toàn khu vực Châu Á - Thái Bình Dương, ERA Singapore quy tụ
                gần 10.000 chuyên gia bất động sản sâu kinh nghiệm, đồng hành
                cùng sự phát triển nóng đóng của thị trường tại Quốc đảo Sư tử.
                Với hơn 45 năm hiện diện, ERA tại Quốc đảo Sư tử không ngừng mở
                rộng quy mô và hoàn thiện hệ thống vận hành.
              </p>
              <p>
                Trong hơn 3 thập kỷ gần đây, ERA giữ vị thế là một trong hai
                thương hiệu dẫn đầu tại Singapore, với đội ngũ nhân sự tên tuổi,
                mạng lưới phủ sóng và thành tích giao dịch vượt trội.
              </p>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 mt-8 md:mt-12">
          <Button asChild variant="primary" className="rounded-xl py-4 font-semibold w-full">
            <Link href="/ve-chung-toi/era-real-estate">
              Về ERA REAL ESTATE
            </Link>
          </Button>
          <Button asChild variant="secondary" className="rounded-xl py-4 font-semibold w-full">
            <Link href="/">
              Về ERA Vietnam
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
