import React from "react";
import Hero from "../components/Hero";
import Avatar from "../components/Avatar";
import Services from "../components/Services";
import Facilities from "../components/Facilities";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Avatar />
      <Facilities />
      <Services />
    </div>
  );
};

export default Home;
