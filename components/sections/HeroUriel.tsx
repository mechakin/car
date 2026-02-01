"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type HeroUrielProps = {
  carImage1?: string;
  carImage2?: string;
};

export default function HeroUriel({
  carImage1 = "/images/uriel-car-1.png",
  carImage2 = "/images/uriel-car-2.png",
}: HeroUrielProps) {
  return (
    <Section id="hero-uriel" className="relative">
      <div className="relative h-full w-full">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />

        {/* Car Images - Positioned diagonally, smaller size */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative h-[70%] w-full max-w-6xl">
            {/* Top car - front view */}
            {carImage1 && (
              <div className="absolute right-0 top-0 h-[45%] w-[50%]">
                <Image
                  src={carImage1}
                  alt="Uriel - Front View"
                  fill
                  className="object-contain object-top-right"
                  priority
                  quality={95}
                />
              </div>
            )}
            {/* Bottom car - rear view */}
            {carImage2 && (
              <div className="absolute bottom-0 left-0 h-[55%] w-[60%]">
                <Image
                  src={carImage2}
                  alt="Uriel - Rear View"
                  fill
                  className="object-contain object-bottom-left"
                  priority
                  quality={95}
                />
              </div>
            )}
          </div>
        </div>

        {/* Content - Text centered */}
        <div className="relative z-10 flex h-screen flex-col items-center justify-center px-6 sm:px-10 lg:px-12">
          <SectionContent delay={0.2}>
            <h1 className="text-center text-6xl font-bold uppercase leading-none sm:text-7xl lg:text-8xl">
              URIEL
            </h1>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
