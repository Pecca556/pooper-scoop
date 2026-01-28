"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";

import locations from "@/app/data/locations.json";

export default function FreeQuoteInput() {
    const [zip, setZip] = useState("");
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (/^\d{5}$/.test(zip)) {
            const isServiced = locations.some((location: { zipCodes: string[] }) => location.zipCodes.includes(zip));

            if (isServiced) {
                router.push(`/signup?zip=${zip}`);
            } else {
                router.push(`/search?zip=${zip}`);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className='w-full md:w-fit md:block md:gap-0 gap-y-2 flex flex-col'>
            <Input
                className='h-12 bg-white p'
                placeholder="Zip Code"
                type="tel"
                inputMode="numeric"
                maxLength={5}
                value={zip}
                onChange={e => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 5) {
                        setZip(value);
                    }
                }}
            />
            <Button type="submit" className="md:absolute md:-translate-x-10 z-2 bg-[var(--brandcolor-red)] hover:bg-black" aria-label="Search">
                <p className="button-text !text-white">Free Quote</p>
            </Button>
        </form>
    );
}