import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    (movies.nowPlayingMovies ||
      movies.nowPlayingMovies ||
      movies.UpcomingMovies ||
      movies.TopratedMovies) && (
      <div className="bg-black">
        <div className=" -mt-[300px] pl-12 relative z-50">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MovieList title={"Popular Movies"} movies={movies?.PopularMovies} />
          <MovieList title={"Upcoming"} movies={movies?.UpcomingMovies} />
          <MovieList title={"Top Rated"} movies={movies?.TopratedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
