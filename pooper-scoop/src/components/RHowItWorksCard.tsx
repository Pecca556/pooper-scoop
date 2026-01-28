import React from "react";

interface HowItWorksCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const HowItWorksCard: React.FC<HowItWorksCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => {
  return (
    <div className="py-10 lg:px-10 flex max-lg:flex-col flex-row items-center max-lg:items-start gap-8 lg:h-[280px] w-full">
      <img src={imageSrc} alt={imageAlt} className="w-[100px] h-auto" />
      <div className="flex flex-col gap-4 max-w-[500px]">
        <h5 className="h5">{title}</h5>
        <p className="p">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksCard;
