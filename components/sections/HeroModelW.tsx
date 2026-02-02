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

        {/* Car Images */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative h-full w-full">
            {/* Top car - smaller, rear view, top-right */}
            {carImage1 && (
              <div className="absolute right-[10%] top-[20%] sm:h-[40%] sm:w-[40%]">
                <Image
                  src={carImage1}
                  alt="The Model W - Rear View"
                  fill
                  className="object-contain object-top-right"
                  priority
                />
              </div>
            )}
            {/* Side profile car - larger, centered horizontally and vertically */}
            {carImage2 && (
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[100%] w-[100%]">
                <Image
                  src={carImage2}
                  alt="The Model W - Side View"
                  fill
                  className="object-contain"
                  priority
                  style={{ mixBlendMode: 'normal' }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Main Content - Text bottom-left */}
        <div className="relative z-10 flex h-screen flex-col justify-end px-6 pb-6 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12">
          <div className="flex items-end justify-between w-full">
            <SectionContent delay={0.2}>
              <h1 className="text-left font-bold uppercase leading-none">
                <span 
                  className="block"
                  style={{ 
                    transformOrigin: 'left',
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.075em',
                    fontSize: '8vw',
                  }}
                >
                  THE
                </span>
                <span 
                  className="block"
                  style={{ 
                    transformOrigin: 'left',
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.10em',
                    fontSize: '3.5vw',
                    marginTop: '-1vw',
                  }}
                >
                  MODEL W
                </span>

              </h1>
            </SectionContent>
            
            {/* DISCOVER - Aligned with MODEL W */}
            <SectionContent delay={0.3}>
              <button 
                className="uppercase text-white font-bold" 
                style={{ 
                  fontSize: '2vw', 
                  letterSpacing: '-0.10em',
                  marginBottom: 'clamp(0.5rem, 1vw, 1.5rem)'
                }}
              >
                DISCOVER →
              </button>
            </SectionContent>
          </div>
        </div>
      </div>
    </Section>
  );
}
