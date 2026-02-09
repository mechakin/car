"use client";

import Image from "next/image";
import Section from "./Section";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="footer" className="relative bg-black border-t border-white/15 !min-h-0">
      <div className="px-6 py-12 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <Image
                  src="/images/wcc-logo.png"
                  alt="West Coast Customs Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, 192px"
                />
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex-1 text-center md:text-left">
              <p className="mb-4 text-white text-2xl">
                Business Hours: 9:00 AM - 5:00 PM
              </p>
            
            </div>

            {/* Copyright */}
            <div className="flex-shrink-0 text-center md:text-right">
              <p className=" text-white/60 text-2xl">
                © {currentYear} West Coast Customs
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
