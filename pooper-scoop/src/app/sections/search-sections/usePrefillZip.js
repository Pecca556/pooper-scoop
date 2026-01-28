"use client";
import { useEffect } from "react";

export function usePrefillZip(setZipCode, setIsReadOnly) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const zip = url.searchParams.get("zip");
      if (zip && /^\d{5}$/.test(zip)) {
        setZipCode(zip);
        if (setIsReadOnly) {
          setIsReadOnly(true);
        }
      }
    }
  }, [setZipCode, setIsReadOnly]);
}
