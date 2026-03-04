"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

type EventsHeroProps = {
  backgroundImage?: string;
};

export default function EventsHero({
  backgroundImage = "/images/events.png",
}: EventsHeroProps) {
  return (
    <Section id="events-hero" className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 h-[100svh] mobile-stable-viewport-h bg-black overflow-hidden">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt="West Coast Customs Events"
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
            href="/events"
            className="hero-link-mobile-glow font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
          >
            LEARN MORE <span className="hero-link-arrow" style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
          </Link>
        </SectionContent>
      </div>

      {/* Bottom - Heading and Caption */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-6 sm:pb-10 lg:pb-12">
        <SectionContent delay={0.2}>
          <div className="mx-auto text-center">
            <h2 className="font-bold uppercase text-white mb-2 sm:mb-3" style={{ lineHeight: "0.8", fontSize: "clamp(5rem, 15dvw, 15rem)" }}>
              <Link href="/events" className="inline-block">
                EVENTS
              </Link>
            </h2>
            <p className="uppercase" style={{ letterSpacing: "clamp(0.2em, 2dvw, 0.8em)", fontSize: "clamp(0.75rem, 2dvw, 1.5rem)", lineHeight: "1" }}>
              <span className="block text-white">AT THE ICONIC</span>
              <span className="block" style={{ color: "#0A56FF" }}>WEST COAST CUSTOMS</span>
            </p>
          </div>
        </SectionContent>
      </div>
    </Section>
  );
}
