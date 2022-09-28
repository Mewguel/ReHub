import React from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

import Lounge from "../assets/rehub_lounge.jpg";

const Hero = () => {
  return (
    <div className="md:flex hero-text-container text-rehub-deepblue" id="hero">
      <div
        className={
          "max-w-[800px] mt-[-90px] md:w-full md:h-screen min-w-[420px] min-h-[640px] mx-auto text-center flex flex-col justify-center "
        }
      >
        <div className=" w-full md:h-screen  min-h-[640px] mx-auto text-center flex flex-col justify-center bg-black opacity-50 absolute top-0 left-0"></div>
        <h6 className="text-transparent bg-clip-text bg-gradient-to-r from-rehub-darkcerulean to-rehub-cerulean md:text-7xl sm:text-5xl  text-4xl font-extrabold p-2 z-10">
          RE-HUB
        </h6>
        <div className="flex justify-center items-center z-10">
          <Typed
            className="md:text-xl sm:text-lg text-base font-bold pl-2 text-rehub-orange"
            strings={["Relief - Rehab - Recover!"]}
            typeSpeed={120}
            backSpeed={200}
            loop
          />
        </div>
        <div className="p-5 z-10">
          <Link
            href="/"
            className="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-rehub-darkcerulean border-2 border-rehub-darkcerulean rounded-full hover:text-white group hover:bg-gray-50"
          >
            <span className="absolute left-0 block w-full h-0 transition-all bg-rehub-darkcerulean opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <li className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </li>
            <span className="relative">Set An Appointment</span>
          </Link>
        </div>
        <img
          className="flex md:w-full md:h-screen min-w-[420px] min-h-[640px] shadow absolute top-0 left-0 -z-10 overflow-hidden"
          src={Lounge}
          alt="lounge"
        />
      </div>
    </div>
  );
};

export default Hero;
