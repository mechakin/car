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
      <div className="relative h-screen flex flex-col">
        {/* Background Image Collage - Top 75-80% */}
        <div className="relative flex-1 h-[75%]">
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

          {/* Text Overlaying Photos */}
          <div className="absolute inset-0 z-10 px-6 pt-6 sm:px-10 sm:pt-10 lg:px-12 lg:pt-12">
            <div className="flex h-full flex-col">
              {/* Top Row - WEST COAST CUSTOMS and LEARN MORE aligned */}
              <div className="flex items-start justify-between">
                {/* Top Left - WEST COAST CUSTOMS */}
                <div>
                  <SectionContent delay={0.1}>
                    <h2 className="text-left text-2xl font-bold uppercase leading-none text-white sm:text-3xl lg:text-4xl">
                      WEST COAST CUSTOMS
                    </h2>
                    <h2 className="text-left text-5xl font-bold uppercase leading-none text-[#0A56FF] sm:text-6xl lg:text-7xl xl:text-8xl">
                      ACADEMY
                    </h2>
                  </SectionContent>
                </div>

                {/* Top Right - LEARN MORE */}
                <div>
                  <SectionContent delay={0.3}>
                    <button className="text-sm uppercase text-white sm:text-base">LEARN MORE →</button>
                  </SectionContent>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Black Bar - Bottom 20-25% */}
        <div className="relative z-10 h-[25%] bg-black px-6 flex flex-col justify-center items-center sm:px-10 lg:px-12">
          <SectionContent delay={0.2}>
            <div className="text-center">
              <p className="text-lg font-bold uppercase leading-tight text-white sm:text-xl lg:text-2xl">
                WHERE THE LEADERS OF TOMORROW ARE BUILT
              </p>
              <p className="text-lg font-bold uppercase leading-tight text-white sm:text-xl lg:text-2xl mt-2">
                IN LOS ANGELES CALIFORNIA
              </p>
            </div>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
