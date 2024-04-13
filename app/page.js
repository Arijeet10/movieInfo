"use client";


import HeroSection from "@/components/HeroSection";
import MovieGenre from "@/components/MovieGenre";
import Navbar from "@/components/Navbar";
import { useState } from "react";

const Home = () => {
  const [darkMode,setDarkMode]=useState(false);

  return ( 
    <>
      <div className={`${darkMode && 'dark'} `}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div>
          <HeroSection />
        </div>
        <div>
          <MovieGenre />
        </div>
      </div>
    </>
   );
}
 
export default Home;