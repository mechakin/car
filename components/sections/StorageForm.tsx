"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

type StorageFormProps = {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
};

export default function StorageForm({
  image1 = "/images/storage-form-1.jpg",
  image2 = "/images/storage-form-2.jpg",
  image3 = "/images/storage-form-3.jpg",
  image4 = "/images/storage-form-4.jpg",
}: StorageFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    vehicle: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  // Carousel images
  const carouselImages = [image1, image2, image3, image4].filter(Boolean);

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
      // Simulate sending email (fake email service)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      
      // Log form data (in production, this would send to an email service)
      console.log("Form submitted:", formData);
      
      // Simulate email sending
      const emailContent = `
        Premium Storage Concierge Inquiry
        
        Name: ${formData.name}
        Vehicle: ${formData.vehicle}
        Email: ${formData.email}
        Phone: ${formData.phone}
      `;
      
      console.log("Email would be sent to: storage@westcoastcustoms.com");
      console.log("Email content:", emailContent);
      
      setSubmitStatus("success");
      setFormData({ name: "", vehicle: "", email: "", phone: "" });
      
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
    <Section id="storage-form" className="relative">
      {/* Background */}
      <div className="absolute inset-0 h-screen bg-black" />

      {/* Back Arrow - Top Left (matches main page CTA positioning) */}
      <div className="absolute top-20 left-6 sm:left-10 lg:left-12 z-50">
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
      <div className="relative z-10 flex min-h-screen flex-col px-6 pb-8 sm:px-10 lg:pb-0 xl:px-12 pt-28 sm:pt-32 lg:pt-32">
        {/* Top Section */}
        <div className="flex-shrink-0 mx-auto text-center mb-4 sm:mb-6">
          <SectionContent delay={0.1}>
            <h2 className="mb-3 font-bold uppercase" style={{ lineHeight: "0.9", fontSize: "clamp(2rem, 8dvw, 6rem)" }}>
              PREMIUM STORAGE CONCIERGE
            </h2>
            <p className="xl:pl-10 uppercase !text-[#0A56FF]" style={{ letterSpacing: "clamp(0.5rem, 2.5dvw, 2rem)", fontSize: "clamp(0.75rem, 2dvw, 1rem)" }}>
              AT THE ICONIC WEST COAST CUSTOMS          
            </p>
          </SectionContent>
        </div>

        {/* Main Content - Form Left, Carousel Right */}
        <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-3 lg:gap-4 xl:gap-6 overflow-hidden">
          {/* Form - Left Side */}
          <div className="flex-1 flex flex-col items-start justify-center min-w-0 py-4 lg:py-6">
          <form id="storage-form" ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col w-full max-w-[min(90dvw,56rem)]" style={{ gap: "clamp(0.375rem, 1dvw, 1.75rem)" }}>
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
              <label htmlFor="vehicle" className="block uppercase" style={{ marginBottom: "clamp(0.2rem, 0.4dvw, 0.5rem)", fontSize: "clamp(0.7rem, 1.5dvw, 2.25rem)" }}>
                VEHICLE:
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
                style={{ paddingTop: "clamp(0.2rem, 0.4dvw, 0.5rem)", paddingBottom: "clamp(0.2rem, 0.4dvw, 0.5rem)", fontSize: "clamp(0.7rem, 1.5dvw, 2.25rem)" }}
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.4}>
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
          <SectionContent delay={0.5}>
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
          {/* Submit Button - Inside form on small screens */}
          <div className="lg:hidden mt-8 flex flex-col items-center">
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

          {/* Carousel - Right Side */}
          {isCarouselOpen && (
            <div className="flex-1 flex flex-col items-center justify-center relative min-w-0 w-full py-4 lg:py-6">
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
                      alt={`Storage ${currentImageIndex + 1}`}
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
        
        {/* Submit Button - Fixed slot (hidden on small screens, shown on lg+) */}
        <div className="hidden lg:flex flex-shrink-0 h-[3.5rem] items-center justify-center z-20">
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

        {/* Bottom Image Strip - Fixed height, in flow */}
        <div className="hidden lg:block flex-shrink-0 z-0 h-56 sm:h-64 xl:h-72 overflow-hidden -mx-6 sm:-mx-10 xl:-mx-12">
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
                quality={100}
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
                quality={100}
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
                quality={100}
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
