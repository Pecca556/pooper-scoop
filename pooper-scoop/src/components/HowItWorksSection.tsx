"use client";
import React, { useState, useRef, useCallback } from "react";
import HowItWorksCard from "./RHowItWorksCard";
import { useInView } from "@/hooks/useInView";

interface Step {
  id: number;
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

interface HowItWorksSectionProps {
  subheader: string;
  title: string;
  description: string;
  steps: Step[];
}

export default function HowItWorksSection({
  subheader,
  title,
  description,
  steps,
}: HowItWorksSectionProps) {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const [activeStep, setActiveStep] = useState(1);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemHeight = 280; // Height of each card
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isProgrammaticScrollRef = useRef(false);

  const handleButtonClick = (stepId: number) => {
    setActiveStep(stepId);
    if (scrollContainerRef.current) {
      isProgrammaticScrollRef.current = true;
      scrollContainerRef.current.scrollTo({
        top: (stepId - 1) * itemHeight,
        behavior: "smooth",
      });
      // After the scroll animation, reset the flag.
      // The timeout duration should be longer than the smooth scroll animation.
      setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 1000); // Adjust if scroll is longer
    }
  };

  const handleScroll = () => {
    // If the scroll was triggered by a button click, do nothing.
    if (isProgrammaticScrollRef.current) {
      return;
    }

    if (scrollContainerRef.current) {
      // Clear any existing timeout to avoid multiple updates
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Set a timeout to update the active step only when scrolling has stopped
      scrollTimeoutRef.current = setTimeout(() => {
        if (scrollContainerRef.current) {
          const scrollTop = scrollContainerRef.current.scrollTop;
          // Add a small offset to handle rounding issues
          const currentStep = Math.round(scrollTop / itemHeight) + 1;
          if (currentStep !== activeStep) {
            setActiveStep(currentStep);
          }
        }
      }, 150); // Debounce time in ms
    }
  };

  return (
    <div className="CUSTOMERPROMISE w-full">
      <div className="">
        <div className="px-[20px]">
          <div className="flex flex-col gap-[60px] max-w-[var(--view-width)] mx-auto">
            <div ref={ref} className="flex flex-col gap-4 max-w-[var(--max-width-headerpart)] mx-auto">
              <p
                className={`subheader uppercase text-center transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isInView ? "0ms" : "0ms" }}
              >
                {subheader}
              </p>
              <h2
                className={`h2 capitalize text-center transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isInView ? "150ms" : "0ms" }}
              >
                {title}
              </h2>
              <p
                className={`p text-center transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isInView ? "300ms" : "0ms" }}
              >
                {description}
              </p>
            </div>
            <div className="flex flex-row w-full gap-[50px] items-stretch max-lg:hidden">
              <div className="flex flex-col gap-[10px] min-w-80">
                {steps.map((step) => (
                  <button
                    key={step.id}
                    onClick={() => handleButtonClick(step.id)}
                    className="flex flex-row gap-[10px] p-[10px] items-center"
                  >
                    <div
                      className={`flex items-center justify-center aspect-square rounded-[100%] h-[40px] w-[40px] ${
                        activeStep === step.id
                          ? "bg-[var(--brandcolor-darkgreen)]"
                          : ""
                      }`}
                    >
                      <p
                        className={`how-it-works-text ${
                          activeStep === step.id ? "!text-white !font-bold" : ""
                        }`}
                      >
                        {step.id}
                      </p>
                    </div>
                    <p
                      className={`how-it-works-text ${
                        activeStep === step.id
                          ? "!font-bold !text-[var(--brandcolor-darkgreen)]"
                          : ""
                      }`}
                    >
                      {step.title}
                    </p>
                  </button>
                ))}
              </div>
              <div className="flex flex-row w-full items-center">
                <div className="h-full w-[2px] bg-red-500 mr-[20px]"></div>
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="flex flex-col overflow-y-auto h-[280px] w-full"
                  style={{ scrollbarWidth: "none" }} /* Firefox */
                >
                  <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
                  <div className="flex flex-col">
                    {steps.map((step) => (
                      <HowItWorksCard
                        key={step.id}
                        imageSrc={step.imageSrc}
                        imageAlt={step.imageAlt}
                        title={`${step.id}. ${step.title}`}
                        description={step.description}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:hidden self-center">
              {steps.map((step) => (
                <HowItWorksCard
                  key={step.id}
                  imageSrc={step.imageSrc}
                  imageAlt={step.imageAlt}
                  title={`${step.id}. ${step.title}`}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
