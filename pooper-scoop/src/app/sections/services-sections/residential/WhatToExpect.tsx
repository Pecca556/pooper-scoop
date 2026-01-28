"use client";

import React from "react";
import { useInView } from "@/hooks/useInView";

// Arrival Notification Icon
const ArrivalNotificationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 108.061 142.598">
    <g id="Arrival_Notification" data-name="Arrival Notification" transform="translate(-0.702 -0.581)">
      <path id="Path_1163" data-name="Path 1163" d="M43.11,15.84C24.44,9.7,27.2,33.88,41.27,28.74c8.59-3.13.83-22.91,6.09-1.07,2.36,9.79,25.66-16.16-5.47-22.43C14.24-.32,6.35,41.79,47.67,39.55" fill="none" stroke="#cccacb" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.926" strokeWidth="4.23" fillRule="evenodd" />
      <path id="Path_1164" data-name="Path 1164" d="M93.87,63.53c4.05-.67,7.62-3.89,8.09-10.7.96-14.1-23.82-14.98-20.95.82-5.23.83-10.06,5.22-10.67,10.55-.88,7.75,2.95,8.98,1.08,20.91-.51,3.29-2.01,6.23,1.25,8.66,3.18,2.38,8.2-.64,14-2.61.3-.11.99-.36,1.94-.73l-.87.35c-1.95.78-.18,1,.63,2.76.84,1.82,7.65,3.77,8.6-2.06.35-2.11-.64-4.13-2.7-3.31L90.96,89.5c8.59-3.52,25.56-11.43,13.77-13.9-4.45-.94-9.05-7.77-10.86-12.07Z" fill="#cccacb" fillRule="evenodd" />
      <path id="phone" d="M92.76,83.66c-6.95,18.96-11.42,34.2-16.77,53.68-1.1,4.03-4.53,6.53-7.15,5.67l-35.75-11.7c-2.62-.86-3.95-4.92-2.38-8.79,7.86-19.33,13.16-33.72,18.85-53.76,5-17.59,3.55-20.23,15.76-16.23l23,7.53c13.97,4.57,11.58,4.11,4.44,23.6Z" fill="#cccacb" fillRule="evenodd" />
      <path id="Path_1165" data-name="Path 1165" d="M48.79,76.98c-.89,8.79-1.81,15.69-1.11,24.53.14,1.82-2.23,3.26-4.82,3.14l-10.44-.5,3.4,9.59-16.77-9.99-8.82-.33c-2.59-.1-4.93-1.7-4.61-3.5,1.6-9.04.7-15.77.16-24.88-.47-8-2.52-8.98,9.58-8.52l22.78.87c13.84.52,11.56.57,10.65,9.59Z" fill="#cccacb" fillRule="evenodd" />
      <path id="phone_0" d="M83.54,75.05c-6.95,18.96-11.42,34.21-16.77,53.69-1.1,4.03-4.53,6.53-7.14,5.67L23.87,122.7c-2.62-.85-3.95-4.91-2.38-8.78C29.36,94.58,34.65,80.2,40.34,60.16c5-17.6,3.55-20.23,15.76-16.23l23,7.53c13.97,4.57,11.58,4.1,4.44,23.59Z" fill="#fff" stroke="#000" strokeLinecap="round" strokeMiterlimit="22.926" strokeWidth="3" fillRule="evenodd" />
      <path id="Path_1166" data-name="Path 1166" d="M40.67,118.43c.2,2.17,6.46,6.66,9.57,1.03C52.99,114.49,40,111.14,40.67,118.43Z" fillRule="evenodd" />
      <path id="Path_1167" data-name="Path 1167" d="M65.86,77.73c1.86-11.92-1.97-13.15-1.08-20.91,1.16-10.24,17.93-16.99,23.12-1.73,1.4,4.13,6.43,12.12,11.27,13.13,14.72,3.09-15.44,14.67-18.07,15.56-5.8,1.97-10.82,4.99-14,2.62C63.84,83.97,65.34,81.02,65.86,77.73Z" fill="#fff" stroke="#000" strokeMiterlimit="22.926" strokeWidth="3" fillRule="evenodd" />
      <path id="Path_1168" data-name="Path 1168" d="M88.7,80.8l-6.53,2.6c-1.94.78-.18,1.01.64,2.77.84,1.81,7.64,3.76,8.6-2.06C91.75,81.99,90.76,79.98,88.7,80.8Z" fill="#fff" stroke="#000" strokeMiterlimit="22.926" strokeWidth="3" fillRule="evenodd" />
      <path id="Path_1169" data-name="Path 1169" d="M76.39,49.64c3.15,8.42,18.99,10.68,20-4.19C97.42,30.43,69.18,30.42,76.39,49.64Z" fill="#d11d1d" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.926" strokeWidth="3" fillRule="evenodd" />
      <path id="Path_1170" data-name="Path 1170" d="M82.78,46.76a18.517,18.517,0,0,0,2.09-5.2c.02,0,3.24,7.24,3.55,7.66" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.926" strokeWidth="2.82" fillRule="evenodd" />
      <path id="Path_1171" data-name="Path 1171" d="M45.55,69.03c-.9,8.78-1.81,15.68-1.12,24.52.15,1.83-2.23,3.27-4.82,3.14l-10.43-.5,3.4,9.59L15.8,95.79l-8.81-.33c-2.59-.1-4.93-1.69-4.61-3.5,1.6-9.04.7-15.76.16-24.88-.47-8-2.52-8.98,9.58-8.52l22.78.87c13.84.52,11.56.57,10.65,9.6Z" fill="#fff" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.926" strokeWidth="3" fillRule="evenodd" />
      <path id="Path_1172" data-name="Path 1172" d="M35.77,74.5c-6.1-1.45-15.31-1.66-21.75-1.92" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="22.926" strokeWidth="3" fillRule="evenodd" />
      <path id="Path_1173" data-name="Path 1173" d="M34.37,83.65c-6.28-.53-14.13-.69-20.73-1.88" fill="none" stroke="#000" strokeLinecap="round" strokeMiterlimit="22.926" strokeWidth="3" fillRule="evenodd" />
      <path id="Path_1174" data-name="Path 1174" d="M39.69,13.22c-18.68-6.14-15.92,18.04-1.85,12.9,8.59-3.14.84-22.91,6.09-1.07C46.29,34.84,69.6,8.89,38.46,2.62,10.82-2.94,2.92,39.17,44.24,36.93" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="22.926" strokeWidth="3" fillRule="evenodd" />
    </g>
  </svg>
);



