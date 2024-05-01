"use client";

import { useState,useContext } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { FaGripLines } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import DarkModeContext from "@/context/DarkModeContext";
import SearchContext from "@/context/SearchContext";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const router=useRouter();
  const [slider, setSlider] = useState(false);
  const {darkMode,setDarkMode}=useContext(DarkModeContext);
  const {search,setSearch}=useContext(SearchContext);

  //while user is typing movies name
  const handleSearch=(e)=>{
      setSearch(e.target.value)
      router.push("/searchresults")
  }



  return (
    <div className={`${darkMode && "dark"}`}>
      <div className={`p-2 fixed w-full top-0 z-50 bg-gradient-to-b from-slate-50 from-[30%] to-transparent  flex justify-between sm:grid sm:grid-cols-12 items-center dark:bg-gradient-to-b dark:from-black dark:from-[30%] dark:to-transparent dark:text-white`}>
        <div className="sm:col-span-5 font-bold uppercase text-2xl text-red-600">MovieInfo</div>
        <div className="sm:col-span-7 flex items-center justify-end sm:gap-6 gap-4 font-medium">
          <div className="w-[150px] sm:w-auto flex items-center justify-between border rounded-md shadow-sm bg-white dark:border-slate-50 dark:bg-white dark:text-black p-2">
            <input
              placeholder="search movies"
              className="  focus:outline-none font-normal w-full "
              value={search}
              onChange={(e)=>handleSearch(e)}
            />
            <CiSearch  className="p-2 w-10 h-8 md:w-10 md:h-9 lg:w-10 lg:h-10 sm:w-10 sm:h-8 dark:text-black cursor-pointer hover:rounded-full hover:bg-slate-100" />
          </div>
            {/* Mobile View */}
          <div className="sm:hidden">
            {slider ? (
              <>
                <MdClose onClick={() => setSlider(false)} />
                <div onClick={()=>setSlider(!slider)} className="p-2 absolute top-[60px] right-2 w-40  flex flex-col rounded-md dark:border-black bg-white z-50 shadow-sm dark:bg-black dark:text-white  ">
                  <div onClick={()=>setDarkMode(!darkMode)} className="px-2 py-1 flex items-center gap-1 rounded-md hover:bg-red-600 hover:text-white cursor-pointer">
                    <>
                      {darkMode ? (
                        <CiLight
                          className="sm:hidden w-5 h-5"
                        />
                      ) : (
                        <CiDark
                          className="sm:hidden w-5 h-5"
                        />
                      )}
                    </>
                    <>{darkMode ? "Light" : "Dark"}</>
                  </div>
                  <Link href="/" className=" px-2 py-1 rounded-md hover:bg-red-600 hover:text-white ">Home</Link>
                  <div onClick={()=>router.push("/login")} className=" px-2 py-1 rounded-md hover:bg-red-600 hover:text-white cursor-pointer ">Signin</div>
                </div>
              </>
            ) : (
              <FaGripLines onClick={() => setSlider(true)} />
            )}
          </div>
            {/* Desktop View */}
          <div className="p-2 hover:bg-slate-100 hover:rounded-full">
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
          <Link href="/" className="sm:block hidden hover:bg-red-700 hover:text-white rounded-md px-4 py-1">Home</Link>
          <div onClick={()=>router.push("/login")} className="sm:block hidden cursor-pointer rounded-md text-white bg-red-600 hover:bg-red-700 px-4 py-1 text-nowrap">Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
