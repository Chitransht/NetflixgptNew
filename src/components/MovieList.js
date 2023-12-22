import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css"

const MovieList = ({ title, movies }) => {
  return (
    <div className=" text-white cont pb-5">
      <h1 className="text-lg md:text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-auto ">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
