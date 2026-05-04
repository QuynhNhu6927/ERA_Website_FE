// ============================================
// ERA Vietnam - Route Configuration
// Centralized route management for easy maintenance
// ============================================

export const ROUTES = {
  // Main Pages
  home: "/",
  aboutUs: "/ve-chung-toi",
  compass: "/ve-chung-toi/compass",
  apac: "/ve-chung-toi/apac",
  era: "/ve-chung-toi/era-real-estate",
  //projects: "/du-an",
  join: "/gia-nhap",
  apply: "/ung-tuyen",
  academy: "/academy",
  news: "/tin-tuc",
  contact: "/lien-he",
  
  // Auth
  login: "/login",
  
  // Join Team Sub-pages
  commission: "/gia-nhap/commission",
  training: "/gia-nhap/training",
  inventory: "/gia-nhap/inventory",
  technology: "/gia-nhap/technology",

  // Apply Sub-pages
  applyDetail: "/ung-tuyen/chi-tiet-cong-viec",
  
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
