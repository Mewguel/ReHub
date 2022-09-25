import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookSquare, FaPhoneSquareAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full md:h-screen mx-auto text-center flex flex-col justify-center text-rehub-darkcerulean bg-rehub-lightblue">
      <div className=" text-transparent bg-clip-text bg-gradient-to-r from-rehub-darkcerulean to-rehub-cerulean md:text-7xl sm:text-5xl  text-4xl font-extrabold p-2">
        Ready To Feel Better?
      </div>
      <div className="font-bold text-2xl text-rehub-orange p-2">
        Send us a message!
      </div>

      <div className="flex justify-center">
        <a href="https://www.facebook.com/migs.ivan18">
          <div className="gmail-container flex flex-col justify-center pl-14 pr-10 py-12">
            <div className="font-bold flex flex-col justify-center items-center">
              <FaFacebookSquare size={40} />
              <p>FaceBook</p>
            </div>
          </div>
        </a>

        <div className="gmail-container flex flex-col justify-center p-12">
          <div className="font-bold flex flex-col justify-center items-center">
            <AiOutlineInstagram size={40} />
            <p>Instagram</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="gmail-container flex flex-col justify-center p-5">
          <div className="font-bold flex flex-col justify-center items-center">
            <AiOutlineMail size={40} />
            <p>Gmail</p>
            <p>rehub@rehub.ph</p>
          </div>
        </div>

        <div className="gmail-container flex flex-col justify-center p-5">
          <div className="font-bold flex flex-col justify-center items-center">
            <FaPhoneSquareAlt size={40} />
            <p>Phone</p>
            <p>+61 ## ### ##</p>
          </div>
        </div>
      </div>

      <div className="p-5 ">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </li>
          <span className="relative">See Products</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
