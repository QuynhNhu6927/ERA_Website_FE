// ============================================
// ERA Vietnam - Theme Configuration
// ============================================

export const colors = {
  // Primary Colors
  primary: {
    DEFAULT: "#B61722",
    dark: "#c41230",
    light: "#ff1f4a",
    hotline: "#B90A1D", // For hotline button shadow
  },

  // Secondary Colors
  secondary: {
    DEFAULT: "#1a1a4e",
    dark: "#0f0f3e",
    light: "#252570",
    navy: "#0C0C44", // Deep navy blue
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

  // Accent Colors
  orangeVivid: "#F97316",
  orangeVividDark: "#EA580C",
  cyanBright: "#33CCFF",
  cyanBrightDark: "#2AB8E6",
  yellowVivid: "#F7B900",
  yellowVividDark: "#D97706",
  indigo: "#3E5BA4",
  teal: "#3C645A",

  // Overlay
  overlay: {
    dark: "rgba(0, 0, 0, 0.5)",
    light: "rgba(255, 255, 255, 0.9)",
  },
} as const;

// ============================================
// Tailwind Class Presets
// ============================================

export const themeClasses = {
  // Background
  bg: {
    primary: "bg-[#b61722]",
    primaryDark: "bg-[#c41230]",
    secondary: "bg-[#1a1a4e]",
    secondaryDark: "bg-[#0f0f3e]",
    accent: "bg-[#0f172a]",
    white: "bg-white",
    gray50: "bg-gray-50",
    gray100: "bg-gray-100",
    gray200: "bg-gray-200",
  },

  // Text
  text: {
    primary: "text-[#b61722]",
    secondary: "text-[#1a1a4e]",
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
    primary: "border-[#b61722]",
    secondary: "border-[#1a1a4e]",
    gray100: "border-gray-100",
    gray200: "border-gray-200",
    gray300: "border-gray-300",
  },

  // Hover States
  hover: {
    primary: "hover:bg-[#c41230]",
    primaryText: "hover:text-[#b61722]",
    secondary: "hover:bg-[#0f0f3e]",
    secondaryText: "hover:text-[#1a1a4e]",
  },

  // Focus States
  focus: {
    primary: "focus:border-[#b61722] focus:ring-2 focus:ring-[#b61722]/20",
    secondary: "focus:border-[#1a1a4e] focus:ring-2 focus:ring-[#1a1a4e]/20",
  },

  // Gradient
  gradient: {
    overlay: "bg-gradient-to-t from-black/80 via-black/20 to-transparent",
    primary: "bg-gradient-to-r from-[#b61722] to-[#c41230]",
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
 * Example: withOpacity(colors.primary.DEFAULT, 0.5) -> "rgba(227, 25, 55, 0.5)"
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
 * Example: color("primary") -> "[#b61722]"
 */
export function color(name: keyof typeof colors): string {
  const colorMap: Record<string, string> = {
    primary: colors.primary.DEFAULT,
    secondary: colors.secondary.DEFAULT,
    accent: colors.accent.DEFAULT,
    muted: colors.muted.DEFAULT,
    border: colors.border.DEFAULT,
    orangeVivid: colors.orangeVivid,
    cyanBright: colors.cyanBright,
    yellowVivid: colors.yellowVivid,
    indigo: colors.indigo,
    teal: colors.teal,
  };

  return colorMap[name] || colors.primary.DEFAULT;
}

export default colors;
