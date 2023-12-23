import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  return (
    <div className=" text-white cont pb-5">
      <h1 className="text-lg md:text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-auto ">
        <div className="flex cursor-pointer">
          {movies?.map((movie) => (
            <Link to={"/cardlist/" + movie.id} key={movie.id}>
              <MovieCard posterPath={movie?.poster_path} id={movie?.id} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
