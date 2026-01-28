import React from "react";
import FAQHero from "@/app/sections/faq-sections/FAQHero";
import BackgroundHero from "@/components/BackgroundHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function FAQPage() {
  return (
    <div className="">
        <Banner />
        <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
        <BackgroundHero>
        <Navbar />
      <FAQHero />
        </BackgroundHero>
        <Footer />    
        </div>  
    </div>
  );
}