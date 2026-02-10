import React from "react";
import ImageGridSection from "@/components/ImageGridSection";

const teamImages = [
  {
    src: "/images/real-life-images/grid-about/employees-santamonica.png",
    alt: "Team at Disney",
    className: "col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/real-life-images/grid-about/employees-shade.png",
    alt: "Team in the shade",
    className: "col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/real-life-images/grid-about/employee-dog.png",
    alt: "Team member with dog",
    className: "col-span-3 max-md:col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/real-life-images/grid-about/two-employees.png",
    alt: "Two team members",
    className: "col-span-6 max-md:col-span-6 max-sm:col-span-12",
  },
  {
    src: "/images/real-life-images/grid-about/employees-forest.png",
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
            Our team at Pooper Scoopers<sup>®</sup> is committed to providing all
            customers with a 5-star white glove experience.
          </>
        ),
      }}
      className="STORY"
    />
  );
}
