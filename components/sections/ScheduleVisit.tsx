"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type ScheduleVisitProps = {
  leftImage?: string;
  rightImage?: string;
};

export default function ScheduleVisit({
  leftImage = "/images/schedule-visit-left.png",
  rightImage = "/images/schedule-visit-right.png",
}: ScheduleVisitProps) {
  return (
    <Section id="schedule-visit" className="relative">
      {/* Background - Split Layout */}
      <div className="absolute inset-0 h-screen grid grid-cols-2">
        {/* Left - Merchandise */}
        {leftImage && (
          <div className="relative">
            <Image
              src={leftImage}
              alt="Merchandise"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        {/* Right - Showroom */}
        {rightImage && (
          <div className="relative">
            <Image
              src={rightImage}
              alt="Showroom"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      {/* Electric Blue Floor Effect Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#0A56FF]/20" />

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Left - Schedule A Visit */}
        <SectionContent delay={0.1}>
          <div className="max-w-md">
            <h2 className="mb-2 text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
              SCHEDULE A
            </h2>
            <h2 className="text-5xl font-bold uppercase leading-none text-[#0A56FF] sm:text-6xl lg:text-7xl">
              VISIT
            </h2>
          </div>
        </SectionContent>

        {/* Top Right - Schedule CTA */}
        <div className="absolute right-6 top-20 sm:right-10 lg:right-12">
          <SectionContent delay={0.2}>
            <button className="text-sm uppercase text-white">SCHEDULE →</button>
          </SectionContent>
        </div>

        {/* Bottom Right - Showroom Tagline */}
        <div className="flex justify-end">
          <SectionContent delay={0.3}>
            <p className="text-lg font-semibold uppercase sm:text-xl">
              OUR LOS ANGELES SHOWROOM
            </p>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
