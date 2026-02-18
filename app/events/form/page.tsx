"use client";

import EventForm from "@/components/sections/EventForm";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function EventFormPage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-[5.5rem] sm:pt-[6.5rem]">
        <EventForm />
      </main>
      <Footer />
    </div>
  );
}
