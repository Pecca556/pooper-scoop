import React from "react";
import SearchHero from "@/app/sections/search-sections/SearchHero";
import BackgroundHero from "@/components/BackgroundHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function SearchPage() {
  return (
    <div className="">
      <Banner />
      <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
        <BackgroundHero>
          <Navbar />
          <SearchHero />
        </BackgroundHero>
        <Footer />
      </div>
    </div>
  );
}
