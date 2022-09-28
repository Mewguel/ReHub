import React from "react";
import { useState, useEffect, useRef } from "react";

import Service1 from "../assets/service/service_1_1.jpg";
import Service2 from "../assets/service/service_1.jpg";
import Service3 from "../assets/service/service_2.jpg";

import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const featuredServices = [Service1, Service2, Service3];

var ci = 0;
var slideInterval;
const Carousel = () => {
  const [currentIndex, setcurrentIndex] = useState(0);
  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    const startSlider = () => {
      slideInterval = setInterval(() => {
        handleNext();
      }, 3000);
    };

    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();

    return () => {
      pauseSlider();
    };
  }, []);

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleNext = () => {
    ci = (ci + 1) % featuredServices.length;
    setcurrentIndex(ci);
    slideRef.current.classList.add("fade-anim");
  };
  const handlePrev = () => {
    const arrLength = featuredServices.length;
    ci = (currentIndex + arrLength - 1) % featuredServices.length;
    setcurrentIndex(ci);
  };

  const setSidePix = (loc) => {
    if (loc === 1 || loc === -1) {
      if (currentIndex + loc < 0) {
        return featuredServices.length - 1;
      }
      if (currentIndex + loc > featuredServices.length - 1) {
        return 0;
      }
      return currentIndex + loc;
    }
  };

  return (
    <div
      ref={slideRef}
      className="flex justify-center items-center md:w-3/5 w-full select-none relative p-2 m-2"
    >
      <div className="flex justify-center items-center w-full">
        <img
          className="w-4/12 h-4/12 px-2"
          src={featuredServices[setSidePix(-1)]}
          alt="featured"
        />
        <img
          className="w-4/12 h-4/12 px-2"
          src={featuredServices[currentIndex]}
          alt="featured"
        />
        <img
          className="w-4/12 h-4/12 px-2"
          src={featuredServices[setSidePix(1)]}
          alt="featured"
        />
      </div>
      <div className="flex justify-between items-center absolute w-full top-1/2 transform -translate-y-1/2 py-4">
        <button
          className="bg-black rounded-full p-1 text-white bg-opacity-50 transition hover:bg-opacity-100"
          onClick={handlePrev}
        >
          <AiOutlineDoubleLeft size={30} />
        </button>
        <button
          className="bg-black rounded-full p-1 text-white bg-opacity-50 transition hover:bg-opacity-100"
          onClick={handleNext}
        >
          <AiOutlineDoubleRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
