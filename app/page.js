"use client";


import HeroSection from "@/components/HeroSection";
import MovieGenre from "@/components/MovieGenre";
import MovieGenreList from "@/components/MovieGenreList";
import Navbar from "@/components/Navbar";
import DarkModeContext from "@/context/DarkModeContext";
import { useState,useContext } from "react";

const Home = () => {
  //const [darkMode,setDarkMode]=useState(false);

  const {darkMode}=useContext(DarkModeContext);

  return ( 
    <>
      <div className={`${darkMode && 'dark'}  `}>
      <Navbar />
        <div>
          <HeroSection />
        </div>
        <div>
          <MovieGenreList />
        </div>
      </div>
    </>
   );
}
 
export default Home;