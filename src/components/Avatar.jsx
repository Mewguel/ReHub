import React from "react";
import PTherapist from "../assets/pt.jpg"; // change this to your profile picture

const Avatar = () => {
  return (
    <div
      className="flex w-full py-10 px-4 bg-rehub-lightblue text-rehub-deepblue"
      id="about"
    >
      <div className="container max-w-[1240px] max-auto grid md:grid-cols-3">
        <div className="flex md:justify-end justify-center md:pb-5 md:pr-10">
          <img
            className="h-[320px] w-[320px] shadow rounded-full max-w-full"
            src={PTherapist}
            alt="PTherapist"
          />
        </div>

        <div className="first-para-container">
          <div className="font-bold text-2xl p-2 ">
            <span className="text-rehub-darkcerulean">ABOUT US</span>
          </div>
          <div className=" text-lg p-2 text-justify indent-10">
            {`
          Re-Hub (Relief, Rehab, Recover) is a Physical Therapy and Recovery Clinic that aims to provide services to people seeking pain relief, sports and orthopedic rehabilitation, and rehabilitation for special conditions (women's health, vestibular, lymphedema), along with people who are not injured but seek recovery services.
          `}
          </div>
        </div>

        <div className="details-container text-lg text-justify pt-14 pl-2">
          <div>
            {`This facility also offers strength and conditioning performance enhancement programs to athletes and clients who want to improve their sports performance, movement, and stamina.`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
