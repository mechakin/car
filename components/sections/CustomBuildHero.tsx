"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

type CustomBuildHeroProps = {
  backgroundImage?: string;
};

export default function CustomBuildHero({
  backgroundImage = "/images/custom-build.jpg",
}: CustomBuildHeroProps) {
  return (
    <Section id="custom-build-hero" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 h-[100svh] bg-black overflow-hidden">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Custom Build Inquiry"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100dvw"
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-[100svh] flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Right - Learn More */}
        <div className="flex justify-end">
          <SectionContent delay={0.1}>
            <Link
              href="/custom"
              className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
              style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
            >
              LEARN MORE <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
            </Link>
          </SectionContent>
        </div>

        {/* Bottom Center - Heading */}
        <div className="mx-auto text-center pb-12 sm:pb-16 lg:pb-20">
          <SectionContent delay={0.2}>
            <h2 className="font-bold uppercase text-white" style={{ lineHeight: "0.8", fontSize: "clamp(4.5rem, 8dvw, 9rem)" }}>
              <span className="block">CUSTOM</span>
              <span className="block">BUILD</span>
              <span className="block text-[#0A56FF]">INQUIRY</span>
            </h2>
          </SectionContent>
        </div>
      </div>
      {/* Caption - smaller, positioned lower */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-4 sm:pb-6 lg:pb-8">
        <SectionContent delay={0.3}>
          <p className="text-center text-white uppercase" style={{ letterSpacing: "clamp(0.2em, 2dvw, 0.8em)", fontSize: "clamp(0.5rem, 2.25dvw, 2rem)", lineHeight: "0.9" }}>
            BLOOD SWEAT TEARS SINCE 1993
          </p>
        </SectionContent>
      </div>
    </Section>
  );
}
