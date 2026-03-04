"use client";

import Link from "next/link";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import SectionContent from "@/components/sections/SectionContent";
export default function SchedulePage() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center pt-[5.5rem] sm:pt-[6.5rem] px-6 sm:px-10 lg:px-12">
        <div className="text-center max-w-xl">
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
          <h1 className="font-bold uppercase text-white mb-4" style={{ fontSize: "clamp(2rem, 8dvw, 5rem)", letterSpacing: "-0.05em" }}>
            Temporarily Closed
          </h1>
          <p className="text-white/70 text-lg sm:text-xl mb-8">
            Schedule a visit is temporarily closed. Tours and visits will reopen in fall of 2026.
          </p>
          
        </div>
      </main>
      <Footer />
    </div>
  );
}
