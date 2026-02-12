import Academy from "@/components/sections/Academy";
import BuiltByDreamers from "@/components/sections/BuiltByDreamers";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import ScheduleVisit from "@/components/sections/ScheduleVisit";
import StorageHero from "@/components/sections/StorageHero";
import YearsStatement from "@/components/sections/YearsStatement";
import WhoWhat from "@/components/sections/WhoWhat";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-x-hidden w-full">
      <Header />
      <main className="overflow-x-hidden w-full pt-20 sm:pt-24">
        <BuiltByDreamers backgroundImage="/images/built-by-dreamers-bg.jpg" />
        <YearsStatement />
        <WhoWhat />
        <Academy
          logoImage="/images/academy-logo.jpg"
          workshopImage="/images/academy-workshop.jpg"
        />
        <ScheduleVisit
          leftImage="/images/schedule-visit-left.jpg"
          rightImage="/images/schedule-visit-right.jpg"
        />
        <StorageHero backgroundImage="/images/storage-hero-bg.jpg" />
      </main>
      <Footer />
    </div>
  );
}
