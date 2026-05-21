"use client";

import { useState } from "react";
import { colors } from "@/lib/theme";
import { Button } from "@/components/ui/Button";
import { X, Plus, Minus } from "lucide-react";

const locations = [
  { value: "", label: "Chọn địa điểm" },
  { value: "TP. HCM", label: "TP. Hồ Chí Minh" },
  { value: "Hà Nội", label: "Hà Nội" },
  { value: "Đà Nẵng", label: "Đà Nẵng" },
  { value: "Nha Trang", label: "Nha Trang" },
];

const types = [
  { value: "", label: "Chọn loại hình" },
  { value: "Toàn thờі gian", label: "Toàn thờі gian" },
  { value: "Bán thờі gian", label: "Bán thờі gian" },
  { value: "Thực tập", label: "Thực tập" },
];

export interface JobFormData {
  id?: number;
  title: string;
  location: string;
  type: string;
  salary: string;
  description: string[];
  requirements: string[];
  benefits: string[];
}

interface Props {
  initialData?: JobFormData;
  onSave: (data: JobFormData) => void;
  onCancel: () => void;
}

function parseLines(val: string | string[] | undefined): string[] {
  if (Array.isArray(val)) return val.length ? val : [""];
  if (typeof val === "string" && val.trim()) return val.split("\\n").filter(Boolean);
  return [""];
}

function ListInputField({
  label,
  items,
  onChange,
  placeholder,
}: {
  label: string;
  items: string[];
  onChange: (vals: string[]) => void;
  placeholder?: string;
}) {
  const addLine = () => onChange([...items, ""]);
  const removeLine = (idx: number) => {
    if (items.length <= 1) return;
    const next = items.filter((_, i) => i !== idx);
    onChange(next);
  };
  const updateLine = (idx: number, val: string) => {
    const next = [...items];
    next[idx] = val;
    onChange(next);
  };

  const inputBase =
    "flex-1 rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 transition-colors outline-none focus:border-gray-400";

  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <label className="text-sm font-semibold text-gray-700">{label}</label>
        <button
          type="button"
          onClick={addLine}
          className="inline-flex items-center gap-1 text-xs font-medium rounded-md px-2 py-1 transition-colors"
          style={{ color: colors.primary.DEFAULT, backgroundColor: "#fee2e2" }}
          title="Thêm dòng"
        >
          <Plus size={13} /> Thêm dòng
        </button>
      </div>
      <div className="space-y-2">
        {items.map((val, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <input
              type="text"
              className={inputBase}
              value={val}
              onChange={(e) => updateLine(idx, e.target.value)}
              placeholder={placeholder || `Dòng ${idx + 1}`}
            />
            <button
              type="button"
              onClick={() => removeLine(idx)}
              disabled={items.length <= 1}
              className="shrink-0 p-2 rounded-lg border border-gray-200 text-gray-400 hover:text-red-500 hover:border-red-200 hover:bg-red-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              title="Xoá dòng"
            >
              <Minus size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ApplyManageForm({ initialData, onSave, onCancel }: Props) {
  const [form, setForm] = useState<JobFormData>({
    title: initialData?.title ?? "",
    location: initialData?.location ?? "",
    type: initialData?.type ?? "",
    salary: initialData?.salary ?? "",
    description: parseLines(initialData?.description),
    requirements: parseLines(initialData?.requirements),
    benefits: parseLines(initialData?.benefits),
  });

  const update = <K extends keyof JobFormData>(key: K, value: JobFormData[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...form, id: initialData?.id });
  };

  const inputClass =
    "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 transition-colors outline-none focus:border-gray-400";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black" style={{ color: colors.primary.navy.DEFAULT }}>
          {initialData ? "Chỉnh sửa tin tuyển dụng" : "Thêm tin tuyển dụng"}
        </h2>
        <Button variant="ghost" isIconOnly size="sm" onClick={onCancel}>
          <X size={20} className="text-gray-500" />
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-5">
          {/* Row 1: Title + Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                Tên công việc <span style={{ color: colors.primary.DEFAULT }}>*</span>
              </label>
              <input
                type="text"
                className={inputClass}
                value={form.title}
                onChange={(e) => update("title", e.target.value)}
                placeholder="Ví dụ: Chuyên Viên Marketing Dự Án"
                required
              />
            </div>
            <div>
              <label className={labelClass}>
                Địa điểm <span style={{ color: colors.primary.DEFAULT }}>*</span>
              </label>
              <select
                className={`${inputClass} appearance-none cursor-pointer`}
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                required
              >
                {locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Type + Salary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className={labelClass}>
                Loại hình <span style={{ color: colors.primary.DEFAULT }}>*</span>
              </label>
              <select
                className={`${inputClass} appearance-none cursor-pointer`}
                value={form.type}
                onChange={(e) => update("type", e.target.value)}
                required
              >
                {types.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass}>Mức lương</label>
              <input
                type="text"
                className={inputClass}
                value={form.salary}
                onChange={(e) => update("salary", e.target.value)}
                placeholder="Ví dụ: Cạnh tranh, 15-20 triệu..."
              />
            </div>
          </div>

          {/* Row 3: Description list */}
          <ListInputField
            label="Mô tả công việc"
            items={form.description}
            onChange={(vals) => update("description", vals)}
            placeholder="Nhập mô tả..."
          />

          {/* Row 4: Requirements list */}
          <ListInputField
            label="Yêu cầu công việc"
            items={form.requirements}
            onChange={(vals) => update("requirements", vals)}
            placeholder="Nhập yêu cầu..."
          />

        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-3 pt-6">
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
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
