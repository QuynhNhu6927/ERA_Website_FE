import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  bg?: "white" | "gray" | "navy" | "none";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  noContainer?: boolean;
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      children,
      className,
      containerClassName,
      id,
      bg = "white",
      padding = "md",
      noContainer = false,
    },
    ref
  ) {
    const bgStyles: Record<string, React.CSSProperties> = {
      white: { backgroundColor: colors.neutral.white },
      gray: { backgroundColor: colors.gray[50] },
      navy: { backgroundColor: colors.primary.navy.DEFAULT },
      none: {},
    };

    const paddingClasses = {
      none: "",
      xs: "py-10",
      sm: "py-12 md:py-16",
      md: "py-16 md:py-20",
      lg: "py-20 md:py-28",
      xl: "py-16 lg:py-20",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(paddingClasses[padding], className)}
        style={bgStyles[bg]}
      >
        {noContainer ? (
          children
        ) : (
          <Container className={containerClassName}>{children}</Container>
        )}
      </section>
    );
  }
);
