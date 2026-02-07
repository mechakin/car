"use client";

import Image from "next/image";
import Section from "./Section";
import SectionContent from "./SectionContent";

type StorageFormProps = {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
};

export default function StorageForm({
  image1 = "/images/storage-form-left.png",
  image2 = "/images/storage-form-right.png",
  image3 = "/images/storage-form-left.png",
  image4 = "/images/storage-form-right.png",
}: StorageFormProps) {
  return (
    <Section id="storage-form" className="relative">
      {/* Background */}
      <div className="absolute inset-0 h-screen bg-black" />

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col px-6 py-20 sm:px-10 lg:px-12">
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
      </div>

      {/* Bottom Image Strip - Absolute positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-0 h-64 overflow-hidden sm:h-80">
        <div className="grid h-full grid-cols-4">
          {/* Image 1 */}
          {image1 && (
            <div className="relative">
              <Image
                src={image1}
                alt="Storage"
                fill
                className="object-cover"
                priority
                quality={95}
              />
            </div>
          )}
          {/* Image 2 */}
          {image2 && (
            <div className="relative">
              <Image
                src={image2}
                alt="Storage"
                fill
                className="object-cover"
                priority
                quality={95}
              />
            </div>
          )}
          {/* Image 3 */}
          {image3 && (
            <div className="relative">
              <Image
                src={image3}
                alt="Storage"
                fill
                className="object-cover"
                priority
                quality={95}
              />
            </div>
          )}
          {/* Image 4 */}
          {image4 && (
            <div className="relative">
              <Image
                src={image4}
                alt="Storage"
                fill
                className="object-cover"
                priority
                quality={95}
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
