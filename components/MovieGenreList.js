"use client";

import { getAPIData } from "@/libs/request";
import { useEffect, useState } from "react";
import MovieLists from "./MovieLists";
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";



const MovieGenreList = () => {
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(false);
  const [pagination,setPagination]=useState([]);

  //update pagination state for specific genre
  const updatePagination=(genreId,page)=>{
    setPagination(prevPagination=>prevPagination.map(item=>item.genreId===genreId?{...item,page}:item))
  }

  //go to previous page
  const showPrevPage=(id)=>{
    const newPage=pagination.find(item=>item.genreId===id).page-1;
    if(newPage>=1){
      updatePagination(id,newPage)
    }
  }

  //go to next page
  const showNextPage=(id)=>{
    const newPage=pagination.find(item=>item.genreId===id).page+1;
    updatePagination(id,newPage)
  }



  // useEffect(() => {
  //   console.log(pagination)
  // }, [pagination])
  
  


  //get movie genre list
  useEffect(() => {
    const subURL = "/genre/movie/list";
    (async function apiCall() {
      try {
        setLoading(true);
        setError(false);
        const res = await getAPIData(subURL);
        if (res) {
          //console.log(res.genres);
          res.genres.map(item=>{
          setPagination((pagination)=>[...pagination,{
          genreId:item.id,
          genreName:item.name,
          page:1,
        }])
          })
          //setGenre(res.genres);
        }
      } catch (error) {
        console.log(error);
        setError(true);
      }finally{
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <div className=" dark:bg-black dark:text-white">
      {loading && <div className="dark:bg-black dark:text-white">Loading Genres...</div>}
      {error?(<div className="dark:bg-black dark:text-white">Sorry, something went wrong in loading movie genres.</div>):(
        <>
        {pagination &&
          pagination.map((item, i) => {
            return (
              <div key={i} className="p-4">
                <div className="flex items-center justify-between font-medium  dark:text-white">
                  <div className="text-xl ">{item.genreName}</div>
                  <div className="flex items-center justify-center gap-2">
                  <div className="p-2 rounded-full hover:bg-slate-100 dark:hover:text-black">
                    <FaCaretLeft onClick={()=>showPrevPage(item.genreId)} className="w-5 h-5 cursor-pointer" />
                    </div>
                    Page {item.page}
                    <div className="p-2 rounded-full hover:bg-slate-100 dark:hover:text-black">
                    <FaCaretRight onClick={()=>showNextPage(item.genreId)} className="w-5 h-5 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="py-2">
                  <MovieLists key={i} page={item.page} genreID={item.genreId} />
                </div>
              </div>
            );
          })}
        </>
      )}
      </div>
    </>
  );
};

export default MovieGenreList;
