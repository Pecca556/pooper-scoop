import React from "react";
import ReusableWhyChoose from "@/components/RWhyChoose";

// Example SVG icon - replace with your actual icons
const ExampleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 75.438 76.923"
  >
    <g
      id="Example_Icon"
      data-name="Example Icon"
      transform="translate(1.5 1.5)"
    >
      <path
        d="M28.016,65.456A32.593,32.593,0,1,1,65.88,33.281"
        transform="translate(-0.7 -0.7)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);

const whyUsItems = [
  {
    icon: <ExampleIcon />,
    title: "Professional Service",
    description:
      "Our experienced team delivers top-quality service every time.",
  },
  {
    icon: <ExampleIcon />,
    title: "Reliable & Trustworthy",
    description:
      "Count on us to show up on time and get the job done right.",
  },
  {
    icon: <ExampleIcon />,
    title: "Customer Focused",
    description:
      "Your satisfaction is our #1 priority, guaranteed.",
  },
];

export default function WhyUs() {
  return (
    <ReusableWhyChoose
      sectionClassName="WHYUS"
      eyebrowText="Why choose us"
      heading="Why Us?"
      subheading="We're committed to providing the best service in Orange County."
      items={whyUsItems}
      showGrassFooter={false}
    />
  );
}
