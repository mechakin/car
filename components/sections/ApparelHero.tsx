"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type ApparelHeroProps = {
  backgroundImage?: string;
};

export default function ApparelHero({
  backgroundImage = "/images/apparel.jpg",
}: ApparelHeroProps) {
  return (
    <Section id="apparel-hero" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 h-[100svh] bg-black overflow-hidden">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="West Coast Customs Apparel"
            fill
            className="object-cover"
            priority
            quality={100}
            sizes="100dvw"
          />
        )}
      </div>

      {/* Top Right - Shop Button */}
      <div className="absolute top-20 right-6 sm:right-10 lg:right-12 z-10">
        <SectionContent delay={0.1}>
          <a
            href="https://westcoastcustomsshop.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
          >
            SHOP NOW <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
          </a>
        </SectionContent>
      </div>

      {/* Bottom - Heading and Caption */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-6 sm:pb-10 lg:pb-12">
        <SectionContent delay={0.2}>
          <div className="mx-auto text-center">
            <h2 className="font-bold uppercase text-white mb-2 sm:mb-3" style={{ lineHeight: "0.9", fontSize: "clamp(6rem, 18dvw, 18rem)" }}>
              APPAREL
            </h2>
            <p className="uppercase" style={{ color: "#0A56FF", letterSpacing: "clamp(0.2em, 2dvw, 0.8em)", fontSize: "clamp(1rem, 3dvw, 2rem)", lineHeight: "0.9" }}>
              DROPS & CLASSICS
            </p>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
