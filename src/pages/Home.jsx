import React from "react";
import Hero from "../components/Hero";
import Avatar from "../components/Avatar";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Avatar />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
