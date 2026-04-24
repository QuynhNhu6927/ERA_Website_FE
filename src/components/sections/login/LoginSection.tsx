"use client";

import { useState } from "react";
import { colors } from "@/lib/theme";
import { useAuth } from "@/hooks/useAuth";
import { ROUTES } from "@/lib/routes";

export function LoginSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, error, clearError } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    clearError();

    const result = await login({ email, password });
    if (result) {
      window.location.href = ROUTES.home;
    }
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8 md:p-10">
      <div className="text-center mb-8">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ color: colors.primary.DEFAULT }}
        >
          ERA VIETNAM
        </h1>
        <p className="mt-2 text-sm" style={{ color: colors.gray[600] }}>
          Đăng nhập vào hệ thống nội bộ
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1"
            style={{ color: colors.gray[700] }}
          >
            Email công ty
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="nhu.nguyenquynh@era.com.vn"
            className="w-full px-4 py-2.5 rounded-lg border outline-none transition-colors focus:ring-2"
            style={{ borderColor: colors.border.DEFAULT }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = colors.primary.DEFAULT)
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = colors.border.DEFAULT)
            }
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-1"
            style={{ color: colors.gray[700] }}
          >
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-2.5 rounded-lg border outline-none transition-colors focus:ring-2"
            style={{ borderColor: colors.border.DEFAULT }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = colors.primary.DEFAULT)
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = colors.border.DEFAULT)
            }
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-lg font-medium text-white transition-all disabled:opacity-50"
          style={{ backgroundColor: colors.primary.DEFAULT }}
          onMouseEnter={(e) => {
            if (!isLoading)
              e.currentTarget.style.backgroundColor =
                colors.primary.dark.DEFAULT;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = colors.primary.DEFAULT;
          }}
        >
          {isLoading ? "Đang đăng nhập..." : "Đăng nhập"}
        </button>
      </form>

      {error && (
        <p
          className="mt-4 text-center text-sm px-3 py-2 rounded-lg"
          style={{
            color: "#ef4444",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
          }}
        >
          {error}
        </p>
      )}

      <p
        className="mt-6 text-center text-xs"
        style={{ color: colors.gray[400] }}
      >
        Chỉ dành cho nhân viên và cộng tác viên ERA Vietnam.
      </p>
    </div>
  );
}
