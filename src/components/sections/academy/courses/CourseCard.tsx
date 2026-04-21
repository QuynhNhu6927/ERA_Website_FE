"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";
import type { Course } from "./types";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div
      className="rounded-2xl p-6 md:p-8 bg-white flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200"
      style={{ borderTop: `4px solid ${course.topColor}` }}
    >
      {/* Title area — fixed height so all cards align */}
      <div className="h-20 mb-4 flex items-center overflow-hidden">
        {course.titleImage ? (
          <Image
            src={course.titleImage}
            alt={course.titleParts.map((p) => p.text).join(" ")}
            width={280}
            height={60}
            className="h-full w-auto max-w-[200px] object-contain"
            loading="lazy"
          />
        ) : course.image ? (
          <Image
            src={course.image}
            alt={course.titleParts.map((p) => p.text).join(" ")}
            width={160}
            height={60}
            className="h-full w-auto object-contain"
            loading="lazy"
          />
        ) : (
          <div className="line-clamp-2">
            {course.titleParts.map((part, i) => (
              <span
                key={i}
                className="text-[15px] md:text-lg lg:text-xl"
                style={{
                  color: part.color,
                  fontWeight: 900,
                  lineHeight: 1.3,
                }}
              >
                {part.text}
                {i < course.titleParts.length - 1 ? " " : ""}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content sections */}
      <div className="flex-1">
        {course.sections.map((section, idx) => (
          <div key={idx} className={idx > 0 ? "mt-4" : ""}>
            <h4
              className="mb-1"
              style={{
                color: course.headingColor || colors.secondary.DEFAULT,
                fontWeight: 700,
                fontSize: "14px",
              }}
            >
              {section.heading}
            </h4>
            {section.content && (
              <p
                style={{
                  color: colors.gray[600],
                  fontSize: "13px",
                  lineHeight: 1.6,
                }}
              >
                {section.content}
              </p>
            )}
            {section.bullets && (
              <ul className="list-disc pl-4 space-y-1">
                {section.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    style={{
                      color: colors.gray[600],
                      fontSize: "13px",
                      lineHeight: 1.6,
                    }}
                  >
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Divider + Bottom row */}
      <div
        className="my-10"
        style={{ borderTop: `1px solid ${colors.gray[200]}` }}
      />
      <div className="flex items-end justify-between gap-4">
        <div>
          <h4
            className="mb-0.5"
            style={{
              color: course.headingColor || colors.secondary.DEFAULT,
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            Đối tượng
          </h4>
          <p
            style={{
              color: colors.gray[600],
              fontSize: "13px",
            }}
          >
            {course.target}
          </p>
        </div>
        <Button
          variant={course.btnVariant}
          size="sm"
          className="rounded-[10px] px-5 flex-shrink-0"
        >
          Xem thêm
        </Button>
      </div>
    </div>
  );
}
