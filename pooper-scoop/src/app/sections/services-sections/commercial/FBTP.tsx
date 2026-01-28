import React from "react";
import Vision from "../../about-sections/Vision";

export default function FBTP() {
  const sectionOneData = {
    subheader: "curb appeal",
    title: "Financial Benefits",
    description:
      "By ensuring a clean and waste-free environment, we help increase the appeal of your property, attracting more tenants and visitors, which can lead to higher occupancy rates and increased revenue. Regular dog waste removal reduces the risk of damage to landscaping and property infrastructure, saving you money on repairs and maintenance.",
    imageUrl:
      "/images/avif/real-life-images/poop-stand-2.avif",
    imageAlt: "Clean commercial property",
  };

  const sectionTwoData = {
    subheader: "Licensed & Insured",
    title: "True Professionals",
    description:
      "Each team member is thoroughly background-checked, ensuring trustworthiness and peace of mind for our clients. We take pride in our licensed and insured staff, who are trained to uphold the highest standards of cleanliness and efficiency. With our team on the job, you can be confident that your property will be maintained with the utmost care and professionalism.",
    imageUrl:
      "https://swoopscoop.com/wp-content/uploads/2024/09/Financial-Benefits.webp",
    imageAlt: "Customized service plan",
  };

  return (
    <div className="FBTP-page mx-auto w-full">
      <div className="">
        <Vision />
      </div>
    </div>
  );
}
