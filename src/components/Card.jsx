import React from "react";

import { BsFillPersonFill } from "react-icons/bs";

const Card = ({ icon, title, desc, cardColor, size }) => {
  var width;
  var height;
  if (typeof size === "undefined" || size.toLowerCase() === "sm") {
    height = " h-[240px]";
    width = " w-[300px]";
  } else if (size.toLowerCase() === "md") {
    height = " h-[300px]";
    width = " w-[360px]";
  }
  return (
    <div
      className={"flex flex-col rounded-lg px-4 " + cardColor + height + width}
    >
      <div className="flex justify-center pt-5 pb-2">
        {icon ? (
          icon
        ) : (
          <BsFillPersonFill className="text-white" size={"30px"} />
        )}
      </div>
      <div className="flex justify-center p-2 font-semibold text-white">
        {title}
      </div>
      <div className="flex justify-center text-justify px-5 font-sm text-white">
        {desc}
      </div>
    </div>
  );
};

export default Card;
