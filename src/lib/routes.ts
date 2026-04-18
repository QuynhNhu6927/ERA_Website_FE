// ============================================
// ERA Vietnam - Route Configuration
// Centralized route management for easy maintenance
// ============================================

export const ROUTES = {
  // Main Pages
  home: "/",
  aboutUs: "/ve-chung-toi",
  projects: "/du-an",
  join: "/join",
  news: "/news",
  contact: "/contact",
  
  // Auth
  login: "/login",
  
  // Join Team Sub-pages
  commission: "/join/commission",
  training: "/join/training",
  inventory: "/join/inventory",
  technology: "/join/technology",
  
  // Footer Links
  brandStory: "/cau-chuyen-thuong-hieu",
  operations: "/linh-vuc-hoat-dong",
  recruitment: "/tuyen-dung",
  
  // Legal
  terms: "/dieu-khoan-su-dung",
  privacy: "/chinh-sach-bao-mat",
} as const;

// Type for route keys (useful for TypeScript autocomplete)
export type RouteKey = keyof typeof ROUTES;

// Helper function to get route path
export function getRoute(key: RouteKey): string {
  return ROUTES[key];
}

export default ROUTES;
