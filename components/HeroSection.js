"use client";

import { IoPlay } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getAPIData } from "@/libs/request";
import { useRouter } from "next/navigation";

const HeroSection = () => {

  const router=useRouter();

  const [movieData, setMovieData] = useState();
  const [popularMovie, setPopularMovie] = useState();



//get popular movies detail from api
  useEffect(() => {
    const subURL="/movie/popular"
    ;(async function apiCall(){
      try {
        const res=await getAPIData(subURL)
        if(res){
          setMovieData(res.results)
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [])
  

  //set random popular movie
  useEffect(() => {
    //console.log(movieData);
    if (movieData) {
      const randomNo = Math.floor(Math.random() * 20);
      setPopularMovie(movieData[randomNo]);
    }
  }, [movieData]);

  // useEffect(() => {
  //   console.log(popularMovie);
  // }, [popularMovie]);

  return (
    <>
      <div
        className={`pb-16 px-8 relative h-screen  text-white flex flex-col items-start justify-end gap-8`}
      >
        <img 
            src={`https://image.tmdb.org/t/p/original${popularMovie?.backdrop_path}`}
            alt="movie banner"
            className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
        <div className="text-4xl font-bold z-50">{popularMovie?.title}</div>
        <div className="font-medium z-50 shadow-2xl">{popularMovie?.overview}</div>
        <div className="flex items-center gap-4 z-50 font-medium">
          <button className="p-2 flex items-center gap-1 border rounded-md bg-white text-black dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">
            <>
              <IoPlay />
            </>
            Play Now
          </button>
          <button onClick={()=>router.push(`/moviedetails/${popularMovie?.id}`)} className="p-2 flex items-center gap-1 border rounded-md bg-white text-black dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">
            <>
              <FaInfo />
            </>
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
