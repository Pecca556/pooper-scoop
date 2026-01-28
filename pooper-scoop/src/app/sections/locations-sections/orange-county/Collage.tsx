import React from "react";
import ImageGridSection from "@/components/ImageGridSection";

const collageImages = [
  {
    src: "/images/avif/real-life-images/females-OC.avif",
    alt: "Orange County",
    className: "col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/avif/real-life-images/grid-OC/landmark-oc.avif",
    alt: "Orange County Landmark",
    className: "col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/avif/real-life-images/grid-OC/doggies-sign.avif",
    alt: "Dogs with sign",
    className: "col-span-3 max-md:col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/avif/real-life-images/grid-OC/employees-disney.avif",
    alt: "Team at Disney",
    className: "col-span-6 max-md:col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/avif/real-life-images/grid-OC/employees-pier.avif",
    alt: "Team at the pier",
    className: "col-span-3 max-md:col-span-12 max-sm:col-span-12",
  },
];

export default function Collage() {
  return (
    <ImageGridSection
      images={collageImages}
      showSectionHeader={false}
      className="customer-promise"
    />
  );
}
