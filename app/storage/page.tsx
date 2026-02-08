import StorageForm from "@/components/sections/StorageForm";

export default function StoragePage() {
  return (
    <div className="bg-black text-white">
      <main>
        <StorageForm
          image1="/images/storage-form-left.png"
          image2="/images/storage-form-right.png"
          image3="/images/storage-form-left.png"
          image4="/images/storage-form-right.png"
        />
      </main>
    </div>
  );
}
