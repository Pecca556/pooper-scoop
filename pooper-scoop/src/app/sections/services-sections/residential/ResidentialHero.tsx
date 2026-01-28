import React from "react";
import ReusableHero from "@/components/ReusableHero"

export default function Hero() {
  return (

    <div className="relative w-full">
      <ReusableHero 
        topText="RESIDENTIAL"
        mainTitle="Pet Waste  Removal"
        subtitle="Get your free quote today to get started!"
        imageSrc="/images/avif/real-life-images/residential-hero.avif"
        imageAlt="Residential pet waste service"
        showQuoteInput={true}
      />
      
    </div>

  );
}
