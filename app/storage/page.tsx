"use client";

import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import StorageForm from "@/components/sections/StorageForm";

export default function StoragePage() {
  return (
    <div className="bg-black text-white">
      <Header />
      <main className="pt-[5.5rem] sm:pt-[6.5rem]">
        <StorageForm
          image1="/images/storage-form-1.jpg"
          image2="/images/storage-form-2.jpg"
          image3="/images/storage-form-3.jpg"
          image4="/images/storage-form-4.jpg"
        />
      </main>
      <Footer />
    </div>
  );
}
