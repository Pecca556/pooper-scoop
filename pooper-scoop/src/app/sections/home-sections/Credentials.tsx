"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link";
import FreeQuoteInput from '../../../components/functionality/ReusableFreeQuote';
import DisclaimerBg from '@/components/disclaimer-bg';
import { useInView } from "@/hooks/useInView";

const CREDENTIALS_DATA = [
  { value: 8938, label: "Satisfied Customers" },
  { value: 17280, label: "Happy Dogs" },
  { value: 243465, label: "Completed Yards" }
];

const SatisfiedCustomersIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="71"
    height="71"
    viewBox="0 0 71 71"
  >
    <g
      id="Satisfied_Customers"
      data-name="Satisfied Customers"
      transform="translate(0.76 1.562)"
    >
      <path
        id="Path_972"
        data-name="Path 972"
        d="M61.933,40.721c1.4-6.753-4.642-19.09-8.812-24.9-5.933-8.271-19.945-10.487-30-5.462C10.755,16.553,7.6,35.207,7,36.009c-.838,1.169,15.844,15.268,15.774,6.98-.122-14.972-.611-22.37,3.926-20.52,22.44,9.161,14.186-7.643,14.623-7.364,6.718,4.135,9.2,18.13,2.024,25.668C44.327,44.716,59.019,41.715,61.933,40.721Z"
        transform="translate(4.643 4.987)"
        fill="#cccacb"
        fillRule="evenodd"
      />
      <circle
        id="Ellipse_78"
        data-name="Ellipse 78"
        cx="34"
        cy="34"
        r="34"
        transform="translate(0.74 -0.061)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
      />
      <path
        id="Path_973"
        data-name="Path 973"
        d="M28.487,9.48c7.137,0,12.93,7.625,12.93,17.013,0,7.939-4.519,11.778-9.6,15.408-3.542,2.565-4.415,2.059-8.009-.733-3.8-2.966-8.271-7.4-8.271-14.675C15.54,17.105,21.333,9.48,28.487,9.48Z"
        transform="translate(11.025 6.32)"
        fill="#cccacb"
        fillRule="evenodd"
      />
      <path
        id="Path_974"
        data-name="Path 974"
        d="M26.01,7.48c7.154,0,12.947,7.608,12.947,17,0,7.939-4.519,11.778-9.6,15.425-3.56,2.548-4.432,2.042-8.027-.75-3.8-2.949-8.254-7.381-8.254-14.675,0-9.388,5.793-17,12.93-17Z"
        transform="translate(9.192 4.83)"
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_975"
        data-name="Path 975"
        d="M13.952,38.448A1.666,1.666,0,1,1,11.6,36.093a21.458,21.458,0,0,1,14.919-6.212A24.008,24.008,0,0,1,42.2,35.6a1.661,1.661,0,0,1,.209,2.338,1.623,1.623,0,0,1-2.321.209A20.855,20.855,0,0,0,26.551,33.2,18.063,18.063,0,0,0,13.952,38.448Z"
        transform="translate(7.727 21.516)"
        fill="#cccacb"
      />
      <path
        id="Path_976"
        data-name="Path 976"
        d="M11.03,36.175c8.986-9,22.789-8.288,31.985.715"
        transform="translate(7.665 21.434)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_977"
        data-name="Path 977"
        d="M59.527,39.1c1.4-6.753-4.624-19.09-8.812-24.9C44.782,5.929,30.788,3.713,20.737,8.739,8.348,14.933,5.189,33.6,4.614,34.389c-.855,1.169,15.844,15.268,15.774,6.98-.14-14.954-.628-22.37,3.926-20.5,22.44,9.161,14.169-7.643,14.623-7.381,6.718,4.153,9.178,18.147,2.024,25.668.96,3.944,15.669.96,18.566-.052Z"
        transform="translate(2.862 3.781)"
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_978"
        data-name="Path 978"
        d="M17.56,21.72c2.129,6.386,5.741,5.828,9.161.7Z"
        transform="translate(12.53 15.438)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_979"
        data-name="Path 979"
        d="M22.18,19.258c.017-1.344,3-2.74,3.944.3"
        transform="translate(15.971 12.473)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_980"
        data-name="Path 980"
        d="M16.16,18.815c.017-1.326,3-2.74,3.944.314"
        transform="translate(11.487 12.149)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

const HappyDogsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="71"
    height="71"
    viewBox="0 0 71.056 71.056"
  >
    <g
      id="Happy_Dogs_pets"
      data-name="Happy Dogs/pets"
      transform="translate(0.32 0.32)"
    >
      <path
        id="Path_965"
        data-name="Path 965"
        d="M11.68,24.829a2.3,2.3,0,0,1,3.247,3.247q-.395.395-.658.691a18.554,18.554,0,0,0-4.761,9.368,10.3,10.3,0,0,0,2.962,9.16h0c.176.176.318.318.428.417a17.907,17.907,0,0,0,8.172,3.971,12.06,12.06,0,0,0,5.463,0,4.8,4.8,0,0,0,3.137-2.337,7.523,7.523,0,0,0,.713-3.894,2.289,2.289,0,0,1,4.574-.186,12.082,12.082,0,0,1-1.24,6.231,9.286,9.286,0,0,1-5.989,4.6,16.635,16.635,0,0,1-7.58.077A22.669,22.669,0,0,1,9.816,51.1q-.362-.329-.592-.559v-.011h0A14.725,14.725,0,0,1,4.967,37.455a23.252,23.252,0,0,1,5.9-11.781c.307-.329.57-.6.812-.845Z"
        transform="translate(0.349 2.229)"
        fill="#cccacb"
      />
      <path
        id="Path_966"
        data-name="Path 966"
        d="M60.727,31.36a2.291,2.291,0,1,1,4.179,1.876l-.34.757c-1.426,3.2-2.271,5.068-6.439,6.823a26.22,26.22,0,0,1-3.17,1.152,19.041,19.041,0,0,1-1.174,2.545,7.127,7.127,0,0,1-4.6,3.324,14.733,14.733,0,0,1-6.417.208c-3.927-.8-6.746,1.9-8.161,4.168a9.248,9.248,0,0,0-.845,1.689,3.732,3.732,0,0,1,.1.5,2.374,2.374,0,0,1-4.651.768,4.543,4.543,0,0,1,.23-2.786,13.35,13.35,0,0,1,1.272-2.6c2.161-3.455,6.549-7.536,12.966-6.231a9.86,9.86,0,0,0,4.289-.132,2.858,2.858,0,0,0,1.777-1.064,9.778,9.778,0,0,0,1.064-2.523,2.273,2.273,0,0,1,.856-1.514,2.464,2.464,0,0,1,1.4-.625,14.612,14.612,0,0,0,3.28-1.1c2.512-1.064,3.082-2.337,4.059-4.53.219-.494-.011.011.318-.713Z"
        transform="translate(2.706 2.795)"
        fill="#cccacb"
      />
      <circle
        id="Ellipse_77"
        data-name="Ellipse 77"
        cx="34.028"
        cy="34.028"
        r="34.028"
        transform="translate(1.18 1.18)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
      />
      <path
        id="Path_967"
        data-name="Path 967"
        d="M34.08,23.98c-1.459,1.371-.845,3.05,1.327,3.225C36.241,25.4,35.715,23.98,34.08,23.98Z"
        transform="translate(3.113 2.211)"
        fillRule="evenodd"
      />
      <path
        id="Path_968"
        data-name="Path 968"
        d="M40.758,21.619c-.614,1.722-.483,2.6,1.591,2.918C43.5,22.771,42.843,21.092,40.758,21.619Z"
        transform="translate(3.807 1.972)"
        fillRule="evenodd"
      />
      <path
        id="Path_969"
        data-name="Path 969"
        d="M12.851,24.235c-5.935,5.935-9.5,16.06-1.942,22.949,6.549,5.989,21.808,8.326,21.314-4.048-.176-4.421-6.264-11.913-5.134-15.654,2.315-7.657-5.935-3.642-8.282-3.521-2.852.143-2.161-.713-1.755-2C20.069,12.3,35.13,11.236,43.072,15c6.626,3.126,9.061,9.6,19,10.6,3.225.329,2.3,4.827,1.382,6.867-1.426,3.17-1.942,4.882-5.573,6.417C51.4,41.611,55.3,38.166,52.4,43.607c-1.36,2.545-5.9,2.9-8.534,2.358-8.655-1.755-12.9,8.885-11.661,8.787"
        transform="translate(0.527 1.144)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_970"
        data-name="Path 970"
        d="M36.42,32.24c-2.863,7.339,4.136,8.589,7.284,5.814,4.629-4.081-2.315-.932-7.086-5.485"
        transform="translate(3.352 3.012)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_971"
        data-name="Path 971"
        d="M58.828,25.06c-2.962.351-8.129,1.064-8.348,4.684,4.6,1.986,7.284,1.371,9.236-3.181Z"
        transform="translate(4.781 2.316)"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

const CompletedYardsIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="71"
    height="71"
    viewBox="0 0 77.874 78.375"
  >
    <g
      id="Completed_Yards"
      data-name="Completed Yards"
      transform="translate(0.18 0.18)"
    >
      <path
        id="Path_981"
        data-name="Path 981"
        d="M56.512,54.914c-.059.857,6.617,2.107,6.676-.335a152.048,152.048,0,0,0-.581-22.441c-.1-1.1-1.654-2.806-2.718-5.879C58.393,22,57.91,29.2,56.276,31.5c-.128.167.4,21.043.236,23.416Zm-42.726,0c-.059.857,6.607,2.107,6.676-.335a152.048,152.048,0,0,0-.581-22.441c-.1-1.1-1.654-2.806-2.728-5.879C15.667,22,15.174,29.2,13.54,31.5,13.422,31.665,13.953,52.541,13.786,54.914Zm14.239,0c-.059.857,6.617,2.107,6.676-.335a152.049,152.049,0,0,0-.581-22.441c-.1-1.1-1.654-2.806-2.718-5.879C29.905,22,29.423,29.2,27.788,31.5c-.128.167.4,21.043.236,23.416Zm14.249,0c-.059.857,6.607,2.107,6.676-.335a153.411,153.411,0,0,0-.581-22.441c-.1-1.1-1.654-2.806-2.728-5.879C44.154,22,43.662,29.2,42.027,31.5,41.909,31.665,42.441,52.541,42.273,54.914Z"
        transform="translate(-0.187 -0.361)"
        fill="#cccacb"
        fillRule="evenodd"
      />
      <path
        id="Path_982"
        data-name="Path 982"
        d="M29.955,69.176A34.152,34.152,0,1,1,69.628,35.469"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_768"
        data-name="Path 768"
        d="M53.118,77.3c-13.313,2.117-12.762-32.751.01-7.907,5.111-4.077,15.42-24.027,21.841-21.506C83.132,51.1,61.783,75.143,53.118,77.3Z"
        transform="translate(-0.643 -0.709)"
        fill="#fff"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <line
        id="Line_19"
        data-name="Line 19"
        x2="12.84"
        transform="translate(13.363 31.924)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
      />
      <line
        id="Line_20"
        data-name="Line 20"
        x2="12.732"
        transform="translate(13.599 43.376)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
      />
      <line
        id="Line_21"
        data-name="Line 21"
        x2="7.277"
        transform="translate(31.777 31.924)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
      />
      <line
        id="Line_22"
        data-name="Line 22"
        x2="7.287"
        transform="translate(31.905 43.376)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
      />
      <line
        id="Line_23"
        data-name="Line 23"
        x2="7.287"
        transform="translate(45.001 31.924)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
      />
      <line
        id="Line_24"
        data-name="Line 24"
        x2="9.394"
        transform="translate(45.129 43.376)"
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="22.926"
        strokeWidth="3"
      />
      <path
        id="Path_983"
        data-name="Path 983"
        d="M39.626,51.264c-.059.857,6.617,2.107,6.676-.335a152.048,152.048,0,0,0-.581-22.441c-.1-1.1-1.654-2.806-2.728-5.879-1.487-4.264-1.979,2.954-3.6,5.239C39.262,28.015,39.793,48.891,39.626,51.264Z"
        transform="translate(-0.582 -0.306)"
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_984"
        data-name="Path 984"
        d="M10.7,51.264c-.059.857,6.617,2.107,6.676-.335a152.049,152.049,0,0,0-.581-22.441c-.1-1.1-1.654-2.806-2.728-5.879-1.487-4.264-1.979,2.954-3.6,5.239-.128.167.4,21.043.236,23.416Z"
        transform="translate(-0.14 -0.306)"
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_985"
        data-name="Path 985"
        d="M54.1,51.264c-.059.857,6.607,2.107,6.676-.335a154.8,154.8,0,0,0-.581-22.441c-.108-1.1-1.654-2.806-2.728-5.879-1.487-4.264-1.979,2.954-3.614,5.239C53.732,28.015,54.263,48.891,54.1,51.264Z"
        transform="translate(-0.804 -0.306)"
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
      <path
        id="Path_986"
        data-name="Path 986"
        d="M25.166,51.264c-.059.857,6.607,2.107,6.676-.335a154.8,154.8,0,0,0-.581-22.441c-.108-1.1-1.654-2.806-2.728-5.879-1.487-4.264-1.979,2.954-3.614,5.239C24.8,28.015,25.333,48.891,25.166,51.264Z"
        transform="translate(-0.361 -0.306)"
        fill="#fff"
        stroke="#000"
        strokeMiterlimit="22.926"
        strokeWidth="3"
        fillRule="evenodd"
      />
    </g>
  </svg>
);

