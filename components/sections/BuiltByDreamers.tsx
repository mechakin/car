"use client";

import Image from "next/image";
import Link from "next/link";
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
      <div className="absolute inset-0 h-[100svh] mobile-stable-viewport-h">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Car storage facility"
            fill
            className="object-cover"
            priority
            sizes="100dvw"
            quality={100}
          />
        )}
      </div>

      {/* Top Text - "BUILT BY DREAMERS" - fluid scale so it shrinks with viewport */}
      <div className="absolute top-0 left-0 right-0 z-20 sm:pt-0 pt-6 overflow-hidden">
        <div className="flex items-start justify-center px-2 sm:px-4 min-w-0">
          <SectionContent delay={0.1}>
            <div className="relative inline-block max-w-full min-w-0">
              {/* First line: BUILT with BY positioned to the right */}
              <div className="relative flex items-baseline gap-2 sm:gap-3 md:gap-4">
                <span 
                  className="built-text font-bold uppercase leading-none text-white shrink-0"
                  style={{ 
                    letterSpacing: "-0.075em",
                    lineHeight: "0.9",
                    fontSize: "clamp(2rem, 10dvw, min(12dvw, 19.5dvh))"
                  }}
                >
                  BUILT
                </span>
                <span
                  className="by-text font-bold uppercase leading-none text-white shrink-0"
                  style={{ 
                    transform: "translateY(-0.3em)",
                    letterSpacing: "-0.075em",
                    fontSize: "clamp(1.25rem, 5dvw, min(6dvw, 9.75dvh))"
                  }}
                >
                  BY
                </span>
              </div>
              {/* Second line: DREAMERS aligned below BY */}
              <div 
                className="dreamers-text font-bold uppercase leading-none text-white"
                  style={{ 
                    letterSpacing: "-0.075em",
                    lineHeight: "0.9",
                    marginTop: "-0.25em",
                    fontSize: "clamp(2rem, 10dvw, min(12dvw, 19.5dvh))"
                  }}
                >
                  DREAMERS
                </div>
              {/* Third line: SINCE 1993 */}
              <div 
                className="since-text font-normal uppercase mt-2 sm:mt-3 text-white/50"
                style={{ 
                  letterSpacing: "0.5em",
                  lineHeight: "0.5",
                  fontWeight: 300,
                  fontSize: "clamp(0.625rem, 1.5dvw, min(2dvw, 3dvh))"
                }}
              >
                SINCE 1993
              </div>
            </div>
          </SectionContent>
        </div>
      </div>

        {/* Top Right - Discover */}
      <div className="absolute left-0 right-0 z-30 flex justify-end" style={{ top: "clamp(1.5rem, 3dvw, 3rem)", paddingRight: "clamp(1.5rem, 3dvw, 3rem)" }}>
        <SectionContent delay={0.1}>
          <Link
            href="/founder"
            className="hero-link-mobile-glow font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
          >
            DISCOVER <span className="hero-link-arrow" style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
          </Link>
        </SectionContent>
      </div>

      {/* Content Overlay - Bottom Left Text */}
      <div className="relative z-10 flex h-[100dvh] mobile-stable-viewport-h flex-col justify-end px-6 pb-8 sm:pb-20 sm:px-10 lg:px-12 pointer-events-none">
        <div className="max-w-2xl space-y-4 lg:max-w-4xl xl:max-w-5xl pointer-events-auto">
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
