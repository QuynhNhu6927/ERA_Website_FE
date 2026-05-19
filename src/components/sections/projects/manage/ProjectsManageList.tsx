"use client";

import { useState } from "react";
import Image from "next/image";
import { colors } from "@/lib/theme";
import { Button } from "@/components/ui/Button";
import { Pencil, Trash2, Plus, LayoutGrid, Table as TableIcon } from "lucide-react";
import { ProjectFormData, ProjectTag } from "./ProjectsManageForm";

const TAG_LABELS: Record<ProjectTag, { label: string; color: string }> = {
  new: { label: "Dự án mới", color: colors.secondary.DEFAULT },
  booking: { label: "Nhận booking", color: colors.primary.DEFAULT },
  selling: { label: "Đang mở bán", color: colors.tertiary.purple.DEFAULT },
};

interface Props {
  projects: ProjectFormData[];
  onEdit: (project: ProjectFormData) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}

export function ProjectsManageList({ projects, onEdit, onDelete, onAdd }: Props) {
  const [viewMode, setViewMode] = useState<"table" | "card">("table");

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2
            className="text-xl font-black"
            style={{ color: colors.primary.navy.DEFAULT }}
          >
            Danh sách dự án
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Tổng cộng {projects.length} dự án
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
            <Plus size={16} /> Tạo dự án mới
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
                    Dự án
                  </th>
                  <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                    Trạng thái
                  </th>
                  <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                    Địa điểm
                  </th>
                  <th className="text-left font-semibold text-gray-600 px-5 py-3.5">
                    Chủ đầu tư
                  </th>
                  <th className="text-right font-semibold text-gray-600 px-5 py-3.5 w-28">
                    Thao tác
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {projects.map((project) => {
                  const tag = TAG_LABELS[project.tag];
                  return (
                    <tr key={project.id} className="hover:bg-gray-50/40 transition-colors">
                      <td className="px-5 py-4 text-gray-500 font-mono">
                        #{project.id}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                            {project.image ? (
                              <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                                N/A
                              </div>
                            )}
                          </div>
                          <span className="font-semibold text-gray-900">
                            {project.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md text-white"
                          style={{ backgroundColor: tag.color }}
                        >
                          {tag.label}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-gray-600 max-w-[200px] truncate">
                        {project.location}
                      </td>
                      <td className="px-5 py-4 text-gray-600">
                        {project.investor || "—"}
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => onEdit(project)}
                            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                            title="Chỉnh sửa"
                          >
                            <Pencil size={15} className="text-gray-500" />
                          </button>
                          <button
                            onClick={() => project.id && onDelete(project.id)}
                            className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                            title="Xoá"
                          >
                            <Trash2 size={15} className="text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
                {projects.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-5 py-12 text-center text-gray-400"
                    >
                      Chưa có dự án nào. Hãy bấm "Tạo dự án mới" để thêm.
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
          {projects.map((project) => {
            const tag = TAG_LABELS[project.tag];
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      Chưa có ảnh
                    </div>
                  )}
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-md text-white"
                    style={{ backgroundColor: tag.color }}
                  >
                    {tag.label}
                  </span>
                </div>
                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 className="font-bold text-gray-900 line-clamp-1">
                    {project.name}
                  </h3>
                  <div className="space-y-1.5 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><path d="M20 8v6"/><path d="M23 11h-6"/></svg>
                      <span>{project.investor || "—"}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
                      <span>{project.area || "—"}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-end gap-1.5 pt-2">
                    <button
                      onClick={() => onEdit(project)}
                      className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                      title="Chỉnh sửa"
                    >
                      <Pencil size={15} className="text-gray-500" />
                    </button>
                    <button
                      onClick={() => project.id && onDelete(project.id)}
                      className="p-2 rounded-lg hover:bg-red-50 transition-colors"
                      title="Xoá"
                    >
                      <Trash2 size={15} className="text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          {projects.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-400 bg-white rounded-xl border border-gray-200">
              Chưa có dự án nào. Hãy bấm "Tạo dự án mới" để thêm.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
