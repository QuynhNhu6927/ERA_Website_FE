import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

interface CultureRowProps {
  tag: string;
  titleRed: string;
  titleNavy: string;
  bullets: string[];
  mainImage: string;
  overlapImage: string;
  reverse?: boolean;
  overlapClassName?: string;
}

function CultureRow({
  tag,
  titleRed,
  titleNavy,
  bullets,
  mainImage,
  overlapImage,
  reverse = false,
  overlapClassName = "",
}: CultureRowProps) {
  const imageBlock = (
    <div className="relative w-full max-w-[540px] mx-auto lg:mx-0">
      <Image
        src={mainImage}
        alt={tag}
        width={540}
        height={360}
        className="rounded-2xl object-cover w-full h-[260px] md:h-[340px] border-4 border-white shadow-lg"
      />
      <Image
        src={overlapImage}
        alt={`${tag} detail`}
        width={220}
        height={150}
        className={`rounded-xl object-cover absolute w-[45%] md:w-[200px] h-auto aspect-[4/3] shadow-xl border-4 border-white ${
          reverse
            ? "-bottom-5 -left-5 md:-bottom-8 md:-left-8"
            : "-bottom-5 -right-5 md:-bottom-8 md:-right-8"
        } ${overlapClassName}`}
      />
    </div>
  );

  const textBlock = (
    <div className="flex flex-col justify-center">
      <span className="inline-block self-start bg-[#C8102E] text-white text-sm font-semibold px-6 py-1.5 rounded-md uppercase tracking-wide">
        {tag}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
        <span className="text-[#C8102E]">{titleRed}</span>
        <span className="text-[#0C0C44]">{titleNavy}</span>
      </h3>
      <ul className="mt-5 space-y-3 text-gray-700 text-[15px] leading-relaxed">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="text-[#C8102E] text-lg leading-none mt-0.5 shrink-0">
              •
            </span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
      <div className={reverse ? "lg:order-2" : "lg:order-1"}>{imageBlock}</div>
      <div className={reverse ? "lg:order-1" : "lg:order-2"}>{textBlock}</div>
    </div>
  );
}

export function JoinCultureSection() {
  return (
    <Section padding="md" bg="white">
      <Container size="lg">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            <span className="text-[#0C0C44]">Văn hoá & Môi trường</span>
            <br className="hidden sm:block" />
            <span className="text-[#0C0C44]"> làm việc </span>
            <span className="text-[#C8102E]">tại ERA</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Khám phá hệ sinh thái làm việc tiêu chuẩn quốc tế, nơi mỗi cá nhân
            được tôn trọng, gắn kết và tạo mọi điều kiện để bứt phá giới hạn bản
            thân.
          </p>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-16 lg:gap-28">
          {/* Row 1: Môi trường — ảnh trái, text phải */}
          <CultureRow
            tag="Môi trường"
            titleRed="Năng động &"
            titleNavy=" Chuyên nghiệp"
            bullets={[
              "Làm việc trong không gian mở tiêu chuẩn quốc tế, khơi nguồn cảm hứng để bạn tự do phát huy tối đa năng lực cá nhân.",
              "Môi trường không khoảng cách giúp mọi ý tưởng đều được lắng nghe.",
            ]}
            mainImage="/join/join_envi.jpg"
            overlapImage="/join/join_envi_2.jpg"
          />

          {/* Row 2: Văn hóa — text trái, ảnh phải */}
          <CultureRow
            tag="Văn hoá"
            titleRed="Teamwork &"
            titleNavy=" Chủ động"
            bullets={[
              'Đề cao tinh thần "One ERA" gắn kết. Không có sự đơn độc, chúng tôi cùng nhau chủ động bứt phá và chinh phục mọi mục tiêu.',
              "Sự thành công của mỗi cá nhân là niềm tự hào của tập thể.",
            ]}
            mainImage="/academy/aca_courses_int1.jpg"
            overlapImage="/join/join_envi_4.jpg"
            reverse
          />

          {/* Row 3: Cách làm — ảnh trái, text phải */}
          <CultureRow
            tag="Cách làm"
            titleRed="Công nghệ"
            titleNavy=" hỗ trợ tối ưu"
            bullets={[
              "Làm việc thông minh thay vì làm việc chăm chỉ.",
              "Ứng dụng hệ sinh thái số hóa toàn diện giúp Agent rút ngắn thời gian chốt deal, quản lý giỏ hàng và khách hàng mọi lúc mọi nơi.",
            ]}
            mainImage="/join/join_tech.png"
            overlapImage="/academy/aca_myera.png"
            overlapClassName="bg-white object-contain"
          />
        </div>
      </Container>
    </Section>
  );
}
