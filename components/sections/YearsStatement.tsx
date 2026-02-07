"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type YearsStatementProps = {
  logoImage?: string;
};

export default function YearsStatement({
  logoImage = "/images/wcc-logo.png",
}: YearsStatementProps) {
  return (
    <Section id="years-statement" className="relative overflow-hidden">
      {/* Blue Background */}
      <div className="absolute inset-0 bg-[#0A56FF]" />

      {/* Abstract Black Shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3">
        <div className="h-full w-full bg-black" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* West Coast Logo - Positioned between blue and black sections */}
      {logoImage && (
        <div className="absolute bottom-[33%] right-6 z-20 sm:right-10 lg:right-12">
          <Image
            src={logoImage}
            alt="West Coast Customs Logo"
            width={120}
            height={120}
            className="h-auto w-24 object-contain sm:w-32 lg:w-40"
            priority
            unoptimized
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Section - 32 YEARS */}
        <SectionContent delay={0.1}>
          <div className="max-w-2xl">
            <div className="mb-4 text-8xl font-bold sm:text-9xl lg:text-[12rem]" style={{ lineHeight: "0.9" }}>
              32
            </div>
            <div className="mb-6 text-5xl font-bold uppercase sm:text-6xl lg:text-7xl" style={{ lineHeight: "0.9" }}>
              YEARS
            </div>
            <p className="text-sm leading-relaxed text-white sm:text-base">
              OF PUSHING THE LIMITS OF AUTOMOTIVE CUSTOMIZATION AND
              EXPRESSION...
            </p>
          </div>
        </SectionContent>

        {/* Bottom Section - Statement */}
        <SectionContent delay={0.3}>
          <div className="max-w-3xl">
            <h2 className="text-5xl font-bold uppercase sm:text-6xl lg:text-7xl" style={{ lineHeight: "0.9" }}>
              WE AREN'T
              <br />
              GOING ANYWHERE
            </h2>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
