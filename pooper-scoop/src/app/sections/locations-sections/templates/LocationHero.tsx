import ReusableFreeQuote from "@/components/functionality/ReusableFreeQuote";
import React from "react";

interface LocationHeroProps {
    name: string;
}

export default function LocationHero({ name }: LocationHeroProps) {
    return (
        <div className="mx-auto w-full relative z-1">
            <div className="flex max-w-[var(--view-width)] flex-col w-full text-center mx-auto gap-[40px]">
                <img
                    src="/images/avif/real-life-images/females-OC.avif"
                    alt=""
                    className="w-full object-cover aspect-[1257/400] md:aspect-[1257/314.25] rounded-[var(--radius)]"
                />
                <div className="flex flex-col gap-y-4 mx-auto max-w-250 !text-white">
                    <h2 className="h2 !text-white">{name} Top Pet Waste Specialist</h2>
                    <p className="p !text-white">
                        Your furry friend brings joy, but their poop? Not so much. Enter
                        Doodie Duty, {name} premier pet waste service! We
                        tackle the dirty work, letting you enjoy a poop-free yard.
                        Reliable, eco-friendly, and hassle-free – we’ve got your backyard!
                    </p>
                </div>

                <img
                    src="/images/avif/mascottes/umbrella-shovel.avif"
                    alt="Promo"
                    className="w-50 h-auto absolute bottom-[-80px] max-md:hidden"
                />

                <div className="flex w-full md:-translate-x-10 justify-center mx-auto">
                    <ReusableFreeQuote />
                </div>
            </div>
        </div>
    );
}
