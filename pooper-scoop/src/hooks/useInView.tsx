"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface UseInViewOptions extends IntersectionObserverInit {
  onInView?: (entry: IntersectionObserverEntry) => void;
  logToConsole?: boolean;
  triggerOnce?: boolean; // New option to trigger only once
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
) {
  const {
    threshold = 0,
    root = null,
    rootMargin = "0px",
    onInView,
    logToConsole = false,
    triggerOnce = false,
  } = options;

  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const onInViewRef = useRef(onInView);
  const hasTriggeredRef = useRef(false);

  // Keep the callback ref up to date
  useEffect(() => {
    onInViewRef.current = onInView;
  }, [onInView]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Only trigger if we haven't triggered before (when triggerOnce is true)
            if (triggerOnce && hasTriggeredRef.current) {
              return;
            }

            setIsInView(true);
            hasTriggeredRef.current = true;

            if (logToConsole) {
              console.log("Element in view:", entry.target);
            }
            onInViewRef.current?.(entry);

            // Disconnect observer if triggerOnce is true
            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!triggerOnce) {
            // Only update state when scrolling out if triggerOnce is false
            setIsInView(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, logToConsole, triggerOnce]);

  return { ref, isInView };
}
