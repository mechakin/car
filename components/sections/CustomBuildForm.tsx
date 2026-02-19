"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Section from "./Section";
import SectionContent from "./SectionContent";

const SERVICE_FIELDS = [
  "Exterior",
  "Interior",
  "Engine",
  "Suspension",
  "Wheels/Rims",
  "Tires",
  "Performance",
] as const;

const inputClass =
  "w-full border-b border-white/30 bg-transparent px-0 py-1 sm:py-2 text-sm sm:text-base md:text-lg text-white placeholder-white/50 focus:border-white/60 focus:outline-none";
const labelClass = "mb-1 sm:mb-2 block text-sm sm:text-base md:text-lg uppercase";

export default function CustomBuildForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    organization: "",
    streetAddress: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    yearMakeModel: "",
    currentColor: "",
    investRange: "",
    exterior: "",
    interior: "",
    engine: "",
    suspension: "",
    wheelsRims: "",
    tires: "",
    performance: "",
    moreInfo: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files ? Array.from(e.target.files) : [];
    setFiles((prev) => [...prev, ...newFiles]);
    e.target.value = ""; // Reset so same file can be selected again
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const CUSTOM_BUILD_EMAILS = "sales@westcoastcustoms.com,info@westcoastcustoms.com";
      const body = `Custom Build Inquiry

Name: ${formData.firstName} ${formData.lastName}
Organization: ${formData.organization}
Address: ${formData.streetAddress}, ${formData.city}, ${formData.state}
Phone: ${formData.phone}
Email: ${formData.email}
Year/Make/Model: ${formData.yearMakeModel}
Current Color: ${formData.currentColor}
Investment Range: ${formData.investRange}

Services:
Exterior: ${formData.exterior}
Interior: ${formData.interior}
Engine: ${formData.engine}
Suspension: ${formData.suspension}
Wheels/Rims: ${formData.wheelsRims}
Tires: ${formData.tires}
Performance: ${formData.performance}

More Info: ${formData.moreInfo}

(Note: File attachments must be added manually in your email client)`;
      const mailto = `mailto:${CUSTOM_BUILD_EMAILS}?subject=Custom%20Build%20Inquiry&body=${encodeURIComponent(body)}`;
      window.location.href = mailto;
      setSubmitStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        organization: "",
        streetAddress: "",
        city: "",
        state: "",
        phone: "",
        email: "",
        yearMakeModel: "",
        currentColor: "",
        investRange: "",
        exterior: "",
        interior: "",
        engine: "",
        suspension: "",
        wheelsRims: "",
        tires: "",
        performance: "",
        moreInfo: "",
      });
      setFiles([]);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="custom-build-form" className="relative">
      <div className="absolute inset-0 min-h-screen bg-black" />

      {/* Back Link - matches EventForm layout */}
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

      {/* Form Content - matches EventForm layout */}
      <div className="relative z-10 px-6 pb-16 sm:px-10 lg:px-12" style={{ paddingTop: "clamp(4.5rem, 8dvw, 5.5rem)" }}>
        <div className="max-w-2xl mx-auto">
          
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
            {/* Tell us about you */}
            <SectionContent delay={0.2} className="mb-20">
              <h3 className="mb-6 font-bold uppercase text-2xl sm:text-3xl md:text-4xl">
                Tell us about you
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First Name <span className="text-[#0A56FF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last Name <span className="text-[#0A56FF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization" className={labelClass}>
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="streetAddress" className={labelClass}>
                    Street Address <span className="text-[#0A56FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="city" className={labelClass}>
                      City <span className="text-[#0A56FF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="state" className={labelClass}>
                      State <span className="text-[#0A56FF]">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

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
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-[#0A56FF]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="yearMakeModel" className={labelClass}>
                    Year/Make/Model of your car <span className="text-[#0A56FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="yearMakeModel"
                    name="yearMakeModel"
                    value={formData.yearMakeModel}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="currentColor" className={labelClass}>
                    Current Color <span className="text-[#0A56FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="currentColor"
                    name="currentColor"
                    value={formData.currentColor}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="investRange" className={labelClass}>
                    What range are you looking to invest? <span className="text-[#0A56FF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="investRange"
                    name="investRange"
                    value={formData.investRange}
                    onChange={handleChange}
                    required
                    className={inputClass}
                  />
                </div>
              </div>
            </SectionContent>

            {/* What're You Looking to Do */}
            <SectionContent delay={0.2}>
              <h2 className="mb-6 font-bold uppercase text-2xl sm:text-3xl md:text-4xl">
                What&apos;re You Looking to Do
              </h2>
              <div className="space-y-4">
                {SERVICE_FIELDS.map((field) => {
                  const name = field === "Wheels/Rims" ? "wheelsRims" : field.toLowerCase();
                  return (
                    <div key={field}>
                      <label htmlFor={name} className={labelClass}>
                        {field}
                      </label>
                      <input
                        type="text"
                        id={name}
                        name={name}
                        value={formData[name as keyof typeof formData] as string}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  );
                })}

                <div>
                  <label htmlFor="moreInfo" className={labelClass}>
                    More Information
                  </label>
                  <textarea
                    id="moreInfo"
                    name="moreInfo"
                    value={formData.moreInfo}
                    onChange={handleChange}
                    rows={4}
                    className={`${inputClass} resize-none pt-2`}
                    placeholder="Tell us more about your project..."
                  />
                </div>
              </div>
            </SectionContent>

            {/* Add Photos - multiple images */}
            <SectionContent delay={0.3}>
              <label className={labelClass}>Add Photos (select multiple)</label>
              <div className="mt-2 space-y-3">
                <input
                  ref={fileInputRef}
                  type="file"
                  id="photos"
                  name="photos"
                  onChange={handleFileChange}
                  multiple
                  accept="image/*"
                  className="block w-full text-sm text-white/70 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-[#0A56FF] file:text-white file:font-bold file:uppercase file:cursor-pointer hover:file:bg-[#0A56FF]/90"
                />
                {files.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {files.map((file, i) => (
                      <div
                        key={`${file.name}-${i}-${file.lastModified}`}
                        className="flex items-center gap-2 rounded border border-white/30 bg-white/5 pl-3 pr-1 py-2 text-sm text-white/90"
                      >
                        <span className="truncate max-w-[8rem] sm:max-w-[12rem]" title={file.name}>
                          {file.name}
                        </span>
                        <span className="text-white/50 text-xs shrink-0">({(file.size / 1024).toFixed(1)} KB)</span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="ml-1 p-1 rounded hover:bg-white/20 text-white/70 hover:text-white transition-colors"
                          aria-label={`Remove ${file.name}`}
                        >
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6L6 18M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </SectionContent>

            {/* Submit */}
            <SectionContent delay={0.4}>
              <button
                type="submit"
                disabled={isSubmitting}
                className="font-bold px-8 py-4 uppercase text-[#0A56FF] border-2 border-[#0A56FF] transition-colors hover:bg-[#0A56FF]/10 disabled:cursor-not-allowed disabled:opacity-50 text-xl sm:text-2xl"
                style={{ letterSpacing: "-0.05em" }}
              >
                {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
              </button>
              {submitStatus === "success" && (
                <p className="mt-4 text-[#0A56FF]">Thank you! Your inquiry has been sent.</p>
              )}
              {submitStatus === "error" && (
                <p className="mt-4 text-red-500">There was an error. Please try again.</p>
              )}
            </SectionContent>
          </form>
        </div>
      </div>
    </Section>
  );
}
