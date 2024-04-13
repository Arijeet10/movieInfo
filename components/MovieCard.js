"use client";

import { useRouter } from "next/navigation";


const MovieCard = ({movie}) => {
    //console.log(movie)

    const router=useRouter();

    return ( 
        <>
            <img 
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt="movie banner"
                className="object-cover w-[300px] rounded-md"
                onClick={()=>router.push(`/moviedetails/${movie.id}`)}
            />
        </>
     );
}
 
export default MovieCard;