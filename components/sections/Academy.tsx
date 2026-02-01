"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type AcademyProps = {
  leftImage?: string;
  middleImage?: string;
  rightImage?: string;
};

export default function Academy({
  leftImage = "/images/academy-left.png",
  middleImage = "/images/academy-middle.png",
  rightImage = "/images/academy-right.png",
}: AcademyProps) {
  return (
    <Section id="academy" className="relative">
      {/* Background Image Collage */}
      <div className="absolute inset-0 h-screen">
        <div className="grid h-full grid-cols-3">
          {/* Left Panel - Welding */}
          {leftImage && (
            <div className="relative">
              <Image
                src={leftImage}
                alt="Welding"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          {/* Middle Panel - Assembly */}
          {middleImage && (
            <div className="relative">
              <Image
                src={middleImage}
                alt="Assembly"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
          {/* Right Panel - Design */}
          {rightImage && (
            <div className="relative">
              <Image
                src={rightImage}
                alt="Design"
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Headlines */}
        <div className="text-center">
          <SectionContent delay={0.1}>
            <h2 className="mb-2 text-4xl font-bold uppercase leading-none sm:text-5xl lg:text-6xl">
              WEST COAST CUSTOMS
            </h2>
            <h2 className="text-5xl font-bold uppercase leading-none text-[#0A56FF] sm:text-6xl lg:text-7xl">
              ACADEMY
            </h2>
          </SectionContent>
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <SectionContent delay={0.3}>
            <button className="text-sm uppercase text-white">LEARN MORE →</button>
          </SectionContent>
        </div>

        {/* Bottom Tagline */}
        <div className="text-center">
          <SectionContent delay={0.2}>
            <p className="text-lg font-semibold uppercase leading-tight sm:text-xl lg:text-2xl">
              WHERE THE LEADERS OF TOMORROW ARE BUILT
              <br />
              IN LOS ANGELES CALIFORNIA
            </p>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
