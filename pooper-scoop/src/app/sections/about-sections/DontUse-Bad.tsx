import React from "react";

export default function DontUseBad() {
  return (
    <div className="STORY mx-auto w-full">
      <div className="py-[50px]">
        <div className="px-[20px]">
          <div className="flex flex-col gap-[20px]">
            {/* First Row */}
            <div className="flex flex-row gap-[20px]">
              <div
                /* left upper card */ className="flex flex-1 w-0 flex-col rounded-[30px] bg-white gap-[20px] px-[56px] py-[48px] justify-center items-start shadow-[0_0_21px_0_rgba(67,67,67,0.14)]"
              >
                <p className="subheader uppercase text-left">
                  make a difference
                </p>
                <h2 className="h2 text-left">Our Vision</h2>
                <p className="p mb-[14.4px]">
                  At Doodie Duty, our vision is to revolutionize
                  the pet waste removal industry by setting the highest
                  standards of service, cleanliness, and customer satisfaction.
                  We strive to create cleaner, healthier environments for pets
                  and their owners, enhancing the quality of life in the
                  communities we serve. By continuously innovating and improving
                  our processes, we aim to lead the industry in reliability,
                  professionalism, and eco-friendly practices.
                </p>
              </div>
              {/* Wrap the image in a div */}
              <div className="flex-1 w-0">
                <img
                  src="/images/avif/ScoopSwoop-50.avif"
                  alt="employee picture"
                  className="rounded-[30px] object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Second Row */}
            <div className="flex flex-row gap-[20px]">
              {/* Wrap the image in a div */}
              <div className="flex-1 w-0">
                <img
                  src="/images/avif/ScoopSwoop-50.avif"
                  alt="employee picture"
                  className="rounded-[30px] object-cover w-full h-full"
                />
              </div>
              <div
                /* right lower card */ className="flex flex-1 w-0 flex-col rounded-[30px] bg-white gap-[20px] px-[56px] py-[48px] justify-center items-start shadow-[0_0_21px_0_rgba(67,67,67,0.14)]"
              >
                <p className="subheader uppercase text-left">Our Mission</p>
                <h2 className="h2 text-left">Our Mission</h2>
                <p className="p mb-[14.4px]">
                  Our mission is to provide reliable, high-quality pet waste
                  removal services that give our clients more time to enjoy
                  their pets and their yards. We are dedicated to
                  professionalism, punctuality, and a friendly customer
                  experience, ensuring that every interaction with Doodie Duty
                  is a positive one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
