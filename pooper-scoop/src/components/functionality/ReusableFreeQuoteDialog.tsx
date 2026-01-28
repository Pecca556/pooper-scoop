"use client"

import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import locations from "@/app/data/locations.json";

interface ReusableFreeQuoteDialogProps {
    children?: React.ReactNode;
    triggerClassName?: string;
    triggerText?: string;
}

export default function ReusableFreeQuoteDialog({
    children,
    triggerClassName = "",
    triggerText = "Free Quote",
}: ReusableFreeQuoteDialogProps) {
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
        <Dialog>
            <DialogTrigger className={triggerClassName} asChild>
                {children || <Button className="bg-[var(--brandcolor-red)] hover:bg-black !text-white">{triggerText}</Button>}
            </DialogTrigger>
            <DialogContent showCloseButton={true} className="gap-y-4 py-10 border-none bg-[url('/images/home-page/grass-black.svg')] bg-repeat-x bg-bottom [background-size:300_auto] sm:max-w-[425px] items-center flex flex-col [image-rendering:crisp]">
                <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-y-4">
                    <DialogHeader>
                        <DialogTitle className="button-text !text-2xl">Enter Your ZIP Code</DialogTitle>
                    </DialogHeader>
                    <div className="w-full">
                        <Input 
                            className="h-12 w-full" 
                            id={`zip-${Math.random()}`} 
                            name="zip" 
                            type="tel"
                            inputMode="numeric"
                            maxLength={5}
                            placeholder="Zip Code" 
                            value={zip} 
                            onChange={e => {
                                const value = e.target.value.replace(/\D/g, '');
                                if (value.length <= 5) {
                                    setZip(value);
                                }
                            }} 
                        />
                    </div>
                    <DialogFooter className="w-full">
                        <Button type="submit" className="!w-full bg-[var(--brandcolor-red)] hover:bg-black !text-white">Free Quote</Button>
                    </DialogFooter>
                    <div className="flex">
                        <img className="scale-x-[-1] w-25 absolute left-10 bottom-0" src="/images/avif/home-page/dog.avif" alt="" />
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}
