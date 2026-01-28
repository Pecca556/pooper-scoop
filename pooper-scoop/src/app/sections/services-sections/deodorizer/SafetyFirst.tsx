"use client";

import React from "react";
import PromiseCardWhiteText from "@/components/PromiseCardWhiteText";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const SafetyFirst = () => {
  const { ref, isInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="SafetyFirst mx-auto w-full px-[20px]  max-md:px-0">
      <div className="bg-custom-gradient rounded-[var(--radius)] mx-auto flex-col max-sm:rounded-0">
        <div className="max-w-[var(--view-width)] w-full flex flex-col mx-auto pt-[100px] pb-[20px] max-sm:pt-[50px] max-sm:pb-[40px] ">
          <div
            ref={ref}
            className={`mx-auto flex max-w-[var(--max-width-headerpart)] flex-col gap-[16px] max-sm:px-4 transition-all duration-700 ${
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="h2 text-center !text-[var(--textcolor-white)] max-sm:text-left">
              Safety First
            </h2>{" "}
            <p className="p text-center !text-[var(--textcolor-white)] max-sm:text-left">
              Our deodorizing Service is designed with safety in mind for you,
              your family, and the environment. The deodorizer is classified as
              non-hazardous under OSHA guidelines, and is eco-friendly—safe for
              grass, plants, and the entire household—while also helping to
              nourish your lawn as it eliminates tough urine odors. With
              continued treatments, our deodorizing services are a safe solution
              to keep your yard smelling fresh no matter the season.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div
              className={`h-full transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? "0ms" : "0ms" }}
            >
              <PromiseCardWhiteText
                icon={
                  <Image
                    src="/images/svg/erlenmeyer.svg"
                    alt="Checkmark"
                    width={50}
                    height={50}
                  />
                }
                title="Non-Hazardous"
                description="Our product is not classified as a hazardous material under OSHA hazard classifications. It poses no acute toxicity hazards from oral, dermal, or inhalation exposures."
              />
            </div>
            <div
              className={`h-full transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? "150ms" : "0ms" }}
            >
              <PromiseCardWhiteText
                icon={
                  <Image
                    src="/images/svg/earth.svg"
                    alt="Checkmark"
                    width={50}
                    height={50}
                  />
                }
                title="Irritation-Free"
                description="Tested in vitro, it is not classified as an eye or skin irritant. Gentle and safe for regular use around pets and kids, it protects your yard without causing harm or discomfort."
              />
            </div>
            <div
              className={`h-full transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isInView ? "300ms" : "0ms" }}
            >
              <PromiseCardWhiteText
                icon={
                  <Image
                    src="/images/svg/feather.svg"
                    alt="Checkmark"
                    width={50}
                    height={50}
                  />
                }
                title="Eco-Friendly"
                description="Safe for your grass, plants, pets, and family. Our Yard Odor Destroyer even feeds plants while eliminating lingering urine odors. Monthly treatments keep your yard fresh and inviting."
              />
            </div>
          </div>
        </div>
        <div className="h-[90px] bg-[url(/images/home-page/grass.svg)] w-full "></div>
      </div>
    </div>
  );
};

export default SafetyFirst;
