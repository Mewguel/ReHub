import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

import RehubLogoRect from "../assets/rehub_rect.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 text-rehub-darkcerulean border-b border-gray-100 sticky top-0 bg-rehub-lightblue z-[999]">
      <img
        className="h-[50px] w-[140px] rounded-lg"
        src={RehubLogoRect}
        alt="ReHub Logo"
      />
      <ul className="hidden md:flex">
        <Link to="/">
          <li className="font-semibold p-4 cursor-pointer">Home</li>
        </Link>
        <a href="/#services">
          <li className="font-semibold p-4 cursor-pointer">Services</li>
        </a>
        <Link to="/products">
          <li className="font-semibold p-4 cursor-pointer">Products</li>
        </Link>
        <a href="/about">
          <li className="font-semibold p-4 cursor-pointer">About</li>
        </a>
        <Link to="/contact">
          <li className="font-semibold p-4 cursor-pointer">Contact</li>
        </Link>
      </ul>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[55%] h-full border-r-gray-900 bg-rehub-lightblue ease-in-out duration-700 block md:hidden  z-50"
            : "fixed left-[-100%] hidden"
        }
      >
        <div className="p-2">
          <img
            className="h-[50px] w-[140px] rounded-lg"
            src={RehubLogoRect}
            alt="ReHub Logo"
          />
        </div>

        <ul className="pt-4 uppercase">
          <Link to="/">
            <li className="font-semibold p-4 border-b border-gray-500 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/">
            <li className="font-semibold p-4 border-b border-gray-500 cursor-pointer">
              Services
            </li>
          </Link>
          <Link to="/products">
            <li className="font-semibold p-4 border-b border-gray-500 cursor-pointer">
              Products
            </li>
          </Link>
          <Link to="/about">
            <li className="font-semibold p-4 border-b border-gray-500 cursor-pointer">
              About
            </li>
          </Link>

          <Link to="contact">
            <li className="font-semibold p-4 border-b border-gray-500 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
