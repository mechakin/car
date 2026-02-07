"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type StorageHeroProps = {
  backgroundImage?: string;
};

export default function StorageHero({
  backgroundImage = "/images/storage-hero-bg.png",
}: StorageHeroProps) {
  return (
    <Section id="storage-hero" className="relative">
      {/* Background Image - Car Storage Facility */}
      <div className="absolute inset-0 h-screen bg-black overflow-hidden">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="Premium Storage Concierge"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100vw"
            unoptimized={false}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Left - Main Headline */}
        <SectionContent delay={0.1}>
          <h2 className="mb-3 text-3xl font-bold uppercase sm:text-4xl lg:text-5xl" style={{ lineHeight: "0.9" }}>
            PREMIUM STORAGE CONCIERGE
          </h2>
          <p className="text-sm uppercase text-white">
            AT THE ICONIC{" "}
            <span className="text-[#0A56FF]">WEST COAST CUSTOMS</span>
          </p>
        </SectionContent>

        {/* Top Right - CTA */}
        <div className="absolute right-6 top-20 sm:right-10 lg:right-12">
          <SectionContent delay={0.2}>
            <button className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity" style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(0.75rem, 3vw, 3.5rem)" }}>
              GET STARTED <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white", textShadow: "1px 0 0 currentColor, -1px 0 0 currentColor, 0 1px 0 currentColor, 0 -1px 0 currentColor" }}>→</span>
            </button>
          </SectionContent>
        </div>

        {/* Bottom Center - Tagline and Services */}
        <div className="mx-auto max-w-4xl text-center">
          <SectionContent delay={0.3}>
            <h3 className="mb-6 text-3xl font-bold uppercase sm:text-4xl lg:text-5xl" style={{ lineHeight: "0.9" }}>
              ULTIMATE CARE FOR YOUR EXOTICS & CLASSICS
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase text-white">
              <span>24/7 SURVEILLANCE</span>
              <span className="text-white">•</span>
              <span>BATTERY MAINTENANCE</span>
              <span className="text-white">•</span>
              <span>DETAILING & TRANSPORT</span>
              <span className="text-white">•</span>
              <span>PRIVATE LOUNGE</span>
            </div>
            <div className="mt-4 h-0.5 w-full bg-[#0A56FF]" />
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
