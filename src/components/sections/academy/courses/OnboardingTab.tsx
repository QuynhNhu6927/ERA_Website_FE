import { colors } from "@/lib/theme";
import type { Course } from "./types";
import { CourseCard } from "./CourseCard";

export const onboardingCourses: Course[] = [
  {
    id: 1,
    titleParts: [
      { text: "SUCCESS", color: colors.primary.DEFAULT },
      { text: "SEMINAR", color: colors.primary.navy.DEFAULT },
    ],
    headingColor: colors.primary.DEFAULT,
    topColor: colors.primary.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          "Khóa học định hướng đầu tiên, giúp bạn nắm bắt lộ trình phát triển sự nghiệp bền vững tại ERA Vietnam.",
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Định hướng rõ ràng con đường phát triển chuyên môn.",
          "Hòa nhập nhanh chóng vào văn hóa làm việc chuyên nghiệp.",
        ],
      },
    ],
    target: "Agent mới gia nhập.",
    btnVariant: "primary",
    titleImage: "/academy/aca_on_01.svg",
  },
  {
    id: 2,
    titleParts: [{ text: "INDUCTION", color: colors.primary.navy.DEFAULT }],
    headingColor: colors.primary.navy.DEFAULT,
    topColor: colors.primary.navy.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          "Bước đệm bắt buộc để trở thành Agent chính thức, giúp bạn làm chủ hệ sinh thái toàn diện của ERA Vietnam.",
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Thấu hiểu thương hiệu, mô hình kinh doanh và chính sách phí môi giới.",
          "Nắm bắt quy trình vận hành của các phòng ban trọng yếu (So cấp, Thợ cấp, Đào tạo).",
          "Khai thác tối đa bộ công cụ công nghệ độc quyền hỗ trợ bán hàng.",
        ],
      },
    ],
    target: "Agent mới ( Bắt buộc )",
    btnVariant: "secondary",
    titleImage: "/academy/aca_on_02.svg",
  },
  {
    id: 3,
    titleParts: [
      { text: "PROJECT MARKETING", color: colors.primary.DEFAULT },
      { text: "101", color: colors.primary.navy.DEFAULT },
    ],
    headingColor: colors.primary.DEFAULT,
    topColor: colors.primary.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          'Cung cấp hành trang kiến thức vững chắc để các "tân binh" tự tin chinh phục thị trường BĐS Sơ cấp.',
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Hiểu đúng bản chất thị trường & các thuật ngữ chuyên ngành",
          "Thành thạo kỹ năng tham gia & triển khai bán hàng tại các dự án mới",
        ],
      },
    ],
    target: "Agent mới ( Bắt buộc )",
    btnVariant: "primary",
    titleImage: "/academy/aca_on_03.svg",
  },
  {
    id: 4,
    titleParts: [
      { text: "RESALES", color: colors.primary.navy.DEFAULT },
      { text: "101", color: colors.primary.DEFAULT },
    ],
    headingColor: colors.primary.navy.DEFAULT,
    topColor: colors.primary.navy.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          "Mở khóa tiềm năng thu nhập từ thị trường BĐS Thứ cấp thông qua các kiến thức và kỹ năng nền tảng.",
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Nắm vững đặc thù của thị trường chuyển nhượng.",
          "Sở hữu kỹ năng tìm kiếm, tư vấn và triển khai giao dịch thứ cấp an toàn.",
        ],
      },
    ],
    target: "Agent mới ( Bắt buộc )",
    btnVariant: "secondary",
    titleImage: "/academy/aca_on_04.svg",
  },
];

export function OnboardingTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {onboardingCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
