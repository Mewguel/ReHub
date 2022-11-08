import React from "react";
import { FaChild } from "react-icons/fa";
import { IoBarbellSharp } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

import ServiceCard from "./Card";
import Carousel from "./Carousel";

const Services = () => {
  return (
    <div
      className="w-full my-auto mx-auto flex flex-col justify-center bg-rehub-lightblue font-poppins p-5"
      id="services"
      name="services"
    >
      <div className="flex justify-center pl-5 mb-5">
        <span className="font-bold text-2xl text-white bg-rehub-darkcerulean px-10 py-2">
          SERVICES
        </span>
      </div>

      <div className="flex justify-center items-center m-auto p-2">
        <Carousel />
      </div>

      <div className="service-card-container w-full grid md:grid-cols-2 gap-4 justify-center items-center p-5">
        <div className="flex justify-end">
          <ServiceCard
            icon={<IoBarbellSharp className="text-white" size={40} />}
            title={"Pain Relief"}
            desc={
              "Management of acute and chronic neck and back pain, osteoarthritis, frozen shoulder, repetitive wrist and elbow injuries, etc"
            }
            cardColor={"bg-rehub-darkcerulean"}
            size="md"
          />
        </div>

        <ServiceCard
          icon={<FaChild className="text-white" size={40} />}
          title={"Sports and Orthopedic Rehabilitation"}
          desc={
            "Ankle sprains, muscle strains, overuse injuries, and post-operative cases like ACL reconstructions, fractures, shoulder dislocations, etc."
          }
          cardColor={"bg-rehub-orange"}
          size="md"
        />
        <div className="flex justify-end">
          <ServiceCard
            icon={<MdOutlineHealthAndSafety className="text-white" size={40} />}
            title={"Sports Recovery Program"}
            desc={
              "Post-activity recovery services that include cryotherapy and compression, active mobility, stretching, and other relaxation techniques."
            }
            cardColor={"bg-rehub-orange"}
            size="md"
          />
        </div>

        <ServiceCard
          icon={<GiBrain className="text-white" size={40} />}
          title={"Strength and Conditioning/ Performance Enhancement"}
          desc={
            "Individualized training program targeting activity specific movements, form and posture that is essential for optimum and safe performance. Minimizing injuries and helping athletes achieve their full athletic potential."
          }
          cardColor={"bg-rehub-darkcerulean"}
          size="md"
        />
      </div>
    </div>
  );
};

export default Services;
