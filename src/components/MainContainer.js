import React from "react";
import { useSelector } from "react-redux";
import Videotitle from "./Videotitle";
import VideoBackground from "./VideoBackground";
import "./MovieList.css"

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const MainMovies = movies[0];

  const { original_title, overview, id } = MainMovies;
  return (
    <div className="md:pt-0 pt-[35%] bg-black cont">
      <Videotitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
