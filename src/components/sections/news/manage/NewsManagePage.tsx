"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { colors } from "@/lib/theme";
import { NewsManageList, NewsItem } from "./NewsManageList";
import { NewsManageForm, NewsFormData } from "./NewsManageForm";

const initialItems: NewsItem[] = [
  {
    id: 1,
    title: "Thị trường BĐS Việt Nam 2024: Cơ hội cho ngườimua nhà",
    category: "tin-thi-truong",
    summary: "Các chính sách mới và lãi suất ổn định đang tạo đà phục hồi mạnh mẽ...",
    content: "<p>Nội dung chi tiết bài viết...</p>",
    date: "15 Tháng 5, 2024",
    image: "/news/news_banner.webp",
  },
];

export default function NewsManagePage() {
  const [items, setItems] = useState<NewsItem[]>(initialItems);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [showForm, setShowForm] = useState(false);

  const handleSave = (data: NewsFormData) => {
    if (data.id) {
      setItems((prev) =>
        prev.map((item) =>
          item.id === data.id
            ? { ...item, ...data, date: item.date, image: data.image || item.image }
            : item
        )
      );
    } else {
      const newId = Math.max(0, ...items.map((i) => i.id)) + 1;
      const today = new Date().toLocaleDateString("vi-VN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      setItems((prev) => [
        ...prev,
        { ...data, id: newId, date: today, image: data.image || "" } as NewsItem,
      ]);
    }
    setShowForm(false);
    setEditing(null);
  };

  const handleEdit = (item: NewsItem) => {
    setEditing(item);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Bạn có chắc muốn xoá bài viết này?")) {
      setItems((prev) => prev.filter((i) => i.id !== id));
    }
  };

  const handleAdd = () => {
    setEditing(null);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditing(null);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Section padding="md" bg="gray">
        <div className="space-y-8">
          {showForm ? (
            <NewsManageForm
              initialData={editing ?? undefined}
              onSave={handleSave}
              onCancel={handleCancel}
            />
          ) : (
            <NewsManageList
              items={items}
              onEdit={handleEdit}
              onDelete={handleDelete}
              onAdd={handleAdd}
            />
          )}
        </div>
      </Section>
    </main>
  );
}
