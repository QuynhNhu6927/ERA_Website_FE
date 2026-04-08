import { cn } from "@/lib/utils";

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
        <p className="text-sm font-semibold uppercase tracking-wider text-[#e31937] mb-2">
          {subtitle}
        </p>
      )}
      <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold", titleClassName)}>
        <span className="text-[#1a1a4e]">{title}</span>
        {highlight && (
          <span className="text-[#e31937]"> {highlight}</span>
        )}
      </h2>
      {description && (
        <p className={cn(
          "mt-4 text-gray-600 max-w-2xl",
          align === "center" ? "mx-auto" : ""
        )}>
          {description}
        </p>
      )}
    </div>
  );
}
