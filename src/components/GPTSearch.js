import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_LOGO } from "../utils/Constant";
import "../components/MovieList.css"

const GPTSearch = () => {
  return (
    <div className="">
      <div className="fixed -z-10 cont">
        <img
          src={BG_LOGO}
          alt="bg-logo"
          className="h-screen object-cover md:h-[100%]"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
