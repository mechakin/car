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

      {/* West Coast Logo - Above blue section */}
      {logoImage && (
        <div className="absolute top-[30%] left-0 right-0 z-10 px-6 sm:px-10 lg:px-12">
          <div className="relative w-full h-[50vw] ">
            <Image
              src={logoImage}
              alt="West Coast Customs Logo"
              fill
              className="object-contain"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col justify-between px-6 pt-20 pb-4 sm:px-10 sm:pt-20 sm:pb-8 lg:px-12 lg:pt-4 lg:pb-12">
        {/* Top Section - 32 YEARS */}
        <SectionContent delay={0.1}>
          <div className="max-w-[50vw]">
            <div className="mb-4 font-bold" style={{ lineHeight: "0.75", letterSpacing: "-0.10em", fontSize: "clamp(4rem, 30vw, 32rem)" }}>
              32
            </div>
            <div className="mb-6 font-bold uppercase" style={{ lineHeight: "0.75", letterSpacing: "-0.10em", fontSize: "clamp(2.5rem, 16vw, 12.5rem)" }}>
              YEARS
            </div>
            <p className="text-white pb-8 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-32" style={{ lineHeight: "0.9", letterSpacing: "-0.05em", fontSize: "clamp(1rem, 2.5vw, 10rem)" }}>
              OF PUSHING THE LIMITS OF AUTOMOTIVE CUSTOMIZATION AND
              EXPRESSION...
            </p>
          </div>
        </SectionContent>

        {/* Bottom Section - Statement */}
        <SectionContent delay={0.3}>
          <div className="text-center relative z-30 pb-24 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24 2xl:pb-0">
            <div className="font-bold uppercase" style={{ lineHeight: "0.8", letterSpacing: "-.75em" }}>
              <div className="text-[6rem] md:text-[10rem] lg:text-[12rem] xl:text-[16rem] 2xl:text-[18rem]">
                WE AREN&apos;T
              </div>
              <div className="text-[3.33rem] md:text-[5.55rem] lg:text-[6.66rem] xl:text-[8.88rem] 2xl:text-[10rem]">
                GOING ANYWHERE
              </div>
            </div>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
