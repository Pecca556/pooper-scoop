import React from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundHero from "@/components/BackgroundHero";
import Banner from "@/components/Banner";

import AllLocationsHero from "@/app/sections/locations-sections/all-locations/AllLocationsHero";

export default function ReferAFriendPage() {
  return (
    <div className="">
      <Banner />
      <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
      <BackgroundHero addMobileMargin>
      <Navbar />
        <AllLocationsHero />
      </BackgroundHero>
      <Footer showMascotteImage/>
      </div>
    </div>
  );
}