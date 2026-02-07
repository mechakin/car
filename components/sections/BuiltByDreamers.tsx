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
      <div className="absolute top-0 left-0 right-0 z-20 pt-6 sm:pt-8 lg:pt-12">
        <div className="flex items-start justify-center px-2 sm:px-4">
          <SectionContent delay={0.1}>
            <div className="relative inline-block">
              {/* First line: BUILT with BY positioned to the right */}
              <div className="relative flex items-baseline gap-2 sm:gap-3 md:gap-4">
                <span 
                  className="font-bold uppercase leading-none text-white"
                  style={{ 
                    letterSpacing: "-0.075em",
                    fontSize: "min(12vw, 19.5vh)",
                    lineHeight: "0.9"
                  }}
                >
                  BUILT
                </span>
                <span
                  className="font-bold uppercase leading-none text-white"
                  style={{ 
                    fontSize: "min(6vw, 9.75vh)",
                    transform: "translateY(-0.3em)",
                    letterSpacing: "-0.075em"
                  }}
                >
                  BY
                </span>
              </div>
              {/* Second line: DREAMERS aligned below BY */}
              <div 
                className="font-bold uppercase leading-none text-white"
                style={{ 
                  fontSize: "min(12vw, 19.5vh)",
                  letterSpacing: "-0.075em",
                  lineHeight: "0.9",
                  marginLeft: "calc(min(6vw, 9.75vh) * 0.5 + clamp(20rem, 28vw, 28rem))",
                  marginTop: "-0.25em"
                }}
              >
                DREAMERS
              </div>
              {/* Third line: SINCE 1993 */}
              <div 
                className="font-normal uppercase mt-2 sm:mt-3"
                style={{ 
                  fontSize: "min(2vw, 3vh)",
                  letterSpacing: "0.5em",
                  lineHeight: "0.5",
                  marginLeft: "calc(min(6vw, 9.75vh) * 0.5 + clamp(60rem, 75vw, 75rem))",
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
              className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl xl:text-5xl"
              style={{ letterSpacing: "-0.075em", color: "#0A56FF", lineHeight: "0.6" }}
            >
              Built by Dreamers is more than a phrase
            </p>
            <p
              className="mt-2 text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl"
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
              className="text-lg leading-tight text-white sm:text-xl lg:text-2xl xl:text-3xl"
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
              className="text-lg leading-tight text-white sm:text-xl lg:text-2xl xl:text-3xl"
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
