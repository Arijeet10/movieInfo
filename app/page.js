"use client";


import HeroSection from "@/components/HeroSection";
import MovieGenreList from "@/components/MovieGenreList";
import Navbar from "@/components/Navbar";
import DarkModeContext from "@/context/DarkModeContext";
import { useContext } from "react";

const Home = () => {
  //const [darkMode,setDarkMode]=useState(false);

  const {darkMode}=useContext(DarkModeContext);

  return ( 
    <>
      <div className={`${darkMode && 'dark'} h-full w-full `}>
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