"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

type AcademyFormProps = {
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
};

export default function AcademyForm({
  image1 = "/images/academy-form-1.png",
  image2 = "/images/academy-form-2.png",
  image3 = "/images/academy-form-3.png",
  image4 = "/images/academy-form-4.png",
  image5 = "/images/academy-form-5.png",
  image6 = "/images/academy-form-6.png",
}: AcademyFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    passion: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isCarouselOpen, setIsCarouselOpen] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);

  // Carousel images
  const carouselImages = [image1, image2, image3, image4, image5, image6].filter(Boolean);

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
        West Coast Customs Academy Inquiry
        
        Name: ${formData.name}
        Passion: ${formData.passion}
        Email: ${formData.email}
        Phone: ${formData.phone}
      `;
      
      console.log("Email would be sent to: academy@westcoastcustoms.com");
      console.log("Email content:", emailContent);
      
      setSubmitStatus("success");
      setFormData({ name: "", passion: "", email: "", phone: "" });
      
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
    <Section id="academy-form" className="relative">
      {/* Background */}
      <div className="absolute inset-0 h-screen bg-black" />

      {/* Back Arrow - Top Left */}
      <div className="absolute top-6 left-6 xl:top-12 xl:left-12 z-50">
        <SectionContent delay={0.1}>
          <Link
            href="/"
            className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block sm:text-5xl text-3xl"
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9",  }}
          >
            <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>←</span> BACK
          </Link>
        </SectionContent>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col px-6 pt-24 pb-8 sm:px-10 sm:pb-12 lg:pb-8 xl:px-12 xl:pt-8">
        {/* Top Section */}
        <div className="mx-auto text-center mb-8">
          <SectionContent delay={0.1}>
            <h2 className="mb-3 font-bold uppercase text-6xl xl:text-8xl" style={{ lineHeight: "0.9" }}>
              WEST COAST CUSTOMS ACADEMY
            </h2>
            <p className="xl:pl-10 uppercase text-[#0A56FF]" style={{ letterSpacing: "1.5rem", color: "#0A56FF" }}>
              WHERE THE LEADERS OF TOMORROW ARE BUILT
            </p>
          </SectionContent>
        </div>

        {/* Main Content - Form Left, Carousel Right */}
        <div className="flex-1 flex flex-col lg:flex-row gap-6 xl:gap-8">
          {/* Form - Left Side */}
          <div className="flex-1 flex flex-col items-start text-4xl xl:pt-24 min-w-0">
          <form id="academy-form" ref={formRef} onSubmit={handleSubmit} className="flex-1 flex flex-col space-y-3 sm:space-y-6 md:space-y-8 w-full max-w-2xl sm:max-w-3xl xl:max-w-4xl">
          <SectionContent delay={0.2}>
            <div>
              <label htmlFor="name" className="mb-1 sm:mb-2 block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl uppercase">
                NAME:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-1 sm:py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
              
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.3}>
            <div>
              <label htmlFor="passion" className="mb-1 sm:mb-2 block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl uppercase">
                PASSION:
              </label>
              <input
                type="text"
                id="passion"
                name="passion"
                value={formData.passion}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-1 sm:py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
           
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.4}>
            <div>
              <label htmlFor="email" className="mb-1 sm:mb-2 block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl uppercase">
                EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-1 sm:py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
            
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.5}>
            <div>
              <label htmlFor="phone" className="mb-1 sm:mb-2 block text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl uppercase">
                PHONE NUMBER:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-1 sm:py-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-4xl text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
               
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
                className="font-bold px-6 py-3 uppercase text-[#0A56FF] transition-colors hover:bg-[#0A56FF]/10 disabled:cursor-not-allowed disabled:opacity-50 text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                style={{ letterSpacing: "-0.05em" }}
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
            <div className="flex-1 flex flex-col items-center justify-start xl:justify-center relative min-w-0 w-full pb-6 pt-6 sm:pb-20 sm:pt-20 lg:pt-8 xl:pt-0 xl:-mt-60">
              <div className="relative w-full max-w-6xl aspect-video border border-white/30 overflow-hidden">
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
                      alt={`Academy ${currentImageIndex + 1}`}
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
        
        {/* Submit Button - Centered on page (hidden on small screens, shown on lg+) */}
        <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 bottom-20 xl:bottom-85 z-20 flex flex-col items-center">
          <SectionContent delay={0.6}>
            <button
              type="button"
              disabled={isSubmitting}
              onClick={() => {
                if (formRef.current) {
                  formRef.current.requestSubmit();
                }
              }}
              className=" font-bold px-6 py-3 uppercase text-[#0A56FF] transition-colors hover:bg-[#0A56FF]/10 disabled:cursor-not-allowed disabled:opacity-50"
              style={{ letterSpacing: "-0.05em" }}
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
      </div>

      {/* Bottom Image Strip - Absolute positioned at bottom */}
      <div className="hidden lg:block absolute bottom-0 left-0 right-0 z-0 h-64 overflow-hidden sm:h-80">
        <div className="grid h-full grid-cols-6">
          {/* Image 1 */}
          {image1 && (
            <div className="relative">
              <Image
                src={image1}
                alt="Academy"
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
                alt="Academy"
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
                alt="Academy"
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
                alt="Academy"
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
                alt="Academy"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          )}
          {/* Image 6 */}
          {image6 && (
            <div className="relative">
              <Image
                src={image6}
                alt="Academy"
                fill
                className="object-cover"
                priority
                quality={100}
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
