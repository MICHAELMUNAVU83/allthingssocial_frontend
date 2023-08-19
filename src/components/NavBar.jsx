import React, { useState, useEffect } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("gray-600");

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 80) {
        setColor("white");
        setTextColor("gray-600");
      } else {
        setColor("transparent");
        setTextColor("gray-600");
      }
    };
    window.addEventListener("scroll", changeBackground);
  }, []);

  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 ">
        <a>
          <h1
            style={{ color: `${textColor}` }}
            className="
             dancing text-2xl "
          >
            AllthingsSocial
          </h1>
        </a>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden uppercase text-[#595959] font-bold sm:flex items-center"
        >
          <a>
            <li className="p-4">Brands</li>
          </a>
          <a>
            <li className="p-4">Influencers</li>
          </a>
          <a>
            <li className="p-4">Pricing</li>
          </a>
          <a>
            <li className="p-2 bg-white shadow-md shadow-gray-300 rounded-md">
              Join Now
            </li>
          </a>
        </ul>

        {/*Mobile button /> */}
        <div className="sm:hidden block z-10">
          {nav ? (
            <AiOutlineClose
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          ) : (
            <AiOutlineMenu
              className="text-4xl"
              onClick={toggleNav}
              style={{ color: `${textColor}` }}
            />
          )}
        </div>
        {/*Mobile menu /> */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center  w-full h-screen bg-white/80 text-gray-600 duration-300 ease-in-out"
              : "sm:hidden absolute top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen bg-white/80 text-gray-600 duration-300 ease-in-out"
          }
        >
          <ul onClick={toggleNav} className="text-center text-xl">
            <a>
              <li className="p-4">Brands</li>
            </a>
            <a>
              <li className="p-4">Influencers</li>
            </a>
            <a>
              <li className="p-4">Pricing</li>
            </a>
            <a>
              <li className="p-2 bg-white shadow-md shadow-gray-300 rounded-md">
                Join Now
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
