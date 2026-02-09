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
  logoImage = "/images/academy-logo.png",
  workshopImage = "/images/academy-workshop.png",
}: AcademyProps) {
  return (
    <Section id="academy" className="!min-h-[50vh] h-[50vh] sm:!min-h-screen sm:h-screen">
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
              <p className="font-bold uppercase leading-none text-white tracking-tighter" style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1.5rem, 7vw, 8rem)" }}>
                WHERE THE LEADERS OF TOMORROW ARE BUILT
              </p>
              <p className="uppercase leading-none !text-[#0A56FF] tracking-tighter" style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4vw, 4.5rem)" }}>
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
              sizes="50vw"
            />
          )}
          
          {/* Learn More Button - Top Right */}
          <div className="absolute top-6 right-6 xl:top-12 xl:right-12 z-10">
            <SectionContent delay={0.1}>
              <Link href="/academy" className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block text-xl sm:text-5xl" style={{ letterSpacing: "-0.075em", lineHeight: "0.9" }}>
                LEARN MORE <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
              </Link>
            </SectionContent>
          </div>
        </div>
      </div>
    </Section>
  );
}
