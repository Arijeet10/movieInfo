"use client";

import MovieCard from "@/components/MovieCard";
import DarkModeContext from "@/context/DarkModeContext";
import SearchContext from "@/context/SearchContext";
import { getAPIData } from "@/libs/request";
import { useContext, useEffect, useState } from "react";

const SearchResults = () => {

    const {darkMode}=useContext(DarkModeContext);
    const {search}=useContext(SearchContext);
    const [searchResults,setSearchResults]=useState();

    useEffect(() => {
      const subURL=`/search/movie?query=${search}`;
      (async function apiCall(){
        try {
           const res=await getAPIData(subURL);
           if(res){
            //console.log(res.results);
            setSearchResults(res.results);
           } 
        } catch (error) {
            console.log(error);
        }
      })();
    }, [search])
    


    return ( 
        <>

            <div className={`${darkMode && "dark"} h-full `}>
            <div className="dark:bg-black pt-16">
                {searchResults?.length==0 && <div className="h-screen text-2xl font-semibold dark:text-white dark:bg-black">No Search Results Found</div>}
                <div className="p-4 grid justify-center items-center gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 dark:bg-black dark:text-white">
                    {searchResults && searchResults.map((item,i)=>{
                        return <>
                            <MovieCard key={i} movie={item} />
                        </>
                    })}
                </div>
                </div>
            </div>
        </>
     );
}
 
export default SearchResults;