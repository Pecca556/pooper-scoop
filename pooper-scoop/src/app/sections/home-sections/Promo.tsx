"use client";

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import FreeQuoteInput from "../../../components/functionality/ReusableFreeQuote";
import { useInView } from "@/hooks/useInView";

export default function Commercial() {
  // Set up IntersectionObserver for fade-in animation
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="mx-auto w-full px-4">
      <div className="bg-custom-gradient rounded-[var(--radius)] p-6 ">
        <div className="flex gap-10 flex-col-reverse md:flex-row max-w-[var(--view-width)] items-center mx-auto">
          <div ref={ref} className="flex flex-2 flex-col gap-y-4 w-full">
            {/* Header section with fade-in */}
            <div>
              <p 
                className={`uppercase subheader !text-white transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
              >
                Say Goodbye To Pet Waste
              </p>
              <h2 
                className={`h2 !text-white transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
              >
                Claim Your FREE Cleanup!
              </h2>
              <p 
                className={`p !text-white transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
              >
                Expires 12/21/2025
              </p>
            </div>
            
            {/* Form with fade-in */}
            <div
              className={`transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isInView ? '450ms' : '0ms' }}
            >
              <FreeQuoteInput />
            </div>
          </div>
          <div className="h-full flex-1 flex flex-row-reverse justify-center">
            <img
              src="/images/avif/mascottes/test-2.avif"
              alt="Promo"
              className="h-full w-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
