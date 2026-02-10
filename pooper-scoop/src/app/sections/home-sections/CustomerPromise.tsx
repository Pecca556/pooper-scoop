"use client";

import React, { useCallback } from "react";
import PromiseCard from "../../../components/RPromiseCard";
import { useInView } from "@/hooks/useInView";

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

const ReliableServiceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 72.386 67.2"
  >
    <g
      id="Reliable_Hassle-Free_Service"
      data-name="Reliable, Hassle-Free Service"
      transform="translate(1.5 1.5)"
    >
      <path
        id="Path_766"
        data-name="Path 766"
        d="M68.712,38.634a32.111,32.111,0,1,1-18.6-31.113"
        transform="translate(-4.57 -4.57)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_769"
        data-name="Path 769"
        d="M52.258,59.268c-20.843,3.316-19.981-51.277.01-12.374,8-6.389,24.146-37.623,34.2-33.674C99.251,18.232,65.833,55.9,52.258,59.268Z"
        transform="translate(-18.445 -4.045)"
        fill="#cdcdcd"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_768"
        data-name="Path 768"
        d="M52.258,59.268c-20.843,3.316-19.981-51.277.01-12.374,8-6.389,24.146-37.623,34.2-33.674C99.251,18.232,65.833,55.9,52.258,59.268Z"
        transform="translate(-22.508 -8.877)"
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

const MarkedVehiclesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 68.07 73.419"
  >
    <g
      id="Satisfaction_Guaranteed"
      data-name="Satisfaction Guaranteed"
      transform="translate(1.5 1.448)"
    >
      <path
        id="Path_782"
        data-name="Path 782"
        d="M30.957,50.47,17.08,29.126,31.274,19.12,45.152,40.465l-9.5.952Z"
        transform="translate(17.719 20)"
        fill="#fff"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_783"
        data-name="Path 783"
        d="M15.864,50.47,29.742,29.126,15.526,19.12,1.67,40.465l9.477.952Z"
        transform="translate(0.53 20)"
        fill="#fff"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_784"
        data-name="Path 784"
        d="M65.7,31.772c0-3.321-4.019-5.965-4.971-8.948-1.015-3.11.635-7.594-1.248-10.175-1.9-2.6-6.685-2.412-9.287-4.315-2.581-1.883-3.871-6.494-6.981-7.51C40.231-.15,36.486,2.812,33.165,2.812S26.1-.15,23.117.823c-3.11,1.015-4.4,5.627-6.981,7.51-2.6,1.9-7.383,1.713-9.287,4.315C4.967,15.229,6.617,19.714,5.6,22.824,4.628,25.807.63,28.451.63,31.772s4,5.965,4.971,8.969C6.617,43.83,4.967,48.315,6.849,50.9c1.9,2.6,6.685,2.412,9.287,4.315,2.581,1.883,3.871,6.494,6.981,7.51,2.983.973,6.727-1.967,10.048-1.967s7.065,2.94,10.048,1.967c3.11-1.015,4.4-5.627,6.981-7.51,2.6-1.9,7.383-1.713,9.287-4.315,1.883-2.581.233-7.065,1.248-10.154C61.681,37.738,65.7,35.093,65.7,31.772Z"
        transform="translate(-0.63 -0.627)"
        fill="#fff"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_785"
        data-name="Path 785"
        d="M10.811,34.347a5.487,5.487,0,0,1,3.575-3.575c.338-.148.7-.233,1.037-.36a7.925,7.925,0,0,0,3.787-2.56l.888-1.015a8.478,8.478,0,0,1,3.258-2.263,5.173,5.173,0,0,1,5.712,1.015,7.617,7.617,0,0,1,2.75,5.9,10.927,10.927,0,0,0,.508,3.787c.254.677.529,1.333.8,1.988a5.515,5.515,0,0,1,.381,3.808,6.333,6.333,0,0,1-3.427,4.167,4.582,4.582,0,0,1-2.39.317,4.909,4.909,0,0,1-2.9-1.375c-.465-.423-.973-.846-1.46-1.248a6.206,6.206,0,0,0-4.167-1.5,9.611,9.611,0,0,0-2.687.3,4.712,4.712,0,0,1-5.923-3.744,7.075,7.075,0,0,1,.254-3.639ZM45.99,32.57a5.6,5.6,0,0,1-1.269,1.862,9.476,9.476,0,0,1-3.089,2.158,3.04,3.04,0,0,1-4-1.375,3.722,3.722,0,0,1-.021-4.062A9.01,9.01,0,0,1,40.786,27.9a6.537,6.537,0,0,1,1.819-.677,2.991,2.991,0,0,1,3.6,2.5,5.689,5.689,0,0,1-.212,2.856ZM27.65,15.626a4.7,4.7,0,0,1-.846,2.01,3.99,3.99,0,0,1-1.4,1.248,3.784,3.784,0,0,1-5.415-2.433,7.914,7.914,0,0,1,1.375-6.664,3.5,3.5,0,0,1,3.681-1.375A3.284,3.284,0,0,1,27.8,10.7a5.829,5.829,0,0,1,.233,2.263C27.967,13.849,27.8,14.738,27.65,15.626ZM32.9,16.853a8.381,8.381,0,0,1,2.665-3.765,3.934,3.934,0,0,1,4.7-.063,3.319,3.319,0,0,1,1.354,2.517,5.019,5.019,0,0,1-.529,2.919,10.634,10.634,0,0,1-2.327,3.385,3.472,3.472,0,0,1-4.167.677,3.809,3.809,0,0,1-2.073-3.956c.085-.571.254-1.142.381-1.713ZM8.822,18.186a16.614,16.614,0,0,1,.825-1.5,3.383,3.383,0,0,1,5.521-.317,4.612,4.612,0,0,1,.888,1.4,8.891,8.891,0,0,1,.444,5.775c-.867,2.9-2.919,3.66-5.331,3a3.135,3.135,0,0,1-2.031-1.9A8.777,8.777,0,0,1,8.822,18.186Z"
        transform="translate(7.995 7.967)"
        fill="#cccacb"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_786"
        data-name="Path 786"
        d="M9.711,31.936a5.518,5.518,0,0,1,3.6-3.575c.338-.127.677-.233,1.037-.338a8.182,8.182,0,0,0,3.787-2.56,10.175,10.175,0,0,1,.888-1.015,8.6,8.6,0,0,1,3.258-2.285,5.225,5.225,0,0,1,5.712,1.015,7.7,7.7,0,0,1,2.729,5.9,11.046,11.046,0,0,0,.508,3.808c.254.677.529,1.312.825,1.967a5.654,5.654,0,0,1,.36,3.808,6.239,6.239,0,0,1-3.427,4.167,4.167,4.167,0,0,1-2.39.317,4.728,4.728,0,0,1-2.9-1.375c-.465-.423-.973-.825-1.46-1.248a6.385,6.385,0,0,0-4.167-1.5,9.63,9.63,0,0,0-2.687.317,4.724,4.724,0,0,1-5.923-3.765,7.327,7.327,0,0,1,.254-3.639ZM44.89,30.159a5.122,5.122,0,0,1-1.269,1.862A9.318,9.318,0,0,1,40.532,34.2a3.04,3.04,0,0,1-4-1.375,3.722,3.722,0,0,1-.021-4.062,8.691,8.691,0,0,1,3.173-3.258,6.6,6.6,0,0,1,1.819-.7,3,3,0,0,1,3.6,2.517A5.607,5.607,0,0,1,44.89,30.159ZM26.55,13.215a4.677,4.677,0,0,1-.846,2.031,4.054,4.054,0,0,1-1.375,1.227,3.789,3.789,0,0,1-5.437-2.412A7.914,7.914,0,0,1,20.267,7.4a3.5,3.5,0,0,1,3.681-1.375,3.316,3.316,0,0,1,2.771,2.263,6.3,6.3,0,0,1,.212,2.263C26.867,11.459,26.7,12.326,26.55,13.215ZM31.8,14.463A8.381,8.381,0,0,1,34.461,10.7a3.967,3.967,0,0,1,4.7-.085,3.319,3.319,0,0,1,1.354,2.517,5.058,5.058,0,0,1-.529,2.94,10.873,10.873,0,0,1-2.327,3.385,3.5,3.5,0,0,1-4.167.677,3.822,3.822,0,0,1-2.073-3.977c.085-.571.254-1.121.381-1.692ZM7.722,15.775a14.092,14.092,0,0,1,.825-1.481,3.384,3.384,0,0,1,5.521-.338,5.194,5.194,0,0,1,.888,1.4,8.776,8.776,0,0,1,.444,5.775c-.867,2.919-2.919,3.66-5.331,3.025a3.29,3.29,0,0,1-2.031-1.9,8.826,8.826,0,0,1-.317-6.473Z"
        transform="translate(6.768 5.301)"
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
    </g>
  </svg>
);

const HealthSafetyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 76.435 83.975"
  >
    <g
      id="Health_and_Safety_Commitment"
      data-name="Health and Safety Commitment"
      transform="translate(1.5 1.5)"
    >
      <path
        id="Path_1027"
        data-name="Path 1027"
        d="M69.669,62.82a39.611,39.611,0,0,1,5.522,4.76c.273.234-.944,1.328-1.973,2.67-2.409-1.511-5.567,1.5-2.871,3.913-1.126,1.354-.41.163-2,2.077-1.576-1.608-4.773.638-2.741,3.282-1,1.459-1.81,2.025-3.308,4.291-2.005,0-1.465-4.682-3.523,2.826-.9,3.269-2.761,5.47-6.817,7.963-.632-1.634-4.519-2.409-5.43,1.061-1.354.02-2.312.384-3.92.339-.4-3.425-4.669-2.663-5.463-.645-1.3-.345-5.541-1.107-5.3-1.647a30.583,30.583,0,0,0,.892-3.959c1.524-1.087,4.271-1.009,4.59,1.712,1.615.046,2.565-.326,3.92-.339.912-3.471,4.8-2.7,5.43-1.061,4.063-2.5,5.919-4.7,6.817-7.97,2.064-7.5,1.524-2.819,3.529-2.819,1.5-2.272,2.3-2.839,3.308-4.291-2.032-2.65,1.159-4.9,2.735-3.288,1.6-1.908.879-.716,2.005-2.077-2.7-2.4.462-5.424,2.871-3.913,1.022-1.335,2.246-2.429,1.973-2.663-.078-.072-.163-.143-.247-.221Z"
        transform="translate(-12.324 -23.133)"
        fill="#cccacb"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_1028"
        data-name="Path 1028"
        d="M28.736,28.45A32.045,32.045,0,1,0,65.961,60.069"
        transform="translate(-1.87 -11.143)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_1029"
        data-name="Path 1029"
        d="M61.982,49.673C59.065,52,49.3,63.582,48.139,66.941c-1.035,3.008-2.077,7.169-5.066,8.471a18.749,18.749,0,0,1-4.017,1.517c-2.344.69-9.259.072-11.694-.41-1.029-.208-2.754.306-2.149-2.657.951-4.656,18.622-4.623,8.816-19.124-1.8-2.67-6.909-6.948-3.458-8.907,1.576-.9,6.029-2.442,7.423-.417.332.482,1.9,5.925,2.6,6.909.651.918-.742-4.063.931-5.242,3.926-2.767.762-7.013,4.017-8.51,1.745-.8,10.789,7.716,13.96,9.22a15.6,15.6,0,0,1,2.474,1.882Z"
        transform="translate(-9.97 -14.656)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_1030"
        data-name="Path 1030"
        d="M61.507,55.65c2.448,1.517,4.187,3.588,5.58,4.8.273.234-.951,1.328-1.973,2.663-2.409-1.511-5.574,1.511-2.871,3.92-1.126,1.354-.41.163-2.005,2.071-1.576-1.608-4.766.638-2.735,3.288-1.009,1.459-1.81,2.019-3.308,4.291-2.005,0-1.465-4.682-3.529,2.819-.9,3.275-2.754,5.476-6.817,7.97-.632-1.634-4.519-2.409-5.43,1.061-1.354.013-2.305.384-3.92.339-.4-3.431-4.662-2.663-5.463-.645-1.289-.352-5.535-1.113-5.3-1.654.547-1.237.736-4.057,1.146-4.643"
        transform="translate(-9.495 -20.632)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_1031"
        data-name="Path 1031"
        d="M46.443,68c-1.947.547-3.718,1.843-5.743,1.843"
        transform="translate(-15.417 -24.941)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_1032"
        data-name="Path 1032"
        d="M47.281,76.876c-1.836,0-3.777-.176-5.821-.176"
        transform="translate(-15.682 -27.976)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_1033"
        data-name="Path 1033"
        d="M95.294,33.25h0a9.373,9.373,0,0,1-9.344,9.344h0a9.373,9.373,0,0,1,9.344,9.344h0a9.369,9.369,0,0,1,9.344-9.344h0A9.369,9.369,0,0,1,95.294,33.25Z"
        transform="translate(-31.203 -12.817)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_1034"
        data-name="Path 1034"
        d="M79.689,11.95h0a6.631,6.631,0,0,1-6.609,6.609h0a6.631,6.631,0,0,1,6.609,6.609h0a6.625,6.625,0,0,1,6.6-6.609h0a6.625,6.625,0,0,1-6.6-6.609Z"
        transform="translate(-26.713 -5.387)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      ></path>
      <path
        id="Path_1035"
        data-name="Path 1035"
        d="M49.454,1.87h0a9.373,9.373,0,0,1-9.344,9.344h0a9.368,9.368,0,0,1,9.344,9.337h0a9.362,9.362,0,0,1,9.337-9.337h0A9.368,9.368,0,0,1,49.454,1.87Z"
        transform="translate(-15.211 -1.87)"
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

