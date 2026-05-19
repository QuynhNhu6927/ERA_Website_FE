"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";
import { X } from "lucide-react";

const RichEditor = dynamic(
  () => import("@/components/shared/RichEditor"),
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

export interface NewsFormData {
  id?: number;
  title: string;
  category: string;
  summary: string;
  content: string;
  image?: string;
}

interface Props {
  initialData?: NewsFormData;
  onSave: (data: NewsFormData) => void;
  onCancel: () => void;
}

export function NewsManageForm({ initialData, onSave, onCancel }: Props) {
  const [form, setForm] = useState<NewsFormData>(
    initialData ?? {
      title: "",
      category: "",
      summary: "",
      content: "",
      image: "",
    }
  );
  const [imagePreview, setImagePreview] = useState<string>(initialData?.image || "");

  const update = <K extends keyof NewsFormData>(key: K, value: NewsFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      setForm((prev) => ({ ...prev, image: url }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
  };

  const inputBaseClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 transition-colors outline-none focus:border-gray-400";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xl font-black"
          style={{ color: colors.primary.navy.DEFAULT }}
        >
          {initialData ? "Chỉnh sửa tin tức" : "Tạo tin tức mới"}
        </h2>
        <button
          onClick={onCancel}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          {/* Title + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Tiêu đề bài viết <span style={{ color: colors.primary.DEFAULT }}>*</span>
              </label>
              <input
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="Nhập tiêu đề bài báo..."
                className={inputBaseClass}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Danh mục <span style={{ color: colors.primary.DEFAULT }}>*</span>
              </label>
              <div className="relative">
                <select
                  value={form.category}
                  onChange={(e) => update("category", e.target.value)}
                  className={`${inputBaseClass} appearance-none cursor-pointer`}
                  required
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
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Ảnh đại diện
            </label>
            {imagePreview ? (
              <div className="relative inline-block rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full max-w-[200px] h-auto object-cover"
                />
                <button
                  type="button"
                  onClick={() => { setImagePreview(""); setForm((prev) => ({ ...prev, image: "" })); }}
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
                  title="Xoá ảnh"
                >
                  <X size={14} />
                </button>
              </div>
            ) : (
              <label className="flex flex-col items-center justify-center gap-2 w-full h-32 rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-gray-400"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line x1="12" y1="3" x2="12" y2="15" />
                </svg>
                <span className="text-sm text-gray-500">
                  Kéo thả ảnh vào đây hoặc{" "}
                  <span className="font-semibold" style={{ color: colors.primary.DEFAULT }}>chọn file</span>
                </span>
                <span className="text-xs text-gray-400">Hỗ trợ: JPG, PNG, WEBP</span>
                <input
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleImageChange}
                />
              </label>
            )}
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tóm tắt bài viết
            </label>
            <textarea
              value={form.summary}
              onChange={(e) => update("summary", e.target.value)}
              placeholder="Nhập tóm tắt ngắn gọn nội dung bài viết..."
              rows={3}
              className={`${inputBaseClass} resize-none`}
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Nội dung chi tiết <span style={{ color: colors.primary.DEFAULT }}>*</span>
            </label>
            <div className="rounded-lg border border-gray-200 overflow-hidden focus-within:border-gray-400 transition-colors">
              <RichEditor value={form.content} onChange={(val) => update("content", val)} />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3 pt-4">
          <Button type="button" variant="primary" size="sm" className="px-6">
            Đăng
          </Button>
          <div className="flex items-center gap-3">
            <Button type="button" variant="outline" size="sm" className="px-6 bg-white" onClick={onCancel}>
              Huỷ
            </Button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md px-6 py-2 text-sm bg-white border-2"
              style={{ borderColor: colors.primary.navy.DEFAULT, color: colors.primary.navy.DEFAULT }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.primary.navy.DEFAULT;
                e.currentTarget.style.color = colors.neutral.white;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.neutral.white;
                e.currentTarget.style.color = colors.primary.navy.DEFAULT;
              }}
            >
              <svg
                width="16"
                height="16"
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
              {initialData ? "Lưu thay đổi" : "Lưu"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
