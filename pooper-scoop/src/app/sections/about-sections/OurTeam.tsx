import React from "react";
import ImageGridSection from "@/components/ImageGridSection";

const teamImages = [
  {
    src: "/images/avif/real-life-images/grid-about/employees-disney.avif",
    alt: "Team at Disney",
    className: "col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/avif/real-life-images/grid-about/employees-shade.avif",
    alt: "Team in the shade",
    className: "col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/avif/real-life-images/girl-holding-dog.avif",
    alt: "Team member with dog",
    className: "col-span-3 max-md:col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/avif/real-life-images/grid-about/two-employees.avif",
    alt: "Two team members",
    className: "col-span-6 max-md:col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/avif/real-life-images/grid-about/employees-forest.avif",
    alt: "Team in the forest",
    className: "col-span-3 max-md:col-span-12 max-sm:col-span-12",
  },
];

export default function OurTeam() {
  return (
    <ImageGridSection
      images={teamImages}
      showSectionHeader={true}
      sectionHeader={{
        subheader: "true professionals",
        heading: "our team",
        description: (
          <>
            Our team at Doodie Duty<sup>®</sup> is committed to providing all
            customers with a 5-star white glove experience.
          </>
        ),
      }}
      className="STORY"
    />
  );
}
