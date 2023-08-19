import React from "react";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Influencers from "../components/Influencers";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div>
      {" "}
      <NavBar />
      <Hero />
      <Brands />
      <Influencers />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Home;
