"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";
import React, { useCallback } from "react";
import { useInView } from "@/hooks/useInView";

export default function Reviews() {
  // Set up IntersectionObserver for fade-in animation
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="mx-auto w-full">
      <div className="max-w-[var(--view-width)] mx-auto">
        <div className="px-[20px]">
          <div className="flex flex-col gap-[34px]">
            <div className="flex flex-col max-w-[var(--max-width-headerpart)] gap-y-8 mx-auto text-center">
              {/* Header text with fade-in animation */}
              <div ref={ref} className="flex flex-col gap-4">
                <p 
                  className={`subheader uppercase !text-[var(--brandcolor-lightgreen)] transition-all duration-700 ${
                    isInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
                >
                  Reviews
                </p>
                <h2 
                  className={`h2 capitalize transition-all duration-700 ${
                    isInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
                >
                  Over 1,100+ 5 Star Reviews!
                </h2>
                <p 
                  className={`p max-w-[550px] mx-auto transition-all duration-700 ${
                    isInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
                >
                  See why our clients love Doodie Duty and our reliable, hassle-free pet waste service!
                </p>
              </div>

              <div className="flex flex-row justify-center gap-x-8 items-center px-10">
                <p className="h3">4.9</p>
                <img className="" src="/images/home-page/stars.svg" alt="" />
              </div>
            </div>

            <div>
              <ReactGoogleReviews
                layout="carousel"
                featurableId="example"
                theme="light"
                carouselAutoplay={true}
                carouselSpeed={3000}
                maxItems={3}
                showDots={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
