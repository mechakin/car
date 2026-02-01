"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type StorageFormProps = {
  leftImage?: string;
  rightImage?: string;
};

export default function StorageForm({
  leftImage = "/images/storage-form-left.png",
  rightImage = "/images/storage-form-right.png",
}: StorageFormProps) {
  return (
    <Section id="storage-form" className="relative">
      {/* Background */}
      <div className="absolute inset-0 h-screen bg-black" />

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col justify-between px-6 py-20 sm:px-10 lg:px-12">
        {/* Top Section */}
        <div className="mx-auto max-w-2xl text-center">
          <SectionContent delay={0.1}>
            <h2 className="mb-3 text-3xl font-bold uppercase leading-none sm:text-4xl lg:text-5xl">
              PREMIUM STORAGE CONCIERGE
            </h2>
            <p className="text-sm uppercase">
              AT THE ICONIC{" "}
              <span className="text-[#0A56FF]">WEST COAST CUSTOMS</span>
            </p>
          </SectionContent>
        </div>

        {/* Form Labels */}
        <div className="mx-auto max-w-md space-y-8">
          <SectionContent delay={0.2}>
            <div className="text-sm uppercase">NAME:</div>
          </SectionContent>
          <SectionContent delay={0.3}>
            <div className="text-sm uppercase">VEHICLE:</div>
          </SectionContent>
          <SectionContent delay={0.4}>
            <div className="text-sm uppercase">EMAIL:</div>
          </SectionContent>
          <SectionContent delay={0.5}>
            <div className="text-sm uppercase">PHONE NUMBER:</div>
          </SectionContent>
        </div>

        {/* Bottom Image Strip */}
        <div className="h-64 w-full overflow-hidden sm:h-80">
          <div className="grid h-full grid-cols-2">
            {/* Left - Lounge */}
            {leftImage && (
              <div className="relative">
                <Image
                  src={leftImage}
                  alt="Lounge"
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>
            )}
            {/* Right - Storage Facility */}
            {rightImage && (
              <div className="relative">
                <Image
                  src={rightImage}
                  alt="Storage Facility"
                  fill
                  className="object-cover"
                  priority
                  quality={95}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
