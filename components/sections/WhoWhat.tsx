"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type WhoWhatProps = {
  logoImage?: string;
};

export default function WhoWhat({
  logoImage = "/images/wcc-logo.png",
}: WhoWhatProps) {
  return (
    <Section id="who-what" className="relative overflow-hidden">
      {/* Background Colors */}
      <div className="relative z-0 flex h-screen">
        {/* Left - WHO WE ARE - All Black */}
        <div className="relative w-1/2 bg-black"></div>

        {/* Right - WHAT WE DO - All Blue */}
        <div className="relative w-1/2 bg-[#0A56FF]"></div>
      </div>

      {/* Logo - Between sections, full page, rotated 180 degrees - Above backgrounds, below text */}
      {logoImage && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src={logoImage}
              alt="West Coast Customs Logo"
              fill
              className="object-contain"
              priority
              sizes="100vw"
              style={{ transform: "rotate(90deg)" }}
            />
          </div>
        </div>
      )}

      {/* Text Content - Above logo */}
      <div className="absolute inset-0 z-20 flex h-screen pointer-events-none">
        {/* Left - WHO WE ARE */}
        <div className="relative w-1/2 px-6 py-20 sm:px-10 sm:py-20 lg:px-12 lg:py-32 flex justify-center">
          <SectionContent delay={0.1}>
            <div className="text-center pointer-events-auto">
              <h2 className="mb-6 font-bold uppercase text-white" style={{ lineHeight: "0.9", fontSize: "clamp(1.875rem, 5vw, 8rem)" }}>
                WHO WE ARE
              </h2>
               <p className="leading-relaxed text-white max-w-3xl" style={{ lineHeight: "2", fontSize: "clamp(0.875rem, 2vw, 3rem)" }}>
                West Coast Customs is your one stop shop for all your car
                customization needs. Located in Southern California, the shop
                houses a veteran team of technicians, fabricators, designers,
                electricians, painters and so much more.
              </p>
            </div>
          </SectionContent>
        </div>

        {/* Right - WHAT WE DO */}
        <div className="relative w-1/2 px-6 py-20 sm:px-10 sm:py-20 lg:px-12 lg:py-32 flex justify-center">
          <SectionContent delay={0.2}>
            <div className="text-center pointer-events-auto">
              <h2 className="mb-6 font-bold uppercase text-white" style={{ lineHeight: "0.9", fontSize: "clamp(1.875rem, 5vw, 8rem)" }}>
                WHAT WE DO
              </h2>
              <p className="leading-relaxed text-white max-w-2xl" style={{ lineHeight: "2", fontSize: "clamp(0.875rem, 2vw, 3rem)" }}>
                You may have seen some of our one-of-a-kind, multi-million-dollar
                custom car builds on our TV show or in the news, but we also
                specialize in smaller customizations. From wraps to wheels and
                everything in between, contact us today to inquire about our
                services.
              </p>
            </div>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
