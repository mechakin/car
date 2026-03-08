"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

// Placeholder images - replace with actual brand build images when provided
const brandBuildImages = [
  "/images/brand-build.jpg",
];

export default function BrandBuildInfo() {
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () => setImageIndex((i) => (i + 1) % brandBuildImages.length);
  const prevImage = () => setImageIndex((i) => (i - 1 + brandBuildImages.length) % brandBuildImages.length);

  return (
    <div className="bg-black text-white">
      <Section id="brand-build-info" className="relative">
        <div className="absolute inset-0 min-h-screen bg-black" />

        {/* Back Link */}
        <div className="absolute top-6 left-6 sm:left-10 lg:left-12 z-50">
          <SectionContent delay={0.1}>
            <Link
              href="/"
              className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
              style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
            >
              <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>←</span> BACK
            </Link>
          </SectionContent>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 pb-16 sm:px-10 lg:px-12" style={{ paddingTop: "clamp(5.5rem, 14dvw, 9rem)" }}>
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <SectionContent delay={0.1}>
              <h1 className="mb-4 font-bold uppercase text-center" style={{ fontSize: "clamp(2rem, 8dvw, 6rem)" }}>
                BRAND BUILDS
              </h1>
              <p className="text-white/90 text-center text-lg sm:text-xl leading-relaxed mb-12">
                Bring your brand&apos;s automotive vision to life with West Coast Customs. Our team creates custom vehicle builds that embody your brand identity—from concept to completion. Whether it&apos;s a one-of-a-kind show car, a fleet of branded vehicles, or an automotive activation, we deliver the iconic West Coast Customs quality that turns heads and drives engagement.
              </p>
            </SectionContent>

            {/* Image Carousel - placeholder for images to be detailed later */}
            <SectionContent delay={0.2}>
              <div className="relative w-full aspect-video mb-16 overflow-hidden border border-white/20">
                {brandBuildImages[imageIndex] && (
                  <Image
                    src={brandBuildImages[imageIndex]!}
                    alt={`Brand Build ${imageIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                )}
                {brandBuildImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-80 transition-opacity bg-black/40 hover:bg-black/60 p-2 rounded-full"
                      aria-label="Previous image"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 18l-6-6 6-6" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-80 transition-opacity bg-black/40 hover:bg-black/60 p-2 rounded-full"
                      aria-label="Next image"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </button>
                  </>
                )}
              </div>
            </SectionContent>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
              <SectionContent delay={0.2}>
                <div className="p-6 border border-white/20 h-full min-h-[180px] flex flex-col">
                  <h3 className="text-[#0A56FF] font-bold uppercase mb-3" style={{ fontSize: "clamp(1rem, 2dvw, 1.5rem)" }}>
                    CUSTOM CONCEPTS
                  </h3>
                  <p className="text-white/90 flex-1">
                    From initial concept to final build, we work with your brand to create vehicles that tell your story.
                  </p>
                </div>
              </SectionContent>
              <SectionContent delay={0.3}>
                <div className="p-6 border border-white/20 h-full min-h-[180px] flex flex-col">
                  <h3 className="text-[#0A56FF] font-bold uppercase mb-3" style={{ fontSize: "clamp(1rem, 2dvw, 1.5rem)" }}>
                    ICONIC CRAFTSMANSHIP
                  </h3>
                  <p className="text-white/90 flex-1">
                    Every build reflects the legendary West Coast Customs quality that has defined automotive customization for decades.
                  </p>
                </div>
              </SectionContent>
              <SectionContent delay={0.4}>
                <div className="p-6 border border-white/20 h-full min-h-[180px] flex flex-col">
                  <h3 className="text-[#0A56FF] font-bold uppercase mb-3" style={{ fontSize: "clamp(1rem, 2dvw, 1.5rem)" }}>
                    BRAND ACTIVATIONS
                  </h3>
                  <p className="text-white/90 flex-1">
                    Launch campaigns, events, and experiences with custom vehicles that capture attention and drive engagement.
                  </p>
                </div>
              </SectionContent>
            </div>

            {/* Get Started CTA */}
            <SectionContent delay={0.5}>
              <div className="text-center py-12 border-t border-b border-white/20">
                <h2 className="font-bold uppercase mb-6" style={{ fontSize: "clamp(1.5rem, 4dvw, 3rem)" }}>
                  GET STARTED
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Ready to bring your brand&apos;s automotive dream to life? Get in touch to discuss your vision and how we can make it a reality.
                </p>
                <Link
                  href="/brand-build/form"
                  className="inline-block font-bold uppercase px-8 py-4 bg-[#0A56FF] text-white hover:bg-[#0A56FF]/90 transition-colors"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  CLICK HERE
                </Link>
              </div>
            </SectionContent>
          </div>
        </div>
      </Section>
    </div>
  );
}
