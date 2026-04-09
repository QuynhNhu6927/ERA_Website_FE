"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { colors } from "@/lib/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed";
    
    const variants = {
      primary: {
        backgroundColor: colors.primary.DEFAULT,
        color: colors.neutral.white,
      },
      secondary: {
        backgroundColor: colors.secondary.DEFAULT,
        color: colors.neutral.white,
      },
      outline: {
        border: `2px solid ${colors.primary.DEFAULT}`,
        color: colors.primary.DEFAULT,
        backgroundColor: 'transparent',
      },
      ghost: {
        color: colors.neutral.foreground,
        backgroundColor: 'transparent',
      },
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const hoverStyles = {
      primary: { backgroundColor: colors.primary.dark },
      secondary: { backgroundColor: colors.secondary.dark },
      outline: { backgroundColor: colors.primary.DEFAULT, color: colors.neutral.white },
      ghost: { backgroundColor: colors.gray[100] },
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizes[size], className)}
        style={variants[variant]}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyles[variant]);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, variants[variant]);
        }}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
