import React from "react";

import BackgroundHero from "@/components/BackgroundHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

import CommercialHero from "@/app/sections/services-sections/commercial/CommercialHero";
import CommercialServiceOfferings from "@/app/sections/services-sections/commercial/CommercialServiceOfferings";
import FBTP from "@/app/sections/services-sections/commercial/FBTP";
import FreeConsultation from "@/app/sections/services-sections/commercial/FreeConsultation";
import WeAreTheBest from "@/app/sections/services-sections/commercial/WeAreTheBest";
import HowItWorks from "@/app/sections/services-sections/commercial/HowItWorks";

export default function CommercialPage() {
    return (
        <div className="">
            <Banner />
            <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
            <BackgroundHero>
                <Navbar />
                <CommercialHero />
            </BackgroundHero>
            
                <HowItWorks />
                <CommercialServiceOfferings />
                <FBTP />
                <div>
                    
                    <FreeConsultation />
                    <Footer />
                </div>
            </div>
        </div>
    );
}