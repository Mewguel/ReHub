import React from "react";
import PTherapist from "../assets/pt.jpg"; // change this to your profile picture

const Avatar = () => {
  return (
    <div
      className="w-full py-16 px-4 bg-rehub-lightblue text-rehub-deepblue"
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
            <span className="text-rehub-cerulean">ABOUT US</span>
          </div>
          <div className=" text-lg p-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quidem temporibus nisi tempora quae quo, ratione adipisci, quas
            impedit molestiae minima omnis deserunt odio cumque fugit debitis
            neque iusto laudantium!
          </div>
        </div>

        <div className="details-container text-lg pt-14 pl-2">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            praesentium provident laborum necessitatibus nihil obcaecati tenetur
            eius excepturi labore temporibus?
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
