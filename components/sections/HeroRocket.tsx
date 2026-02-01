"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Logo from "@/components/Logo";
import Section from "./Section";
import SectionContent from "./SectionContent";

type HeroRocketProps = {
  carImage?: string;
};

export default function HeroRocket({ carImage = "/images/rocket-hero.png" }: HeroRocketProps) {
  const theRef = useRef<HTMLSpanElement>(null);
  const rocketRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const matchWidth = () => {
      if (theRef.current && rocketRef.current) {
        const theWidth = theRef.current.offsetWidth;
        const rocketWidth = rocketRef.current.scrollWidth;
        if (rocketWidth > 0 && theWidth > 0) {
          const scale = theWidth / rocketWidth;
          rocketRef.current.style.transform = `scaleX(${scale})`;
        }
      }
    };

    matchWidth();
    window.addEventListener("resize", matchWidth);
    return () => window.removeEventListener("resize", matchWidth);
  }, []);

  return (
    <Section id="hero-rocket" className="relative">
      <div className="relative h-full w-full">
        {/* Background */}
        <div className="absolute inset-0 bg-black">
          {carImage && (
            <div className="absolute inset-0 flex items-center justify-end pr-[10vw]">
              <div className="relative h-[80vh] w-full" style={{ maxWidth: 'min(70vw)' }}>
                <Image
                  src={carImage}
                  alt="The Rocket"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
                />
              </div>
            </div>
          )}
        </div>

        {/* Header */}
        <div className="absolute left-0 right-0 top-0 z-20 flex items-center justify-between px-6 pt-6 sm:px-10 lg:px-12">
          <Logo />
          <button className="flex flex-col gap-1">
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
          </button>
        </div>

        {/* DISCOVER - Aligned with top of car */}
        <div className="absolute right-0 z-20 px-6 sm:px-10 lg:px-12" style={{ top: '10vh' }}>
          <button className="uppercase text-white font-bold" style={{ fontSize: '1.75vw', letterSpacing: '-0.10em'}}>DISCOVER →</button>
        </div>

        {/* Main Content - Text middle-left */}
        <div className="relative z-10 flex h-screen flex-col justify-center px-6 sm:px-10 lg:px-12">
          <SectionContent delay={0.2}>
            <h1 className="text-left font-bold uppercase leading-none" style={{ letterSpacing: '-0.5em' }}>
              <span 
                ref={theRef}
                className="block"
                style={{ 
                  transformOrigin: 'left',
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.10em',
                  fontSize: '8vw',
                }}
              >
                THE
              </span>
              <span 
                ref={rocketRef}
                className="block"
                style={{ 
                  transformOrigin: 'left',
                  whiteSpace: 'nowrap',
                  letterSpacing: '-0.10em',
                  fontSize: '3.5vw',
                  marginTop: '-1vw',
                }}
              >
                ROCKET
              </span>
            </h1>
          </SectionContent>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 pb-6 text-center text-xs uppercase text-white sm:px-10 lg:px-12">
          WEST COAST CUSTOMS ALL RIGHTS RESERVED 2026
        </div>
      </div>
    </Section>
  );
}
