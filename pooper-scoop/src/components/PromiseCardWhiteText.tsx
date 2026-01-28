import React from "react";

interface PromiseCardWhiteTextProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PromiseCardWhiteText: React.FC<PromiseCardWhiteTextProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="why-choose-card group flex flex-col items-start gap-4 rounded-[var(--radius)] bg-transparent p-[30px] shadow-lg transition-[var(--transition)] hover:!bg-white hover:shadow-lg hover:shadow-lg lg:p-[60px] lg:shadow-none">
    {icon}
    <h5 className="h5 !text-left !text-white transition-colors group-hover:!text-black hover:text-black">
      {title}
    </h5>
    <p className="p !text-left !text-white transition-colors group-hover:!text-black hover:text-black">
      {description}
    </p>
  </div>
);

export default PromiseCardWhiteText;
