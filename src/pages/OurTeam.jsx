import React from "react";

import OurTeam from "../assets/team/ourteam.jpg";
import Charmaine from "../assets/team/charmaine.jpg";
import Haree from "../assets/team/haree.jpg";
import Esther from "../assets/team/esther.jpg";

const Home = () => {
  return (
    <div className="flex flex-col">
      <div className="img container">
        <div className="flex justify-center">
          <img className="md:w-[480px]" src={OurTeam} alt="Rehub Logo" />
        </div>
        <div className="flex justify-center">
          <img className="md:w-[480px]" src={Charmaine} alt="Rehub Logo" />
        </div>
        <div className="flex justify-center">
          <img className="md:w-[480px]" src={Haree} alt="Rehub Logo" />
        </div>
        <div className="flex justify-center">
          <img className="md:w-[480px]" src={Esther} alt="Rehub Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
