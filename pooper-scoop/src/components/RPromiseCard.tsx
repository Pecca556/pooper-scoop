import React from "react";

interface PromiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PromiseCard: React.FC<PromiseCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="why-choose-card flex flex-col items-start p-[30px] lg:p-[60px] gap-4 transition-[var(--transition)] shadow-lg lg:shadow-none hover:shadow-lg rounded-[var(--radius)]">
    {icon}
    <h5 className="h5 !text-left">{title}</h5>
    <p className="p !text-left">{description}</p>
  </div>
);

export default PromiseCard;