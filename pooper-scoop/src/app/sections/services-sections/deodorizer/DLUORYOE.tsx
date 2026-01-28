"use client";

import React from "react";
import FreeQuoteInput from "@/components/functionality/ReusableFreeQuote";
import { useInView } from "@/hooks/useInView";

export default function DLUORYOE() {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="customer-promise mx-auto w-full ">
        <div className="px-[20px] relative">
          <div className="bg-custom-gradient rounded-[var(--radius)] overflow-hidden ">
              <div className="max-w-[var(--view-width)] mx-auto py-[40px] px-[20px]">
                  <div className="flex flex-row max-lg:flex-col-reverse max-lg:gap-[20px] items-center">
                    <div ref={ref} className="flex flex-col gap-[10px] items-center max-w-[var(--max-width-headerpart)] mx-auto relative z-1">
                      <p 
                        className={`subheader capitalize !text-white text-center transition-all duration-700 ${
                          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: isInView ? "0ms" : "0ms" }}
                      >
                        Get Started With Our Yard Deodorizing & Spraying Services
                      </p>{" "}
                      <h2 
                        className={`h2 !text-white text-center transition-all duration-700 ${
                          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: isInView ? "150ms" : "0ms" }}
                      >
                        {" "}
                        Don’t let unpleasant odors ruin your outdoor experience!
                      </h2>{" "}
                      <p 
                        className={`p !text-white text-center transition-all duration-700 ${
                          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: isInView ? "300ms" : "0ms" }}
                      >
                        Include Yard Odor Destroyer with your service plan and schedule
                        your monthly application for a fresher, cleaner yard for you and
                        your pets!
                      </p>
                      <div 
                        className={`md:-translate-x-12 max-md:w-full mt-4 transition-all duration-700 ${
                          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                        style={{ transitionDelay: isInView ? "450ms" : "0ms" }}
                      >
                        <FreeQuoteInput/>
                      </div>
                    </div>
                    
                      <img
                        src="/images/avif/mascottes/image2.avif"
                        alt="happy dog treading on flowerbed"
                        className="absolute h-[160px] right-0 bottom-0 z-0 max-lg:hidden"
                      />
                  </div>
              </div>
          </div>
        </div>
  
    </div>
  );
}
