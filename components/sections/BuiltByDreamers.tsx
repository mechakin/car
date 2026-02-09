"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type BuiltByDreamersProps = {
  backgroundImage?: string;
};

export default function BuiltByDreamers({
  backgroundImage = "/images/built-by-dreamers-bg.jpg",
}: BuiltByDreamersProps) {
  return (
    <Section id="built-by-dreamers" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 h-screen">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Car storage facility"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={100}
          />
        )}
      </div>

      {/* Top Text - "BUILT BY DREAMERS" */}
      <div className="absolute top-0 left-0 right-0 z-20 sm:pt-0 pt-6">
        <div className="flex items-start justify-center px-2 sm:px-4">
          <SectionContent delay={0.1}>
            <div className="relative inline-block">
              {/* First line: BUILT with BY positioned to the right */}
              <div className="relative flex items-baseline gap-2 sm:gap-3 md:gap-4">
                <span 
                  className="built-text font-bold uppercase leading-none text-white text-5xl sm:text-6xl md:text-8xl lg:text-[min(12vw,19.5vh)]"
                  style={{ 
                    letterSpacing: "-0.075em",
                    lineHeight: "0.9"
                  }}
                >
                  BUILT
                </span>
                <span
                  className="by-text font-bold uppercase leading-none text-white text-3xl sm:text-3xl md:text-5xl lg:text-[min(6vw,9.75vh)]"
                  style={{ 
                    transform: "translateY(-0.3em)",
                    letterSpacing: "-0.075em"
                  }}
                >
                  BY
                </span>
              </div>
              {/* Second line: DREAMERS aligned below BY */}
              <div 
                className="dreamers-text font-bold uppercase leading-none text-white text-5xl sm:text-6xl md:text-8xl lg:text-[min(12vw,19.5vh)]"
                  style={{ 
                    letterSpacing: "-0.075em",
                    lineHeight: "0.9",
                    marginTop: "-0.25em"
                  }}
                >
                  DREAMERS
                </div>
              {/* Third line: SINCE 1993 */}
              <div 
                className="since-text font-normal uppercase mt-2 sm:mt-3 text-white/50 text-base sm:text-sm md:text-2xl lg:text-[min(2vw,3vh)]"
                style={{ 
                  letterSpacing: "0.5em",
                  lineHeight: "0.5",
                  fontWeight: 300
                }}
              >
                SINCE 1993
              </div>
            </div>
          </SectionContent>
        </div>
      </div>

      {/* Content Overlay - Bottom Left Text */}
      <div className="relative z-10 flex h-screen flex-col justify-end px-6 pb-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl space-y-4 lg:max-w-4xl xl:max-w-5xl">
          <SectionContent delay={0.3}>
            <p
              className="text-xl font-semibold leading-tight sm:text-3xl lg:text-4xl xl:text-5xl"
              style={{ letterSpacing: "-0.075em", color: "#0A56FF", lineHeight: "0.5" }}
            >
              Built by Dreamers is more than a phrase
            </p>
            <p
              className="mt-2 text-white text-md sm:text-xl lg:text-2xl xl:text-3xl"
              style={{
                letterSpacing: "-0.075em",
                textTransform: "none",
                color: "#FFFFFF"
              }}
            >
              it is the foundation of our work behind every project we create.
            </p>
          </SectionContent>

          <SectionContent delay={0.4}>
            <p
              className="text-md leading-tight text-white sm:text-xl lg:text-2xl xl:text-3xl"
              style={{
                letterSpacing: "-0.075em",
                textTransform: "none",
              }}
            >
              Los Angeles is a city powered by ambition, risk, and imagination.
              It&apos;s where culture is born, where industries collide, and where
              ideas are tested at the highest level.
            </p>
          </SectionContent>

          <SectionContent delay={0.5}>
            <p
              className="text-md leading-tight text-white sm:text-xl lg:text-2xl xl:text-3xl"
              style={{
                letterSpacing: "-0.075em",
                textTransform: "none",
              }}
            >
              Being built here means our projects are shaped by that energy— by
              dreamers who refuse limits, who see possibility where others see
              constraints.
            </p>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
