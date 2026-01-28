import React from "react";

import Navbar from "@/components/Navbar";
import BackgroundHero from "@/components/BackgroundHero";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

import DontUseBad from "@/app/sections/about-sections/DontUse-Bad";
import OurTeam from "@/app/sections/about-sections/OurTeam";
import Vision from "@/app/sections/about-sections/Vision";
import Story from "@/app/sections/about-sections/Story";



export default function AboutPage() {
  return (
    <div className="">
     <Banner />
     <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
      <BackgroundHero >
       <Navbar />
        <Story />
      </BackgroundHero>
      
        <OurTeam />
        <Vision />
        <Footer />
      </div>
    </div>
  );
}
