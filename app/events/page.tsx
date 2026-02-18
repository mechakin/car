"use client";

import EventsInfo from "@/components/sections/EventsInfo";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function EventsPage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-[5.5rem] sm:pt-[6.5rem]">
        <EventsInfo />
      </main>
      <Footer />
    </div>
  );
}
