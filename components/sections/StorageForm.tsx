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
  image1 = "/images/storage-form-1.png",
  image2 = "/images/storage-form-2.png",
  image3 = "/images/storage-form-3.png",
  image4 = "/images/storage-form-4.png",
}: StorageFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    vehicle: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

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

      {/* Back Arrow - Top Left */}
      <div className="absolute top-6 left-6 xl:top-12 xl:left-12 z-50">
        <SectionContent delay={0.1}>
          <Link
            href="/"
            className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block sm:text-5xl text-3xl"
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9"}}
          >
            <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white", textShadow: "1px 0 0 currentColor, -1px 0 0 currentColor, 0 1px 0 currentColor, 0 -1px 0 currentColor" }}>←</span> BACK
          </Link>
        </SectionContent>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-screen flex-col px-6 pt-24 pb-8 sm:px-10 xl:px-12 xl:pt-8">
        {/* Top Section */}
        <div className="mx-auto text-center mb-8 sm:mb-12">
          <SectionContent delay={0.1}>
            <h2 className="mb-3 font-bold uppercase text-6xl xl:text-8xl" style={{ lineHeight: "0.9" }}>
              PREMIUM STORAGE CONCIERGE
            </h2>
            <p className="xl:pl-10 uppercase" style={{ letterSpacing: "2rem"}}>
              AT THE ICONIC{" "}
              <span className="text-[#0A56FF]">WEST COAST CUSTOMS</span>
            </p>
          </SectionContent>
        </div>

        {/* Form - Center Left */}
        <div className="flex-1 flex items-start text-4xl pt-8 sm:pt-24">
          <form id="storage-form" ref={formRef} onSubmit={handleSubmit} className="space-y-8 w-full max-w-2xl sm:max-w-3xl xl:max-w-4xl">
          <SectionContent delay={0.2}>
            <div>
              <label htmlFor="name" className="mb-2 block  uppercase">
                NAME:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-2 text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
              
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.3}>
            <div>
              <label htmlFor="vehicle" className="mb-2 block uppercase">
                VEHICLE:
              </label>
              <input
                type="text"
                id="vehicle"
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-2 text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
           
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.4}>
            <div>
              <label htmlFor="email" className="mb-2 block uppercase">
                EMAIL:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-2 text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
            
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.5}>
            <div>
              <label htmlFor="phone" className="mb-2 block uppercase">
                PHONE NUMBER:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border-b border-white/30 bg-transparent px-0 py-2 text-white placeholder-white/50 focus:border-white/60 focus:outline-none"
               
              />
            </div>
          </SectionContent>
          <SectionContent delay={0.6}>
            <div className="mt-8">
              {/* Spacer to maintain form spacing */}
            </div>
          </SectionContent>
        </form>
        
        {/* Submit Button - Centered on page */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-75 sm:bottom-85 z-20 flex flex-col items-center">
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
    </Section>
  );
}
