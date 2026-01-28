"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";

interface ImageCarouselDialogProps {
  images: { src: string; alt: string }[];
  initialIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImageCarouselDialog({
  images,
  initialIndex,
  open,
  onOpenChange,
}: ImageCarouselDialogProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Update current index when dialog opens with a new initial index
  React.useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
    }
  }, [open, initialIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content
          className="fixed inset-0 z-50 flex items-center justify-center p-4 focus:outline-none"
          onKeyDown={handleKeyDown}
        >
          <VisuallyHidden.Root>
            <DialogTitle>Team Photo Gallery</DialogTitle>
          </VisuallyHidden.Root>

          {/* Image Counter - Top Left */}
          <div className="absolute left-4 top-4 z-10 rounded-md bg-black/50 px-3 py-1.5 text-sm font-medium text-white sm:left-6 sm:top-6 sm:px-4 sm:py-2">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Close Button - Top Right */}
          <DialogPrimitive.Close className="absolute right-4 top-4 z-10 rounded-md bg-black/50 p-2 text-white opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent sm:right-6 sm:top-6">
            <X className="h-5 w-5 sm:h-6 sm:w-6" />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>

          {/* Main Image Container */}
          <div className="relative flex h-full w-full max-w-7xl items-center justify-center">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 z-10 rounded-full bg-black/50 p-2 text-white opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent sm:left-4 sm:p-3"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>

            {/* Image */}
            <div className="flex h-full w-full items-center justify-center px-12 sm:px-20">
              <img
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 z-10 rounded-full bg-black/50 p-2 text-white opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent sm:right-4 sm:p-3"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
