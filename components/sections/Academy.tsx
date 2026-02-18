"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

type AcademyProps = {
  logoImage?: string;
  workshopImage?: string;
};

export default function Academy({
  logoImage = "/images/academy-logo.jpg",
  workshopImage = "/images/academy-workshop.jpg",
}: AcademyProps) {
  return (
    <Section id="academy" className="!min-h-[50svh] h-[66.6svh] sm:!min-h-[100svh] sm:h-[100svh]">
      <div className="relative h-full flex">
        {/* Left Side - Black Background with Logo and Text */}
        <div className="relative w-1/2 bg-black text-white flex flex-col px-6 sm:px-8 lg:px-12 py-8 sm:py-10 lg:py-12">
          {/* Logo in corner */}
          <div className="relative w-full max-w-[340px] sm:max-w-[425px] lg:max-w-[510px] xl:max-w-[595px] 2xl:max-w-[680px] aspect-square mb-8 sm:mb-10 lg:mb-12">
            {logoImage && (
              <Image
                src={logoImage}
                alt="West Coast Customs Academy Logo"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 425px, (max-width: 1280px) 510px, (max-width: 1536px) 595px, 680px"
                quality={100}
              />
            )}
          </div>

          {/* Text below logo */}
          <SectionContent delay={0.2}>
            <div className="space-y-1 sm:space-y-2">
              <p className="font-bold uppercase leading-none text-white tracking-tighter" style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1.5rem, 7dvw, 5.5rem)" }}>
                WHERE THE LEADERS OF TOMORROW ARE BUILT
              </p>
              <p className="uppercase leading-none !text-[#0A56FF] tracking-tighter" style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 4rem)" }}>
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
              quality={100}
              sizes="50dvw"
            />
          )}
          
          {/* Learn More Button - Top Right */}
          <div className="absolute left-0 right-0 z-10 flex justify-end" style={{ top: "clamp(1.5rem, 3dvw, 3rem)", paddingRight: "clamp(1.5rem, 3dvw, 3rem)" }}>
            <SectionContent delay={0.1}>
              <Link href="https://westcoastcustomsacademy.com/" target="_blank" rel="noopener noreferrer" className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block" style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}>
                LEARN MORE <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
              </Link>
            </SectionContent>
          </div>
        </div>
      </div>
    </Section>
  );
}
