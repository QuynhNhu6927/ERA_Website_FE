import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
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
    const bgClasses = {
      white: "bg-white",
      gray: "bg-gray-50",
      navy: "bg-[#0C0C44]",
      none: "",
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
        className={cn(bgClasses[bg], paddingClasses[padding], className)}
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
