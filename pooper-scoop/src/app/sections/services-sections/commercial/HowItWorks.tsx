import React from "react";
import HowItWorksSection from "../../../../components/HowItWorksSection";

const steps = [
  {
    id: 1,
    title: "Schedule Free Consultation",
    imageSrc:
      "https://swoopscoop.com/wp-content/uploads/2024/09/1.-Sign-up-for-Services.svg",
    imageAlt: "phone",
    description:
      "The first step to eliminating your community dog waste issue is to fill out the form on this page and schedule a free consultation. Whether you’re a property manager, or the president of your local HOA, our team at Doodie Duty can help make your community a clean, safe, and enjoyable place to spend time.",
  },
  {
    id: 2,
    title: "Site Visits & Fact Finding",
    imageSrc:
      "/images/svg/svg-image-1.svg",
    imageAlt: "document",
    description:
      "Depending on the size of your community, our team will walk your commercial property to evaluate problem areas, listen to your concerns, and make recommendations to mitigate, or completely eliminate the pet waste issue. If you have a small property, or know exactly what areas have issues we are able to provide you with an accurate quote within having to visit your property, but we are always happy to take the time to perform a site visit.",
  },
  {
    id: 3,
    title: "Formal Recommendations",
    imageSrc:
      "/images/svg/Formal Recommendations.svg",
    imageAlt: "van",
    description:
      "Once we have gathered all the information about your community and performed a site visit, our team of professional pet waste specialists will put together a complementary pet waste management plan for your property. These plans will typically include recommendations for dog waste station placements, sqft of common area space that needs to be manually cleaned, and what service frequency your property needs to reduce your dog waste problem.",
  },
  {
    id: 4,
    title: "Starting Services",
    imageSrc:
      "/images/svg/Starting Services.svg",
    imageAlt: "community",
    description:
      "Our pet waste management proposals typically have several options designed to fit various budgets. Once you select an option that works for your community you will simply sign off on the proposal and our team will get your property scheduled for service. If your property requires the installation of dog waste stations, our team will call in a locate to ensure we are not digging into any utility lines, and place the order for your supplies.",
  },
  {
    id: 5,
    title: "Ongoing Service",
    imageSrc:
      "/images/svg/Ongoing Service.svg",
    imageAlt: "community",
    description:
      "Our common area cleaning service not only takes care of the dog waste problem, we also pick up any garbage on your property that fits into our scooping buckets. If you have dog waste station maintenance on schedule, our team will remove the dog waste, replace the bags, notify you of any vandalism or damaged units, and clean 10ft around each station on every visit.",
  },
];

export default function HowItWorks() {
  return (
    <HowItWorksSection
      subheader="commercial process"
      title="How it Works?"
      description="Make dog waste issues a thing of the past with our commercial pet waste management services at Doody Duty"
      steps={steps}
    />
  );
}
