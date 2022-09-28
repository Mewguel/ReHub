import React from "react";
import Hero from "../components/Hero";
import Avatar from "../components/Avatar";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Avatar />
      <Services />
    </div>
  );
};

export default Home;
