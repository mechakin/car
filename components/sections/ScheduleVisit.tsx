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

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Left - Schedule A Visit */}
        <SectionContent delay={0.1}>
          <div className="max-w-md">
            <h2 className="mb-2 font-bold uppercase text-white whitespace-nowrap" style={{ lineHeight: "0.2", fontSize: "clamp(2.25rem, 9vw, 9rem)" }}>
              SCHEDULE A
            </h2>
            <h2 className="font-bold uppercase text-[#0A56FF]" style={{ lineHeight: "0.9", fontSize: "clamp(3.5rem, 15.25vw, 36rem)" }}>
              VISIT
            </h2>
          </div>
        </SectionContent>

        {/* Top Right - Schedule CTA */}
        <div className="absolute right-6 top-20 sm:right-10 lg:right-12">
          <SectionContent delay={0.2}>
            <button className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity" style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(0.75rem, 3vw, 3.5rem)" }}>SCHEDULE <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white", textShadow: "1px 0 0 currentColor, -1px 0 0 currentColor, 0 1px 0 currentColor, 0 -1px 0 currentColor" }}>→</span></button>
          </SectionContent>
        </div>

        {/* Bottom Center - Showroom Tagline (centered on right image) */}
        <div className="absolute bottom-0 left-1/2 right-0 flex justify-center pb-6 sm:pb-10 lg:pb-12">
          <SectionContent delay={0.3}>
            <div className="text-center">
              <p className="text-lg  text-white/50 sm:text-xl lg:text-8xl" style={{  letterSpacing: "-0.1em" }}>
                OUR LOS ANGELES
              </p>
              <p className="text-lg text-white/50 sm:text-xl lg:text-8xl" style={{  letterSpacing: "-0.1em" }}>
                SHOWROOM
              </p>
            </div>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
