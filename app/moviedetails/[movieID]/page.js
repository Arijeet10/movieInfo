"use client";

import Navbar from "@/components/Navbar";
import DarkModeContext from "@/context/DarkModeContext";
import { getAPIData } from "@/libs/request";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const MovieDetails = ({ params }) => {
  const router = useRouter();
  const { darkMode } = useContext(DarkModeContext);
  const [movie, setMovie] = useState();
  //console.log(params)
  const { movieID } = params;
  //console.log(movieID)

  //get movie details
  useEffect(() => {
    const subURL = `/movie/${movieID}`;
    (async function apiCall() {
      try {
        const res = await getAPIData(subURL);
        if (res) {
          //console.log(res);
          setMovie(res);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieID]);

  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <Navbar />
        <div className="p-2 dark:bg-black dark:text-white">
          <div className="py-2 flex justify-end ">
            <button
              onClick={() => router.push("/")}
              className="border px-6 py-2 rounded-sm font-medium dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white"
            >
              Back
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <img
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt="movie banner"
              className="rounded-sm"
            />
            <div className="text-3xl font-bold">{movie?.title}</div>
            <div className="font-medium">{movie?.overview}</div>
            <div className="font-medium ">
              Release Status:{" "}
              <span
                className={`font-semibold ${
                  movie?.status == "Released" && "text-green-700 dark:text-green-500"
                } text-slate-400`}
              >
                {movie?.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
