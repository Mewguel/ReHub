import React from "react";
import Typed from "react-typed";

const ComingSoon = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex justify-center items-center">
          <p className="md:text-xl sm:text-lg text-base font-semibold">
            I'm Still working
          </p>
          <Typed
            className="md:text-xl sm:text-lg text-base font-semibold pl-2"
            strings={[" on this one!"]}
            typeSpeed={120}
            backSpeed={200}
            loop
          />
          <p className="md:text-xl sm:text-lg text-base font-semibold">
            {"= )"}
          </p>
        </div>
        <button className="bg-vader w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:bg-deepvader">
          See Profile
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
