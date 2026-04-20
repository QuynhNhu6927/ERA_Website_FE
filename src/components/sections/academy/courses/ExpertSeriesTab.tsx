import { colors } from "@/lib/theme";
import type { Course } from "./types";
import { CourseCard } from "./CourseCard";

export const expertCourses: Course[] = [
  {
    id: 5,
    titleParts: [{ text: "SIÊU AGENT", color: colors.tertiary.orange.DEFAULT }],
    headingColor: colors.primary.DEFAULT,
    topColor: colors.primary.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          "Lộ trình đào tạo độc quyền từ A-Z giúp Agent xây dựng sự nghiệp dài hạn và tạo ra thu nhập thực tế sớm nhất từ mảng Thứ cấp.",
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Tiếp thu kiến thức chuẩn hóa từ cơ bản đến chuyên sâu.",
          "Học hỏi kinh nghiệm và nhận hỗ trợ sát sao từ các chuyên gia thực chiến.",
        ],
      },
    ],
    target: "Agent mới hoặc Agent muốn đi sâu vào thị trường Thứ cấp.",
    btnVariant: "primary",
    image: "/academy/aca_courses_ex.png",
  },
  {
    id: 6,
    titleParts: [
      { text: "Tối ưu hiệu suất bán hàng bằng bộ kịch bản bán hàng mẫu", color: colors.primary.DEFAULT },
    ],
    headingColor: colors.primary.navy.DEFAULT,
    topColor: colors.primary.navy.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          'Trang bị bộ "vũ khí" ngôn từ thực chiến giúp Agent làm chủ mọi cuộc hội thoại.',
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Luôn giữ thế chủ động, biết cách dẫn dắt khách hàng về mục tiêu cuối cùng.",
          "Kỹ năng phân loại khách hàng và đọc vị tâm lý để tung chiến thuật tiếp cận phù hợp.",
        ],
      },
    ],
    target: "Tất cả Agent.",
    btnVariant: "secondary",
  },
  {
    id: 7,
    titleParts: [
      { text: "Series quay - chụp - dựng bất động sản chuyên nghiệp", color: colors.primary.navy.DEFAULT },
    ],
    headingColor: colors.primary.DEFAULT,
    topColor: colors.primary.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          'Giải pháp giúp bạn tự sản xuất hình ảnh, video BĐS cực "nét" chỉ bằng smartphone, gia tăng tỷ lệ chốt deal nhờ hình ảnh thu hút.',
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Làm chủ công thức: Chuẩn bị - Bấm máy - Hậu kỳ - Thành phẩm.",
          "Thực chiến cầm tay chỉ việc ngay tại các dự án lớn.",
          "Nâng tầm thương hiệu cá nhân và giá trị của bất động sản.",
        ],
      },
    ],
    target: "Tất cả Agent.",
    btnVariant: "primary",
  },
  {
    id: 8,
    titleParts: [
      { text: "Phát triển kênh video marketing", color: colors.primary.DEFAULT },
    ],
    headingColor: colors.primary.navy.DEFAULT,
    topColor: colors.primary.navy.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          'Bắt kịp xu hướng truyền thông mạng xã hội, biến Video Ngắn thành "vũ khí tối thượng" để bùng nổ doanh số.',
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Nắm bắt thuật toán và cách tự xây dựng kênh video chuyên nghiệp.",
          "Sở hữu công thức sáng tạo nội dung giữ chân ngườI xem.",
          "Kỹ năng tối ưu SEO và chuyển đổi ngườI xem thành khách hàng tiềm năng.",
        ],
      },
    ],
    target: "Tất cả Agent.",
    btnVariant: "secondary",
  },
  {
    id: 9,
    titleParts: [
      { text: 'Kỹ năng tìm kiếm khách hàng "0" đồng', color: colors.primary.navy.DEFAULT },
    ],
    headingColor: colors.primary.DEFAULT,
    topColor: colors.primary.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          "Lộ trình Digital Marketing chiến lược giúp bạn thu hút khách hàng tự nhiên mà không cần đốt tiền chạy quảng cáo.",
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Làm chủ các nền tảng Social cá nhân (Facebook, TikTok,...) để tăng lượng traffic tự nhiên.",
          "Tự xây dựng tệp khách hàng riêng với tỷ lệ chuyển đổi cao.",
          "Biết cách đo lường và tối ưu hóa nội dung hiệu quả.",
        ],
      },
    ],
    target: "Tất cả Agent.",
    btnVariant: "primary",
  },
  {
    id: 10,
    titleParts: [
      { text: "Ứng dụng AI hiệu quả trong lĩnh vực bds", color: colors.primary.DEFAULT },
    ],
    headingColor: colors.primary.navy.DEFAULT,
    topColor: colors.primary.navy.DEFAULT,
    sections: [
      {
        heading: "Tổng quan",
        content:
          "Khám phá và tận dụng sức mạnh của Trí tuệ nhân tạo (AI) để tối ưu quy trình làm việc và tạo lợi thế cạnh tranh vượt trội.",
      },
      {
        heading: "Giá trị nhận được",
        bullets: [
          "Làm quen với các công cụ AI hỗ trợ đắc lực cho công việc môi giới.",
          "Ứng dụng AI vào Marketing, viết nội dung và phân tích thị trường.",
          "Rút ngắn thờigian làm việc, x2 hiệu suất cá nhân.",
        ],
      },
    ],
    target: "Tất cả Agent.",
    btnVariant: "secondary",
  },
];

export function ExpertSeriesTab() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {expertCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
