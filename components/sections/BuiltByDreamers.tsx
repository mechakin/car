"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type BuiltByDreamersProps = {
  backgroundImage?: string;
};

export default function BuiltByDreamers({
  backgroundImage,
}: BuiltByDreamersProps) {
  return (
    <Section id="built-by-dreamers" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 h-screen">
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt="Car storage facility"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="h-full w-full bg-black">
            <div className="h-full w-full bg-gradient-to-b from-black via-black/80 to-black" />
          </div>
        )}
      </div>

      {/* Top Black Bar with "BUILT BY DREAMERS" */}
      <div className="absolute top-0 left-0 right-0 z-20 bg-black py-8 sm:py-10 lg:py-12">
        <SectionContent delay={0.1}>
          <h2 className="flex items-baseline justify-center gap-3 font-bold uppercase leading-none sm:gap-4 lg:gap-5" style={{ letterSpacing: '-0.075em' }}>
            <span className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem]">BUILT</span>
            <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl" style={{ transform: 'translateY(-0.15em)' }}>BY</span>
            <span className="text-7xl sm:text-8xl lg:text-9xl xl:text-[10rem]">DREAMERS</span>
          </h2>
        </SectionContent>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-screen flex-col justify-end px-6 pb-20 sm:px-10 lg:px-12">

        {/* Bottom Text Blocks */}
        <div className="max-w-2xl space-y-4">
          <SectionContent delay={0.3}>
            <p className="text-lg font-semibold uppercase leading-relaxed sm:text-xl" style={{ letterSpacing: '-0.075em', color: '#0A56FF' }}>
              Built by Dreamers is more than a phrase
            </p>
            <p className="mt-1 text-sm leading-relaxed text-white/90 sm:text-base" style={{ letterSpacing: '-0.075em', textTransform: 'none' }}>
              it is the foundation of our work behind every project we create.
            </p>
          </SectionContent>

          <SectionContent delay={0.4}>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base" style={{ letterSpacing: '-0.075em', textTransform: 'none' }}>
              Los Angeles is a city powered by ambition, risk, and imagination.
              It's where culture is born, where industries collide, and where
              ideas are tested at the highest level.
            </p>
          </SectionContent>

          <SectionContent delay={0.5}>
            <p className="text-sm leading-relaxed text-white/80 sm:text-base" style={{ letterSpacing: '-0.075em', textTransform: 'none' }}>
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
