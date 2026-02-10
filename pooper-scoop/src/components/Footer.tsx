"use client";

import Link from "next/link";
import locations from "@/app/data/locations.json";

interface FooterProps {
  showMascotteImage?: boolean;
}

export default function Footer({ showMascotteImage = false }: FooterProps) {
  return (
    <div className="w-full ">
      <div className="relative bg-black">
        <div
          className="absolute left-0 top-0 h-full w-full opacity-20"
          style={{
            backgroundImage: 'url(/images/home-page/pattern.svg)',
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            maskImage: 'linear-gradient(to top, white 0%, rgba(255, 255, 255, 0.2) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, white 0%, rgba(255, 255, 255, 0) 100%)'
          }}
        />
        {showMascotteImage && (
          <img
            src="/images/avif/mascottes/all-locations-hero.avif"
            alt="dog holding map"
            className="absolute h-90 -translate-y-90 left-8 max-lg:hidden"
          />
        )}
        <div className="absolute -translate-y-28 left-0 w-full h-30 bg-[url('/images/home-page/grass-black.svg')] bg-repeat-x bg-bottom [background-size:auto_100%] "></div>
        <div className="relative flex flex-col !text-white max-w-[var(--view-width)] mx-auto px-[20px] pt-10 (max-md:pt-0">
          {/* Footer Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">

            {/* Get in Touch Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">Get in touch</h3>
              <div className="flex flex-col gap-1 text-sm p !text-white">
                <p>Doodie Duty<sup>©</sup></p>
                {/* will be replaced with PO box address <p>16378 Scotch Pine St</p> */}
                <p>Fountain Valley, CA  92708</p>
                <p>United States</p>
                <p>949-285-3854</p>
                <p>info@doodiedutyservice.com</p>
                <div className="mt-3">
                  <p className="font-semibold">Office Hours:</p>
                  <p>Everyday 8am - 8pm</p>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">Services</h3>
              <div className="flex flex-col gap-2 text-sm p !text-white">
                <Link href="/services/residential" className="hover:text-[var(--brandcolor-lightgreen)] transition-colors">
                  Residential
                </Link>
                <Link href="/services/commercial" className="hover:text-[var(--brandcolor-lightgreen)] transition-colors">
                  Commercial
                </Link>
              </div>
            </div>

            {/* Locations Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">Locations</h3>
              <div className="flex flex-col gap-2 text-sm p !text-white">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="hover:text-[var(--brandcolor-lightgreen)] transition-colors"
                  >
                    {location.name}
                  </Link>
                ))}
                <Link href="/locations" className="hover:text-[var(--brandcolor-lightgreen)] transition-colors">
                  All Locations
                </Link>
              </div>
            </div>

            {/* About Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">About</h3>
              <div className="flex flex-col gap-2 text-sm p !text-white">
                <Link href="/about" className="hover:text-[var(--brandcolor-lightgreen)] transition-colors">
                  About
                </Link>
                <Link href="/faq" className="hover:text-[var(--brandcolor-lightgreen)] transition-colors">
                  FAQ
                </Link>
              </div>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-bold text-lg mb-2">Resources</h3>
              <div className="flex flex-col gap-2 text-sm p !text-white">
                <Link href="/blog" className="hover:text-[var(--brandcolor-lightgreen)] transition-colors">
                  Blog
                </Link>
                <Link href="/client-login" className="hover:text-[var(--brandcolor-lightgreen)] transition-colors">
                  Client Login
                </Link>
                <Link href="/refer-a-friend" className="hover:text-[var(--brandcolor-lightgreen)] transition-colors">
                  Refer A Friend
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="w-full py-4 mb-8 max-sm:mb-0 p !text-white text-center">
            © 2025 Doodie Duty
          </div>
        </div>
      </div>
    </div>
  );
}
