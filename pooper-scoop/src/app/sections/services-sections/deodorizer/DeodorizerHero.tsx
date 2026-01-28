import React from "react";
import ReusableHero from "@/components/ReusableHero";

export default function DeodorizerHero() {
  return (
    <div className="DeodorizerHero mx-auto w-full">
      
          <ReusableHero 
                topText="RESIDENTIAL"
                mainTitle="Pet Waste  Removal"
                subtitle="Get your free quote today to get started!"
                imageSrc="/images/avif/real-life-images/dogs-car.avif"
                imageAlt="Residential pet waste service"
                showQuoteInput={true}
              />
          </div>
     
  );
}
