"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ArrowRight, GraduationCap, Diamond, Zap, Building2, Award, CheckCircle, TrendingUp, BadgeCheck } from "lucide-react";
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
    <section className="py-12 md:py-12 bg-white">
      <Container>
        {/* Header Section - Image + Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Content */}
          <div>
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#1a1a4e]">ERA </span>
              <span className="text-[#e31937]">Academy</span>
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              ERA Academy is an international standard training platform, equipping our agents 
              with the elite skills required to lead in the Vietnamese real estate market. 
              From foundational knowledge to advanced project marketing, we shape the future 
              of real estate professionals.
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                  <BadgeCheck className="w-4 h-4 text-[#e31937]" />
                </div>
                <span className="text-sm font-medium text-gray-700">Global Certification</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#e31937]" />
                </div>
                <span className="text-sm font-medium text-gray-700">Career Growth</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80"
                alt="ERA Academy Training"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlay Card - Added left padding/margin for mobile */}
            <div className="absolute -bottom-4 left-4 sm:left-6 lg:-left-4 bg-[#1a1a4e] text-white p-4 sm:p-5 rounded-xl max-w-[200px] sm:max-w-[220px] shadow-lg">
              <p className="text-xs sm:text-sm leading-relaxed">
                Empowering over <span className="font-bold">5,000+</span> agents across Vietnam with world-class expertise.
              </p>
            </div>
          </div>
        </div>

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
                  <div className="absolute left-0 top-4 bottom-4 w-1 bg-[#1a1a4e] rounded-r" />
                  
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
                    <button className="w-8 h-8 flex items-center justify-center text-[#1a1a4e] group-hover:border-[#e31937] group-hover:text-[#e31937] transition-colors">
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
