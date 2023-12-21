import React from "react";
import { IMG_CDN_IMG } from "../utils/Constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-[200px] pr-4">
      <img src={IMG_CDN_IMG + posterPath} alt="img" />
    </div>
  );
};

export default MovieCard;
