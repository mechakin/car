"use client";

import Image from "next/image";
import Section from "./Section";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Section id="footer" className="relative bg-black border-t border-white/15 !min-h-0">
      <div className="px-6 pt-2 pb-6 sm:py-6 sm:px-10 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between md:gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32">
                <Image
                  src="/images/wcc-logo.png"
                  alt="West Coast Customs Logo"
                  fill
                  className="object-contain brightness-0 invert"
                  sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
                />
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex-1 text-center md:text-left">
              <p className="mb-2 text-white text-xl">
                Business Hours: 9:00 AM - 5:00 PM
              </p>
            
            </div>

            {/* Copyright */}
            <div className="flex-shrink-0 text-center md:text-right">
              <p className="text-white/60 text-sm sm:text-lg">
                © {currentYear} West Coast Customs
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
