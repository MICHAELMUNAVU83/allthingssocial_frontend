import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import Influencers from "./components/Influencers";

function App() {
  return (
    <>
      <Hero />
      <Brands />
      <Influencers />
    </>
  );
}

export default App;
