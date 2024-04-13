"use client";

import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaGripLines } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [slider, setSlider] = useState(false);

  return (
    <>
      <div className="p-2 flex justify-between sm:grid sm:grid-cols-12 items-center shadow-md dark:bg-black dark:text-white">
        <div className="sm:col-span-7 font-bold">MovieInfo</div>
        <div className="sm:col-span-5 flex items-center justify-between sm:gap-0 gap-4 font-medium">
          <div className="w-20 sm:w-auto flex items-center justify-between border border-black dark:border-slate-50 dark:bg-white dark:text-black rounded-sm p-2">
            <input
              placeholder="search movies"
              className="  focus:outline-none font-normal w-full "
            />
            <CiSearch className="dark:text-black hover:cursor-pointer" />
          </div>
            {/* Mobile View */}
          <div className="sm:hidden">
            {slider ? (
              <>
                <MdClose onClick={() => setSlider(false)} />
                <div className="absolute top-[58px] right-0 w-20  flex flex-col border dark:border-black bg-white z-50 shadow-sm dark:bg-black dark:text-white  ">
                  <div className="p-2 flex items-center gap-1">
                    <>
                      {darkMode ? (
                        <CiLight
                          onClick={() => setDarkMode(false)}
                          className="sm:hidden"
                        />
                      ) : (
                        <CiDark
                          onClick={() => setDarkMode(true)}
                          className="sm:hidden"
                        />
                      )}
                    </>
                    <>{darkMode ? "Dark" : "Light"}</>
                  </div>
                  <div className="border-t w-full" />
                  <div className=" p-2">Login</div>
                </div>
              </>
            ) : (
              <FaGripLines onClick={() => setSlider(true)} />
            )}
          </div>
            {/* Desktop View */}
          <>
            {darkMode ? (
              <CiLight
                onClick={() => setDarkMode(false)}
                className="sm:block hidden"
              />
            ) : (
              <CiDark
                onClick={() => setDarkMode(true)}
                className="sm:block hidden"
              />
            )}
          </>
          <div className="sm:block hidden">Login</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;