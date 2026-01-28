"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import ReusableFreeQuoteDialog from "@/components/functionality/ReusableFreeQuoteDialog"
import locations from "@/app/data/locations.json";

const navColor = "!transition-colors !duration-200 hover:!bg-[var(--brandcolor-midgreen)] hover:!text-white";
const activeNavColor = "!bg-[var(--brandcolor-midgreen)] !text-white";
const activeNavColorMobile = "!text-[var(--brandcolor-midgreen)]"

export default function Navbar() {
    const pathname = usePathname()

    const isActive = (path: string) =>
        pathname === path || pathname?.startsWith(path + '/') ||
        (path === '/locations' && pathname?.startsWith('/locations/'));

    return (
        <div className="w-full relative z-10">

            <div className="flex flex-row mx-auto max-w-[var(--view-width)]  h-45 items-center justify-between w-full">
                {/* logo */}
                <div>
                    <Link draggable={false} href="/" className="block logo-hover">
                        <img draggable={false} src="/images/avif/logo.avif" alt="Logo" className="w-30 h-auto " />
                    </Link>
                </div>

                {/* nav */}
                <div className="bg-white hidden lg:block p-1 rounded-[var(--radius)]">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className="gap-x-2">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className={`${navColor} ${isActive('/services') ? activeNavColor : ''} p`}>Services</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[200px] gap-3">
                                        <Button variant="ghost" className={`${navColor} ${navigationMenuTriggerStyle()} ${isActive('/services/residential') ? activeNavColor : ''} w-full justify-start p`} asChild>
                                            <Link href="/services/residential">
                                                Residential
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" className={`${navColor} ${navigationMenuTriggerStyle()} ${isActive('/services/commercial') ? activeNavColor : ''} w-full justify-start p`} asChild>
                                            <Link href="/services/commercial">
                                                Commercial
                                            </Link>
                                        </Button>
                                        <Button variant="ghost" className={`${navColor} ${navigationMenuTriggerStyle()} ${isActive('/services/deodorizer') ? activeNavColor : ''} w-full justify-start p`} asChild>
                                            <Link href="/services/deodorizer">
                                                Deodorizer
                                            </Link>
                                        </Button>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/refer-a-friend" className={`${navColor} ${navigationMenuTriggerStyle()} ${isActive('/refer-a-friend') ? activeNavColor : ''} p`}>
                                    Refer a Friend
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/faq" className={`${navColor} ${navigationMenuTriggerStyle()} ${isActive('/faq') ? activeNavColor : ''} p`}>
                                    FAQ
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink href="/about" className={`${navColor} ${navigationMenuTriggerStyle()} ${isActive('/about') ? activeNavColor : ''} p`}>
                                    About
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/locations/all-locations"><NavigationMenuTrigger className={`${navColor} cursor-pointer ${isActive('/locations') ? activeNavColor : ''} p`}>Locations </NavigationMenuTrigger></Link>
                                <NavigationMenuContent>
                                    <div className="grid gap-3">
                                        {locations.map((location) => (
                                            <Button
                                                key={location.slug}
                                                variant="ghost"
                                                className={`${navColor} ${navigationMenuTriggerStyle()} ${isActive(`/locations/${location.slug}`) ? activeNavColor : ''} w-fit justify-start p`}
                                                asChild
                                            >
                                                <Link href={`/locations/${location.slug}`}>
                                                    {location.name}
                                                </Link>
                                            </Button>
                                        ))}
                                        <Button variant="ghost" className={`${navColor} ${navigationMenuTriggerStyle()} ${isActive('/locations/all-locations') ? activeNavColor : ''} w-full justify-start p`} asChild>
                                            <Link href="/locations/all-locations">
                                                All Locations
                                            </Link>
                                        </Button>

                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* quote button */}

                <ReusableFreeQuoteDialog triggerClassName="hidden lg:flex" />


                {/* mobile nav trigger */}
                <div className="block lg:hidden ml-auto">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className="w-12 h-12 bg-white">
                                <Menu className="h-12 w-12" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[250px] sm:w-[300px] px-4 flex flex-col">
                            <SheetHeader hidden>
                                <SheetTitle>Menu</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-4 mt-6 overflow-y-auto flex-1 pb-6 pt-10">
                                {/* Services */}
                                <Accordion type="single" collapsible>
                                    <AccordionItem value="services">
                                        <AccordionTrigger className="py-2"><h3 className="font-semibold text-lg">Services</h3></AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-col gap-2 pl-2">
                                                    <Button variant="ghost" className={`${isActive('/services/residential') ? activeNavColorMobile : ''} w-full justify-start p`} asChild>
                                                        <Link href="/services/residential">
                                                            Residential
                                                        </Link>
                                                    </Button>
                                                    <Button variant="ghost" className={`${isActive('/services/commercial') ? activeNavColorMobile : ''} w-full justify-start p`} asChild>
                                                        <Link href="/services/commercial">
                                                            Commercial
                                                        </Link>
                                                    </Button>
                                                    <Button variant="ghost" className={`${isActive('/services/deodorizer') ? activeNavColorMobile : ''} w-full justify-start p`} asChild>
                                                        <Link href="/services/deodorizer">
                                                            Deodorizer
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                {/* Locations */}

                                <Accordion type="single" collapsible>
                                    <AccordionItem value="locations">
                                        <AccordionTrigger className="py-2"><h3 className="font-semibold text-lg">Locations</h3></AccordionTrigger>
                                        <AccordionContent>
                                            <div className="flex flex-col gap-2">
                                                <div className="flex flex-col gap-2 pl-2">
                                                    {locations.map((location) => (
                                                        <Button
                                                            key={location.slug}
                                                            variant="ghost"
                                                            className={`${navColor} ${isActive(`/locations/${location.slug}`) ? activeNavColorMobile : ''} w-full justify-start p`}
                                                            asChild
                                                        >
                                                            <Link href={`/locations/${location.slug}`}>
                                                                {location.name}
                                                            </Link>
                                                        </Button>
                                                    ))}
                                                    <Button variant="ghost" className={`${isActive('/locations/all-locations') ? activeNavColorMobile : ''} w-full justify-start p`} asChild>
                                                        <Link href="/locations/all-locations">
                                                            All Locations
                                                        </Link>
                                                    </Button>
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>

                                {/* Refer a Friend */}
                                <Button variant="ghost" className={`pl-0 ${isActive('/refer-a-friend') ? activeNavColorMobile : ''} w-full justify-start p`} asChild>
                                    <Link href="/refer-a-friend">
                                        Refer a Friend
                                    </Link>
                                </Button>

                                {/* FAQ */}
                                <Button variant="ghost" className={`pl-0 ${isActive('/faq') ? activeNavColorMobile : ''} w-full justify-start p`} asChild>
                                    <Link href="/faq">
                                        FAQ
                                    </Link>
                                </Button>

                                {/* About */}
                                <Button variant="ghost" className={`pl-0 ${isActive('/about') ? activeNavColorMobile : ''} w-full justify-start p`} asChild>
                                    <Link href="/about">
                                        About
                                    </Link>
                                </Button>

                                {/* Free Quote Button */}
                                <ReusableFreeQuoteDialog triggerClassName="w-full">
                                    <Button className="bg-[var(--brandcolor-red)] hover:bg-black !text-white w-full">Free Quote</Button>
                                </ReusableFreeQuoteDialog>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}