export default function ReferAFriend() {
  const [counts, setCounts] = useState(CREDENTIALS_DATA.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Set up IntersectionObserver for fade-in animation on text section
  const { ref: textRef, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts(CREDENTIALS_DATA.map(item =>
        Math.floor(item.value * progress)
      ));

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(CREDENTIALS_DATA.map(item => item.value));
      }
    }, interval);
  };

  return (
    <div className="w-full">
      <div className="relative pt-[80px] pb-90">
        <DisclaimerBg />
        <div className="flex flex-col max-w-[var(--view-width)] mx-auto px-[20px] gap-[25px]">
          <div className="flex flex-col justify-center gap-y-12 items-center text-center gap-[10px] py-14 py-10 px-[50px] bg-[#F8F8F8] rounded-[var(--radius)]">
            <div>
              <p className="uppercase subheader">Our Credentials</p>
              <h2 className="h2">We've Scooped Poop for over 5000+ Clients and Counting!</h2>
            </div>

            <div ref={sectionRef} className="flex flex-col md:items-center gap-y-10 lg:flex-row justify-between w-full lg:px-20">
              {CREDENTIALS_DATA.map((item, index) => (
                <div key={index} className="flex flex-row gap-x-4">
                  {index === 0 ? (
                    <SatisfiedCustomersIcon />
                  ) : index === 1 ? (
                    <HappyDogsIcon />
                  ) : (
                    <CompletedYardsIcon />
                  )}
                  <div className="flex flex-col text-start gap-2">
                    <p className="p !text-5xl !font-semibold">
                      {counts[index].toLocaleString()}
                    </p>
                    <p className="disclaimer-text uppercase">
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text section with fade-in animation */}
          <div ref={textRef} className="flex flex-col gap-4 py-14 py-10 px-[50px] bg-[#F8F8F8]/90 rounded-[var(--radius)]">
            <h5 
              className={`h5 transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
            >
              Free Initial Cleanup with Regular Service!
            </h5>
            <div className="flex flex-col gap-4">
              <p 
                className={`p !text-sm transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
              >
                <b>Convenience:</b> One of the primary reasons to hire a pet waste removal service is the convenience it offers. Cleaning up after your pets can be a time-consuming and unpleasant task. A professional service takes care of this chore for you, saving you time and effort.
              </p>
              <p 
                className={`p !text-sm transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
              >
                <b>Health and Hygiene:</b> Pet waste can pose health risks to both humans and other pets. It can contain harmful bacteria and parasites that can cause illnesses. A pet waste removal service ensures thorough and regular cleaning, reducing the risk of contamination and maintaining a healthier environment for you and your family.
              </p>
              <p 
                className={`p !text-sm transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '450ms' : '0ms' }}
              >
                <b>Odor Control:</b> Accumulated pet waste can produce foul odors that are unpleasant for you and your neighbors. A professional service can remove waste regularly, keeping your outdoor spaces smelling fresh and clean.
              </p>
              <p 
                className={`p !text-sm transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '600ms' : '0ms' }}
              >
                <b>Yard Preservation:</b> Over time, pet waste can damage your lawn and landscaping, leading to unsightly brown patches and an unhealthy outdoor environment. Regular removal by a pet waste service can help preserve the beauty and integrity of your outdoor spaces.
              </p>
              <p 
                className={`p !text-sm transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '750ms' : '0ms' }}
              >
                <b>Environmental Responsibility:</b> Proper disposal of pet waste is essential for environmental reasons. When waste is left untreated, it can contaminate soil and water sources. Many pet waste removal services dispose of waste in an environmentally responsible manner, ensuring that it doesn't harm the ecosystem.
              </p>
              <p 
                className={`p !text-sm transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '900ms' : '0ms' }}
              >
                In summary, hiring a pet waste removal service can save you time, maintain a cleaner and healthier environment, improve the aesthetics of your yard, and promote environmental responsibility. It's a convenient and beneficial solution for pet owners looking to ensure a clean and safe outdoor space.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
