import React from "react";

import Faci1 from "../assets/facilities/faci1.jpg";
import Faci2 from "../assets/facilities/faci2.jpg";
import Faci3 from "../assets/facilities/faci3.jpg";
import Faci4 from "../assets/facilities/faci4.jpg";

const Facilities = () => {
  return (
    <div
      className="w-full my-auto mx-auto py-5 flex flex-col justify-center bg-rehub-lightblue font-poppins"
      id="facilities"
      name="facilities"
    >
      <div className="title flex justify-center p-5">
        <span className="font-bold text-2xl text-white bg-rehub-darkcerulean px-10 py-2">
          FACILITIES
        </span>
      </div>
      <div className="image-container flex justify-center items-center gap-1">
        <div className="flex flex-col">
          <label className="font-semibold text-xl text-rehub-darkcerulean p-2 mx-10">
            Physical Therapy Treatment Area
          </label>
          <img
            className="w-[480px] h-[480px] shadow p-2 mx-10"
            src={Faci1}
            alt="facility 1"
          />
          <label className="font-semibold text-xl text-rehub-darkcerulean p-2 mx-10">
            Gym
          </label>
          <img
            className="w-[480px] h-[480px] shadow p-2 mx-10"
            src={Faci2}
            alt="facility 2"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-xl text-rehub-darkcerulean p-2 mx-10">
            Consultation Area
          </label>
          <img
            className="w-[480px] h-[480px] shadow p-2 mx-10"
            src={Faci3}
            alt="facility 3"
          />
          <label className="font-semibold text-xl text-rehub-darkcerulean p-2 mx-10">
            Swimming pool for Aquatic Therapy
          </label>
          <img
            className="w-[480px] h-[480px] shadow p-2 mx-10"
            src={Faci4}
            alt="facility 4"
          />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
