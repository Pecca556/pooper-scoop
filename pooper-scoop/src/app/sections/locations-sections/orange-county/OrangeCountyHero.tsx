import ReusableFreeQuote from "@/components/functionality/ReusableFreeQuote";
import React from "react";

export default function OrangeCountyHero() {
  return (
    <div className="mx-auto w-full relative z-1">

      <div className="flex max-w-[var(--view-width)] flex-col w-full text-center mx-auto gap-[40px]">
        <img
          src="/images/avif/real-life-images/orange-county.avif"
          alt=""
          className="rounded-[var(--radius)] h-80 w-full object-cover"
        />
        <div className="flex flex-col gap-y-4 mx-auto max-w-250">
          <h2 className="h2">North Idaho’s Top Pet Waste Specialist</h2>
          <p className="p">
            Your furry friend brings joy, but their poop? Not so much. Enter
            Doodie Duty, North Idaho’s premier pet waste service! We
            tackle the dirty work, letting you enjoy a poop-free yard.
            Reliable, eco-friendly, and hassle-free – we’ve got your backyard!
          </p>
        </div>

        <img
          src="/images/avif/mascottes/oc-hero.avif"
          alt="Promo"
          className="w-50 h-auto absolute bottom-[-100px] max-md:hidden"
        />

        <div className="flex w-full md:-translate-x-10 justify-center mx-auto">
          <ReusableFreeQuote />
        </div>

      </div>
    </div>

  );
}
