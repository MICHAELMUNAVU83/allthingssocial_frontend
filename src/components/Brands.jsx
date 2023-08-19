import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { TiArrowSortedUp } from "react-icons/ti";
const Brands = () => {
  return (
    <div className="bg-gradient-to-br pt-8  from-white via-purple-100 to-purple-300 ">
      <p className="text-[#595959] text-2xl text-center font-bold ">
        How does it work for brands?
      </p>

      <div className="md:w-[80%] w-[90%] my-4 mx-auto flex md:flex-row flex-col justify-between ">
        <div className="flex md:w-[40%] w-[100%]  flex-col gap-4">
          <div className="gap-1 text-2xl font-semibold flex flex-col">
            <div className="gap-2 flex text-[#887CF2] items-center">
              <BsArrowRight />
              <p>Organize your influencers,</p>
            </div>
            <p className="text-[#595959]"> based on your needs</p>
          </div>
          <p className="text-gray-600">
            Add your current and potential influencers to the CRM, and organize
            them into boards and columns
          </p>

          <div className="flex gap-2 text-gray-600 flex-col">
            <div className="flex gap-2 items-center">
              <TiArrowSortedUp className=" text-2xl rotate-90" />
              <p>by status (Potential, Outreached, …)</p>
            </div>
            <div className="flex gap-2 items-center">
              <TiArrowSortedUp className=" text-2xl rotate-90" />
              <p>by niche (gym focus, vegan focus, …)</p>
            </div>

            <p className="text-gray-600">
              …or other criteria. Additionally, you can add labels to every
              influencer, and filter your board by labels.
            </p>
          </div>
        </div>
        <div className="flex md:w-[40%] w-[100%]  flex-col gap-4">
          <img
            src="/instagram.jpg"
            className="w-[100%] h-[400px] object-cover"
            alt="instagram"
          />
        </div>
      </div>

      <p className="bg-[#887CF2] h-[1px] md:w-[80%] w-[90%] mx-auto  " />

      <div className="md:w-[80%] w-[90%] my-4 mx-auto flex md:flex-row flex-col justify-between ">
        <div className="flex md:w-[40%] w-[100%]  flex-col gap-4">
          <div className="gap-1 text-2xl font-semibold flex flex-col">
            <div className="gap-2 flex text-[#887CF2] items-center">
              <BsArrowRight />
              <p>Build strong relationships</p>
            </div>
            <p className="text-[#595959]"> with your influencers</p>
          </div>
          <p className="text-gray-600">
            Every influencer profile can be enriched with comments, labels, and
            notes: contact and shipping info, birthdays, preferences, and
            historical data.
          </p>

          <p className="text-gray-600">
            After all, influencer marketing is all about influencer
            relationships – and influencer CRM helps a lot here.
          </p>
        </div>
        <div className="flex md:w-[40%] w-[100%]  flex-col gap-4">
          <img
            src="/instagram.jpg"
            className="w-[100%] h-[400px] object-cover"
            alt="instagram"
          />
        </div>
      </div>

      <p className="bg-[#887CF2] h-[1px] md:w-[80%] w-[90%] mx-auto  " />

      <div className="md:w-[80%] w-[90%] my-4 mx-auto flex md:flex-row flex-col justify-between ">
        <div className="flex md:w-[40%] w-[100%]  flex-col gap-4">
          <div className="gap-1 text-2xl font-semibold flex flex-col">
            <div className="gap-2 flex text-[#887CF2] items-center">
              <BsArrowRight />
              <p>See detailed insights</p>
            </div>
            <p className="text-[#595959]"> for every influencer account</p>
          </div>
          <p className="text-gray-600">
            Get detailed profile analytics of every influencer:
          </p>

          <p className="text-gray-600">
            reach, engagement, monthly follower growth, audience demographics,
            similar profiles, popular posts, notable followers, and much more.
          </p>
        </div>
        <div className="flex md:w-[40%] w-[100%]  flex-col gap-4">
          <img
            src="/instagram.jpg"
            className="w-[100%] h-[400px] object-cover"
            alt="instagram"
          />
        </div>
      </div>

      <p className="bg-[#887CF2] h-[1px] md:w-[80%] w-[90%] mx-auto  " />

      <div className="bg-gradient-to-tr from-purple-200 via-purple-100 h-[300px] to-white flex flex-col gap-2 justify-center items-center">
        <p className="text-[#595959] text-6xl text-center font-bold">
          Want to know more?
        </p>

        <div className="gap-2 flex flex-col font-semibold justify-center items-center">
          <button className="border-[#887CF2] border-2 uppercase w-[300px] text-[#887CF2]  py-4 rounded-md">
            Book A Demo Call
          </button>
          <button className="bg-[#887CF2] border-2 uppercase w-[300px] text-white py-4 rounded-md">
            Get Started as a Brand
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brands;
