import React from "react";
import PromiseCard from "@/components/RPromiseCard";

const VettedEmployeesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 75.438 76.923"
  >
    <g
      id="Vetted_Employees"
      data-name="Vetted Employees"
      transform="translate(1.5 1.5)"
    >
      <path
        id="Path_802"
        data-name="Path 802"
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
      <path
        id="Path_768"
        data-name="Path 768"
        d="M32.382,53.62c-12.7,2.014-12.191-31.256,0-7.545C37.259,42.188,47.1,23.141,53.214,25.562,61.006,28.619,40.651,51.57,32.382,53.62Z"
        transform="translate(17.436 20.204)"
        fill="#fff"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_803"
        data-name="Path 803"
        d="M27.7,6.52c6.855,0,12.421,7.315,12.421,16.326,0,7.633-4.347,11.308-9.223,14.806-3.41,2.438-4.241,1.961-7.7-.724-3.64-2.845-7.933-7.085-7.933-14.082C15.26,13.835,20.826,6.52,27.7,6.52Z"
        transform="translate(10.466 9.763)"
        fill="#cccacb"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_804"
        data-name="Path 804"
        d="M25.351,4.62c6.855,0,12.421,7.315,12.421,16.326,0,7.615-4.347,11.308-9.205,14.806-3.428,2.438-4.258,1.961-7.7-.724-3.657-2.845-7.933-7.085-7.933-14.082C12.93,11.935,18.5,4.62,25.351,4.62Z"
        transform="translate(7.679 8.306)"
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_806"
        data-name="Path 806"
        d="M11.653,29.159c8.294-4.193,27.4-4.746,36.224,0"
        transform="translate(3.016 24.194)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_808"
        data-name="Path 808"
        d="M27.859,5.309c10.354-4.594,6.961,5.707,15.867,6.7-4.859,5.23-18.287,9.364-22.616,2.279-3.657-2.244-8.234.689-8.057,7.474-1.5-11.432,2.933-22.6,14.806-16.45Z"
        transform="translate(7.557 7.494)"
        fill="#fff"
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

const promiseItems = [
  {
    icon: <img src="/images/svg/checmark-circle.svg" alt="" />,
    title: "Reliable, Hassle-Free Service",
    description:
      "Our reliable, hassle-free SoCal dog waste removal service ensures timely, efficient visits, leaving your yard pristine. Enjoy more time with your dog—let us handle the mess!",
  },
  {
    icon: <img src="/images/svg/paw-emblem.svg" alt="" />,
    title: "Satisfaction Guaranteed",
    description:
      "At Doodie Duty, we guarantee your satisfaction with our SoCal dog waste removal service. If you’re not happy, we’ll make it right—your happiness is our priority.",
  },
  {
    icon: <img src="/images/svg/clean-shoe.svg" alt="" />,
    title: "Health and Safety Commitment",
    description:
      "Doodie Duty prioritizes health and safety by using sanitary practices and eco-friendly disposal methods, ensuring a clean, safe environment for pets and families.",
  },
];

export default function WhyHire() {
  return (
    <div className="CUSTOMERPROMISE mx-auto w-full">
      <div className="">
        <div className="px-[20px] ">
          <div className="mx-auto flex max-w-[var(--view-width)] flex-col gap-[20px]">
            <div className="mx-auto flex max-w-[var(--max-width-headerpart)] flex-col gap-[15px] text-center">
              <h2 className="h2">
                Why hire a dog waste removal company
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
              {promiseItems.map((item, index) => (
                <PromiseCard
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
