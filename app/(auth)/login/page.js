"use client";

import DarkModeContext from "@/context/DarkModeContext";
import { useContext } from "react";

const Login = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <div className=" pt-16 h-full dark:bg-black dark:text-white ">

          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('/background.jpg')] bg-no-repeat " />

          {/* Signin Form */}
          <div className="     bg-[rgba(0,0,0,0.9)] p-4 w-[250px] sm:w-[500px] rounded-md  fixed mt-16 top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] ">
            <div className="py-2 font-bold text-3xl text-white">Sign In</div>

            <div className="py-4">
              <div className="my-2 border rounded-sm ">
                <input
                  type="text"
                  placeholder="Email or mobile number"
                  className="px-4 py-2 w-full focus:outline-none rounded-sm bg-inherit text-white"
                />
              </div>

              <div className="my-2 border rounded-sm ">
                <input
                  type="text"
                  placeholder="Password"
                  className="px-4 py-2 w-full focus:outline-none rounded-sm bg-inherit text-white"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 ">
              <button className="px-4 py-2 rounded-sm text-white font-medium bg-red-600 hover:bg-red-700 ">
                Sign in
              </button>
              <div className="text-slate-400 text-center">OR</div>
              <button className="px-4 py-2 rounded-sm text-white font-medium bg-[rgba(191,191,191,1)] hover:bg-slate-400 text-nowrap">
                Use a Sign-In Code
              </button>
              <div className="text-center">
                <span className="hover:border-b hover:border-slate-400 text-slate-400 cursor-pointer">
                  Forgot password?
                </span>
              </div>
            </div>

            <div className="py-2 text-slate-400 ">
              New Here?{" "}
              <span className="font-medium cursor-pointer text-white hover:border-b hover:border-white">
                Sign up now.
              </span>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default Login;
