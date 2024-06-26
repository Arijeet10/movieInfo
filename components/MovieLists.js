"use client";

import { getAPIData } from "@/libs/request";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";


const MovieLists = ({ genreID,page }) => {
  const [movieLists, setMovieLists] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [page,setPage]=useState(1);

  // const loadMovies=()=>{
  //   setPage(page+1);

  // }


  useEffect(() => {
    if (genreID) {
      const subURL = `/discover/movie?with_genres=${genreID}&page=${page}`;
      (async function apiCall() {
        try {
          setLoading(true);
          setError(false);
          const res = await getAPIData(subURL);
          if (res) {
            //     console.log(genreID);
            //   console.log(res.results);
            setMovieLists(res.results);
          }
        } catch (error) {
          console.log(error);
          setError(true);
        } finally {
          setLoading(false);
        }
      })();
    }  }, [genreID,page]);

  return (
    <>
      <div className="flex items-center gap-4 overflow-scroll hide-scrollbar">
        {loading && (
          <div className="dark:bg-black dark:text-white">Loading movies...</div>
        )}
        {error ? (
          <div className="dark:bg-black dark:text-white">
            Sorry, something went wrong.
          </div>
        ) : (
          <>
            {movieLists &&
              movieLists.map((item, i) => {
                return (
                  <>
                    <MovieCard key={i} movie={item} />
                  </>
                );
              })}
          </>
        )}
      </div>
    </>
  );
};

export default MovieLists;
