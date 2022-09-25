import React from "react";

import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col bg-rehub-deepblue bottom-0 p-4 text-rehub-lightblue ">
      <div className="upper-footer-container flex mx-auto justify-evenly items-start p-4 w-full border-b-[1px] border-[#111561] text-sm">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex bg-rehub-cerulean rounded-full p-2 justify-center w-fit">
            <AiOutlinePhone size={30} />
          </div>
          <div className="mx-auto p-2 md:max-w-[280px] max-w-[140px]">
            <p className="text-center">(+63) 988 111 1111 </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex bg-rehub-cerulean rounded-full p-2 justify-center w-fit">
            <AiOutlineMail size={30} />
          </div>
          <div className="mx-auto p-2 md:max-w-[280px] max-w-[140px]">
            <p className="text-center">rehub@rehub.ph </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex bg-rehub-cerulean rounded-full p-2 justify-center w-fit">
            <FaMapMarkerAlt size={30} />
          </div>
          <div className="flex mx-auto p-2 md:max-w-[280px] max-w-[140px]">
            <p className="text-center">
              J. Dela Cruz Street, Makati, 1227 Metro Manila
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-footer-container flex mx-auto justify-evenly items-start p-4 w-full border-b-[1px] border-[#111561]">
        <div className="about flex flex-col">
          <a href="/">
            <span className="text-md font-semibold pb-2">About</span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-cerulean cursor-pointer">
              Our Story
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-cerulean cursor-pointer">
              Vision
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-cerulean cursor-pointer">
              Mission
            </span>
          </a>
        </div>

        <div className="services flex flex-col">
          <a href="/">
            <span className="text-md font-semibold pb-2">Services</span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-cerulean cursor-pointer">
              Service 1
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-cerulean cursor-pointer">
              Service 2
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-cerulean cursor-pointer">
              Service 3
            </span>
          </a>
        </div>

        <div className="products flex flex-col">
          <a href="/">
            <span className="text-md font-semibold pb-2">Products</span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-cerulean cursor-pointer">
              Product Category 1
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-cerulean cursor-pointer">
              Product Category 2
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-cerulean cursor-pointer">
              Product Category 3
            </span>
          </a>
        </div>
      </div>

      <div className="socials-container flex mx-auto justify-center items-start p-4 w-full">
        {/* Add links to these platforms */}
        <div className="flex bg-transparent  rounded-full p-2 justify-center w-fit">
          <AiOutlineFacebook size={30} />
        </div>
        <div className="flex bg-transparent  rounded-full p-2 justify-center w-fit">
          <AiOutlineInstagram size={30} />
        </div>
        <div className="flex bg-transparent rounded-full p-2 justify-center w-fit">
          <AiOutlineLinkedin size={30} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
