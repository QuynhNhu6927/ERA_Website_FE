"use client";

import { useState, useRef, useEffect } from "react";
import { colors } from "@/lib/theme";
import { Button } from "@/components/ui/Button";
import { ChevronDown, Phone, MessageCircle, Check } from "lucide-react";

const cities = [
  "Toàn quốc",
  "TP. Hồ Chí Minh",
  "Vũng Tàu",
  "Long An",
  "Đồng Nai",
  "Nha Trang",
  "Hà Nội",
  "Đà Nẵng",
  "Bình Dương",
];

export function ProjectsSidebar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCities, setSelectedCities] = useState<string[]>(["Toàn quốc"]);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formAgree, setFormAgree] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCity = (city: string) => {
    if (city === "Toàn quốc") {
      setSelectedCities(["Toàn quốc"]);
      return;
    }
    setSelectedCities((prev) => {
      const withoutNational = prev.filter((c) => c !== "Toàn quốc");
      if (withoutNational.includes(city)) {
        const next = withoutNational.filter((c) => c !== city);
        return next.length === 0 ? ["Toàn quốc"] : next;
      }
      return [...withoutNational, city];
    });
  };

  const clearCities = () => setSelectedCities(["Toàn quốc"]);

  const displayLabel =
    selectedCities.length === 1
      ? selectedCities[0]
      : `Đã chọn ${selectedCities.length} địa điểm`;

  return (
    <div className="w-full lg:w-80 shrink-0 space-y-5">
      {/* Location Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: colors.primary.navy.DEFAULT }}
        >
          <span>{displayLabel}</span>
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {dropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold" style={{ color: colors.primary.DEFAULT }}>
                Chọn tỉnh / Thành Phố
              </h4>
              <button
                onClick={clearCities}
                className="text-xs font-medium text-gray-400 hover:text-gray-600 transition-colors"
              >
                Xoá
              </button>
            </div>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {cities.map((city) => {
                const checked = selectedCities.includes(city);
                return (
                  <label
                    key={city}
                    className="flex items-center gap-3 cursor-pointer py-1"
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                        checked
                          ? "border-transparent"
                          : "border-gray-300"
                      }`}
                      style={{
                        backgroundColor: checked ? colors.primary.DEFAULT : "transparent",
                      }}
                    >
                      {checked && <Check size={12} className="text-white" strokeWidth={3} />}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={() => toggleCity(city)}
                    />
                    <span className="text-sm text-gray-700">{city}</span>
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Consultation Form */}
      <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
        <h3 className="text-base font-black mb-3" style={{ color: colors.primary.navy.DEFAULT }}>
          Tư vấn mua nhà chuyên sâu
        </h3>
        <ul className="space-y-2.5 mb-5">
          {[
            "Phân tích quỹ căn, chính sách, tiện ích giúp khách hàng lựa chọn căn tốt nhất.",
            "Giải đáp mọi thắc mắc của khách hàng.",
            "Tuyệt đối bảo mật thông tin cá nhân.",
          ].map((text, i) => (
            <li key={i} className="flex items-start gap-2.5 text-xs text-gray-600 leading-relaxed">
              <span
                className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] shrink-0"
                style={{ backgroundColor: colors.primary.DEFAULT }}
              >
                ✓
              </span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Họ tên *"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-300 transition-colors"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Số điện thoại *"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-gray-300 transition-colors"
            value={formPhone}
            onChange={(e) => setFormPhone(e.target.value)}
          />
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="mt-0.5"
              checked={formAgree}
              onChange={(e) => setFormAgree(e.target.checked)}
            />
            <span className="text-[11px] text-gray-500 leading-tight">
              Tôi đồng ý với ERA/Vietnam về Điều khoản dịch vụ và Chính sách bảo mật.
            </span>
          </label>
          <Button variant="secondary" size="sm" className="w-full py-3">
            Nhận tư vấn ngay
          </Button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 my-4">
          <div className="flex-1 h-px bg-gray-100" />
          <span className="text-xs text-gray-400">Hoặc</span>
          <div className="flex-1 h-px bg-gray-100" />
        </div>

        {/* Hotline + Zalo */}
        <div className="flex gap-3">
          <a
            href="tel:19006701"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold border transition-colors hover:bg-gray-50"
            style={{ borderColor: colors.gray[200], color: colors.primary.navy.DEFAULT }}
          >
            <Phone size={16} style={{ color: colors.primary.DEFAULT }} />
            <div className="text-left leading-tight">
              <span className="block text-[10px] text-gray-400">Gọi trực tiếp</span>
              <span className="font-bold" style={{ color: colors.primary.DEFAULT }}>1900 6701</span>
            </div>
          </a>
          <a
            href="https://zalo.me/0325381107"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold border transition-colors hover:bg-gray-50"
            style={{ borderColor: colors.gray[200], color: colors.primary.navy.DEFAULT }}
          >
            <MessageCircle size={16} style={{ color: colors.secondary.DEFAULT }} />
            <span style={{ color: colors.secondary.DEFAULT }}>Chat qua Zalo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
