"use client";

import React from "react";
import DisclaimerBg from "@/components/disclaimer-bg";
import { useInView } from "@/hooks/useInView";

export default function Disclaimer() {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="customer-promise mx-auto w-full ">
      <div className="relative pt-10 pb-90">
              <DisclaimerBg />
        <div className="px-[20px] max-sm:px-0">
          <div ref={ref} className="rounded-[var(--radius)] bg-white/90 flex flex-col gap-4 max-w-[var(--view-width)] mx-auto pt-[60px] px-[50px] pb-[40px] max-sm:px-4 max-sm:rounded-none ">
            <p 
              className={`p !text-sm transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? "0ms" : "0ms" }}
            >
              One of the primary reasons to hire a pet waste
              removal service is the convenience it offers. Cleaning up after
              your pets can be a time-consuming and unpleasant task. A
              professional service takes care of this chore for you, saving you
              time and effort.
            </p>
            <p 
              className={`p !text-sm transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? "100ms" : "0ms" }}
            >
              Pet waste can pose health risks to both
              humans and other pets. It can contain harmful bacteria and
              parasites that can cause illnesses. A pet waste removal service
              ensures thorough and regular cleaning, reducing the risk of
              contamination and maintaining a healthier environment for you and
              your family.
            </p>
            <p 
              className={`p !text-sm transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? "200ms" : "0ms" }}
            >
               Accumulated pet waste can produce foul odors
              that are unpleasant for you and your neighbors. A professional
              service can remove waste regularly, keeping your outdoor spaces
              smelling fresh and clean.
            </p>
            <p 
              className={`p !text-sm transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? "300ms" : "0ms" }}
            >
               Over time, pet waste can damage your
              lawn and landscaping, leading to unsightly brown patches and an
              unhealthy outdoor environment. Regular removal by a pet waste
              service can help preserve the beauty and integrity of your outdoor
              spaces.
            </p>
            <p 
              className={`p !text-sm transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? "400ms" : "0ms" }}
            >
               Proper disposal of pet waste
              is essential for environmental reasons. When waste is left
              untreated, it can contaminate soil and water sources. Many pet
              waste removal services dispose of waste in an environmentally
              responsible manner, ensuring that it doesn't harm the ecosystem.
            </p>
            <p 
              className={`p !text-sm transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? "500ms" : "0ms" }}
            >
              In summary, hiring a pet waste removal service can save you time,
              maintain a cleaner and healthier environment, improve the
              aesthetics of your yard, and promote environmental responsibility.
              It's a convenient and beneficial solution for pet owners looking
              to ensure a clean and safe outdoor space.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
