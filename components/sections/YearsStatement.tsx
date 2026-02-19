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

      {/* Abstract Black Shapes - z-20 so text stays above logo (z-10) during animation */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-1/3 flex items-center justify-center">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        <SectionContent delay={0.3}>
          <div className="relative z-30 text-center px-6 sm:px-10 lg:px-12">
            <div className="font-bold uppercase text-white" style={{ lineHeight: "0.8", letterSpacing: "-.3em" }}>
              <div className="we-arent" style={{ fontSize: "clamp(2.5rem, 18dvw, 18rem)" }}>
                WE AREN&apos;T
              </div>
              <div className="going-anywhere" style={{ fontSize: "clamp(1.5rem, 10dvw, 10rem)" }}>
                GOING ANYWHERE
              </div>
            </div>
          </div>
        </SectionContent>
      </div>

      {/* West Coast Logo - Above blue section, shifts down on smaller viewports */}
      {logoImage && (
        <div className="absolute top-[30%] left-0 right-0 z-10 px-6 sm:px-10 lg:px-12 lg:top-[28%]">
          <div className="relative w-full lg:h-[50dvw] h-[78svh] ">
            <Image
              src={logoImage}
              alt="West Coast Customs Logo"
              fill
              className="object-contain"
              priority
              sizes="100dvw"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-[100svh] mobile-stable-viewport-h flex-col justify-between px-6 pt-6 pb-4 sm:px-10 sm:pb-8 lg:px-12 lg:pb-12">
        {/* Top Section - 32 YEARS */}
        <SectionContent delay={0.1}>
          <div className="years-statement-content md:max-w-[33dvw] max-w-[50dvw]">
            <div className="years-32 font-bold mb-2 sm:mb-4" style={{ lineHeight: "0.75", letterSpacing: "-0.10em", fontSize: "clamp(4rem, 50dvw, 32rem)" }}>
              32
            </div>
            <div className="years-years font-bold uppercase mb-3 min-[1600px]:mb-6" style={{ lineHeight: "0.6", letterSpacing: "-0.10em", fontSize: "clamp(1.5rem, 20dvw, 12.5rem)" }}>
              YEARS
            </div>
            <p className="years-statement-body text-white" style={{ lineHeight: "0.9", letterSpacing: "-0.05em", fontSize: "clamp(0.75rem, 7dvw, 2.5rem)" }}>
              OF PUSHING THE LIMITS OF AUTOMOTIVE CUSTOMIZATION AND
              EXPRESSION...
            </p>
          </div>
        </SectionContent>

        {/* Spacer to prevent overlap with black section (WE AREN'T GOING ANYWHERE) */}
        <div className="min-h-[33svh] flex-shrink-0" aria-hidden />
      </div>
    </Section>
  );
}
