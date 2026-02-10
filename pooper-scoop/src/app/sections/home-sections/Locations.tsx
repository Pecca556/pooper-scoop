"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useCallback } from "react";
import { useInView } from "@/hooks/useInView";

const locationsData = [
  {
    city: "Orange County",
    state: "CA",
    isHeadquarters: true,
    link: "#",
    services: "Pet Waste Removal | Commercial Services",
  },
  {
    city: "Garden Grove",
    state: "CA",
    isHeadquarters: false,
    link: "#",
    services: "Pet Waste Removal | Commercial Services",
  },
  {
    city: "Huntington Beach",
    state: "CA",
    isHeadquarters: false,
    link: "#",
    services: "Pet Waste Removal | Commercial Services",
  },
  {
    city: "Santa Ana",
    state: "CA",
    isHeadquarters: false,
    link: "#",
    services: "Pet Waste Removal | Commercial Services",
  },
];

function LocationItem({
  city,
  state,
  isHeadquarters,
  link,
  services,
}: (typeof locationsData)[0]) {
  return (
    <div className="grid [grid-template-columns:auto_1fr] [grid-template-rows:auto_auto] w-full gap-y-[3px] gap-x-]">
      <div className="col-start-1 row-span-2 flex justify-start items-start pt-1 w-fit">
        <img src="/images/home-page/pin.svg" alt="pin" />
      </div>
      <div className="col-start-2 row-start-1 flex flex-row flex-wrap items-center gap-x-[6px] gap-y-1">
        <p className="location-text whitespace-nowrap">
          {city} <span className="!font-normal">{state}</span>
        </p>
        {isHeadquarters && (
          <a href={link}>
            <p className="p uppercase !text-[var(--brandcolor-lightgreen)] italic ">
              headquarters
            </p>
          </a>
        )}
      </div>
      <p className="disclaimer-text col-start-2 row-start-2 !font-medium !text-left">
        {services}
      </p>
    </div>
  );
}

export default function Locations() {
  // Set up IntersectionObserver for fade-in animation
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="LOCATIONS mx-auto w-full px-[20px] py">

      <div className=" py-[80px] max-lg:py-[50px] max-md:py-[30px] bg-[#F8F8f8] shadow-[0px_0px_21px_rgba(67,67,67,0.14)] rounded-[30px] bg-[url('/images/home-page/pattern-locations.svg')] bg-repeat overflow-visible">
        <div className="flex flex-col max-w-[var(--view-width)] mx-auto gap-[34px] px-4">
          <div className="flex flex-col  mx-auto px-[20px]">
            {/* Header with fade-in animation */}
            <div ref={ref} className="flex flex-col gap-[15px] max-w-[var(--max-width-headerpart)] mx-auto text-center">
              <p 
                className={`uppercase subheader transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
              >
                doodie duty service areas
              </p>
              <h2 
                className={`h2 transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
              >
                Pet Waste Locations
              </h2>
              <p 
                className={`p transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
              >
                Doodie Duty proudly services the majority of the SoCal with locations in Orange County, Garden Grove, Huntington Beach, and Santa Ana.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 max-md:grid-cols-1 w-full items-start gap-x-[20px] gap-y-8">
            <div className="flex flex-col gap-[28px] w-full">
              {locationsData.map((location, index) => (
                <LocationItem key={index} {...location} />
              ))}

              <div>
                <Button className="bg-[var(--brandcolor-red)] hover:bg-black !text-white" asChild>
                  <Link href="/locations/all-locations">
                    Discover More
                  </Link>
                </Button>
              </div>

            </div>
            <div className="justify-self-end max-md:justify-self-center max-md:row-start-1">
              <img
                src="/images/home-page/map-graphic.svg"
                alt="map"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
