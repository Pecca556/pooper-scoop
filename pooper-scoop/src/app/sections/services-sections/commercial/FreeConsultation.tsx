"use client";

import React from "react";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import DisclaimerBg from "@/components/disclaimer-bg";
import { useInView } from "@/hooks/useInView";

export default function FreeConsultation() {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="CUSTOMERPROMISE mx-auto w-full  ">
      <div className="relative pt-10 pb-90">
              <DisclaimerBg />
        <div className="px-[20px]">
          {" "}
          <div className="flex flex-col gap-[28px] items-center">
            <div ref={ref} className="flex flex-col max-w-[--max-width-headerpart] gap-[20px]">
              {" "}
              <p 
                className={`subheader uppercase text-center transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
              >
                we are the best
              </p>
              <h2 
                className={`h2 text-center transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
              >
                Free Consultation
              </h2>
              <p 
                className={`p text-center max-w-[600px] transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
              >
                Contact us for a free site visit and community pet waste
                management plan from Doodie Duty!
              </p>
            </div>
            <form className="flex flex-col gap-4 w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field>
                  <FieldLabel>First Name</FieldLabel>
                  <FieldContent>
                    <Input placeholder="John" />
                  </FieldContent>
                </Field>
                <Field>
                  <FieldLabel>Last Name</FieldLabel>
                  <FieldContent>
                    <Input placeholder="Doe" />
                  </FieldContent>
                </Field>
              </div>
              <Field>
                <FieldLabel>Email</FieldLabel>
                <FieldContent>
                  <Input type="email" placeholder="john.doe@example.com" />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Phone Number</FieldLabel>
                <FieldContent>
                  <Input type="tel" placeholder="(123) 456-7890" />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>Property Name</FieldLabel>
                <FieldContent>
                  <Input placeholder="e.g. The Grand Apartments" />
                </FieldContent>
              </Field>
              <Field>
                <FieldLabel>How can we help?</FieldLabel>
                <FieldContent>
                  <Textarea placeholder="Tell us about your community's needs..." />
                </FieldContent>
              </Field>
              <Button type="submit" className="w-full md:w-auto bg-[var(--brandcolor-red)] hover:bg-black !text-white">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
