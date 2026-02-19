"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

type ScheduleFormProps = {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
};

export default function ScheduleForm({
  image1 = "/images/schedule-form-1.jpg",
  image2 = "/images/schedule-form-2.jpg",
  image3 = "/images/schedule-form-3.jpg",
  image4 = "/images/schedule-form-4.jpg",
  image5 = "/images/schedule-form-5.jpg",
}: ScheduleFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  // Carousel images
  const carouselImages = [image1, image2, image3, image4, image5].filter(Boolean);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const VISIT_EMAIL = "Frontdesk@westcoastcustoms.com";
      const body = `Schedule Visit Inquiry

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}`;
      const mailto = `mailto:${VISIT_EMAIL}?subject=Schedule%20Visit%20Inquiry&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="schedule-form" className="relative">
      {/* Background */}
      <div className="absolute inset-0 h-screen bg-black" />

      {/* Back Arrow - Top Left (sits just below header) */}
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

      {/* Content - fixed structure to prevent layout shift */}
      <div className="relative z-10 flex min-h-screen flex-col px-6 pb-8 sm:px-10 sm:pb-12 xl:px-12 pt-16 sm:pt-20">
        {/* Top Section */}
        <div className="flex-shrink-0 mx-auto text-center mb-4 sm:mb-6">
          <SectionContent delay={0.1}>
            <h2 className="mb-3 font-bold uppercase" style={{ lineHeight: "0.9", fontSize: "clamp(2rem, 8dvw, 6rem)" }}>
              SCHEDULE A VISIT
            </h2>
            <p className="xl:pl-10 uppercase !text-[#0A56FF]" style={{ letterSpacing: "clamp(0.5rem, 2dvw, 1.5rem)", fontSize: "clamp(0.75rem, 2dvw, 1rem)" }}>
              OUR LOS ANGELES SHOWROOM
            </p>
          </SectionContent>
        </div>

        {/* Main Content - Stacked layout (mobile style on all screens) */}
        <div className="flex-1 min-h-0 flex flex-col gap-3 overflow-auto">
          {/* Form - flex-shrink-0 so carousel stays in consistent position */}
          <div className="flex-shrink-0 flex flex-col items-center min-w-0 py-4">
          <form id="schedule-form" ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col w-full max-w-[min(90dvw,56rem)]" style={{ gap: "clamp(0.375rem, 1dvw, 1.75rem)" }}>
          <SectionContent delay={0.2}>
            <div>
              <label htmlFor="name" className="block uppercase" style={{ marginBottom: "clamp(0.2rem, 0.4dvw, 0.5rem)", fontSize: "clamp(0.7rem, 1.5dvw, 2.25rem)" }}>
                NAME:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
                style={{ paddingTop: "clamp(0.2rem, 0.4dvw, 0.5rem)", paddingBottom: "clamp(0.2rem, 0.4dvw, 0.5rem)", fontSize: "clamp(0.7rem, 1.5dvw, 2.25rem)" }}
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.3}>
            <div>
              <label htmlFor="email" className="block uppercase" style={{ marginBottom: "clamp(0.2rem, 0.4dvw, 0.5rem)", fontSize: "clamp(0.7rem, 1.5dvw, 2.25rem)" }}>
                EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
                style={{ paddingTop: "clamp(0.2rem, 0.4dvw, 0.5rem)", paddingBottom: "clamp(0.2rem, 0.4dvw, 0.5rem)", fontSize: "clamp(0.7rem, 1.5dvw, 2.25rem)" }}
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.4}>
            <div>
              <label htmlFor="phone" className="block uppercase" style={{ marginBottom: "clamp(0.2rem, 0.4dvw, 0.5rem)", fontSize: "clamp(0.7rem, 1.5dvw, 2.25rem)" }}>
                PHONE NUMBER:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
                style={{ paddingTop: "clamp(0.2rem, 0.4dvw, 0.5rem)", paddingBottom: "clamp(0.2rem, 0.4dvw, 0.5rem)", fontSize: "clamp(0.7rem, 1.5dvw, 2.25rem)" }}
              />
            </div>
          </SectionContent>
          {/* Submit Button */}
          <div className="mt-8 flex flex-col items-center">
            <SectionContent delay={0.6}>
              <button
                type="button"
                disabled={isSubmitting}
                onClick={() => {
                  if (formRef.current) {
                    formRef.current.requestSubmit();
                  }
                }}
                className="font-bold px-6 py-3 uppercase text-[#0A56FF] transition-colors hover:bg-[#0A56FF]/10 disabled:cursor-not-allowed disabled:opacity-50"
                style={{ fontSize: "clamp(2.25rem, 8dvw, 3rem)", letterSpacing: "-0.05em" }}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </SectionContent>
            {submitStatus === "success" && (
              <p className="mt-4 text-center text-[#0A56FF] whitespace-nowrap">
                Thank you! Your inquiry has been sent.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-center text-red-500 whitespace-nowrap">
                There was an error. Please try again.
              </p>
            )}
          </div>
        </form>
          </div>

          {/* Carousel - flex-shrink-0 so it doesn't shift with viewport */}
          {isCarouselOpen && (
            <div className="flex-shrink-0 flex flex-col items-center justify-center relative min-w-0 w-full py-4">
              <div className="relative w-full max-w-5xl aspect-video border border-white/30 overflow-hidden">
                {/* Close Button - Top Left */}
                <button
                  onClick={() => setIsCarouselOpen(false)}
                  className="absolute top-3 left-3 z-30 text-white hover:opacity-70 transition-opacity text-3xl font-light leading-none w-8 h-8 flex items-center justify-center"
                  aria-label="Close carousel"
                >
                  ×
                </button>

                {/* Main Carousel Image */}
                {carouselImages[currentImageIndex] && (
                  <div className="relative w-full h-full">
                    <Image
                      src={carouselImages[currentImageIndex]!}
                      alt={`Schedule ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                      quality={100}
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
          )}
        </div>
        
        {/* Submit Button - Desktop slot (hidden - using mobile layout) */}
        <div className="hidden flex-shrink-0 h-[3.5rem] items-center justify-center z-20">
          <SectionContent delay={0.6}>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => {
                if (formRef.current) {
                  formRef.current.requestSubmit();
                }
              }}
              className="font-bold px-6 py-3 uppercase text-[#0A56FF] transition-colors hover:bg-[#0A56FF]/10 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ fontSize: "clamp(1rem, 2dvw, 2.25rem)", letterSpacing: "-0.05em", transform: "translateY(-2rem)" }}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
            </button>
          </SectionContent>
          {submitStatus === "success" && (
            <p className="mt-4 text-center text-[#0A56FF] whitespace-nowrap">
              Thank you! Your inquiry has been sent.
            </p>
          )}
          {submitStatus === "error" && (
            <p className="mt-4 text-center text-red-500 whitespace-nowrap">
              There was an error. Please try again.
            </p>
          )}
        </div>

        {/* Bottom Image Strip - Hidden (mobile layout on all screens) */}
        <div className="hidden flex-shrink-0 z-0 h-56 sm:h-64 xl:h-72 overflow-hidden -mx-6 sm:-mx-10 xl:-mx-12">
        <div className="grid h-full grid-cols-5">
          {/* Image 1 */}
          {image1 && (
            <div className="relative">
              <Image
                src={image1}
                alt="Schedule"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          )}
          {/* Image 2 */}
          {image2 && (
            <div className="relative">
              <Image
                src={image2}
                alt="Schedule"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          )}
          {/* Image 3 */}
          {image3 && (
            <div className="relative">
              <Image
                src={image3}
                alt="Schedule"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          )}
          {/* Image 4 */}
          {image4 && (
            <div className="relative">
              <Image
                src={image4}
                alt="Schedule"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          )}
          {/* Image 5 */}
          {image5 && (
            <div className="relative">
              <Image
                src={image5}
                alt="Schedule"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          )}
          
        </div>
        </div>
      </div>
    </Section>
  );
}
