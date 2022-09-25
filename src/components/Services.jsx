import React from "react";
import ServiceCard from "./ServiceCard";
import { FaChild } from "react-icons/fa";
import { IoBarbellSharp } from "react-icons/io5";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GiBrain } from "react-icons/gi";

const Services = () => {
  return (
    <div
      className="w-full md:h-screen mx-auto flex flex-col justify-center bg-rehub-lightblue font-poppins"
      id="services"
    >
      <div className="flex justify-center font-bold text-rehub-darkcerulean text-3xl pl-5 mb-5">
        Services
      </div>
      <div className="service-card-container w-full grid md:grid-cols-2 gap-4 justify-center items-center p-5">
        <div className="flex justify-end">
          <ServiceCard
            icon={<IoBarbellSharp className="text-white" size={40} />}
            title={"Occupational Physical Therapy"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est?"
            }
            cardColor={"bg-rehub-darkcerulean"}
          />
        </div>

        <ServiceCard
          icon={<FaChild className="text-white" size={40} />}
          title={"Pediatric Physical Therapy"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est?"
          }
          cardColor={"bg-rehub-orange"}
        />
        <div className="flex justify-end">
          <ServiceCard
            icon={<MdOutlineHealthAndSafety className="text-white" size={40} />}
            title={"Rehabilitative Physical Therapy"}
            desc={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est?"
            }
            cardColor={"bg-rehub-orange"}
          />
        </div>

        <ServiceCard
          icon={<GiBrain className="text-white" size={40} />}
          title={"Neurological Physical Therapy"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, est?"
          }
          cardColor={"bg-rehub-darkcerulean"}
        />
      </div>
    </div>
  );
};

export default Services;
