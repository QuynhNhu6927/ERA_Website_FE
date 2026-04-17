import { cn } from "@/lib/utils";
import { colors } from "@/lib/theme";

interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleClassName?: string;
}

export function SectionTitle({
  title,
  highlight,
  subtitle,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionTitleProps) {
  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={cn(alignments[align], className)}>
      {subtitle && (
        <p 
          className="text-sm font-semibold uppercase tracking-wider mb-2"
          style={{ color: colors.primary.DEFAULT }}
        >
          {subtitle}
        </p>
      )}
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold", titleClassName)}>
        <span style={{ color: colors.primary.navy.DEFAULT }}>{title}</span>
        {highlight && (
          <span style={{ color: colors.primary.DEFAULT }}> {highlight}</span>
        )}
      </h2>
      {description && (
        <p 
          className={cn(
            "mt-4 max-w-2xl",
            align === "center" ? "mx-auto" : ""
          )}
          style={{ color: colors.gray[600] }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
