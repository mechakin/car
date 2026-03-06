"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import SectionContent from "@/components/sections/SectionContent";

const CAROUSEL_IMAGES = [
  "/images/schedule-form-1.jpg",
  "/images/schedule-form-2.jpg",
  "/images/schedule-form-3.jpg",
  "/images/schedule-form-4.jpg",
  "/images/schedule-form-5.jpg",
];

export default function SchedulePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center pt-[5.5rem] sm:pt-[6.5rem] px-6 sm:px-10 lg:px-12 min-h-[100dvh]">
        <div className="absolute top-30 left-6 sm:left-10 lg:left-12 z-50">
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

        <div className="text-center w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
          <h1 className="font-bold uppercase text-white" style={{ fontSize: "clamp(2rem, 8dvw, 5rem)", letterSpacing: "-0.05em" }}>
            Temporarily <span className="text-red-500">Closed</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-xl">
            Tours of the facility will re-open in fall of 2026.
          </p>

          {/* Carousel */}
          <div className="relative w-full max-w-5xl aspect-video border border-white/30 overflow-hidden mt-4">
            {CAROUSEL_IMAGES[currentImageIndex] && (
              <div className="relative w-full h-full">
                <Image
                  src={CAROUSEL_IMAGES[currentImageIndex]!}
                  alt={`Showroom ${currentImageIndex + 1}`}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 1024px"
                />
              </div>
            )}

            {/* Left Arrow */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:opacity-70 transition-opacity bg-black/20 hover:bg-black/40 p-2 rounded-full"
              aria-label="Previous image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:opacity-70 transition-opacity bg-black/20 hover:bg-black/40 p-2 rounded-full"
              aria-label="Next image"
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
