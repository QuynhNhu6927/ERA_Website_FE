import axiosClient from '../axios-client';
import { AUTH_ENDPOINTS } from '../endpoints/auth.endpoints';
import { AuthResponse, LoginRequest } from '@/types/auth';
import { User } from '@/types/user';

export const authService = {
  login: async (credentials: LoginRequest) => {
    const response = await axiosClient.post<AuthResponse>(
      AUTH_ENDPOINTS.LOGIN,
      credentials,
    );
    return response.data;
  },

  getMe: async () => {
    const response = await axiosClient.get<User>(AUTH_ENDPOINTS.ME);
    return response.data;
  },
};
