import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CommercialHero() {
  return (
    <div className="COMMERCIALHERO mx-auto w-full ">

      <div className="px-[20px]">
        <div className="flex flex-col md:flex-row gap-8 items-stretch justify-start max-w-[var(--view-width)] mx-auto w-full">
          <div className="flex flex-col gap-4 flex-1 items-start justify-center w-full">
            <h5 className="h5 uppercase !font-[500] !text-[var(--textcolor-white)]">
              commercial services
            </h5>
            <h1 className="capitalize !text-[var(--textcolor-white)] text-[clamp(3rem,10vw,6.25rem)] font-[400] leading-[91%] font-['Lilita_One',sans-serif]">
              Dog waste management
            </h1>
            <p className="subheader !text-[var(--textcolor-white)]">
              Dog waste stinkin' up your community? Get a free pet waste
              management plan for your HOA, apartment complex, or commercial
              property.
            </p>
            <Button className="bg-[var(--brandcolor-red)] hover:bg-black md:w-fit !text-white self-start relative z-10" asChild>
              <Link href="/search">Get Free Quote</Link>
            </Button>
          </div>
          <div className="rounded-[var(--radius)] flex-1 overflow-hidden aspect-[653/500] relative min-h-[400px] md:min-h-0">
            <img
              src="/images/avif/real-life-images/two-emps-poop-pole.avif"
              alt="doodie duty employees"
              className="absolute inset-0 rounded-[var(--radius)] w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
