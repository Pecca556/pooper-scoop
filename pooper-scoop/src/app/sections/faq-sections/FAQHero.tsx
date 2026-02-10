"use client"; // Make this a Client Component

import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Restructure data by category
const faqCategories = {
  "General FAQs": [
    {
      id: "gen-1",
      question: "What services do you offer?",
      answer:
        "We offer residential and commercial pet waste removal services. This includes one-time cleanups as well as recurring weekly, bi-weekly, and monthly services.",
    },
    {
      id: "gen-2",
      question: "Is there a contract or can I cancel anytime?",
      answer:
        "There are no long-term contracts for our recurring services. You can start, stop, or change your service at any time with a simple phone call or email.",
    },
    {
    id: "gen-3", // <-- Add this object
      question: "How do I get started?",
      answer:
        "Simply contact us through our website or call us to schedule your first service. We'll guide you through the process and answer any questions you may have.",
    },
  ],
  "Billing & Payments": [
    {
      id: "bill-1",
      question: "How do I pay for the service?",
      answer:
        "We offer convenient and secure online payments. We accept all major credit cards, and you can manage your billing through our client portal.",
    },
    {
      id: "bill-2",
      question: "When am I billed for the service?",
      answer:
        "For recurring services, you are typically billed at the beginning of each month for that month's services. One-time cleanups are billed after the service is completed.",
    },
  ],
  "Service Details": [
    {
      id: "serv-1",
      question: "Do I need to be home for the service?",
      answer:
        "No, you do not need to be home. As long as our technicians can safely access your yard, we can perform the service and will notify you once it's complete.",
    },
    {
      id: "serv-2",
      question: "What happens in bad weather like rain or snow?",
      answer:
        "We work in most weather conditions. In cases of severe or unsafe weather, we will notify you to reschedule your service for the next available day.",
    },
  ],
};

export default function FAQHero() {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("General FAQs");

  return (
    <div className="STORY mx-auto w-full max-w-[var(--view-width)] relative z-1">
      <div className="flex flex-col gap-10">
            <h2 className="h2 !text-white text-left">Frequently Asked Questions</h2>
            <div className="flex flex-col md:flex-row gap-[20px]">
              {/* Left Sidebar for Categories */}
              <div className="flex-none w-full md:w-[250px] bg-white rounded-[var(--radius)] h-fit">
                <div className="py-[50px] px-[40px] rounded-[30px]">
                  <h4 className="faq-font mb-4">Categories</h4>
                  <ul className="space-y-2">
                    {Object.keys(faqCategories).map((category) => (
                      <li key={category}>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setActiveCategory(category);
                          }}
                          className={
                            activeCategory === category
                              ? "font-bold text-[var(--brandcolor-primary)]"
                              : "hover:text-[var(--brandcolor-primary)]"
                          }
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Accordion Content */}
              <div className="flex-1 rounded-[var(--radius)] py-[50px] px-[40px] bg-white rounded-[var(--radius)] relative">
                <img src="/images/avif/mascottes/faq.avif" alt="" className="w-[100px] absolute right-4 -top-38"/>
                <h3 className="faq-font">{activeCategory}</h3>
                <Accordion type="single" collapsible className="w-full"> 
                  {faqCategories[activeCategory as keyof typeof faqCategories].map((faq) => (
                    <AccordionItem value={faq.id} key={faq.id}>
                      <AccordionTrigger className="h5 text-left cursor-pointer !no-underline group-data-[state=open]:!text-[var(--brandcolor-lightgreen)] transition">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      
  );
}
