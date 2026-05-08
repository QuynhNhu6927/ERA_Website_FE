"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { colors } from "@/lib/theme";

export function EraRealEstateHistorySection() {
  return (
    <section className="pt-16 md:pt-32 pb-12 md:pb-24 bg-gray-50">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: colors.primary.DEFAULT }}
            >
              Lịch sử hình thành
            </h2>

            <div
              className="mt-5 bg-transparent md:bg-white p-4 md:p-6 border-l-0 lg:border-l-2 text-gray-600 text-[15px] leading-relaxed space-y-4"
              style={{ borderColor: colors.primary.DEFAULT }}
            >
              <p>
                Thành lập{" "}
                <strong style={{ color: colors.primary.DEFAULT }}>
                  năm 1971 tại Mỹ
                </strong>
                , ERA (Electronic Realty Associates) tự hào là một trong những
                thương hiệu môi giới bất động sản nhượng quyền hàng đầu thế giới,
                trực thuộc sự điều hành của Compass International Holdings.
              </p>
              <p>
                Đúng với tên gọi{" "}
                <strong style={{ color: colors.primary.DEFAULT }}>
                  &apos;Electronic&apos;
                </strong>
                , ERA mang trong mình DNA công nghệ đột phá ngay từ những ngày
                đầu. Chúng tôi luôn tiên phong ứng dụng các giải pháp số hóa để
                nâng tầm dịch vụ, từ đó kiến tạo nên một mạng lưới khổng lồ hiện
                diện trên toàn cầu.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[280px] md:max-w-[340px]">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <Image
                  src="/about/about_era.jpg"
                  alt="ERA Real Estate History"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 340px"
                />
              </div>
              <Image
                src="/about/about_era_sign.png"
                alt="ERA Sign"
                width={240}
                height={96}
                className="absolute -top-2 -right-6 md:-right-18 w-[60%] md:w-[80%] h-auto object-contain pointer-events-none"
              />
              {/* Badge */}
              <div
                className="absolute bottom-0 left-0 translate-x-[-30%] translate-y-[-20%] md:translate-x-[-55%] md:translate-y-[-30%] px-4 py-3 md:px-5 md:py-4 rounded-xl text-white text-left shadow-lg"
                style={{ backgroundColor: colors.primary.navy.DEFAULT }}
              >
                <span className="text-[10px] md:text-[11px] font-normal opacity-80 block tracking-wider">
                  KHỞI NGUỒN TỪ
                </span>
                <span className="text-2xl md:text-3xl font-bold">1971</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
