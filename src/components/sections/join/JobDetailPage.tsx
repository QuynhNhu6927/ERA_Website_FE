"use client";

import Link from "next/link";
import Image from "next/image";
import { colors } from "@/lib/theme";
import { MapPin, Briefcase, CircleCheck, GraduationCap, Users, Gift, ArrowRight } from "lucide-react";

const description = [
  "Nghiên cứu thị trường và khách hàng để xây dựng chiến lược bán hàng phù hợp cho dự án đang triển khai; thiết lập thông điệp cốt lõi và lộ trình Marketing theo từng giai đoạn.",
  "Xây dựng bộ Sales Kit, POSM và các tài liệu chiến lược; đảm bảo tính nhất quán của thông điệp trên mọi kênh truyền thông.",
  "Làm việc trực tiếp với Media, Digital và các bộ phận khác để triển khai các chiến dịch Activation/Site tour nhằm hỗ trợ Agent tối đa.",
  "Giám sát tính chính xác tuyệt đối của thông tin dự án qua các ấn phẩm, hoạt động; nhận diện các rủi ro truyền thông có thể phát sinh.",
];

const requirements = [
  "Đại học chuyên ngành Marketing, Quản trị kinh doanh, Truyền thông, Các lĩnh vực liên quan.",
  "Ưu tiên ứng viên đã có kinh nghiệm làm việc lĩnh vực Bất động sản.",
  "Tư duy chủ động trong công việc, logic; có khả năng làm việc theo nhóm và độc lập.",
  "Sử dụng thành thạo các công cụ và trình bày (Excel, PowerPoint, Keynote...).",
];

const benefits = [
  { Icon: GraduationCap, title: "ERA Academy", desc: "Tiếp cận các khóa đào tạo chuẩn quốc tế từ ERA Real Estate (Mỹ), nâng tầm kỹ năng chuyên môn mỗi tháng." },
  { Icon: Users, title: "Văn Hóa Chia Sẻ", desc: "Môi trường làm việc năng động, lộ trình thăng tiến rõ ràng lên các vị trí Senior hoặc Lead trong vòng 1-2 năm." },
  { Icon: Gift, title: "Chế Độ Hấp Dẫn", desc: "Thưởng dự án vượt KPI, du lịch hằng năm cùng team và bảo hiểm sức khỏe cao cấp." },
];

const otherJobs = [
  { title: "Quản Lý Nhóm Kinh Doanh", location: "TP. HCM", type: "Toàn thờі gian" },
  { title: "Chuyên Viên Tư Vấn BĐS", location: "Đà Nẵng", type: "Toàn thờі gian" },
  { title: "Thực Tập Sinh Thiết Kế", location: "TP. HCM", type: "Thực tập" },
  { title: "Thực Tập Sinh Thiết Kế", location: "TP. HCM", type: "Thực tập" },
  { title: "Thực Tập Sinh Thiết Kế", location: "TP. HCM", type: "Thực tập" },
];

export function JobDetailPage() {
  return (
    <main className="min-h-screen bg-white pt-16 md:pt-0">
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0">Trang chủ</Link>
          <span className="text-gray-400 flex-shrink-0">/</span>
          <Link href="/join" className="text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0">Join team ERA</Link>
          <span className="text-gray-400 flex-shrink-0">/</span>
          <span className="truncate font-bold" style={{ color: colors.primary.DEFAULT, fontSize: "14px" }}>Chuyên Viên Marketing Dự Án</span>
        </div>
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="mb-3" style={{ color: colors.primary.DEFAULT, fontWeight: 900, fontSize: "clamp(26px, 3.5vw, 40px)", lineHeight: 1.2 }}>
              Chuyên Viên Marketing Dự Án
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} style={{ color: colors.primary.DEFAULT }} /> TP. HCM
              </span>
              <span className="flex items-center gap-1.5">
                <Briefcase size={15} style={{ color: colors.primary.DEFAULT }} /> Cạnh tranh
              </span>
            </div>
          </div>
          <Link href="/join" className="flex-shrink-0 px-8 py-3 rounded-full text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all" style={{ backgroundColor: colors.primary.DEFAULT }}>
            Ứng Tuyển Ngay
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left */}
          <div className="lg:col-span-2 space-y-8">
            {/* Mô tả */}
            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary.navy.DEFAULT }}>Mô tả công việc</h2>
              <ul className="space-y-3">
                {description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CircleCheck size={18} className="flex-shrink-0 mt-0.5" style={{ color: colors.primary.DEFAULT }} />
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Yêu cầu */}
            <section>
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary.navy.DEFAULT }}>Yêu cầu công việc</h2>
              <ul className="space-y-3">
                {requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CircleCheck size={18} className="flex-shrink-0 mt-0.5" style={{ color: colors.primary.DEFAULT }} />
                    <span className="text-sm text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Phúc lợi - 1 card xanh lớn */}
            <section className="pt-4">
              <h2 className="text-xl font-bold mb-4" style={{ color: colors.primary.navy.DEFAULT }}>Đặc Quyền & Phúc Lợi</h2>
              <div className="rounded-2xl p-5 space-y-4" style={{ backgroundColor: colors.secondary.DEFAULT }}>
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-white flex items-center justify-center">
                      <b.Icon size={18} style={{ color: colors.primary.navy.DEFAULT }} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-0.5">{b.title}</h3>
                      <p className="text-sm text-white/80 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Cơ hội khác */}
            <div className="rounded-2xl border border-gray-200 shadow-lg p-5 bg-white">
              <h3 className="font-bold text-sm uppercase tracking-wide mb-4" style={{ color: colors.gray[800] }}>
                CƠ HỘI KHÁC TẠI ERA
              </h3>
              <div className="space-y-0">
                {otherJobs.map((job, i) => (
                  <div key={i} className="py-3 border-b border-gray-200 last:border-0">
                    <h4 className="font-semibold text-sm mb-1" style={{ color: colors.primary.navy.DEFAULT }}>{job.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-1.5">
                      <span>{job.location}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>{job.type}</span>
                    </div>
                    <Link href="/join/chuyen-vien-marketing-du-an" className="inline-flex items-center gap-1 text-xs font-medium transition-colors" style={{ color: colors.primary.DEFAULT }}>
                      Xem chi tiết <ArrowRight size={12} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Tham gia ERA */}
            <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: colors.primary.navy.DEFAULT }}>
              <div className="p-5">
                <h3 className="font-bold text-white text-sm mb-1">Tham gia ERA Vietnam</h3>
                <p className="text-xs text-white/70 leading-relaxed">
                  Trở thành một phần của mạng lưới môi giới bất động sản hàng đầu thế giới.
                </p>
              </div>
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600"
                  alt="ERA Team"
                  fill
                  className="object-cover"
                  sizes="400px"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
