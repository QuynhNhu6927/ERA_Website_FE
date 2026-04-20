import { colors } from "@/lib/theme";
import type { Course } from "./types";
import { CourseCardWide } from "./CourseCardWide";

export const procoachingCourses: Course[] = [
  {
    id: 11,
    titleParts: [
      { text: "Listing presentation & listing độc quyền trong thứ cấp", color: colors.primary.DEFAULT },
    ],
    topColor: colors.primary.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          "Bí quyết tạo sự khác biệt, nâng tầm chuyên môn và bứt phá doanh thu thông qua nghệ thuật thuyết trình và quản lý rổ hàng độc quyền.",
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Sở hữu kỹ năng thuyết trình Listing (Listing Presentation) sắc bén, ấn tượng.",
          "Nắm giữ công thức quản lý và phát triển Listing độc quyền.",
          "Xây dựng tư duy làm nghề bài bản, chuyên nghiệp.",
        ],
      },
    ],
    target: "Tất cả Agent.",
    btnVariant: "secondary",
    image: "/academy/aca_courses_int_02.png",
  },
  {
    id: 12,
    titleParts: [
      { text: "Phân tích những yếu tố quan trọng tăng tỷ lệ chuyển đổi và kỹ thuật gây ảnh hưởng để chốt deal", color: colors.primary.navy.DEFAULT },
    ],
    topColor: colors.primary.navy.DEFAULT,
    headingColor: colors.primary.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          'Khóa học nâng cao giúp Agent "hóa giải" các deal khó bằng nghệ thuật thấu hiểu tâm lý và kỹ thuật dẫn dắt khách hàng.',
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Nhận diện chính xác các yếu tố thôn chốt thúc đẩy khách hàng xuống tiền.",
          "Thành thạo kỹ thuật gây ảnh hưởng, chuyển đổi khách hàng quan tâm thành khách mua.",
          "Tự tin làm chủ mọi tình huống giao tiếp với đa dạng tệp khách hàng.",
        ],
      },
    ],
    target: "Tất cả Agent.",
    btnVariant: "primary",
    image: "/academy/aca_courses_int_02.png",
  },
];

export function ProcoachingTab() {
  return (
    <div className="flex flex-col gap-6">
      {procoachingCourses.map((course, index) => (
        <CourseCardWide
          key={course.id}
          course={course}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
