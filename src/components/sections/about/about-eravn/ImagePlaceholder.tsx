"use client";

import { colors } from "@/lib/theme";

interface ImagePlaceholderProps {
  width?: string | number;
  height?: string | number;
  icon?: React.ReactNode;
  label?: string;
  className?: string;
  color?: string;
}

const colorPool = [
  colors.primary.DEFAULT,
  colors.secondary.DEFAULT,
  colors.tertiary.orange.DEFAULT,
  colors.tertiary.purple.DEFAULT,
  colors.primary.navy.DEFAULT,
  "#64748b",
];

export default function ImagePlaceholder({
  width = "100%",
  height = "100%",
  icon,
  label,
  className = "",
  color,
}: ImagePlaceholderProps) {
  const bgColor = color || colorPool[Math.floor(Math.random() * colorPool.length)];
  
  return (
    <div
      className={`flex flex-col items-center justify-center ${className}`}
      style={{
        width,
        height,
        backgroundColor: bgColor + "20",
        border: `2px dashed ${bgColor}40`,
      }}
    >
      {icon || (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke={bgColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      )}
      {label && (
        <span className="mt-2 text-xs font-medium" style={{ color: bgColor }}>
          {label}
        </span>
      )}
    </div>
  );
}
