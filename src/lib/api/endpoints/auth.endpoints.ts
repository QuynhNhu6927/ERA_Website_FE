/**
 * Auth API Endpoints
 * Tập trung tất cả URL path liên quan đến authentication.
 * Nếu BE đổi path, sửa ở đây — toàn bộ app tự động cập nhật.
 */
export const AUTH_ENDPOINTS = {
  /** POST /auth/login */
  LOGIN: '/auth/login',

  /** GET /auth/me */
  ME: '/auth/me',
} as const;
