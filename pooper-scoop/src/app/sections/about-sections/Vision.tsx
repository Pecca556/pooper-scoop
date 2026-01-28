import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import FreeQuoteInput from "../../../components/functionality/ReusableFreeQuote";
import VisionMissionBlock from "../../../components/VisionMissionBlock";
// Ensure the correct import path for VisionMissionBlock

export default function Vision() {
  return (
    <div className="mx-auto w-full px-4">
      <div className="mx-auto grid max-w-[var(--view-width)] grid-cols-1 gap-[25px] gap-y-[60px] px-[20px] max-lg:gap-y-[20px] lg:grid-cols-2">
        <VisionMissionBlock
          subheader="Make a Difference"
          title="Our Vision"
          text="At Doodie Duty, our vision is to revolutionize the pet waste removal industry by setting the highest standards of service, cleanliness, and customer satisfaction. We strive to create cleaner, healthier environments for pets and their owners, enhancing the quality of life in the communities we serve. By continuously innovating and improving our processes, we aim to lead the industry in reliability, professionalism, and eco-friendly practices."
          imageAlt={"aaaa"}
          textOrderClass="lg:order-1"
          imageOrderClass="lg:order-2"
          imageUrl="/images/avif/real-life-images/employee-in-the-garden.avif"
        />
        <VisionMissionBlock
          subheader="The Future"
          title="Our Mission"
          text="Our mission is to lead the pack in making the pet waste removal industry a mainstream service. Many dog owners across the country still don’t know our service even exists, and we are committed to changing that. By raising awareness and showcasing the benefits of professional dog waste removal services, we aim to make Doodie Duty a household name for pet owners everywhere."
          imageAlt={"aaaaa"}
          textOrderClass="lg:order-4"
          imageOrderClass="lg:order-3"
          imageUrl="/images/avif/real-life-images/garden-work.avif"
        />
      </div>
    </div>
  );
}
