"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

type ScheduleVisitProps = {
  image?: string;
};

export default function ScheduleVisit({
  image = "/images/schedule-visit-left.jpg",
}: ScheduleVisitProps) {
  return (
    <Section id="schedule-visit" className="relative">
      {/* Background - Single Image */}
      <div className="absolute inset-0 h-[100svh]">
        {image && (
          <Image
            src={image}
            alt="Schedule a visit"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100dvw"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-[100svh] flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Left - Schedule A Visit */}
        <SectionContent delay={0.1}>
          <div className="max-w-md">
            <h2 className="schedule-text mb-2 font-bold uppercase text-white whitespace-nowrap" style={{ lineHeight: "0.2", fontSize: "clamp(1.5rem, 8dvw, 9rem)" }}>
              SCHEDULE
            </h2>
            <h2 className="visit-text font-bold uppercase text-[#0A56FF]" style={{ lineHeight: "0.95", fontSize: "clamp(2rem, 18dvw, 20.25rem)" }}>
              VISIT
            </h2>
          </div>
        </SectionContent>

        {/* Top Right - Schedule CTA */}
        <div className="absolute right-6 top-20 xl:right-12 xl:top-20">
          <SectionContent delay={0.2}>
            <Link href="/schedule" className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block" style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}>SCHEDULE <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span></Link>
          </SectionContent>
        </div>

        {/* Bottom Center - Showroom Tagline */}
        <div className="absolute bottom-0 left-1/2 right-0 flex justify-center pb-6 sm:pb-10 lg:pb-12">
          <SectionContent delay={0.3}>
            <div className="text-center">
              <p className="text-white/50" style={{ letterSpacing: "-0.1em", fontSize: "clamp(1.25rem, 5dvw, 6rem)", lineHeight: "0.9" }}>
                OUR LOS ANGELES
              </p>
              <p className="text-white/50" style={{ letterSpacing: "-0.1em", fontSize: "clamp(1.25rem, 5dvw, 6rem)", lineHeight: "0.9" }}>
                HEADQUARTERS
              </p>
            </div>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
