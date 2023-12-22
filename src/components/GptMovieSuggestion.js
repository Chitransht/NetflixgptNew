import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieName, MovieResult } = useSelector((store) => store.gpt);
  if (!movieName) return;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      {movieName.map((movieName, index) => (
        <MovieList
          title={movieName}
          key={movieName}
          movies={MovieResult[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
