"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type BuiltByDreamersProps = {
  backgroundImage?: string;
};

export default function BuiltByDreamers({
  backgroundImage = "/images/built-by-dreamers-bg.png",
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
            quality={95}
          />
        )}
      </div>

      {/* Top Black Bar with "BUILT BY DREAMERS" */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black h-[20vh] min-h-[140px]">
        <div className="flex h-full items-center justify-center px-2 sm:px-4">
          <SectionContent delay={0.1}>
            <h2
              className="flex items-baseline justify-center gap-2 font-bold uppercase leading-none w-full sm:gap-3 md:gap-4"
              style={{ 
                letterSpacing: "-0.075em",
                fontSize: "min(12vw, 19.5vh)"
              }}
            >
              <span style={{ fontSize: "inherit" }}>
                BUILT
              </span>
              <span
                style={{ 
                  fontSize: "min(6vw, 9.75vh)",
                  transform: "translateY(-0.2em)"
                }}
              >
                BY
              </span>
              <span style={{ fontSize: "inherit" }}>
                DREAMERS
              </span>
            </h2>
          </SectionContent>
        </div>
      </div>

      {/* Content Overlay - Bottom Left Text */}
      <div className="relative z-10 flex h-screen flex-col justify-end px-6 pb-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl space-y-4 lg:max-w-4xl xl:max-w-5xl">
          <SectionContent delay={0.3}>
            <p
              className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl xl:text-5xl"
              style={{ letterSpacing: "-0.075em", color: "#0A56FF" }}
            >
              Built by Dreamers is more than a phrase
            </p>
            <p
              className="mt-2 leading-tight text-white/90 text-lg sm:text-xl lg:text-2xl xl:text-3xl"
              style={{
                letterSpacing: "-0.075em",
                textTransform: "none",
              }}
            >
              it is the foundation of our work behind every project we create.
            </p>
          </SectionContent>

          <SectionContent delay={0.4}>
            <p
              className="text-lg leading-tight text-white/80 sm:text-xl lg:text-2xl xl:text-3xl"
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
              className="text-lg leading-tight text-white/80 sm:text-xl lg:text-2xl xl:text-3xl"
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
