import React from "react";
import { notFound } from "next/navigation";
import locations from "@/app/data/locations.json";

import Navbar from "@/components/Navbar";
import BackgroundHero from "@/components/BackgroundHero";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";

import LocationHero from "@/app/sections/locations-sections/templates/LocationHero";
import LocationServiceArea from "@/app/sections/locations-sections/templates/LocationServiceArea";
import WhyHire from "@/app/sections/locations-sections/orange-county/WhyHire";
import Spoil from "@/app/sections/locations-sections/orange-county/Spoil";
import Promo from "@/app/sections/home-sections/Promo";
import GrassFooter from "@/components/GrassFooter";
import Reviews from "@/app/sections/home-sections/Reviews";
import WhyUs from "@/app/sections/services-sections/residential/WhyUs";
import ReferAFriend from "@/app/sections/home-sections/ReferAFriend";
import SatisfactionGuarantee from "@/app/sections/locations-sections/orange-county/SatisfactionGuarantee";
import Collage from "@/app/sections/locations-sections/orange-county/Collage";
import FAQ from "@/app/sections/locations-sections/orange-county/FAQ";
import Disclaimer from "@/app/sections/locations-sections/orange-county/Disclaimer";

export async function generateStaticParams() {
    return locations.map((location) => ({
        slug: location.slug,
    }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const location = locations.find((loc) => loc.slug === slug);

    if (!location) {
        notFound();
    }

    return (
        <div className="">
            <Banner />
            <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">
            <BackgroundHero>
                <Navbar />
                <LocationHero name={location.name} />
            </BackgroundHero>
           
                <div className="flex flex-col">
                    
                    <WhyHire />
                    <div className="flex flex-col gap-[40px]">
                        <Spoil />
                        <GrassFooter />
                    </div>
                </div>
                {/* <Reviews /> */}
                <WhyUs />
                <LocationServiceArea
                    name={location.name}
                    description={location.description}
                    cities={location.cities}
                    zipCodes={location.zipCodes}
                    mapEmbedUrl={location.mapEmbedUrl}
                />
                <Promo />
                <ReferAFriend />
                <SatisfactionGuarantee />
                <Collage />
                <FAQ />
                <div className="flex flex-col">
                    
                    <Disclaimer />
                    <Footer />
                </div>
            </div>
        </div>
    );
}
