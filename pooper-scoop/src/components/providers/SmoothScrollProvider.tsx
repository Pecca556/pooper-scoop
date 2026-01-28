"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import Lenis from "lenis";

// Create the context
const SmoothScrollerContext = createContext<Lenis | null>(null);

// Custom hook to use the smooth scroller
export function useSmoothScroller() {
  return useContext(SmoothScrollerContext);
}

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisRef, setLenisRef] = useState<Lenis | null>(null);
  const [raf, setRaf] = useState<number | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const scroller = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      syncTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Request Animation Frame function
    function raf(time: number) {
      scroller.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);
    setRaf(rafId);
    setLenisRef(scroller);

    // Cleanup on unmount
    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
      if (lenisRef) {
        lenisRef.destroy();
      }
    };
  }, []);

  return (
    <SmoothScrollerContext.Provider value={lenisRef}>
      {children}
    </SmoothScrollerContext.Provider>
  );
}
