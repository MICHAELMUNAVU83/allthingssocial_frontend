import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { PiHashFill } from "react-icons/pi";
const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-4  bg-gradient-to-br from-purple-100 py-4 px-2 via-purple-100 to-white">
        <div className="flex justify-between items-center ">
          <p className="dancing text-[#887CF2]">All Things Social</p>

          <div className="flex gap-2 items-center">
            <p>Michael Munavu</p>
            <MdOutlineArrowDropDown />
          </div>
        </div>
        <div className="flex justify-between items-center ">
          <div className="flex gap-8  text-[#595959] text-xs font-bold uppercase items-center">
            <p>Boards</p>
            <p>Discover Influencers</p>
            <p>My Influencers</p>
          </div>
          <div className="flec gap-2 text-sm items-center">
            <button className="bg-gradient-to-r cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 from-purple-400 to-pink-600 text-white px-2 py-1 rounded-md">
              Pay Premium
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#EEF0F8] flex flex-col gap-4 px-8 pt-8 h-[100vh]">
        <p className="text-[#887CF2] font-bold text-xl">Your Board</p>
        <div className="bg-white min-h-[50vh] shadow-md rounded-xl p-4 shadow-gray-300">
          <div className="flex justify-between items-center">
            <div>
              <select className="border-2 border-gray-300 rounded-md text-[#808AA2] font-bold  h-[50px] px-8 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                <option value="All">Creation Date </option>
              </select>
            </div>
            <div className="py-5">
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-[#808AA2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="w-full px-4 pl-10     focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent  border-gray-300 border-2 rounded-xl h-[50px] "
                  placeholder="Search Boards"
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-8">
            <div className="h-[200px] w-[100%] border-2 flex cursor-pointer justify-center group items-center flex-col border-gray-300 border-dashed rounded-xl">
              <p className="text-white bg-[#ADAAD2] flex justify-center items-center font-bold hover:scale-105 transition-all ease-in-out duration-500 group-hover:bg-[#887CF2]  h-[20px] w-[20px] rounded-full ">
                +
              </p>
              <p className="text-[#595959] group-hover:text-[#887CF2] text-xl ">
                Create New Board
              </p>
            </div>

            <div className="h-[200px] w-[100%] border-2 flex cursor-pointer justify-between pb-4 group  flex-col  rounded-xl">
              <div className="flex flex-col w-[100%]">
                <div className="p-2 flex justify-between w-[100%] items-center">
                  <p className="text-sm font-bold">New Board</p>

                  <p className="text-[#887CF2]">....</p>
                </div>
                <p className="bg-[#887CF2] w-[100%] h-[1px]" />
              </div>
              <div className="flex flex-col gap-1 p-4">
                <div className="gap-4 flex  text-[#ADAAD2] font-semibold  items-center">
                  <FaUserCircle className="text-[#887CF2]" />
                  <p>No influencers added yet</p>
                </div>
                <div className="gap-4 text-[#ADAAD2] font-semibold flex items-center">
                  <FaUserCircle className="text-[#887CF2]" />
                  <p>No Chat Message </p>
                </div>
                <div className="gap-4 text-[#ADAAD2] font-semibold  flex items-center">
                  <FaUserCircle className="text-[#887CF2]" />
                  <p>No Chat Message </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
