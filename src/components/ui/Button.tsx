"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef, ReactElement, isValidElement, cloneElement } from "react";
import { colors } from "@/lib/theme";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<any, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, asChild, children, style: userStyle, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-md";

    const variants = {
      primary: {
        backgroundColor: colors.primary.DEFAULT,
        color: colors.neutral.white,
      },
      secondary: {
        backgroundColor: colors.primary.navy.DEFAULT,
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
      sm: "px-5 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const hoverStyles = {
      primary: { backgroundColor: colors.primary.dark.DEFAULT },
      secondary: { backgroundColor: colors.secondary.dark },
      outline: { backgroundColor: colors.primary.DEFAULT, color: colors.neutral.white },
      ghost: { backgroundColor: colors.gray[100] },
    };

    const mergedClassName = cn(baseStyles, sizes[size], className);

    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<any>;
      return cloneElement(child, {
        className: cn(mergedClassName, child.props.className),
        style: { ...variants[variant], ...userStyle, ...child.props.style },
        onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
          Object.assign(e.currentTarget.style, hoverStyles[variant]);
          child.props.onMouseEnter?.(e);
        },
        onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
          Object.assign(e.currentTarget.style, { ...variants[variant], ...userStyle });
          child.props.onMouseLeave?.(e);
        },
        ref,
        disabled: isLoading || props.disabled || child.props.disabled,
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={mergedClassName}
        style={{ ...variants[variant], ...userStyle }}
        onMouseEnter={(e) => {
          Object.assign(e.currentTarget.style, hoverStyles[variant]);
        }}
        onMouseLeave={(e) => {
          Object.assign(e.currentTarget.style, { ...variants[variant], ...userStyle });
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
