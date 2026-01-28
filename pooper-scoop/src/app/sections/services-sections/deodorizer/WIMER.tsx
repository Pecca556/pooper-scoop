import React from "react";
import VisionMissionBlockVersionTwo from "@/components/VisionMissionBlockVersionTwo";

const sectionOne = {
  subheader: "Our Vision",
  title: "A Cleaner Tomorrow",
  text: "To create a cleaner and fresher environment for everyone.",
  imageUrl: "/images/avif/real-life-images/girl-park.avif",
  imageAlt: "Vision image",
};

const sectionTwo = {
  subheader: "Our Mission",
  title: "Delivering Excellence",
  text: "Delivering top-notch deodorizing services with eco-friendly solutions.",
  imageUrl: "/images/avif/real-life-images/waterfall.avif",
  imageAlt: "Mission image",
};

export default function WIMER() {
  return (
    <div className="customer-promise mx-auto w-full">
      <div className="">
        <div className="px-[20px] max-w-[var(--view-width)] mx-auto grid grid-cols-1 gap-y-[60px] max-lg:gap-y-[20px] lg:grid-cols-2 gap-x-5">
          <VisionMissionBlockVersionTwo
            {...sectionOne}
            textOrderClass="lg:order-1"
            imageOrderClass="lg:order-2"
          />
          <VisionMissionBlockVersionTwo
            {...sectionTwo}
            textOrderClass="lg:order-4"
            imageOrderClass="lg:order-3"
          />
        </div>
      </div>
    </div>
  );
}
