"use client";

import { useState } from "react";
import { colors } from "@/lib/theme";
import { Button } from "@/components/ui/Button";
import { Pencil, Trash2, Plus, LayoutGrid, Table as TableIcon } from "lucide-react";

const CATEGORY_LABELS: Record<string, string> = {
  "tin-thi-truong": "Tin thị trường",
  "tin-era": "Tin ERA",
  "tin-bao-chi": "Tin báo chí",
  "tin-du-an": "Tin dự án",
};

export interface NewsItem {
  id: number;
  title: string;
  category: string;
  summary: string;
  content: string;
  date: string;
  image?: string;
}

interface Props {
  items: NewsItem[];
  onEdit: (item: NewsItem) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}

export function NewsManageList({ items, onEdit, onDelete, onAdd }: Props) {
  const [viewMode, setViewMode] = useState<"table" | "card">("table");

  const placeholderImg = "/news/news_placeholder.webp";

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2
            className="text-xl font-black"
            style={{ color: colors.primary.navy.DEFAULT }}
          >
            Danh sách tin tức
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Tổng cộng {items.length} bài viết
          </p>
        </div>
        <div className="flex items-center gap-3">
          {/* View Toggle */}
          <div className="inline-flex items-center rounded-lg border border-gray-200 bg-white overflow-hidden">
            <button
              onClick={() => setViewMode("table")}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === "table"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
              title="Dạng bảng"
            >
              <TableIcon size={16} />
              <span className="hidden sm:inline">Bảng</span>
            </button>
            <button
              onClick={() => setViewMode("card")}
              className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors ${
                viewMode === "card"
                  ? "bg-gray-100 text-gray-900"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
              title="Dạng thẻ"
            >
              <LayoutGrid size={16} />
              <span className="hidden sm:inline">Thẻ</span>
            </button>
          </div>
          <Button variant="primary" size="sm" className="gap-2" onClick={onAdd}>
            <Plus size={16} /> Tạo bài viết mới
          </Button>
        </div>
      </div>

      {/* Table View */}
      {viewMode === "table" && (
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50/50">
                  <th className="text-left font-semibold text-gray-600 px-5 py-3.5 w-16">
                    ID
                  </th>
                  <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                    Bài viết
                  </th>
                  <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                    Danh mục
                  </th>
                  <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                    Ngày đăng
                  </th>
                  <th className="text-right font-semibold text-gray-600 px-5 py-3.5 w-28">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50/40 transition-colors">
                    <td className="px-5 py-4 text-gray-500 font-mono">
                      #{item.id}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={item.image || placeholderImg}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-semibold text-gray-900 line-clamp-2">
                          {item.title}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md text-white"
                        style={{ backgroundColor: colors.primary.DEFAULT }}
                      >
                        {CATEGORY_LABELS[item.category] || item.category}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-gray-600 whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          isIconOnly
                          size="md"
                          onClick={() => onEdit(item)}
                          title="Chỉnh sửa"
                        >
                          <Pencil size={15} className="text-gray-500" />
                        </Button>
                        <Button
                          variant="ghost"
                          isIconOnly
                          size="md"
                          onClick={() => onDelete(item.id)}
                          title="Xoá"
                          className="hover:!bg-red-50"
                        >
                          <Trash2 size={15} className="text-red-500" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
                {items.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-12 text-center text-gray-400"
                    >
                      Chưa có bài viết nào. Hãy bấm "Tạo bài viết mới" để thêm.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Card View */}
      {viewMode === "card" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative h-44 bg-gray-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image || placeholderImg}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md text-white"
                  style={{ backgroundColor: colors.primary.DEFAULT }}
                >
                  {CATEGORY_LABELS[item.category] || item.category}
                </span>
              </div>
              {/* Content */}
              <div className="p-5 space-y-3">
                <h3 className="font-bold text-gray-900 line-clamp-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">{item.summary}</p>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-gray-400">{item.date}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onEdit(item)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      title="Chỉnh sửa"
                    >
                      <Pencil size={15} className="text-gray-500" />
                    </button>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                      title="Xoá"
                    >
                      <Trash2 size={15} className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-400 bg-white rounded-xl border border-gray-200">
              Chưa có bài viết nào. Hãy bấm "Tạo bài viết mới" để thêm.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