export default function WhatToExpect() {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="customer-promise mx-auto w-full">
      <div className="">
        <div className="px-[20px]">
          <div ref={ref} className="flex flex-col gap-[20px] max-w-[var(--view-width)] mx-auto">
            <div 
              className={`flex flex-col gap-4 mx-auto transition-all duration-700 ${
                isInView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="subheader uppercase text-center">professional pet waste specialists</p>
              <h2 className="h2 text-center">What to Expect On Your Service Day</h2>
              <p className="p text-center max-w-[var(--max-width-headerpart)] mx-auto">
                On service day, expect professional and timely service from our
                dedicated Doodie Duty team, ensuring a spotless yard every time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[50px]">
              <div
                className={`h-full transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '0ms' : '0ms' }}
              >
                <div className="group h-full hover:bg-white why-choose-card flex flex-col items-start p-[30px] lg:p-[60px] gap-4 transition-all duration-300 shadow-lg lg:shadow-none hover:shadow-lg rounded-[var(--radius)]">
                  <ArrivalNotificationIcon />
                  <h5 className={`h5 !text-left`}>Arrival Notification</h5>
                  <p className={`p !text-left`}>Our friendly Doodie Duty technicians will send you a 60-minute “on the way” text before your service begins. Customers are not required to be home at the time of service, but we do ask for easy access to cleaning areas and that no aggressive dogs be left out in the yard. This ensures a smooth and efficient service for everyone.</p>
                </div>
              </div>
              <div
                className={`h-full transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '150ms' : '0ms' }}
              >
                <div className="group h-full hover:bg-white why-choose-card flex flex-col items-start p-[30px] lg:p-[60px] gap-4 transition-all duration-300 shadow-lg lg:shadow-none hover:shadow-lg rounded-[var(--radius)]">
                  <img src="/images/svg/duster.svg" alt="" />
                  <h5 className={`h5 !text-left`}>Cleaning Your Yard</h5>
                  <p className={`p !text-left`}>Our friendly Doodie Duty technicians will send you a 60-minute “on the way” text before your service begins. Customers are not required to be home at the time of service, but we do ask for easy access to cleaning areas and that no aggressive dogs be left out in the yard. This ensures a smooth and efficient service for everyone.</p>
                </div>
              </div>
              <div
                className={`h-full transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
              >
                <div className="group h-full hover:bg-white why-choose-card flex flex-col items-start p-[30px] lg:p-[60px] gap-4 transition-all duration-300 shadow-lg lg:shadow-none hover:shadow-lg rounded-[var(--radius)]">
                  <img src="/images/svg/gate.svg" alt="" />
                  <h5 className={`h5 !text-left`}>Safety Procedures</h5>
                  <p className={`p !text-left`}>Our friendly Doodie Duty technicians will send you a 60-minute “on the way” text before your service begins. Customers are not required to be home at the time of service, but we do ask for easy access to cleaning areas and that no aggressive dogs be left out in the yard. This ensures a smooth and efficient service for everyone.</p>
                </div>
              </div>
              <div
                className={`h-full transition-all duration-700 ${
                  isInView 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: isInView ? '450ms' : '0ms' }}
              >
                <div className="group h-full hover:bg-white why-choose-card flex flex-col items-start p-[30px] lg:p-[60px] gap-4 transition-all duration-300 shadow-lg lg:shadow-none hover:shadow-lg rounded-[var(--radius)]">
                  <img src="/images/svg/wastething.svg" alt="" />
                  <h5 className={`h5 !text-left`}>Pet Waste Disposal</h5>
                  <p className={`p !text-left`}>Our friendly Doodie Duty technicians will send you a 60-minute “on the way” text before your service begins. Customers are not required to be home at the time of service, but we do ask for easy access to cleaning areas and that no aggressive dogs be left out in the yard. This ensures a smooth and efficient service for everyone.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
