"use client"
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import locations from "@/app/data/locations.json";
import MapComponent from "@/components/MapComponent";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FreeQuoteCard = ({ negerName = "" }) => {
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
    <div
      className={`flex flex-col gap-1 rounded-[var(--radius)] bg-white px-[40px] pt-[44px] pb-[32px] ${negerName}`}
    >
      <div className="flex h-[56px] items-center">
        <h4 className="h4">Get Free Quote</h4>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="w-full">
          <Input
            className="h-12 w-full"
            id="zip-1"
            name="zip"
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
        </div>
        <Button
          type="submit"
          className="!w-full bg-[var(--brandcolor-red)] !text-white hover:bg-black"
        >
          Free Quote
        </Button>
      </form>
    </div>
  );
};

export default function AllLocationsHero() {
  return (
    <div className="customer-promise mx-auto w-full relative z-1">
      <div className="mx-auto max-w-[var(--view-width)]">
        <div className="flex flex-col items-start gap-[70px] max-md:gap-6">
          <h2 className="h2 !text-[var(--textcolor-white)]">Locations</h2>
          <div className="flex w-full flex-row gap-5 max-lg:flex-col">
            <div className="flex min-w-[30%] flex-col gap-[50px]">
              <FreeQuoteCard negerName=" max-lg:hidden " />
              <div className="items-left flex flex-col gap-1 rounded-[var(--radius)] bg-white px-[40px] pt-[24px] pb-[32px]">
                <div className="disclaimer-text h-[48px] text-left items-center flex">
                  LOCATIONS
                </div>
                <div className="flex flex-col gap-8">
                  {locations.map((location) => (
                    <div key={location.slug} className="flex flex-col gap-4">
                      <h5 className="h5">{location.name}</h5>
                      <div className="flex flex-row gap-4">
                        {" "}
                        <img
                          src="/images/all-locations/solar_phone-outline.svg"
                          alt=""
                        />{" "}
                        <div className="number-text">{location.phone}</div>
                      </div>
                      <Link href={`/locations/${location.slug}`}>
                        <Button variant="outline" className="border-2 border-black w-full">View Location</Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex h-[816px] max-md:h-[486px] lg:flex-1 rounded-[var(--radius)] overflow-hidden relative">
              <div className="flex flex-1 h-[600px] rounded-[var(--radius)] overflow-hidden bg-gray-100 border-5 border-[var(--brandcolor-darkgreen)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d424146.1029666258!2d-117.9189742!3d33.7174708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd273113c9091b%3A0x12b875a0fa251a0!2sOrange%20County%2C%20CA!5e0!3m2!1sen!2sus!4v1629485782954!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <FreeQuoteCard negerName=" lg:hidden " />
          </div>
        </div>
      </div>
    </div>
  );
}
