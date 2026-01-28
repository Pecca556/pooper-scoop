"use client";

import React, { useCallback } from "react";
import { useInView } from "@/hooks/useInView";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import FreeQuoteInput from '../../../components/functionality/ReusableFreeQuote';

const CheckmarkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 35.011 33.546"
    className="w-6 h-6 flex-shrink-0"
  >
    <g
      id="Group_1145"
      data-name="Group 1145"
      transform="translate(-747.494 -3302.23)"
    >
      <path
        id="Path_768"
        data-name="Path 768"
        d="M46.012,40.341c-12.339,1.963-11.829-30.357.006-7.326,4.737-3.782,14.295-22.273,20.249-19.936C73.832,16.047,54.048,38.347,46.012,40.341Z"
        transform="translate(714.546 3295.348)"
        fill="#cdcdcd"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_841"
        data-name="Path 841"
        d="M46.012,40.341c-12.339,1.963-11.829-30.357.006-7.326,4.737-3.782,14.295-22.273,20.249-19.936C73.832,16.047,54.048,38.347,46.012,40.341Z"
        transform="translate(711.546 3290.348)"
        fill="#fff"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="2"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);

export default function Residential() {
  // Set up IntersectionObserver for fade-in animation
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="mx-auto w-full px-4">
      <div className="rounded-[var(--radius)] py-[50px] overflow-hidden relative">
        <img src="/images/avif/real-life-images/residential-hero.avif" alt="" className="w-full h-full object-cover absolute inset-0 -z-1" />
        <div className="flex flex-row-reverse max-w-[var(--view-width)] mx-auto px-[20px] gap-[25px]">
          <div ref={ref} className="flex md:w-1/2 flex-col gap-y-4 py-14 py-10 px-[50px] bg-[#F8F8F8] rounded-[var(--radius)]">
            {/* Header section with fade-in */}
            <div
              className={`transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
            >
              <p className="uppercase subheader mb-2">Say Goodbye To Pet Waste</p>
              <h2 className="h2 mb-3">Residential Pet Waste Services</h2>
            </div>

            {/* List items with staggered fade-in */}
            <div>
              <ul className="flex flex-col gap-4 mb-[14px]">
                <li 
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
                >
                  <CheckmarkIcon />
                  <span className="p">Flexible service options: 2x weekly, weekly, bi-weekly, monthly, and one-time.</span>
                </li>
                <li 
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
                >
                  <CheckmarkIcon />
                  <span className="p">Hundreds of 5-star reviews from satisfied Pacific Northwest dog owners.</span>
                </li>
                <li 
                  className={`flex items-start gap-3 transition-all duration-700 ${
                    isInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: isInView ? '450ms' : '0ms' }}
                >
                  <CheckmarkIcon />
                  <span className="p">Deodorizer services keep your yard smelling fresh and odor-free.</span>
                </li>
              </ul>
            </div>

            {/* Button with fade-in */}
            <div
              className={`transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isInView ? '600ms' : '0ms' }}
            >
              <Button className="bg-[var(--brandcolor-red)] hover:bg-black lg:w-fit !text-white" asChild>
                <Link href="/services/residential">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