const promiseItems = [
  {
    icon: <ReliableServiceIcon />,
    title: "Vetted Employees",
    description:
      "Our team undergoes rigorous background checks and driving screenings to ensure trustworthiness and reliability.",
  },
  {
    icon: <MarkedVehiclesIcon />,
    title: "Marked Vehicles",
    description:
      "Our vehicles are clearly marked so you always know who is arriving at your property.",
  },
  {
    icon: <HealthSafetyIcon />,
    title: "Satisfaction Guaranteed",
    description:
      "We stand by our work. If you're not 100% satisfied, we'll come back and re-clean for free.",
  },
];

export default function CustomerPromise() {
  // Memoize the callback to prevent unnecessary re-renders
  const handleInView = useCallback((entry: IntersectionObserverEntry) => {
    console.log("CustomerPromise section entered view!", {
      isIntersecting: entry.isIntersecting,
      intersectionRatio: entry.intersectionRatio,
    });
  }, []);

  // Add IntersectionObserver with console logging
  const { ref, isInView } = useInView({
    logToConsole: true,
    threshold: 0.3, // Trigger when 30% of the section is visible
    onInView: handleInView,
    triggerOnce: true, // Only log once when first entering view
  });

  return (
    <div ref={ref} className="CUSTOMERPROMISE mx-auto w-full">
      <div className="">
        <div className="px-[20px]">
          <div className="mx-auto flex max-w-[var(--view-width)] flex-col gap-[20px]">
            {/* Header with fade-in animation */}
            <div 
              className={`mx-auto flex max-w-[var(--max-width-headerpart)] flex-col gap-[15px] text-center transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="p !text-[var(--brandcolor-lightgreen)] uppercase">
                OUR CUSTOMER PROMISE
              </p>
              <h2 className="h2">
                Doodie Duty Customer Promise
              </h2>
            </div>
            {/* Cards grid with staggered fade-in animation */}
            <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-3">
              {promiseItems.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isInView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isInView ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <PromiseCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
