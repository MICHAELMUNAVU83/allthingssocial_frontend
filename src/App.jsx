import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Influencers from "./components/Influencers";
import Pricing from "./components/Pricing";

function App() {
  return (
    <>
      <Hero />
      <Brands />
      <Influencers />
      <Pricing />
    </>
  );
}

export default App;
