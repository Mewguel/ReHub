import React from "react";
import Typed from "react-typed";

import RehubLogo from "../assets/rehub_rect.png";

const ComingSoon = () => {
  return (
    <div className="text-rehub-orange">
      <div className="max-w-[800px] mt-[-90px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div className="flex justify-center p-4">
          <img className="md:w-[480px]" src={RehubLogo} alt="Rehub Logo" />
        </div>
        <div className="flex justify-center items-center">
          <p className="md:text-2xl sm:text-lg text-base font-bold">
            RE-HUB Products are
          </p>
          <Typed
            className="md:text-2xl sm:text-lg text-base font-bold pl-2"
            strings={[" coming soon!"]}
            typeSpeed={120}
            backSpeed={200}
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
