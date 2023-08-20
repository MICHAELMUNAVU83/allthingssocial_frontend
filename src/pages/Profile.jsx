import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
const Profile = () => {
  return (
    <div className="bg-gradient-to-bl from-purple-300 via-purple-100 to-white flex flex-col justify-center items-center h-[100vh] ">
      <div className="h-[80%] w-[80%] p-4 bg-white rounded-xl shadow-md flex flex-col ">
        <div className="flex items-center gap-2">
          <BsInstagram className="text-2xl" />
          <p className="text-xl font-semibold">Influencer highlights</p>
        </div>

        <div className="flex justify-between  pt-4  items-start">
          <div className="flex flex-col h-[400px] bg-white p-4 shadow-md rounded-xl shadow-gray-400 w-[30%] gap-4">
            <div className="flex gap-2 items-center">
              <div className="w-[50px] h-[50px] rounded-full bg-[#887CF2]"></div>
              <div className="flex flex-col">
                <p className="text-sm font-bold">Michael Munavu</p>
                <p className="text-xs text-[#595959]">michaelmunavu</p>
              </div>
            </div>
            <div className="flex justify-between w-[100%] p-2 rounded-md font-bold bg-[#F3F6F9] text-black">
              <div className="flex gap-2 items-center">
                <BiUserCircle className="text-[#595959]" />
                <p className="text-[#595959]">Followers</p>
              </div>
              <p>200</p>
            </div>
          </div>

          <div className="flex flex-col bg-white  h-[400px] shadow-md rounded-xl shadow-gray-400  w-[50%] gap-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
