"use client";

import { Lenis } from "lenis/react";

export default function SmoothScroll({
    children,
}: {
    children: React.ReactNode;
}) {
    // Temporarily disabled - uncomment to re-enable smooth scroll
    return <>{children}</>;
    
    // return (
    //     <Lenis root options={{ lerp: 0.15, duration: 1 }}>
    //         {children}
    //     </Lenis>
    // );
}
