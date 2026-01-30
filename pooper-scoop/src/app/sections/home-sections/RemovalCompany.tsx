"use client";

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import FreeQuoteInput from '@/components/functionality/ReusableFreeQuote';
import { GrassBG } from "@/app/constants";
import { useInView } from "@/hooks/useInView";


export default function RemovalCompany() {
  // Set up IntersectionObserver for fade-in animation
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="mx-auto w-full px-4">

      <div className="bg-custom-gradient rounded-[var(--radius)]">
        <div className={`
        ${GrassBG} 
        py-30`}>
          <div className="grid sm:grid-rows-[1fr_1fr] lg:flex lg:flex-row max-w-[var(--view-width)] mx-auto px-[20px] gap-[25px]">
            <div ref={ref} className="flex flex-col gap-[20px] py-[47px] px-[55px] bg-[#F8F8F8] rounded-[var(--radius)] items-start justify-center lg:w-1/2">
              {/* Subheader with fade-in */}
              <p 
                className={`uppercase subheader transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
              >
                Doodie Duty
              </p>
              
              {/* Heading with fade-in */}
              <h2 
                className={`h2 transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
              >
                Our Pet Waste Removal Company
              </h2>
              
              {/* Paragraph with fade-in */}
              <p 
                className={`p mb-[14px] transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
              >
                Doodie Duty was founded in late 2025 with the goal of improving the lives of dog owners by offering high-quality pet waste removal services throughout Orange County. In just a few short years, Doodie Duty has expanded to serve hundreds of dog owners every month and has created numerous living wage jobs with benefits for dozens of dog-loving team members.
              </p>
              
              {/* Button with fade-in */}
              <div
                className={`transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '450ms' : '0ms' }}
              >
                <Button className="bg-[var(--brandcolor-red)] hover:bg-black lg:w-fit !text-white" asChild>
                  <Link href="/faq">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-[var(--radius)] lg:w-1/2 min-h-0 relative md:self-stretch max-md:aspect-[593.758/555]">
              <img 
                src="/images/avif/real-life-images/girls-on-car.avif" 
                alt="Doodie Duty team members with service vehicle" 
                className="w-full h-full object-cover absolute inset-0"
                fetchPriority="high"
              />
            </div>
            <img className="w-40 absolute bottom-0" src="/images/home-page/poop.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
