import Academy from "@/components/sections/Academy";
import ApparelHero from "@/components/sections/ApparelHero";
import BrandBuildHero from "@/components/sections/BrandBuildHero";
import KitSection from "@/components/sections/KitSection";
import BuiltByDreamers from "@/components/sections/BuiltByDreamers";
import EventsHero from "@/components/sections/EventsHero";
import CustomBuildHero from "@/components/sections/CustomBuildHero";
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
      <main className="overflow-x-hidden w-full pt-[5.5rem] sm:pt-[6.5rem]">
        <BuiltByDreamers backgroundImage="/images/built-by-dreamers-bg.jpg" />
        <YearsStatement />
        <WhoWhat />
        <ApparelHero backgroundImage="/images/apparel.jpg" />
        <BrandBuildHero backgroundImage="/images/brand-builds/brand-build-4148.png" />
        <CustomBuildHero backgroundImage="/images/custom-build.jpg" />
        <Academy
          logoImage="/images/academy-logo.jpg"
          workshopImage="/images/academy-workshop.jpg"
        />
        {/* <KitSection /> */}
        <ScheduleVisit image="/images/schedule-visit-left.jpg" />
        <EventsHero backgroundImage="/images/events.png" />
        <StorageHero backgroundImage="/images/storage-hero-bg.jpg" />
      </main>
      <Footer />
    </div>
  );
}
