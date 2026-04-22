/**
 * User API Endpoints
 * Tập trung tất cả URL path liên quan đến user.
 */
export const USER_ENDPOINTS = {
  /** GET /users */
  GET_ALL: '/users',

  /** GET /users/:id */
  GET_BY_ID: (id: string) => `/users/${id}`,
} as const;
