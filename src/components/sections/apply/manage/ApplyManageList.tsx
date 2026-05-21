"use client";

import { colors } from "@/lib/theme";
import { Button } from "@/components/ui/Button";
import { Pencil, Trash2, Plus } from "lucide-react";
import type { JobFormData } from "./ApplyManageForm";

interface Props {
  jobs: JobFormData[];
  onEdit: (job: JobFormData) => void;
  onDelete: (id: number) => void;
  onAdd: () => void;
}

export function ApplyManageList({ jobs, onEdit, onDelete, onAdd }: Props) {
  const badgeColor = (type: string) => {
    if (type.includes("Toàn")) return { bg: "#fee2e2", text: "#b91c1c" };
    if (type.includes("Bán")) return { bg: "#dbeafe", text: "#1d4ed8" };
    return { bg: "#fef3c7", text: "#b45309" };
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2
          className="text-xl font-black"
          style={{ color: colors.primary.navy.DEFAULT }}
        >
          Quản lý tin tuyển dụng
        </h2>
        <Button variant="primary" size="sm" onClick={onAdd} className="gap-2">
          <Plus size={16} />
          Tạo tin tuyển dụng
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
                  STT
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 min-w-[180px]">
                  Tên công việc
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
                  Địa điểm
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
                  Loại hình
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 whitespace-nowrap">
                  Mức lương
                </th>
                <th className="px-4 py-3 text-center font-semibold text-gray-700 whitespace-nowrap">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => {
                const style = badgeColor(job.type);
                return (
                  <tr
                    key={job.id ?? i}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-4 py-3 text-gray-500 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3">
                      <p className="font-semibold text-gray-900">{job.title}</p>
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {job.location}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <span
                        className="inline-block rounded-full px-2.5 py-1 text-xs font-medium"
                        style={{ backgroundColor: style.bg, color: style.text }}
                      >
                        {job.type}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                      {job.salary || "Cạnh tranh"}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <Button
                          variant="ghost"
                          isIconOnly
                          size="sm"
                          onClick={() => onEdit(job)}
                          title="Sửa"
                          className="text-blue-600 hover:!bg-blue-50"
                        >
                          <Pencil size={15} />
                        </Button>
                        <Button
                          variant="ghost"
                          isIconOnly
                          size="sm"
                          onClick={() => job.id && onDelete(job.id)}
                          title="Xoá"
                          className="text-red-500 hover:!bg-red-50"
                        >
                          <Trash2 size={15} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
              {jobs.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-12 text-center text-gray-400"
                  >
                    Chưa có tin tuyển dụng nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
