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
      <div className="absolute left-0 right-0 z-10 flex justify-end" style={{ top: "clamp(1.5rem, 3dvw, 3rem)", paddingRight: "clamp(1.5rem, 3dvw, 3rem)" }}>
        <SectionContent delay={0.1}>
          <Link
            href="/custom"
            className="hero-link-mobile-glow font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
          >
            INQUIRE <span className="hero-link-arrow" style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
          </Link>
        </SectionContent>
      </div>

      {/* Bottom - Heading and Caption (same layout as Events/Apparel) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-6 sm:pb-10 lg:pb-12">
        <SectionContent delay={0.2}>
          <div className="mx-auto text-center">
            <h2 className="custom-build-heading font-bold uppercase text-white mb-2 sm:mb-3" style={{ lineHeight: "0.8", fontSize: "clamp(4.5rem, 10dvw, 14rem)" }}>
              <Link href="/custom" className="inline-block">
                <span>CUSTOM</span> <span style={{ color: "#0A56FF" }}>BUILD</span>
              </Link>
            </h2>
            <p className="uppercase text-white" style={{ letterSpacing: "clamp(0.2em, 2dvw, 0.8em)", fontSize: "clamp(0.75rem, 2dvw, 1.5rem)", lineHeight: "1" }}>
              WHERE DREAMS DRIVE
            </p>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
