import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Influencers from "./components/Influencers";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Brands />
      <Influencers />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
