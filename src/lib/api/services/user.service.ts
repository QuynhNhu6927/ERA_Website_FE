import axiosClient from '../axios-client';
import { USER_ENDPOINTS } from '../endpoints/user.endpoints';
import { User } from '@/types/user';

export const userService = {
  getAll: async () => {
    const response = await axiosClient.get<User[]>(USER_ENDPOINTS.GET_ALL);
    return response.data;
  },

  getById: async (id: string) => {
    const response = await axiosClient.get<User>(USER_ENDPOINTS.GET_BY_ID(id));
    return response.data;
  },
};
