"use client";

import React, { useCallback } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface ReusableFAQProps {
  title?: string;
  subtitle?: string;
  description?: string;
  faqData: FAQItem[];
  showViewMoreButton?: boolean;
  viewMoreLink?: string;
  viewMoreText?: string;
}

export default function ReusableFAQ({
  title = "Still have questions?",
  subtitle = "Frequently asked pet waste questions!",
  description = "Get the answers to your pet waste service questions right here.",
  faqData,
  showViewMoreButton = true,
  viewMoreLink = "/faq",
  viewMoreText = "View More Questions",
}: ReusableFAQProps) {
  // Set up IntersectionObserver for fade-in animation
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="FAQ mx-auto w-full bg-[var(--brandcolor-lightgreen)]/20">
      <div className=" py-[80px]">
        <div className="vertical-padding px-[20px]">
          <div className="flex flex-col gap-[34px] max-w-[var(--view-width)] mx-auto">
            {/* Header text with fade-in animation */}
            <div ref={ref} className="flex flex-col gap-[14px] max-w-[var(--max-width-headerpart)] mx-auto text-center">
              <p 
                className={`subheader uppercase !text-[var(--brandcolor-lightgreen)] transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
              >
                {title}
              </p>
              <h2 
                className={`h2 capitalize transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
              >
                {subtitle}
              </h2>
              <p 
                className={`p transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
              >
                {description}
              </p>
            </div>
            <div className="flex flex-col bg-white px-[50px] py-[40px] rounded-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.1)] w-[1366px] mx-auto max-w-full gap-[20]">
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="group cursor-pointer !no-underline">
                      <h4 className="h4 text-left group-data-[state=open]:!text-[var(--brandcolor-lightgreen)] transition">
                        {item.question}
                      </h4>
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="p !text-left !font-normal">{item.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              {showViewMoreButton && (
                <div className="flex items-center justify-center">
                  <Button className="bg-[var(--brandcolor-red)] hover:bg-black !text-white">
                    <Link href={viewMoreLink}>{viewMoreText}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
