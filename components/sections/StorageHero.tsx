"use client";

import Image from "next/image";
import Link from "next/link";
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
        {/* Top Left - CTA */}
        <SectionContent delay={0.1}>
          <Link href="/storage" className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block" style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(0.75rem, 3vw, 3.5rem)" }}>
            GET STARTED <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white", textShadow: "1px 0 0 currentColor, -1px 0 0 currentColor, 0 1px 0 currentColor, 0 -1px 0 currentColor" }}>→</span>
          </Link>
        </SectionContent>

        {/* Top Right - Main Headline */}
        <div className="absolute right-6 top-20 sm:right-10 lg:right-12 max-w-[50vw]">
          <SectionContent delay={0.2}>
            <h2 className="mb-3 font-bold uppercase text-right" style={{ lineHeight: "0.9", fontSize: "clamp(1.5rem, 8vw, 15rem)" }}>
              PREMIUM STORAGE CONCIERGE
            </h2>
            <p className="text-2xl uppercase text-white text-right" style={{ letterSpacing: ".8em" }}>
              AT THE ICONIC{" "}
              <span className="text-[#0A56FF]">WEST COAST CUSTOMS</span>
            </p>
          </SectionContent>
        </div>

        {/* Bottom Center - Tagline and Services */}
        <div className="mx-auto text-center">
          <SectionContent delay={0.3}>
            <h3 className="mb-6 text-3xl font-bold uppercase sm:text-4xl lg:text-5xl" style={{ lineHeight: "0.1" }}>
              ULTIMATE CARE FOR YOUR EXOTICS & CLASSICS
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 lg:gap-3 text-sm sm:text-base lg:text-2xl uppercase text-[#0A56FF]">
              <span>24/7 SURVEILLANCE</span>
              <span>BATTERY MAINTENANCE</span>
              <span>DETAILING & TRANSPORT</span>
              <span>PRIVATE LOUNGE</span>
            </div>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
