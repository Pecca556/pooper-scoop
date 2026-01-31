"use client";

import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import FreeQuoteInput from "../../../components/functionality/ReusableFreeQuote";
import { useInView } from "@/hooks/useInView";

export default function ReferAFriend() {
  // Set up IntersectionObserver for fade-in animation
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="REFERAFRIEND mx-auto w-full ">
      <div className="horizontal-padding ">
        <div className="vertical-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[var(--view-width)] mx-auto px-[20px] gap-[25px]">
            <div className="flex flex-col gap-[10px] justify-center items-center pt-[60px] px-[50px] bg-[#F8F8F8] rounded-[36px] bg-[url('/images/home-page/grass.svg')] bg-repeat-x bg-bottom [background-size:100%_auto]">
              <p className="uppercase subheader">Spread the love!</p>
              <h2 className="h2">Refer a Friend</h2>{" "}
              <p className="p mb-[14px] text-center">
                Friends shouldn't let friends scoop their own pet waste! Refer a
                friend to Doodie Duty, and for every successful referral, you'll
                get 20% off your next bill!
              </p>
              <Button className="bg-[var(--brandcolor-red)] hover:bg-black !text-white">
                <Link href="/refer-a-friend">Learn More</Link>
              </Button>
              <img
                className="h-[204px]"
                src="/images/mascottes/refer-a-friend.png"
                alt="heartdogs"
              />
            </div>
            <div className="flex rounded-[var(--radius)] flex-col-reverse md:flex-col gap-[10px] justify-center items-center pt-[60px] px-4 pb-[20px] bg-custom-gradient">
              {/* Text elements with fade-in animation */}
              <div ref={ref} className="w-full items-center flex flex-col">
                <p
                  className={`uppercase subheader !text-[var(--textcolor-white)] transition-all duration-700 ${isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
                >
                  Let's Get Started!
                </p>
                <h2
                  className={`h2 mb-[24px] !text-[var(--textcolor-white)] text-center transition-all duration-700 ${isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
                >
                  Don't Wait! Sign Up Today!
                </h2>{" "}
                <div
                  className={`-translate-x-14 max-md:-translate-x-0 max-md:w-full transition-all duration-700 ${isInView
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                    }`}
                  style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
                >
                  <FreeQuoteInput />
                </div>
              </div>

              <img
                className="h-[169px] pt-[20px]"
                src="/images/mascottes/home-referafriend-dontwaitsignup.png"
                alt="heartdogs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
