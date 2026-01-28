"use client";

import React, { useState } from "react";
import { ImageCarouselDialog } from "@/components/ImageCarouselDialog";

interface ImageItem {
  src: string;
  alt: string;
  className: string;
}

interface SectionHeader {
  subheader?: string;
  heading?: string;
  description?: React.ReactNode;
}

interface ImageGridSectionProps {
  images: ImageItem[];
  sectionHeader?: SectionHeader;
  showSectionHeader?: boolean;
  className?: string;
  upperRowMaxHeight?: string;
  bottomRowMaxHeight?: string;
}

function ImageGrid({
  images,
  onImageClick,
  upperRowMaxHeight = "lg:max-h-[446px]",
  bottomRowMaxHeight = "lg:max-h-[478px]",
}: {
  images: ImageItem[];
  onImageClick: (index: number) => void;
  upperRowMaxHeight?: string;
  bottomRowMaxHeight?: string;
}) {
  const upperRow = images.slice(0, 2);
  const bottomRow = images.slice(2);

  return (
    <div>
      <div className="grid max-w-[var(--view-width)] grid-cols-12 gap-4">
        {upperRow.map((img, idx) => (
          <div key={idx} className={img.className}>
            <img
              src={img.src}
              alt={img.alt}
              className={`h-full w-full cursor-pointer rounded-[30px] object-cover transition-opacity hover:opacity-90 ${upperRowMaxHeight}`}
              onClick={() => onImageClick(idx)}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 grid max-w-[var(--view-width)] grid-cols-12 gap-4">
        {bottomRow.map((img, idx) => (
          <div key={idx} className={img.className}>
            <img
              src={img.src}
              alt={img.alt}
              className={`h-full w-full cursor-pointer rounded-[30px] object-cover transition-opacity hover:opacity-90 ${bottomRowMaxHeight}`}
              onClick={() => onImageClick(idx + 2)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ImageGridSection({
  images,
  sectionHeader,
  showSectionHeader = true,
  className = "",
  upperRowMaxHeight,
  bottomRowMaxHeight,
}: ImageGridSectionProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setDialogOpen(true);
  };

  return (
    <div className={`mx-auto w-full ${className}`}>
      <div className="">
        <div className="px-[20px]">
          <div className="flex flex-col items-center gap-[20px]">
            {showSectionHeader && sectionHeader && (
              <div className="flex flex-col gap-[15px]">
                {sectionHeader.subheader && (
                  <p className="subheader text-center uppercase">
                    {sectionHeader.subheader}
                  </p>
                )}
                {sectionHeader.heading && (
                  <h2 className="h2 text-center capitalize">
                    {sectionHeader.heading}
                  </h2>
                )}
                {sectionHeader.description && (
                  <p className="p mb-[14.4px] max-w-[600px] text-center">
                    {sectionHeader.description}
                  </p>
                )}
              </div>
            )}
            <ImageGrid
              images={images}
              onImageClick={handleImageClick}
              upperRowMaxHeight={upperRowMaxHeight}
              bottomRowMaxHeight={bottomRowMaxHeight}
            />
          </div>
        </div>
      </div>

      <ImageCarouselDialog
        images={images.map((img) => ({ src: img.src, alt: img.alt }))}
        initialIndex={selectedImageIndex}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
      />
    </div>
  );
}
