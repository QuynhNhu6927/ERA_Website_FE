"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";

const NewsRichEditor = dynamic(
  () => import("./NewsRichEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-3 border-gray-300 border-t-[#C8102E]" />
        <p className="mt-3 text-sm text-gray-400">Đang tải trình soạn thảo...</p>
      </div>
    ),
  }
);

const categories = [
  { value: "", label: "Chọn danh mục" },
  { value: "tin-thi-truong", label: "Tin thị trường" },
  { value: "tin-era", label: "Tin ERA" },
  { value: "tin-bao-chi", label: "Tin báo chí" },
  { value: "tin-du-an", label: "Tin dự án" },
];

export default function NewsManageSection() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    console.log({ title, category, summary, content });
    alert("Đã lưu (console.log) — chưa gọi API");
  };

  const inputBaseClass =
    "w-full rounded-xl border-2 border-gray-200 bg-white px-5 py-3.5 text-gray-800 placeholder:text-gray-400 transition-all duration-200 outline-none focus:border-[#C8102E] focus:ring-4 focus:ring-[#C8102E]/10";

  return (
    <section className="min-h-screen bg-gray-50/50 py-12 md:py-16">
      <Container size="md">
        {/* Header */}
        <div className="mb-10">
          <p
            className="text-sm font-semibold uppercase tracking-wider mb-2"
            style={{ color: colors.primary.DEFAULT }}
          >
            Quản trị nội dung
          </p>
          <h1
            className="text-3xl md:text-4xl font-bold"
            style={{ color: colors.primary.navy.DEFAULT }}
          >
            Quản lý tin tức
          </h1>
          <p className="mt-2 text-gray-500 max-w-xl">
            Tạo mới hoặc chỉnh sửa bài viết tin tức. Nội dung sẽ được hiển thị trên trang tin tức của website.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Card Header */}
          <div
            className="px-8 py-5 border-b border-gray-100 flex items-center gap-3"
            style={{ backgroundColor: colors.gray[50] }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: colors.primary.s20 }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke={colors.primary.DEFAULT}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </div>
            <div>
              <h2 className="font-semibold text-gray-800">Thông tin bài viết</h2>
              <p className="text-xs text-gray-400">Điền đầy đủ các trường bên dưới</p>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-8 py-8 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tiêu đề bài viết <span style={{ color: colors.primary.DEFAULT }}>*</span>
              </label>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Nhập tiêu đề bài báo..."
                className={inputBaseClass}
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Danh mục <span style={{ color: colors.primary.DEFAULT }}>*</span>
              </label>
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={`${inputBaseClass} appearance-none cursor-pointer`}
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tóm tắt bài viết
              </label>
              <textarea
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                placeholder="Nhập tóm tắt ngắn gọn nội dung bài viết..."
                rows={4}
                className={`${inputBaseClass} resize-none`}
              />
              <p className="mt-1.5 text-xs text-gray-400">
                Tóm tắt sẽ hiển thị ở trang danh sách tin tức.
              </p>
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nội dung chi tiết <span style={{ color: colors.primary.DEFAULT }}>*</span>
              </label>
              <div className="rounded-xl border-2 border-gray-200 overflow-hidden focus-within:border-[#C8102E] focus-within:ring-4 focus-within:ring-[#C8102E]/10 transition-all duration-200">
                <NewsRichEditor value={content} onChange={setContent} />
              </div>
            </div>
          </div>

          {/* Card Footer */}
          <div className="px-8 py-5 border-t border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">
              <span style={{ color: colors.primary.DEFAULT }}>*</span> Trường bắt buộc
            </p>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  setTitle("");
                  setCategory("");
                  setSummary("");
                  setContent("");
                }}
              >
                Làm mới
              </Button>
              <Button variant="primary" size="md" onClick={handleSave}>
                <svg
                  className="mr-2"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17 21 17 13 7 13 7 21" />
                  <polyline points="7 3 7 8 15 8" />
                </svg>
                Lưu bài viết
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
