import React from "react";

export default function Satisfaction() {
  return (
    <div className="customer-promise mx-auto w-full ">
      <div className=" ">
        <div className="px-[20px] bg-custom-gradient !overflow-visible">
          <div /* main flex */ className="flex flex-row max-w-[var(--view-width)] mx-auto justify-end max-lg:flex-col max-lg:py-[60px] ">
            <div className="flex-1 relative max-lg:w-full max-lg:flex max-lg:justify-center">
                <img
                  src="/images/avif/mascottes/satisfaction-guarantee.avif"
                  alt="dog emblem"
                  className="w-[250px] object-cover absolute right-0 max-lg:relative max-lg:mx-auto -top-5 max-lg:top-0" 
                />
            </div>
            <div className="">
                <div className="flex flex-col pt-[70px] pb-[50px] px-[56px] max-lg:p-0">
                  <h2 className="h2 !text-white max-lg:text-center">100% Satisfaction Guarantee</h2>
                  <p className="p !text-white max-lg:text-center">
                    No contracts! If you are not 100% satisfied you can cancel at
                    anytime.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
