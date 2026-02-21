"use client";

import Image from "next/image";
import Link from "next/link";
import Section from "./Section";

export default function KitSection() {
  return (
    <Section id="thicc-kits" className="!min-h-0">
      <div className="relative w-full" style={{ height: "100svh" }}>
        {/* Top left - Shop Now */}
        <div className="absolute top-20 left-6 sm:left-10 lg:left-12 z-20">
          <Link
            href="https://shop.westcoastcustoms.com/collections/thicc-kits"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
          >
            SHOP NOW <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>→</span>
          </Link>
        </div>

        {/* Top image - kit1.png, half viewport */}
        <div className="relative w-full h-[50dvh]">
          <Image
            src="/images/kit1.png"
            alt="Thicc Kits"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
<div className="absolute top-0 left-0 items-center justify-center flex flex-col w-full h-full z-10 pointer-events-none" style={{ transform: "translateY(0.5rem)" }}>
          <div className="font-bold uppercase text-white text-center" style={{ fontSize: "clamp(5rem, 15dvw, 15rem)", letterSpacing: "-0.05em", lineHeight: "0.8" }}>THICC KITS</div>
          <p className="!text-[#0A56FF] uppercase text-center m-0" style={{ fontSize: "clamp(0.75rem, 2dvw, 1.25rem)", letterSpacing: "clamp(0.02em, 1dvw, 1.2em)" }}>powered by west coast customs</p>
        </div>
        {/* Bottom image - kit2.png, half viewport */}
        <div className="relative w-full h-[50dvh]">
          <Image
            src="/images/kit2.png"
            alt="Thicc Kits"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Made in the USA - overlay on bottom of kit2 */}
        <div className="absolute bottom-0 left-0 right-0 z-10 py-6 text-center pointer-events-none">
          <p
            className="text-white/70 uppercase"
            style={{
              fontSize: "clamp(0.9rem, 2.5dvw, 1.5rem)",
              letterSpacing: "0.5em",
            }}
          >
            made in the usa
          </p>
        </div>
      </div>
    </Section>
  );
}
