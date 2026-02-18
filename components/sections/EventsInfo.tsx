"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

const eventImages = [
  "/images/event-1.jpg",
  "/images/event-2.jpg",
  "/images/event-3.jpg",
  "/images/event-4.jpg",
  "/images/event-5.jpg",
  "/images/event-6.jpg",
  "/images/event-7.jpg",
  "/images/event-8.jpg",
  "/images/event-9.jpg",
  "/images/event-10.jpg",
  "/images/event-11.jpg",
  "/images/event-12.jpg",
];

const arcadeImages = [
  "/images/arcade-1.jpg",
  "/images/arcade-2.jpg",
  "/images/arcade-3.jpg",
  "/images/arcade-4.jpg",
  "/images/arcade-5.jpg",
  "/images/arcade-6.jpg",
];

export default function EventsInfo() {
  const [eventIndex, setEventIndex] = useState(0);
  const [arcadeIndex, setArcadeIndex] = useState(0);

  const nextEvent = () => setEventIndex((i) => (i + 1) % eventImages.length);
  const prevEvent = () => setEventIndex((i) => (i - 1 + eventImages.length) % eventImages.length);
  const nextArcade = () => setArcadeIndex((i) => (i + 1) % arcadeImages.length);
  const prevArcade = () => setArcadeIndex((i) => (i - 1 + arcadeImages.length) % arcadeImages.length);
  return (
    <div className="bg-black text-white">
      <Section id="events-info" className="relative">
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
                BOOK YOUR NEXT EVENT
              </h1>
              <p className="text-white/90 text-center text-lg sm:text-xl leading-relaxed mb-12">
                Looking for a unique and unforgettable venue? Our Garage Lounge is the perfect spot now featuring a café, full bar, stage, private parking lot, pool table, and arcade. Whether you&apos;re planning a private party, corporate event, or production shoot, our versatile space offers the ideal backdrop. Conveniently located and open to bookings for filming, brand activations, and more.
              </p>
            </SectionContent>

            {/* Event Carousel */}
            <SectionContent delay={0.2}>
              <div className="relative w-full aspect-video mb-16 overflow-hidden border border-white/20">
                {eventImages[eventIndex] && (
                  <Image
                    src={eventImages[eventIndex]!}
                    alt={`Event ${eventIndex + 1}`}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                )}
                <button
                  onClick={prevEvent}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-80 transition-opacity bg-black/40 hover:bg-black/60 p-2 rounded-full"
                  aria-label="Previous image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={nextEvent}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-80 transition-opacity bg-black/40 hover:bg-black/60 p-2 rounded-full"
                  aria-label="Next image"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </SectionContent>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 items-stretch">
              <SectionContent delay={0.2}>
                <div className="p-6 border border-white/20 h-full min-h-[180px] flex flex-col">
                  <h3 className="text-[#0A56FF] font-bold uppercase mb-3" style={{ fontSize: "clamp(1rem, 2dvw, 1.5rem)" }}>
                    UNIQUE LOCATION
                  </h3>
                  <p className="text-white/90 flex-1">
                    Host your event surrounded by iconic cars and customs designs.
                  </p>
                </div>
              </SectionContent>
              <SectionContent delay={0.3}>
                <div className="p-6 border border-white/20 h-full min-h-[180px] flex flex-col">
                  <h3 className="text-[#0A56FF] font-bold uppercase mb-3" style={{ fontSize: "clamp(1rem, 2dvw, 1.5rem)" }}>
                    VERSATILE SPACES
                  </h3>
                  <p className="text-white/90 flex-1">
                    From corporate events to private parties, our spaces can be tailored to any occasion.
                  </p>
                </div>
              </SectionContent>
              <SectionContent delay={0.4}>
                <div className="p-6 border border-white/20 h-full min-h-[180px] flex flex-col">
                  <h3 className="text-[#0A56FF] font-bold uppercase mb-3" style={{ fontSize: "clamp(1rem, 2dvw, 1.5rem)" }}>
                    DEDICATED SUPPORT
                  </h3>
                  <p className="text-white/90 flex-1">
                    Our team ensures everything runs smoothly, so you can focus on having a great time.
                  </p>
                </div>
              </SectionContent>
            </div>

            {/* New Additions */}
            <SectionContent delay={0.3}>
              <div className="flex flex-col lg:flex-row gap-8 items-center mb-16">
                <div className="flex-1 relative aspect-video min-h-[200px] overflow-hidden border border-white/20">
                  {arcadeImages[arcadeIndex] && (
                    <Image
                      src={arcadeImages[arcadeIndex]!}
                      alt={`Arcade ${arcadeIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  )}
                  <button
                    onClick={prevArcade}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-80 transition-opacity bg-black/40 hover:bg-black/60 p-2 rounded-full"
                    aria-label="Previous image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={nextArcade}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white hover:opacity-80 transition-opacity bg-black/40 hover:bg-black/60 p-2 rounded-full"
                    aria-label="Next image"
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-[#0A56FF] font-bold uppercase mb-4" style={{ fontSize: "clamp(1.25rem, 3dvw, 2rem)" }}>
                    NEW ADDITIONS
                  </h3>
                  <p className="text-white/90 text-lg">
                    Enjoy the fun with our newly added pool table and arcade, perfect for keeping guests entertained.
                  </p>
                </div>
              </div>
            </SectionContent>

            {/* Map */}
            <SectionContent delay={0.35}>
              <div className="relative w-full aspect-video mb-16 overflow-hidden border border-white/20">
                <Image
                  src="/images/map.png"
                  alt="West Coast Customs Location"
                  fill
                  className="object-contain bg-black"
                  sizes="100vw"
                />
              </div>
            </SectionContent>

            {/* YouTube Videos */}
            <SectionContent delay={0.4}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
                <div className="relative w-full aspect-video overflow-hidden border border-white/20">
                  <iframe
                    src="https://www.youtube.com/embed/-UVKVWrNWm4"
                    title="West Coast Customs Video 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="relative w-full aspect-video overflow-hidden border border-white/20">
                  <iframe
                    src="https://www.youtube.com/embed/vX_5UxlVnH0"
                    title="West Coast Customs Video 2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="relative w-full aspect-video overflow-hidden border border-white/20">
                  <iframe
                    src="https://www.youtube.com/embed/EfdBxhdad24"
                    title="West Coast Customs Video 3"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="relative w-full aspect-video overflow-hidden border border-white/20">
                  <iframe
                    src="https://www.youtube.com/embed/50zUHcMzNU4"
                    title="West Coast Customs Video 4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </SectionContent>

            {/* Get Started CTA */}
            <SectionContent delay={0.5}>
              <div className="text-center py-12 border-t border-b border-white/20">
                <h2 className="font-bold uppercase mb-6" style={{ fontSize: "clamp(1.5rem, 4dvw, 3rem)" }}>
                  GET STARTED
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Host your next event at West Coast Customs for an unforgettable experience! Fill out our request form to begin planning your event. We&apos;ll get in touch to discuss the details and confirm your booking.
                </p>
                <Link
                  href="/events/form"
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
