import { colors } from "@/lib/theme";
import type { Course } from "./types";
import { CourseCardWide } from "./CourseCardWide";

export const internationalCourses: Course[] = [
  {
    id: 13,
    titleParts: [
      { text: "Team ERA University", color: colors.primary.DEFAULT },
    ],
    topColor: colors.primary.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          "Hệ thống đào tạo chuyên sâu và phát triển nghề nghiệp tiêu chuẩn quốc tế của ERA Real Estate (Mỹ), bao trùm mọi khía cạnh từ công nghệ, công cụ, lập kế hoạch kinh doanh cho đến kỹ năng chốt bất động sản (listings). Các số liệu thực tế đã chứng minh những môi giới tham gia đào tạo tại Team ERA University đạt được kết quả vượt trội: tăng 30% danh sách niêm yết (listings), tăng 28% số lượng giao dịch chốt thành công và đạt doanh số bán hàng cao hơn 35% so với những ngườI không tham gia.",
      },
    ],
    target: "Tất cả Agent.",
    btnVariant: "secondary",
    image: "/academy/aca_courses_int1.jpg",
  },
  {
    id: 14,
    titleParts: [
      { text: "Ultimate Sales Warrior Camp (USWC)", color: colors.primary.navy.DEFAULT },
    ],
    topColor: colors.primary.navy.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          'Cơ hội vươn tầm quốc tế với chương trình huấn luyện chuyên sâu 3 ngày từ ERA Singapore, dẫn dắt trực tiếp bởi CEO Marcus Chu và đội ngũ lãnh đạo cấp cao ERA Singapore. Khóa học sẽ giúp bạn lột xác bản thân, kiến tạo tư duy chiến binh và bứt phá hiệu suất bán hàng thông qua triết lý "Khát vọng - Niềm tin - Hành động".',
      },
    ],
    target: "Tất cả Agent.",
    btnVariant: "primary",
    image: "/academy/aca_courses_int2.png",
  },
];

export function InternationalTab() {
  return (
    <div className="flex flex-col gap-6">
      {internationalCourses.map((course, index) => (
        <CourseCardWide
          key={course.id}
          course={course}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
