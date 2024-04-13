"use client";

import { getAPIData } from "@/libs/request";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


const MovieLists = ({genreID}) => {

    const [movieLists,setMovieLists]=useState();

    useEffect(() => {
        if(genreID){
            const subURL=`/discover/movie?with_genres=${genreID}`
            ;(async function apiCall(){
              const res=await getAPIData(subURL);
              if(res){
                //     console.log(genreID);
                //   console.log(res.results);
                  setMovieLists(res.results);
              }
            })();
        }
    }, [genreID])
    

    return ( 
        <>
            <div className="flex items-center gap-4 overflow-scroll hide-scrollbar">
                {movieLists && movieLists.map((item,i)=>{
                    return <>
                        <MovieCard key={i} movie={item}  />
                    </>
                })}
            </div>
        </>
     );
}
 
export default MovieLists;