"use client";

import { getAPIData } from "@/libs/request";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";



const WatchTrailer = ({movieID,setTrailer}) => {

    const [trailerKey,setTrailerKey]=useState("");

    //get trailer video details of particular movie
    useEffect(() => {
      const subURL=`/movie/${movieID}/videos`
      ;(async function apiCall(){
        try {
            const res=await getAPIData(subURL);
            if(res){
                //console.log(res);
                const index=res.results.findIndex((video)=>video.type=="Trailer")
                setTrailerKey(res.results[index].key);
            }
        } catch (error) {
            console.log(error);
        }
      })();
    }, [])
    


    return ( 
        <>
            <div className="darken-background z-50" />
            <div className="fixed w-full h-2/4 sm:w-[600px] sm:h-[400px] top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] rounded-md z-50 shadow-lg">
                <div className="relative w-full h-full">
                <MdClose
                    onClick={()=>setTrailer(false)}
                    className="absolute top-0 right-0 z-50 shadow-md text-black bg-white hover:bg-red-500 hover:text-white w-8 h-8 p-2 rounded-full"
                />
                <iframe 
                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1`}
                    allowFullScreen
                    className="w-full h-full rounded-md"
                />
                </div>
            </div>
        </>
     );
}
 
export default WatchTrailer;