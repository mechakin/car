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
          <h2 className="mb-3 text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-5xl">
            PREMIUM STORAGE CONCIERGE
          </h2>
          <p className="text-sm uppercase text-white/80">
            AT THE ICONIC{" "}
            <span className="text-[#0A56FF]">WEST COAST CUSTOMS</span>
          </p>
        </SectionContent>

        {/* Top Right - CTA */}
        <div className="absolute right-6 top-20 sm:right-10 lg:right-12">
          <SectionContent delay={0.2}>
            <button className="text-sm uppercase text-white">
              GET STARTED →
            </button>
          </SectionContent>
        </div>

        {/* Bottom Center - Tagline and Services */}
        <div className="mx-auto max-w-4xl text-center">
          <SectionContent delay={0.3}>
            <h3 className="mb-6 text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-5xl">
              ULTIMATE CARE FOR YOUR EXOTICS & CLASSICS
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs uppercase text-white/80">
              <span>24/7 SURVEILLANCE</span>
              <span className="text-white/40">•</span>
              <span>BATTERY MAINTENANCE</span>
              <span className="text-white/40">•</span>
              <span>DETAILING & TRANSPORT</span>
              <span className="text-white/40">•</span>
              <span>PRIVATE LOUNGE</span>
            </div>
            <div className="mt-4 h-0.5 w-full bg-[#0A56FF]" />
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
