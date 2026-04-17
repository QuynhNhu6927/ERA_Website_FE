import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { colors } from "@/lib/theme";

interface BadgeProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  const variants = {
    default: {
      backgroundColor: colors.gray[100],
      color: colors.gray[800],
    },
    primary: {
      backgroundColor: colors.primary.DEFAULT,
      color: colors.neutral.white,
    },
    secondary: {
      backgroundColor: colors.primary.navy.DEFAULT,
      color: colors.neutral.white,
    },
    outline: {
      border: `1px solid ${colors.gray[300]}`,
      color: colors.gray[700],
    },
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        className
      )}
      style={variants[variant]}
    >
      {children}
    </span>
  );
}
