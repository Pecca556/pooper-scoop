"use client";

import React, { useCallback } from "react";
import { useInView } from "@/hooks/useInView";

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ReusableWhyChooseProps {
  sectionClassName?: string;
  eyebrowText?: string;
  heading: React.ReactNode;
  subheading: string;
  items: WhyChooseItem[];
  showGrassFooter?: boolean;
  grassColor?: 'black' | 'default';
  dogImageUrl?: string;
  dogImageAlt?: string;
  white?: boolean;
  grassFooterHeight?: 90 | 150;
}

export default function ReusableWhyChoose({
  sectionClassName = "WHYCHOOSE",
  eyebrowText,
  heading,
  subheading,
  items,
  showGrassFooter = true,
  grassColor = 'black',
  dogImageUrl = "/images/mascottes/grass-divider-dog-shovel.png",
  dogImageAlt = "dog with a shovel",
  white = false,
  grassFooterHeight = 90,
}: ReusableWhyChooseProps) {
  // Set up IntersectionObserver for fade-in animation
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const heightClass = grassFooterHeight === 150 ? 'lg:h-[150px]' : 'lg:h-[90px]';
  const grassImageUrl = grassColor === 'black' ? '/images/home-page/grass-black.svg' : '/images/home-page/grass.svg';

  return (
    <div className={`${sectionClassName} mx-auto w-full flex flex-col pt-25 max-sm:pt-15`}>
      <div className="px-[20px]">
        <div ref={ref} className="flex flex-col max-w-[var(--view-width)] mx-auto gap-[20px]">
          {/* Header with fade-in */}
          <div 
            className={`flex flex-col gap-[15px] max-w-[var(--max-width-headerpart)] mx-auto text-center transition-all duration-700 ${
              isInView 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-10'
            }`}
          >
            {eyebrowText && (
              <p className={`p rounded-[var(--radius)] uppercase ${white ? '!text-white' : '!text-[var(--brandcolor-lightgreen)]'}`}>
                {eyebrowText}
              </p>
            )}
            <h2 className={`h2 ${white ? '!text-white' : ''}`}>{heading}</h2>
            <p className={`p ${white ? '!text-white' : ''}`}>{subheading}</p>
          </div>
          
          {/* Cards grid with staggered fade-in */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
            {items.map((item, index) => (
              <div
                key={index}
                className={`h-full transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 150}ms` : '0ms'
                }}
              >
                <div className="group h-full hover:bg-white why-choose-card flex flex-col items-start p-[30px] lg:p-[60px] gap-4 transition-all duration-300 shadow-lg lg:shadow-none hover:shadow-lg rounded-[var(--radius)]">
                  {item.icon}
                  <h5 className={`h5 !text-left ${white ? '!text-white group-hover:!text-black' : ''}`}>{item.title}</h5>
                  <p className={`p !text-left ${white ? '!text-white group-hover:!text-black' : ''}`}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showGrassFooter && (
        <div 
          className={`relative w-full bg-repeat-x bg-bottom [background-size:auto_100%] [image-rendering:crisp-edges] z-1 ${heightClass}`}
          style={{ backgroundImage: `url(${grassImageUrl})` }}
        >
          {dogImageUrl && (
            <div className="dog hidden lg:block absolute bottom-[-16px] left-[20%] z-10">
              <img src={dogImageUrl} alt={dogImageAlt} className="h-[200px] w-auto"/>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
