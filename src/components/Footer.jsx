import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F2EDF9] w-[100%] ">
      <div className="h-[200px]  bg-white/80 w-[400px] mx-auto rounded-b-full flex justify-between items-center" />

      <div className="w-[80%] text-gray-600 flex justify-center items-center gap-4 mx-auto">
        <div className="w-[30%] flex justify-center items-center flex-col gap-2">
          <p className="text-[#595959] text-xl font-bold mt-4">About Us</p>
          <div className="flex flex-col gap-1">
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
          </div>
        </div>
        <div className="w-[30%] flex justify-center items-center flex-col gap-2">
          <p className="text-[#595959] text-xl font-bold mt-4">About Us</p>
          <div className="flex flex-col gap-1">
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
          </div>
        </div>
        <div className="w-[30%] flex justify-center items-center flex-col gap-2">
          <p className="text-[#595959] text-xl font-bold mt-4">About Us</p>
          <div className="flex flex-col gap-1">
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
            <p>
              <a href="#">About Us</a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[80%] py-4 text-[#595959] flex flex-col  gap-1 mx-auto">
        <p>© 2023 AllThingsSocial Marketing . All rights reserved.</p>
        <p>Privacy Policy • Terms and Conditions • Cookie Policy</p>
      </div>
    </div>
  );
};

export default Footer;
