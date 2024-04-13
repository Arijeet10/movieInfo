"use client";

import { getAPIData } from "@/libs/request";
import { useEffect, useState } from "react";
import MovieLists from "./MovieLists";

const MovieGenreList = () => {
  const [genre, setGenre] = useState();
  //get movie genre list
  useEffect(() => {
    const subURL = "/genre/movie/list";
    (async function apiCall() {
      try {
        const res = await getAPIData(subURL);
        if (res) {
          //console.log(res.genres);
          setGenre(res.genres);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <div className=" dark:bg-black dark:text-white">
        {genre &&
          genre.map((item, i) => {
            return (
              <div className="p-4">
                <div className="flex items-center justify-between font-medium  dark:text-white">
                  <div className="text-xl ">{item.name}</div>
                  <div className="hover:border-b hover:border-black dark:hover:border-white hover:cursor-pointer">
                    View all
                  </div>
                </div>
                <div className="py-2">
                  <MovieLists genreID={item.id} />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default MovieGenreList;
