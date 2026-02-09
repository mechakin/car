"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

type ScheduleVisitProps = {
  leftImage?: string;
  rightImage?: string;
};

export default function ScheduleVisit({
  leftImage = "/images/schedule-visit-left.jpg",
  rightImage = "/images/schedule-visit-right.jpg",
}: ScheduleVisitProps) {
  return (
    <Section id="schedule-visit" className="relative">
      {/* Background - Split Layout */}
      <div className="absolute inset-0 h-[100dvh] grid grid-cols-2">
        {/* Left - Merchandise */}
        {leftImage && (
          <div className="relative">
            <Image
              src={leftImage}
              alt="Merchandise"
              fill
              className="object-cover"
              priority
              quality={100}
              sizes="50dvw"
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
              quality={100}
              sizes="50dvw"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-[100dvh] flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Left - Schedule A Visit */}
        <SectionContent delay={0.1}>
          <div className="max-w-md">
            <h2 className="schedule-text mb-2 font-bold uppercase text-white whitespace-nowrap" style={{ lineHeight: "0.2", fontSize: "clamp(2.25rem, 9dvw, 9rem)" }}>
              SCHEDULE
            </h2>
            <h2 className="visit-text font-bold uppercase text-[#0A56FF]" style={{ lineHeight: "0.95", fontSize: "20.25dvw" }}>
              VISIT
            </h2>
          </div>
        </SectionContent>

        {/* Top Right - Schedule CTA */}
        <div className="absolute right-6 top-20 xl:right-12 xl:top-20">
          <SectionContent delay={0.2}>
            <Link href="/schedule" className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block text-xl sm:text-5xl" style={{ letterSpacing: "-0.075em", lineHeight: "0.9" }}>SCHEDULE <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span></Link>
          </SectionContent>
        </div>

        {/* Bottom Center - Showroom Tagline (centered on right image) */}
        <div className="absolute bottom-0 left-1/2 right-0 flex justify-center pb-6 sm:pb-10 lg:pb-12">
          <SectionContent delay={0.3}>
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white/50" style={{ letterSpacing: "-0.1em" }}>
                OUR LOS ANGELES
              </p>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white/50" style={{ letterSpacing: "-0.1em" }}>
                SHOWROOM
              </p>
            </div>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
