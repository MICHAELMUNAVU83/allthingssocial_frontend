import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { PiHashFill } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
const Discovery = () => {
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
        <div className="flex justify-between items-center">
          <p className="text-[#887CF2] font-bold text-xl">Discovery</p>

          <div className="bg-[#E0DDFF] p-2 flex justify-center gap-2 items-center rounded-md">
            <div className="flex gap-2 bg-white px-2 rounded-md items-center">
              <BiMessageRounded className="text-[#887CF2]" />
              <p className="text-[#887CF2]">Chat</p>
            </div>

            <div className="flex gap-2 px-2 rounded-md items-center">
              <BiMessageRounded className="text-[#887CF2]" />
              <p className="text-[#887CF2]">Chat</p>
            </div>

            <div className="flex gap-2  px-2 rounded-md items-center">
              <BiMessageRounded className="text-[#887CF2]" />
              <p className="text-[#887CF2]">Chat</p>
            </div>
          </div>

          <div className="bg-[#887CF2] p-2 flex justify-center  items-center rounded-md">
            <BiMessageRounded className="text-white" />
          </div>
        </div>
        <div className="bg-white min-h-[50vh] shadow-md rounded-xl p-4 shadow-gray-300">
          <div className="flex justify-between items-center">
            <div className="py-5 w-[50%]">
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
                  placeholder="Search For an Influencer by Name"
                />
              </div>
            </div>
            <div className="w-[20%]">
              <select className="border-2 border-gray-300 rounded-md w-[100%] text-[#808AA2] font-bold  h-[50px] px-8 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                <option value="All">Filter by NIche </option>
              </select>
            </div>
          </div>
          <table class="table-auto w-full text-center  overflow-auto">
            <thead className="text-[#595959] border-b-[1px] border-t-[1px] border-[#595959]/80 py-2 text-xs text-center font-bold uppercase">
              <tr>
                <th className="py-2">Influencer</th>
                <th className="py-2">Followers</th>
                <th className="py-2">Post</th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td>
                  <div className="flex justify-center items-center gap-2">
                    <img
                      src="/instagram.jpg"
                      className="w-[30px] object-cover rounded-full h-[30px]"
                    />
                    <div className="flex items-start flex-col">
                      <p>
                        <span className="font-bold">Instagram</span> - 1.2M
                      </p>
                      <p className="text-[#595959] text-xs">Fashion</p>
                    </div>
                  </div>
                </td>
                <td>5.6 M</td>
                <td>10</td>
                <td>
                  <button className="bg-gradient-to-r cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 from-purple-400 to-pink-600 text-white px-2 py-1 rounded-md">
                    Save to Board
                  </button>
                </td>
                <td>5.6 M</td>
                <td>5.6 M</td>
              </tr>
              <tr>
                <td>Witchy Woman</td>
                <td>The Sliding</td>
                <td>The Eagles</td>
                <td>1972</td>
              </tr>
              <tr>
                <td>Shining Star</td>
                <td>Earth, Wind, and Fire</td>
                <td>The Sliding</td>
                <td>1975</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
