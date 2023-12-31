import React from "react";
import { useSelector } from "react-redux";
import useMoviesTrailer from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  useMoviesTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  return (
    <div className=" ">
      <iframe
        className="w-[100%] aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
