import React from "react";

import Navbar from "@/components/Navbar";
import BackgroundHero from "@/components/BackgroundHero";
import Footer from "@/components/Footer";
import Banner   from "@/components/Banner";

import DeodorizerHero from "@/app/sections/services-sections/deodorizer/DeodorizerHero";
import Disclaimer from "@/app/sections/services-sections/deodorizer/Disclaimer";
import DLUORYOE from "@/app/sections/services-sections/deodorizer/DLUORYOE";
import SafetyFirst from "@/app/sections/services-sections/deodorizer/SafetyFirst";
import WIMER from "@/app/sections/services-sections/deodorizer/WIMER";
import YardOdor from "@/app/sections/services-sections/deodorizer/YardOdor";
import GrassFlowerDog from "@/app/sections/services-sections/deodorizer/GrassFlowerDog";

import locations from "@/app/data/locations.json";

export default function DeodorizerPage() {
    const location = locations.find((loc) => loc.slug === "orange-county") || locations[0];

    return (
        <div className="">
            <Banner />
            <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
            <BackgroundHero showAbsoluteMascotte={true}>
            <Navbar />
                <DeodorizerHero />
            </BackgroundHero>
            <div>
                
                    <YardOdor location={location} />
                    <GrassFlowerDog />
            </div>
                <SafetyFirst />  
                <WIMER />
                <DLUORYOE />  
                <div>
                <Disclaimer />
                <Footer />
                </div>
            </div>
        </div>
    );
}