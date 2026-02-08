"use client";

import StorageForm from "@/components/sections/StorageForm";

export default function StoragePage() {
  return (
    <div className="bg-black text-white">
      <main>
        <StorageForm
          image1="/images/storage-form-1.png"
          image2="/images/storage-form-2.png"
          image3="/images/storage-form-3.png"
          image4="/images/storage-form-4.png"
        />
      </main>
    </div>
  );
}
