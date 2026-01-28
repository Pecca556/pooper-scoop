import React from "react";
import ReferAFriendHero from "@/app/sections/refer-a-friend-sections/ReferAFriendHero";
import BackgroundHero from "@/components/BackgroundHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

export default function ReferAFriendPage() {
  return (
    <div className="">
      <Banner />
      <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
      <BackgroundHero>
      <Navbar />
      <ReferAFriendHero />
    
      </BackgroundHero>
      <Footer />
      </div>
    </div>
  );
}
