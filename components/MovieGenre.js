"use client";

import { getAPIData } from "@/libs/request";
import { useEffect, useState } from "react";

const MovieGenre = () => {

    const [genre,setGenre]=useState();

    //get movie genre list
    useEffect(() => {
        const subURL="/genre/movie/list"
      ;(async function apiCall(){
        try {
            const res=await getAPIData(subURL);
            if(res){
                console.log(res.genres[2].id);
                setGenre(res.genres);
            }
        } catch (error) {
            console.log(error);
        }
      })();
    }, [])

    useEffect(() => {
        if(genre){
            const subURL=`/discover/movie?with_genres=${genre[2]?.id}`
            ;(async function apiCall(){
              const res=await getAPIData(subURL);
              if(res){
                  console.log(res);
              }
            })();
        }
    }, [genre])
    
    

    return ( 
        <>
            <div className="dark:bg-black dark:text-white">
                <div className="flex items-center justify-between font-medium  dark:text-white">
                    <div className="text-xl ">Action</div>
                    <div className="hover:border-b hover:border-black dark:hover:border-white hover:cursor-pointer">View all</div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
     );
}
 
export default MovieGenre;