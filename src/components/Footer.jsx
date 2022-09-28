import React from "react";
import { Link } from "react-router-dom";

import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineFacebook,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col bg-rehub-deepblue bottom-0 p-4 text-rehub-lightblue ">
      <div className="upper-footer-container flex mx-auto justify-evenly items-start p-2 w-full border-b-[1px] border-[#111561] text-sm">
        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex bg-rehub-darkcerulean rounded-full p-2 justify-center w-fit">
            <AiOutlinePhone size={30} />
          </div>
          <div className="mx-auto p-2 md:max-w-[280px] max-w-[140px]">
            <p className="text-center">(02) 8-951-3333 </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex bg-rehub-darkcerulean rounded-full p-2 justify-center w-fit">
            <AiOutlineMail size={30} />
          </div>
          <div className="mx-auto p-2 md:max-w-[280px] max-w-[140px]">
            <p className="text-center">rehub.philippines@gmail.com </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mx-auto">
          <div className="flex bg-rehub-darkcerulean rounded-full p-2 justify-center w-fit">
            <FaMapMarkerAlt size={30} />
          </div>
          <div className="flex mx-auto p-2 md:max-w-[240px] max-w-[140px]">
            <p className="text-center">
              {`2F, Celebrity Sports Plaza, Delta Drive, Matandang Balara 1119
              Quezon City, Philippines`}
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-footer-container flex mx-auto justify-evenly items-start p-2 w-full border-b-[1px] border-[#111561]">
        <div className="about flex flex-col">
          <a href="/">
            <span className="text-md font-semibold pb-2">About</span>
          </a>
          <Link to="/about">
            <span className="text-sm hover:text-rehub-darkcerulean cursor-pointer">
              About Re-hub
            </span>
          </Link>
          <Link to="/about">
            <span className="text-sm hover:text-rehub-darkcerulean cursor-pointer">
              Vision
            </span>
          </Link>
          <Link href="/about">
            <span className="text-sm hover:text-rehub-darkcerulean cursor-pointer">
              Mission
            </span>
          </Link>
        </div>

        <div className="services flex flex-col">
          <a href="/">
            <span className="text-md font-semibold pb-2">Services</span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-darkcerulean cursor-pointer">
              Service 1
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-darkcerulean cursor-pointer">
              Service 2
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-darkcerulean cursor-pointer">
              Service 3
            </span>
          </a>
        </div>

        <div className="products flex flex-col">
          <a href="/">
            <span className="text-md font-semibold pb-2">Products</span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-darkcerulean cursor-pointer">
              Product Category 1
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-darkcerulean cursor-pointer">
              Product Category 2
            </span>
          </a>
          <a href="/">
            <span className="text-sm hover:text-rehub-darkcerulean cursor-pointer">
              Product Category 3
            </span>
          </a>
        </div>
      </div>

      <div className="socials-container flex mx-auto justify-center items-start p-2 w-full">
        {/* Add links to these platforms */}
        <a href="https://www.facebook.com/rehub.philippines/">
          <div className="flex bg-transparent  rounded-full p-2 justify-center w-fit">
            <AiOutlineFacebook size={30} />
          </div>
        </a>
        <a href="https://www.instagram.com/rehub.ph/">
          <div className="flex bg-transparent  rounded-full p-2 justify-center w-fit">
            <AiOutlineInstagram size={30} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Footer;
