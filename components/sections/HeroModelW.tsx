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
          <button className="flex flex-col gap-1">
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>

        {/* Car Images */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="relative h-full w-full">
            {/* Top car - smaller, rear view, top-right */}
            {carImage1 && (
              <div className="absolute right-0 top-[10%] h-[40%] w-[45%]">
                <Image
                  src={carImage1}
                  alt="The Model W - Rear View"
                  fill
                  className="object-contain object-top-right"
                  priority
                />
              </div>
            )}
            {/* Bottom car - larger, side profile, bottom-left */}
            {carImage2 && (
              <div className="absolute bottom-0 left-0 h-[70%] w-[65%]">
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

        {/* Main Content - Text bottom-left */}
        <div className="relative z-10 flex h-screen flex-col justify-end px-6 pb-6 sm:px-10 sm:pb-10 lg:px-12 lg:pb-12">
          <div className="flex items-start justify-between w-full">
            <SectionContent delay={0.2}>
              <h1 className="text-left font-bold uppercase leading-none">
                <span 
                  className="block"
                  style={{ 
                    transformOrigin: 'left',
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.10em',
                    fontSize: '3.5vw',
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
                    fontSize: 'clamp(3rem, 8vw, 8rem)',
                    marginTop: 'clamp(0.25rem, 0.5vw, 0.5rem)',
                  }}
                >
                  MODEL
                </span>
                <span 
                  className="block"
                  style={{ 
                    transformOrigin: 'left',
                    whiteSpace: 'nowrap',
                    letterSpacing: '-0.10em',
                    fontSize: 'clamp(3rem, 8vw, 8rem)',
                    marginTop: 'clamp(-0.5rem, -1vw, -1rem)',
                    marginLeft: 'clamp(1rem, 2vw, 2rem)',
                  }}
                >
                  W
                </span>
              </h1>
            </SectionContent>
            
            {/* DISCOVER - Aligned with top of first car */}
            <SectionContent delay={0.3}>
              <button 
                className="uppercase text-white" 
                style={{ fontSize: '3.5vw' }}
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
