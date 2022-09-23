import React from "react";

const ServiceCard = ({ icon, title, desc, cardColor }) => {
  return (
    <div
      className={"flex flex-col h-[240px] w-[300px] rounded-lg " + cardColor}
    >
      <div className="flex justify-center p-5">{icon}</div>
      <div className="flex justify-center p-2 font-semibold text-white">
        {title}
      </div>
      <div className="flex justify-center p-2 font-sm text-white">{desc}</div>
    </div>
  );
};

export default ServiceCard;
