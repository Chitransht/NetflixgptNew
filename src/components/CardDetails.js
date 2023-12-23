import React from "react";
import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import { IMG_CDN_IMG } from "../utils/Constant";

const CardDetails = () => {
  const { resId } = useParams();
  console.log(resId);
  const MovieDetails = useMovieDetails(resId);
  if (MovieDetails === null) return;
  console.log(MovieDetails);

  return (
    <div className=" h-screen  bg-black bg-opacity-80 text-white">
      <div>
        <img
          className=" absolute h-screen object-cover w-[100%] -z-40 bg-gradient-to-t from-black"
          src={IMG_CDN_IMG + MovieDetails.backdrop_path}
          alt="detailslogo"
        />
      </div>
      <div className="pt-[18%] pl-[10%]">
        <h1 className="text-4xl ">{MovieDetails.title}</h1>
        <p className="py-6 w-1/2">{MovieDetails.overview}</p>
        <p className="py-6 w-1/2">Rating : {MovieDetails.vote_average}</p>
        <p className="py-6 w-1/2">Release Date : {MovieDetails.release_date}</p>
      </div>
    </div>
  );
};

export default CardDetails;
