"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { colors } from "@/lib/theme";
import { Button } from "@/components/ui/Button";
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

export type ProjectTag = "new" | "booking" | "selling";

export interface ProjectFormData {
  id?: number;
  name: string;
  tag: ProjectTag;
  location: string;
  image: string;
  investor: string;
  ownership: string;
  area: string;
  density: string;
  scale: string;
  startYear: string;
  progress: string;
  content: string;
}

const TAG_OPTIONS: { value: ProjectTag; label: string }[] = [
  { value: "new", label: "Dự án mới" },
  { value: "booking", label: "Nhận booking" },
  { value: "selling", label: "Đang mở bán" },
];

function ImageUploadField({
  preview,
  onChange,
  onClear,
}: {
  preview: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear: () => void;
}) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const syntheticEvent = {
        target: { files: e.dataTransfer.files },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <div>
      <label className="block text-sm font-semibold mb-1.5 text-gray-700">
        Ảnh đại diện
      </label>

      {preview ? (
        <div className="relative inline-block rounded-xl overflow-hidden border border-gray-200 bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={preview}
            alt="Preview"
            className="w-full max-w-[320px] h-auto object-cover"
          />
          <button
            type="button"
            onClick={onClear}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
            title="Xoá ảnh"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center gap-2 w-full h-40 rounded-xl border-2 border-dashed cursor-pointer transition-colors ${
            isDragging
              ? "border-red-400 bg-red-50"
              : "border-gray-300 bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <svg
            width="32"
            height="32"
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
            <span className="font-semibold" style={{ color: colors.primary.DEFAULT }}>
              chọn file
            </span>
          </span>
          <span className="text-xs text-gray-400">Hỗ trợ: JPG, PNG, WEBP</span>
          <input
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={onChange}
          />
        </label>
      )}
    </div>
  );
}

interface Props {
  initialData?: ProjectFormData;
  onSave: (data: ProjectFormData) => void;
  onCancel: () => void;
}

export function ProjectsManageForm({ initialData, onSave, onCancel }: Props) {
  const [form, setForm] = useState<ProjectFormData>(
    initialData ?? {
      name: "",
      tag: "new",
      location: "",
      image: "",
      investor: "",
      ownership: "Sổ hồng lâu dài",
      area: "",
      density: "",
      scale: "",
      startYear: "",
      progress: "Đang xây dựng",
      content: "",
    }
  );
  const [imagePreview, setImagePreview] = useState<string>(initialData?.image ?? "");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const update = <K extends keyof ProjectFormData>(key: K, value: ProjectFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImagePreview(url);
      update("image", url);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullLocation = [addressDetail, district, city].filter(Boolean).join(", ");
    onSave({ ...form, location: fullLocation });
  };

  const inputClass =
    "w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-400 transition-colors";
  const labelClass = "block text-sm font-semibold mb-1.5 text-gray-700";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2
          className="text-xl font-black"
          style={{ color: colors.primary.navy.DEFAULT }}
        >
          {initialData ? "Chỉnh sửa dự án" : "Tạo dự án mới"}
        </h2>
        <button
          onClick={onCancel}
          className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Row 1: Name + Tag */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Tên dự án *</label>
            <input
              type="text"
              className={inputClass}
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Ví dụ: Vinhomes Pearl Bay"
              required
            />
          </div>
          <div>
            <label className={labelClass}>Trạng thái *</label>
            <select
              className={inputClass}
              value={form.tag}
              onChange={(e) => update("tag", e.target.value as ProjectTag)}
            >
              {TAG_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Row 2: Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <label className={labelClass}>Thành phố *</label>
            <select
              className={inputClass}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            >
              <option value="">Chọn thành phố</option>
              <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
              <option value="Hà Nội">Hà Nội</option>
              <option value="Đà Nẵng">Đà Nẵng</option>
              <option value="Nha Trang">Nha Trang</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Quận / Phường *</label>
            <select
              className={inputClass}
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              required
            >
              <option value="">Chọn quận / phường</option>
              <option value="Quận 1">Quận 1</option>
              <option value="Quận 2">Quận 2</option>
              <option value="Quận 7">Quận 7</option>
              <option value="Thủ Đức">Thủ Đức</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Chi tiết địa chỉ *</label>
            <input
              type="text"
              className={inputClass}
              value={addressDetail}
              onChange={(e) => setAddressDetail(e.target.value)}
              placeholder="Số nhà, đường, khu phố..."
              required
            />
          </div>
        </div>

        {/* Row 3: Image Upload — Drag & Drop */}
        <ImageUploadField
          preview={imagePreview}
          onChange={handleImageChange}
          onClear={() => {
            setImagePreview("");
            update("image", "");
          }}
        />

        {/* Info section */}
        <div className="rounded-lg border border-gray-100 p-4 bg-gray-50/50">
          <h3
            className="text-sm font-bold uppercase tracking-wide mb-4"
            style={{ color: colors.primary.DEFAULT }}
          >
            Thông tin chi tiết
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div>
              <label className={labelClass}>Chủ đầu tư</label>
              <input
                type="text"
                className={inputClass}
                value={form.investor}
                onChange={(e) => update("investor", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Hình thức sở hữu</label>
              <input
                type="text"
                className={inputClass}
                value={form.ownership}
                onChange={(e) => update("ownership", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Tổng diện tích</label>
              <input
                type="text"
                className={inputClass}
                value={form.area}
                onChange={(e) => update("area", e.target.value)}
                placeholder="33.800 m²"
              />
            </div>
            <div>
              <label className={labelClass}>Mật độ xây dựng</label>
              <input
                type="text"
                className={inputClass}
                value={form.density}
                onChange={(e) => update("density", e.target.value)}
              />
            </div>
            <div>
              <label className={labelClass}>Quy mô phát triển</label>
              <input
                type="text"
                className={inputClass}
                value={form.scale}
                onChange={(e) => update("scale", e.target.value)}
                placeholder="3 Khu"
              />
            </div>
            <div>
              <label className={labelClass}>Thởi điểm khởi công</label>
              <input
                type="text"
                className={inputClass}
                value={form.startYear}
                onChange={(e) => update("startYear", e.target.value)}
                placeholder="2025"
              />
            </div>
          </div>
          <div className="mt-5">
            <label className={labelClass}>Tiến độ</label>
            <input
              type="text"
              className={inputClass}
              value={form.progress}
              onChange={(e) => update("progress", e.target.value)}
              placeholder="Đang xây dựng"
            />
          </div>
        </div>

        {/* Content Editor */}
        <div>
          <label className={labelClass}>Nội dung chi tiết</label>
          <div className="rounded-xl border-2 border-gray-200 overflow-hidden focus-within:border-gray-400 transition-all duration-200">
            <RichEditor
              value={form.content}
              onChange={(val) => update("content", val)}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 pt-4">
          <Button type="button" variant="primary" size="sm" className="px-6">
            Đăng
          </Button>
          <div className="flex items-center gap-3">
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="px-6 bg-white"
              onClick={onCancel}
            >
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
