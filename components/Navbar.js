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
      <div className={`p-2  flex justify-between sm:grid sm:grid-cols-12 items-center shadow-md dark:bg-black dark:text-white`}>
        <div className="sm:col-span-5 font-bold uppercase text-2xl">MovieInfo</div>
        <div className="sm:col-span-7 flex items-center justify-end sm:gap-6 gap-4 font-medium">
          <div className="w-20 sm:w-auto flex items-center justify-between border rounded-md shadow-sm dark:border-slate-50 dark:bg-white dark:text-black p-2">
            <input
              placeholder="search movies"
              className="  focus:outline-none font-normal w-full "
              value={search}
              onChange={(e)=>handleSearch(e)}
            />
            <CiSearch  className="dark:text-black hover:cursor-pointer" />
          </div>
            {/* Mobile View */}
          <div className="sm:hidden">
            {slider ? (
              <>
                <MdClose onClick={() => setSlider(false)} />
                <div onClick={()=>setSlider(!slider)} className="p-2 absolute top-[60px] right-2 w-40  flex flex-col rounded-md dark:border-black bg-white z-50 shadow-sm dark:bg-black dark:text-white  ">
                  <div className="px-2 py-1 flex items-center gap-1 rounded-md hover:bg-red-600 hover:text-white cursor-pointer">
                    <>
                      {darkMode ? (
                        <CiLight
                          onClick={() => setDarkMode(false)}
                          className="sm:hidden w-5 h-5"
                        />
                      ) : (
                        <CiDark
                          onClick={() => setDarkMode(true)}
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
          <Link href="/" className="sm:block hidden">Home</Link>
          <div onClick={()=>router.push("/login")} className="sm:block hidden cursor-pointer rounded-md text-white bg-red-600 px-4 py-1 text-nowrap">Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
