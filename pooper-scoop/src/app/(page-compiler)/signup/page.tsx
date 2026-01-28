import React from "react";
import SignForm from "./SignForm";
import BackgroundHero from "@/components/BackgroundHero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Link from "next/link";

export default function SignupPage() {
    return (
        <div className="">
            <Banner />
            <div className="flex flex-col gap-[100px] max-sm:gap-[76px]">

                <BackgroundHero >
                   
                    <div className="w-full z-10 flex justify-center py-6">
                         {/* logo */}
                
                    <Link href="/" className="block logo-hover">
                        <img src="/images/avif/logo.avif" alt="Logo" className="w-30 h-auto " />
                    </Link>
                
                    </div>
                    <SignForm />
                </BackgroundHero>
                <Footer />
            </div>
        </div>
    );
}
