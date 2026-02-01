"use client";

import Image from "next/image";
import Logo from "@/components/Logo";
import Section from "./Section";
import SectionContent from "./SectionContent";

type HeroModelWProps = {
  carImage1?: string;
  carImage2?: string;
};

export default function HeroModelW({
  carImage1 = "/images/model-w-car-1.png",
  carImage2 = "/images/model-w-car-2.png",
}: HeroModelWProps) {
  return (
    <Section id="hero-model-w" className="relative">
      <div className="relative h-full w-full">
        {/* Background */}
        <div className="absolute inset-0 bg-black" />

        {/* Header */}
        <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 pt-6 sm:px-10 lg:px-12">
          <Logo />
          <div className="flex items-center gap-6">
            <button className="text-sm uppercase text-white">DISCOVER →</button>
            <button className="flex flex-col gap-1">
              <span className="h-0.5 w-6 bg-white" />
              <span className="h-0.5 w-6 bg-white" />
            </button>
          </div>
        </div>

        {/* Car Images - Positioned diagonally, smaller size */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative h-[70%] w-full max-w-6xl">
            {/* Top car - rear view */}
            {carImage1 && (
              <div className="absolute right-0 top-0 h-[45%] w-[50%]">
                <Image
                  src={carImage1}
                  alt="The Model W - Rear View"
                  fill
                  className="object-contain object-top-right"
                  priority
                />
              </div>
            )}
            {/* Bottom car - side profile */}
            {carImage2 && (
              <div className="absolute bottom-0 left-0 h-[55%] w-[60%]">
                <Image
                  src={carImage2}
                  alt="The Model W - Side View"
                  fill
                  className="object-contain object-bottom-left"
                  priority
                />
              </div>
            )}
          </div>
        </div>

        {/* Main Content - Text centered */}
        <div className="relative z-10 flex h-screen flex-col items-center justify-center px-6 sm:px-10 lg:px-12">
          <SectionContent delay={0.2}>
            <h1 className="text-center text-5xl font-bold uppercase leading-none sm:text-6xl lg:text-7xl">
              THE
              <br />
              MODEL W
            </h1>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
