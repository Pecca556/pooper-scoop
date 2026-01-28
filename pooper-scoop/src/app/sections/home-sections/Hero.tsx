import React from 'react';
import ReusableHero from '@/components/ReusableHero';
import BackgroundHero from '@/components/BackgroundHero';

export default function Hero() {
    return (
        <div className='relative w-full'>
            <ReusableHero
                topText="DOODIE DUTY"
                mainTitle="Pet Waste <br />Service"
                subtitle="Get your free quote today to get started!"
                showQuoteInput={true}
            />
        </div>
    );
}