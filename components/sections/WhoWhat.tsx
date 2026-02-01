"use client";

import Section from "./Section";
import SectionContent from "./SectionContent";

export default function WhoWhat() {
  return (
    <Section id="who-what" className="relative">
      <div className="grid h-screen grid-cols-1 md:grid-cols-2">
        {/* Left - WHO WE ARE */}
        <div className="relative bg-black px-6 py-20 sm:px-10 lg:px-12">
          <SectionContent delay={0.1}>
            <h2 className="mb-6 text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-5xl">
              WHO WE ARE
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              West Coast Customs is your one stop shop for all your car
              customization needs. Located in Southern California, the shop
              houses a veteran team of technicians, fabricators, designers,
              electricians, painters and so much more.
            </p>
          </SectionContent>
        </div>

        {/* Right - WHAT WE DO */}
        <div className="relative bg-[#0A56FF] px-6 py-20 sm:px-10 lg:px-12">
          {/* Abstract Black Graphic Overlay */}
          <div className="absolute right-0 top-0 h-full w-1/3 bg-black/20" />

          <SectionContent delay={0.2}>
            <h2 className="mb-6 text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-5xl">
              WHAT WE DO
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-white/90 sm:text-base">
              You may have seen some of our one-of-a-kind, multi-million-dollar
              custom car builds on our TV show or in the news, but we also
              specialize in smaller customizations. From wraps to wheels and
              everything in between, contact us today to inquire about our
              services.
            </p>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
