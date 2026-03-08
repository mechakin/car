"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Section from "@/components/sections/Section";
import SectionContent from "@/components/sections/SectionContent";

export default function FounderPage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[5.5rem] sm:pt-[6.5rem]">
        {/* First Section - 60% viewport height, Schedule Visit style */}
        <Section id="founder-1" className="!min-h-[60dvh] h-[60dvh]">
          <div className="absolute inset-0">
            <Image
              src="/images/backup/founder-1.png"
              alt="West Coast Customs Founder"
              fill
              className="object-cover object-left md:object-center"
              priority
              quality={100}
              sizes="100vw"
            />
          </div>

          {/* Content overlay - like Schedule Visit */}
          <div className="relative z-10 flex h-full flex-col justify-between px-6 py-20 sm:px-10 lg:px-12 pointer-events-none">
            {/* Top Left - Our Founder (like Schedule Visit) */}
            <SectionContent delay={0.1} className="pointer-events-auto -mt-4">
              <div className="max-w-md block">
                <h2 className="font-bold uppercase text-white whitespace-nowrap" style={{ lineHeight: "0.9", fontSize: "clamp(2rem, 18dvw, 20.25rem)" }}>
                  OUR
                </h2>
                <h2 className="font-bold uppercase text-[#0A56FF]" style={{ lineHeight: "0.95", fontSize: "clamp(1.75rem, 9dvw, 10rem)" }}>
                  FOUNDER
                </h2>
              </div>
            </SectionContent>

            {/* Top Right - Back */}
            <div className="absolute left-0 right-0 z-10 flex justify-end pointer-events-auto" style={{ top: "clamp(1.5rem, 3dvw, 3rem)", paddingRight: "clamp(1.5rem, 3dvw, 3rem)" }}>
              <SectionContent delay={0.2}>
                <Link
                  href="/"
                  className="hero-link-mobile-glow back-link-glow font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
                  style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
                >
                  <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>←</span> BACK
                </Link>
              </SectionContent>
            </div>

            {/* Bottom - Quote, subtle overlay so image shows through */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-6 sm:pb-10 lg:pb-12 px-6 sm:px-10 lg:px-12">
              <SectionContent delay={0.3}>
                <p
                  className="text-white/90 text-xs sm:text-base md:text-lg leading-relaxed max-w-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] text-center"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  FOUNDED IN 1993 WITH A $10,000 LOAN FROM MY GRANDPA I TURNED <span className="text-[#0A56FF]">WEST COAST CUSTOMS</span> INTO A GLOBAL EMPIRE AND ONE STOP SHOP FOR ALL THINGS AUTOMOTIVE AND BEYOND. HARD WORK & DEDICATION ARE AT THE CORE OF OUR BRANDS FOUNDATION. NO MATTER THE SIZE OF YOUR DREAM WE CAN MAKE IT A <span className="text-[#0A56FF]">REALITY</span>.
                </p>
              </SectionContent>
            </div>
          </div>
        </Section>

        {/* Second Section - 40% viewport height, mirrored symmetry: left half original, right half rotated 180┬░ */}
        <Section id="founder-2" className="!min-h-[40dvh] h-[40dvh]">
          <div className="absolute inset-0 flex">
            {/* Left half - flipped horizontally, hidden on mobile */}
            <div className="hidden md:block relative w-1/2 h-full overflow-hidden">
              <Image
                src="/images/backup/founder-2.png"
                alt="West Coast Customs Founder"
                fill
                className="object-cover object-left scale-x-[-1]"
                priority
                quality={100}
                sizes="50vw"
              />
            </div>
            {/* Right half - right portion, full width on mobile */}
            <div className="relative w-full md:w-1/2 h-full overflow-hidden">
              <Image
                src="/images/backup/founder-2.png"
                alt="West Coast Customs Founder"
                fill
                className="object-cover object-right"
                priority
                quality={100}
                sizes="50vw"
              />
            </div>
          </div>

          {/* Bottom right - styled like BuiltByDreamers SINCE 1993 */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-end pb-6 sm:pb-10 lg:pb-12 pr-6 sm:pr-10 lg:pr-12">
            <SectionContent delay={0.2}>
              <p
                className="font-normal uppercase text-white/50 text-right"
                style={{
                  letterSpacing: "0.85em",
                  lineHeight: "0.5",
                  fontWeight: 300,
                  fontSize: "clamp(1rem, 3dvw, min(3dvw, 5dvh))",
                }}
              >
                SINCE 1993
              </p>
            </SectionContent>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
