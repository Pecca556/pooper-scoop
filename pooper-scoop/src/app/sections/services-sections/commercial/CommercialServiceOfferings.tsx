"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

// Reusable service card component
interface ServiceCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  delay?: string;
  isInView?: boolean;
}

function ServiceCard({ iconSrc, iconAlt, title, delay, isInView }: ServiceCardProps) {
  return (
    <div
      className={`w-full transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: delay || "0ms" }}
    >
      <div className="flex flex-row gap-[16px] py-[60px] px-0 md:px-[20px] max-sm:p-0 justify-start items-center rounded-[var(--radius)] hover:bg-white group w-full transition-all duration-300">
        <img src={iconSrc} alt={iconAlt} className="w-[70px]" />
        <h5
          className="h5 !text-[var(--textcolor-white)] group-hover:!text-black"
          style={{ transition: "var(--transition)" }}
        >
          {title}
        </h5>
      </div>
    </div>
  );
}

export default function CommercialServiceOfferings() {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="CommercialServiceOfferings mx-auto w-full ">
      <div className="">
        <div className="px-[20px]">
          {" "}
          <div
            /* main flex */ className=" pt-[50px] bg-custom-gradient rounded-[var(--radius)] flex flex-col gap-[20px] relative pb-0 max-sm:gap-[30px] max-sm:mx-[-20px] max-sm:!rounded-[0px] "
          >
            <div
              ref={ref}
              /* uppertext flex */ className={` px-[20px] flex flex-col gap-[5px] max-w-[var(--max-width-headerpart)] mx-auto transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <p className="subheader !text-[var(--textcolor-white)] text-center max-sm:text-left">
                go with the best in SOCAL
              </p>{" "}
              <h2 className="h2 !text-[var(--textcolor-white)] text-center max-sm:text-left">
                Commercial Service Offerings
              </h2>{" "}
              <p className="p !text-[var(--textcolor-white)] text-center max-sm:text-left">
                {" "}
                Prepare to fall in love. Doody Duty makes poop scoop easy and
                delightful for everyone. And it takes just minutes to get
                started.
              </p>
            </div>
            <div className="relative w-full ">
              <div className="px-[20px] grid grid-cols-1 max-sm:gap-y-[50px] md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-start md:place-items-center mx-auto w-full max-w-[var(--max-view-width)] pb-[68px] max-sm:pb-[50px] max-w-[var(--view-width)] mx-auto">
                <ServiceCard
                  iconSrc="/images/svg/svg-image-6.svg"
                  iconAlt="checkmark"
                  title="Pet Waste Services"
                  isInView={isInView}
                  delay="0ms"
                />
                <ServiceCard
                  iconSrc="/images/svg/svg-image-7.svg"
                  iconAlt="checkmark"
                  title="Pet Waste Station Installation"
                  isInView={isInView}
                  delay="150ms"
                />
                <ServiceCard
                  iconSrc="/images/svg/svg-image-8.svg"
                  iconAlt="checkmark"
                  title="Waste Station Service"
                  isInView={isInView}
                  delay="300ms"
                />
                <ServiceCard
                  iconSrc="/images/svg/svg-image-9.svg"
                  iconAlt="checkmark"
                  title="Bag Resupply"
                  isInView={isInView}
                  delay="450ms"
                />
                <ServiceCard
                  iconSrc="/images/svg/svg-image-10.svg"
                  iconAlt="checkmark"
                  title="Common Area Cleaning"
                  isInView={isInView}
                  delay="600ms"
                />
                <ServiceCard
                  iconSrc="/images/svg/svg-image-11.svg"
                  iconAlt="checkmark"
                  title="Community Trash Removal"
                  isInView={isInView}
                  delay="750ms"
                />
                <ServiceCard
                  iconSrc="/images/svg/svg-image-12.svg"
                  iconAlt="checkmark"
                  title="Pet Waste Management Plans"
                  isInView={isInView}
                  delay="900ms"
                />
              </div>
              <div className="h-[90px] w-full bg-[url('/images/home-page/grass.svg')] bg-repeat-x bg-bottom [background-size:auto] z-1 relative "></div>
              <img
                src="/images/avif/mascottes/commercialserviceofferings.avif"
                alt=""
                className="absolute right-0 bottom-0 h-[383px] pointer-events-none select-none max-md:hidden z-0 -translate-y-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
