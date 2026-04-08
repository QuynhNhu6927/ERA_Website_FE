"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { MapPin } from "lucide-react";

const tabs = [
  { id: "booking", label: "Đang nhận booking" },
  { id: "top-sales", label: "Top doanh thu" },
  { id: "trending", label: "Hot trên thị trường" },
];

const projects = [
  {
    id: 1,
    name: "Grand Marina Saigon",
    location: "Quận 1, TP. Hồ Chí Minh",
    price: "15.000",
    unit: "USD/m2",
    type: "Luxury Branded",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    badges: ["PREMIUM", "Hot Booking"],
    featured: true,
  },
  {
    id: 2,
    name: "Eco Retreat",
    location: "Tây Ninh",
    price: null,
    unit: null,
    type: "Eco Living",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&q=80",
    badges: [],
    featured: false,
  },
  {
    id: 3,
    name: "Ixora Ho Tram",
    location: "Bà Rịa - Vũng Tàu",
    price: null,
    unit: null,
    type: "Beach Resort",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    badges: [],
    featured: false,
  },
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("booking");

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <Container>
        <SectionTitle
          title="Dự Án"
          highlight="ERA Vietnam"
          description="Khám phá những dự án bất động sản hàng đầu được phân phối bởi ERA Vietnam, từ căn hộ cao cấp đến biệt thự nghỉ dưỡng sang trọng."
          align="left"
          className="mb-8"
        />

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 py-3 text-sm font-medium transition-colors relative",
                activeTab === tab.id
                  ? "text-[#e31937]"
                  : "text-gray-500 hover:text-gray-700"
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#e31937]" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Project */}
          <div className="lg:col-span-2 lg:row-span-2 group cursor-pointer">
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden">
              <img
                src={projects[0].image}
                alt={projects[0].name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {projects[0].badges.map((badge) => (
                  <Badge
                    key={badge}
                    className={cn(
                      badge === "PREMIUM"
                        ? "bg-[#e31937] text-white"
                        : "bg-white text-gray-800"
                    )}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {projects[0].name}
                </h3>
                <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                  <MapPin size={16} />
                  {projects[0].location}
                </div>
                <div className="flex items-center gap-6">
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider">Giá từ</p>
                    <p className="text-xl font-bold">
                      {projects[0].price} {projects[0].unit}
                    </p>
                  </div>
                  <div className="h-10 w-px bg-white/30" />
                  <div>
                    <p className="text-xs text-white/60 uppercase tracking-wider">Loại</p>
                    <p className="text-lg">{projects[0].type}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Projects */}
          {projects.slice(1).map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer relative h-[240px] rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="text-xl font-bold mb-1">{project.name}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin size={14} />
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
