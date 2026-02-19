"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

const labelClass =
  "w-full mb-1 sm:mb-2 block text-sm sm:text-base md:text-lg lg:text-xl uppercase text-white/90";
const inputClass =
  "w-full border-b border-white/30 bg-transparent px-0 py-1 sm:py-2 text-sm sm:text-base md:text-lg text-white placeholder-white/50 focus:border-white/60 focus:outline-none";

export default function EventForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDetails: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "event",
          formData: {
            name: formData.name,
            phone: formData.phone,
            email: formData.email,
            eventDetails: formData.eventDetails,
          },
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? "Failed to send");
      }

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", eventDetails: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="event-form" className="relative">
      <div className="absolute inset-0 min-h-screen bg-black" />

      {/* Back Link */}
      <div className="absolute top-6 left-6 sm:left-10 lg:left-12 z-50">
        <SectionContent delay={0.1}>
          <Link
            href="/events"
            className="font-bold uppercase leading-none text-white tracking-tighter hover:opacity-80 transition-opacity inline-block"
            style={{ letterSpacing: "-0.075em", lineHeight: "0.9", fontSize: "clamp(1rem, 4dvw, 3rem)" }}
          >
            <span style={{ fontWeight: 900, WebkitTextStroke: "0.5px white" }}>←</span> BACK
          </Link>
        </SectionContent>
      </div>

      {/* Form Content */}
      <div className="relative z-10 px-6 pb-16 sm:px-10 lg:px-12" style={{ paddingTop: "clamp(4.5rem, 8dvw, 5.5rem)" }}>
        <div className="max-w-2xl mx-auto">
          <SectionContent delay={0.1}>
            <h2 className="mb-6 font-bold uppercase text-center" style={{ fontSize: "clamp(2rem, 8dvw, 6rem)" }}>
              EVENT SPACE RENTAL
            </h2>
          </SectionContent>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            <SectionContent delay={0.2}>
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name <span className="text-[#0A56FF]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your name"
                />
              </div>
            </SectionContent>

            <SectionContent delay={0.25}>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-[#0A56FF]">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={inputClass}
                  placeholder="Your phone number"
                />
              </div>
            </SectionContent>

            <SectionContent delay={0.3}>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Your email"
                />
              </div>
            </SectionContent>

            <SectionContent delay={0.35}>
              <div>
                <label htmlFor="eventDetails" className={labelClass}>
                  Date and any details of your upcoming event <span className="text-[#0A56FF]">*</span>
                </label>
                <textarea
                  id="eventDetails"
                  name="eventDetails"
                  value={formData.eventDetails}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="Event date and details..."
                />
              </div>
            </SectionContent>

            <SectionContent delay={0.4}>
              <div className="flex flex-col items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-bold px-8 py-4 uppercase bg-[#0A56FF] text-white hover:bg-[#0A56FF]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
                {submitStatus === "success" && (
                  <p className="text-[#0A56FF] text-center">
                    Thank you! We&apos;ll get in touch to discuss your event.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-500 text-center">
                    There was an error. Please try again.
                  </p>
                )}
              </div>
            </SectionContent>
          </form>
        </div>
      </div>
    </Section>
  );
}
