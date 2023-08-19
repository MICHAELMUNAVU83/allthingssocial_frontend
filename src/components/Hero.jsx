import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import { BsSend } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

import { AiOutlineYoutube } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="md:h-[100vh] bg-gradient-to-bl from-purple-300 via-purple-100 to-white flex pt-24 flex-col justify-center items-center">
      <div className="md:w-[80%] w-[95%] mx-auto flex md:flex-row flex-col justify-between ">
        <div className="flex gap-6  text-xl flex-col md:w-[60%]">
          <div className="flex gap-2  text-[#887CF2] items-center">
            <BsArrowRight />
            <p>Influencer management tool for brands and agencies</p>
          </div>
          <p className="md:text-6xl text-3xl text-[#595959] font-bold ">
            Organize all your influencers and collabs{" "}
            <span className="text-[#887CF2]">easily in one place</span>
          </p>
          <div className="flex gap-4  text-[#595959] items-center">
            <BsInstagram className="text-2xl" />
            <AiOutlineYoutube className="text-3xl" />
            <BsTiktok className="text-2xl" />
          </div>
        </div>
        <div className="md:w-[30%] my-8 md:my-0 w-[90%] mx-auto flex flex-col md:rotate-12 rotate-6 justify-center items-center">
          <img
            src="/instagram.jpg"
            className="w-[100%] h-[400px] object-cover"
            alt="instagram"
          />
          <div className="bg-white py-4 w-[100%] flex justify-between items-center  h-[50px]">
            <div className="flex justify-center  gap-2 items-center">
              <AiFillHeart className="text-2xl text-red-500" />
              <FaRegComment className="text-2xl" />
              <BsSend className="text-2xl" />
            </div>
            <BsBookmark className="text-2xl" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-[#595959]  uppercase font-bold text-xl">
          Join Us Now
        </p>
        <div className="flex justify-center items-center gap-4 w-[100%]">
          <button className="bg-[#887CF2] text-white px-4 py-2 rounded-md">
            I am A Brand
          </button>

          <button className="bg-[#887CF2] text-white px-4 py-2 rounded-md">
            I am An Influencer
          </button>
        </div>
      </div>
      <p className="text-[#595959] text-xl text-center font-bold mt-4">
        Basically It is a CRM for brands to manage influencers and a way to get
        influencers paid
      </p>
    </div>
  );
};

export default Hero;
