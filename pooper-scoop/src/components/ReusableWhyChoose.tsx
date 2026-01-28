import React from "react";

interface WhyChooseItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ReusableWhyChooseProps {
  sectionClassName?: string;
  eyebrowText?: string;
  heading: React.ReactNode;
  subheading: string;
  items: WhyChooseItem[];
  showGrassFooter?: boolean;
  grassImageUrl?: string;
  dogImageUrl?: string;
  dogImageAlt?: string;
}

export default function ReusableWhyChoose({
  sectionClassName = "WHYCHOOSE",
  eyebrowText,
  heading,
  subheading,
  items,
  showGrassFooter = true,
  grassImageUrl = "/images/home-page/grass-black.svg",
  dogImageUrl = "/images/avif/home-page/whychoose/dogplaceholder.avif",
  dogImageAlt = "dog with a shovel",
}: ReusableWhyChooseProps) {
  return (
    <div className={`${sectionClassName} mx-auto w-full`}>
      <div className="px-[20px]">
        <div className="flex flex-col max-w-[var(--view-width)] mx-auto gap-[20px]">
          <div className="flex flex-col gap-[15px] max-w-[var(--max-width-headerpart)] mx-auto text-center">
            {eyebrowText && (
              <p className="p uppercase !text-[var(--brandcolor-lightgreen)]">
                {eyebrowText}
              </p>
            )}
            <h2 className="h2">{heading}</h2>
            <p className="p">{subheading}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]">
            {items.map((item, index) => (
              <div
                key={index}
                className="why-choose-card flex flex-col items-start p-[30px] lg:p-[60px] gap-4 transition-[var(--transition)] shadow-lg lg:shadow-none hover:shadow-lg rounded-[var(--radius)]"
              >
                {item.icon}
                <h5 className="h5 !text-left">{item.title}</h5>
                <p className="p !text-left">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showGrassFooter && (
        <div
          className="grass-and-dog relative bg-repeat-x bg-[length:auto_100%] h-[90px] lg:h-[150px] w-full"
          style={{ backgroundImage: `url(${grassImageUrl})` }}
        >
          {dogImageUrl && (
            <div className="dog hidden lg:block absolute bottom-0">
              <img src={dogImageUrl} alt={dogImageAlt} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
