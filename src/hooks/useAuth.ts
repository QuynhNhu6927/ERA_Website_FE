'use client';

import { useState, useCallback } from 'react';
import { authService } from '@/lib/api/services/auth.service';
import { AuthResponse, LoginRequest } from '@/types/auth';

interface UseAuthReturn {
  login: (credentials: LoginRequest) => Promise<AuthResponse | null>;
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
}

export function useAuth(): UseAuthReturn {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const login = useCallback(
    async (credentials: LoginRequest): Promise<AuthResponse | null> => {
      setIsLoading(true);
      setError(null);

      try {
        const data = await authService.login(credentials);

        localStorage.setItem('era_access_token', data.access_token);
        localStorage.setItem('era_user', JSON.stringify(data.user));

        return data;
      } catch (err: any) {
        const message =
          err?.message || 'Đăng nhập thất bại. Vui lòng thử lại.';
        setError(message);
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { login, isLoading, error, clearError };
}
