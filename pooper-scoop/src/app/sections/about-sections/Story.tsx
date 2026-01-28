import React from "react";

// 1. Define the props interface for the local component
interface NumbersShowcaseItemProps {
  iconSrc: string;
  numberText: string;
  descriptionText: string;
}

// 2. Define the local component
const NumbersShowcaseItem: React.FC<NumbersShowcaseItemProps> = ({
  iconSrc,
  numberText,
  descriptionText,
}) => {
  return (
    <div className="flex flex-row gap-[14px] max-sm:flex-col max-sm:gap-[8px]">
      <img src={iconSrc} alt="icon" className="w-[68px] h-[68px]" />
      <div className="flex flex-col justify-between py-[8px] max-sm:p-0 gap-y-[4px]">
        <div className="numbers-showcase-text !text-white">{numberText}</div>
        <div className="tag-text-story !text-left !text-white">{descriptionText}</div>
      </div>
    </div>
  );
};

// This data would come from your CMS
const showcaseData = [
  {
    iconSrc: "/images/svg/checkmark-emblem.svg",
    numberText: "1+",
    descriptionText: "Years Experience",
  },
  {
    iconSrc: "/images/svg/star.svg",
    numberText: "500+",
    descriptionText: "Happy Clients",
  },
  {
    iconSrc: "/images/svg/girl.svg",
    numberText: "10000+",
    descriptionText: "Scoops Made",
  },
  {
    iconSrc: "/images/svg/dog-emblem.svg",
    numberText: "100%",
    descriptionText: "Satisfaction",
  },
];

export default function Story() {
  return (
    <div className="max-w-[var(--view-width)] mx-auto w-full relative z-1  ">
      <h1 className="h2 text-center pb-15 !text-white max-lg:text-left">
        The Doodie Duty Story
      </h1>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-[20px]">
        <div
              /* left card */ className="bg-white flex flex-col gap-y-6 justify-center items-center shadow-lg rounded-[30px] p-[32px] "
        >
          <p className="p !leading-[32px]">
          Founded in late 2025 in Anaheim, CA, Doodie Duty was created to make life a little bit easier for dog owners by eliminating the most dreaded chore of all—scooping pet waste!
          </p>
          <p className="p !leading-[32px]">
          Having picked up after their own dogs for years, the founders of Doodie Duty recognized that pooper scooping was an overlooked service across the United States. They set out to make dog ownership a bit more enjoyable by solving this messy part of pet care.
          </p>
          <p className="p !leading-[32px]">
          Today, Doodie Duty serves Orange County as a whole, including Anaheim, Cypress, Irvine, Garden Grove, Huntington- and Newport Beach, plus surrounding areas.
          </p>
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <div
                /* img container */ className="flex-1 flex flex-col justify-center overflow-hidden rounded-[30px]"
          >
            <img
              src="/images/avif/real-life-images/the-fleet.avif"
              alt=""
              className="object-cover w-full h-100"
            />
          </div>
          {/* 3. Use the local component by mapping over the data */}
          <div
                /* numbers showcase grid */ className="grid grid-cols-2 p-[10px] gap-y-4"
          >
            {showcaseData.map((item, index) => (
              <NumbersShowcaseItem
                key={index}
                iconSrc={item.iconSrc}
                numberText={item.numberText}
                descriptionText={item.descriptionText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
