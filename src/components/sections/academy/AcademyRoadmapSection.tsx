import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/theme";

const roadmapColors = [
  colors.primary.navy.DEFAULT,
  colors.tertiary.orange.DEFAULT,
  colors.primary.navy.DEFAULT,
  colors.primary.DEFAULT,
];

const roadmapCards = [
  {
    id: 1,
    title: "ONBOARDING",
    description: "Nền tảng vững chắc cho khởi đầu bứt phá tại ERA Vietnam.",
    bgColor: roadmapColors[0],
    icon: "/academy/aca_onboard_icon.svg",
  },
  {
    id: 2,
    title: "EXPERT SERIES",
    description: "Chuỗi đào tạo chuyên sâu về kỹ năng và kiến thức thị trường.",
    bgColor: roadmapColors[1],
    icon: "/academy/aca_series_icon.svg",
  },
  {
    id: 3,
    title: "PRO COACHING",
    description: "Kèm cặp 1:1 từ những thủ lĩnh thực chiến hàng đầu.",
    bgColor: roadmapColors[2],
    icon: "/academy/aca_coach_icon.svg",
  },
  {
    id: 4,
    title: "REALTY TALK",
    description: "Giao lưu, chia sẻ kinh nghiệm thực tế từ các chuyên gia.",
    bgColor: roadmapColors[3],
    icon: "/academy/aca_talk_icon.svg",
  },
];

export function AcademyRoadmapSection() {
  return (
    <Section padding="sm" bg="white">
        {/* Section Title */}
        <h2 
          className="text-center mb-10"
          style={{
            color: colors.primary.DEFAULT,
            fontWeight: 800,
            fontSize: '36px',
          }}
        >
          LỘ TRÌNH CHI TIẾT
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roadmapCards.map((card) => (
            <article 
              key={card.id}
              className="rounded-3xl p-6 cursor-pointer hover:shadow-xl hover:scale-[1.03] transition-all duration-200"
              style={{ 
                backgroundColor: card.bgColor,
              }}
            >
              {/* Icon Container */}
              <div 
                className="w-14 h-14 rounded-3xl flex items-center justify-center mb-5"
                style={{ backgroundColor: colors.neutral.white }}
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
              </div>
              
              {/* Title */}
              <h3 
                className="text-white mb-3"
                style={{
                  fontWeight: 700,
                  fontSize: '20px',
                }}
              >
                {card.title}
              </h3>
              
              {/* Description */}
              <p 
                className="text-white/90"
                style={{
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: 1.5,
                }}
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>
    </Section>
  );
}
