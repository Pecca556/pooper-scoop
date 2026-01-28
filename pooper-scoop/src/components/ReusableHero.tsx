import React from 'react';
import FreeQuoteInput from "@/components/functionality/ReusableFreeQuote"

interface ReusableHeroProps {
    topText?: string;
    mainTitle: string;
    subtitle?: string;
    imageSrc?: string;
    imageAlt?: string;
    showQuoteInput?: boolean;
}

export default function ReusableHero({
    topText,
    mainTitle,
    subtitle,
    imageSrc,
    imageAlt = "",
    showQuoteInput = true
}: ReusableHeroProps) {
    return (
        <div className="max-w-[var(--view-width)] mx-auto w-full relative z-1 flex items-center justify-center">
            <div className='flex flex-row max-md:flex-col gap-5 mx-auto w-full justify-center items-center'>
                <div className="flex flex-1 flex-col gap-4 !text-start max-md:w-full">
                    {topText && <h1 className="h5 !font-normal !text-white">{topText}</h1>}
                    <h1 className="h1" dangerouslySetInnerHTML={{ __html: mainTitle }} />
                    {subtitle && <p className='h5 !font-normal !text-white'>{subtitle}</p>}

                    {showQuoteInput && <FreeQuoteInput />}
                </div>
                {imageSrc && (
                    <div className="rounded-[var(--radius)] flex-1 overflow-hidden aspect-[653/500] relative min-h-[400px] max-md:w-full">
                    <img
                      src={imageSrc}
                      alt={imageAlt}
                      className="absolute inset-0 rounded-[var(--radius)] w-full h-full object-cover"
                    />
                  </div>
                )}
            </div>
        </div>
    );
}