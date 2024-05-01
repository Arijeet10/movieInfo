"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaGripLines } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import DarkModeContext from "@/context/DarkModeContext";
import SearchContext from "@/context/SearchContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [slider, setSlider] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const { search, setSearch } = useContext(SearchContext);
  const [showSearch, setShowSearch] = useState(false);

  //while user is typing movies name
  const handleSearch = (e) => {
    setSearch(e.target.value);
    router.push("/searchresults");
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div
        className={`p-2 fixed w-full top-0 z-50 shadow-sm bg-gradient-to-b from-slate-50 from-[30%] to-transparent  flex justify-between sm:grid sm:grid-cols-12 items-center dark:bg-gradient-to-b dark:from-black dark:from-[30%] dark:to-transparent dark:text-white`}
      >
        <div className="sm:col-span-5 font-bold uppercase text-2xl text-red-600 ">
          MovieInfo
        </div>
        <div className="sm:col-span-7 flex items-center justify-end sm:gap-6 gap-4 font-medium">
          <div
            className={`p-2 w-[137px] sm:w-auto flex items-center justify-between shadow-sm  ${
              showSearch && "rounded-md  bg-white dark:bg-white dark:text-black"
            }  transition ease-in-out delay-150`}
          >
            <div className={`${showSearch ? "block" : "hidden"}`}>
              <input
                placeholder="search movies"
                className={`focus:outline-none font-normal w-full `}
                value={search}
                onChange={(e) => handleSearch(e)}
              />
            </div>
            <div
              className={`p-2 hover:rounded-full hover:bg-slate-100 ${
                showSearch ? "block" : "hidden"
              }`}
            >
              <MdClose
                onClick={() => setShowSearch(false)}
                className={`w-5 h-5 text-slate-800  `}
              />
            </div>
            <div className="p-2 hover:rounded-full hover:bg-slate-100 dark:hover:text-black ">
              {showSearch ? (
                <CiSearch
                  onClick={() => setShowSearch(true)}
                  className="w-5 h-5 dark:text-black cursor-pointer "
                />
              ) : (
                <CiSearch
                  onClick={() => setShowSearch(true)}
                  className="w-5 h-5  cursor-pointer "
                />
              )}
            </div>
          </div>
          {/* Mobile View */}
          <div className="sm:hidden">
            {slider ? (
              <>
                <div className="p-2 rounded-full hover:bg-slate-100 hover:text-black">
                <MdClose onClick={() => setSlider(false)} />
                </div>
                <div
                  onClick={() => setSlider(!slider)}
                  className="p-2 absolute z-50 top-[70px] right-3 w-40 shadow-lg  flex flex-col gap-2 rounded-md dark:border-black bg-white  dark:bg-black dark:text-white "
                >
                  <div
                    onClick={() => setDarkMode(!darkMode)}
                    className="px-2 py-1 flex items-center gap-1 rounded-md hover:bg-red-600 hover:text-white cursor-pointer"
                  >
                    <>
                      {darkMode ? (
                        <CiLight className="sm:hidden w-5 h-5" />
                      ) : (
                        <CiDark className="sm:hidden w-5 h-5" />
                      )}
                    </>
                    <>{darkMode ? "Light" : "Dark"}</>
                  </div>
                  <Link
                    href="/"
                    className=" px-2 py-1 rounded-md hover:bg-red-600 hover:text-white "
                  >
                    Home
                  </Link>
                  <div
                    onClick={() => router.push("/login")}
                    className=" px-2 py-1 rounded-md hover:bg-red-600 hover:text-white cursor-pointer "
                  >
                    Signin
                  </div>
                </div>
              </>
            ) : (
              <div className="p-2 rounded-full hover:bg-slate-100 hover:text-black">
              <FaGripLines onClick={() => setSlider(true)} />
              </div>
            )}
          </div>
          {/* Desktop View */}
          <div className="hidden sm:block p-2 hover:bg-slate-100 hover:rounded-full">
            {darkMode ? (
              <CiLight
                onClick={() => setDarkMode(false)}
                className="sm:block hidden w-5 h-5  hover:text-black"
              />
            ) : (
              <CiDark
                onClick={() => setDarkMode(true)}
                className="sm:block hidden w-5 h-5 hover:text-black"
              />
            )}
          </div>
          <Link
            href="/"
            className="sm:block hidden hover:bg-red-700 hover:text-white rounded-md px-4 py-1"
          >
            Home
          </Link>
          <div
            onClick={() => router.push("/login")}
            className="sm:block hidden cursor-pointer rounded-md text-white bg-red-600 hover:bg-red-700 px-4 py-1 text-nowrap"
          >
            Sign in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
