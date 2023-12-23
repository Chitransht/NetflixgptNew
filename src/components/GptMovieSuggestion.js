import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useParams } from "react-router-dom";

const GptMovieSuggestion = () => {
  const { movieName, MovieResult } = useSelector((store) => store.gpt);
  const movie = useParams();
  console.log(movie);
  if (!movieName) return;
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90 overflow-x-hidden">
      {movieName.map((movieName, index) => (
        <MovieList
          title={movieName}
          movies={MovieResult[index]}
          key={movieName}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
