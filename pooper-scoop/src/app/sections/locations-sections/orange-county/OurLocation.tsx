import React from "react";

export default function Disclaimer() {
  return (
    <div className="customer-promise mx-auto w-full max-w-[var(--view-width)]">
      <div className="">
        <div className="px-[20px]">
          <div className="flex flex-row gap-[25px]">
            <div className="flex flex-col gap-[10px]">
              <p className="subheader uppercase">OUR LOCATIONS</p>
              <h2 className="h2">Doodie Duty Orange County Service Areas</h2>
              <p className="p">Doodie Duty provides pet poop pickup service throughout Spokane, Spokane County, and surrounding areas. From north to south, our pet poop pickup service area covers the entire Spokane region.
                <br /><br />
                Major municipalities serviced by our dog poop service Spokane location include:</p>
              <div className="grid grid-cols-3"></div>
            </div>
            {/* map widget here */}
            <div className="flex flex-col gap-[10px]">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
