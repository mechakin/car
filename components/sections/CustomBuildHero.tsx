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
      <div className="absolute inset-0 h-[100svh] mobile-stable-viewport-h bg-black overflow-hidden">
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

      {/* Top Right - Learn More */}
      <div className="absolute top-20 right-6 sm:right-10 lg:right-12 z-10">
        <SectionContent delay={0.1}>
          <Link
            href="/custom"
            className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
          >
            INQUIRE <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
          </Link>
        </SectionContent>
      </div>

      {/* Bottom - Heading and Caption (same layout as Events/Apparel) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-6 sm:pb-10 lg:pb-12">
        <SectionContent delay={0.2}>
          <div className="mx-auto text-center">
            <h2 className="font-bold uppercase text-white mb-2 sm:mb-3" style={{ lineHeight: "0.8", fontSize: "clamp(4.5rem, 10dvw, 14rem)" }}>
              <span className="block">CUSTOM</span>
              <span className="block" style={{ color: "#0A56FF" }}>BUILD</span>
            </h2>
            <p className="uppercase text-white" style={{ letterSpacing: "clamp(0.2em, 2dvw, 0.8em)", fontSize: "clamp(0.5rem, 1.5dvw, 1.25rem)", lineHeight: "1" }}>
              BLOOD SWEAT TEARS SINCE 1993
            </p>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
