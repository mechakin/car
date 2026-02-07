"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type AcademyProps = {
  logoImage?: string;
  workshopImage?: string;
};

export default function Academy({
  logoImage = "/images/academy-logo.png",
  workshopImage = "/images/academy-workshop.png",
}: AcademyProps) {
  return (
    <Section id="academy" className="relative h-screen">
      <div className="relative h-full flex">
        {/* Left Side - Black Background with Logo and Text */}
        <div className="relative w-1/2 bg-black text-white flex flex-col px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
          {/* Logo in corner */}
          <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] aspect-square mb-8 sm:mb-10 lg:mb-12">
            {logoImage && (
              <Image
                src={logoImage}
                alt="West Coast Customs Academy Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 600px, (max-width: 1024px) 700px, (max-width: 1280px) 800px, (max-width: 1536px) 900px, 1000px"
              />
            )}
          </div>

          {/* Text below logo */}
          <SectionContent delay={0.2}>
            <div className="space-y-1 sm:space-y-2">
              <p className="font-bold uppercase leading-none text-white tracking-tighter" style={{ letterSpacing: "-0.1em", lineHeight: "0.9", fontSize: "clamp(1.5rem, 7vw, 8rem)" }}>
                WHERE THE LEADERS OF TOMORROW ARE BUILT
              </p>
              <p className="uppercase leading-none !text-[#0A56FF] tracking-tighter" style={{ letterSpacing: "-0.1em", lineHeight: "0.9", fontSize: "clamp(1rem, 4vw, 4.5rem)" }}>
                IN LOS ANGELES CALIFORNIA
              </p>
            </div>
          </SectionContent>
        </div>

        {/* Right Side - Workshop Image */}
        <div className="relative w-1/2">
          {workshopImage && (
            <Image
              src={workshopImage}
              alt="West Coast Customs Academy Workshop"
              fill
              className="object-cover"
              priority
              sizes="50vw"
             
            />
          )}
          
          {/* Learn More Button - Top Right */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 lg:top-12 lg:right-12 z-10">
            <SectionContent delay={0.1}>
              <button className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity" style={{ letterSpacing: "-0.1em", lineHeight: "0.9", fontSize: "clamp(0.75rem, 3vw, 3.5rem)" }}>
                LEARN MORE <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white", textShadow: "1px 0 0 currentColor, -1px 0 0 currentColor, 0 1px 0 currentColor, 0 -1px 0 currentColor" }}>→</span>
              </button>
            </SectionContent>
          </div>
        </div>
      </div>
    </Section>
  );
}
