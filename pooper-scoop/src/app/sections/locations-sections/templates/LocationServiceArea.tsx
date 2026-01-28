"use client"
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface LocationServiceAreaProps {
    name: string;
    description: string;
    cities: string[];
    zipCodes: string[];
    mapEmbedUrl?: string;
}

export default function LocationServiceArea({
    name,
    description,
    cities,
    zipCodes,
    mapEmbedUrl,
}: LocationServiceAreaProps) {
    const [showAll, setShowAll] = useState(false);
    const displayedCities = showAll ? cities : cities.slice(0, 6);
    return (
        <div className="customer-promise mx-auto w-full max-w-[var(--view-width)]">
            <div className="">
                <div className="px-[20px]">
                    <div className="flex flex-row gap-[25px] max-lg:flex-col">
                        <div className="flex flex-col gap-[20px] flex-1">
                            <div className="flex flex-col gap-[12px]">
                                <p className="subheader uppercase">OUR LOCATIONS</p>
                                <h2 className="h2">Doodie Duty {name} Service Areas</h2>
                                <p className="p mt-2">{description}</p>
                                <p className="p">
                                    Major cities serviced by our dog poop service {name} location include:
                                </p>
                                <div className="grid grid-cols-3 gap-y-2 gap-x-4 max-md:grid-cols-2">
                                    {displayedCities.map((city) => (
                                        <div key={city} className="flex flex-row gap-2 items-center">
                                            <img
                                                src="/images/home-page/pin.svg"
                                                alt="pin"
                                                className="w-10 h-auto flex-shrink-0"
                                            />
                                            <span className="location-text-two ">{city}</span>
                                        </div>
                                    ))}
                                 </div>
                                 {cities.length > 6 && (
                                    <Button
                                        onClick={() => setShowAll(!showAll)}
                                        variant="outline"
                                        className="w-fit border-2 border-black hover:bg-gray-100 mt-4"
                                    >
                                        {showAll ? "Show Less" : "Show More"}
                                    </Button>
                                )}
                            </div>
                        </div>

                        {mapEmbedUrl && (
                            <div className="flex flex-1 h-[440px] rounded-[var(--radius)] overflow-hidden bg-gray-100 border-5 border-[var(--brandcolor-darkgreen)]">
                                <iframe
                                    src={mapEmbedUrl}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
