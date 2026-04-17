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
// Tailwind Class Presets
// ============================================

export const themeClasses = {
  // Background
  bg: {
    primary: "bg-[#C8102E]",
    primaryDark: "bg-[#990038]",
    secondary: "bg-[#41B3E0]",
    secondaryDark: "bg-[#2A8FB5]",
    accent: "bg-[#0f172a]",
    white: "bg-white",
    gray50: "bg-gray-50",
    gray100: "bg-gray-100",
    gray200: "bg-gray-200",
  },

  // Text
  text: {
    primary: "text-[#C8102E]",
    secondary: "text-[#41B3E0]",
    muted: "text-gray-500",
    white: "text-white",
    black: "text-gray-900",
    gray400: "text-gray-400",
    gray500: "text-gray-500",
    gray600: "text-gray-600",
    gray700: "text-gray-700",
    slate400: "text-slate-400",
    slate500: "text-slate-500",
  },

  // Border
  border: {
    primary: "border-[#C8102E]",
    secondary: "border-[#41B3E0]",
    gray100: "border-gray-100",
    gray200: "border-gray-200",
    gray300: "border-gray-300",
  },

  // Hover States
  hover: {
    primary: "hover:bg-[#990038]",
    primaryText: "hover:text-[#C8102E]",
    secondary: "hover:bg-[#2A8FB5]",
    secondaryText: "hover:text-[#41B3E0]",
  },

  // Focus States
  focus: {
    primary: "focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/20",
    secondary: "focus:border-[#41B3E0] focus:ring-2 focus:ring-[#41B3E0]/20",
  },

  // Gradient
  gradient: {
    overlay: "bg-gradient-to-t from-black/80 via-black/20 to-transparent",
    primary: "bg-gradient-to-r from-[#C8102E] to-[#990038]",
  },
} as const;

// ============================================
// CSS Variable Names (match with globals.css)
// ============================================

export const cssVariables = {
  background: "var(--background)",
  foreground: "var(--foreground)",
  primary: "var(--primary)",
  primaryDark: "var(--primary-dark)",
  secondary: "var(--secondary)",
  accent: "var(--accent)",
  muted: "var(--muted)",
  border: "var(--border)",
  card: "var(--card)",
  cardForeground: "var(--card-foreground)",
} as const;

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

/**
 * Get Tailwind arbitrary value for color
 * Example: color("primary") -> "[#C8102E]"
 */
export function color(name: string): string {
  const colorMap: Record<string, string> = {
    primary: colors.primary.DEFAULT,
    primaryDark: colors.primary.dark.DEFAULT,
    primaryNavy: colors.primary.navy.DEFAULT,
    secondary: colors.primary.navy.DEFAULT,
    secondaryDark: colors.secondary.dark,
    tertiaryOrange: colors.tertiary.orange.DEFAULT,
    tertiaryPurple: colors.tertiary.purple.DEFAULT,
    accent: colors.accent.DEFAULT,
    muted: colors.muted.DEFAULT,
    border: colors.border.DEFAULT,
  };

  return colorMap[name] || colors.primary.DEFAULT;
}

export default colors;
