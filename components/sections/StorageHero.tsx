"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Section from "./Section";
import SectionContent from "./SectionContent";

type StorageHeroProps = {
  backgroundImage?: string;
};

export default function StorageHero({
  backgroundImage = "/images/storage-hero-bg.jpg",
}: StorageHeroProps) {
  const router = useRouter();

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
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Left - CTA */}
        <SectionContent delay={0.1}>
          <button 
            onClick={() => router.push("/storage")}
            className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block text-xl sm:text-5xl" 
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9" }}
          >
            GET STARTED <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
          </button>
        </SectionContent>

        {/* Top Right - Main Headline */}
        <div className="absolute right-6 top-20 sm:right-10 lg:right-12 max-w-[60vw]">
          <SectionContent delay={0.2}>
            <h2 className="mb-3 font-bold uppercase text-right text-[2.5rem] sm:text-[3rem] md:text-[5rem] lg:text-[8rem] xl:text-[12rem] 2xl:text-[13rem]" style={{ lineHeight: "0.9" }}>
              PREMIUM STORAGE CONCIERGE
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl uppercase text-white text-right" style={{ letterSpacing: ".8em" }}>
              AT THE ICONIC{" "}
              <span className="text-[#0A56FF]">WEST COAST CUSTOMS</span>
            </p>
          </SectionContent>
        </div>

        {/* Bottom Center - Tagline and Services */}
        <div className="mx-auto text-center -mb-12">
          <SectionContent delay={0.3}>
            <h3 className=" text-2xl sm:text-3xl font-bold uppercase lg:text-4xl xl:text-5xl">
              ULTIMATE CARE FOR YOUR EXOTICS & CLASSICS
            </h3>
            <div className="flex flex-wrap items-center pt-2 justify-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl uppercase text-[#0A56FF]" style={{ lineHeight: "0.75" }}>
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
