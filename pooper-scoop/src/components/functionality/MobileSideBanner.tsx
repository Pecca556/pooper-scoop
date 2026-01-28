"use client";

import { Button } from "@/components/ui/button";
import ReusableFreeQuoteDialog from "./ReusableFreeQuoteDialog";
import { useState, useEffect } from "react";

export default function MobileSideBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const SCROLL_THRESHOLD = 800;

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsVisible(scrollPosition > SCROLL_THRESHOLD);
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-28 -right-34 z-50 ${isVisible ? "opacity-100 transition-opacity duration-500" : "opacity-0 pointer-events-none"
                }`}
        >
            <ReusableFreeQuoteDialog>
                <Button type="submit" className="md:absolute py-3 px-8 h-50 items-start md:-translate-x-10 z-2 bg-[var(--brandcolor-red)] hover:bg-black -rotate-90" aria-label="Search">
                    <p className="button-text !text-xl !text-white">Free Quote</p>
                </Button>
            </ReusableFreeQuoteDialog>
        </div>
    );
}