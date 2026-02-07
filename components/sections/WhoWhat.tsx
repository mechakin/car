"use client";

import Section from "./Section";
import SectionContent from "./SectionContent";

export default function WhoWhat() {
  return (
    <Section id="who-what" className="relative">
      <div className="flex h-screen">
        {/* Left - WHO WE ARE - All Black */}
        <div className="relative w-1/2 bg-black px-6 py-20 sm:px-10 sm:py-20 lg:px-12 lg:py-20 flex justify-center">
          <SectionContent delay={0.1}>
            <div className="text-center max-w-md">
              <h2 className="mb-6 text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-5xl text-white">
                WHO WE ARE
              </h2>
              <p className="text-sm leading-relaxed text-white sm:text-base">
                West Coast Customs is your one stop shop for all your car
                customization needs. Located in Southern California, the shop
                houses a veteran team of technicians, fabricators, designers,
                electricians, painters and so much more.
              </p>
            </div>
          </SectionContent>
        </div>

        {/* Right - WHAT WE DO - All Blue */}
        <div className="relative w-1/2 bg-[#0A56FF] px-6 py-20 sm:px-10 sm:py-20 lg:px-12 lg:py-20 flex justify-center">
          <SectionContent delay={0.2}>
            <div className="text-center max-w-md">
              <h2 className="mb-6 text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-5xl text-white">
                WHAT WE DO
              </h2>
              <p className="text-sm leading-relaxed text-white sm:text-base">
                You may have seen some of our one-of-a-kind, multi-million-dollar
                custom car builds on our TV show or in the news, but we also
                specialize in smaller customizations. From wraps to wheels and
                everything in between, contact us today to inquire about our
                services.
              </p>
            </div>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
}
