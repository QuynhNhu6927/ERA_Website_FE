"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { colors } from "@/lib/theme";
import type { Course } from "./types";

interface CourseCardWideProps {
  course: Course;
  reverse?: boolean;
}

export function CourseCardWide({ course, reverse = false }: CourseCardWideProps) {
  return (
    <div
      className="rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden flex flex-col md:flex-row"
      style={{ borderTop: `4px solid ${course.topColor}` }}
    >
      {/* Text Content */}
      <div
        className={`flex-1 p-6 md:p-10 flex flex-col justify-center ${
          reverse ? "md:order-2" : "md:order-1"
        }`}
      >
        {/* Title */}
        <div className="mb-5">
          {course.titleParts.map((part, i) => (
            <span
              key={i}
              className="text-xl md:text-2xl lg:text-[28px]"
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

        {/* Sections */}
        <div className="space-y-4">
          {course.sections.map((section, idx) => (
            <div key={idx}>
              <h4
                className="mb-1.5"
                style={{
                  color: course.headingColor || colors.primary.navy.DEFAULT,
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
                    fontSize: "14px",
                    lineHeight: 1.7,
                  }}
                >
                  {section.content}
                </p>
              )}
              {section.bullets && (
                <ul className="list-disc pl-5 space-y-1">
                  {section.bullets.map((b, bi) => (
                    <li
                      key={bi}
                      style={{
                        color: colors.gray[600],
                        fontSize: "14px",
                        lineHeight: 1.7,
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
          className="my-6"
          style={{ borderTop: `1px solid ${colors.gray[200]}` }}
        />
        <div className="flex items-end justify-between gap-4">
          <div>
            <h4
              className="mb-0.5"
              style={{
                color: course.headingColor || colors.primary.navy.DEFAULT,
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
            Learn More
          </Button>
        </div>
      </div>

      {/* Image Side */}
      <div
        className={`w-full md:w-[45%] p-4 md:p-6 ${
          reverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <div className="relative w-full h-full min-h-[240px] md:min-h-[380px] rounded-2xl overflow-hidden">
          {course.image ? (
            <Image
              src={course.image}
              alt={course.titleParts.map((p) => p.text).join(" ")}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 45vw"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-sm">Image</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
