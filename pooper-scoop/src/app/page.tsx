import React from "react";
import HomeBackgroundHero from "../components/HomeBackgroundHero";
import Navbar from "../components/Navbar";
import Hero from "./sections/home-sections/Hero";
import FAQ from "./sections/home-sections/FAQ";
import Locations from "./sections/home-sections/Locations";
import ReferAFriend from "./sections/home-sections/ReferAFriend";
import WhyChoose from "./sections/home-sections/WhyChoose";
import CustomerPromise from "./sections/home-sections/CustomerPromise";
import RemovalCompany from "./sections/home-sections/RemovalCompany";
import Residential from "./sections/home-sections/Residential";
import Commercial from "./sections/home-sections/Commercial";
import Promo from "./sections/home-sections/Promo";
import Reviews from "./sections/home-sections/Reviews";
import Credentials from "./sections/home-sections/Credentials";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

export default function HomePage() {
  return (
    
    <div>
      <Banner />
      <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
      <HomeBackgroundHero showHeroImage >
        <Navbar />
        <Hero />
      </HomeBackgroundHero>
        <CustomerPromise />
        <RemovalCompany />
        <Residential />
        <Commercial />
        <Promo />
        <WhyChoose />
        <Locations />
        {/* <Reviews /> */}
        <ReferAFriend />
      <div>
      <FAQ />
      
      <Credentials />
      <Footer />
      </div>
      </div>
    </div>
  );
}
