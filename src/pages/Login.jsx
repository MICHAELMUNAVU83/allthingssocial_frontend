import React from "react";
import { BsSend } from "react-icons/bs";

const Login = () => {
  return (
    <div className="flex md:gap-40 md:flex-row flex-col gap-4 bg-white items-center md:h-[100vh]">
      <div className="md:w-[40%] h-[50vh] w-[100%] md:h-[100vh]">
        <img
          src="/login.png"
          className="w-[100%] h-[100%] object-cover"
          alt="login"
        />
      </div>

      <div className="flex   gap-2 flex-col">
        <h1 className="font-extrabold text-transparent text-3xl  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          All Things Social
        </h1>
        <p className="font-semibold">Login</p>

        <input
          type="text"
          placeholder="Email"
          className="w-[350px] h-[60px] border-2 my-2 border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Password"
          className="w-[350px] h-[60px] border-2 my-2 border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />

        <div className="bg-[#887CF2] cursor-pointer hover:scale-105 transition-all ease-in-out duration-500 h-[60px] w-[350px] flex justify-center items-center gap-2 text-white rounded-xl">
          <p>Log In</p>
          <BsSend />
        </div>
        <p className="text-gray-600">Forgot Password?</p>
        <p>
          Don't have an account? <span className="text-[#887CF2]">Sign Up</span>
        </p>
        <p className="text-[#887CF2] ">Back to Home</p>
      </div>
    </div>
  );
};

export default Login;
