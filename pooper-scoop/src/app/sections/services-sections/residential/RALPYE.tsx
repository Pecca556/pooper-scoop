import React from "react";
import VisionMissionBlock from "@/components/VisionMissionBlock";

import { GrassBG } from "../../../constants";

export default function RALPYE() {
  return (
    <div className="customer-promise mx-auto w-full ">
      <div className="">
        <div className="px-[20px]">
          
          <div className={`bg-custom-gradient w-full rounded-[var(--radius)]`}>
            <div className={GrassBG}>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] max-w-[1280px] mx-auto px-[20px] py-[50px] pb-[120px]">
                <VisionMissionBlock
                  subheader="Love Life"
                  title="Relax, and Leave the Scooping to Us"
                  text="Instead of spending your valuable free time picking up after your dog, you can enjoy more quality moments with your pet and family. Our pet waste removal service ensures your yard stays clean and hygienic without any hassle on your part. Whether you have a busy schedule, mobility issues, or simply prefer to avoid the unpleasant task of cleaning up pet waste, a professional pet waste service offers a reliable solution."
                  imageUrl="/images/avif/real-life-images/girl-dog-whitebg.avif"
                  imageAlt="Family enjoying time with their dog"
                  textOrderClass="order-1"
                  imageOrderClass="order-2"
                />
                <VisionMissionBlock
                  subheader="Importance of Scooping"
                  title="Protect Your Environment"
                  text="Pet waste is not just an unsightly nuisance; it is considered hazardous waste due to the harmful bacteria and parasites it can harbor. Left unattended, pet waste can contaminate soil and even pollute local waterways, posing serious health risks to both humans and animals. By regularly removing pet waste, a professional service helps prevent the spread of diseases and ensures a cleaner, safer environment for your family pets, and local community."
                  imageUrl="/images/avif/real-life-images/waterfall.avif"
                  imageAlt="Clean and safe yard environment"
                  textOrderClass="order-3 lg:order-4"
                  imageOrderClass="order-4 lg:order-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
