import React from "react";

// import ValueCard from "../components/Card";

import RMap from "../assets/rehub-map.png";
import CCLogo from "../assets/celebrity-club-logo.png";
import Lounge from "../assets/rehub_lounge.jpg";
import Mission from "../assets/mission.jpg";
import Vision from "../assets/Vision.png";
import ReHubLogo from "../assets/rehub_rect.png";

const About = () => {
  return (
    <div className="about-us-container flex flex-col w-full p-5">
      <div className="about-section flex w-full ">
        <div className="flex flex-col md:w-1/2 w-full py-2">
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rehub-darkcerulean to-rehub-cerulean lg:text-6xl md:text-4xl  text-3xl mx-5 px-10 py-2">
            {`About RE-HUB`}
          </div>

          <div className="font-medium md:text-base text-sm text-rehub-darkcerulean text-justify mx-5 px-10 py-2 indent-[40px]">
            {`Re-Hub (Relief, Rehab, Recover) is a Physical Therapy and Recovery Clinic that aims to provide services to people seeking pain relief, sports and orthopedic rehabilitation, and rehabilitation for special conditions (women's health, vestibular, lymphedema), along with people who are not injured but seek recovery services. This facility also offers strength and conditioning performance enhancement programs to athletes and clients who want to improve their sports performance, movement, and stamina.`}
          </div>

          <div className="font-medium md:text-base text-sm text-rehub-darkcerulean text-justify mx-5 px-10 py-2 indent-[40px]">
            {`This clinic is open to both Celebrity members and non-members, as well as out-of-pocket and HMO patients. Employee and member discounts will be available. All staff will be highly trained, as this facility also strives to educate and train physical therapists and other allied medical professionals to expand their knowledge and skill sets.`}
          </div>
        </div>
        <div className="about-image-container w-1/2 mx-5 px-10 py-6">
          <img
            className="flex w-[680px] h-[380px] shadow -z-10"
            src={Lounge}
            alt="rehub-lounge"
          />
        </div>
      </div>
      {/* section end */}
      <div className="mission-section flex w-full">
        <div
          className="flex flex-col md:w-1/2 w-full py-2"
          id="mission"
          name="mission"
        >
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rehub-darkcerulean to-rehub-cerulean lg:text-6xl md:text-4xl  text-3xl mx-5 px-10 py-2">
            {`Our Mission`}
          </div>

          <div className="font-medium md:text-base text-sm text-rehub-darkcerulean text-justify mx-5 px-10 py-2 indent-[40px]">
            {`Re-hub's mission is to deliver high-quality, world-class multi - disciplinary services to each patient thereby further educating the Filipino community in the field of physiotherapy.`}
          </div>

          <div className="w-[680px] h-[380px] overflow-hidden mx-5 px-10 py-6">
            <img className="flex shadow -z-10" src={Mission} alt="mission" />
          </div>
        </div>
        <div
          className="vision-section flex w-full justify-start"
          id="vision"
          name="vision"
        >
          <div className="flex flex-col w-full py-2 justify-start">
            <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rehub-darkcerulean to-rehub-cerulean lg:text-6xl md:text-4xl  text-3xl mx-5 px-10 py-2">
              {`Our Vision`}
            </div>

            <div className="font-medium md:text-base text-sm text-rehub-darkcerulean text-justify mx-5 px-10 py-2 indent-[40px]">
              {`Re-hub will be recognized in the Philippines as a leading provider of physical therapy services and education.`}
            </div>
            <div className="w-[680px] h-[380px] mx-5 px-10 py-12">
              <img className="flex shadow -z-10" src={Vision} alt="vision" />
            </div>
          </div>
        </div>
        {/* section end */}
      </div>
      {/* section end */}
      {/* <div className="values-section flex w-full">
        <div className="flex flex-col w-full py-2">
          <div className="flex justify-center items-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rehub-darkcerulean to-rehub-cerulean lg:text-6xl md:text-4xl  text-3xl mx-5 px-10 py-5">
            {`Core Values`}
          </div>

          <div className="flex w-full place-content-center justify-center items-center gap-4 py-5">
            <ValueCard
              title={"Continuous learning"}
              desc={
                "Rehub will provide continuous learning in the field of Physical Therapy. As education in physical therapy evovles, continuous learning and innovations will be integrated to its services."
              }
              cardColor={"bg-rehub-darkcerulean"}
              size={"md"}
            />

            <ValueCard
              className="justify-self-center"
              title={"Collaboration"}
              desc={
                "Rehub will continue to collaborate with the team and its clients. To contiue providing high quality and effective services, all voices and opinions will be heard."
              }
              cardColor={"bg-rehub-darkcerulean"}
              size={"md"}
            />

            <ValueCard
              className="justify-self-center"
              title={"High Quality"}
              desc={
                "Rehub services will ensure that it provides world-class physical therapy services and education"
              }
              cardColor={"bg-rehub-darkcerulean"}
              size={"md"}
            />
          </div>

          <div className="flex w-full place-content-center justify-center items-center gap-4 py-5">
            <ValueCard
              className="justify-self-center"
              title={"Integrity"}
              desc={
                "Rehub will uphold moral integrity in all of their actionsn"
              }
              cardColor={"bg-rehub-darkcerulean"}
              size={"md"}
            />

            <ValueCard
              className="justify-self-center"
              title={"Passion"}
              desc={
                "Rehub will provide all of their services with all of their hearts and minds"
              }
              cardColor={"bg-rehub-darkcerulean"}
              size={"md"}
            />
          </div>
        </div>
      </div> */}
      <div className="location-section flex w-full justify-center items-center align-middle">
        <div className="flex flex-col md:w-3/5 w-full py-2">
          <div className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rehub-darkcerulean to-rehub-cerulean lg:text-6xl md:text-4xl  text-3xl mx-5 px-10 py-2">
            {`Location & Clinic Hours`}
          </div>
          <div className=" flex flex-row mx-5 px-10 py-2">
            <img
              className="flex w-[480px] h-[480px] shadow border-4 border-orange-500 -z-10"
              src={RMap}
              alt="map"
            />
            <div className="flex w-full relative">
              <img
                className="flex w-[280px] h-[180px] shadow border-4 border-orange-500 -z-10 absolute bottom-0 right-0"
                src={CCLogo}
                alt="celebrity club logo"
              />
            </div>
          </div>
          <div className="font-semibold md:text-xl text-base text-rehub-darkcerulean text-justify mx-5 px-10 py-2 indent-[40px]">
            {/* {`RE-HUB`} */}
            <img
              className="flex w-[180px] h-[60px]"
              src={ReHubLogo}
              alt="ReHub Logo"
            />
          </div>
          <div className="font-medium md:text-base text-base text-rehub-darkcerulean text-justify mx-5 px-10 py-2 indent-[40px]">
            {`2nd floor, Celebrity Sports Plaza Delta Drive, Matandang Balara, Quezon City`}
          </div>
          <div className="font-medium md:text-base text-base text-rehub-darkcerulean text-justify mx-5 px-10 py-2 indent-[40px]">
            <span>{`Tuesday - Saturday`}</span>
            <span className="px-10">{`8:00 AM - 7:00 PM`}</span>
          </div>
          <div className="font-medium md:text-base text-base text-red-600 text-justify mx-5 px-10 py-2 indent-[40px]">
            <span className="text-rehub-darkcerulean">{`Monday & Sunday `}</span>
            <span className="px-10">{`Closed`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
