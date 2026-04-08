"use client";

import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ArrowRight, GraduationCap, Diamond, Zap, Building2, Award, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const courses = [
  {
    icon: GraduationCap,
    title: "ERA Academy",
    description: "The core induction program covering brand values, ethics, and global real estate standards.",
    level: "FOUNDATION",
    levelLabel: "LEVEL",
  },
  {
    icon: Diamond,
    title: "Resales 101",
    description: "Mastering the secondary market. From property appraisal to negotiation and closing strategies.",
    level: "ESSENTIAL",
    levelLabel: "LEVEL",
  },
  {
    icon: Zap,
    title: "Power Monday",
    description: "Weekly motivation and market update sessions to kickstart your momentum and stay ahead of trends.",
    level: "WEEKLY",
    levelLabel: "FREQUENCY",
  },
  {
    icon: Building2,
    title: "Project Marketing 101",
    description: "Deep dive into developer relationships, off-plan sales techniques, and large-scale project launches.",
    level: "SPECIALIST",
    levelLabel: "LEVEL",
  },
];

const eliteFeatures = [
  "Personal Branding Elite",
  "Advanced Data Analytics",
  "High-Net-Worth Networking",
];

export function AcademySection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <Container>
        {/* Courses Grid - 2 columns on left, 1 tall column on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side - 4 cards in 2x2 grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-100 rounded-xl p-6 transition-all hover:shadow-lg hover:border-gray-200 relative overflow-hidden"
                >
                  {/* Left accent border */}
                  <div className="absolute left-0 top-4 bottom-4 w-1 bg-[#e31937] rounded-r" />
                  
                  {/* Icon */}
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#1a1a4e]" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg text-[#1a1a4e] mb-2">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Level + Arrow */}
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[10px] font-semibold text-[#e31937] uppercase tracking-wider">
                      {course.levelLabel}: {course.level}
                    </span>
                    <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:border-[#e31937] group-hover:text-[#e31937] transition-colors">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Elite Program Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a4e] rounded-xl p-6 h-full flex flex-col">
              {/* Icon */}
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl text-white mb-3">Siêu Agent</h3>

              {/* Description */}
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Exclusive high-performance coaching for those ready to dominate the luxury segment and achieve record-breaking results.
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-1">
                {eliteFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#e31937] flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button 
                variant="primary" 
                className="w-full bg-[#e31937] hover:bg-[#c41230] border-0 rounded-lg"
              >
                JOIN THE ELITE
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
