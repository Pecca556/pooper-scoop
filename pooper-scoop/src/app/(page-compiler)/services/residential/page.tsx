import React from "react";

import Navbar from "@/components/Navbar";
import BackgroundHero from "@/components/BackgroundHero";
import Footer from "@/components/Footer";

import FreeCleanUp from "@/app/sections/services-sections/residential/FreeCleanUp";
import HowItWorks from "@/app/sections/services-sections/residential/HowItWorks";
import Locations from "@/app/sections/services-sections/residential/Locations";
import RALPYE from "@/app/sections/services-sections/residential/RALPYE";
import ResidentialHero from "@/app/sections/services-sections/residential/ResidentialHero";
import ReviewsDisclaimer from "@/app/sections/services-sections/residential/ReviewsDisclaimer";
import WhatToExpect from "@/app/sections/services-sections/residential/WhatToExpect";
import WhyUs from "@/app/sections/services-sections/residential/WhyUs";
import Banner from "@/components/Banner";
export default function ResidentialPage() {
  return (
    <div className="">
      <Banner />
       <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
      <BackgroundHero>
       <Navbar /> 
       <ResidentialHero />
      </BackgroundHero>
     
        <HowItWorks />
        <WhyUs />
        <WhatToExpect />
        <RALPYE />
        <Locations />
        <FreeCleanUp />
        <div>
        <ReviewsDisclaimer />
        <Footer />
        </div>
      </div>
    </div>
  );
}