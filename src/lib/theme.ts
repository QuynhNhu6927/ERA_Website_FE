// ============================================
// ERA Vietnam - Theme Configuration
// ============================================

function createShades(hex: string) {
  return {
    DEFAULT: hex,
    s80: withOpacity(hex, 0.8),
    s60: withOpacity(hex, 0.6),
    s40: withOpacity(hex, 0.4),
    s20: withOpacity(hex, 0.2),
  };
}

export const colors = {
  // Primary Colors
  primary: {
    ...createShades("#C8102E"),
    dark: createShades("#990038"),
    navy: createShades("#0C0C44"),
    hotline: "#C8102E",
  },

  // Secondary Colors
  secondary: {
    ...createShades("#41B3E0"),
    dark: "#2A8FB5",
  },

  // Tertiary Colors
  tertiary: {
    orange: {
      ...createShades("#FF9015"),
      dark: "#CC730E",
    },
    purple: {
      ...createShades("#5B2D86"),
      dark: "#442065",
    },
  },

  // Accent Colors
  accent: {
    DEFAULT: "#0f172a",
    light: "#1e293b",
  },

  // Neutral Colors
  neutral: {
    white: "#ffffff",
    black: "#000000",
    background: "#ffffff",
    foreground: "#1a1a2e",
  },

  // Gray Scale (for text, borders, backgrounds)
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
  },

  // Slate (for dark UI elements)
  slate: {
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
  },

  // Muted/Gray Colors
  muted: {
    DEFAULT: "#64748b",
    light: "#94a3b8",
    lighter: "#cbd5e1",
  },

  // Border Colors
  border: {
    DEFAULT: "#e2e8f0",
    light: "#f1f5f9",
    dark: "#cbd5e1",
  },

  // Overlay
  overlay: {
    dark: "rgba(0, 0, 0, 0.5)",
    light: "rgba(255, 255, 255, 0.9)",
  },
};

// ============================================
// Utility Functions
// ============================================

/**
 * Get color with opacity
 * Example: withOpacity("#C8102E", 0.5) -> "rgba(200, 16, 46, 0.5)"
 */
export function withOpacity(color: string, opacity: number): string {
  // Remove # if present
  const hex = color.replace("#", "");

  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return RGBA
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}
